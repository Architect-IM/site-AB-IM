import { sitePath } from "@/lib/site-path";
import type { projects } from "@/lib/projects";
import { ProjectTalk } from "@/components/project-talk";
import { NextProject } from "@/components/next-project";

type Project = (typeof projects)[number];

const photo = (name: string) => sitePath(`/assets/portfolio/ruza/${name}.jpg`);

const products = [
  ["Частные владения", "Архитектор", "/napravleniya/houses"],
  ["Идеологическое и концептуальное проектирование частных владений", "Архитектор", "/napravleniya/houses/estate-concept"],
] as const;

export function RuzaProject({ project, next }: { project: Project; next: Project }) {
  return (
    <main id="content" className="inner-page pp pp-ruza">
      <section className="pp-hero">
        <img src={photo("01")} alt="Дом-дача в Рузе: резной деревянный фасад среди сосен" />
        <div className="pp-hero-copy">
          <p className="section-label">Заказчик · Руза</p>
          <h1>{project.name}</h1>
          <p className="pp-hero-quote">— Дача отца. Мастерская сына.</p>
        </div>
      </section>

      <ProjectTalk project={project} />

      <section className="pp-open">
        <p className="pp-kicker">2023 · Руза · 300 м²</p>
        <h2>Сначала память дома. Потом новый фасад.</h2>
        <div className="pp-open-grid">
          <p>Заказчик пришёл воссоздать старую дачу отца, известного художника. На втором этаже — мастерская, в которой теперь будет работать сын. Дальше территорию можно увеличить: новые дома в дачном духе, а этот дом станет домом-музеем. Жильё уйдёт в новые корпуса. Пока это начало.</p>
          <p>Первый этаж почти полностью повторяет планировку, в которой заказчик проводил детские каникулы. Сохранены виды, которые были дороги, и мебель стоит по прежним зонам. Веранда стала тёплой. Санузел больше, с душем, ещё один — на втором этаже. Камин крупнее, с изразцами. Появилась большая родительская комната.</p>
        </div>
      </section>

      <section className="pp-portrait">
        <img src={photo("02")} alt="Гостиная дом-дачи: камин, диван и вид в сосны" />
        <div>
          <p className="pp-kicker">Ирина Михейкина</p>
          <p>Объём сложился из истории, поэтому искали фасад. Старую изломанную кровлю типичной дачи не хотелось копировать: она уже не держала эстетику. И не хотелось потерять дух места. Деревянный фасад с орнаментом: часть декора, часть прорезана окнами. Массив читается как витраж старой профессорской дачи и как садовый павильон.</p>
        </div>
      </section>

      <section className="pp-work">
        <img src={photo("01")} alt="Фасад дом-дачи с резными наличниками" />
        <div>
          <h2>Руза · 300 м² · 3 этажа · 2 спальни · 2023 · концепция</h2>
          <p>Мансарда отдана галерее работ отца. Над мастерской — антресоль: уклон кровли дал место, и окна в крыше. Галерея и мастерская разделены. Заказчику важна была именно эта свободная галерея-мастерская. Проект остаётся концепцией: о стройке пока неизвестно.</p>
        </div>
      </section>

      <section className="pp-moves">
        <article>
          <span>01</span>
          <h3>Планировка детства</h3>
          <p>Первый этаж держит старый дом. Новые удобства не переписывают его: тёплая веранда, душ, изразцовый камин, комната хозяев.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Витраж вместо дачной кровли</h3>
          <p>Орнамент и окна делают фасад ажурным. Это не копия изломанной крыши и не новый дом без памяти.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Два этажа, две роли</h3>
          <p>Внизу жизнь семьи. Наверху галерея отца и мастерская сына. Позже дом может стать музеем, а жильё уйдёт в новые корпуса.</p>
        </article>
      </section>

      <section className="pp-two">
        <div>
          <p className="pp-kicker">Архитектор</p>
          <p>Частные владения и концепция. Дом как память семьи и начало будущего музейного комплекса.</p>
        </div>
        <div>
          <p className="pp-kicker">Сейчас</p>
          <p>Концепция. В реализацию проект пока не передан.</p>
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
