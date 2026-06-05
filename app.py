import os
import psycopg2
import traceback
from flask import send_from_directory, Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Флаг, чтобы не проверять базу данных при каждом запросе
db_initialized = False

# --- ПОДКЛЮЧЕНИЕ К POSTGRESQL ---
raw_url = os.environ.get('DATABASE_URL')
DATABASE_URL = None

if raw_url:
    if raw_url.startswith("postgres://"):
        DATABASE_URL = raw_url.replace("postgres://", "postgresql://", 1)
    else:
        DATABASE_URL = raw_url

def get_db_connection():
    if DATABASE_URL:
        return psycopg2.connect(DATABASE_URL)
    else:
        import sqlite3
        return sqlite3.connect('database.db')

# Инициализация таблиц
def init_db():
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        
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
        print("=== База данных успешно проверена и готова! ===")
    except Exception as e:
        print("!!! ОШИБКА ИНИЦИАЛИЗАЦИИ БАЗЫ ДАННЫХ !!!")
        print(traceback.format_exc())

# Этот хук запустится автоматически перед самым первым запросом к сайту
@app.before_request
def safe_init():
    global db_initialized
    if not db_initialized:
        init_db()
        db_initialized = True

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('.', path)

# --- СЕКРЕТНЫЙ ПРОСМОТР БАЗЫ ДАННЫХ ЧЕРЕЗ БРАУЗЕР ---
@app.route('/secret-db-view-xyz')
def secret_db_view():
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        
        # Читаем всех пользователей
        cursor.execute("SELECT id, username, password, balance FROM users ORDER BY id ASC;")
        rows = cursor.fetchall()
        
        # Получаем имена колонок
        colnames = [desc[0] for desc in cursor.description]
        
        cursor.close()
        conn.close()
        
        # Собираем данные в красивый список
        users_list = []
        for row in rows:
            users_list.append(dict(zip(colnames, row)))
            
        return jsonify({
            "status": "success",
            "total_users": len(users_list),
            "users": users_list
        }), 200
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route('/add_money', methods=['POST'])
def add_money():
    data = request.json
    username = data.get('username')
    amount = data.get('amount', 5000)

    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("UPDATE users SET balance = balance + %s WHERE username = %s", (amount, username))
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({"success": True, "message": f"Баланс {username} пополнен!"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/buy', methods=['POST'])
def buy():
    data = request.json
    username = data.get('username')
    price = data.get('price')
    item_name = data.get('itemName')

    try:
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
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/get_profile', methods=['GET'])
def get_profile():
    username = request.args.get('username')
    if not username:
        return jsonify({"error": "Юзер не указан"}), 400

    try:
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
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO users (username, password, balance) VALUES (%s, %s, %s)", (username, password, 20000.0))
        conn.commit()
        cursor.close()
        conn.close()
        return jsonify({"message": "Success"}), 201
    except Exception as e:
        return jsonify({"error": "Пользователь уже существует или ошибка БД"}), 400

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM users WHERE username=%s AND password=%s", (username, password))
        user = cursor.fetchone()
        cursor.close()
        conn.close()
        
        if user:
            return jsonify({"message": "Login successful"}), 200
            
        return jsonify({"error": "Неверный логин или пароль"}), 401
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 10000))
    app.run(host='0.0.0.0', port=port)
