import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sitePath } from "@/lib/site-path";
import { hospitalityServices } from "@/lib/hospitality";
import { HouseLink } from "../../houses/links";
import styles from "../../houses/houses.module.css";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = hospitalityServices.find((item) => item.slug === slug);
  return { title: service?.title ?? "Страница не найдена", description: service?.description };
}

export function generateStaticParams() {
  return hospitalityServices.map(({ slug }) => ({ slug }));
}

export default async function HospitalityService({ params }: Props) {
  const { slug } = await params;
  const service = hospitalityServices.find((item) => item.slug === slug);
  if (!service) notFound();
  const back = `/napravleniya/hospitality#${service.slug}`;

  return (
    <main id="content" className={`inner-page ${styles.page}`}>
      <nav className={styles.breadcrumbs} aria-label="Навигация по разделу">
        <a href={sitePath(back)}>← Живое гостеприимство</a>
        <span>{service.number} / {String(hospitalityServices.length).padStart(2, "0")}</span>
      </nav>
      <header className={styles.detailIntro}>
        <p className={styles.eyebrow}>Живое гостеприимство</p>
        <h1>{service.title}</h1>
        <p className={styles.detailLead}>{service.description}</p>
      </header>
      <div className={styles.detailVisual}><img src={sitePath(service.image)} alt={service.alt} fetchPriority="high" /></div>
      <div className={styles.detailSections}>
        {service.blocks.map((block, index) => (
          <section key={block.heading} className={styles.detailSection} aria-labelledby={`block-${index}`}>
            <h2 id={`block-${index}`}>{block.heading}</h2>
            <p>{block.text}</p>
          </section>
        ))}
        <div className={styles.detailContact}><HouseLink href={`/contacts?topic=${encodeURIComponent(service.title)}`}>Обсудить задачу</HouseLink></div>
      </div>
      <nav className={styles.return} aria-label="Вернуться к направлению">
        <HouseLink href={back} back>Живое гостеприимство</HouseLink>
      </nav>
    </main>
  );
}
