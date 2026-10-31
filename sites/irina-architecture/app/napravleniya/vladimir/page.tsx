
import { sitePath } from "@/lib/site-path";
import type { Metadata } from "next";
import { vladimir, vladimirServices } from "@/lib/vladimir";
import { VladimirVideo } from "./video-player";
import { ProductLead } from "@/components/product-lead";
import styles from "./vladimir.module.css";

export const metadata: Metadata = {
  title: vladimir.title,
  description: "Владимирский контекст: мастер-план территории, идеологическое и концептуальное проектирование, архитектурно-градостроительный облик и исследования. Архитектор Ирина Михейкина.",
};

function CircleLink({ href, label, back = false, ariaLabel }: { href: string; label: string; back?: boolean; ariaLabel?: string }) {
  return (
    <a className={styles.overviewLink} href={sitePath(href)} aria-label={ariaLabel}>
      <span className={styles.linkIcon} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none"><path d={back ? "M20 12H4m5-5-5 5 5 5" : "M4 12h16m-5-5 5 5-5 5"} stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </span>
      <span>{label}</span>
    </a>
  );
}

export default function Vladimir() {
  return (
    <main id="content" className={`inner-page ${styles.page}`}>
      <section className={styles.hero} aria-label="Владимирский контекст">
        <VladimirVideo />
        <nav className={styles.breadcrumbs} aria-label="Навигация по разделу">
          <a href={sitePath("/")}>← На главную</a>
          <span aria-current="page">Владимирский контекст</span>
        </nav>
      </section>

      <ProductLead kicker="01" title={vladimir.title} quote={vladimir.intro} />

      <section id="directions" className="section directions" aria-label="Четыре продукта Владимирского контекста">
        <div className="direction-grid">
          {vladimirServices.map((service, index) => (
            <a
              key={service.slug}
              id={service.slug}
              className={`direction-card${index % 2 ? " direction-fullbleed" : ""}${service.slug === "concept" ? ` ${styles.conceptBackdrop}` : ""}`}
              href={sitePath(service.href)}
              aria-labelledby={`${service.slug}-title`}
              aria-describedby={`${service.slug}-description`}
            >
              <div className="direction-meta">
                <span className="direction-kicker">{service.number}</span>
                <h3 id={`${service.slug}-title`}>{service.title}</h3>
                <p id={`${service.slug}-description`}>{service.description}</p>
                <span className="direction-action">
                  <span className="direction-link-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none"><path d="M4 12h16m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <span>Подробнее</span>
                </span>
              </div>
              <div className="media-frame">
                <img className={service.slug === "ago" ? styles.templeImage : undefined} src={sitePath(service.image)} alt={index === 1 ? "" : service.alt} loading="lazy" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <nav className={`${styles.return} ${styles.overviewReturn}`} aria-label="Другие направления">
        <CircleLink href="/#directions" label="Чем я занимаюсь?" back />
      </nav>
    </main>
  );
}
