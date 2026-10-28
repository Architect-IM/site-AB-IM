import { sitePath } from "@/lib/site-path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LeadVideo } from "@/components/lead-video";
import { FinanceExample } from "@/components/finance-example";
import { BrandPath } from "@/components/brand-path";
import { MarketingNavOffset } from "@/components/marketing-nav-offset";
import { TalkSlot } from "@/components/talk-slot";
import { bureauProduct, bureauProducts, type BureauProduct } from "@/lib/bureau-products";

type Props = { params: Promise<{ slug: string }> };

const voices: Record<string, { image: string; video: string; name: string; role: string; quote: string; stacked?: boolean }> = {
  finance: {
    image: "/assets/finance-voice.jpg",
    video: "/assets/finance-voice.mp4",
    name: "Михаил Лункин",
    role: "маркетолог бюро",
    quote: "Мы не собираем максимально полную модель и без нужды не подгоняем её под МСФО и другие стандарты, а скорее помогаем сделать первый шаг к будущему подробному учёту. Вместе ответим на вопросы — как здесь вообще считаются деньги, как создаётся добавленная стоимость и как на это влияют проектные решения. Разбираем разные сценарии, чтобы было видно, что живёт, а где деньги не возвращаются.",
  },
  brand: {
    image: "/assets/finance-voice.jpg",
    video: "/assets/brand-voice.mp4",
    name: "Михаил Лункин",
    role: "маркетолог бюро",
    stacked: true,
    quote: "Говорят, что нужно быть, а не казаться. Всё так. Но казаться тоже надо уметь. Даже если у вас золото: любой товар важно уметь представить лицом. Мы помогаем любое дело превратить в продукт и сформировать на него платежеспособный спрос.",
  },
};

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
  const words = ["что говорить", "как", "кому", "когда", "через какие каналы", "как понимать, что это работает"];
  const steps = product.how.split(/(?<=\.)\s+/);
  return (
    <section className="comms-sheet">
      <div className="comms-who">
        <p className="section-label">Для кого и когда</p>
        <p>{product.who}</p>
      </div>
      <div className="comms-result">
        <p className="section-label">Что в результате?</p>
        <p className="comms-frame">Детализированная рамка</p>
        <ol>
          {words.map((word) => <li key={word}>{word}</li>)}
        </ol>
      </div>
      <div className="comms-how">
        <p className="section-label">Как работаем</p>
        <ol>
          {steps.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </div>
    </section>
  );
}

function Voice({ slug }: { slug: string }) {
  const voice = voices[slug];
  if (!voice) return null;
  return (
    <aside className={voice.stacked ? "service-lead-aside service-lead-stack" : "service-lead-aside"}>
      <figure>
        <LeadVideo src={sitePath(voice.video)} poster={sitePath(voice.image)} />
        <figcaption className="service-lead-sign">{voice.name}<span>{voice.role}</span></figcaption>
      </figure>
      <blockquote>{voice.quote}</blockquote>
    </aside>
  );
}

function MarketingObject() {
  const finance = bureauProduct("finance")!;
  const brand = bureauProduct("brand")!;
  const comms = bureauProduct("comms")!;

  return (
    <main id="content" className="inner-page bureau-page service-page">
      <section className="page-intro marketing-intro">
        <p className="section-label"><a href={sitePath("/bureau#marketing")}>← Бюро</a></p>
        <h1>Маркетинг</h1>
        <p className="service-essence">Если вы находитесь на этапе формирования, уточнения или даже пересмотра маркетинговой стратегии - мы можем помочь её собрать и увязать с проектными решениями будущего строительства. Только для клиентов бюро.</p>
      </section>

      <nav className="marketing-nav" aria-label="Разделы">
        <MarketingNavOffset />
        <a href="#finance"><span>01</span>{finance.title}</a>
        <a href="#brand"><span>02</span>{brand.title}</a>
        <a href="#comms"><span>03</span>{comms.title}</a>
      </nav>

      <article className="marketing-chapter" id="finance">
        <section className="page-intro service-lead">
          <div>
            <p className="section-label">01</p>
            <h2>{finance.title}</h2>
            <p className="service-essence">{finance.essence}</p>
          </div>
          <Voice slug="finance" />
        </section>
        <section className="finance-method">
          <h2>Как это делается</h2>
          <p>Мы проводим все необходимые интервью и расчёты: что за объект, какие решения уже есть, откуда берутся деньги и доход. Потом собираем все цифры в таблицы, перепроверяем их на достоверность и полноту. После этого показываем результат инфографикой на закрытом сайте проекта, который мы делаем для каждого заказчика и храним там этот архив всех данных по его проекту.</p>
          <p className="finance-method-next">Ниже — пример простого расчёта эффективности модели бизнеса. Его можно делать сколь угодно подробно, но нельзя делать слабее. А часто нет и такого, даже когда инвестиции уже идут. Мы предлагаем считать.</p>
        </section>
        <FinanceExample />
      </article>

      <article className="marketing-chapter" id="brand">
        <section className="page-intro service-lead">
          <div>
            <p className="section-label">02</p>
            <h2>{brand.title}</h2>
            <p className="service-essence">{brand.essence}</p>
          </div>
          <Voice slug="brand" />
        </section>
        <section className="finance-method brand-method">
          <h2>Как это делаем мы</h2>
        </section>
        <BrandPath />
      </article>

      <article className="marketing-chapter" id="comms">
        <section className="page-intro service-lead">
          <div>
            <p className="section-label">03</p>
            <h2>{comms.title}</h2>
            <p className="service-essence">{comms.essence}</p>
          </div>
          <TalkSlot
            image={sitePath("/assets/finance-voice.jpg")}
            name="Михаил Лункин"
            role="маркетолог бюро"
            quote="Коммуникации должны расти из сути проекта, а не из разовых акций. Нужна рамка: что говорить, кому, через какие каналы и как понять, что это работает."
          />
        </section>
        <CommsSheet product={comms} />
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
    <main id="content" className="inner-page bureau-page service-page">
      <section className="page-intro">
        <div>
          <p className="section-label"><a href={sitePath(`/bureau#${product.groupId}`)}>← {product.groupTitle}</a></p>
          <h1>{product.title}</h1>
          <p className="service-essence">{product.essence}</p>
        </div>
      </section>
      <section className="talk-band">
        <TalkSlot name="Бюро" role="видео ещё не снято" quote={product.why} />
      </section>
      <ProductCard product={product} />
    </main>
  );
}

export function generateStaticParams() {
  return bureauProducts.map(({ slug }) => ({ slug }));
}
