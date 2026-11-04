import { sitePath } from "@/lib/site-path";
import type { projects } from "@/lib/projects";
import { ProjectTalk } from "@/components/project-talk";
import { NextProject } from "@/components/next-project";

type Project = (typeof projects)[number];

const shot = (name: string) => sitePath(`/assets/portfolio/zhar-ptitsa/${name}.jpg`);

export function ZharProject({ project, next }: { project: Project; next: Project }) {
  return (
    <main id="content" className="inner-page pp pp-zhar">
      <section className="pp-hero">
        <img src={shot("evening")} alt="Банный комплекс на Истре вечером: терраса и бассейн" />
        <div className="pp-hero-copy">
          <img
            className="pp-client-logo"
            src={sitePath("/assets/portfolio/zhar-ptitsa/logo.svg")}
            width={111}
            height={140}
            alt=""
            aria-hidden="true"
          />
          <div>
            <p className="section-label">Истра · 2025</p>
            <h1>{project.name}</h1>
            <p className="pp-hero-quote">— Сказка начинается здесь.</p>
          </div>
        </div>
      </section>

      <ProjectTalk project={project} />

      <section className="pp-portrait">
        <img src={shot("existing")} alt="Действующий корпус «Жар-Птицы»" />
        <div>
          <p className="pp-kicker">Бюро</p>
          <h2>Посадили между деревьями и соседними зданиями.</h2>
          <p>Сначала по проекту собрали ведомости объёмов работ. Заказчик провёл тендер по документации и выбрал строителей по прозрачным ценам. Пожарные и технические разрывы от существующих зданий сохранились.</p>
        </div>
      </section>

      <section className="pp-path">
        <img src={shot("garden")} alt="Террасы и посадки у банного комплекса" />
        <div>
          <p>В банях, особенно таких — современных, технологичных, красивых, — всегда хватает сложных вопросов при проектировании. Двойное утепление, паро- и гидроизоляция, и ещё больше — водоподготовка: высокие требования к качеству и количеству воды, помноженные на технико-экономическое обоснование. Словом, просто здесь не было. Но все вопросы были решены, объект находится на стадии строительства и, надеюсь, совсем скоро порадует лёгким паром своих гостей!</p>
        </div>
      </section>

      <div className="pp-pair">
        <figure><img src={shot("terrace")} alt="Бассейн на террасе" /><figcaption>Терраса с бассейном</figcaption></figure>
        <figure><img src={shot("existing")} alt="Модуль, который уже работает" /><figcaption>Модуль, который уже работает</figcaption></figure>
      </div>

      <section className="pp-moves">
        <article>
          <span>01</span>
          <h3>Четыре модуля</h3>
          <p>Четыре дома одного типа, каждый со своей террасой. Внутри парная, снаружи холодная купель и бассейн.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Час на купель</h3>
          <p>Три кубометра тёплой воды должны обновиться, пока убирают номер. Подобрали насосы, фильтры и котлы с учётом ТЭО.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Одна котельная</h3>
          <p>Отопление, вентиляция, нагрев купели и очистка воды живут в одном помещении. Котельная спроектирована полностью, газовое оборудование работает от газгольдера.</p>
        </article>
      </section>

      <section className="pp-two">
        <div>
          <p className="pp-kicker">Бюро</p>
          <p>Углубились в инженерные вопросы и привлекли подрядчиков-монтажников. Отопление и водоподготовка собраны не «по каталогу», а под режим аренды.</p>
        </div>
        <div>
          <p className="pp-kicker">Сейчас</p>
          <p>Объект строится. Четыре блока, 850 м², Истра, 2025.</p>
        </div>
      </section>

      <NextProject next={next} />
    </main>
  );
}
