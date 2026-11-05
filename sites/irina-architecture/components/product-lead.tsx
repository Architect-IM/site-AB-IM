import { sitePath } from "@/lib/site-path";
import { LeadVideo } from "@/components/lead-video";

export function ProductLead({
  title,
  kicker,
  quote,
  name = "Ирина Михейкина",
  role = "архитектор",
  image = "/assets/portrait.jpg",
  video,
  poster,
  featured = false,
}: {
  title?: string;
  kicker?: string;
  quote: string;
  name?: string;
  role?: string;
  image?: string;
  video?: string;
  poster?: string;
  featured?: boolean;
}) {
  return (
    <section className={`product-talk${featured ? " product-talk-key" : ""}${video ? " product-talk-film" : ""}`} aria-labelledby={title ? "product-lead-title" : undefined}>
      <div className="product-talk-copy">
        {kicker ? <p className="product-talk-kicker">{kicker}</p> : null}
        {title ? <h1 id="product-lead-title">{title}</h1> : null}
        <p>{quote}</p>
      </div>
      <figure>
        {video ? (
          <LeadVideo src={sitePath(video)} poster={sitePath(poster || image)} />
        ) : (
          <div className="lead-video">
            <img src={sitePath(image)} alt="" />
            <button type="button" className="lead-play" aria-disabled="true" aria-label="Видео ещё не снято">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6.8v10.4L18.2 12z" /></svg>
            </button>
          </div>
        )}
        <figcaption className="service-lead-sign">{name}<span>{role}</span></figcaption>
      </figure>
    </section>
  );
}
