import type { Lang } from "./lang";

export const legal = {
  entity: "ООО «Ваш Проект»",
  inn: "3327121062",
  ogrn: "1143327001916",
  address: "600000, г. Владимир, ул. Георгиевская, д. 3, помещ. 1",
  email: "hello@im-architect.ru",
  phone800: "8 800 600-41-67",
  phoneMobile: "+7 915 768-04-60",
};

type Copy = {
  brand: string;
  nav: { label: string; to: string }[];
  homeCta: string;
  manifestoShort: string;
  manifestoLong: string;
  heroKicker: string;
  directionsTitle: string;
  portfolioTitle: string;
  inWorkTitle: string;
  bureauWidget: { kicker: string; title: string; body: string; cta: string };
  labWidget: { kicker: string; title: string; body: string; cta: string };
  footerNote: string;
  contact: string;
  legalPage: string;
  demo: string;
  viewAll: string;
  more: string;
};

export const irina: Record<Lang, Copy> = {
  ru: {
    brand: "Ирина Михейкина",
    nav: [
      { label: "Портфолио", to: "/portfolio" },
      { label: "Бюро", to: "/bureau" },
      { label: "Лаборатория", to: "/lab" },
      { label: "Контакт", to: "/kontakt" },
    ],
    homeCta: "Смотреть работы",
    manifestoShort:
      "Современная архитектура, всегда глубоко в контексте задачи. Сильное проектное бюро и комплексная экспертиза.",
    manifestoLong:
      "Я создаю современную архитектуру, всегда глубоко в контексте задачи, всегда многослойную и осмысленную. За каждым проектом стоит моё проектное бюро, комплексная экспертиза и умение решать задачи любой сложности на своей земле. Наши проекты живут, работают и помогают заказчикам достигать их целей — уверенно и надолго.",
    heroKicker: "Архитектор из Владимира",
    directionsTitle: "Чем я занимаюсь?",
    portfolioTitle: "Портфолио",
    inWorkTitle: "В работе",
    bureauWidget: {
      kicker: "Бюро",
      title: "Полный цикл: от замысла до площадки",
      body: "Инженерная, градостроительная, экономическая и сервисная экспертиза. Своя команда. Мы ведём проект как систему, а не как набор разделов.",
      cta: "Войти в бюро",
    },
    labWidget: {
      kicker: "Лаборатория",
      title: "Архитектурная лаборатория «Владимир»",
      body: "Независимый исследовательский проект. Изучаем владимирскую архитектурную школу и ищем, как её код работает в современных инженерных условиях.",
      cta: "К лаборатории",
    },
    footerNote: "Стенд. Фото синтетические — заменим на авторские.",
    contact: "Контакт",
    legalPage: "Реквизиты",
    demo: "Демо",
    viewAll: "Все работы",
    more: "Подробнее",
  },
  en: {
    brand: "Irina Mikheykina",
    nav: [
      { label: "Portfolio", to: "/portfolio" },
      { label: "Bureau", to: "/bureau" },
      { label: "Laboratory", to: "/lab" },
      { label: "Contact", to: "/kontakt" },
    ],
    homeCta: "See work",
    manifestoShort:
      "Contemporary architecture, always deep in the brief. A strong design bureau and complete expertise.",
    manifestoLong:
      "I make contemporary architecture that is always deep in the brief — layered and considered. Behind every project stands my design bureau, complete expertise, and the ability to solve work of any complexity on our own ground.",
    heroKicker: "Architect from Vladimir",
    directionsTitle: "What do I do?",
    portfolioTitle: "Portfolio",
    inWorkTitle: "In progress",
    bureauWidget: {
      kicker: "Bureau",
      title: "Full cycle: from idea to site",
      body: "Engineering, planning law, economy and service — one team. We run a project as a system, not a stack of folders.",
      cta: "Enter the bureau",
    },
    labWidget: {
      kicker: "Laboratory",
      title: "Vladimir Architecture Laboratory",
      body: "An independent research project on the Vladimir school — how its code can live with contemporary engineering.",
      cta: "Visit the laboratory",
    },
    footerNote: "Prototype. Photographs are synthetic placeholders.",
    contact: "Contact",
    legalPage: "Legal",
    demo: "Demo",
    viewAll: "All work",
    more: "Read more",
  },
};

