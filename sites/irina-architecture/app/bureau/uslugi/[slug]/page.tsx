import { sitePath } from "@/lib/site-path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { bureauProduct, bureauProducts } from "@/lib/bureau-products";

type Props = { params: Promise<{ slug: string }> };

const voices: Record<string, { image: string; name: string; quote: string }> = {
  finance: {
    image: "/assets/finance-voice.jpg",
    name: "Михаил",
    quote: "Я не рисую один удобный прогноз. Сначала раскладываю, из чего складываются затраты и откуда берётся доход, потом смотрю несколько сценариев: ниже загрузка, длиннее стройка, другая цена входа. Так видно, при каких условиях объект ещё держится и где он уже не сходится. После этого архитектуру можно править по цифрам, а не на глаз.",
  },
};

const sections = [
  ["who", "Для кого и когда"],
  ["gets", "Что в результате?"],
  ["how", "Как работаем"],
  ["why", "Почему это важно"],
  ["next", "Формат и следующий шаг"],
] as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = bureauProduct(slug);
  return { title: product ? `${product.title} — бюро` : "Страница не найдена", description: product?.essence };
}

export default async function BureauService({ params }: Props) {
  const { slug } = await params;
  const product = bureauProduct(slug);
  if (!product) notFound();

  const voice = voices[slug];

  return (
    <main id="content" className="inner-page bureau-page service-page">
      <section className="page-intro">
        <p className="section-label"><a href={sitePath(`/bureau#${product.groupId}`)}>← {product.groupTitle}</a></p>
        <h1>{product.title}</h1>
        <p className="service-essence">{product.essence}</p>
        {voice ? (
          <figure className="service-voice">
            <img src={sitePath(voice.image)} alt="" />
            <figcaption>
              <blockquote>{voice.quote}</blockquote>
              <p>{voice.name}</p>
            </figcaption>
          </figure>
        ) : null}
      </section>
      <section className="section service-sections">
        {sections.map(([key, label]) => (
          <div key={key}>
            <p className="section-label">{label}</p>
            <p>{product[key]}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return bureauProducts.map(({ slug }) => ({ slug }));
}
