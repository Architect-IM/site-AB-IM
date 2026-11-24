import { NextProject } from "@/components/next-project";
import type { projects } from "@/lib/projects";
import { sitePath } from "@/lib/site-path";
import styles from "./pozdnyakovo-project.module.css";

type Project = (typeof projects)[number];

const image = (name: string) => sitePath(`/assets/portfolio/pozdnyakovo/${name}.jpg`);
const video = "https://www.youtube.com/watch?v=X7I8UtJviHY";

const facts = [
  ["500 м²", "Площадь дома"],
  ["3 этажа", "Включая мансарду"],
  ["6 комнат", "Для постоянного проживания"],
  ["2017", "Год проектирования"],
] as const;

export function PozdnyakovoProject({ project, next }: { project: Project; next: Project }) {
  return (
    <main id="content" className={`inner-page pp ${styles.project}`}>
      <section className={`pp-hero ${styles.hero}`}>
        <img src={image("facade")} alt="Симметричный кирпичный фасад дома в Поздняково" fetchPriority="high" />
        <div className="pp-hero-copy">
          <p className="section-label">Частный дом · Новая Рига</p>
          <h1>{project.name}</h1>
          <p className="pp-hero-quote">Классический кирпичный дом с ризалитами</p>
        </div>
      </section>

      <section className={`pp-open ${styles.intro}`}>
        <p className="pp-kicker">Поздняково · Московская область</p>
        <h2>Симметрия с четырёх сторон</h2>
        <div className="pp-open-grid">
          <p>В основе дома для постоянного проживания — прямоугольный объём 16 × 18 метров. На центральной оси каждого фасада выступает ризалит, увенчанный треугольным фронтоном. Этот приём связывает четыре фасада в единую композицию.</p>
          <p>Над двумя полноценными этажами устроена мансарда под вальмовой кровлей. Широкие каменные ступени подчёркивают оба входа в дом, парадный и со стороны сада.</p>
        </div>
        <dl className={styles.facts}>
          {facts.map(([value, label]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={`pp-path ${styles.facades}`}>
        <figure>
          <img src={image("garden-render")} alt="Визуализация дома со стороны сада с выходом на террасу" loading="lazy" />
          <figcaption>Проектная визуализация · вид со стороны сада</figcaption>
        </figure>
        <div>
          <p className="pp-kicker">Фасады</p>
          <h2>Красный кирпич и светлый декор</h2>
          <p>Глубокий красный оттенок задаёт кирпич ручной формовки. Светлый декор выделяет цоколь, карнизы и наличники, а графитовая фальцевая кровля завершает силуэт.</p>
          <p>Под кирпичной облицовкой — железобетонный каркас с монолитными перекрытиями и стены из керамических блоков.</p>
        </div>
      </section>

      <div className={`pp-pair ${styles.details}`}>
        <figure>
          <img src={image("risalit")} alt="Кирпичный ризалит с треугольным фронтоном и круглым медальоном" loading="lazy" />
          <figcaption>Треугольный фронтон и светлые наличники</figcaption>
        </figure>
        <figure>
          <img src={image("entrance-detail")} alt="Вход в дом в светлом обрамлении на фоне красного кирпича" loading="lazy" />
          <figcaption>Светлое обрамление входа</figcaption>
        </figure>
      </div>

      <section className={styles.plans}>
        <div className="pp-open">
          <p className="pp-kicker">Планировка</p>
          <h2>Лестница в центре дома</h2>
          <div className="pp-open-grid">
            <p>Парадная лестница и квадратный холл образуют центр каждого этажа. Комнаты расположены вокруг холла. Так в доме меньше коридоров и больше места для жилых помещений.</p>
            <p>Высота потолков на первом и втором этажах — 3,5 метра. Планировка связывает парадный вход, жилые комнаты и выход на террасу.</p>
          </div>
        </div>
        <figure>
          <img src={image("floor-plans")} alt="Планы первого и второго этажей с центральным холлом и лестницей" loading="lazy" />
          <figcaption>
            <span>Планы первого и второго этажей</span>
            <a href={image("floor-plans")} target="_blank" rel="noreferrer">Открыть чертежи крупнее</a>
          </figcaption>
        </figure>
      </section>

      <section className={`pp-path ${styles.video}`}>
        <figure>
          <img src={image("entrance-render")} alt="Проектный вид дома с парадным входом" loading="lazy" />
          <figcaption>Проектная визуализация · парадный вход</figcaption>
        </figure>
        <div>
          <p className="pp-kicker">Рассказ архитектора</p>
          <h2>Дом в деталях</h2>
          <p>В видеообзоре Ирина Михейкина показывает фасады, кирпичную кладку, гостиную и террасу, а затем разбирает планировку дома.</p>
          <a className={styles.videoLink} href={video} target="_blank" rel="noreferrer">Смотреть видеообзор <span>9:41</span></a>
        </div>
      </section>

      <NextProject next={next} />
    </main>
  );
}
