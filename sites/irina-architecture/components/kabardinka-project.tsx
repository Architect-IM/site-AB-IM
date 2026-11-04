import { sitePath } from "@/lib/site-path";
import type { projects } from "@/lib/projects";
import { ProjectTalk } from "@/components/project-talk";
import { NextProject } from "@/components/next-project";

type Project = (typeof projects)[number];

const shot = (name: string) => sitePath(`/assets/portfolio/kabardinka/${name}.jpg`);

const products = [
  ["Живое гостеприимство", "Архитектор", "/napravleniya/hospitality"],
  ["АГО — комплект под градсовет", "Бюро", "/bureau/uslugi/ago"],
] as const;

export function KabardinkaProject({ project, next }: { project: Project; next: Project }) {
  return (
    <main id="content" className="inner-page pp">
      <section className="pp-hero">
        <img src={shot("court")} alt="Два корпуса горной резиденции и двор между ними" />
        <div className="pp-hero-copy">
          <p className="section-label">Приэльбрусье · 2025</p>
          <h1>{project.name}</h1>
          <p className="pp-hero-quote">— Где пять звёзд на земле встречают миллионы на небе.</p>
        </div>
      </section>

      <ProjectTalk project={project} />

      <section className="pp-path">
        <img src={shot("pool")} alt="Открытый бассейн с видом на ущелье" />
        <div>
          <p className="pp-kicker">Кровля</p>
          <h2>Бассейн над ущельем.</h2>
          <p>Лобби, ресторан и спа собраны на первом этаже стилобата. Открытый бассейн и места отдыха — на эксплуатируемой кровле.</p>
        </div>
      </section>

      <div className="pp-pair">
        <figure><img src={shot("roof")} alt="Терраса ресторана вечером, горы за лесом" /><figcaption>Ресторан на кровле</figcaption></figure>
        <figure><img src={shot("lobby")} alt="Общий зал с камином и видом на горы" /><figcaption>Общий зал</figcaption></figure>
      </div>

      <section className="pp-moves">
        <article>
          <span>01</span>
          <h3>Двор, не щель</h3>
          <p>Между корпусами не технический зазор, а благоустроенный двор. Гость выходит из номера сразу в него.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Весь отдых здесь</h3>
          <p>Пять звёзд в месте старых санаториев и глэмпингов. Сервис и общие зоны живут в одном отеле, а не по окрестным точкам.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Согласование места</h3>
          <p>Участок внутри парка «Приэльбрусье». Концепцию нужно было согласовать и с парком, и с администрацией.</p>
        </article>
      </section>

      <section className="pp-two">
        <div>
          <p className="pp-kicker">Архитектор</p>
          <p>Живое гостеприимство и АГО. Образ пятизвёздочного отеля, который читается с дороги и не спорит с ущельем.</p>
        </div>
        <div>
          <p className="pp-kicker">Сейчас</p>
          <p>Концепция. 660 номеров, 35 000 м², 2025. В проектирование не ушла.</p>
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
