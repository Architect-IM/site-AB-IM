import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { vladimirServices } from "@/lib/vladimir";
import styles from "../vladimir.module.css";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = vladimirServices.find((item) => item.slug === slug);
  return { title: service?.title ?? "Страница не найдена", description: service?.description };
}

export default async function VladimirService({ params }: Props) {
  const { slug } = await params;
  const service = vladimirServices.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <main id="content" className={`inner-page ${styles.page}`}>
      <nav className={styles.breadcrumbs} aria-label="Навигация по разделу">
        <a href={`/napravleniya/vladimir#${service.slug}`}>← Владимирский контекст</a>
        <span className={styles.eyebrow}>{service.number} / 04</span>
      </nav>
      <header className={styles.detailIntro}>
        <p className={styles.eyebrow}>Владимирский контекст</p>
        <h1>{service.title}</h1>
        <p className={styles.detailLead}>{service.description}</p>
      </header>
      <figure className={styles.detailImage}>
        <img src={service.image} alt={service.alt} fetchPriority="high" />
      </figure>
      <div className={styles.detailSections}>
        {service.blocks.map((block, index) => (
          <section className={styles.detailSection} key={block.heading} aria-labelledby={`section-${index}`}>
            <h2 id={`section-${index}`}>{block.heading}</h2>
            <p>{block.text}</p>
          </section>
        ))}
        <a className={styles.link} href={`/contacts?topic=${encodeURIComponent(service.title)}`}>Обсудить задачу <span aria-hidden="true">↗</span></a>
      </div>
      <nav className={styles.return} aria-label="Навигация по разделу">
        <a className={styles.link} href={`/napravleniya/vladimir#${service.slug}`}>← Владимирский контекст</a>
      </nav>
    </main>
  );
}
