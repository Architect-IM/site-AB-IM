import { sitePath } from "@/lib/site-path";
import type { projects } from "@/lib/projects";
import { ProjectTalk } from "@/components/project-talk";
import { NextProject } from "@/components/next-project";

type Project = (typeof projects)[number];

const photo = (name: string) => sitePath(`/assets/portfolio/saburovo/${name}.jpg`);

const products = [
  ["Рабочая документация — стадия Р", "Бюро", "/bureau/uslugi/stage-r"],
  ["Авторский надзор", "Бюро", "/bureau/uslugi/supervision"],
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

      <ProjectTalk project={project} />

      <section className="pp-open">
        <p className="pp-kicker">14 га · 134 дома · 10 км от Москвы</p>
        <h2>Клубный посёлок в сосновом лесу.</h2>
        <div className="pp-open-grid">
          <p>Для федерального девелопера это новый продукт: дом как квартира, только на своей земле. Типология была готова заранее, и от неё нельзя было отступать — на ней стоят экономика и кредит. Парк на трети земли собирала <a className="pp-ext" href="https://verto.ru/" target="_blank" rel="noreferrer">студия Verto</a>.</p>
          <p>Бюро взяло рабочую документацию генплана и шло вместе со стройкой четыре года, с 2022-го. Расстановка домов, вертикальная планировка, проезды, логистика, стоки и прочее. На время строительства мы стали будто бы внутренней командой застройщика, постоянно работали на месте, в процессе — это был классный и очень вдохновляющий опыт для нас.</p>
        </div>
      </section>

      <section className="pp-path">
        <img src={photo("02")} alt="План вертикальной планировки: посадка домов и въездная группа" />
        <div>
          <p className="pp-kicker">Посадка</p>
          <h2>Не рисовать посёлок заново.</h2>
          <p>Дома и межевание пришли готовыми. Каждый дом посадили на свой участок. Нередко дом не вставал или ломалась общая эстетика — приходилось проектировать локальные изменения и доработки.</p>
        </div>
      </section>

      <section className="pp-work">
        <img src={photo("01")} alt="Въезд и петля дороги среди леса" />
        <div>
          <p className="pp-kicker">Дальше — наша работа</p>
          <h2>Генплан, на котором дом уже стоит на своём месте.</h2>
          <p className="pp-facts">Красногорск · 14 га · 134 участка · с 2022 · четыре года · построено</p>
          <p>Чертежи водоснабжения и канализации собраны по ГОСТ: аксонометрии с углами и привязками, чтобы не доделывать на месте. Один подрядчик закрыл рабочую документацию, гидравлику, подбор насосной, эскиз проездов и расстановку домов.</p>
        </div>
      </section>

      <section className="pp-two">
        <div>
          <p className="pp-kicker">Заказчик</p>
          <p>ФСК. Продуктовая карта и типология домов были до нас. Парк — <a className="pp-ext" href="https://verto.ru/" target="_blank" rel="noreferrer">студия Verto</a>.</p>
        </div>
        <div>
          <p className="pp-kicker">Бюро</p>
          <p>Стадия Р и сопровождение. Посадка, проезды, вертикальная планировка, гидравлика.</p>
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
