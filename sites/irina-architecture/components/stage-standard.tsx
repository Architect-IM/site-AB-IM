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
          <h2>Предпроектный анализ.</h2>
          <p>Уточняем исходные данные, эскизную концепцию, помогаем с заданием, формируем график и дорожную карту жизни проекта.</p>
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
          <h2>Глубокое чтение контекста.</h2>
          <p>Учитываем архитектурный код места и культурный код заказчика, сообщества и территории, а также культурные тенденции.</p>
        </div>
      </section>

      <section className="p-quiet">
        <h2>Что в результате?</h2>
        <p>{product.gets}</p>
      </section>

      <section className="p-take p-take-flip">
        <div>
          <h2>Оптимизация и уникальные решения.</h2>
          <p>Проектируем не для галочки или экспертизы, а так, чтобы решения закрывали текущие задачи и оставляли возможность для развития объекта.</p>
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
          <h2>Проект как единая система.</h2>
          <blockquote>Все 15 разделов велись согласованно и были подчинены генеральному замыслу. Комплект не собирали из разрозненных частей.</blockquote>
          <p className="p-review-sign">Главный инженер<span>Доброград</span></p>
        </div>
      </section>

      <section className="p-take">
        <div>
          <h2>100% гарантия положительного заключения экспертизы.</h2>
          <p>По нашим проектам не было ни одного отказа в выдаче разрешения на строительство или положительного заключения экспертизы.</p>
        </div>
        <img src={sitePath("/assets/mansion-hero.jpg")} alt="" />
      </section>

      <section className="p-quiet">
        <h2>Почему это важно</h2>
        <p>{product.why}</p>
      </section>

      <section className="p-bleed">
        <img src={sitePath("/assets/house.jpg")} alt="" />
        <div>
          <h2>Глубокая инженерная экспертиза.</h2>
          <p>Сильные компетенции в конструкциях, технологиях и инженерных решениях.</p>
        </div>
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
