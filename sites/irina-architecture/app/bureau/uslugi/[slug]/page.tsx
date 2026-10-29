import { sitePath } from "@/lib/site-path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FinanceExample } from "@/components/finance-example";
import { BrandPath } from "@/components/brand-path";
import { MarketingNavOffset } from "@/components/marketing-nav-offset";
import { ProductLead } from "@/components/product-lead";
import { ProductClients } from "@/components/product-clients";
import { StageStandard } from "@/components/stage-standard";
import { bureauProduct, bureauProducts, type BureauProduct } from "@/lib/bureau-products";

type Props = { params: Promise<{ slug: string }> };

const sections = [
  ["who", "Для кого и когда"],
  ["gets", "Что в результате?"],
  ["how", "Как работаем"],
  ["why", "Почему это важно"],
  ["next", "Формат и следующий шаг"],
] as const;

const marketingSlugs = new Set(["marketing", "finance", "brand", "comms"]);

function ProductCard({ product }: { product: BureauProduct }) {
  return (
    <section className="section service-sections">
      {sections.map(([key, label]) => (
        <div key={key}>
          <p className="section-label">{label}</p>
          <p>{product[key]}</p>
        </div>
      ))}
    </section>
  );
}

function CommsSheet({ product }: { product: BureauProduct }) {
  return (
    <section className="comms-sheet">
      <div className="comms-row">
        <h3>Для кого и когда</h3>
        <p>{product.who}</p>
      </div>
      <div className="comms-row">
        <h3>Что в результате?</h3>
        <p>{product.gets}</p>
      </div>
      <div className="comms-row">
        <h3>Как работаем</h3>
        <p>{product.how}</p>
      </div>
    </section>
  );
}

function MarketingObject() {
  const finance = bureauProduct("finance")!;
  const brand = bureauProduct("brand")!;
  const comms = bureauProduct("comms")!;

  return (
    <main id="content" className="inner-page bureau-page service-page">
      <section className="page-intro marketing-intro">
        <p className="section-label crumb-levels"><a href={sitePath("/")}>← На главную</a><a href={sitePath("/bureau#marketing")}>← Бюро</a></p>
      </section>
      <ProductLead
        title="Маркетинг"
        quote="Если вы находитесь на этапе формирования, уточнения или даже пересмотра маркетинговой стратегии - мы можем помочь её собрать и увязать с проектными решениями будущего строительства. Только для клиентов бюро."
        name="Михаил Лункин"
        role="маркетолог бюро"
        image="/assets/finance-voice.jpg"
      />

      <nav className="marketing-nav" aria-label="Разделы">
        <MarketingNavOffset />
        <p className="marketing-rank marketing-rank-main">Главное</p>
        <p className="marketing-rank marketing-rank-extra">Дополнительно</p>
        <a href="#brand"><span>01</span>{brand.title}</a>
        <a href="#finance"><span>02</span>{finance.title}</a>
        <a href="#comms"><span>03</span>{comms.title}</a>
      </nav>

      <article className="marketing-chapter" id="brand">
        <section className="page-intro">
          <p className="section-label">01</p>
          <h2>{brand.title}</h2>
          <p className="service-essence">{brand.essence}</p>
        </section>
        <section className="finance-method brand-method">
          <h2>Как это делаем мы</h2>
        </section>
        <BrandPath />
        <ProductClients slug="brand" />
      </article>

      <article className="marketing-chapter" id="finance">
        <section className="page-intro">
          <p className="section-label">02</p>
          <h2>{finance.title}</h2>
          <p className="service-essence">{finance.essence}</p>
        </section>
        <section className="finance-method">
          <h2>Как это делается</h2>
          <p>Мы проводим все необходимые интервью и расчёты: что за объект, какие решения уже есть, откуда берутся деньги и доход. Потом собираем все цифры в таблицы, перепроверяем их на достоверность и полноту. После этого показываем результат инфографикой на закрытом сайте проекта, который мы делаем для каждого заказчика и храним там этот архив всех данных по его проекту.</p>
          <p className="finance-method-next">Ниже — пример простого расчёта эффективности модели бизнеса. Его можно делать сколь угодно подробно, но нельзя делать слабее. А часто нет и такого, даже когда инвестиции уже идут. Мы предлагаем считать.</p>
        </section>
        <FinanceExample />
        <ProductClients slug="finance" />
      </article>

      <article className="marketing-chapter" id="comms">
        <section className="page-intro">
          <p className="section-label">03</p>
          <h2>{comms.title}</h2>
          <p className="service-essence">{comms.essence}</p>
        </section>
        <CommsSheet product={comms} />
        <ProductClients slug="comms" />
      </article>
    </main>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (marketingSlugs.has(slug)) {
    return { title: "Маркетинг — бюро", description: "Финансовая модель, бренд и коммуникации объекта — одним материалом." };
  }
  const product = bureauProduct(slug);
  return { title: product ? `${product.title} — бюро` : "Страница не найдена", description: product?.essence };
}

export default async function BureauService({ params }: Props) {
  const { slug } = await params;
  if (marketingSlugs.has(slug)) return <MarketingObject />;

  const product = bureauProduct(slug);
  if (!product) notFound();

  return (
    <main id="content" className={`inner-page bureau-page service-page${product.slug === "stage-p" ? " stage-page" : ""}`}>
      <section className="page-intro">
        <p className="section-label crumb-levels"><a href={sitePath("/bureau")}>← Бюро</a><a href={sitePath(`/bureau#${product.groupId}`)}>← {product.groupTitle}</a></p>
      </section>
      <ProductLead title={product.title} quote={product.essence} name="Ирина Михейкина" role="руководитель бюро" featured={product.slug === "stage-p"} />
      {product.slug === "stage-p" ? <StageStandard product={product} /> : (
        <>
          <ProductCard product={product} />
          <ProductClients slug={product.slug} />
        </>
      )}
    </main>
  );
}

export function generateStaticParams() {
  return bureauProducts.map(({ slug }) => ({ slug }));
}
