import { sitePath } from "@/lib/site-path";
import type { projects } from "@/lib/projects";
import { PhotoRail } from "@/components/photo-rail";
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

      <section className="pp-open">
        <p className="pp-kicker">Bulldozer Group</p>
        <h2>Четыре модуля за короткий срок.</h2>
        <div className="pp-open-grid">
          <p>На Новой Риге уже работает банный комплекс «Жар-Птица»: модуль стоит, спрос есть. Заказчику нужен ещё один комплекс, на четыре модуля, и полный проект — в максимально короткий срок. Площадь 850 м².</p>
          <p>Кроме корпусов сразу закладывали инженерию. Газовая котельная от газгольдера, бюджетно. Анализ воды и система водоочистки. Всё это должно было поместиться в работу комплекса, который сдают между гостями быстро.</p>
        </div>
      </section>

      <section className="pp-portrait">
        <img src={shot("existing")} alt="Действующий корпус «Жар-Птицы»" />
        <div>
          <p className="pp-kicker">Бюро</p>
          <p>Архитектуру и конструкции сделали с нуля. Самым сложным оказалась инженерия: отопление и водоподготовка. К ним подключили партнёров. Потребителей много, скважина одна — и она уже кормит действующий комплекс.</p>
        </div>
      </section>

      <PhotoRail photos={[
        { src: shot("evening"), alt: "Вечерний вид комплекса" },
        { src: shot("garden"), alt: "Озеленение вдоль террас" },
        { src: shot("terrace"), alt: "Терраса с бассейном" },
        { src: shot("existing"), alt: "Существующий корпус" },
      ]} />

      <section className="pp-path">
        <img src={shot("garden")} alt="Террасы и посадки у банного комплекса" />
        <div>
          <p>В банях, особенно таких — современных, технологичных, красивых, — всегда хватает сложных вопросов при проектировании. Двойное утепление, паро- и гидроизоляция, и ещё больше — водоподготовка: высокие требования к качеству и количеству воды, помноженные на технико-экономическое обоснование. Словом, просто здесь не было. Но все вопросы были решены, объект находится на стадии строительства и, надеюсь, совсем скоро порадует нас своим лёгким паром!</p>
        </div>
      </section>

      <div className="pp-pair">
        <figure><img src={shot("terrace")} alt="Бассейн на террасе" /><figcaption>Терраса с бассейном</figcaption></figure>
        <figure><img src={shot("existing")} alt="Модуль, который уже работает" /><figcaption>Модуль, который уже работает</figcaption></figure>
      </div>

      <section className="pp-turn">
        <p className="pp-kicker">Дальше — наша работа</p>
        <h2>Тёплая купель за час, пока идёт уборка.</h2>
        <p className="pp-facts">Истра · 850 м² · 4 блока · 2025 · строится</p>
      </section>

      <section className="pp-moves">
        <article>
          <span>01</span>
          <h3>Четыре модуля</h3>
          <p>Образец уже стоит на Новой Риге и сдаётся. Здесь тот же тип, но полный проект на четыре блока, в короткий срок.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Час на купель</h3>
          <p>Три кубометра тёплой воды должны обновиться, пока убирают номер. Мощности хватает без одного дорогого котла.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Одна котельная</h3>
          <p>Отопление, вентиляция, нагрев купели и очистка воды живут в одном помещении. Скважина считается вместе со старым комплексом.</p>
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
