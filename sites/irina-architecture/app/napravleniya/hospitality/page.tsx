import type { Metadata } from "next";
import { sitePath } from "@/lib/site-path";
import { hospitality, hospitalityServices, hospitalityServicePath } from "@/lib/hospitality";
import { ProductClients } from "@/components/product-clients";
import { HouseLink } from "../houses/links";
import styles from "../houses/houses.module.css";

export const metadata: Metadata = {
  title: hospitality.title,
  description: "Живое гостеприимство: туристический объект как система — образ, экономика, опыт гостя и реализация. Архитектор Ирина Михейкина.",
};

export default function Hospitality() {
  return (
    <main id="content" className={`inner-page ${styles.page}`}>
      <section className={styles.hero} aria-labelledby="hospitality-title">
        <nav className={`${styles.breadcrumbs} ${styles.heroBreadcrumbs}`} aria-label="Навигация по разделу">
          <a href={sitePath("/#directions")}>← На главную</a>
          <span aria-current="page">Живое гостеприимство</span>
        </nav>
        <div className={styles.heroImage}>
          <img src={sitePath(hospitality.image)} alt={hospitality.alt} fetchPriority="high" />
        </div>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Hospitality / 02</p>
          <h1 id="hospitality-title">{hospitality.title}</h1>
          <p className={styles.subtitle}>{hospitality.subtitle}</p>
          <p className={styles.intro}>{hospitality.intro}</p>
        </div>
      </section>

      {hospitalityServices.map((service, index) => (
        index % 2 === 0 ? (
          <section id={service.slug} className={styles.analysis} aria-labelledby={`${service.slug}-title`} key={service.slug}>
            <div className={styles.analysisGrid}>
              <div className={styles.analysisImage}><img src={sitePath(service.image)} alt={service.alt} loading="lazy" /></div>
              <div className={styles.analysisCopy}>
                <p className={styles.eyebrow}>{service.number}</p>
                <h2 id={`${service.slug}-title`}>{service.title}</h2>
                <p>{service.description}</p>
                <HouseLink href={hospitalityServicePath(service.slug)}>Подробнее</HouseLink>
              </div>
            </div>
          </section>
        ) : (
          <section id={service.slug} className={`${styles.videoBand} ${styles.masterplanBand}`} aria-labelledby={`${service.slug}-title`} key={service.slug}>
            <div className={styles.motionBackdrop}><img className={styles.masterplanPhoto} src={sitePath(service.image)} alt={service.alt} loading="lazy" /></div>
            <div className={`${styles.bandCopy} ${styles.videoCopy}`}>
              <p className={styles.eyebrow}>{service.number}</p>
              <h2 id={`${service.slug}-title`}>{service.title}</h2>
              <p>{service.description}</p>
              <HouseLink href={hospitalityServicePath(service.slug)}>Подробнее</HouseLink>
            </div>
          </section>
        )
      ))}

      <ProductClients slug="hospitality" />

      <nav className={`${styles.return} ${styles.mainReturn}`} aria-label="Другие направления">
        <HouseLink href="/#directions" back>Чем я занимаюсь?</HouseLink>
      </nav>
    </main>
  );
}
