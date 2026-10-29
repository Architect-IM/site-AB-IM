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
          <h2>Чертежи начинаются, когда у проекта уже есть срок.</h2>
          <p>Дорожная карта собрана раньше разделов. Комплект идёт по ней, а не наоборот.</p>
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
          <h2>Место входит в чертёж.</h2>
          <p>Не в пояснительную записку.</p>
        </div>
      </section>

      <section className="p-quiet">
        <h2>Что в результате?</h2>
        <p>{product.gets}</p>
      </section>

      <section className="p-take p-take-flip">
        <div>
          <h2>Лишнего запаса нет. Нужный — есть.</h2>
          <p>Параметры держат сегодняшнюю задачу и не запечатывают объект.</p>
        </div>
        <img src={sitePath("/assets/lodge.jpg")} alt="" />
      </section>

      <section className="p-quiet">
        <h2>Как работаем</h2>
        <p>{product.how}</p>
      </section>

      <section className="p-review" aria-label="Отзыв">
        <p className="p-review-kicker">Ценность, сказанная заказчиком</p>
        <h2>Пятнадцать разделов. Один замысел.</h2>
        <blockquote>Нам не собирали папку из чужих кусков. Архитектура, конструкции и инженерия спорили в одном комплекте и пришли к одному решению. На экспертизу ушёл проект, а не набор разделов.</blockquote>
        <p className="p-review-sign">Пример отзыва · заказчик стадии П<span>Живую цитату поставим, когда она будет.</span></p>
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
