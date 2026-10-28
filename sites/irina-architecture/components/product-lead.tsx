import { sitePath } from "@/lib/site-path";

export function ProductLead({ quote }: { quote: string }) {
  return (
    <section className="product-talk">
      <figure>
        <div className="lead-video">
          <img src={sitePath("/assets/portrait.jpg")} alt="" />
          <button type="button" className="lead-play" aria-disabled="true" aria-label="Видео ещё не снято">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6.8v10.4L18.2 12z" /></svg>
          </button>
        </div>
        <figcaption className="service-lead-sign">Ирина Михейкина<span>архитектор</span></figcaption>
      </figure>
      <div className="product-talk-copy"><p>{quote}</p></div>
    </section>
  );
}
