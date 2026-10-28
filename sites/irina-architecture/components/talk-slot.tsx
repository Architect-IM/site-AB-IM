export function TalkSlot({
  image,
  name,
  role,
  quote,
}: {
  image?: string;
  name: string;
  role: string;
  quote: string;
}) {
  return (
    <aside className="service-lead-aside service-lead-stack talk-slot">
      <figure>
        <div className="lead-video">
          {image ? <img src={image} alt="" /> : <div className="talk-still" />}
          <button type="button" className="lead-play" aria-disabled="true" aria-label="Видео ещё не снято">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6.8v10.4L18.2 12z" /></svg>
          </button>
        </div>
        <figcaption className="service-lead-sign">{name}<span>{role}</span></figcaption>
      </figure>
      <blockquote>{quote}</blockquote>
    </aside>
  );
}
