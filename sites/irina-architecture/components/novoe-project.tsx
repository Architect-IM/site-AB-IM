import { sitePath } from "@/lib/site-path";
import type { projects } from "@/lib/projects";
import { ProjectTalk } from "@/components/project-talk";
import { NextProject } from "@/components/next-project";

type Project = (typeof projects)[number];

const shot = (name: string) => sitePath(`/assets/portfolio/novoe/${name}.jpg`);

const products = [
  ["Предпроектный анализ частных владений", "Архитектор", "/napravleniya/houses/estate-analysis"],
  ["Мастер-планирование частных владений", "Архитектор", "/napravleniya/houses/estate-masterplan"],
  ["Архитектурно-градостроительный облик частных владений", "Архитектор", "/napravleniya/houses/estate-ago"],
  ["ТЗ на проектирование частного дома", "Архитектор", "/napravleniya/houses/estate-brief"],
  ["Эскизная концепция", "Бюро", "/bureau/uslugi/sketch"],
  ["Рабочая документация — стадия Р", "Бюро", "/bureau/uslugi/stage-r"],
  ["ТЭО — подбор и комплектация", "Бюро", "/bureau/uslugi/feasibility"],
] as const;

export function NovoeProject({ project, next }: { project: Project; next: Project }) {
  return (
    <main id="content" className="inner-page pp pp-novoe">
      <section className="pp-hero">
        <img src={shot("03")} alt="Усадьба «Нерль» со стороны поймы: терраса с камином и панорамный фасад" />
        <div className="pp-hero-copy">
          <p className="section-label">Новое · 2024</p>
          <h1>{project.name}</h1>
          <p className="pp-hero-quote">— Русская усадьба с видом на Боголюбово.</p>
        </div>
      </section>

      <ProjectTalk project={project} />

      <section className="pp-path">
        <img src={shot("04z")} alt="Фасад усадьбы со стороны сада: голубой дом с белой верандой, лестница и гараж справа" style={{ objectPosition: "center" }} />
        <div>
          <h2>Куда идёт склон, туда смотрит дом.</h2>
          <p>Два участка размежёваны стандартно, и ни на один по отдельности желаемый комплекс не помещался. Дом не ставили у дороги, а сместили глубже: с улицы остаются въезд и гараж в деревьях, при въезде скользим вдоль фасада и смотрим вдаль — на пойму, на барабаны и луковицы. К границам дом не привязан ортогонально: его развернули по рельефу. Пятно застройки легло по диагонали, и получились три уровня. Верхний — с большим уклоном, средний выровнен, здесь дом и сад, нижний — террасы и дорожки к пойме. Один фасад на восход, другой на закат, раскрытие на юг.</p>
        </div>
      </section>

      <div className="pp-pair">
        <figure>
          <img src={shot("02")} alt="Длинный деревянный фасад усадьбы: навес на колоннах и гараж слева" />
          <figcaption>Навес у въезда — крытый каретный подъезд.</figcaption>
        </figure>
        <figure>
          <img src={shot("05")} alt="Боковой фасад усадьбы на закате: терраса и балкон над ней" style={{ objectPosition: "center 46%" }} />
          <figcaption>Терраса на закат держит балкон мастер-спальни.</figcaption>
        </figure>
      </div>

      <section className="pp-moves">
        <article>
          <span>01</span>
          <h3>Два участка не сливали</h3>
          <p>Межевание пересмотрели под посадку дома и сохранили отступы и плотность. Без объединения остались две точки подключения: дом на одном участке, гостевой дом с хозпостройками на другом.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Цену считают по нашим чертежам</h3>
          <p>Подрядчики не открывали узлы, и выбрать строителя по таким ценам было нельзя. Рабочий проект конструкции и инженерии сделали мы: цену уточняют по нему, монтажный проект его повторяет.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Стена из сухого бруса</h3>
          <p>Только сухой строганый брус, без клея, без ОСП и фанеры. Состав стены задали по финским каркасным требованиям: от него считают цену, а не от обобщённого предложения.</p>
        </article>
      </section>

      <section className="pp-two">
        <div>
          <p className="pp-kicker">Что сделали</p>
          <p>Собрали посадку участка, облик дома и рабочую документацию.</p>
        </div>
        <div>
          <p className="pp-kicker">Сейчас</p>
          <p>Проект 2024 года. 500 м², два этажа, пять комнат.</p>
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
