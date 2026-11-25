export type TakeKind = "right" | "left" | "wide" | "note" | "reel" | "review";

export type TakeFrame = { src: string; wide?: boolean; narrow?: boolean };

export type ProductTake = {
  title: string;
  text: string;
  kind: TakeKind;
  image?: string;
  logo?: string;
  frames?: TakeFrame[];
  sign?: string;
  signMeta?: string;
};

const works = {
  stageP: ["pokrovskiy-pryanik", "dobrograd", "saburovo", "kabardinka"],
  stageR: ["dobrograd", "saburovo", "pokrovskiy-pryanik", "lomonosova", "ksk", "novoe"],
  survey: ["lomonosova", "monastyr", "dobrograd", "saburovo", "pokrovskiy-pryanik"],
  spatial: ["zagoryansky", "novoe", "dobrograd", "kabardinka"],
  feasibility: ["pokrovskiy-pryanik", "altai", "gostec", "hatminki", "dobrograd"],
  sketch: ["barmino", "ivan-zaitsev", "agalarov", "novoe"],
  analysis: ["lomonosova", "monastyr", "balyaga", "kadala"],
  brief: ["saburovo", "dobrograd", "kabardinka", "pokrovskiy-pryanik"],
  ago: ["monastyr", "balyaga", "darasun", "kadala", "kalga"],
  consulting: ["pokrovskiy-pryanik", "saburovo", "dobrograd", "lomonosova", "kabardinka"],
  client: ["pokrovskiy-pryanik", "dobrograd", "saburovo", "kabardinka", "monastyr"],
  cm: ["saburovo", "dobrograd", "ksk", "lomonosova", "pokrovskiy-pryanik"],
  supervision: ["saburovo", "dobrograd", "lomonosova", "ivan-zaitsev", "pokrovskiy-pryanik"],
};

const customerReview: ProductTake = {
  kind: "review",
  title: "",
  text: "Нам нужна была проектная документация, по которой можно и защититься на экспертизе, и выйти на площадку. Бюро собрало стадию П как одну систему: архитектура, конструкции и инженерия не расходятся, решения читаются, а запас не накручен сверх нормы.",
  image: "/assets/vereshchagin.jpg",
  logo: "/assets/dobrograd-logo.png",
  sign: "Верещагин Вадим Сергеевич",
  signMeta: "Руководитель проектов",
};

