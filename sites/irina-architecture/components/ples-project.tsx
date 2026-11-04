import { sitePath } from "@/lib/site-path";
import type { projects } from "@/lib/projects";
import { ProjectTalk } from "@/components/project-talk";
import { NextProject } from "@/components/next-project";

type Project = (typeof projects)[number];

const shot = (name: string) => sitePath(`/assets/portfolio/ples/${name}.jpg`);

const products = [
  ["Частные владения", "Архитектор", "/napravleniya/houses"],
  ["Идеологическое и концептуальное проектирование частных владений", "Архитектор", "/napravleniya/houses/estate-concept"],
] as const;

export function PlesProject({ project, next }: { project: Project; next: Project }) {
  return (
    <main id="content" className="inner-page pp">
      <section className="pp-hero">
        <img src={shot("winter")} alt="Приёмный дом в Плёсе зимой: резные наличники и несколько объёмов" />
        <div className="pp-hero-copy">
          <p className="section-label">Плёс · 2021</p>
          <h1>{project.name}</h1>
          <p className="pp-hero-quote">— Приёмный дом усадьбы.</p>
        </div>
      </section>

      <ProjectTalk project={project} />

      <section className="pp-path">
        <img src={shot("summer")} alt="Летний вид: несколько деревянных объёмов и двор между ними" />
        <div>
          <p className="pp-kicker">Образ</p>
          <h2>Не шале. Русский двор.</h2>
          <p>Одноэтажный дом у Волги, Г-образный. Снаружи лиственница, скатные кровли и резьба Плёса. Внутри современный план: комнаты, общая гостиная и отдельный вход хозяина.</p>
        </div>
      </section>

      <div className="pp-pair">
        <figure><img src={shot("porch")} alt="Крыльцо с видом в сад" /><figcaption>Крыльцо</figcaption></figure>
        <figure><img src={shot("plan")} alt="План: спальни, гостиная и блок персонала с разными входами" /><figcaption>Гости, хозяин и персонал не встречаются</figcaption></figure>
      </div>

      <section className="pp-moves">
        <article>
          <span>01</span>
          <h3>Три дня</h3>
          <p>Площадку не видели: всё со слов строителя. План собрали за сутки, фасады и картинку — на следующий день.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Три входа</h3>
          <p>Гости живут в своих комнатах. Хозяин входит в кабинет со стороны усадьбы. У персонала свой вход, кухня и загрузка.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Фасад и план</h3>
          <p>Снаружи традиционный деревянный дом. Внутри блоки, а не один длинный прямоугольник: так фасад не становится тяжёлым.</p>
        </article>
      </section>

      <section className="pp-two">
        <div>
          <p className="pp-kicker">Архитектор</p>
          <p>Частные владения и концепция. Эскиз смотрели как реализуемый и отмечали, что он ложится на усадьбу.</p>
        </div>
        <div>
          <p className="pp-kicker">Сейчас</p>
          <p>Концепция, 2021. Дом не построен. Дальше был чайный домик, со строительной компанией работа продолжается.</p>
        </div>
      </section>

      <section className="pp-products">
        <p className="pp-kicker">Из чего собрана эта работа</p>
        <div>
          {products.map(([title, side, href]) => (
            <a key={title} href={sitePath(href)}>
              <span>{side}</span>
              <strong>{title}</strong>
            </a>
          ))}
        </div>
      </section>

      <NextProject next={next} />
    </main>
  );
}
