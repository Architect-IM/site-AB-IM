import { NextProject } from "@/components/next-project";
import { PhotoRail } from "@/components/photo-rail";
import type { projects } from "@/lib/projects";
import { sitePath } from "@/lib/site-path";
import styles from "./ivanovo-project.module.css";

type Project = (typeof projects)[number];

const shot = (name: string) => sitePath(`/assets/portfolio/ivanovo/${name}.jpg`);
const film = "https://www.youtube.com/watch?v=fwOqDP9BJWA";

const facts = [
  ["Площадь дома", "350 м²"],
  ["Этажи", "2"],
  ["Спальни", "3"],
] as const;

const chapters = [
  ["Панорамные окна", "02:05", 125],
  ["Терраса", "06:35", 395],
  ["Гостиная", "08:51", 531],
] as const;

export function IvanovoProject({ project, next }: { project: Project; next: Project }) {
  return (
    <main id="content" className={`inner-page pp ${styles.page}`}>
      <section className={`pp-hero ${styles.hero}`}>
        <img src={shot("terrace-render")} alt="Проектная визуализация дома в Иванове со стороны террасы" width="2600" height="1300" fetchPriority="high" />
        <div className="pp-hero-copy">
          <p className="section-label">Частный дом · Иваново</p>
          <h1>{project.name}</h1>
          <p className="pp-hero-quote">Односкатная кровля и большая терраса</p>
        </div>
      </section>

      <section className={`pp-open ${styles.intro}`}>
        <p className="pp-kicker">Иваново · Проект 2016 года</p>
        <h2>Окна во всю высоту гостиной</h2>
        <div className="pp-open-grid">
          <p>Дом спроектирован для семьи, которая интересуется современным искусством и ведёт активный образ жизни. Односкатная кровля задаёт силуэт, а светлые и графитовые плоскости подчёркивают крупные окна.</p>
          <p>Панорамные окна занимают половину главного фасада. За ними — двусветная гостиная. В доме также предусмотрены кухня, три спальни и сауна.</p>
        </div>
        <dl className={styles.facts}>
          {facts.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={`pp-path ${styles.split} ${styles.living}`}>
        <figure>
          <img src={shot("living")} alt="Двусветная гостиная с двумя рядами окон и открытой лестницей" loading="lazy" />
          <figcaption>Гостиная со вторым светом · кадр из видео</figcaption>
        </figure>
        <div>
          <p className="pp-kicker">Интерьер</p>
          <h2>Свет на два этажа</h2>
          <p>Два ряда окон освещают гостиную по всей её высоте. Открытая лестница и галерея остаются в поле зрения, когда смотришь на окна из комнаты.</p>
        </div>
      </section>

      <section className={styles.terrace}>
        <div className="pp-open">
          <p className="pp-kicker">Терраса</p>
          <h2>Под навесом и у камина</h2>
          <div className="pp-open-grid">
            <p>В открытой части под навесом можно сидеть на воздухе. За остеклением устроено отдельное пространство с камином.</p>
            <p>Обе части террасы примыкают к дому. На зимних кадрах хорошо видно, как остекление и навес продолжают первый этаж со стороны двора.</p>
          </div>
        </div>
        <div className={`pp-pair ${styles.terracePair}`}>
          <figure>
            <img src={shot("terrace")} alt="Открытая часть террасы с креслами под навесом" loading="lazy" />
            <figcaption>Открытая часть террасы</figcaption>
          </figure>
          <figure>
            <img src={shot("fireplace")} alt="Камин в застеклённой части террасы" loading="lazy" />
            <figcaption>Застеклённая часть с камином</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.gallery} aria-labelledby="ivanovo-gallery">
        <div className="pp-open">
          <h2 id="ivanovo-gallery">Виды дома</h2>
        </div>
        <PhotoRail photos={[
          { src: shot("front-render"), alt: "Главный фасад — проектная визуализация" },
          { src: shot("aerial"), alt: "Построенный дом зимой — кадр из видео" },
          { src: shot("hero"), alt: "Терраса со стороны двора — кадр из видео" },
          { src: shot("facade-detail"), alt: "Оконный проём и облицовка фасада" },
          { src: shot("evening"), alt: "Вечерний вид — кадр из видео" },
        ]} />
      </section>

      <section className={`pp-path ${styles.split} ${styles.film}`}>
        <figure>
          <img src={shot("video-poster")} alt="Ирина Михейкина во дворе дома во время видеообзора" loading="lazy" />
          <figcaption>Ирина Михейкина · кадр из видеообзора</figcaption>
        </figure>
        <div>
          <p className="pp-kicker">Видеообзор</p>
          <h2>Прогулка по дому</h2>
          <p>Ирина Михейкина показывает фасад, рассказывает об односкатной кровле и проводит по комнатам и террасе.</p>
          <a className={styles.watch} href={film} target="_blank" rel="noreferrer">Смотреть обзор <span>11:25</span></a>
          <ul className={styles.chapters} aria-label="Фрагменты видеообзора">
            {chapters.map(([label, time, seconds]) => (
              <li key={seconds}><a href={`${film}&t=${seconds}s`} target="_blank" rel="noreferrer"><span>{label}</span><span>{time}</span></a></li>
            ))}
          </ul>
        </div>
      </section>

      <NextProject next={next} />
    </main>
  );
}
