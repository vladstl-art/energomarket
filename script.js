const API_URL = "https://energomarket-e1k3.onrender.com";

// ========== 200 ТОВАРОВ (ТВОИ, БЕЗ ИЗМЕНЕНИЙ) ==========
const products = [
    // 1-30: ТВОИ ОРИГИНАЛЬНЫЕ ТОВАРЫ
    { id: 1, name: "Шуруповерт Bosch PSR 1200", price: 4500, category: "Инструменты", img: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/516977/2400x1600/51157269.jpg" },
    { id: 2, name: "Дрель ударная Makita", price: 5200, category: "Инструменты", img: "https://sun9-58.userapi.com/s/v1/ig2/tV5uYqf53Sh6CmOiAqcxA3Cn9lj_94SAjjVsFXxp7HpvNfXDWhoUMlkQ1JGPDSp8zcBPwJzUZtxKs_Kj3GlWMARN.jpg?quality=95&as=32x29,48x43,72x65,108x97,160x144,240x216,360x324,480x432,540x486,560x504&from=bu&u=t1eLuqKKcjaP3HxhwV7sCkOVK9kDB5GzXxlmgafbQhc&cs=560x0" },
    { id: 3, name: "Перфоратор Интерскол", price: 7800, category: "Инструменты", img: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/perforatory/751352/2400x1600/52220153.jpg" },
    { id: 4, name: "Мультиметр Ц4360 (Аналоговый)", price: 3200, category: "Тестеры", img: "https://main-cdn.sbermegamarket.ru/big1/hlr-system/-13/092/093/941/024/232/4/100051790355b0.jpg" },
    { id: 5, name: "Пластик PETG для 3D печати", price: 1500, category: "Расходники", img: "https://static.chipdip.ru/lib2/a/861/DOC066861456.jpg" },
    { id: 6, name: "Лобзик электрический Metabo", price: 6100, category: "Инструменты", img: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/lobziki-elektrolobziki/57940/2400x1600/51066487.jpg" },
    { id: 7, name: "Осциллограф цифровой портативный", price: 12500, category: "Тестеры", img: "https://img.joomcdn.net/c25bb6f282ef222a68e9299eb3b1e38fd71de117_1024_1024.jpeg" },
    { id: 8, name: "Паяльная станция Hakko", price: 8900, category: "Электроника", img: "https://cdn.laserzz.ru/uploads/2023/09/fx972_high_1.png" },
    { id: 9, name: "Пластик PLA (черный) 1кг", price: 1300, category: "Расходники", img: "https://main-cdn.sbermegamarket.ru/big1/hlr-system/-16/108/460/091/112/161/600022655797b0.webp" },
    { id: 10, name: "Угловая шлифмашина (Болгарка) DeWalt", price: 7400, category: "Инструменты", img: "https://avatars.mds.yandex.net/get-mpic/5326769/img_id3371684729133876011.jpeg/orig" },
    { id: 11, name: "Набор отверток диэлектрических", price: 1800, category: "Ручной инструмент", img: "https://cdn.vseinstrumenti.ru/images/goods/ruchnoj-instrument/otvertki/12527033/1200x800/197096991.jpg" },
    { id: 12, name: "Аккумулятор Li-ion 18V 4Ah", price: 4200, category: "Расходники", img: "https://basket-11.wbbasket.ru/vol1648/part164809/164809924/images/big/1.webp" },
    { id: 13, name: "Токовые клещи UNI-T", price: 3800, category: "Тестеры", img: "https://www.rusgeocom.ru/storage/images2/x/k/f/g/xkfgxcgfff7vnk8r9yy4lnd1xkpz58dl/detail/medium.webp" },
    { id: 14, name: "Промышленный фен Bosch", price: 5600, category: "Инструменты", img: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/stroitelnye-feny-termofeny/913437/2400x1600/51487137.jpg" },
    { id: 15, name: "Лазерный уровень 360 градусов", price: 9200, category: "Измерительные приборы", img: "https://avatars.mds.yandex.net/get-mpic/5259100/2a0000018dd141d639827c77acdc78164cc4/450x600" },
    { id: 16, name: "Набор сверл по металлу (1-10мм)", price: 1200, category: "Расходники", img: "https://avatars.mds.yandex.net/get-mpic/16317423/2a00000196a510a7a0cd933af9a79e2834c1/orig" },
    { id: 17, name: "Источник питания лабораторный 30V 5A", price: 6500, category: "Электроника", img: "https://avatars.mds.yandex.net/get-mpic/17879208/2a00000199865a39a12f3e1d2fda04704e17/orig" },
    { id: 18, name: "Клеевой пистолет Steinel", price: 2900, category: "Инструменты", img: "https://rostov-na-donu.1001prof.ru/upload/dev2fun.imagecompress/webp/iblock/d8b/yiol8jebft30r4r958aqxt6f30wtskhz/000f20835d8cab799e41003b5bbe1e19.webp" },
    { id: 19, name: "Детектор скрытой проводки", price: 2400, category: "Тестеры", img: "https://avatars.mds.yandex.net/i?id=befdfe0e2b384d176304f0e00f080c63_l-4149382-images-thumbs&n=13" },
    { id: 20, name: "Реноватор (МФИ) Makita", price: 11000, category: "Инструменты", img: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/renovator-mnogofunktsionalnyj-instrument/800918/2400x1600/51338195.jpg" },
    { id: 21, name: "Пластик ABS (белый) 1кг", price: 1400, category: "Расходники", img: "https://avatars.mds.yandex.net/get-mpic/11397991/2a0000018c6be57394948f4932206e104d79/orig" },
    { id: 22, name: "Стриппер для снятия изоляции", price: 1600, category: "Ручной инструмент", img: "https://www.enkor24.ru/u/images/products/c5/c539a4ddde8dae7fa9d6c5fde51e04b9945728b1.jpg" },
    { id: 23, name: "Тепловизор мобильный", price: 22000, category: "Тестеры", img: "https://avatars.mds.yandex.net/i?id=20e4eadb35188e4ab663da3ce8b7af0d_l-13315631-images-thumbs&n=13" },
    { id: 24, name: "Шлифмашина эксцентриковая", price: 5800, category: "Инструменты", img: "https://cdn.etm.ru/ipro/2096/bo6050j_c2l0.jpg" },
    { id: 25, name: "Набор бит (42 предмета)", price: 950, category: "Расходники", img: "https://static.chipdip.ru/lib/761/DOC060761039.jpg" },
    { id: 26, name: "Фрезер по дереву Bosch", price: 13500, category: "Инструменты", img: "https://avatars.mds.yandex.net/get-mpic/11167279/2a00000191d6dff5d0a3841d2bf632c2b06e/orig" },
    { id: 27, name: "Мультиметр цифровой Fluke", price: 18600, category: "Тестеры", img: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/izmeritelnye-pribory-i-instrument/673192/2400x1600/52220563.jpg" },
    { id: 28, name: "Газовый паяльник Dremel", price: 4700, category: "Электроника", img: "https://avatars.mds.yandex.net/get-mpic/18322766/2a0000019c281717bea80c369863fff91045/orig" },
    { id: 29, name: "Рулетка лазерная (дальномер)", price: 3100, category: "Измерительные приборы", img: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/1720395415/100016071583b2.jpg" },
    { id: 30, name: "Зарядное устройство для АКБ", price: 2800, category: "Расходники", img: "https://avatars.mds.yandex.net/get-mpic/14688430/2a00000197c1aea61121d4b10459ce4d64b7/orig" },

    // 31-50: АВТОМАТИКА
    { id: 31, name: "Автоматический выключатель IEK 16A 1P", price: 450, category: "Автоматика", img: "https://ir.ozone.ru/s3/multimedia-1-c/7049180316.jpg" },
    { id: 32, name: "УЗО Schneider Electric 25A 30mA", price: 1850, category: "Автоматика", img: "https://avatars.mds.yandex.net/get-mpic/5236733/2a000001923addc3cce929b10a674b8e8280/orig" },
    { id: 33, name: "Дифавтомат ABB 16A 30mA", price: 3200, category: "Автоматика", img: "https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/ustrojstva-zaschity-kontrolya-i-upravleniya/1128058/2400x1600/213158727.jpg" },
    { id: 34, name: "Реле напряжения Legrand 63A", price: 4100, category: "Автоматика", img: "https://shop220.ru/images/data/cat/272058_big_1596436134.jpg" },
    { id: 35, name: "Контактор IEK 25A 230V", price: 1200, category: "Автоматика", img: "https://basket-33.wbbasket.ru/vol6769/part676906/676906824/images/big/1.webp" },
    { id: 36, name: "Автоматический выключатель Schneider 32A 2P", price: 890, category: "Автоматика", img: "https://avatars.mds.yandex.net/get-mpic/3913686/2a0000019230c1658ad73e7d5f39b4c6e58d/orig" },
    { id: 37, name: "УЗО ABB 40A 100mA", price: 2450, category: "Автоматика", img: "https://avatars.mds.yandex.net/get-mpic/14622206/2a00000196ce6ce26d5a1aa83b5f29745151/orig" },
    { id: 38, name: "Реле импульсное Legrand 16A", price: 1800, category: "Автоматика", img: "https://files.glotr.uz/company/000/008/000/products/2024/07/08/2024-07-08-18-17-52-826712-d66f7ec0360a6f02a6a54bbb73c3a8d5.webp?_=ozb9y" },
    { id: 39, name: "Автомат защиты двигателя IEK 10A", price: 950, category: "Автоматика", img: "https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/zaschitno-kommutatsionnoe-oborudovanie/1172011/1000x1000/51173345.jpg" },
    { id: 40, name: "УЗО Schneider 63A 30mA", price: 3200, category: "Автоматика", img: "https://om-ek.ru/image/cache/catalog/product/talog-ru-image-Pnct7QWb-720x720.jpeg" },

    // 41-50: КАБЕЛИ
    { id: 41, name: "Кабель ВВГ-Пнг(А) 3x1.5", price: 350, category: "Кабели", img: "https://basket-21.wbbasket.ru/vol3501/part350111/350111492/images/big/1.webp" },
    { id: 42, name: "Кабель ВВГ-Пнг(А) 3x2.5", price: 520, category: "Кабели", img: "https://avatars.mds.yandex.net/get-mpic/15339463/2a0000019687a4f2316e65d9ce8ca71127ca/orig" },
    { id: 43, name: "Кабель NYM 3x1.5", price: 480, category: "Кабели", img: "https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/kabel-i-provod/1488780/1000x1000/51094897.jpg" },
    { id: 44, name: "Провод ПВС 2x0.75", price: 180, category: "Кабели", img: "https://avatars.mds.yandex.net/get-mpic/5234870/img_id6600374949373837009.jpeg/orig" },
    { id: 45, name: "Кабель КГ 3x4", price: 890, category: "Кабели", img: "https://electropartner.ru/upload/dev2fun.imagecompress/webp/iblock/f8d/j9dsmx0flf1axod98s6w2wvuafc2u1gy.webp" },
    { id: 46, name: "Кабель ВВГ-Пнг(А) 4x4", price: 1250, category: "Кабели", img: "https://avatars.mds.yandex.net/get-mpic/1961245/img_id2797421347258980311.jpeg/orig" },
    { id: 47, name: "Провод ПВС 3x1.5", price: 320, category: "Кабели", img: "https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/kabel-i-provod/1558785/1200x800/57397832.jpg" },
    { id: 48, name: "Кабель NYM 3x2.5", price: 720, category: "Кабели", img: "https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/kabel-i-provod/1102431/1000x1000/52144113.jpg" },
    { id: 49, name: "Кабель управления КУПР 7x1", price: 150, category: "Кабели", img: "https://img.promportal.su/foto/good_fotos/52646/526467237/kabel-kupr-14h1_foto_largest.jpg" },
    { id: 50, name: "Кабель ВВГ-Пнг(А) 5x10", price: 3450, category: "Кабели", img: "https://homex.ru/upload/iblock/d6f/d6f50d6b06d844f52f5b1b431fff4c14.png" },

    // 51-60: СВЕТОТЕХНИКА
    { id: 51, name: "Светодиодный светильник Gauss 12W", price: 890, category: "Светотехника", img: "https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/svetilniki/819609/2400x1600/51846875.jpg" },
    { id: 52, name: "Светодиодный светильник IEK 18W", price: 1250, category: "Светотехника", img: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/-12/785/770/009/110/43/100036874607b0.jpg" },
    { id: 53, name: "Люстра светодиодная 5 ламп", price: 3500, category: "Светотехника", img: "https://cdn.stroylandiya.ru/upload/iblock/285/1m4n9ubr52jhd1ro3x5ns3vilwc2tqex.jpg" },
    { id: 54, name: "Точечный светильник REXANT 7W", price: 320, category: "Светотехника", img: "https://avatars.mds.yandex.net/get-mpic/14026497/2a0000019442f1d537426b6f1e74fa7fd652/orig" },
    { id: 55, name: "Светодиодная лента 12V 5м", price: 2100, category: "Светотехника", img: "https://ir.ozone.ru/s3/multimedia-1-o/8423387052.jpg" },
    { id: 56, name: "Прожектор LED 50W IP65", price: 2450, category: "Светотехника", img: "https://cdn.pimcore.itlabs.io/image?fileName=%2F%D0%A4%D0%BE%D1%82%D0%BE%2F237379.jpg&size=800x800&format=webp" },
    { id: 57, name: "Трансформатор для ленты 12V 60W", price: 450, category: "Светотехника", img: "https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/osveschenie/1607545/2400x1600/56956988.jpg" },
    { id: 58, name: "Лампочка LED E27 15W", price: 180, category: "Светотехника", img: "https://avatars.mds.yandex.net/i?id=d7a997596bd860fe5e554440bb7e39fc_l-5194778-images-thumbs&n=13" },
    { id: 59, name: "Контроллер для RGB ленты", price: 650, category: "Светотехника", img: "https://avatars.mds.yandex.net/i?id=2cecd6f0f8d78a9df205ff91d1aba44c_l-4967643-images-thumbs&n=13" },
    { id: 60, name: "Светодиодный модуль 10W", price: 120, category: "Светотехника", img: "https://sc03.alicdn.com/kf/HTB1jAcAaBWD3KVjSZFsq6AqkpXaL.jpg" },

    // 61-70: ЭЛЕКТРОМОНТАЖ
    { id: 61, name: "Розетка Schneider Electric Glossa", price: 450, category: "Электромонтаж", img: "https://dedal24.ru/upload/dev2fun.imagecompress/webp/iblock/38c/v3ap4ef6fhwep3caf1hdma7lip2ons0o.webp" },
    { id: 62, name: "Розетка Legrand Valena", price: 620, category: "Электромонтаж", img: "https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/rozetki-i-vyklyuchateli/16221809/560x504/208912754.jpg" },
    { id: 63, name: "Выключатель одноклавишный IEK", price: 180, category: "Электромонтаж", img: "https://ir.ozone.ru/s3/multimedia-q/6158920082.jpg" },
    { id: 64, name: "Выключатель двухклавишный ABB", price: 390, category: "Электромонтаж", img: "https://avatars.mds.yandex.net/i?id=d3df3d5a251eb1440d1a2c1da5ae6367_l-5878100-images-thumbs&n=13" },
    { id: 65, name: "Коробка подрозетник 68мм", price: 45, category: "Электромонтаж", img: "https://static.chipdip.ru/lib/722/DOC044722631.jpg" },
    { id: 66, name: "Рамка 1 пост Legrand", price: 150, category: "Электромонтаж", img: "https://avatars.mds.yandex.net/i?id=581f3209d67b389167ae4b8768d8277ff616dc2c-16342694-images-thumbs&n=13" },
    { id: 67, name: "Клеммник WAGO 2-проводный", price: 25, category: "Электромонтаж", img: "https://cdn1.ozone.ru/s3/multimedia-g/6128712112.jpg" },
    { id: 68, name: "Розетка с USB Legrand", price: 1200, category: "Электромонтаж", img: "https://avatars.mds.yandex.net/get-mpic/19803269/2a0000019cc5439fb4fcca7eaedc27c5df39/orig" },
    { id: 69, name: "Выключатель проходной Schneider", price: 350, category: "Электромонтаж", img: "https://avatars.mds.yandex.net/get-mpic/5236535/img_id4777786430180458506.jpeg/orig" },
    { id: 70, name: "Коробка распред. 100х100х50", price: 180, category: "Электромонтаж", img: "https://cdn.etm.ru/ipro/649/67250.jpg" },

    // 71-80: ИНСТРУМЕНТЫ
    { id: 71, name: "Отвертка индикаторная 1000V", price: 350, category: "Инструменты", img: "https://avatars.mds.yandex.net/i?id=0222c4acaacf214ca7bab67d2dfc53f1_l-6450036-images-thumbs&n=13" },
    { id: 72, name: "Пассатижи Knipex 200мм", price: 1800, category: "Инструменты", img: "https://cdn.vseinstrumenti.ru/images/goods/ruchnoj-instrument/sharnirno-gubtsevyj-instrument/525787/1000x1000/165335683.jpg" },
    { id: 73, name: "Кусачки боковые 160мм", price: 650, category: "Инструменты", img: "https://avatars.mds.yandex.net/get-mpic/6309429/2a00000192d2beb1e0afb9f4b1df3c1bebea/orig" },
    { id: 74, name: "Стриппер автоматический", price: 1200, category: "Инструменты", img: "https://static.onlinetrade.ru/img/items/b/kraftool_tk_8_0.05_8_mm2_2305111_5.jpg" },
    { id: 75, name: "Клещи обжимные RJ45", price: 950, category: "Инструменты", img: "https://avatars.mds.yandex.net/get-mpic/16488918/2a000001981cb0c9fc9ec01f2f80075a367c/orig" },
    { id: 76, name: "Нож монтерский с прямым лезвием", price: 450, category: "Инструменты", img: "https://avatars.mds.yandex.net/i?id=8c4594ab9878e5ad6170911f47d3da192e7988f3-5208943-images-thumbs&n=13" },
    { id: 77, name: "Мультиметр цифровой DT830", price: 850, category: "Инструменты", img: "https://avatars.mds.yandex.net/i?id=55e3df7c36e504fc409316733d354831b4cb95f0-4033831-images-thumbs&n=13" },
    { id: 78, name: "Набор отверток 6шт", price: 1200, category: "Инструменты", img: "https://avatars.mds.yandex.net/get-mpic/5236584/img_id1957201301011953254.jpeg/9hq" },
    { id: 79, name: "Уровень лазерный кросс-лайнер", price: 3500, category: "Инструменты", img: "https://averus-pribor.ru/_ipx/q_90&f_webp/pictures/storage/upload/resize-images/resize-f105f43c2468635a9d6062805014e214.jpg" },
    { id: 80, name: "Фазоуказатель UNI-T UT12A", price: 680, category: "Инструменты", img: "https://mcgrp.ru/images/1529709/2733225.jpg" },

    // 81-90: ТЕСТЕРЫ
    { id: 81, name: "Мультиметр цифровой C266", price: 1500, category: "Тестеры", img: "https://user70365.clients-cdnnow.ru/upload/iblock/d68/h6wol2l9sb0efqzlognca86brku09a0l/kleshchi_multimetr-m266c-.png" },
    { id: 82, name: "Токовые клещи UT202", price: 2900, category: "Тестеры", img: "https://avatars.mds.yandex.net/i?id=a906105378cd4a3555908cf25a5c7b8cfcd6c2b9-16874757-images-thumbs&n=13" },
    { id: 83, name: "Мегаомметр E6-32", price: 18500, category: "Тестеры", img: "https://pribor-energy.ru/uploads/media/product/0001/03/413dda494f8555b128bf208437ebdcd775b62e7a.jpeg" },
    { id: 84, name: "Тестер проводки MS8907", price: 3200, category: "Тестеры", img: "https://avatars.mds.yandex.net/get-mpic/19849098/k_plus_as49yatLMyjvZvVVbicD/orig" },
    { id: 85, name: "Искатель скрытой проводки", price: 2100, category: "Тестеры", img: "https://avatars.mds.yandex.net/get-mpic/17708257/2a0000019d4d2788dc63d68b568b89ae4255/orig" },
    { id: 86, name: "Осциллограф Hantek 6022BE", price: 12500, category: "Тестеры", img: "https://avatars.mds.yandex.net/get-mpic/5284145/img_id6764941490142453783.jpeg/orig" },
    { id: 87, name: "Логгер параметров сети", price: 8500, category: "Тестеры", img: "https://www.pce-instruments.com/english/slot/2/artimg/large/pce-instruments-voltage-data-logger-pce-vr-10-5886860_1241489.webp" },
    { id: 88, name: "Калибратор токовый", price: 32000, category: "Тестеры", img: "https://ir.ozone.ru/s3/multimedia-g/6754026796.jpg" },
    { id: 89, name: "Анализатор качества э/э", price: 24500, category: "Тестеры", img: "https://novapribor.ru/upload/resize_cache/iblock/710/550_550_1/r2bqpw52yzuxh7vz87zqdfqi0t8kja1f.jpg" },
    { id: 90, name: "Тепловизор мобильный HT-19", price: 18500, category: "Тестеры", img: "https://avatars.mds.yandex.net/get-mpic/4356316/img_id655258561199602232.jpeg/14hq" },

    // 91-100: РАСХОДНИКИ
    { id: 91, name: "Термоусадка 3мм (1м)", price: 35, category: "Расходники", img: "https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/elektromontazhnaya-produktsiya/970386/2400x1600/51821099.jpg" },
    { id: 92, name: "Стяжки нейлоновые 200мм (100шт)", price: 180, category: "Расходники", img: "https://avatars.mds.yandex.net/get-mpic/5236584/2a00000197a12f97b67b6d14f1ae7faae4cf/orig" },
    { id: 93, name: "Изолента ПВХ черная (19мм)", price: 45, category: "Расходники", img: "https://ir.ozone.ru/s3/multimedia-1-x/6953531397.jpg" },
    { id: 94, name: "Клеммы WAGO 2273-202 (20шт)", price: 320, category: "Расходники", img: "https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/elektromontazhnaya-produktsiya/877577/2400x1600/206732066.jpg" },
    { id: 95, name: "Дюбель-гвозди 6х40 (50шт)", price: 120, category: "Расходники", img: "https://avatars.mds.yandex.net/i?id=54607555ae752d3fa54d1d33330d835f_l-10997177-images-thumbs&n=13" },
    { id: 96, name: "Набор наконечников НШВИ (100шт)", price: 450, category: "Расходники", img: "https://cs.p-static.ru/image/54845542/original-574x574-fit.jpg" },
    { id: 97, name: "Коронка по дереву 68мм", price: 350, category: "Расходники", img: "https://avatars.mds.yandex.net/i?id=ac8f79e975f5c59ac36a47e30c039a57_l-10877308-images-thumbs&n=13" },
    { id: 98, name: "Сверло по металлу 5мм", price: 80, category: "Расходники", img: "https://www.grantauto.ru/upload/iblock/bb8/288d0uuapwcvpgiz6ctg26hisribspm9/sverlo_po_metallu_5_5mm_standart_879049-1.resize1.jpg" },
    { id: 99, name: "Набор бит 25мм 10шт", price: 250, category: "Расходники", img: "https://main-cdn.sbermegamarket.ru/big1/hlr-system/177/462/776/163/020/39/100036230099b0.jpg" },
    { id: 100, name: "Паяльный флюс ФКСп (100г)", price: 180, category: "Расходники", img: "https://cdn.vseinstrumenti.ru/images/goods/rashodnye-materialy-i-osnastka/rashodnye-materialy-dlya-ruchnogo-instrumenta/5295661/2400x1600/133208102.jpg" },

    // 101-110: ЭЛЕКТРОНИКА
    { id: 101, name: "Блок питания 12V 5A", price: 850, category: "Электроника", img: "https://avatars.mds.yandex.net/i?id=ce1ea372ed3ebac7d8dd7bf3034b366a_l-4317021-images-thumbs&n=13" },
    { id: 102, name: "Контроллер Arduino Uno", price: 1200, category: "Электроника", img: "https://avatars.mds.yandex.net/i?id=97582bfe2ec7b69b033b36835f3667aa0ebeaca8-16288324-images-thumbs&n=13" },
    { id: 103, name: "Драйвер светодиодный 30W", price: 450, category: "Электроника", img: "https://avatars.mds.yandex.net/i?id=deb7131b4139f1016349efe9e5e2dbbb0846b1dd-7758455-images-thumbs&n=13" },
    { id: 104, name: "Реле времени цифровое", price: 650, category: "Электроника", img: "https://cdn.poryadok.ru/upload/iblock/8df/8df5b6dcf55e1aa592f19b499213f567.jpeg" },
    { id: 105, name: "Стабилизатор напряжения 5V", price: 120, category: "Электроника", img: "https://avatars.mds.yandex.net/get-mpic/5315102/2a00000191ffd9b5046d91442b8adcade8c2/orig" },
    { id: 106, name: "Плата Raspberry Pi 4", price: 8900, category: "Электроника", img: "https://shop.argocomponents.ru/image/cache/RASPBERRY%20PI%204%20MODEL%20B%208GB-600x400.png" },
    { id: 107, name: "Диммер для светодиодов", price: 380, category: "Электроника", img: "https://basket-34.wbbasket.ru/vol7228/part722860/722860895/images/big/1.webp" },
    { id: 108, name: "Преобразователь DC-DC", price: 250, category: "Электроника", img: "https://avatars.mds.yandex.net/get-mpic/12368623/2a000001958430522d8a77c69610a46177b0/orig" },
    { id: 109, name: "Инвертор 12V-220V 1000W", price: 4500, category: "Электроника", img: "https://cdn1.ozone.ru/s3/multimedia-w/c600/6722580452.jpg" },
    { id: 110, name: "Зарядное устройство Li-ion", price: 550, category: "Электроника", img: "https://stinmarket.ru/upload/iblock/e31/njyinuquvn0ve0m2mu1ay1tcfn5v9d3h.webp" },

    // 111-120: РУЧНОЙ ИНСТРУМЕНТ
    { id: 111, name: "Набор отверток 12шт", price: 1500, category: "Ручной инструмент", img: "https://avatars.mds.yandex.net/i?id=e9497b3bf51547490b5d3400e3196cd7_l-5086925-images-thumbs&n=13" },
    { id: 112, name: "Нож монтерский сменный", price: 280, category: "Ручной инструмент", img: "https://cs.p-static.ru/image/5892070/original.jpg" },
    { id: 113, name: "Молоток 500г", price: 650, category: "Ручной инструмент", img: "https://avatars.mds.yandex.net/i?id=cf16e831cb375f15eebab8e434a47a4cbc260478-10952687-images-thumbs&n=13" },
    { id: 114, name: "Плоскогубцы комбинированные", price: 450, category: "Ручной инструмент", img: "https://avatars.mds.yandex.net/i?id=12a1c5755e40cc38dde5756e73de2ebe_l-4936060-images-thumbs&n=13" },
    { id: 115, name: "Уровень пузырьковый 60см", price: 350, category: "Ручной инструмент", img: "https://cdn.vseinstrumenti.ru/images/goods/ruchnoj-instrument/ruchnoj-izmeritelnyj-instrument/16420835/1000x1000/207027518.jpg" },
    { id: 116, name: "Рулетка 5м", price: 250, category: "Ручной инструмент", img: "https://avatars.mds.yandex.net/i?id=afa6256ceebebbedfd35ab314d778956_l-12925699-images-thumbs&n=13" },
    { id: 117, name: "Набор ключей рожковых 6-22", price: 2200, category: "Ручной инструмент", img: "https://cdn.etm.ru/ipro/569/63522=3.jpg" },
    { id: 118, name: "Клещи для снятия изоляции", price: 380, category: "Ручной инструмент", img: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/-98/881/403/342/618/28/100034968605b1.jpg" },
    { id: 119, name: "Набор шестигранников", price: 450, category: "Ручной инструмент", img: "https://static.insales-cdn.com/images/products/1/5377/2922091777/13405609.png" },
    { id: 120, name: "Стамеска 20мм", price: 280, category: "Ручной инструмент", img: "https://avatars.mds.yandex.net/get-mpic/5210254/2a0000018e1ce6676fe30a28c49c7cb4a75e/orig" },

    // 121-130: ИЗМЕРИТЕЛЬНЫЕ ПРИБОРЫ
    { id: 121, name: "Лазерный дальномер 40м", price: 2800, category: "Измерительные приборы", img: "https://avatars.mds.yandex.net/get-mpic/15417456/2a0000019881319b4aebb1e49e2b4b6a4e9b/orig" },
    { id: 122, name: "Тепловизор Flir C2", price: 45000, category: "Измерительные приборы", img: "https://www.ohotafish.ru/image/cache/data/prochee/flirc2-800x800.png" },
    { id: 123, name: "Люксметр цифровой", price: 2200, category: "Измерительные приборы", img: "https://avatars.mds.yandex.net/get-mpic/11405706/2a0000019327f65d706ffbe1f8ce3336640b/orig" },
    { id: 124, name: "Термогигрометр", price: 850, category: "Измерительные приборы", img: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/izmeritelnye-pribory-i-instrument/959412/2400x1600/52173261.jpg" },
    { id: 125, name: "Частотомер цифровой", price: 3200, category: "Измерительные приборы", img: "https://avatars.mds.yandex.net/get-mpic/16067753/2a0000019a37fc7b5923cfe404129fbd9fa5/orig" },
    { id: 126, name: "Шумомер цифровой", price: 1800, category: "Измерительные приборы", img: "https://avatars.mds.yandex.net/get-mpic/16456541/2a0000019c56f60daf5e133a99d7f3f82ac6/orig" },
    { id: 127, name: "Тахометр контактный", price: 2500, category: "Измерительные приборы", img: "https://avatars.mds.yandex.net/get-mpic/12631971/2a000001916c22f40786316abc70533ef0e1/orig" },
    { id: 128, name: "Калибратор давления", price: 12500, category: "Измерительные приборы", img: "https://ir.ozone.ru/s3/multimedia-j/6811148971.jpg" },
    { id: 129, name: "Анемометр цифровой", price: 3200, category: "Измерительные приборы", img: "https://avatars.mds.yandex.net/get-mpic/12485547/2a00000195230477c56ba155de22002b3bff/orig" },
    { id: 130, name: "Измеритель заземления", price: 8900, category: "Измерительные приборы", img: "https://avatars.mds.yandex.net/i?id=8e3af9e296db0a0abbb6840b7a918e734f80cd17-5875598-images-thumbs&n=13" },

    // 131-140: АВТОМАТИКА (продолжение)
    { id: 131, name: "Автоматический выключатель Schneider 40A 3P", price: 1500, category: "Автоматика", img: "https://avatars.mds.yandex.net/i?id=e6442d75c3a811a8167cea2cdd60c589_l-5232606-images-thumbs&n=13" },
    { id: 132, name: "УЗО IEK 16A 30mA", price: 980, category: "Автоматика", img: "https://avatars.mds.yandex.net/get-mpic/6257919/2a00000192c3bab40369a217a66e3f3f7ed9/orig" },
    { id: 133, name: "Дифавтомат Schneider 25A 30mA", price: 3800, category: "Автоматика", img: "https://avatars.mds.yandex.net/get-mpic/5023672/img_id1359253572954826967.jpeg/orig" },
    { id: 134, name: "Реле напряжения 1-фазное 63A", price: 2100, category: "Автоматика", img: "https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/ustrojstva-zaschity-kontrolya-i-upravleniya/9729434/2400x1600/134263136.jpg" },
    { id: 135, name: "Контактор ABB 40A 230V", price: 2100, category: "Автоматика", img: "https://avatars.mds.yandex.net/get-mpic/5217165/2a000001951539e13997f24352f5a579a7e5/orig" },
    { id: 136, name: "Автоматический выключатель IEK 6A 1P", price: 320, category: "Автоматика", img: "https://basket-14.wbbasket.ru/vol2074/part207434/207434867/images/big/1.webp" },
    { id: 137, name: "УЗО Legrand 32A 30mA", price: 2650, category: "Автоматика", img: "https://avatars.mds.yandex.net/i?id=b86e0a932362f7ca16f8f3dc29e5fe8f_l-5888173-images-thumbs&n=13" },
    { id: 138, name: "Реле контроля фаз", price: 1850, category: "Автоматика", img: "https://avatars.mds.yandex.net/i?id=1cb74b58049b414336c702ca902eee66_l-6298174-images-thumbs&n=13" },
    { id: 139, name: "Автомат нагрузки 100A 3P", price: 3200, category: "Автоматика", img: "https://avatars.mds.yandex.net/get-mpic/7937668/img_id8325995146353426778.jpeg/orig" },
    { id: 140, name: "УЗО Schneider 80A 100mA", price: 4200, category: "Автоматика", img: "https://avatars.mds.yandex.net/get-mpic/12390472/2a0000019a0dc5497b1035490e4f477e1f36/orig" },

    // 141-150: КАБЕЛИ (продолжение)
    { id: 141, name: "Кабель ВВГ-Пнг(А) 3x1.5", price: 35, category: "Кабели", img: "https://www.электрополис.рф/image/cache/catalog/files/image/SD-00032623-01-1200x800.jpg" },
    { id: 142, name: "Кабель ВВГ-Пнг(А) 3x2.5", price: 52, category: "Кабели", img: "https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/kabel-i-provod/2990354/2400x1600/57335912.jpg" },
    { id: 143, name: "Кабель NYM 3x1.5", price: 48, category: "Кабели", img: "https://avatars.mds.yandex.net/get-mpic/3916156/img_id2592507840945801431.jpeg/orig" },
    { id: 144, name: "Кабель КГ 3x2.5", price: 95, category: "Кабели", img: "https://basket-17.wbbasket.ru/vol1908/part190877/190877025/images/big/1.webp" },
    { id: 145, name: "Кабель ВВГ-Пнг(А) 4x6", price: 180, category: "Кабели", img: "https://storage.yandexcloud.net/s.stroyudacha.ru/products/2020/05/101291/8.jpg" },
    { id: 146, name: "Кабель ВВГ-Пнг(А) 5x16", price: 450, category: "Кабели", img: "https://avatars.mds.yandex.net/get-mpic/12258964/2a0000019454e75fdce0851b67cc9fa2284d/orig" },
    { id: 147, name: "Провод ПВС 2x0.75", price: 18, category: "Кабели", img: "https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/kabel-i-provod/2269420/2400x1600/127175630.jpg" },
    { id: 148, name: "Провод ПВС 3x1.5", price: 32, category: "Кабели", img: "https://avatars.mds.yandex.net/get-mpic/12621455/2a0000018d6697424458de23671c30b848c4/orig" },
    { id: 149, name: "Кабель управления 10x0.5", price: 65, category: "Кабели", img: "https://a.allegroimg.com/original/116da1/8bd182ff4336aa1f888121499552/Przewod-kabel-sterowniczy-JZ-500-10x0-5-HELUKABEL" },
    { id: 150, name: "Кабель для видеонаблюдения", price: 28, category: "Кабели", img: "https://st.aestatic.net/items-img-13/R/C/0/I/A58312d2bd74d4809b2c5b9009315b8a7V.jpeg_480x480.jpg" },

    // 151-160: СВЕТОТЕХНИКА (продолжение)
    { id: 151, name: "Светодиодный светильник 40W", price: 2450, category: "Светотехника", img: "https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/svetilniki/1197747/1200x800/51515550.jpg" },
    { id: 152, name: "Люстра подвесная 6 ламп", price: 4200, category: "Светотехника", img: "https://otdelkino.ru/upload/resize_image/iblock/3ef/750_750/9dpbroyv9tk894eezt1365mb4n82iszl.jpg" },
    { id: 153, name: "Точечный светильник 10W", price: 450, category: "Светотехника", img: "https://avatars.mds.yandex.net/get-mpic/4409630/2a00000190caee7f58ff00e4127b66321ea7/orig" },
    { id: 154, name: "Светодиодная лента 24V 10м", price: 4200, category: "Светотехника", img: "https://cdn.etm.ru/ipro/1715/vls-68-096-3528-08-120-40_1.jpg" },
    { id: 155, name: "Прожектор LED 100W", price: 4900, category: "Светотехника", img: "https://avatars.mds.yandex.net/i?id=dcfe1e85efaf451e04375d2843cb1ed42117ed1b-10961631-images-thumbs&n=13" },
    { id: 156, name: "Лампочка LED E14 10W", price: 120, category: "Светотехника", img: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/-21/149/830/162/181/216/100049122885b2.jpg" },
    { id: 157, name: "Блок питания для ленты 24V", price: 850, category: "Светотехника", img: "https://apelsin.ru/upload/iblock/8c1/9iie1btco56b8xiwjmhc8ynh62e130bq.jpg" },
    { id: 158, name: "Диммер для светодиодов", price: 680, category: "Светотехника", img: "https://avatars.mds.yandex.net/get-mpic/13671170/2a0000019ac25b217175b668179d35261d1f/orig" },
    { id: 159, name: "Светодиодный модуль 20W", price: 280, category: "Светотехника", img: "https://avatars.mds.yandex.net/i?id=1d0ddcbbdbad3a9da57655ffc0f45bab_l-9044089-images-thumbs&n=13" },
    { id: 160, name: "Торшер светодиодный", price: 3200, category: "Светотехника", img: "https://ir.ozone.ru/s3/multimedia-9/6718985793.jpg" },

    // 161-170: ЭЛЕКТРОМОНТАЖ (продолжение)
    { id: 161, name: "Розетка двойная Schneider", price: 850, category: "Электромонтаж", img: "https://avatars.mds.yandex.net/get-mpic/15256585/2a0000019c0f55c9c7ed7a1b35a4f7960c46/orig" },
    { id: 162, name: "Розетка телефонная Legrand", price: 450, category: "Электромонтаж", img: "https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/rozetki-i-vyklyuchateli/542725/2400x1600/196340025.jpg" },
    { id: 163, name: "Выключатель трехклавишный", price: 520, category: "Электромонтаж", img: "https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/rozetki-i-vyklyuchateli/21736988/2400x1600/209778848.jpg" },
    { id: 164, name: "Розетка с крышкой IP44", price: 680, category: "Электромонтаж", img: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/160/568/522/021/235/6/100065719765b1.png" },
    { id: 165, name: "Коробка распределительная 80х80", price: 120, category: "Электромонтаж", img: "https://cdn1.ozone.ru/s3/multimedia-1-4/c600/7603517488.jpg" },
    { id: 166, name: "Клеммник клеммная колодка 12шт", price: 85, category: "Электромонтаж", img: "https://domingo.su/upload/img2picture/images/additional/000-531-971/BIG/1.jpg.webp" },
    { id: 167, name: "Рамка 3 поста Schneider", price: 280, category: "Электромонтаж", img: "https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/rozetki-i-vyklyuchateli/2093631/1000x1000/54326851.jpg" },
    { id: 168, name: "Выключатель с подсветкой", price: 390, category: "Электромонтаж", img: "https://avatars.mds.yandex.net/i?id=152c54c5297fab8b16d79e4319118ab80d7eb673-5698344-images-thumbs&n=13" },
    { id: 169, name: "Розетка компьютерная RJ45", price: 520, category: "Электромонтаж", img: "https://cdn.etm.ru/ipro/1575/5ef0afbfecd2e09bff5379f4.jpg" },
    { id: 170, name: "Коробка монтажная 60х60", price: 65, category: "Электромонтаж", img: "https://avatars.mds.yandex.net/i?id=fc7dc55ee39b43621431cb7e58340bac_l-4355679-images-thumbs&n=13" },

    // 171-180: ИНСТРУМЕНТЫ (продолжение)
    { id: 171, name: "Дрель-шуруповерт Makita", price: 8900, category: "Инструменты", img: "https://images.elecity.ru/images/products/13/25/265/1024582/original/elecity_1024582_main.jpg" },
    { id: 172, name: "Перфоратор Bosch 800W", price: 10500, category: "Инструменты", img: "https://avatars.mds.yandex.net/i?id=6d251664fd69c4dae70d7dc1bcd7931f_l-16476356-images-thumbs&n=13" },
    { id: 173, name: "УШМ Makita 125мм", price: 5200, category: "Инструменты", img: "https://avatars.mds.yandex.net/get-mpic/4888456/img_id3083081490639377582.jpeg/orig" },
    { id: 174, name: "Лобзик Bosch 650W", price: 4800, category: "Инструменты", img: "https://avatars.mds.yandex.net/i?id=faa715b4834a1eeabdd7e8c94194eb24_l-5338518-images-thumbs&n=13" },
    { id: 175, name: "Фен строительный 2000W", price: 3500, category: "Инструменты", img: "https://cdn.pimcore.itlabs.io/image?fileName=%2F%D0%A4%D0%BE%D1%82%D0%BE%2F619969.jpg&size=800x800&format=webp" },
    { id: 176, name: "Рубанок электрический", price: 6200, category: "Инструменты", img: "https://avatars.mds.yandex.net/get-mpic/18721724/2a0000019ca13e27e5dbe041c1fdea63b6f4/9hq" },
    { id: 177, name: "Шлифмашина ленточная", price: 4500, category: "Инструменты", img: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shlifovalnye-mashinki-shlifmashinki/20834798/2400x1600/205733276.jpg" },
    { id: 178, name: "Краскопульт электрический", price: 3200, category: "Инструменты", img: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/ccs/255473/0JrQn9CtLTY1MF85NDUyNTExNTE=/b0.jpg" },
    { id: 179, name: "Торцовочная пила", price: 12500, category: "Инструменты", img: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/pily/1709790/1000x1000/53198638.jpg" },
    { id: 180, name: "Циркулярная пила Bosch", price: 8900, category: "Инструменты", img: "https://www.enkor24.ru/u/images/products/32/32881857b3e403610660edd908c0b2244f82253b.jpg" },

    // 181-190: ТЕСТЕРЫ (продолжение)
    { id: 181, name: "Мультиметр универсальный", price: 1850, category: "Тестеры", img: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/izmeritelnye-pribory-i-instrument/18151500/2400x1600/199638906.jpg" },
    { id: 182, name: "Токовые клещи 600A", price: 3500, category: "Тестеры", img: "https://www.autoscaners.ru/upload/iblock/b16/k5i0237dz6yh1t05yu52pghgujp4sde0/IC_M206B_1.jpg" },
    { id: 183, name: "Мегаомметр цифровой", price: 12500, category: "Тестеры", img: "https://avatars.mds.yandex.net/i?id=cced941bd206b729519ad208d86dcc190805393f-5886366-images-thumbs&n=13" },
    { id: 184, name: "Тестер кабеля LAN", price: 890, category: "Тестеры", img: "https://avatars.mds.yandex.net/i?id=fbf8480b9f92b7e5fbc33180950f56a6_l-9263767-images-thumbs&n=13" },
    { id: 185, name: "Детектор проводки", price: 1650, category: "Тестеры", img: "https://avatars.mds.yandex.net/i?id=64884234cc72468084e77337c5f196fd_l-16283342-images-thumbs&n=13" },
    { id: 186, name: "Осциллограф USB", price: 8900, category: "Тестеры", img: "https://eltsi.ru/upload/iblock/093/093c9ecafc714887d785d6226b4b1b71.jpg" },
    { id: 187, name: "Анализатор сети", price: 4500, category: "Тестеры", img: "https://avatars.mds.yandex.net/i?id=d9d1bbebabd3193713ac2d10f0c2d54a_l-5280171-images-thumbs&n=13" },
    { id: 188, name: "Измеритель RLC", price: 3200, category: "Тестеры", img: "https://avatars.mds.yandex.net/i?id=6e4d7be58ad05851075522dc5dde1bff_l-5221134-images-thumbs&n=13" },
    { id: 189, name: "Калибратор температуры", price: 8900, category: "Тестеры", img: "https://skladom.ru/images/detailed/473/04c485a131d4079edbf956e94f44e112.jpg" },
    { id: 190, name: "Логгер напряжения", price: 5600, category: "Тестеры", img: "https://geon.ru/upload/iblock/eaf/e53ea2a4prh799cntakov4obzyx9b7ng.webp" },

    // 191-200: РАСХОДНИКИ (продолжение)
    { id: 191, name: "Термоусадка 10мм (1м)", price: 65, category: "Расходники", img: "https://avatars.mds.yandex.net/get-mpic/5221857/img_id1809681464122102947.jpeg/orig" },
    { id: 192, name: "Стяжки нейлоновые 100мм (100шт)", price: 95, category: "Расходники", img: "https://ir.ozone.ru/s3/multimedia-z/6470771891.jpg" },
    { id: 193, name: "Изолента синяя 19мм", price: 45, category: "Расходники", img: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/115/804/545/042/513/14/100038479095b2.jpg" },
    { id: 194, name: "Клеммы WAGO 221-412 (10шт)", price: 350, category: "Расходники", img: "https://avatars.mds.yandex.net/get-mpic/5242361/img_id5086987204637597736.jpeg/orig" },
    { id: 195, name: "Дюбель-гвозди 8х60 (50шт)", price: 180, category: "Расходники", img: "https://avatars.mds.yandex.net/i?id=05991bc96d04faaf8180daaba3c3174f_l-5650102-images-thumbs&n=13" },
    { id: 196, name: "Набор наконечников НШВИ (50шт)", price: 280, category: "Расходники", img: "https://avatars.mds.yandex.net/get-mpic/12366926/2a000001999be8a083b0be71905d980409d6/orig" },
    { id: 197, name: "Коронка по бетону 68мм", price: 890, category: "Расходники", img: "https://trudogolik24.ru/pic/tov/20230530152024104.jpg" },
    { id: 198, name: "Сверло по бетону 6мм", price: 120, category: "Расходники", img: "https://avatars.mds.yandex.net/get-mpic/10483373/2a0000018b6a99f5d55d70945f8e8cd2ea2b/orig" },
    { id: 199, name: "Набор сверл 10шт", price: 450, category: "Расходники", img: "https://avatars.mds.yandex.net/i?id=c811f41452024557a59d470ddf41a310_l-5236521-images-thumbs&n=13" },
    { id: 200, name: "Припой ПОС-61 100г", price: 350, category: "Расходники", img: "https://main-cdn.sbermegamarket.ru/big1/hlr-system/638/707/570/116/144/100058970840b0.jpg" }
];

console.log("Загружено товаров:", products.length);

// ========== ПАГИНАЦИЯ (ДОБАВЛЕНА) ==========
const grid = document.getElementById('product-grid');
const searchInput = document.getElementById('searchInput');

let currentPage = 1;
const itemsPerPage = 20; // 20 товаров на страницу (будет 10 страниц)
let currentDisplayProducts = [...products];

// Функция отображения с пагинацией
function displayProductsWithPagination() {
    if (!grid) return;
    
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageProducts = currentDisplayProducts.slice(start, end);
    
    const favorites = JSON.parse(localStorage.getItem('userFavorites')) || [];
    grid.innerHTML = pageProducts.map(item => {
        const isFav = favorites.includes(item.id);
        return `
        <div class="product-card">
            <div style="text-align: right; margin-bottom: -25px; position: relative; z-index: 2;">
                <span onclick="toggleFavorite(${item.id})" style="cursor: pointer; font-size: 1.6rem; color: ${isFav ? '#ffc107' : '#ccc'}; transition: 0.2s;">
                    ${isFav ? '★' : '☆'}
                </span>
            </div>
            <div class="product-image" style="height: 180px; display: flex; align-items: center; justify-content: center; overflow: hidden; margin-bottom: 10px;">
                <img src="${item.img}" alt="${item.name}" style="max-width: 100%; max-height: 100%; object-fit: contain;">
            </div>
            <h3 style="font-size: 1rem; height: 2.5rem; overflow: hidden;">${item.name}</h3>
            <p style="color: #666; font-size: 0.8rem;">${item.category}</p>
            <p style="color: #054181; font-weight: bold; font-size: 1.2rem;">${item.price.toLocaleString()} ₽</p>
            <button type="button" onclick="makePurchase(event, '${item.name.replace(/'/g, "\\'")}', ${item.price})" style="background: #28a745; color: white; border: none; padding: 10px; border-radius: 5px; width: 100%; cursor: pointer; font-weight: bold;">Купить</button>
        </div>
    `}).join('');
    
    renderPagination();
}

// Рендер кнопок пагинации
function renderPagination() {
    const totalPages = Math.ceil(currentDisplayProducts.length / itemsPerPage);
    if (totalPages <= 1) {
        const existingPag = document.getElementById('pagination-container');
        if (existingPag) existingPag.remove();
        return;
    }
    
    let pagContainer = document.getElementById('pagination-container');
    if (!pagContainer) {
        pagContainer = document.createElement('div');
        pagContainer.id = 'pagination-container';
        pagContainer.style.cssText = 'display: flex; justify-content: center; gap: 8px; margin: 30px 0 50px; flex-wrap: wrap;';
        grid.parentNode.insertBefore(pagContainer, grid.nextSibling);
    }
    
    let html = '';
    
    // Кнопка "Назад"
    if (currentPage > 1) {
        html += `<button class="pag-btn" data-page="${currentPage - 1}">← Назад</button>`;
    }
    
    // Номера страниц
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
            html += `<button class="pag-btn ${i === currentPage ? 'pag-active' : ''}" data-page="${i}">${i}</button>`;
        } else if (i === currentPage - 3 || i === currentPage + 3) {
            html += `<span style="padding: 8px;">...</span>`;
        }
    }
    
    // Кнопка "Вперед"
    if (currentPage < totalPages) {
        html += `<button class="pag-btn" data-page="${currentPage + 1}">Вперёд →</button>`;
    }
    
    pagContainer.innerHTML = html;
    
    // Добавляем стили для кнопок
    const stylePag = document.createElement('style');
    stylePag.textContent = `
        .pag-btn {
            background: #034383;
            color: white;
            border: none;
            padding: 8px 14px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: bold;
            transition: 0.2s;
        }
        .pag-btn:hover {
            background: #022d5a;
        }
        .pag-active {
            background: #ff9900;
            color: #333;
        }
    `;
    if (!document.querySelector('#pag-style')) {
        stylePag.id = 'pag-style';
        document.head.appendChild(stylePag);
    }
    
    // Вешаем обработчики
    document.querySelectorAll('.pag-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentPage = parseInt(btn.dataset.page);
            displayProductsWithPagination();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// Обновление при поиске/фильтрации
function updateFilteredProducts() {
    const term = searchInput ? searchInput.value.toLowerCase() : '';
    currentDisplayProducts = products.filter(p => 
        p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term)
    );
    currentPage = 1;
    displayProductsWithPagination();
}

// ========== ОСТАЛЬНЫЕ ФУНКЦИИ (БЕЗ ИЗМЕНЕНИЙ) ==========
function showToast(message, isError = false) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.style.cssText = `
        background: ${isError ? '#dc3545' : '#28a745'};
        color: white; 
        padding: 15px 25px; 
        border-radius: 10px;
        margin-top: 10px; 
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        font-weight: bold; 
        animation: slideIn 0.4s ease-out;
        font-family: sans-serif;
        opacity: 1;
        transition: opacity 0.8s ease;
    `;
    toast.innerText = message;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => { if (toast.parentNode) toast.remove(); }, 800);
    }, 4000);
}

function showConfirm(title, message) {
    return new Promise((resolve) => {
        const modal = document.getElementById('custom-confirm');
        if (!modal) return resolve(false);
        document.getElementById('confirm-title').innerText = title;
        document.getElementById('confirm-message').innerText = message;
        modal.style.display = 'flex';
        
        document.getElementById('confirm-ok').onclick = (e) => {
            e.preventDefault();
            modal.style.display = 'none';
            resolve(true);
        };
        document.getElementById('confirm-cancel').onclick = (e) => {
            e.preventDefault();
            modal.style.display = 'none';
            resolve(false);
        };
    });
}

async function makePurchase(event, itemName, price) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    const username = localStorage.getItem('currentUser');
    if (!username) {
        showToast("Войдите в аккаунт!", true);
        return;
    }
    const confirmed = await showConfirm("Подтверждение", `Купить "${itemName}"?`);
    if (confirmed) {
        try {
            const response = await fetch(`${API_URL}/buy`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, price, itemName })
            });
            const result = await response.json();
            if (response.ok) {
                showToast(`✅ Успешно! Остаток: ${result.new_balance} ₽`);
            } else {
                showToast(`❌ ${result.error}`, true);
            }
        } catch (error) {
            showToast("⚠️ Ошибка сервера", true);
        }
    }
}

function toggleFavorite(productId) {
    let favorites = JSON.parse(localStorage.getItem('userFavorites')) || [];
    const index = favorites.indexOf(productId);
    const notification = document.getElementById('fav-notification');
    const text = document.getElementById('fav-notification-text');
    if (index > -1) {
        favorites.splice(index, 1);
        if (text) text.innerText = "Товар удален из избранного";
    } else {
        favorites.push(productId);
        if (text) text.innerText = "Товар добавлен в избранное";
    }
    localStorage.setItem('userFavorites', JSON.stringify(favorites));
    if (notification) {
        notification.classList.remove('fav-notification-hidden');
        setTimeout(() => {
            notification.classList.add('fav-notification-hidden');
        }, 3000);
    }
    displayProductsWithPagination();
}

// Поиск
if (searchInput) {
    searchInput.addEventListener('input', () => {
        updateFilteredProducts();
    });
}

// Категории
document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.category-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const cat = item.getAttribute('data-category');
        currentDisplayProducts = (cat === 'все') ? [...products] : products.filter(p => p.category === cat);
        currentPage = 1;
        displayProductsWithPagination();
    });
});

// Стиль для анимации
const animStyle = document.createElement('style');
animStyle.innerHTML = `@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`;
document.head.appendChild(animStyle);

// Запуск
displayProductsWithPagination();