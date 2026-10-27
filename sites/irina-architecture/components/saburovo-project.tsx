import { sitePath } from "@/lib/site-path";
import type { projects } from "@/lib/projects";
import { LeadVideo } from "@/components/lead-video";

type Project = (typeof projects)[number];

const photo = (name: string) => sitePath(`/assets/portfolio/saburovo/${name}.jpg`);

const products = [
  ["Рабочая документация — стадия Р", "Бюро", "/bureau/uslugi/stage-r"],
  ["Авторский надзор", "Бюро", "/bureau/uslugi/supervision"],
] as const;

const told = "Сабурово: сто тридцать четыре дома в соснах. Посадили каждый на свой участок. Воду собрали в резервуар и отдали насосом, двадцать литров в секунду. Четыре года вместе со стройкой.";

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

      <section className="sab-voice">
        <figure>
          <LeadVideo src={`${sitePath("/assets/portfolio/saburovo/voice.mp4")}?v=2`} poster={photo("voice")} />
          <figcaption className="service-lead-sign">Инженер бюро<span>рассказ о проекте</span></figcaption>
        </figure>
        <blockquote>{told}</blockquote>
      </section>

      <section className="pp-open">
        <p className="pp-kicker">14 га · 134 дома · 10 км от Москвы</p>
        <h2>Клубный посёлок в сосновом лесу.</h2>
        <div className="pp-open-grid">
          <p>Для федерального девелопера это новый продукт: дом как квартира, только на своей земле. Типология была готова заранее, и от неё нельзя было отступать — на ней стоят экономика и кредит. Парк на трети земли собирала студия Verto.</p>
          <p>Бюро взяло рабочую документацию генплана и шло вместе со стройкой четыре года, с 2022-го. Расстановка домов, вертикальная планировка, проезды и вода. Как внутренний офис застройщика, а не альбом, который сдали и забыли.</p>
        </div>
      </section>

      <section className="pp-path">
        <img src={photo("02")} alt="План вертикальной планировки: посадка домов и въездная группа" />
        <div>
          <p className="pp-kicker">Посадка</p>
          <h2>Не рисовать посёлок заново.</h2>
          <p>Дома и межевание пришли готовыми. Каждый дом посадили на свой участок. Где тип не вставал, убирали навес, а не ломали участок и не меняли продукт.</p>
        </div>
      </section>

      <section className="sab-figures" aria-label="Проезды и вода">
        <article>
          <p className="pp-kicker">Проезды</p>
          <svg viewBox="0 0 320 120" aria-hidden="true">
            <rect x="16" y="28" width="200" height="36" fill="#e7e4dc" />
            <rect x="16" y="64" width="200" height="22" fill="#70a549" />
            <path d="M24 46h184" stroke="#16171b" strokeWidth="1.5" />
            <path d="M24 34v24M208 34v24" stroke="#16171b" strokeWidth="1" />
            <text x="116" y="22" textAnchor="middle" fill="#3d6b34">3–4 м</text>
            <text x="236" y="52" fill="#16171b">кольцо</text>
            <text x="236" y="80" fill="#3d6b34">бульвар</text>
          </svg>
          <p>Ширину считали в створе машины и пожарной техники: каждый вариант от 3 до 4 метров. Одностороннее движение и кольца сузили проезжую часть. Освободившуюся землю отдали озеленению — в посёлке несколько бульваров.</p>
        </article>
        <article>
          <p className="pp-kicker">Вода</p>
          <svg viewBox="0 0 320 120" aria-hidden="true">
            <rect x="16" y="36" width="70" height="48" fill="none" stroke="#16171b" />
            <path d="M28 68c14-16 28-16 42 0" fill="none" stroke="#3d6b34" strokeWidth="1.5" />
            <path d="M86 60h36" stroke="#16171b" markerEnd="url(#sab-arrow)" />
            <rect x="122" y="28" width="78" height="64" fill="#e7e4dc" stroke="#16171b" />
            <path d="M134 74h54" stroke="#3d6b34" strokeWidth="1.5" />
            <path d="M200 60h28" stroke="#16171b" />
            <circle cx="248" cy="60" r="16" fill="none" stroke="#16171b" />
            <path d="M248 48v24M240 60h16" stroke="#16171b" />
            <text x="51" y="22" textAnchor="middle" fill="#16171b">улица</text>
            <text x="161" y="108" textAnchor="middle" fill="#3d6b34">резервуар</text>
            <text x="278" y="64" fill="#16171b">20 л/с</text>
            <defs>
              <marker id="sab-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0 0l6 3-6 3z" fill="#16171b" />
              </marker>
            </defs>
          </svg>
          <p>Дождь и талая вода. Водоканал разрешил залповый сброс 20 литров в секунду — для посёлка это мало. Поэтому в гидравлике подобрали насосную станцию и регулирующий резервуар на все стоки.</p>
        </article>
      </section>

      <section className="pp-turn">
        <p className="pp-kicker">Дальше — наша работа</p>
        <h2>Генплан, на котором дом уже стоит на своём месте.</h2>
        <p className="pp-facts">Красногорск · 14 га · 134 участка · с 2022 · четыре года · построено</p>
      </section>

      <section className="pp-work">
        <img src={photo("01")} alt="Въезд и петля дороги среди леса" />
        <div>
          <p>Чертежи водоснабжения и канализации собраны по ГОСТ: аксонометрии с углами и привязками, чтобы не доделывать на месте. Один подрядчик закрыл рабочую документацию, гидравлику, подбор насосной, эскиз проездов и расстановку домов.</p>
          <p className="pp-line">— Сначала участок. Потом дом.</p>
        </div>
      </section>

      <section className="pp-two">
        <div>
          <p className="pp-kicker">Заказчик</p>
          <p>ФСК. Продуктовая карта и типология домов были до нас. Парк — студия Verto.</p>
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

      <a className="next-project" href={sitePath(`/portfolio/${next.slug}`)}>
        <span className="section-label">Следующий проект</span>
        <span>{next.name}</span>
        <img src={sitePath(`/assets/${next.image}.jpg`)} alt="" loading="lazy" />
      </a>
    </main>
  );
}
