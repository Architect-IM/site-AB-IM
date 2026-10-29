import { sitePath } from "@/lib/site-path";
import { projects } from "@/lib/projects";
import type { BureauProduct } from "@/lib/bureau-products";
import { productStory, type ProductTake } from "@/lib/product-takes";

const quietLabels = ["Для кого и когда", "Что в результате?", "Как работаем", "Почему это важно", "Формат и следующий шаг"] as const;

function takeClass(take: ProductTake) {
  if (take.kind === "left") return "p-take p-take-left";
  if (take.kind === "wide") return "p-take p-take-wide";
  if (take.kind === "note") return "p-take p-take-note";
  return "p-take";
}

function TakeBlock({ take }: { take: ProductTake }) {
  if (take.kind === "reel") {
    return (
      <section className="p-reel" aria-label={take.title}>
        <div className="p-reel-copy">
          <h2>{take.title}</h2>
          {take.text ? <p>{take.text}</p> : null}
        </div>
        <div className="p-reel-track">
          {take.frames?.map((frame) => (
            <img
              key={frame.src}
              src={sitePath(frame.src)}
              alt=""
              className={frame.wide ? "is-wide" : frame.narrow ? "is-narrow" : undefined}
            />
          ))}
        </div>
      </section>
    );
  }

  if (take.kind === "review") {
    return (
      <section className="p-review" aria-label="Отзыв">
        {take.image ? <img src={sitePath(take.image)} alt="" /> : null}
        <div>
          <p className="p-review-kicker">Ценность, сказанная заказчиком</p>
          <h2>{take.title}</h2>
          {take.text ? <blockquote>{take.text}</blockquote> : null}
          {take.sign ? <p className="p-review-sign">{take.sign}{take.signMeta ? <span>{take.signMeta}</span> : null}</p> : null}
        </div>
      </section>
    );
  }

  const imageFirst = take.kind === "left" || take.kind === "wide";
  const copy = (
    <div>
      <h2>{take.title}</h2>
      {take.text ? <p>{take.text}</p> : null}
    </div>
  );
  const image = take.image ? <img src={sitePath(take.image)} alt="" /> : null;

  return (
    <section className={takeClass(take)}>
      {imageFirst ? image : copy}
      {imageFirst ? copy : image}
    </section>
  );
}

export function StageStandard({ product }: { product: BureauProduct }) {
  const story = productStory(product.slug);
  if (!story) return null;

  const quiets = [product.who, product.gets, product.how, product.why, product.next];
  const nodes: Array<{ key: string; take?: ProductTake; label?: string; text?: string }> = [];
  let quietIndex = 0;

  story.takes.forEach((take, index) => {
    nodes.push({ key: `take-${index}`, take });
    if (take.kind !== "review" && quietIndex < quiets.length) {
      nodes.push({ key: `quiet-${quietIndex}`, label: quietLabels[quietIndex], text: quiets[quietIndex] });
      quietIndex += 1;
    }
  });
  while (quietIndex < quiets.length) {
    nodes.push({ key: `quiet-${quietIndex}`, label: quietLabels[quietIndex], text: quiets[quietIndex] });
    quietIndex += 1;
  }

  const shown = story.works
    .map((slug) => projects.find((item) => item.slug === slug))
    .filter((item) => item !== undefined);

  return (
    <>
      {nodes.map((node) =>
        node.take ? (
          <TakeBlock key={node.key} take={node.take} />
        ) : (
          <section className="p-quiet" key={node.key}>
            <h2>{node.label}</h2>
            <p>{node.text}</p>
          </section>
        ),
      )}
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
