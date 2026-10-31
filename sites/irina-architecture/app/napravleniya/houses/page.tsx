import type { Metadata } from "next";
import { sitePath } from "@/lib/site-path";
import { houses, houseServices, houseServicePath, type HouseService } from "@/lib/houses";
import { ActionLabel, HouseLink } from "./links";
import { ImplementationVideo } from "./background-video";
import { ProductLead } from "@/components/product-lead";
import styles from "./houses.module.css";

export const metadata: Metadata = {
  title: houses.title,
  description: "Частные владения: дома и территории. Предпроектный анализ, мастер-планирование, концепция, архитектурный облик и сопровождение реализации. Архитектор Ирина Михейкина.",
};

function ProductCard({ service }: { service: HouseService }) {
  return <a id={service.slug} className={styles.productCard} href={sitePath(houseServicePath(service.slug))} aria-labelledby={`${service.slug}-title`}>
    <div className={styles.cardImage}><img src={sitePath(service.image)} alt={service.alt} loading="lazy" /></div>
    <h3 id={`${service.slug}-title`}>{service.title}</h3>
    <ActionLabel>Подробнее</ActionLabel>
  </a>;
}

export default function Houses() {
  const [analysis, masterplan, concept, appearance, brief, implementation] = houseServices;

  return <main id="content" className={`inner-page ${styles.page}`}>
    <section className={styles.hero} aria-label="Частные владения">
      <nav className={`${styles.breadcrumbs} ${styles.heroBreadcrumbs}`} aria-label="Навигация по разделу">
        <a href={sitePath("/#directions")}>← На главную</a>
        <span aria-current="page">Частные владения</span>
      </nav>
      <div className={styles.heroImage}>
        <img src={sitePath("/assets/home-private-meadow-life.jpg")} alt="Деревянный дом с резными фронтонами, девушка на крыльце и козы на лугу" fetchPriority="high" />
      </div>
    </section>

    <ProductLead kicker="04" title={houses.title} quote={houses.intro} />

    <section id={analysis.slug} className={styles.analysis} aria-labelledby="analysis-title">
      <div className={styles.analysisGrid}>
        <div className={styles.analysisImage}><img src={sitePath(analysis.image)} alt={analysis.alt} loading="lazy" /></div>
        <div className={styles.analysisCopy}>
          <p className={styles.eyebrow}>{analysis.number}</p>
          <h2 id="analysis-title">{analysis.title}</h2>
          <p>{analysis.description}</p>
          <HouseLink href={houseServicePath(analysis.slug)}>Подробнее</HouseLink>
        </div>
      </div>
    </section>

    <section id={masterplan.slug} className={`${styles.videoBand} ${styles.masterplanBand}`} aria-labelledby="masterplan-title">
      <div className={styles.motionBackdrop}><img className={styles.masterplanPhoto} src={sitePath("/assets/houses-masterplan-ruza.jpg")} alt="Частное владение в Рузе: деревянные дома у воды в вечернем свете" loading="lazy" /></div>
      <div className={`${styles.bandCopy} ${styles.videoCopy}`}>
        <h2 id="masterplan-title">{masterplan.title}</h2>
        <p>{masterplan.description}</p>
        <HouseLink href={houseServicePath(masterplan.slug)}>Подробнее</HouseLink>
      </div>
    </section>

    <section className={styles.products} aria-label="Проектирование частных владений">
      <div className={styles.productGrid}>
        {[concept, appearance, brief].map(service => <ProductCard key={service.slug} service={service} />)}
      </div>
    </section>

    <section id={implementation.slug} className={styles.videoBand} aria-labelledby="implementation-title">
      <ImplementationVideo />
      <div className={`${styles.bandCopy} ${styles.videoCopy}`}>
        <h2 id="implementation-title">{implementation.title}</h2>
        <p>{implementation.description}</p>
        <HouseLink href={houseServicePath(implementation.slug)}>Подробнее</HouseLink>
      </div>
    </section>

    <nav className={`${styles.return} ${styles.mainReturn}`} aria-label="Другие направления">
      <HouseLink href="/#directions" back>Чем я занимаюсь?</HouseLink>
    </nav>
  </main>;
}
