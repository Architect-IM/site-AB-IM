import { sitePath } from "@/lib/site-path";
import { projects } from "@/lib/projects";

const steps = [
  ["01", "Аудит", "Изучаем ценностное предложение, смотрим, насколько далеко ваше обещание можно развернуть, не выдумав того, чего нет. Ищем на рынке целевой сегмент, смотрим конкуренцию, считаем, какая цена делает дело интересным для всех. Мы не пытаемся обойти всех, скорее мы стараемся не заговорить чужим голосом."],
  ["02", "Портфель", "Продукт — рыночное оружие. Так у любого дела. Из потенциала, который есть на самом деле, собираем, что можно выставить. И сразу намечаем, как этот потенциал растить, чтобы он дотягивал до целей. На любом горизонте."],
  ["03", "Цели", "Иногда цель уже названа, и мы проверяем, хватает ли на неё потенциала. Иногда ставим её вместе. Цели женим с продуктами и с ресурсами, в том числе с тем, как здесь вообще считаются деньги. Все должны одинаково понимать, куда идут, зачем, и трезво видеть, дойдут ли."],
  ["04", "Стратегия", "Коктейль из метода, способа и плана. Такой, который все стороны без оговорок принимают за эталон вкуса и гармонии. Задача непростая. Когда берёмся — решаем."],
  ["05", "До результата", "Если стратегия принята и в ней нужна наша помощь, мы не бросаем. Коммуникации, сайт, свои СМИ, дизайн. Поможем пройти весь путь. Он творит замысел. Мы его держим."],
];

const shown = ["pokrovskiy-pryanik", "usadba", "complex"].map((slug) => projects.find((project) => project.slug === slug)!);

export function BrandPath() {
  return (
    <div className="brand-path">
      <p className="brand-creed">
        <span>Вы творите.</span>
        <span>Мы изучаем, ограняем, укрепляем, воспеваем и продвигаем.</span>
      </p>
      <ol className="brand-steps">
        {steps.map(([num, title, text]) => (
          <li className="brand-step" key={num}>
            <span className="brand-num">{num}</span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="brand-wink">В основном это там, где мы уже проектируем или строим. Чаще всего — <a href={sitePath("/#directions")}>живое гостеприимство</a>.</p>
      <section className="brand-been" aria-label="Примеры">
        <h2>Кто уже шёл этим путём</h2>
        <div className="brand-been-grid">
          {shown.map((project) => (
            <a href={sitePath(`/portfolio/${project.slug}`)} key={project.slug}>
              <img src={sitePath(`/assets/${project.image}.jpg`)} alt="" style={"imagePosition" in project && project.imagePosition ? { objectPosition: project.imagePosition } : undefined} />
              <h3>{project.name}</h3>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
