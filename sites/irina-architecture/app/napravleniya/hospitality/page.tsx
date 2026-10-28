import type { Metadata } from "next";
import { sitePath } from "@/lib/site-path";
import { hospitality, hospitalityServices, hospitalityServicePath } from "@/lib/hospitality";
import { ProductClients } from "@/components/product-clients";
import { HouseLink } from "../houses/links";
import styles from "../houses/houses.module.css";

export const metadata: Metadata = {
  title: hospitality.title,
  description: "Живое гостеприимство: визионерская концепция, мастер-план живого объекта, стратегическая сессия и сопровождение. Архитектор Ирина Михейкина.",
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

      <section id="directions" className="section directions" aria-label="Продукты живого гостеприимства">
        <div className="direction-grid">
          {hospitalityServices.map((service, index) => (
            <a
              key={service.slug}
              id={service.slug}
              className={`direction-card${index % 2 ? " direction-fullbleed" : ""}`}
              href={sitePath(hospitalityServicePath(service.slug))}
              aria-labelledby={`${service.slug}-title`}
            >
              <div className="direction-meta">
                <span className="direction-kicker">{service.number}</span>
                <h3 id={`${service.slug}-title`}>{service.title}</h3>
                <p>{service.description}</p>
                <span className="direction-action">
                  <span className="direction-link-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M4 12h16m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <span>Подробнее</span>
                </span>
              </div>
              <div className="media-frame">
                <img src={sitePath(service.image)} alt={service.alt} loading="lazy" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <ProductClients slug="hospitality" />

      <nav className={`${styles.return} ${styles.mainReturn}`} aria-label="Другие направления">
        <HouseLink href="/#directions" back>Чем я занимаюсь?</HouseLink>
      </nav>
    </main>
  );
}
