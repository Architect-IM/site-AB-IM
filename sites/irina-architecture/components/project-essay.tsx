import { sitePath } from "@/lib/site-path";
import type { projects } from "@/lib/projects";
import { essays } from "@/lib/essays";
import { PhotoRail } from "@/components/photo-rail";

type Project = (typeof projects)[number];

export function ProjectEssay({ project, next }: { project: Project; next: Project }) {
  const essay = essays[project.slug];
  if (!essay) return null;
  const src = (index: number) => sitePath(`/assets/portfolio/${project.slug}/${String(index + 1).padStart(2, "0")}.jpg`);
  const count = essay.alts.length;
  const rail = essay.alts.slice(2, Math.max(count - 1, 2)).map((alt, index) => ({ src: src(index + 2), alt }));

  return (
    <main id="content" className="inner-page pp">
      <section className="pp-hero">
        <img src={src(0)} alt={essay.alts[0] ?? project.name} />
        <div className="pp-hero-copy">
          <p className="section-label">{essay.label}</p>
          <h1>{project.name}</h1>
          <p className="pp-hero-quote">— {essay.quote}</p>
        </div>
      </section>

      <section className="pp-open">
        <p className="pp-kicker">{project.place}</p>
        <h2>{essay.openTitle}</h2>
        <div className="pp-open-grid">
          <p>{essay.open[0]}</p>
          <p>{essay.open[1]}</p>
        </div>
      </section>

      {count > 1 ? (
        <section className="pp-portrait">
          <img src={src(1)} alt={essay.alts[1]} />
          <div>
            <p className="pp-kicker">Ирина Михейкина</p>
            <p>{essay.voice}</p>
          </div>
        </section>
      ) : (
        <section className="pp-portrait">
          <img src={src(0)} alt={essay.alts[0]} />
          <div>
            <p className="pp-kicker">Ирина Михейкина</p>
            <p>{essay.voice}</p>
          </div>
        </section>
      )}

      {rail.length > 1 ? <PhotoRail photos={rail} /> : null}

      {count > 2 ? (
        <section className="pp-path">
          <img src={src(count - 1)} alt={essay.alts[count - 1]} />
          <div>
            <p className="pp-kicker">{essay.pathKicker}</p>
            <h2>{essay.pathTitle}</h2>
            <p>{essay.path}</p>
          </div>
        </section>
      ) : null}

      <section className="pp-turn">
        <p className="pp-kicker">Дальше — наша работа</p>
        <h2>{essay.turn}</h2>
        <p className="pp-facts">{essay.facts}</p>
      </section>

      <section className="pp-work">
        <img src={src(Math.min(2, count - 1))} alt="" />
        <div>
          <p>{essay.work}</p>
          <p className="pp-line">— {essay.line}</p>
        </div>
      </section>

      <section className="pp-moves">
        {essay.moves.map(([title, text], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <a className="next-project" href={sitePath(`/portfolio/${next.slug}`)}>
        <span className="section-label">Следующий проект</span>
        <span>{next.name}</span>
        <img src={sitePath(`/assets/${next.image}.jpg`)} alt="" loading="lazy" />
      </a>
    </main>
  );
}
