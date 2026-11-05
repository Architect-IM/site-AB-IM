import { sitePath } from "@/lib/site-path";
import type { projects } from "@/lib/projects";
import { ProjectTalk } from "@/components/project-talk";
import { NextProject } from "@/components/next-project";

type Project = (typeof projects)[number];
type Part = "houses" | "restaurant";

const photo = (name: string) => sitePath(`/assets/portfolio/dobrograd/${name}.jpg`);

const houseProducts = [
  ["АГО — комплект под градсовет", "Бюро", "/bureau/uslugi/ago"],
  ["Проектная документация — стадия П", "Бюро", "/bureau/uslugi/stage-p"],
  ["Рабочая документация — стадия Р", "Бюро", "/bureau/uslugi/stage-r"],
  ["Сопровождение строительства", "Бюро", "/bureau/uslugi/supervision"],
] as const;

const restaurantProducts = [
  ["Обследование зданий", "Бюро", "/bureau/uslugi/survey"],
  ["Проектная документация — стадия П", "Бюро", "/bureau/uslugi/stage-p"],
  ["Рабочая документация — стадия Р", "Бюро", "/bureau/uslugi/stage-r"],
] as const;

function Switch({ part }: { part: Part }) {
  return (
    <nav className="pp-switch" aria-label="Проекты в Доброграде">
      <a className="pp-switch-panel pp-switch-houses" href={sitePath("/portfolio/dobrograd/taunhausy")} aria-current={part === "houses" ? "page" : undefined}>
        <img src={photo("street")} alt="" width={1800} height={1013} decoding="async" />
        <small>01 / Улица Цветочная</small>
        <span className="pp-switch-copy">
          <span className="pp-switch-title">Таунхаусы</span>
          <span className="pp-switch-description">Новое строительство</span>
          <span className="pp-switch-action">Смотреть проект <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.5" /></svg></span>
        </span>
      </a>
      <a className="pp-switch-panel pp-switch-restaurant" href={sitePath("/portfolio/dobrograd/restoran")} aria-current={part === "restaurant" ? "page" : undefined}>
        <img src={photo("restaurant")} alt="" width={1800} height={1200} decoding="async" />
        <small>02 / Реконструкция</small>
        <span className="pp-switch-copy">
          <span className="pp-switch-title">Ресторан</span>
          <span className="pp-switch-description">Стеклянная веранда и лес</span>
          <span className="pp-switch-action">Смотреть проект <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.5" /></svg></span>
        </span>
      </a>
    </nav>
  );
}

function SelectedProject({ part }: { part: Part }) {
  const restaurant = part === "restaurant";
  return (
    <div className="pp-selected-project">
      <nav className="pp-project-tabs" aria-label="Проекты в Доброграде">
        <a href={sitePath("/portfolio/dobrograd/taunhausy")} aria-current={!restaurant ? "page" : undefined}>Таунхаусы</a>
        <a href={sitePath("/portfolio/dobrograd/restoran")} aria-current={restaurant ? "page" : undefined}>Ресторан</a>
        <a className="pp-project-back" href={sitePath("/portfolio/dobrograd")}><span aria-hidden="true">←</span> Все проекты</a>
      </nav>
      <section className={`pp-selected-hero${restaurant ? "" : " pp-selected-houses"}`} aria-labelledby="pp-selected-title">
        <img
          src={photo(restaurant ? "restaurant" : "street")}
          alt={restaurant ? "Ресторан в Доброграде: стеклянная веранда и лес" : "Петля улицы Цветочной: кирпич и дерево второй очереди"}
          width={1800}
          height={restaurant ? 1200 : 1013}
          decoding="async"
        />
        <div className="pp-selected-copy">
          <p className="pp-kicker">{restaurant ? "02 / Реконструкция" : "01 / Улица Цветочная"}</p>
          <h2 id="pp-selected-title">{restaurant ? "Ресторан" : "Таунхаусы"}</h2>
          <p>{restaurant ? "Стеклянная веранда и лес" : "Новое строительство"}</p>
        </div>
      </section>
    </div>
  );
}

