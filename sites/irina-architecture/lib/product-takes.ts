export type TakeKind = "right" | "left" | "wide" | "note" | "reel" | "review";

export type TakeFrame = { src: string; wide?: boolean; narrow?: boolean };

export type ProductTake = {
  title: string;
  text: string;
  kind: TakeKind;
  image?: string;
  frames?: TakeFrame[];
  sign?: string;
  signMeta?: string;
};

const works = {
  stageP: ["pokrovskiy-pryanik", "dobrograd", "saburovo", "kabardinka", "ples"],
  stageR: ["dobrograd", "saburovo", "pokrovskiy-pryanik", "lomonosova", "ksk"],
  survey: ["lomonosova", "monastyr", "dobrograd", "saburovo", "pokrovskiy-pryanik"],
  spatial: ["ples", "zagoryansky", "novoe", "dobrograd", "kabardinka"],
  feasibility: ["pokrovskiy-pryanik", "altai", "gostec", "hatminki", "dobrograd"],
  sketch: ["ples", "barmino", "ivan-zaitsev", "agalarov", "novoe"],
  analysis: ["lomonosova", "monastyr", "balyaga", "kadala", "ples"],
  brief: ["saburovo", "dobrograd", "kabardinka", "pokrovskiy-pryanik", "ples"],
  ago: ["monastyr", "balyaga", "darasun", "kadala", "kalga"],
  consulting: ["pokrovskiy-pryanik", "saburovo", "dobrograd", "lomonosova", "kabardinka"],
  client: ["pokrovskiy-pryanik", "dobrograd", "saburovo", "kabardinka", "monastyr"],
  cm: ["saburovo", "dobrograd", "ksk", "lomonosova", "pokrovskiy-pryanik"],
  supervision: ["saburovo", "dobrograd", "lomonosova", "ivan-zaitsev", "pokrovskiy-pryanik"],
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
        text: "Учитываем архитектурный код места и культурный код заказчика, сообщества и территории, а также культурные тенденции.",
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
        text: "Проектируем не для галочки или экспертизы, а так, чтобы решения закрывали текущие задачи и оставляли возможность для развития объекта.",
        image: "/assets/lodge.jpg",
      },
      {
        kind: "review",
        title: "Проект как единая система.",
        text: "Все 15 разделов велись согласованно и были подчинены генеральному замыслу. Комплект не собирали из разрозненных частей.",
        image: "/assets/portfolio/saburovo/voice.jpg",
        sign: "Главный инженер",
        signMeta: "Доброград",
      },
      {
        kind: "note",
        title: "100% гарантия положительного заключения экспертизы.",
        text: "По нашим проектам не было ни одного отказа в выдаче разрешения на строительство или положительного заключения экспертизы.",
        image: "/assets/mansion-hero.jpg",
      },
      {
        kind: "left",
        title: "Глубокая инженерная экспертиза.",
        text: "Сильные компетенции в конструкциях, технологиях и инженерных решениях.",
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
        text: "Каждое решение принято расчётом, без перезакладывания параметров, и содержит полные спецификации.",
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
        text: "Берёмся за сложные конструкции и нестандартные задачи.",
        image: "/assets/portfolio/ksk/01.jpg",
      },
      {
        kind: "left",
        title: "Педантичность.",
        text: "Высокое качество рабочей документации.",
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
        text: "Обследуем по ГОСТ 31937-2011 и СП 13-102-2003.",
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