export const productTakes: Record<string, { takes: ProductTake[]; works: string[] }> = {
  "stage-p": {
    works: works.stageP,
    takes: [
      {
        kind: "right",
        title: "Предпроектный анализ.",
        text: "Уточняем исходные данные, эскизную концепцию, помогаем с заданием, формируем график и дорожную карту жизни проекта.",
        image: "/assets/bureau.jpg",
      },
      {
        kind: "reel",
        title: "Глубокое чтение контекста.",
        text: "Учитываем архитектурный код места и культурный код заказчика, сообщества и территории, экономику (если проект коммерческий), а также все культурные, технические и технологические тенденции.",
        frames: [
          { src: "/assets/territory.jpg", wide: true },
          { src: "/assets/portfolio/dobrograd/street.jpg" },
          { src: "/assets/vladimir-assumption-context.jpg", narrow: true },
          { src: "/assets/portfolio/ples/01.jpg" },
          { src: "/assets/portfolio/kabardinka/01.jpg", wide: true },
        ],
      },
      {
        kind: "wide",
        title: "Оптимизация и уникальные решения.",
        text: "Сначала смотрим, закрывает ли задачу обычное решение: знакомый узел, понятная цена, подрядчик, который это уже ставил. Если закрывает — его и берём. Уникальное появляется, когда участок, пролёт, нагрузка или деньги в каталог не помещаются. Тогда сравниваем варианты на стадии П, пока замена ещё не стоит стройки: что легче, что дешевле собрать, что пройдёт норму и что реально поставят на площадке. Оптимизация здесь не урезание запаса и не приём ради картинки. Лишнее сечение уходит, нужное остаётся — и в проекте видно, почему выбрано именно оно.",
        image: "/assets/lodge.jpg",
      },
      customerReview,
      {
        kind: "note",
        title: "Гарантия положительного заключения экспертизы.",
        text: "Мы занимаемся согласованием проектов уже больше 15 лет, как на региональном, так и на федеральном уровне. Накоплен немалый опыт, поэтому сегодня мы гарантируем результат, если берёмся за дело.",
        image: "/assets/mansion-hero.jpg",
      },
      {
        kind: "left",
        title: "Инженерная экспертиза как способ смотреть на мир.",
        text: "За плечами команды бюро больше сотни проектов. Где-то мы решали отдельные задачи, а где-то работали «под ключ». Частные владения, многоквартирные дома, коммерческая и промышленная недвижимость, отдельные инженерные сооружения — добрая половина палитры ПГС пройдена нами в «мелкую клетку». Мы с удовольствием делимся накопленным опытом и с энтузиазмом берёмся за новые задачи, будем рады помочь и вам!",
        image: "/assets/house.jpg",
      },
    ],
  },
  "stage-r": {
    works: works.stageR,
    takes: [
      {
        kind: "right",
        title: "Расчётное обоснование решений.",
        text: "Каждое сечение и узел приняты расчётом. Нормы уже держат свой запас — сверх него не перезакладываем: лишняя прочность не делает объект надёжнее, она делает его тяжелее и дороже. Спецификация полная, на площадке ставят то, что посчитано.",
        image: "/assets/house.jpg",
      },
      {
        kind: "reel",
        title: "Свобода решений.",
        text: "Не ограничены привычными конструкциями и технологиями — выбираем лучший способ реализовать архитектурный замысел.",
        frames: [
          { src: "/assets/portfolio/dobrograd/panels.jpg", wide: true },
          { src: "/assets/portfolio/dobrograd/street.jpg" },
          { src: "/assets/portfolio/saburovo/01.jpg", narrow: true },
          { src: "/assets/lodge.jpg" },
          { src: "/assets/mansion.jpg", wide: true },
        ],
      },
      {
        kind: "wide",
        title: "Логика строительства.",
        text: "Проектируем рабочую документацию с учётом технологии и последовательности реальных строительных работ. Документация ёмкая: технологические описания и регламенты к каждому процессу строительства.",
        image: "/assets/portfolio/dobrograd/01.jpg",
      },
      {
        kind: "review",
        title: "Конструкция как продолжение архитектуры.",
        text: "Проектируем так, чтобы инженерия поддерживала архитектуру и максимально раскрывала идею объекта.",
        image: "/assets/portfolio/saburovo/01.jpg",
      },
      {
        kind: "note",
        title: "Цифровые модели.",
        text: "Как гарантия исключения коллизий.",
        image: "/assets/lab.jpg",
      },
      {
        kind: "left",
        title: "Чек-лист контроля для заказчика.",
        text: "Понятный инструмент, который помогает заказчику контролировать ход строительства в зоне своей ответственности. Это не замена технадзору: только то, что важно и доступно именно заказчику.",
        image: "/assets/bureau.jpg",
      },
      {
        kind: "right",
        title: "Готовность к вызовам.",
        text: "Новым материалам и технологиям мы не противимся. Возражаем только тогда, когда практика уже показала, чего они не могут. Норму, протокол испытаний и инструкцию производителя читаем сами, а не только в пересказах коллег. Чего ещё не знаем, не изображаем знакомым: разбираем по первоисточнику и доводим до узла, по которому можно строить. Ответ «мы так не делаем» у нас не принимается.",
        image: "/assets/portfolio/ksk/01.jpg",
      },
      {
        kind: "left",
        title: "Педантичность.",
        text: "Размер на плане, отметка на разрезе и выноска узла сходятся между собой, с нами прорабу не приходится выбирать, какой цифре верить. Каждый узел, который встретится на площадке, нарисован отдельно, а не закрыт словами «по месту». Если стена сдвинулась, вместе с ней меняются разрез, ведомость и соседний раздел — правка выходит листом, а не устным замечанием. Ответ на вопрос монтажника лежит на том листе, где стоит марка: номер узла, привязка, смежный чертёж. С площадки нам звонят про изменившуюся стройку, а не про недосказанный чертёж.",
        image: "/assets/home-consulting-drawings.jpg",
      },
    ],
  },
  survey: {
    works: works.survey,
    takes: [
      {
        kind: "right",
        title: "Обосновано расчётами.",
        text: "Обследование по ГОСТ 31937 и СП 13-102 начинается со сплошного осмотра и им не кончается: дальше вскрытия, фактические сечения, прочность и армирование. Архивный чертёж — гипотеза, пока его не подтвердили на месте. Все дефекты попадают в ведомость не только с указанием размеров и привязок, но и чётким выводом и рекомендацией. Категорию общего технического состояния даёт поверочный расчёт по фактической схеме и нагрузкам, а не ширина трещины на глаз. Из заключения видно, что оставить, что ограничить и что усиливать.",
        image: "/assets/house.jpg",
      },
      {
        kind: "wide",
        title: "Техническая вооружённость.",
        text: "Используем современное оборудование и методы обследования.",
        image: "/assets/lab.jpg",
      },
      {
        kind: "review",
        title: "Основа для решений.",
        text: "Полноценный отчёт, достаточный для принятия стратегических решений без риска ошибок.",
        image: "/assets/bureau.jpg",
      },
      {
        kind: "left",
        title: "Нормативная экспертиза.",
        text: "Глубокое понимание нормативов и работы по землепользованию, правилам застройки и работе с наследием.",
        image: "/assets/portfolio/monastyr/01.jpg",
      },
    ],
  },
  spatial: {
    works: works.spatial,
    takes: [
      {
        kind: "right",
        title: "Связка с экономикой и потребительским опытом.",
        text: "Поженим возможности и задачи.",
        image: "/assets/houses-concept.jpg",
      },
      {
        kind: "wide",
        title: "Связка с нормативной и технологической базой.",
        text: "Проверяем решения на соответствие нормативной и технологической базе.",
        image: "/assets/houses-masterplan-ruza.jpg",
      },
      {
        kind: "review",
        title: "Эффективные технико-экономические показатели.",
        text: "В том числе с приглашёнными экспертами.",
        image: "/assets/vladimir-master-plan-render.jpg",
      },
      {
        kind: "left",
        title: "Связка с АГО.",
        text: "Берём за основу согласованную концепцию и АГО.",
        image: "/assets/vladimir-ago-temple.jpg",
      },
    ],
  },
  feasibility: {
    works: works.feasibility,
    takes: [
      {
        kind: "right",
        title: "Моделирование и фиксация показателей.",
        text: "Предпроектное моделирование и фиксация технико-экономических показателей для расчёта цен.",
        image: "/assets/resort.jpg",
      },
      {
        kind: "wide",
        title: "Реальные рыночные цены.",
        text: "Опираемся на актуальные рыночные цены, а не на усреднённые справочники.",
        image: "/assets/mansion.jpg",
      },
      {
        kind: "review",
        title: "Подбор оптимальных решений.",
        text: "Обосновано стоимостью, техническим решением и эстетическим уровнем.",
        image: "/assets/lodge.jpg",
      },
    ],
  },
  sketch: {
    works: works.sketch,
    takes: [
      {
        kind: "right",
        title: "Открытость.",
        text: "Консультация — бесплатная.",
        image: "/assets/consulting-meeting.jpg",
      },
      {
        kind: "wide",
        title: "Свобода.",
        text: "Эскизируем что хочешь.",
        image: "/assets/houses-concept.jpg",
      },
      {
        kind: "review",
        title: "Забота.",
        text: "Памятка, чек-лист.",
        image: "/assets/home-private-meadow-life.jpg",
      },
    ],
  },
  analysis: {
    works: works.analysis,
    takes: [
      {
        kind: "wide",
        title: "Ранняя оценка рисков.",
        text: "Оцениваем риски прохождения согласований и экспертизы.",
        image: "/assets/territory.jpg",
      },
      {
        kind: "review",
        title: "Ранняя ясность.",
        text: "На самых ранних стадиях видим, какие решения имеют потенциал пройти согласования и экспертизы, а какие будут проблемными, и на основании этого можем довольно быстро предложить концептуальное видение будущего проекта.",
        image: "/assets/vladimir-concept-aerial.jpg",
      },
    ],
  },
  brief: {
    works: works.brief,
    takes: [
      {
        kind: "review",
        title: "Независимость.",
        text: "Разрабатываем ТЗ не под себя, а делаем универсальный документ, с которым заказчик может пойти в любое другое бюро или в частную практику.",
        image: "/assets/home-consulting-drawings.jpg",
      },
    ],
  },
  ago: {
    works: works.ago,
    takes: [
      {
        kind: "right",
        title: "По стандартам градсовета.",
        text: "Подготовим по стандартам градсовета и территории.",
        image: "/assets/vladimir-ago-temple.jpg",
      },
      {
        kind: "review",
        title: "Согласование со всеми заинтересованными.",
        text: "Можем согласовать со всеми заинтересованными сторонами.",
        image: "/assets/vladimir-assumption-context.jpg",
      },
    ],
  },
  consulting: {
    works: works.consulting,
    takes: [
      {
        kind: "right",
        title: "Предпроектный аудит исходных данных.",
        text: "Аудит перед стартом работ и гарантия позитивного инвестирования в проектирование.",
        image: "/assets/consulting-meeting.jpg",
      },
      {
        kind: "wide",
        title: "Понимание действий.",
        text: "Дорожная карта и понимание стоимостей по проектным услугам: что и куда идти, какие требования по согласованиям.",
        image: "/assets/home-consulting-drawings.jpg",
      },
      {
        kind: "review",
        title: "Глубокий аудит проектной документации.",
        text: "Многоступенчатая проверка с правовой, инженерной и финансовой стороны.",
        image: "/assets/lab.jpg",
      },
    ],
  },
  client: {
    works: works.client,
    takes: [
      {
        kind: "right",
        title: "Помощь в получении исходных данных.",
        text: "Получим все нужные документы и исследования для начала проектирования. Есть опыт подачи заданий и заявок: не придётся заново получать технические условия и ГПЗУ.",
        image: "/assets/bureau.jpg",
      },
      {
        kind: "reel",
        title: "Согласования.",
        text: "Защитим проект в нужных инстанциях: министерство строительства, департамент архитектуры, министерство экологии, энергоснабжающие организации и другие. Ввод в эксплуатацию.",
        frames: [
          { src: "/assets/vladimir-assumption-context.jpg", wide: true },
          { src: "/assets/vladimir-ago-temple.jpg" },
          { src: "/assets/chapel.jpg", narrow: true },
          { src: "/assets/portfolio/monastyr/01.jpg" },
          { src: "/assets/territory.jpg", wide: true },
        ],
      },
      {
        kind: "wide",
        title: "Техническое задание для подрядчиков.",
        text: "Заказчик получает релевантные коммерческие предложения и не отвечает на лишние вопросы.",
        image: "/assets/consulting-meeting.jpg",
      },
      {
        kind: "review",
        title: "Полный цикл.",
        text: "От разработки замысла до эксплуатации и обслуживания: включаемся на любом этапе.",
        image: "/assets/home-hospitality-ruza-life.jpg",
      },
    ],
  },
  cm: {
    works: works.cm,
    takes: [
      {
        kind: "right",
        title: "Подбор подрядчиков.",
        text: "На передаче документации подрядчику вопросы либо не задаются, и проект уходит в стол, либо их слишком много. Бюро помогает вести конструктивный диалог между заказчиком и генподрядчиком.",
        image: "/assets/portfolio/saburovo/01.jpg",
      },
      {
        kind: "wide",
        title: "Проверка смет перед закупкой.",
        text: "То, что нужно, по лучшим ценам: понятные объёмы и материалы по ведомостям проекта, без изменений и отклонений от проекта.",
        image: "/assets/portfolio/dobrograd/panels.jpg",
      },
      {
        kind: "review",
        title: "Комплектация.",
        text: "Предлагаем разные варианты проверенных производителей и исполнителей.",
        image: "/assets/lodge.jpg",
      },
      {
        kind: "left",
        title: "Социальный капитал.",
        text: "Можем предложить команду квалифицированных специалистов для более точной и качественной реализации.",
        image: "/assets/bureau.jpg",
      },
    ],
  },
  supervision: {
    works: works.supervision,
    takes: [
      {
        kind: "right",
        title: "Точность воплощения замысла.",
        text: "Проверка и координация всех процессов во время строительства — от архитекторов и инженеров.",
        image: "/assets/portfolio/saburovo/01.jpg",
      },
      {
        kind: "reel",
        title: "Проектная надёжность конструкций.",
        text: "Поэтапное сопровождение скрытых работ и фиксация выполнения несущих конструкций до перехода к следующему этапу. Полное соответствие проекту.",
        frames: [
          { src: "/assets/portfolio/dobrograd/panels.jpg", wide: true },
          { src: "/assets/house.jpg" },
          { src: "/assets/portfolio/lomonosova/01.jpg", narrow: true },
          { src: "/assets/portfolio/ksk/01.jpg" },
          { src: "/assets/mansion-hero.jpg", wide: true },
        ],
      },
      {
        kind: "wide",
        title: "Фиксируем результат.",
        text: "Контроль, согласование и внесение всех изменений во время строительства в исполнительную документацию, без рисков нарушения норм.",
        image: "/assets/home-consulting-drawings.jpg",
      },
      {
        kind: "review",
        title: "Исключение человеческого фактора на стройке.",
        text: "Не надо переделывать.",
        image: "/assets/portfolio/dobrograd/street.jpg",
      },
      {
        kind: "note",
        title: "Контролируем материалы и закупки.",
        text: "Подбор, мокапы и согласования под проектный график строительства.",
        image: "/assets/lodge.jpg",
      },
      {
        kind: "left",
        title: "Присутствие в рабочих группах.",
        text: "Сводим все смежные вопросы.",
        image: "/assets/consulting-meeting.jpg",
      },
    ],
  },
};

export function productStory(slug: string) {
  return productTakes[slug];
}
