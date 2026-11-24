import type { Essay } from "@/lib/essays";

// Page content before the key-move layout change.
export const hatminkiPreviousEssay: Essay = {
  label: "Клуб · Хатминки",
  fullScreenImage: { path: "portfolio/hatminki/courtyard-landscape", alt: "Озеленённый внутренний двор Хатминки-Клаб", position: "40% center" },
  pairedImages: [
    { path: "portfolio/hatminki/03", alt: "Вход в Хатминки-Клаб", position: "30% center" },
    { path: "portfolio/hatminki/04", alt: "Мостки и корпуса клуба у воды", position: "55% center" },
  ],
  heroImage: "portfolio/hatminki/hero-pond-view",
  portraitImage: { path: "portfolio/hatminki/courtyard-benches", position: "40% center" },
  pathImage: { path: "portfolio/hatminki/plan-aerial", alt: "Вид Хатминки-Клаб с высоты: корпуса, озеленённые дворы и пруд с мостками", position: "55% center" },
  workImage: { path: "portfolio/hatminki/courtyard-landscape", alt: "Белый объём клуба над озеленённым внутренним двором Хатминки-Клаб", position: "8% center" },
  quote: "Клуб начинается с мостков, не с ресепшена.",
  openTitle: "Сначала вода. Потом кирпич.",
  open: [
    "Хатминки-Клаб стоит у воды. Первое, что видишь, — мостки и люди на них. Корпуса кирпичные, низкие, с двором между.",
    "Сверху видно, как здания обнимают протоки, а не выстраиваются в линейку вдоль парковки.",
  ],
  voice: "Клуб, который начинается с парковки, уже проиграл. Здесь первый жест — доски над водой. Кирпич потом подтверждает, что это не беседка, а место, где можно остаться.",
  pathKicker: "План места",
  pathTitle: "Корпуса держат воду внутри.",
  path: "Общий вид показывает несколько дворов и воду между ними. Парковка есть, но она не фасад. Фасад — пирс и входной двор с людьми.",
  turn: "Клуб у воды.",
  facts: "Хатминки · кирпич · проект",
  work: "Собрать клуб так, чтобы вода была в середине маршрута, а корпуса не превратились в торговый ряд. Кирпич, дерево настилов, дворы.",
  line: "Пришёл по мосткам. Остался во дворе.",
  moves: [
    ["Пирс", "Вход в клуб идёт через воду."],
    ["Двор", "Кирпичные корпуса делают площадь, не коридор."],
    ["План", "Вода впущена между домами, не оставлена за границей участка."],
  ],
  alts: ["Мостки Хатминки-Клаб", "Двор клуба", "Вход", "Общий вид"],
};
