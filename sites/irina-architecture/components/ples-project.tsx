import { sitePath } from "@/lib/site-path";
import type { projects } from "@/lib/projects";
import { ProjectTalk } from "@/components/project-talk";
import { NextProject } from "@/components/next-project";

type Project = (typeof projects)[number];

const shot = (name: string) => sitePath(`/assets/portfolio/ples/${name}.jpg`);

const products = [
  ["Идеологическое и концептуальное проектирование частных владений", "Архитектор", "/napravleniya/houses/estate-concept"],
] as const;

export function PlesProject({ project, next }: { project: Project; next: Project }) {
  return (
    <main id="content" className="inner-page pp pp-ples">
      <section className="pp-hero">
        <img src={shot("01")} alt="Приёмный дом в Плёсе зимой: несколько деревянных объёмов под резными скатами" style={{ objectPosition: "center 42%" }} />
        <div className="pp-hero-copy">
          <p className="section-label">Плёс · 2021</p>
          <h1>{project.name}</h1>
          <p className="pp-hero-quote">— Русская одежда, современный дом.</p>
        </div>
      </section>

      <ProjectTalk project={project} />

      <section className="pp-path">
        <img src={shot("court")} alt="Приёмный дом летом: несколько скатов, крыльца и пруд перед фасадом" />
        <div>
          <p className="pp-kicker">Фасад</p>
          <h2>Деревянная одежда, не декорация.</h2>
          <p>Скаты, наличники, орнамент и крыльца взяты из русского деревянного зодчества. Фасады — натуральная лиственница. Это одежда дома, а не отделка, которую снимают к лету.</p>
        </div>
      </section>

      <div className="pp-pair">
        <figure>
          <img src={shot("porch")} alt="Крыльцо приёмного дома зимой: резной навес и каменный цоколь" />
          <figcaption>Зима. Крыльцо гостиной</figcaption>
        </figure>
        <figure>
          <img src={shot("gable")} alt="Резная кровля приёмного дома ранней осенью" style={{ objectPosition: "center 42%" }} />
          <figcaption>Ранняя осень. Резная кровля</figcaption>
        </figure>
      </div>

      <section className="pp-plan">
        <img src={shot("plan")} alt="План приёмного дома: гостиная, комнаты гостей, кабинет для приёмов и блок персонала" />
      </section>

      <section className="pp-moves">
        <article>
          <span>01</span>
          <h3>Приёмы отдельно</h3>
          <p>Кабинет со своим крыльцом со стороны усадьбы. Хозяин входит с улицы и не проходит через комнаты гостей.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Четыре комнаты</h3>
          <p>Изолированные, как просторные номера. В другую сторону от холла — гостиная со столовой и камином, и у неё свой вход.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Персонал своим ходом</h3>
          <p>Кухня, с которой накрывают стол, черновая кухня и загрузка не идут через гостиную. Из гостиной короткий выход во двор, к основной усадьбе.</p>
        </article>
      </section>

      <section className="pp-two">
        <div>
          <p className="pp-kicker">Архитектор</p>
          <p>Концепция приёмного дома. Фасад держит деревянную традицию Плёса, план разводит приёмы, гостей и персонал.</p>
        </div>
        <div>
          <p className="pp-kicker">Сейчас</p>
          <p>Концепция, 2021. В стройку не ушла. Позже на усадьбе было видно: дом вставал в уже сложившуюся архитектуру.</p>
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
