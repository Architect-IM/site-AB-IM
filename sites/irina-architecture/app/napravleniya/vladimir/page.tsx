import type { Metadata } from "next";
import { vladimir, vladimirServices } from "@/lib/vladimir";
import styles from "./vladimir.module.css";

export const metadata: Metadata = {
  title: vladimir.title,
  description: "Владимирский контекст: мастер-план территории, идеологическое и концептуальное проектирование, архитектурно-градостроительный облик и исследования. Архитектор Ирина Михейкина.",
};

function ServiceCopy({ index }: { index: number }) {
  const service = vladimirServices[index];
  return (
    <>
      <p className={styles.eyebrow}>{service.number}</p>
      <h2 id={`${service.slug}-title`}>{service.title}</h2>
      <p>{service.description}</p>
      <a className={styles.link} href={service.href} aria-label={`Подробнее: ${service.title}`}>
        Подробнее <span aria-hidden="true">↗</span>
      </a>
    </>
  );
}

export default function Vladimir() {
  return (
    <main id="content" className={`inner-page ${styles.page}`}>
      <nav className={styles.breadcrumbs} aria-label="Навигация по разделу">
        <a href="/">← На главную</a>
        <span aria-current="page">Владимирский контекст</span>
      </nav>

      <section className={styles.hero} aria-labelledby="vladimir-title">
        <div className={styles.heroImage}>
          <img src="/assets/territory.jpg" alt="Поселение, храмы и зелёные берега реки в вечернем свете" fetchPriority="high" />
        </div>
        <div className={styles.heroCopy}>
          <h1 id="vladimir-title">{vladimir.title}</h1>
          <p className={styles.subtitle}>{vladimir.subtitle}</p>
          <p className={styles.lead}>{vladimir.intro}</p>
        </div>
      </section>

      <div className={styles.divider} aria-hidden="true" />

      <section id="master-plan" className={styles.format} aria-labelledby="master-plan-title">
        <div className={styles.row}>
          <figure className={styles.image}>
            <img src={vladimirServices[0].image} alt={vladimirServices[0].alt} loading="lazy" />
          </figure>
          <div className={styles.copy}><ServiceCopy index={0} /></div>
        </div>
      </section>

      <section id="concept" className={styles.panorama} aria-labelledby="concept-title">
        <img className={styles.panoramaImage} src={vladimirServices[1].image} alt="" loading="lazy" />
        <div className={styles.panoramaInner}>
          <div className={styles.copy}><ServiceCopy index={1} /></div>
        </div>
      </section>

      <section id="ago" className={styles.format} aria-labelledby="ago-title">
        <div className={`${styles.row} ${styles.reversed}`}>
          <div className={styles.copy}><ServiceCopy index={2} /></div>
          <figure className={styles.image}>
            <img src={vladimirServices[2].image} alt={vladimirServices[2].alt} loading="lazy" />
          </figure>
        </div>
      </section>

      <section id="research" className={styles.split} aria-labelledby="research-title">
        <div className={styles.splitImage}>
          <img src={vladimirServices[3].image} alt={vladimirServices[3].alt} loading="lazy" />
        </div>
        <div className={`${styles.copy} ${styles.splitCopy}`}><ServiceCopy index={3} /></div>
      </section>

      <nav className={styles.return} aria-label="Другие направления">
        <a className={styles.link} href="/#directions">← Чем я занимаюсь?</a>
      </nav>
    </main>
  );
}