function Products({ items }: { items: typeof houseProducts | typeof restaurantProducts }) {
  return (
    <section className="pp-products">
      <p className="pp-kicker">Из чего собрана эта работа</p>
      <div>
        {items.map(([title, side, href]) => (
          <a key={title} href={sitePath(href)}>
            <span>{side}</span>
            <strong>{title}</strong>
          </a>
        ))}
      </div>
    </section>
  );
}

export function DobrogradProject({ project, next, part = "houses", selected = false }: { project: Project; next: Project; part?: Part; selected?: boolean }) {
  const quote = part === "restaurant" ? "— Веранда к свадьбе. За пять месяцев." : "— Частный город во Владимирской области.";
  const Brand = selected ? "a" : "div";
  return (
    <main id="content" className="inner-page pp pp-dobrograd">
      <style>{`
        @font-face {
          font-family: "Dobrograd Lettering";
          src: url("${sitePath("/assets/portfolio/dobrograd/dobrograd-lettering.woff")}") format("woff");
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
      `}</style>
      <header className="pp-dobrograd-head">
        <p className="section-label">Заказчик · Доброград</p>
        <Brand
          className="pp-dobrograd-brand"
          href={selected ? sitePath("/portfolio/dobrograd") : undefined}
          aria-label={selected ? "Доброград — вернуться к выбору проектов" : undefined}
        >
          <img
            className="pp-dobrograd-logo"
            src={sitePath("/assets/portfolio/dobrograd/logo-black.svg")}
            width={3384}
            height={1576}
            alt=""
            aria-hidden="true"
          />
          <h1>{project.name}</h1>
        </Brand>
        <p className="pp-hero-quote">{quote}</p>
      </header>
      {selected ? <SelectedProject part={part} /> : <Switch part={part} />}
      {part === "restaurant" ? <Restaurant project={project} /> : <Houses project={project} />}
      <NextProject next={next} />
    </main>
  );
}

function Houses({ project }: { project: Project }) {
  return (
    <>
      <ProjectTalk project={project} />

      <section className="pp-open">
        <p className="pp-kicker">Улица Цветочная · 20 домов · 2800 м² · 2020</p>
        <h2 className="pp-street-title">Вторая очередь таунхаусов на улице со сложным изгибом и рельефом.</h2>
        <div className="pp-open-grid">
          <p>Первая очередь уже стояла: типовые таунхаусы, из монолитного железобетона. Вторую нужно было застроить по тому же образу, но из сборных конструкций. Участок другой. Перепад рельефа пять метров и петля в конце улицы. Прямые формы на петлю не садятся. Пришлось набирать шаг выступов так, чтобы был ритм, а не сумбур. В Доброграде такого участка больше нет.</p>
          <p>Провели композиционный анализ, получалось три дома. Для каждого дома подобрали свой ритм перепада по рельефу, чтобы это было мягко и органично. Самым сложным оказался дом по внутреннему радиусу улицы, на восемь секций, так как он внутренним фасадом выходил к пруду и активно просматривался с главной улицы посёлка.</p>
        </div>
      </section>

      <section className="pp-path">
        <img src={photo("01")} alt="Построенные дома второй очереди зимой" />
        <div>
          <p className="pp-kicker">Ключевой ход</p>
          <h2>Сохранить замысел, красоту и смету.</h2>
          <p>Улица Цветочная в Доброграде прежде всего иллюстрирует нашу способность работать в современном и довольно сложном проекте, на сложившейся территории, со своим архитектурным кодом, в строгих рамках задач застройщика.</p>
        </div>
      </section>

      <div className="pp-pair">
        <figure>
          <img src={photo("pond")} alt="Фасад к пруду: дерево, террасы, эксплуатируемая кровля" />
          <figcaption>Фасад к пруду. Восемь секций внутреннего радиуса</figcaption>
        </figure>
        <figure>
          <img src={photo("loop")} alt="Два створа петли и шаг секций" />
          <figcaption>Два створа петли. Секции не становятся стеной</figcaption>
        </figure>
      </div>

      <section className="pp-work">
        <img src={photo("panels")} alt="Кирпич, дерево и секция без углового окна" />
        <div>
          <p>Доброград — это инновационный проект, прорывной, уникальный. Здесь ставятся амбициозные задачи и детально контролируются все процессы и реперные точки. Сейчас, когда дома уже стоят на своих местах, решения кажутся очевидными и естественными, но тогда, в моменте, их поиск потребовал от нас максимально напряжённой работы в течение всего периода нашего участия. Мы благодарны команде проекта за сотрудничество, нам было нелегко, но интересно.</p>
          <p className="pp-line">— Объект построен.</p>
        </div>
      </section>

      <section className="pp-two">
        <div>
          <p className="pp-kicker">Ирина</p>
          <p>АГО и согласование с департаментом архитектуры и главным архитектором Доброграда.</p>
        </div>
        <div>
          <p className="pp-kicker">Бюро</p>
          <p>Работа под задачу застройщика. АГО, стадия П, негосударственная экспертиза, стадия Р, сопровождение строительства.</p>
        </div>
      </section>

      <Products items={houseProducts} />
    </>
  );
}

