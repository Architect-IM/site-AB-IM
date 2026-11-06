import { sitePath } from "@/lib/site-path";
import type { projects } from "@/lib/projects";
import { ProjectTalk } from "@/components/project-talk";
import { NextProject } from "@/components/next-project";

type Project = (typeof projects)[number];

const photo = (name: string) => sitePath(`/assets/portfolio/ruza/${name}.jpg`);

const products = [
  ["Частные владения", "Архитектор", "/napravleniya/houses"],
  ["Идеологическое и концептуальное проектирование частных владений", "Архитектор", "/napravleniya/houses/estate-concept"],
] as const;

export function RuzaProject({ project, next }: { project: Project; next: Project }) {
  return (
    <main id="content" className="inner-page pp pp-ruza">
      <section className="pp-hero">
        <img src={photo("01")} alt="Дом-дача в Рузе: резной деревянный фасад среди сосен" />
        <div className="pp-hero-copy">
          <p className="section-label">Заказчик · Руза</p>
          <h1>{project.name}</h1>
          <p className="pp-hero-quote">— Дача отца. Мастерская сына.</p>
        </div>
      </section>

      <ProjectTalk project={project} />

      <section className="pp-portrait">
        <img src={sitePath("/assets/portfolio/ruza/loop.gif")} alt="Сборка дом-дачи: от плана к кровле" />
        <div>
          <p className="pp-kicker">2023 · Руза · 300 м² · 3 этажа · 2 спальни</p>
          <h2>Комната хозяев и прежние места мебели.</h2>
          <p>Появилась большая родительская комната: хозяева будут жить в ней, отдельно от общей гостиной. Мебель расставили по зонам былой дачи. Камин стал больше, его облицевали изразцами. Виды, которые были дороги, смотрят через застеклённые участки стен.</p>
        </div>
      </section>

      <section className="pp-work">
        <div>
          <h2>Антресоль в скате кровли.</h2>
          <p>Уклон кровли дал второй уровень над мастерской. В скат врезали большие окна, и выставку с работой развели по высоте. Заказчик отметил именно этот ход.</p>
        </div>
        <img src={photo("03")} alt="Антресоль дом-дачи: деревянный объём, галерея и картина на стене" />
      </section>

      <section className="pp-moves">
        <img className="pp-pond" src={photo("04")} alt="Дом-дача у пруда: сосны, закат и отражение в воде" />
        <img className="pp-balcony" src={photo("05")} alt="Дом-дача в соснах: балкон, светлые стойки и солнце" />
        <div className="pp-ruza-moves">
          <article>
            <span>01</span>
            <h3>Веранда работает и зимой</h3>
            <p>Веранду утеплили. Зимой там тоже можно проводить время.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Душ внизу, санузел наверху</h3>
            <p>Нижний санузел увеличили и поставили душевую. Второй санузел собрали этажом выше.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Окна прорезают орнамент</h3>
            <p>Рисунок фасада не сплошной. Часть орнамента накладная, часть прорезана окнами.</p>
          </article>
        </div>
      </section>

      <section className="pp-two">
        <div>
          <p className="pp-kicker">Архитектор</p>
          <p>Концепция частного дома.</p>
        </div>
        <div>
          <p className="pp-kicker">Сейчас</p>
          <p>Концепт принят заказчиком.</p>
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
