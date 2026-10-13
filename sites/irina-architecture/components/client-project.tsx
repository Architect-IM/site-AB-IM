import { sitePath } from "@/lib/site-path";
import type { projects } from "@/lib/projects";

type Project = (typeof projects)[number];

const photo = (name: string) => sitePath(`/assets/portfolio/pokrovskiy-pryanik/${name}.jpg`);

export function ClientProject({ project, next }: { project: Project; next: Project }) {
  return (
    <main id="content" className="inner-page client-page">
      <section className="client-hero">
        <img src={photo("img_0356")} alt="Вывеска «Покровский пряник» на кирпичном корпусе" />
        <div className="client-hero-copy">
          <p className="section-label">Заказчик</p>
          <h1>{project.name}</h1>
          <p>Производство печатного пряника в Покрове. Кирпичные цеха, двор между корпусами и зал, где тесто становится изделием.</p>
        </div>
      </section>

      <section className="client-place">
        <img src={photo("img_0426")} alt="Территория завода с высоты" />
        <div>
          <p className="section-label">Покров · Владимирская область</p>
          <p>Действующий завод, не павильон. Корпуса стоят вдоль дороги, между ними двор, дальше силосы и новые пролёты. Гость, если его пустить, должен понять место с порога и не попасть под работу цеха.</p>
        </div>
      </section>

      <section className="client-work">
        <p className="section-label">Дальше — наша работа</p>
        <h2>Обследование, проект и то, как цех принимает человека.</h2>
      </section>

      <section className="client-block">
        <div className="client-split">
          <img src={photo("img_0340")} alt="Светлый производственный зал" />
          <div>
            <p className="section-label">Живое гостеприимство</p>
            <h2>Зал уже умеет быть светлым</h2>
            <p>Новый пролёт высокий и ровный. Здесь можно показать, как делается пряник, если путь гостя не пересекается с тележками и паром.</p>
            <blockquote>Не украшать производство. Сделать так, чтобы человек понимал, где он, и не мешал цеху.</blockquote>
            <p className="client-by">Ирина Михейкина, архитектор</p>
          </div>
        </div>
      </section>

      <section className="client-block client-wide">
        <img src={photo("img_0324")} alt="Варочные котлы в цехе" />
        <div>
          <p className="section-label">Стадия П</p>
          <h2>Котлы держат центр зала</h2>
          <p>Проектная документация собирает существующие корпуса и новый объём в одну систему: пролёты, кровля, инженерия. Не отдельный красивый зал рядом с заводом.</p>
          <blockquote>Сначала то, без чего цех не варит. Потом то, как это стоит в конструкциях.</blockquote>
          <p className="client-by">Конструктор бюро</p>
        </div>
      </section>

      <section className="client-block">
        <div className="client-pair">
          <figure>
            <img src={photo("img_0284")} alt="Трубопроводы вдоль кирпичной стены" />
            <figcaption>Инженерия уже есть. Её нельзя нарисовать заново и забыть.</figcaption>
          </figure>
          <figure>
            <img src={photo("img_0300")} alt="Переход между корпусами" />
            <figcaption>Переходы между корпусами — часть пути, не служебный остаток.</figcaption>
          </figure>
        </div>
        <div className="client-note">
          <p className="section-label">Обследование</p>
          <h2>Сначала то, что уже стоит</h2>
          <p>Выезд фиксирует корпуса, пристройки, трубы и где людям тесно. Без этого стадия П описывает желаемый завод, а не этот.</p>
        </div>
      </section>

      <section className="client-scheme">
        <svg viewBox="0 0 640 360" role="img" aria-label="Черновая схема корпусов и двора">
          <rect x="24" y="48" width="250" height="120" fill="none" stroke="#16171b" strokeWidth="1.4" />
          <rect x="300" y="78" width="210" height="90" fill="none" stroke="#16171b" strokeWidth="1.4" />
          <circle cx="560" cy="118" r="36" fill="none" stroke="#16171b" strokeWidth="1.4" />
          <path d="M40 250h560" stroke="#16171b" strokeWidth="1" />
          <path d="M150 168v82M400 168v82" stroke="#8a3b2a" strokeWidth="1" />
          <text x="36" y="40" fill="#686963" fontSize="13">существующий цех</text>
          <text x="312" y="70" fill="#686963" fontSize="13">новый пролёт</text>
          <text x="532" y="70" fill="#686963" fontSize="13">силосы</text>
          <text x="36" y="274" fill="#686963" fontSize="13">дорога</text>
          <text x="150" y="300" fill="#8a3b2a" fontSize="13">путь гостя</text>
        </svg>
        <div>
          <p className="section-label">Схема</p>
          <h2>Двор между корпусами</h2>
          <p>Черновик, не чертёж. Слева старый цех, справа новый пролёт, силосы особняком. Гость идёт от дороги во двор и только потом в зал.</p>
        </div>
      </section>

      <section className="client-quote">
        <blockquote>Люди могут видеть, как делается пряник. Цех в это время должен продолжать работать.</blockquote>
        <p>Главный инженер, Покровский пряник</p>
      </section>

      <section className="client-block">
        <div className="client-pair">
          <img src={photo("img_0366")} alt="Двор и пристройки между корпусами" />
          <img src={photo("img_0415")} alt="Длинный светлый цех" />
        </div>
        <div className="client-note">
          <p className="section-label">Стадия Р</p>
          <h2>Чтобы по этому можно было строить</h2>
          <p>Рабочая документация переводит решения стадии П в то, что собирают на площадке: узлы кровли, примыкания к старому кирпичу, проходы, которые не закроет пристройка.</p>
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