export const bureauCopy: Record<
  Lang,
  {
    brand: string;
    brandFull: string;
    nav: { label: string; to: string }[];
    manifesto: string;
    manifestoShort: string;
    hero: string;
    stagesTitle: string;
    worksTitle: string;
    newsTitle: string;
    alsoTitle: string;
    alsoBody: string;
    guarantee: string;
    back: string;
    roles: { title: string; body: string }[];
  }
> = {
  ru: {
    brand: "Бюро",
    brandFull: "Архитектурное бюро Ирины Михейкиной",
    nav: [
      { label: "Услуги", to: "/bureau#raboty" },
      { label: "Портфолио", to: "/bureau/proekty" },
      { label: "Новости", to: "/bureau/novosti" },
      { label: "Контакт", to: "/bureau/kontakt" },
    ],
    manifesto:
      "Мы соединяем инженерную, градостроительно-правовую, экономическую и сервисную экспертизу с авторским подходом архитектора Ирины Михейкиной и гарантируем своим заказчикам своевременное, точное и элегантное решение их архитектурных и проектных задач.",
    manifestoShort:
      "Современная архитектура, всегда глубоко в контексте задачи. Сильное проектное бюро и комплексная экспертиза.",
    hero: "Полный цикл. От замысла до площадки.",
    stagesTitle: "Услуги",
    worksTitle: "Услуги",
    newsTitle: "Лента бюро",
    alsoTitle: "Ещё умеем",
    alsoBody: "Бренд, финансовая модель, коммуникационная стратегия — когда объекту нужна экономика, а не только том чертежей.",
    guarantee: "По нашим проектам не было отказа в экспертизе — это рабочий факт, не лозунг.",
    back: "К архитектору",
    roles: [
      {
        title: "Инженер-конструктор",
        body: "Глубокая инженерия, сложные конструкции, педантичная рабочая документация. Не для галочки экспертизы — чтобы объект можно было строить.",
      },
      {
        title: "Эксперт-градостроитель",
        body: "Нормы, земля, наследие, согласования. Рано видим, что пройдёт, а что станет проблемой — и собираем решение до инерции проекта.",
      },
      {
        title: "Бизнес-архитектор",
        body: "Считаем объект как предприятие заказчика: ТЭО, модель, сценарии. Архитектура, которая работает на его задачу, а не продаёт наш стиль.",
      },
      {
        title: "Сервисное бюро",
        body: "Полный цикл, включаемся на любом этапе. Внимательность, порядок, повторный спрос. Комфортный сервис без театра.",
      },
    ],
  },
  en: {
    brand: "Bureau",
    brandFull: "Mikheykina Bureau",
    nav: [
      { label: "Services", to: "/bureau#raboty" },
      { label: "Portfolio", to: "/bureau/proekty" },
      { label: "News", to: "/bureau/novosti" },
      { label: "Contact", to: "/bureau/kontakt" },
    ],
    manifesto:
      "We join engineering, planning law, economy and service with the authorship of architect Irina Mikheykina — timely, precise, elegant solutions to architectural and design tasks.",
    manifestoShort:
      "Contemporary architecture, always deep in the brief. A strong bureau and complete expertise.",
    hero: "Full cycle. From idea to site.",
    stagesTitle: "Services",
    worksTitle: "Services",
    newsTitle: "Bureau feed",
    alsoTitle: "We also do",
    alsoBody: "Brand, financial model, communications — when the object needs an economy, not only a set of drawings.",
    guarantee: "None of our files has been refused expert review — a working fact, not a slogan.",
    back: "To the architect",
    roles: [
      {
        title: "Engineer–constructor",
        body: "Deep engineering, hard structures, pedantic working drawings. Not for a tick in review — so the object can be built.",
      },
      {
        title: "Planning expert",
        body: "Codes, land, heritage, approvals. We see early what will pass and what will stall — and assemble the case before the project gains inertia.",
      },
      {
        title: "Business architect",
        body: "The object as the client’s enterprise: feasibility, model, scenarios. Architecture that serves their brief, not our style.",
      },
      {
        title: "Service bureau",
        body: "Full cycle, we join at any stage. Care, order, return custom. Comfort without theatre.",
      },
    ],
  },
};

