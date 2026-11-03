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
      <a href={sitePath("/portfolio/dobrograd")} aria-current={part === "houses" ? "page" : undefined}>
        <small>Улица Цветочная</small>
        Таунхаусы
      </a>
      <a href={sitePath("/portfolio/dobrograd/restoran")} aria-current={part === "restaurant" ? "page" : undefined}>
        <small>Реконструкция</small>
        Ресторан
      </a>
    </nav>
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

export function DobrogradProject({ project, next, part = "houses" }: { project: Project; next: Project; part?: Part }) {
  const quote = part === "restaurant" ? "— Веранда к свадьбе. За пять месяцев." : "— Образ первой очереди. Конструкция уже другая.";
  return (
    <main id="content" className="inner-page pp pp-dobrograd">
      <header className="pp-dobrograd-head">
        <p className="section-label">Заказчик · Доброград</p>
        <h1>{project.name}</h1>
        <p className="pp-hero-quote">{quote}</p>
      </header>
      <Switch part={part} />
      {part === "restaurant" ? <Restaurant project={project} /> : <Houses project={project} />}
      <NextProject next={next} />
    </main>
  );
}

function Houses({ project }: { project: Project }) {
  return (
    <>
      <section className="pp-hero">
        <img src={photo("street")} alt="Петля улицы Цветочной: кирпич и дерево второй очереди" />
      </section>

      <ProjectTalk project={project} />

      <section className="pp-open">
        <p className="pp-kicker">Улица Цветочная · 20 домов · 2800 м² · 2020</p>
        <h2>Вторая очередь таунхаусов на улице со сложным изгибом и рельефом.</h2>
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
          <p>Доброград — это инновационный проект, прорывной, уникальный. Здесь ставятся амбициозные задачи и детально контролируются все процессы и реперные точки. Сейчас, когда дома уже стоят на своих местах, решения кажутся очевидными и естественными, но тогда, в моменте, поиск решений потребовал от нас максимально напряжённой работы в течение всего периода нашего участия. Мы благодарны команде проекта за сотрудничество, нам было нелегко, но интересно.</p>
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
          <p className="pp-line">— Объект построен.</p>
        </div>
      </section>

      <section className="pp-moves">
        <article>
          <span>01</span>
          <h3>Ритм</h3>
          <p>Три дома, у каждого свой шаг по рельефу. Петля не выглядит случайной нарезкой.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Сборное</h3>
          <p>Образ первой очереди остаётся. Несущая схема уже не монолит, а то, из чего дешевле строить.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Смета рядом</h3>
          <p>Объёмы и сметы вели по ходу проекта. Красиво согласовывали с тем, что заказчик реально строит.</p>
        </article>
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
      <section className="pp-hero">
        <img src={photo("restaurant")} alt="Ресторан в Доброграде: стеклянная веранда и лес" />
      </section>

      <ProjectTalk
        project={project}
        image={photo("restaurant")}
        quote="Ресторан в Доброграде нужно было увеличить и открыть к свадьбе, на которую уже взяли аванс. Пять месяцев, работы параллельно с дизайнерами Елены Крыловой. Витражи веранды от трёх до восьми метров. Свадьбу провели в срок."
      />

      <section className="pp-open">
        <p className="pp-kicker">2021 · 680 м² → 790 м²</p>
        <h2>Посадочный зал вырос за счёт веранды.</h2>
        <div className="pp-open-grid">
          <p>Нужно было увеличить зал остеклением веранды, оформить стадию П для регистрации реконструкции и сделать архитектурно-строительные решения вместе с дизайнерами. Срок — пять месяцев, чтобы ресторан вышел на мероприятие.</p>
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
          <p>Обследование конструкций веранд, точки подключения сетей, нагрузки на электричество, отопление и вентиляцию. Балки уходили на площадку сразу после расчёта.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Кухня</h3>
          <p>Запроектировали цех для суши, с технологом по ресторанам. Посадочных мест стало больше, кухня мощнее. Свадьбу провели в назначенный день.</p>
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
