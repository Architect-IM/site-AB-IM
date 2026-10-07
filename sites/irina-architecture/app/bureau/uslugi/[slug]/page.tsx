import { sitePath } from "@/lib/site-path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FinanceExample } from "@/components/finance-example";
import { FinanceRecord } from "@/components/finance-record";
import { bureauProduct, bureauProducts } from "@/lib/bureau-products";

type Props = { params: Promise<{ slug: string }> };

const voices: Record<string, { image: string; name: string; role: string; quote: string }> = {
  finance: {
    image: "/assets/finance-voice.jpg",
    name: "Михаил Лункин",
    role: "маркетолог бюро",
    quote: "Мы не собираем максимально полную модель и без нужды не подгоняем её под МСФО и другие стандарты, а скорее помогаем сделать первый шаг к будущему подробному учёту. Вместе ответим на вопросы — как здесь вообще считаются деньги, как создаётся добавленная стоимость и как на это влияют проектные решения. Разбираем разные сценарии, чтобы было видно, что живёт, а где деньги не возвращаются.",
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
      <section className={voice ? "page-intro service-lead" : "page-intro"}>
        <div>
          <p className="section-label"><a href={sitePath(`/bureau#${product.groupId}`)}>← {product.groupTitle}</a></p>
          <h1>{product.title}</h1>
          <p className="service-essence">{product.essence}</p>
        </div>
        {voice ? (
          <aside className="service-lead-aside">
            <figure>
              <img className="service-lead-photo" src={sitePath(voice.image)} alt="" />
              <figcaption className="service-lead-sign">{voice.name}<span>{voice.role}</span></figcaption>
            </figure>
            <blockquote>{voice.quote}</blockquote>
          </aside>
        ) : null}
      </section>
      {slug === "finance" ? (
        <section className="finance-method">
          <h2>Как это делается</h2>
          <p>Мы проводим все необходимые интервью и расчёты: что за объект, какие решения уже есть, откуда берутся деньги и доход. Потом собираем все цифры в таблицы, перепроверяем их на достоверность и полноту. После этого показываем результат инфографикой на закрытом сайте проекта, который мы делаем для каждого заказчика и храним там этот архив всех данных по его проекту.</p>
        </section>
      ) : null}
      {slug === "finance" ? <FinanceExample /> : null}
      {slug === "finance" ? <FinanceRecord /> : null}
      {slug === "finance" ? null : (
      <section className="section service-sections">
        {sections.map(([key, label]) => (
          <div key={key}>
            <p className="section-label">{label}</p>
            <p>{product[key]}</p>
          </div>
        ))}
      </section>
      )}
    </main>
  );
}

export function generateStaticParams() {
  return bureauProducts.map(({ slug }) => ({ slug }));
}
