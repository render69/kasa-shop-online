
import { Product } from '../types';

export const products: Product[] = [
  {
    id: "pos-t1000",
    name: "POS-терминал T1000",
    description: "Высокопроизводительный сенсорный POS-терминал с 15,6-дюймовым дисплеем, идеально подходит для розничной торговли и ресторанов.",
    price: 59999,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.spectratech.com%2Fwp-content%2Fuploads%2F2018%2F11%2FThumbnails_T1000-3-768x768.png&f=1&nofb=1&ipt=62b4f02eb9f28da9d4b9698a9e6beb04b7bd45376ca90f22b74fb75c6cdba4eb",
    category: "pos-terminals",
    features: [
      "Процессор Intel Core i5",
      "8ГБ оперативной памяти",
      "256ГБ SSD накопитель",
      "15.6\" сенсорный дисплей",
      "Поддержка Windows 11",
      "5 USB портов",
      "Ethernet и Wi-Fi подключение"
    ],
    inStock: true,
    bestSeller: true,
  },
  {
    id: "pos-t800",
    name: "POS-терминал T800",
    description: "Сенсорный POS-терминал среднего класса с 14-дюймовым дисплеем, подходит для малого и среднего бизнеса.",
    price: 45999,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbelkassa.by%2Fimage%2Fcache%2Fcatalog%2Ftovar%2Fmobilnyy_pos-terminal_aisino_v713-1500x1500.jpg&f=1&nofb=1&ipt=036370177cf6069ae7ae354b3f12f92161ebef695880865fffd0db5831d91e60",
    category: "pos-terminals",
    features: [
      "Процессор Intel Core i3",
      "4ГБ оперативной памяти",
      "128ГБ SSD накопитель",
      "14\" сенсорный дисплей",
      "Поддержка Windows 10",
      "3 USB порта",
      "Ethernet и Wi-Fi подключение"
    ],
    inStock: true,
  },
  {
    id: "pos-t600",
    name: "POS-терминал T600 Компактный",
    description: "Компактный и экономичный POS-терминал для небольших магазинов и кафе. Оптимальное решение для ограниченного пространства.",
    price: 32999,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fecsat-pos.by%2Fpublic%2Fsource%2Fproducts%2Fpos%2Fmain%2Fpos_001.jpg&f=1&nofb=1&ipt=57190412aeb2c3e00d6d9393e97f4faf1b84af2d7cc7684da20ebd31cdfaeee2",
    category: "pos-terminals",
    features: [
      "Процессор Intel Celeron",
      "4ГБ оперативной памяти",
      "64ГБ SSD накопитель",
      "12\" сенсорный дисплей",
      "Компактные размеры",
      "Низкое энергопотребление",
      "Встроенный считыватель карт"
    ],
    inStock: true,
    new: true,
  },
  {
    id: "pos-t1200",
    name: "POS-терминал T1200 Премиум",
    description: "Премиальный POS-терминал с большим 17-дюймовым экраном и мощным процессором для высоконагруженных торговых точек и ресторанов.",
    price: 79999,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lkassa.kz%2Fimg%2Fposts%2Ff27729e5e81aa4477e5aba0b92f7a148.png&f=1&nofb=1&ipt=eb81e1f192ae0d45dd763c8c1dbe99bd9f40b6158650ca9e3449e8cd5c4286b7",
    category: "pos-terminals",
    features: [
      "Процессор Intel Core i7",
      "16ГБ оперативной памяти",
      "512ГБ SSD накопитель",
      "17\" сенсорный дисплей повышенной яркости",
      "Водонепроницаемая конструкция",
      "Универсальные интерфейсы подключения",
      "Расширенная гарантия 3 года"
    ],
    inStock: true,
    bestSeller: false,
  },
  {
    id: "printer-tp80",
    name: "Термопринтер чеков TP80",
    description: "Быстрый и надежный термопринтер чеков с автоматическим отрезчиком, идеально подходит для высокой нагрузки в розничной торговле.",
    price: 11999,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flang.magnat-trade.com.ua%2Fwp-content%2Fuploads%2F2021%2F08%2F878787-1024x1024.jpg&f=1&nofb=1&ipt=8e5d2d3569a424969506f0e5a86ecdffc89bc03e8f1ba35d3c10d4d1b6f5e104",
    category: "receipt-printers",
    features: [
      "Скорость печати: 300мм/сек",
      "Автоматический отрезчик с функцией частичного отреза",
      "Поддержка бумаги 58мм и 80мм",
      "Интерфейсы: USB, Serial и Ethernet",
      "Совместимость с ESC/POS",
      "Простая загрузка бумаги"
    ],
    inStock: true,
    bestSeller: true,
  },
  {
    id: "printer-tp60",
    name: "Термопринтер чеков TP60 Эконом",
    description: "Экономичный термопринтер чеков для небольших магазинов и предприятий с невысокой проходимостью. Надежная базовая модель.",
    price: 6999,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Filrorwxhnokojn5p-static.micyjz.com%2Fcloud%2FjiBplKorjmSRjkpirlijjo%2FTL24-800-800.jpg&f=1&nofb=1&ipt=519d69b12a594d80e7885b041603c3bcd1571f9846352b876804846cc36ef543",
    category: "receipt-printers",
    features: [
      "Скорость печати: 150мм/сек",
      "Ширина бумаги 58мм",
      "USB интерфейс",
      "Компактные размеры",
      "Низкое энергопотребление",
      "Простая установка и настройка"
    ],
    inStock: true,
  },
  {
    id: "printer-tp90",
    name: "Термопринтер чеков TP90 Беспроводной",
    description: "Современный термопринтер с Wi-Fi и Bluetooth подключением. Идеален для мобильных точек продаж и курьерских служб.",
    price: 14999,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg3.festima.ru%2F1%2F8lyFJ3tMxUQryWW1&f=1&nofb=1&ipt=27babbd39b44d7e9bf64bbb763db569fe21fceea71a66bfb94e77f372dc5ca74",
    category: "receipt-printers",
    features: [
      "Беспроводное подключение: Wi-Fi и Bluetooth",
      "Встроенный аккумулятор (до 8 часов работы)",
      "Скорость печати: 220мм/сек",
      "Автоматический отрезчик",
      "Поддержка печати QR-кодов",
      "Совместимость с iOS и Android устройствами"
    ],
    inStock: true,
    new: true,
  },
  {
    id: "barcode-bs100",
    name: "Сканер штрих-кодов BS100",
    description: "Высокоскоростной сканер 1D/2D штрих-кодов с USB-подключением, идеально подходит для розничной торговли и учета товаров.",
    price: 8999,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffiles.glotr.uz%2Fcompany%2F000%2F006%2F043%2Fproducts%2F2020%2F09%2F15%2F2020-09-15-20-02-23-274880-ba23acf21c9761565af4674530efeb95.jpg%3F_%3Dozbolzfnyl1a5yljn8ifl58gjq46fdtjh7&f=1&nofb=1&ipt=c07c7639751cdba4df84332855318e29da89879a514e2e2774ec9707d12b6e9c",
    category: "barcode-scanners",
    features: [
      "Считывает 1D и 2D штрих-коды",
      "USB интерфейс с технологией plug-and-play",
      "Скорость сканирования: 100 сканов/сек",
      "Класс защиты IP54 от пыли и воды",
      "Устойчивость к падениям с высоты 1.5м",
      "Эргономичный дизайн для удобства использования"
    ],
    inStock: true,
  },
  {
    id: "barcode-bs200",
    name: "Беспроводной сканер штрих-кодов BS200",
    description: "Беспроводной сканер штрих-кодов с радиусом действия до 100м и памятью на 2000 сканирований. Идеален для складских помещений.",
    price: 12999,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fir.ozone.ru%2Fs3%2Fmultimedia-y%2Fc1000%2F6819640270.jpg&f=1&nofb=1&ipt=07cfaf778c702d61f80bb0f68448f69e0f4e585393d7b299c118d74b9a239493",
    category: "barcode-scanners",
    features: [
      "Беспроводное подключение (радиус до 100м)",
      "Встроенная память на 2000 штрих-кодов",
      "Быстрая зарядка (2 часа - полный заряд)",
      "Время работы от батареи: до 12 часов",
      "Считывание с экранов мобильных устройств",
      "Эргономичная рукоятка с мягким покрытием"
    ],
    inStock: true,
    bestSeller: true,
  },
  {
    id: "barcode-bs50",
    name: "Компактный сканер штрих-кодов BS50",
    description: "Ультракомпактный и легкий сканер штрих-кодов для небольших торговых точек. Простое и экономичное решение.",
    price: 4999,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fscanberry.ru%2Fcache%2Fproducts%2F29896%2Fruchnye_skanery_shtrikh_koda_newland_wd2_wd2_bs50_sr_0_600_600.webp&f=1&nofb=1&ipt=4841383d5786fb6e96866ba216861b4ff1119a592539faae771646d636b6988b",
    category: "barcode-scanners",
    features: [
      "Сверхлегкий вес (всего 120г)",
      "Поддержка основных 1D штрих-кодов",
      "USB интерфейс",
      "Не требует дополнительного ПО",
      "Автоматическое определение и сканирование",
      "Доступная цена для малого бизнеса"
    ],
    inStock: true,
    new: true,
  },
  {
    id: "cash-drawer-cd350",
    name: "Денежный ящик CD350",
    description: "Прочный денежный ящик с 5 отделениями для купюр и 8 для монет, включает съемный лоток для денег.",
    price: 7499,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.ozone.ru%2Fs3%2Fmultimedia-g%2Fc600%2F6022865704.jpg&f=1&nofb=1&ipt=64d9dc3b175c351d3f302c0581dec1496101c1d163460108eeeba919b5502b40",
    category: "cash-drawers",
    features: [
      "5 отделений для купюр",
      "8 регулируемых отделений для монет",
      "Съемный лоток для денег",
      "RJ11 интерфейс для подключения к POS",
      "Замок с 2 положениями",
      "Стальная конструкция для долговечности"
    ],
    inStock: true,
  },
  {
    id: "cash-drawer-cd450",
    name: "Денежный ящик CD450 Усиленный",
    description: "Усиленный денежный ящик с повышенной защитой от взлома. Увеличенная вместимость и надежная система блокировки.",
    price: 10999,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fskat-soft.ru%2Fcache%2Fcatalog%2F118%2F87f982331d5979431767f487bafe96994060478a.d1f838d7.jpg&f=1&nofb=1&ipt=2d25939934c90b771345464211e5487f07ccca4669f8de86e43105880c049922",
    category: "cash-drawers",
    features: [
      "Усиленная стальная конструкция толщиной 2мм",
      "6 отделений для купюр большой емкости",
      "8 регулируемых отделений для монет",
      "Система защиты от взлома",
      "Многопозиционный замок повышенной секретности",
      "Счетчик открытий ящика"
    ],
    inStock: true,
    bestSeller: true,
  },
  {
    id: "cash-drawer-cd250",
    name: "Компактный денежный ящик CD250",
    description: "Компактный денежный ящик для небольших торговых точек с ограниченным пространством. Оптимальное сочетание размера и функциональности.",
    price: 5499,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftermoprint.com.ua%2Fimage%2Fcache%2Fcatalog%2Fdenezhnyj_yashhik%2Fdenezhnyj_yashhik_maken_ek_240b_rj11_12_24v_00-800x800.png&f=1&nofb=1&ipt=0575c9529f8f5e3b7451fdc278f3a3a3b7853b1f73d7defd68fa8613e3f98120",
    category: "cash-drawers",
    features: [
      "Компактные размеры (330x280x90мм)",
      "4 отделения для купюр",
      "6 отделений для монет",
      "Отделение для документов/чеков",
      "Простое подключение к POS-системе",
      "Надежный механизм открывания"
    ],
    inStock: true,
    new: true,
  },
  {
    id: "customer-display-lcd8500",
    name: "Дисплей покупателя LCD8500",
    description: "Двухстрочный дисплей покупателя для отображения информации о транзакции и рекламных сообщений.",
    price: 4999,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpaytor.ru%2Fupload%2Fiblock%2F885%2Fwcp7apk1129hn6jxiqt6kmq1rtc95xye.png&f=1&nofb=1&ipt=6b6aceb8f9f9fd56c4273e668d7a98d29dbef9f602c8593fa6e99f9ad63fcdb4",
    category: "customer-displays",
    features: [
      "2x20 символьный дисплей",
      "Регулируемый угол наклона",
      "Питание от USB",
      "Совместим с основным ПО для POS",
      "Настраиваемое приветственное сообщение",
      "Яркий синий ЖК-дисплей"
    ],
    inStock: true,
    new: true,
  },
  {
    id: "customer-display-lcd9000",
    name: "Графический дисплей покупателя LCD9000",
    description: "Современный графический дисплей с возможностью показа логотипов, изображений и разнообразной информации для клиента.",
    price: 8999,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsoftkassa.ru%2Fimage%2Fcache%2Fcatalog%2Fphoto%2Fposcenter%2F7167-1000x1000.jpg&f=1&nofb=1&ipt=d081423c5a59cceeba4c88158ee560dd622145c424450b5b810d60f9ede576f5",
    category: "customer-displays",
    features: [
      "7-дюймовый цветной TFT дисплей",
      "Разрешение 800x480",
      "Поддержка изображений и видеоконтента",
      "USB и HDMI интерфейсы",
      "Встроенные динамики",
      "Возможность трансляции рекламных роликов"
    ],
    inStock: true,
    bestSeller: true,
  },
  {
    id: "touchscreen-monitor-tm156",
    name: "Сенсорный монитор TM156",
    description: "Сенсорный 15,6-дюймовый монитор с креплением VESA, идеально подходит в качестве второго экрана или экрана для клиентов.",
    price: 17999,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg0.festima.ru%2F2%2FOboR7LaylVMnRVdWb4BE9OhPlVWxTZc&f=1&nofb=1&ipt=364dc6cf9a06715abf252518b9b8647e2186c257e6dff155186ee0e0a452e5a0",
    category: "accessories",
    features: [
      "15.6\" сенсорный дисплей",
      "Разрешение 1920x1080 Full HD",
      "10-точечный мультитач",
      "Совместимость с креплением VESA",
      "Подключение USB-C и HDMI",
      "Регулируемая подставка в комплекте"
    ],
    inStock: true,
    new: true,
  },
  {
    id: "paper-rolls-80mm",
    name: "Термобумага 80мм (упаковка 20 шт)",
    description: "Высококачественная термобумага 80мм для чековых принтеров, без BPA.",
    price: 2599,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fitems.s1.citilink.ru%2F1722148_v01_b.jpg&f=1&nofb=1&ipt=f7d5060e566a0da78abe2532987d56069d84414ab7405912fd7977ff03274883",
    category: "accessories",
    features: [
      "Ширина 80мм",
      "Диаметр 80мм",
      "Бумага без BPA",
      "20 рулонов в упаковке",
      "Совместима со всеми стандартными 80мм термопринтерами",
      "Высококачественная поверхность для печати"
    ],
    inStock: true,
  },
  {
    id: "pos-keyboard",
    name: "Программируемая POS-клавиатура KB78",
    description: "Программируемая клавиатура с 78 клавишами и встроенным считывателем магнитных карт для быстрого ввода данных.",
    price: 8499,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.made-in-china.com%2F2f0j00QSZanvPykmog%2F78-Keys-POS-Programmable-Keyboard-GS-KB78-.jpg&f=1&nofb=1&ipt=3262d9940044714357c0774bb4c1e4745d2e69c38987eb80a1e95a79dacb928d",
    category: "accessories",
    features: [
      "78 программируемых клавиш",
      "Встроенный считыватель магнитных карт",
      "Возможность настройки раскладки",
      "Прочная конструкция для интенсивного использования",
      "USB-интерфейс",
      "Совместимость со всеми основными POS-системами"
    ],
    inStock: true,
    bestSeller: false,
  },
  {
    id: "cash-counter",
    name: "Счетчик банкнот SC2000",
    description: "Профессиональный счетчик банкнот с определением подделок и сортировкой по номиналу. Высокая скорость пересчета.",
    price: 12999,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vseinstrumenti.ru%2Fimages%2Fgoods%2Ftovary-dlya-ofisa-i-doma%2Fsnabzhenie-i-osnaschenie-ofisa%2F1430916%2F1200x800%2F52284253.jpg&f=1&nofb=1&ipt=c75c82b4ab55036b327484e3e2c9031bad5329fb488bf4db4c604530f84286c1",
    category: "accessories",
    features: [
      "Скорость пересчета: 1000 банкнот/мин",
      "УФ, магнитная и инфракрасная детекция подделок",
      "LCD-дисплей с подробной информацией",
      "Функция фасовки и пакетного пересчета",
      "Определение номинала и подсчет суммы",
      "Компактный дизайн для размещения на кассе"
    ],
    inStock: true,
    new: true,
  },
  {
    id: "mobile-pos-m100",
    name: "Мобильный POS-терминал M100",
    description: "Компактный мобильный POS-терминал на базе Android для выездной торговли и курьерских служб.",
    price: 19999,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkiosks.ru%2Fwp-content%2Fuploads%2F2020%2F05%2FMobilnyi-POS-terminal-TPS900.png&f=1&nofb=1&ipt=7d0a3438af9eca9ea0499adeb2c56c8c43dac8dca110e25608f4c7d6bac52dd7",
    category: "pos-terminals",
    features: [
      "Операционная система Android 11",
      "Встроенный 4G/LTE модуль",
      "5.5\" сенсорный дисплей",
      "Встроенный принтер чеков 58мм",
      "Аккумулятор 3000 мАч",
      "Поддержка Wi-Fi, Bluetooth, NFC",
      "Встроенный сканер штрих-кодов"
    ],
    inStock: true,
    new: true,
  },
  {
    id: "fiscal-printer-fp100",
    name: "Фискальный регистратор ФР-100",
    description: "Компактный фискальный регистратор для малого и среднего бизнеса, полностью соответствующий требованиям 54-ФЗ.",
    price: 23999,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fskat-soft.ru%2Fcache%2Fcatalog%2F105%2F62488bfc5c6c9fb5aac4afbad757cb89736e5103.609c5922.jpg&f=1&nofb=1&ipt=d7c61afd57a1d6c57cae68b75159cb3da6f0f787c8d8b769b1ee30a129beaf74",
    category: "receipt-printers",
    features: [
      "Полное соответствие 54-ФЗ",
      "Работа с ЕГАИС и маркировкой",
      "Скорость печати до 150 мм/сек",
      "Ширина чековой ленты 57/80 мм",
      "Интерфейсы USB и Ethernet",
      "Встроенный отрезчик чеков",
      "Поддержка популярных программ учета"
    ],
    inStock: true,
    bestSeller: true,
  },
  {
    id: "credit-card-terminal-v9",
    name: "Банковский терминал V9",
    description: "Современный банковский терминал для приема карт с магнитной полосой, чипом и бесконтактных платежей.",
    price: 15999,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmodulkassa.ru%2Fblog%2Fcockpit%2Fstorage%2Fuploads%2F2019%2F03%2F03%2F5c7be0ead1aeeModulkassa-214.jpg&f=1&nofb=1&ipt=b1a99dfa54457e2ed1647dbfa2cb30f24f93cadbf5a5cac8fd05a1bbd37c7f34",
    category: "accessories",
    features: [
      "Прием карт с магнитной полосой и чипом",
      "Поддержка бесконтактных платежей",
      "Цветной сенсорный дисплей",
      "Встроенный принтер чеков",
      "Подключение по Wi-Fi и 3G/4G",
      "Совместимость с основными банками РФ",
      "Компактные размеры"
    ],
    inStock: true,
    bestSeller: false,
  },
  {
    id: "weighing-scale-ws200",
    name: "Торговые весы WS-200",
    description: "Высокоточные электронные весы для торговли с возможностью подключения к POS-системе.",
    price: 8999,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fanalytprom.ru%2Fwp-content%2Fuploads%2F2021%2F08%2FTB-S-RL1_right_full-3.jpg&f=1&nofb=1&ipt=a2c6374e4a3e81a39552e2ba26d8044f935ec273f5102781a2bf959e419988ee",
    category: "accessories",
    features: [
      "Максимальная нагрузка 30 кг",
      "Точность измерения 5 г",
      "ЖК-дисплей с подсветкой",
      "Интерфейс RS-232 для подключения к POS",
      "Функция тарирования",
      "Питание от сети и аккумулятора",
      "Платформа из нержавеющей стали"
    ],
    inStock: true,
    new: true,
  },
  {
    id: "label-printer-lp420",
    name: "Принтер этикеток LP420",
    description: "Высокоскоростной принтер этикеток для розничной торговли, складской логистики и маркировки товаров.",
    price: 13999,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmertech.ru%2Fimage%2Fcatalog%2Farticles%2Fprintery%2Fpechat%2Fprinter-pechat-main.jpg&f=1&nofb=1&ipt=ddce9eaf10cbecc12120843d3872ed28469a646777866539974d36cd75a63ddd",
    category: "receipt-printers",
    features: [
      "Печать штрих-кодов и QR-кодов",
      "Разрешение 203 dpi",
      "Скорость печати до 152 мм/сек",
      "Максимальная ширина печати 104 мм",
      "Интерфейсы USB и Ethernet",
      "Автоматическая калибровка",
      "Поддержка различных материалов этикеток"
    ],
    inStock: true,
    bestSeller: false,
  },
  {
    id: "barcode-printer-bp520",
    name: "Промышленный принтер штрих-кодов BP520",
    description: "Мощный промышленный принтер штрих-кодов для интенсивного использования на складах и производстве.",
    price: 29999,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fru.idprt.com%2Fuploads%2Fonline_edit_pic%2F20241129%2F1732863465776866.png&f=1&nofb=1&ipt=6f55d83eb14a1a5ce2858e3fc1e666ff7e9733ec05caab43db107449f868679f",
    category: "receipt-printers",
    features: [
      "Металлический корпус повышенной прочности",
      "Разрешение печати 300 dpi",
      "Скорость печати до 254 мм/сек",
      "Печать этикеток шириной до 170 мм",
      "Встроенный отделитель этикеток",
      "Интерфейсы USB, Serial, Parallel, Ethernet",
      "Большой объем встроенной памяти"
    ],
    inStock: true,
    new: false,
  },
  {
    id: "touch-monitor-tm215",
    name: "Сенсорный монитор TM215",
    description: "Профессиональный сенсорный монитор 21.5 дюйма для POS-систем и интерактивных киосков.",
    price: 24999,
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pro-shop.ua%2Fthumb%3Fsrc%3Dpic%2Fprod%2F1672.jpg%26width%3D400%26height%3D520&f=1&nofb=1&ipt=a70e051f62de0fca7b8c9d74af7d4725ebeb734f2437801e3a7f218e6d809f7c",
    category: "accessories",
    features: [
      "21.5\" Full HD IPS-дисплей",
      "Проекционно-ёмкостный 10-точечный сенсор",
      "Защитное стекло повышенной прочности",
      "Интерфейсы HDMI, VGA, DisplayPort",
      "Встроенные динамики",
      "Регулируемая подставка",
      "Крепление VESA 100x100"
    ],
    inStock: true,
    bestSeller: true,
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.bestSeller || product.new);
};

export const getCategories = () => {
  const categories = products.map(product => product.category);
  return [...new Set(categories)];
};

export const getCategoryName = (category: string): string => {
  switch(category) {
    case "pos-terminals": return "POS-терминалы";
    case "receipt-printers": return "Принтеры чеков";
    case "barcode-scanners": return "Сканеры штрих-кодов";
    case "cash-drawers": return "Денежные ящики";
    case "customer-displays": return "Дисплеи покупателя";
    case "accessories": return "Аксессуары";
    default: return category;
  }
};
