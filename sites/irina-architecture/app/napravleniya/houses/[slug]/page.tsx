import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sitePath } from "@/lib/site-path";
import { houseServices } from "@/lib/houses";
import { HouseLink } from "../links";
import { ImplementationBlocks } from "../implementation-blocks";
import { ProductLead } from "@/components/product-lead";
import styles from "../houses.module.css";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = houseServices.find(item => item.slug === slug);
  return { title: service?.title ?? "Страница не найдена", description: service?.description };
}

export function generateStaticParams() { return houseServices.map(({ slug }) => ({ slug })); }

export default async function HouseServicePage({ params }: Props) {
  const { slug } = await params;
  const service = houseServices.find(item => item.slug === slug);
  if (!service) notFound();
  const back = `/napravleniya/houses#${service.slug}`;

  return <main id="content" className={`inner-page ${styles.page}`}>
    <nav className={styles.breadcrumbs} aria-label="Навигация по разделу">
      <span className={styles.crumbLevels}>
        <a href={sitePath("/#directions")}>← На главную</a>
        <a href={sitePath(back)}>← Частные владения</a>
      </span>
      <span>{service.number} / {String(houseServices.length).padStart(2, "0")}</span>
    </nav>
    <ProductLead kicker={service.number} title={service.title} quote={service.description} />
    <div className={styles.detailVisual}><img src={sitePath(service.image)} alt={service.alt} fetchPriority="high" /></div>
    {service.slug === "estate-implementation" && <ImplementationBlocks />}
    <div className={styles.detailSections}>
      {service.blocks.map((block, index) => <section key={block.heading} className={styles.detailSection} aria-labelledby={`block-${index}`}>
        <h2 id={`block-${index}`}>{block.heading}</h2>
        <p>{block.text}</p>
      </section>)}
    </div>
    <nav className={styles.return} aria-label="Вернуться к направлению"><HouseLink href={back} back>Частные владения</HouseLink></nav>
  </main>;
}