export const bureauExpertises = [
  {
    slug: "inzheneriya",
    products: ["stage-p", "stage-r", "survey", "spatial", "sketch"],
    ru: {
      title: "Конструкции и инженерия",
      lead: "Проектируем и считаем так, чтобы можно было строить не задумываясь.",
      body: "Каждое решение — расчётом, без перезаклада. На площадке ясно, спокойно, без лишних затрат.",
    },
    en: {
      title: "Structure and engineering",
      lead: "We design and calculate so you can build without thinking.",
      body: "Every decision calculated, without fat. Clear and calm on site, tight on cost.",
    },
  },
  {
    slug: "gorod",
    products: ["analysis", "brief", "ago", "consulting"],
    ru: {
      title: "Город и согласования",
      lead: "Превращаем узлы норм, целей, возможностей и ограничений в прямые маршруты.",
      body: "Нормы, земля, наследие. Рано видно, что пройдёт, а что станет проблемой — до инерции проекта.",
    },
    en: {
      title: "City and approvals",
      lead: "We turn knots of codes, aims, means and limits into a straight route.",
      body: "Codes, land, heritage. We see early what will pass and what will stall — before the project gains inertia.",
    },
  },
  {
    slug: "ekonomika",
    products: ["feasibility", "finance", "brand", "comms"],
    ru: {
      title: "Экономика объекта",
      lead: "Превращаем замысел в модель бизнеса, бренд, продукты и коммуникации.",
      body: "Объект как дело заказчика: модель, бренд, коммуникации. Не стиль бюро — его задача в цифрах.",
    },
    en: {
      title: "The object’s economy",
      lead: "We turn the idea into a business model, brand, products and communications.",
      body: "The object as the client’s enterprise: feasibility, model, brand, communications. Their brief in numbers, not our style.",
    },
  },
  {
    slug: "vedenie",
    products: ["client", "cm", "supervision"],
    ru: {
      title: "Сопровождение строительства",
      lead: "Ведём площадку так, чтобы заказчику не пришлось думать за всех.",
      body: "Включаемся на любом этапе. Функция заказчика, стройка, надзор. Порядок без театра.",
    },
    en: {
      title: "Construction support",
      lead: "We run the site so the client does not have to think for everyone.",
      body: "We join at any stage. Employer’s agent, the site, supervision. Order without theatre.",
    },
  },
];

export const labCopy: Record<
  Lang,
  {
    brand: string;
    brandFull: string;
    nav: { label: string; to: string }[];
    mission: string;
    body: string;
    zarya: string;
    back: string;
  }
> = {
  ru: {
    brand: "Лаборатория",
    brandFull: "Архитектурная лаборатория «Владимир»",
    nav: [
      { label: "Исследования", to: "/lab" },
      { label: "Код", to: "/lab" },
      { label: "Сообщество", to: "/lab" },
    ],
    mission:
      "Раскрыть и сохранить уникальный архитектурно-пространственный код Владимирской земли и сделать его живым ресурсом развития региона.",
    body: "Лаборатория учреждена на общественных началах. Высший орган — учредительный совет, открытый к новым участникам. Сейчас в совете — Архитектурное бюро Ирины Михейкиной и проектная лаборатория ZaryaLab.",
    zarya: "Участник: ZaryaLab",
    back: "К архитектору",
  },
  en: {
    brand: "Laboratory",
    brandFull: "Vladimir Architecture Laboratory",
    nav: [
      { label: "Research", to: "/lab" },
      { label: "Code", to: "/lab" },
      { label: "Community", to: "/lab" },
    ],
    mission:
      "To reveal and keep the spatial code of the Vladimir land — and make it a living resource for the region.",
    body: "The laboratory is a public research project. Its council is open to new members. Current founders: Irina Mikheykina Architecture Bureau and ZaryaLab.",
    zarya: "Partner: ZaryaLab",
    back: "To the architect",
  },
};

