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
    directionsTitle: "Направления",
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
    directionsTitle: "Directions",
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
    guarantee: string;
    back: string;
  }
> = {
  ru: {
    brand: "Бюро",
    brandFull: "Архитектурное бюро Ирины Михейкиной",
    nav: [
      { label: "Стадии", to: "/bureau/stadii" },
      { label: "Проекты", to: "/portfolio" },
      { label: "Подход", to: "/bureau" },
      { label: "Контакт", to: "/kontakt" },
    ],
    manifesto:
      "Мы соединяем инженерную, градостроительно-правовую, экономическую и сервисную экспертизу с авторским подходом архитектора Ирины Михейкиной и гарантируем своевременное, точное и элегантное решение задач.",
    manifestoShort:
      "Современная архитектура, всегда глубоко в контексте задачи. Сильное проектное бюро и комплексная экспертиза.",
    hero: "Полный цикл. От замысла до площадки.",
    stagesTitle: "Стадии работы",
    guarantee: "100% положительных заключений экспертизы по нашим проектам.",
    back: "К архитектору",
  },
  en: {
    brand: "Bureau",
    brandFull: "Irina Mikheykina Architecture Bureau",
    nav: [
      { label: "Stages", to: "/bureau/stadii" },
      { label: "Projects", to: "/portfolio" },
      { label: "Approach", to: "/bureau" },
      { label: "Contact", to: "/kontakt" },
    ],
    manifesto:
      "We join engineering, planning law, economy and service with Irina Mikheykina’s authorship — timely, precise, elegant.",
    manifestoShort:
      "Contemporary architecture, always deep in the brief. A strong bureau and complete expertise.",
    hero: "Full cycle. From idea to site.",
    stagesTitle: "Stages of work",
    guarantee: "Every project of ours has received a positive expert review.",
    back: "To the architect",
  },
};

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
      body: "Место — не фон. Исследую школу, раскрываю потенциал земли, собираю решение, с которым можно выходить на защиту.",
    },
    en: {
      group: "Vladimir context",
      title: "Territory, ideology, appearance",
      body: "Place is not a backdrop. I read the school, the land, and assemble a case that can be defended.",
    },
  },
  {
    slug: "hospitality",
    image: "/images/resort.jpg",
    ru: {
      group: "Живое гостеприимство",
      title: "Туристические комплексы, которые живут",
      body: "Берусь, если вижу, как объект будет держать гостя и повторный спрос. Архитектура, экономика и опыт — одна система.",
    },
    en: {
      group: "Living hospitality",
      title: "Resorts that keep working",
      body: "I take a brief only if the place can hold a guest and bring them back. Architecture, economy, experience — one system.",
    },
  },
  {
    slug: "houses",
    image: "/images/house.jpg",
    ru: {
      group: "Частные владения",
      title: "Дома и территории",
      body: "Частный дом — не метраж, а способ жить на своей земле. Характер из вашей жизни, традиции места и природа в ансамбле, прямой разговор на площадке.",
    },
    en: {
      group: "Private estates",
      title: "Houses and grounds",
      body: "A private house is a way to live on one’s land, not a floor area. Character from your life, the codes of place, a direct talk on site.",
    },
  },
  {
    slug: "temples",
    image: "/images/chapel.jpg",
    ru: {
      group: "Храмовая архитектура",
      title: "Храм как место и конструкция",
      body: "Раздел зарезервирован. Пока демо-кадр — заменим авторским.",
    },
    en: {
      group: "Sacred architecture",
      title: "Temple as place and structure",
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
