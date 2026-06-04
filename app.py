import os
import psycopg2
from flask import send_from_directory, Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# --- ПОДКЛЮЧЕНИЕ К POSTGRESQL ---
# Если мы на Render, берём URL из настроек. Если локально — используем SQLite для тестов
DATABASE_URL = os.environ.get('DATABASE_URL')

if DATABASE_URL and DATABASE_URL.startswith("postgres://"):
    # Автоматически переделываем postgres:// в postgresql:// для совместимости с psycopg2
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)

def get_db_connection():
    if DATABASE_URL:
        # Подключение к Postgres на Render
        conn = psycopg2.connect(DATABASE_URL)
    else:
        # Резервное локальное подключение к SQLite, если запускаешь дома
        import sqlite3
        conn = sqlite3.connect('database.db')
    return conn

# Инициализация таблиц в Postgres
def init_db():
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Синтаксис Postgres (вместо AUTOINCREMENT используется SERIAL)
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            balance REAL DEFAULT 20000.0
        )
    ''')
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS orders (
            id SERIAL PRIMARY KEY,
            username TEXT NOT NULL,
            item_name TEXT NOT NULL,
            price REAL NOT NULL,
            date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS favorites (
            id SERIAL PRIMARY KEY,
            username TEXT NOT NULL,
            item_id INTEGER NOT NULL,
            UNIQUE(username, item_id)
        )
    ''')
    
    conn.commit()
    cursor.close()
    conn.close()

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('.', path)

@app.route('/add_money', methods=['POST'])
def add_money():
    data = request.json
    username = data.get('username')
    amount = data.get('amount', 5000)

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("UPDATE users SET balance = balance + %s WHERE username = %s", (amount, username))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({"success": True, "message": f"Баланс {username} пополнен!"})

@app.route('/buy', methods=['POST'])
def buy():
    data = request.json
    username = data.get('username')
    price = data.get('price')
    item_name = data.get('itemName')

    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute("SELECT balance FROM users WHERE username=%s", (username,))
    user_row = cursor.fetchone()

    if user_row and user_row[0] >= price:
        new_balance = user_row[0] - price
        cursor.execute("UPDATE users SET balance=%s WHERE username=%s", (new_balance, username))
        cursor.execute("INSERT INTO orders (username, item_name, price) VALUES (%s, %s, %s)", 
                       (username, item_name, price))
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({"success": True, "new_balance": new_balance})
    else:
        cursor.close()
        conn.close()
        return jsonify({"error": "Недостаточно средств на балансе или ошибка авторизации"}), 400

@app.route('/get_profile', methods=['GET'])
def get_profile():
    username = request.args.get('username')
    if not username:
        return jsonify({"error": "Юзер не указан"}), 400

    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute("SELECT balance FROM users WHERE username=%s", (username,))
    row = cursor.fetchone()
    
    if row is None:
        cursor.close()
        conn.close()
        return jsonify({"error": "Пользователь не найден"}), 404

    balance = row[0]
    
    cursor.execute("SELECT item_name, price, date FROM orders WHERE username=%s ORDER BY date DESC", (username,))
    orders = [{"name": r[0], "price": r[1], "date": r[2]} for r in cursor.fetchall()]
    
    cursor.close()
    conn.close()
    return jsonify({
        "balance": float(balance),
        "orders": orders
    })

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    
    conn = get_db_connection()
    cursor = conn.cursor()
    try:
        cursor.execute("INSERT INTO users (username, password, balance) VALUES (%s, %s, %s)", (username, password, 20000.0))
        conn.commit()
        return jsonify({"message": "Success"}), 201
    except Exception as e:
        return jsonify({"error": "Пользователь уже существует или ошибка БД"}), 400
    finally:
        cursor.close()
        conn.close()

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE username=%s AND password=%s", (username, password))
    user = cursor.fetchone()
    cursor.close()
    conn.close()
    
    if user:
        return jsonify({"message": "Login successful"}), 200
    else:
        return jsonify({"error": "Неверный логин или пароль"}), 401

if __name__ == '__main__':
    init_db()
    port = int(os.environ.get("PORT", 10000))
    app.run(host='0.0.0.0', port=port)
