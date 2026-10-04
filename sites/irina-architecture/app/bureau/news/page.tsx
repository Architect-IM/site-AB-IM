import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Новости бюро",
  description: "Публикации архитектурного бюро Ирины Михейкиной.",
};

export default function BureauNews() {
  return <main id="content" className="inner-page bureau-news-page">
    <section className="page-intro">
      <p className="section-label">Бюро Ирины Михейкиной</p>
      <h1>Новости</h1>
      <div className="bureau-news-empty"><p>Публикаций пока нет.</p></div>
    </section>
  </main>;
}
