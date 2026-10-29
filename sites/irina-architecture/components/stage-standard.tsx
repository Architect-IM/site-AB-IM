import { sitePath } from "@/lib/site-path";
import { projects } from "@/lib/projects";
import type { BureauProduct } from "@/lib/bureau-products";

const examples = ["pokrovskiy-pryanik", "dobrograd", "saburovo", "kabardinka", "ples"];

export function StageStandard({ product }: { product: BureauProduct }) {
  const shown = examples
    .map((slug) => projects.find((item) => item.slug === slug))
    .filter((item) => item !== undefined);

  return (
    <>
      <section className="p-take">
        <div>
          <h2>Сначала карта проекта.</h2>
          <p>Исходные данные, эскизная концепция, задание и график жизни проекта собираются до разделов.</p>
        </div>
        <img src={sitePath("/assets/bureau.jpg")} alt="" />
      </section>

      <section className="p-quiet">
        <h2>Для кого и когда</h2>
        <p>{product.who}</p>
      </section>

      <section className="p-bleed">
        <img src={sitePath("/assets/territory.jpg")} alt="" />
        <div>
          <h2>Код места и код заказчика.</h2>
          <p>Архитектурный код территории и культурный код заказчика, сообщества и времени входят в решение.</p>
        </div>
      </section>

      <section className="p-quiet">
        <h2>Что в результате?</h2>
        <p>{product.gets}</p>
      </section>

      <section className="p-take p-take-flip">
        <div>
          <h2>Не для галочки и не только для экспертизы.</h2>
          <p>Решения закрывают текущую задачу и оставляют объекту возможность развиваться.</p>
        </div>
        <img src={sitePath("/assets/lodge.jpg")} alt="" />
      </section>

      <section className="p-quiet">
        <h2>Как работаем</h2>
        <p>{product.how}</p>
      </section>

      <section className="p-review" aria-label="Отзыв">
        <img src={sitePath("/assets/portfolio/saburovo/voice.jpg")} alt="" />
        <div>
          <p className="p-review-kicker">Ценность, сказанная заказчиком</p>
          <h2>Пятнадцать разделов — один замысел.</h2>
          <blockquote>Разделы не собирали из чужих кусков. Все пятнадцать велись согласованно и были подчинены генеральному замыслу. На экспертизу ушёл один проект.</blockquote>
          <p className="p-review-sign">Главный инженер<span>Доброград</span></p>
        </div>
      </section>

      <section className="p-quiet">
        <h2>Почему это важно</h2>
        <p>{product.why}</p>
      </section>

      <section className="p-quiet">
        <h2>Формат и следующий шаг</h2>
        <p>{product.next}</p>
      </section>

      <section className="p-works" aria-label="Проекты">
        <h2>Этот продукт</h2>
        <div>
          {shown.map((project) => (
            <a href={sitePath(`/portfolio/${project.slug}`)} key={project.slug}>
              <img src={sitePath(`/assets/${project.image}.jpg`)} alt="" style={"imagePosition" in project && project.imagePosition ? { objectPosition: project.imagePosition } : undefined} />
              <h3>{project.name}</h3>
              <p>{project.place}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
