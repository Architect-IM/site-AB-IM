import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sitePath } from "@/lib/site-path";
import { hospitalityServices } from "@/lib/hospitality";
import { HouseLink } from "../../houses/links";
import { ProductLead } from "@/components/product-lead";
import styles from "../../houses/houses.module.css";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = hospitalityServices.find((item) => item.slug === slug);
  return { title: service?.title ?? "Страница не найдена", description: service?.lead ?? service?.description };
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
        <span className={styles.crumbLevels}>
          <a href={sitePath("/#directions")}>← На главную</a>
          <a href={sitePath(back)}>← Живое гостеприимство</a>
        </span>
        <span>{service.number} / {String(hospitalityServices.length).padStart(2, "0")}</span>
      </nav>
      <ProductLead kicker={service.number} title={service.title} quote={service.lead ?? service.description} />
      {service.slug === "vision" ? (
        <section className={styles.moneyBoard} aria-label="Деньги">
          <img className={styles.moneyHero} src={sitePath("/assets/vision-hotel.jpg")} alt="Горный отель у склона" />
          <div className={styles.moneyRow}>
            <div className={styles.moneyCopy}>
              <h2>Деньги</h2>
              <p className={styles.moneyGroup}>Сколько вложить</p>
              <dl>
                <div><dt>Всего</dt><dd>0,6 млрд ₽</dd></div>
                <div><dt>Номеров</dt><dd>60</dd></div>
              </dl>
              <p className={styles.moneyGroup}>Обычный год</p>
              <dl>
                <div><dt>Цена ночи</dt><dd>14 000 ₽</dd></div>
                <div><dt>В среднем заняты</dt><dd>60%</dd></div>
                <div><dt>Грязная прибыль</dt><dd>35%</dd></div>
              </dl>
              <p className={styles.moneyGroup}>Что возвращается</p>
              <dl>
                <div><dt>В год</dt><dd>18%</dd></div>
                <div><dt>Окупается</dt><dd>за 5,5 года</dd></div>
              </dl>
            </div>
            <img src={sitePath("/assets/vision-restaurant.jpg")} alt="Зал ресторана у окна на горы" />
            <img src={sitePath("/assets/vision-room.jpg")} alt="Спальня с видом на горы" />
          </div>
        </section>
      ) : (
        <div className={styles.detailVisual}><img src={sitePath(service.image)} alt={service.alt} fetchPriority="high" /></div>
      )}
      <div className={styles.detailSections}>
        {service.blocks.map((block, index) => (
          <section key={block.heading} className={styles.detailSection} aria-labelledby={`block-${index}`}>
            <h2 id={`block-${index}`}>{block.heading}</h2>
            <p>{block.text}</p>
          </section>
        ))}
      </div>
      <nav className={styles.return} aria-label="Вернуться к направлению">
        <HouseLink href={back} back>Живое гостеприимство</HouseLink>
      </nav>
    </main>
  );
}