export const directions = [
  {
    slug: "vladimir",
    image: "/images/territory.jpg",
    ru: {
      group: "Владимирский контекст",
      title: "Мастер-план территории, идеология, облик",
      lead: "Владимирская земля для меня не фон, а родной контекст. Развиваю местную школу и собираю решение, уместное именно здесь. Мы дома: знаем людей, процессы и ограничения. Главное — исследование, концепция, облик и мастер-план, с которыми можно выходить на защиту.",
      body: "Владимирская земля для меня не фон, а родной контекст. Я развиваю местную архитектурную школу, вижу, чем территория уже сильна, и всегда собираю решение, которое лучше всего уместно именно здесь. Здесь мы дома: знаем людей, процессы и ограничения — дома и стены помогают. Моё основное внимание — исследованию задачи, концепции, облику и мастер-плану, с которыми можно уверенно выходить на защиту и проектирование.",
    },
    en: {
      group: "Vladimir context",
      title: "Territory, ideology, appearance",
      lead: "The Vladimir land is not a backdrop for me — it is native context. I develop the local school and assemble what is fitting here. We are at home: people, processes, limits. The work is the brief, the concept, the appearance and the master plan — enough to go to defence.",
      body: "The Vladimir land is not a backdrop for me — it is native context. I develop the local architectural school, see what the territory is already strong in, and always assemble the solution that is most fitting here. We are at home: we know the people, the processes and the limits — home and walls help. My attention is the brief, the concept, the appearance and the master plan, with which one can go confidently to defence and design.",
    },
  },
  {
    slug: "consulting",
    image: "/images/territory.jpg",
    ru: {
      group: "Консалтинг",
      title: "Взгляд до проекта",
      lead: "Можно консультироваться, не запуская проектирование или стройку. Я сама предлагаю этот шаг: разобраться в деталях и наметить путь. Рекомендации — из исследования и практики, не из общих схем. Смотрю задачу целиком: смысл, архитектура, экономика, согласования и то, как объект будет жить.",
      body: "С нами можно просто консультироваться — не запуская сразу проектирование или стройку. Я сама предлагаю этот шаг: быстро разобраться в деталях, понять, что нужно делать сейчас, и наметить путь. Рекомендации берутся из исследования и практики реализации, а не из общих схем. Смотрю задачу целиком: от смысла и архитектуры до экономики, согласований и того, как объект будет жить.",
    },
    en: {
      group: "Consulting",
      title: "A view before design",
      lead: "You can consult without launching design or a site. I offer this step myself: see the details and mark a path. Advice from research and built work, not generic schemes. The task as a whole: meaning, architecture, money, approvals, and how the object will live.",
      body: "You can consult with us without launching design or a site. I offer this step myself: see the details quickly, know what to do now, and mark a path. Advice comes from research and from built work, not from generic schemes. I look at the task as a whole: from meaning and architecture to economy, approvals, and how the object will live.",
    },
  },
  {
    slug: "hospitality",
    image: "/images/resort.jpg",
    ru: {
      group: "Живое гостеприимство",
      title: "Туристические комплексы, которые живут",
      lead: "Беру туристический объект только если вижу, как он будет привлекать гостей, удерживать их и вызывать повторный спрос. Архитектура здесь не декорация, а причина выбрать место и точка роста территории. Соединяю образ, экономику, опыт гостя и реализацию. Отличаю то, что красиво открывается, от того, что потом живёт.",
      body: "Я беру туристический объект только если вижу, как он будет привлекать гостей, удерживать их и вызывать повторный спрос. Архитектура здесь не декорация, а одна из причин, почему место выбирают — и точка роста территории, а не просто здание на участке. Соединяю образ, экономику, опыт гостя и реализацию в одну систему; при необходимости подключаю нужных специалистов. Опыт российских гостиничных и туристических проектов помогает отличать то, что красиво открывается, от того, что потом живёт.",
    },
    en: {
      group: "Living hospitality",
      title: "Resorts that keep working",
      lead: "I take a tourist place only if I can see how it will attract guests, hold them and bring them back. Architecture here is not decoration: it is why the place is chosen, and a point of growth for the land. Image, economy, guest experience and delivery as one. I tell what opens beautifully from what then lives.",
      body: "I take a tourist place only if I can see how it will attract guests, hold them and bring them back. Architecture here is not decoration: it is one of the reasons the place is chosen, and a point of growth for the territory — not just a building on a plot. Image, economy, guest experience and delivery are one system; the right specialists join when needed. Work on Russian hotels and tourist projects helps tell what opens beautifully from what then lives.",
    },
  },
  {
    slug: "houses",
    image: "/images/house.jpg",
    ru: {
      group: "Частные владения",
      title: "Дома и территории",
      lead: "Частный дом для меня — не метраж, а способ жить на своей земле. Собираю без лишнего: характер из вашей жизни, традиции места и природа в ансамбле, быт на своих местах. На площадке — прямой разговор между вами, проектом и теми, кто строит: комфорт сегодня и запас на годы вперёд.",
      body: "Частный дом для меня — не метраж, а способ жить на своей земле. Собираю его так, чтобы не было лишнего: характер растёт из вашей жизни и запроса; традиции места и природа включаются в ансамбль, а быт — семья, гости, хозяйство — встаёт на свои места. Любые материалы, техники и приёмы доступны — берём то, что лучше всего подойдёт к вашему случаю. На площадке строю прямой разговор между вами, проектом и теми, кто строит: комфорт сегодня и запас на завтра, чтобы жить здесь было хорошо много много лет.",
    },
    en: {
      group: "Private estates",
      title: "Houses and grounds",
      lead: "A private house for me is not floor area, but a way to live on one’s land. Nothing extra: character from your life, the codes of place and nature in the ensemble, daily life in its rooms. On the site — a direct talk between you, the project and those who build: comfort now, and a reserve for years.",
      body: "A private house for me is not floor area, but a way to live on one’s land. I assemble it so there is nothing extra: character grows from your life and brief; the traditions of the place and nature enter the ensemble; daily life — family, guests, the household — finds its rooms. Any materials, techniques and devices are available — we take what fits your case. On the site I keep a direct talk between you, the project and those who build: comfort today and a reserve for later years, so it is good to live here for a long, long time.",
    },
  },
  {
    slug: "temples",
    image: "/images/chapel.jpg",
    ru: {
      group: "Храмовая архитектура",
      title: "Храм как место и конструкция",
      lead: "Раздел зарезервирован. Пока демо-кадр — заменим авторским.",
      body: "Раздел зарезервирован. Пока демо-кадр — заменим авторским.",
    },
    en: {
      group: "Sacred architecture",
      title: "Temple as place and structure",
      lead: "Reserved. A demo frame until the author’s photographs arrive.",
      body: "Reserved. A demo frame until the author’s photographs arrive.",
    },
  },
];

