import { INewsItem } from "./INewsItem";


export const initialNewsList:INewsItem[] = [
  {
    id: "1",
    title:  "Известное растение оказалось средством против ожирения",
    content: `Экстракты из частей плодов кешью, которые обычно выбрасываются
    при промышленной переработке орехов, замедляют рост жировых клеток и накопление жира.
    К такому выводу пришли ученые из Университета Цукубы в Японии. Исследование опубликовано
    в Scientific Reports.
    В ходе эксперимента использовались экстракты из ядра ореха, высушенного яблока кешью и
    его твердой оболочки. Эти вещества применяли к клеткам, способным превращаться в адипоциты —
    зрелые жировые клетки. Оказалось, что экстракт из оболочки кешью особенно эффективно тормозит
    образование жировых клеток, подавляя работу транскрипционных факторов --белков, включающих гены,
    отвечающие за жировое преобразование.
    Экстракт из яблока кешью также повлиял на эти факторы, но слабее: он снижал накопление жира в уже
    сформированных клетках, не мешая их появлению. А экстракт из ореха, напротив, не влиял на
    образование клеток, но усиливал выработку адипонектина — белка, который помогает организму
    эффективнее использовать инсулин, сжигать жир и снижать воспаление.
    Авторы исследования подчеркивают, что разные части растения кешью действуют по-разному, но в
    комплексе дают потенциал для создания натуральных средств против ожирения. В будущем планируется
    выделить из этих отходов активные вещества и изучить их влияние на метаболическое здоровье.`,
    imageUrl: "https://icdn.lenta.ru/images/2025/03/28/14/20250328144651222/owl_detail_620_b60ccaf830612f0e5d55f773430cbe37.jpg"
  },
  {
    id: "2",
    title: "В смартфоне китайского бренда обнаружили платную кнопку",
    content: `Журналисты издания Android Authority нашли в новом смартфоне Nothing Phone (3a) кнопку с
    платными функциями. Об этом сообщается в заметке на сайте медиа.
    Phone (3a) — новый смартфон китайской компании Nothing, созданной основателем бренда OnePlus Карлом
    Пэем. Представленный в начале марта гаджет получил физическую кнопку Essential Key, нажатием на
    которую запускается сервисное приложение Essential Space с функциями искусственного интеллекта (ИИ).
    Специалисты Android Authority изучили код приложения и нашли там упоминание платных функций.
    Так, в коде обнаружили словосочетания «бесплатная пробная версия» и «120 долларов». Из этого они
    сделали вывод, что сервис, который будет работать при нажатии кнопки Essential Key, будет стоить
    по подписке 120 долларов, или около 10 тысяч рублей — вероятно, в год. При этом стоимость Nothing
    Phone (3a) составляет 379 долларов, или около 32 тысяч рублей. В коде приложения также нашли
    упоминание новых ИИ-функций. Так, в смартфоне появится продвинутый поиск Focused Search и умный
    диктофон Flip to Record.
    Журналисты обратились за комментарием в Nothing, где не стали ни подтверждать, ни опровергать, что
    в их смартфоне появятся платные функции. В фирме допустили, что сервис Essential Space может стать
    платным, но пока в компании не приняли окончательное решение. В конце марта корпорация Google
    подтвердила, что будет секретно заниматься разработкой операционной системы Android. Компания будет
    разрабатывать новые функции в закрытом режиме и показывать их только в готовом виде.`,
    imageUrl: "https://icdn.lenta.ru/images/2025/03/27/20/20250327200750620/owl_detail_620_0f0f4a70951b2d9fbddcec03dfcad1b4.jpg"
  },

  {
    id: "3",
    title: "Samsung выпустила телевизор за три миллиона рублей",
    content: `Южнокорейская корпорация Samsung запустила продажи QLED-телевизоров разрешением 8K.
    Об этом сообщается на сайте компании в США.
    Новые телевизоры линейки Neo QLED имеют разрешение 4K и 8K. Стоимость самой дорогой 4K-версии QN90F
    с диагональю 98 дюймов составляет 15 тысяч долларов, или около 1,3 миллиона рублей. Самый дорогой
    8K-телевизор QN990F, который получил 98-дюймовый экран, оценили в 40 тысяч долларов, или около
    3,4 миллиона рублей.
    В корпорации отметили, что представили устройства с самой качественной картинкой на рынке.
    Телевизоры основаны на светодиодах Quantum Matrix Mini, имеют процессор NQ8 AI Gen3, поддержку
    технологии улучшения качества изображения Samsung Vision AI на основе искусственного интеллекта (ИИ).
    Также в телевизорах есть функция AI Motion Enhancer Pro, которая сглаживает контуры объектов, находящихся
     в движении. Телевизор поддерживают частоту обновления 240 герц. Все модели оснащены динамиками с
     технологией объемного звука Dolby Atmos.
     В середине марта японская корпорация Sony представила новую технологию подсветки RGB LED для телевизоров
     будущего. По словам представителей фирмы, технология объединяет качества подсветок Mini LED и OLED.`,
    imageUrl: "https://icdn.lenta.ru/images/2025/03/28/13/20250328134706545/owl_detail_620_60b838ad2c41a2c60f448695ba776199.jpg"
  },
  {
    id: "4",
    title: "Google засекретила разработку Android",
    content: `Юмериканская корпорация Google будет секретно заниматься разработкой операционной системы (ОС) Android.
    Об этом сообщает издание Android Authority. Источники медиа рассказали, что в Google собрались работать над
    проектом Android Open Source Project, на котором основана Android, при «закрытых дверях». Это означает, что
    компания не будет публиковать информацию о новых функциях ОС до тех пор, пока работа над ними не завершится.
    Авторы издания обратились в Google за комментарием и получили подтверждение. В корпорации заявили, что будут
    реже демонстрировать различные части кода ОС всем желающим, но продолжат рассказывать о новых возможностях
    Android и принимать предложения сторонних разработчиков. Представители проекта Android подчеркнули, что для
    большинства разработчиков и пользователей ничего не поменяется. Также в компании не собираются скрывать исходный код ОС.
    Журналисты подытожили, что благодаря открытости Android ее могут модернизировать как разработчики, так и пользователи.
    Они заключили, что в Google выступят с официальном анонсом относительно порядка разработки Android позже.
    Ранее корпорация Samsung определилась с датой выпуска крупного обновления Android для своих смартфонов.
    Версия Android 15 с One UI 7 будет доступна на ряде устройств с 7 апреля.`,
    imageUrl: "https://icdn.lenta.ru/images/2025/03/26/19/20250326191235040/owl_detail_620_58a5cb827e47a2ba1aac054646bad715.jpg"
  },
  {
    id: "5",
    title: "В России одобрили производство самолетов МС-21",
    content: `Компания «Яковлев» (входит в Объединенную авиастроительную корпорацию «Ростеха») получила одобрение Росавиации
    на серийное производство среднемагистральных пассажирских самолетов МС-21. Об этом сообщили в компании, передает ТАСС.
    Комиссия Росавиации провела выездную проверку на соответствие систем обеспечения качества и управления безопасностью полетов
     «Яковлева» требованиям федеральных правил. «По результатам проверки "Яковлев" получил новый, расширенный сертификат
     одобрения производственной организации № ФАВТ-И-11. В разделе "Перечень разрешенных работ", помимо самолета SSJ-100, теперь
     указан самолет МС-21», — говорится в сообщении. Отмечается, что в перечень также вошли некоторые комплектующие:
     многофункциональный индикатор, интегрированная вычислительная система и бортовой брандмауэр. Ранее в марте министр
     промышленности и торговли России Антон Алиханов сообщил, что сертификационные полеты МС-21 с российскими двигателями ПД-14
     планируют начать летом. Испытательные полеты лайнера уже идут, но пока используются двигатели иностранного производства.`,
    imageUrl: "https://icdn.lenta.ru/images/2025/03/26/18/20250326180440608/owl_detail_620_4a432e34514c13c2350b8aab5d360286.jpg"
  },
  {
  id: "6",
  title: "Овечкин забросил 890-ю шайбу",
  content: `Российский нападающий и капитан «Вашингтон Кэпиталс» Александр Овечкин отличился в матче регулярного чемпионата против «Баффало Сэйбрс» в Национальной хоккейной лиге (НХЛ). Об этом сообщает корреспондент «Ленты.ру».

Форвард поразил ворота соперников в третьем периоде. Для Овечкина эта шайба стала 890-й в карьере в регулярных чемпионатах НХЛ. Таким образом, он сократил отставание от лидирующего по этому показателю канадца Уэйна Гретцки до четырех голов (894).

На момент публикации новости счет в матче 6:4 в пользу «Баффало». Овечкин, помимо гола, отметился результативной передачей.

Овечкин выступает в НХЛ с 2005 года, на протяжении всей заокеанской карьеры он играет за «Вашингтон». Вместе с клубом российский нападающий в 2018 году выиграл Кубок Стэнли.`,
  imageUrl: "https://icdn.lenta.ru/images/2025/03/31/00/20250331002759125/owl_detail_620_cebfa92ce42241a4929049fd15c77541.jpg"
},
]