function Restaurant({ project }: { project: Project }) {
  return (
    <>
      <ProjectTalk
        project={project}
        image={photo("restaurant")}
        quote="Ресторан в Доброграде уже работал, однако ему требовалась масштабная реконструкция: его нужно было увеличить за счёт остекления веранды, высота витражей на которой — от трёх до восьми метров. Мы полностью подготовили стадию П (реконструкция регистрировалась), подключились к работе дизайнеров и выполнили все архитектурно-строительные решения. Уже реконструированный ресторан был забронирован под проведение мероприятия, срок на всё про всё был менее пяти месяцев, мы успели, свадьбу провели в срок."
      />

      <section className="pp-open pp-rest-open">
        <p className="pp-kicker">2021 · 680 м² → 790 м²</p>
        <div className="pp-open-row">
          <h2>Посадочный зал вырос за счёт веранды.</h2>
          <p>Все работы шли параллельно со <a className="pp-ext" href="https://helendesign.ru/portfolio/restoran-dobrograd/" target="_blank" rel="noreferrer">студией дизайна Елены Крыловой</a>: реконструкцию требовалось закончить до 1 июля, в ресторан уже внесли аванс за свадьбу. Строили с листа. Балки считали и сразу заказывали на площадку. Фасады держали архитектурный код Доброграда.</p>
        </div>
      </section>

      <section className="pp-moves">
        <article>
          <span>01</span>
          <h3>Веранда</h3>
          <p>Витражи от трёх до восьми метров. Узлы примыкания к несущим конструкциям не типовые. Под остекление запроектирован металлокаркас.</p>
        </article>
        <article>
          <span>02</span>
          <h3>С листа</h3>
          <p>Обследование конструкций веранд, точки подключения сетей, нагрузки на электричество, отопление и вентиляцию.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Кухня</h3>
          <p>Запроектировали цех для суши, с технологом по ресторанам. Посадочных мест стало больше, кухня мощнее.</p>
        </article>
      </section>

      <section className="pp-two">
        <div>
          <p className="pp-kicker">Вместе</p>
          <p>Студия дизайна Елены Крыловой. Архитектурно-строительная часть — бюро. Фасад в коде города.</p>
        </div>
        <div>
          <p className="pp-kicker">Бюро</p>
          <p>Обследование, стадия П и стадия Р. Ресторан открылся к дате, на которую уже был аванс.</p>
        </div>
      </section>

      <Products items={restaurantProducts} />
    </>
  );
}
