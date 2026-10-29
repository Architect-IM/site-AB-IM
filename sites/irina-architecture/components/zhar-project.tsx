import { sitePath } from "@/lib/site-path";
import type { projects } from "@/lib/projects";
import { PhotoRail } from "@/components/photo-rail";
import { ProjectTalk } from "@/components/project-talk";

type Project = (typeof projects)[number];

const shot = (name: string) => sitePath(`/assets/portfolio/zhar-ptitsa/${name}.jpg`);

export function ZharProject({ project, next }: { project: Project; next: Project }) {
  return (
    <main id="content" className="inner-page pp">
      <section className="pp-hero">
        <img src={shot("evening")} alt="Банный комплекс на Истре вечером: терраса и бассейн" />
        <div className="pp-hero-copy">
          <p className="section-label">Истра · 2025</p>
          <h1>{project.name}</h1>
          <p className="pp-hero-quote">— Похожий модуль уже стоит. Нужен ещё один.</p>
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
          <p className="pp-kicker">Вода</p>
          <h2>Одна скважина на старый комплекс и новые бани.</h2>
          <p>Водобаланс считали по всем расходам действующего комплекса. К общим нуждам новых бань добавилось обновление воды в холодной и горячей купелях. По анализу воды в той же котельной подобрали очистку для общего водоснабжения и фильтрацию для обеих купелей.</p>
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

      <section className="pp-work">
        <img src={shot("evening")} alt="Комплекс вечером" />
        <div>
          <p>Заказчику нужно обновлять тёплую купель в 3 м³ за 60 минут — за время уборки между гостями. Мощный котёл не разрешили: дорого. Поставили несколько малых, они работают в паре. Параллельно котлы греют помещения, вентиляцию и эту воду. Котельная газовая, от газгольдера. Для парной — двойное утепление, пароизоляция и гидроизоляция. Всё оборудование котельной и водоподготовки собрано в одном помещении.</p>
          <p className="pp-line">— Мощный котёл не разрешили. Поставили несколько малых, в паре.</p>
        </div>
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

      <a className="next-project" href={sitePath(`/portfolio/${next.slug}`)}>
        <span className="section-label">Следующий проект</span>
        <span>{next.name}</span>
        <img src={sitePath(`/assets/${next.image}.jpg`)} alt="" loading="lazy" />
      </a>
    </main>
  );
}
