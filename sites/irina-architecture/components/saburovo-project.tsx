import { sitePath } from "@/lib/site-path";
import type { projects } from "@/lib/projects";

type Project = (typeof projects)[number];

const photo = (name: string) => sitePath(`/assets/portfolio/saburovo/${name}.jpg`);

const products = [
  ["Рабочая документация — стадия Р", "Бюро", "/bureau/uslugi/stage-r"],
] as const;

export function SaburovoProject({ project, next }: { project: Project; next: Project }) {
  return (
    <main id="content" className="inner-page pp pp-saburovo">
      <section className="pp-hero">
        <img src={photo("01")} alt="Сабурово Клаб сверху: дома среди сосен" />
        <div className="pp-hero-copy">
          <p className="section-label">Заказчик · Красногорск</p>
          <h1>{project.name}</h1>
          <p className="pp-hero-quote">— Лес остаётся. Дома встают в него.</p>
        </div>
      </section>

      <section className="pp-open">
        <p className="pp-kicker">14 га · 134 дома · 10 км от Москвы</p>
        <h2>Клубный посёлок внутри сосен.</h2>
        <div className="pp-open-grid">
          <p>Сабурово Клаб стоит у деревни Сабурово, между Волоколамским и Пятницким. ФСК собрала его как клуб: немного домов, один характер фасадов, клинкер и тёмная кровля. Треть земли отдана парку. Ландшафтную концепцию делала студия Verto. Жители пишут об одном и том же: тишина небольшого посёлка и то, что дома не рассыпаются в разные коттеджи.</p>
          <p>Дома и межевание пришли готовыми. Бюро взяло рабочую документацию генплана: посадить каждый дом на свой участок, поправить то, что не встаёт, и посчитать, как уходит вода с дорог и тротуаров. Посёлок построен.</p>
        </div>
      </section>

      <section className="pp-path">
        <img src={photo("02")} alt="План вертикальной планировки: посадка домов и въездная группа" />
        <div>
          <p className="pp-kicker">Ирина Михейкина</p>
          <h2>Не рисовать посёлок заново.</h2>
          <p>Мне принесли готовые дома и уже нарезанные участки. Задача была поставить каждый дом так, чтобы он встал, и чтобы улица не оставляла воду у порога. Где типовой проект не помещался, убирали навес, а не ломали участок.</p>
        </div>
      </section>

      <section className="pp-turn">
        <p className="pp-kicker">Дальше — наша работа</p>
        <h2>Генплан, на котором дом уже стоит на своём месте.</h2>
        <p className="pp-facts">Красногорск · 14 га · 134 участка · 2024 · построено</p>
      </section>

      <section className="pp-work">
        <img src={photo("01")} alt="Въезд и петля дороги среди леса" />
        <div>
          <p>Чертёж называется просто: корректировка схемы планировки с привязкой жилых домов и въездной группы. На нём отметки земли, дождевые решётки, граница очереди. Рядом — гидравлический расчёт дождевых стоков. Это не концепция «жизни в лесу». Это земля, на которой эта жизнь должна стоять.</p>
          <p className="pp-line">— Сначала участок. Потом дом.</p>
        </div>
      </section>

      <section className="pp-moves">
        <article>
          <span>01</span>
          <h3>Посадка</h3>
          <p>Каждый дом привязан к своему участку. Тип, который не встаёт, правят. Землю под него не растягивают.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Вода</h3>
          <p>Вертикальная планировка улиц и гидравлика дождя — часть генплана, не приложение после факта.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Въезд</h3>
          <p>Въездная группа и дома одной очереди сидят на одном листе. Лес и парк остаются за кадром забора.</p>
        </article>
      </section>

      <section className="pp-two">
        <div>
          <p className="pp-kicker">Заказчик</p>
          <p>ФСК. Дома и межевание были до нас. Парк — ландшафтная студия Verto.</p>
        </div>
        <div>
          <p className="pp-kicker">Бюро</p>
          <p>Стадия Р. Посадка домов, вертикальная планировка, расчёт дождевых стоков.</p>
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

      <a className="next-project" href={sitePath(`/portfolio/${next.slug}`)}>
        <span className="section-label">Следующий проект</span>
        <span>{next.name}</span>
        <img src={sitePath(`/assets/${next.image}.jpg`)} alt="" loading="lazy" />
      </a>
    </main>
  );
}