export const stages = [
  {
    slug: "pre",
    ru: { title: "Предпроект", body: "Анализ, ТЗ, эскиз, АГО как комплект, объёмно-планировочные решения. Ясность до инерции проекта." },
    en: { title: "Pre-design", body: "Audit, brief, sketch, appearance pack, spatial plan. Clarity before the project gains inertia." },
  },
  {
    slug: "design",
    ru: { title: "Проектирование", body: "Стадии П и Р как единая система. 100% положительных заключений экспертизы." },
    en: { title: "Design", body: "Stages P and R as one system. Every file of ours has passed expert review." },
  },
  {
    slug: "service",
    ru: { title: "Сервис", body: "Обследование, ТЭО, архитектурно-строительный консалтинг бюро." },
    en: { title: "Service", body: "Survey, feasibility, construction consulting of the bureau." },
  },
  {
    slug: "build",
    ru: { title: "Стройка", body: "Техзаказчик, авторский надзор, управление строительством." },
    en: { title: "Construction", body: "Employer’s agent, author’s supervision, construction management." },
  },
  {
    slug: "business",
    ru: { title: "Экономика объекта", body: "Бренд, финансовая модель, коммуникационная стратегия." },
    en: { title: "Project economy", body: "Brand, financial model, communications." },
  },
];

