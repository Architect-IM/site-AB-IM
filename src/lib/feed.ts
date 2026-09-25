export type FeedBrand = "irina" | "bureau" | "lab";
export type FeedKind = "story" | "reel" | "post" | "video" | "event";
export type FeedChannel = "ig" | "tg" | "yt" | "vk" | "dzen" | "site";

export type FeedItem = {
  id: string;
  brand: FeedBrand;
  kind: FeedKind;
  channel: FeedChannel;
  image: string;
  href: string;
  remaining?: string;
  duration?: string;
  ru: { title: string };
  en: { title: string };
};

export const feedDemo: FeedItem[] = [
  {
    id: "1",
    brand: "irina",
    kind: "story",
    channel: "ig",
    image: "/images/portrait.jpg",
    href: "https://instagram.com/",
    remaining: "11 ч",
    ru: { title: "На площадке у бора — свет вечерний" },
    en: { title: "On site by the pine wood — evening light" },
  },
  {
    id: "2",
    brand: "irina",
    kind: "reel",
    channel: "ig",
    image: "/images/mansion.jpg",
    href: "https://instagram.com/",
    duration: "0:24",
    ru: { title: "Особняк: обход фасада" },
    en: { title: "The mansion: a walk of the façade" },
  },
  {
    id: "3",
    brand: "bureau",
    kind: "post",
    channel: "tg",
    image: "/images/house.jpg",
    href: "https://t.me/",
    ru: { title: "Стадия П сдана. Экспертиза без замечаний" },
    en: { title: "Stage P delivered. Expert review with no remarks" },
  },
  {
    id: "4",
    brand: "bureau",
    kind: "video",
    channel: "yt",
    image: "/images/bureau.jpg",
    href: "https://youtube.com/",
    duration: "12:08",
    ru: { title: "Как бюро ведёт стройку" },
    en: { title: "How the bureau runs a site" },
  },
  {
    id: "5",
    brand: "lab",
    kind: "event",
    channel: "tg",
    image: "/images/lab.jpg",
    href: "https://t.me/",
    ru: { title: "Семинар: код владимирской школы" },
    en: { title: "Seminar: the code of the Vladimir school" },
  },
  {
    id: "6",
    brand: "bureau",
    kind: "post",
    channel: "dzen",
    image: "/images/territory.jpg",
    href: "https://dzen.ru/",
    ru: { title: "Мастер-план территории: что внутри пакета" },
    en: { title: "Territory master plan: what is in the pack" },
  },
  {
    id: "7",
    brand: "irina",
    kind: "post",
    channel: "vk",
    image: "/images/resort.jpg",
    href: "https://vk.com/",
    ru: { title: "Туркомплекс: путь гостя" },
    en: { title: "The resort: the guest’s path" },
  },
  {
    id: "9",
    brand: "bureau",
    kind: "post",
    channel: "site",
    image: "/images/mansion.jpg",
    href: "/bureau/novosti",
    ru: { title: "Анонс: комплект стадии П по объекту у реки" },
    en: { title: "Note: stage P pack for the river object" },
  },
  {
    id: "10",
    brand: "bureau",
    kind: "event",
    channel: "site",
    image: "/images/bureau.jpg",
    href: "/bureau/novosti",
    ru: { title: "Открытый разбор рабочей документации — запись встречи бюро" },
    en: { title: "Open reading of working drawings — a bureau meeting note" },
  },
  {
    id: "11",
    brand: "bureau",
    kind: "post",
    channel: "vk",
    image: "/images/lodge.jpg",
    href: "https://vk.com/",
    ru: { title: "На площадке: скрытые работы закрыты по журналу" },
    en: { title: "On site: hidden works closed in the log" },
  },
  {
    id: "8",
    brand: "lab",
    kind: "post",
    channel: "tg",
    image: "/images/chapel.jpg",
    href: "https://t.me/",
    ru: { title: "Заметка: просвет в храме" },
    en: { title: "A note: light in a chapel" },
  },
];