export const projects = [
  {
    slug: "usadba",
    image: "/images/mansion.jpg",
    tag: { ru: "Частный дом", en: "House" },
    status: "done" as const,
    ru: {
      title: "Дом у бора",
      subtitle: "Современный особняк в сосновом крае",
      task: "Собрать дом, который держит горизонт участка и не спорит с лесом.",
      view: "Горизонталь важнее фасада. Камень и стекло — чтобы бор читался сквозь дом, а не вокруг него.",
      solution: "Консоль кровли, двор на гравии, одна олива как якорь двора. Инженерия спрятана в толщину плиты.",
      result: "Тихий объём. Дом работает как рама для света, а не как объект «на показ».",
      shows: "Умение остановиться. Авторский жест без декоративного шума.",
    },
    en: {
      title: "House by the pine",
      subtitle: "A contemporary mansion in the forest edge",
      task: "A house that holds the horizon and does not argue with the trees.",
      view: "The horizontal matters more than the façade. Stone and glass so the forest reads through the house.",
      solution: "A cantilevered roof, a gravel court, one tree as the court’s anchor.",
      result: "A quiet volume. The house is a frame for light, not a display.",
      shows: "Knowing when to stop. Authorship without decorative noise.",
    },
  },
  {
    slug: "complex",
    image: "/images/resort.jpg",
    tag: { ru: "Гостеприимство", en: "Hospitality" },
    status: "done" as const,
    ru: {
      title: "Двор на склоне",
      subtitle: "Туристический комплекс",
      task: "Сделать место, куда возвращаются, а не локацию для открытия.",
      view: "Гость должен понять двор телом: тень, гравий, запах дерева. Архитектура — сценарий дня, не картинка.",
      solution: "Низкие павильоны камня и дерева вокруг двора. Маршруты без парадного портала.",
      result: "Живая терраса. Комплекс держит людей днём, а не только на фотографии заселения.",
      shows: "Овервью: архитектура, экономика и опыт гостя в одном жесте.",
    },
    en: {
      title: "Court on the slope",
      subtitle: "A tourist complex",
      task: "A place people return to — not a venue for an opening.",
      view: "The guest should understand the court with the body: shade, gravel, timber.",
      solution: "Low stone and timber pavilions around a court. No ceremonial portal.",
      result: "A living terrace. The complex holds people in daylight.",
      shows: "Overview: architecture, economy and guest experience in one gesture.",
    },
  },
  {
    slug: "lodge",
    image: "/images/lodge.jpg",
    tag: { ru: "Гостеприимство", en: "Hospitality" },
    status: "work" as const,
    ru: {
      title: "Ночной сруб",
      subtitle: "Спа-лодж. В работе",
      task: "Тихий объём в лесу, который светится изнутри, не выжигая кроны.",
      view: "Ночь — часть продукта. Свет должен быть гостеприимным, не рекламным.",
      solution: "Большое стекло, тёплая глубина, скрытые карнизы.",
      result: "Проект в работе. Кадры — демо.",
      shows: "Дисциплина света.",
    },
    en: {
      title: "Night lodge",
      subtitle: "Spa lodge. In progress",
      task: "A quiet forest volume that glows without burning the canopy.",
      view: "Night is part of the product. Light should host, not advertise.",
      solution: "Large glass, warm depth, hidden cornices.",
      result: "In progress. Frames are demo.",
      shows: "Discipline of light.",
    },
  },
  {
    slug: "chapel",
    image: "/images/chapel.jpg",
    tag: { ru: "Храм", en: "Sacred" },
    status: "done" as const,
    ru: {
      title: "Белая щель",
      subtitle: "Часовня. Демо",
      task: "Тихий объём, который держит вертикаль света.",
      view: "Священное не нуждается в цитате купола. Нужна точность просвета.",
      solution: "Белый камень, дерево, одно высокое окно.",
      result: "Демо-кадр. Ждёт авторский материал.",
      shows: "Сдержанность в теме, которую легко перегрузить.",
    },
    en: {
      title: "White slit",
      subtitle: "Chapel. Demo",
      task: "A quiet volume that holds a vertical of light.",
      view: "The sacred does not need a quoted dome. It needs a precise slit.",
      solution: "White stone, timber, one tall window.",
      result: "Demo frame until author’s photographs arrive.",
      shows: "Restraint in a brief that is easy to overload.",
    },
  },
];
