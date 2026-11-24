import { sitePath } from "@/lib/site-path";
import type { projects } from "@/lib/projects";
import { essays, type Essay } from "@/lib/essays";
import { PhotoRail } from "@/components/photo-rail";
import { ProjectTalk } from "@/components/project-talk";
import { NextProject } from "@/components/next-project";

type Project = (typeof projects)[number];

export function ProjectEssay({ project, next, essayOverride }: { project: Project; next: Project; essayOverride?: Essay }) {
  const essay = essayOverride ?? essays[project.slug];
  if (!essay) return null;
  const src = (index: number) => sitePath(`/assets/portfolio/${project.slug}/${String(index + 1).padStart(2, "0")}.jpg`);
  const heroSrc = essay.heroImage ? sitePath(`/assets/${essay.heroImage}.jpg`) : src(0);
  const count = essay.alts.length;
  const rail = essay.gallery
    ? essay.gallery.map(({ path, alt, position }) => ({ src: sitePath(`/assets/${path}.jpg`), alt, position, keepVisible: true }))
    : essay.alts.slice(2, Math.max(count - 1, 2)).map((alt, index) => ({ src: src(index + 2), alt }));
  const intro = (
    <section className="pp-open">
      <p className="pp-kicker">{project.place}</p>
      <h2>{essay.openTitle}</h2>
      <div className="pp-open-grid">
        <p>{essay.open[0]}</p>
        <p>{essay.open[1]}</p>
      </div>
    </section>
  );

  return (
    <main id="content" className={project.slug === "novoe" ? "inner-page pp pp-nerl" : "inner-page pp"}>
      <section className="pp-hero">
        <img src={heroSrc} alt={essay.alts[0] ?? project.name} />
        <div className="pp-hero-copy">
          <p className="section-label">{essay.label}</p>
          <h1>{project.name}</h1>
          <p className="pp-hero-quote">— {essay.quote}</p>
        </div>
      </section>

      {essay.keyMoveLayout ? intro : null}

      <ProjectTalk project={project} quote={essayOverride?.voice} />

      {!essay.keyMoveLayout ? intro : null}

      {!essay.keyMoveLayout && (count > 1 ? (
        <section className="pp-portrait">
          <img
            src={essay.portraitImage ? sitePath(`/assets/${essay.portraitImage.path}.jpg`) : src(1)}
            alt={essay.alts[1]}
            style={essay.portraitImage ? { objectPosition: essay.portraitImage.position } : undefined}
          />
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
      ))}

      {essay.fullScreenImage ? (
        <figure className="pp-photo-screen">
          <img
            src={sitePath(`/assets/${essay.fullScreenImage.path}.jpg`)}
            alt={essay.fullScreenImage.alt}
            style={essay.fullScreenImage.position ? { objectPosition: essay.fullScreenImage.position } : undefined}
            loading="lazy"
          />
        </figure>
      ) : null}

      {rail.length > 1 ? <PhotoRail viewport={Boolean(essay.gallery)} photos={rail} /> : null}

      {count > 2 ? (
        <section className="pp-path">
          <img
            src={essay.pathImage ? sitePath(`/assets/${essay.pathImage.path}.jpg`) : src(count - 1)}
            alt={essay.pathImage?.alt ?? essay.alts[count - 1]}
            style={essay.pathImage?.position ? { objectPosition: essay.pathImage.position } : undefined}
          />
          <div>
            <p className="pp-kicker">{essay.pathKicker}</p>
            <h2>{essay.pathTitle}</h2>
            <p>{essay.path}</p>
          </div>
        </section>
      ) : null}

      {essay.pairedImages ? (
        <div className={essay.pairedImagesProtected ? "pp-pair pp-pair--protected" : "pp-pair"}>
          {essay.pairedImages.map((photo) => (
            <figure key={photo.path}>
              <img
                src={sitePath(`/assets/${photo.path}.jpg`)}
                alt={photo.alt}
                style={photo.position ? { objectPosition: photo.position } : undefined}
                loading="lazy"
              />
              <figcaption>{photo.alt}</figcaption>
            </figure>
          ))}
        </div>
      ) : null}

      <section className="pp-turn">
        <p className="pp-kicker">Дальше — наша работа</p>
        <h2>{essay.turn}</h2>
        <p className="pp-facts">{essay.facts}</p>
      </section>

      <section className="pp-work">
        <img
          src={essay.workImage ? sitePath(`/assets/${essay.workImage.path}.jpg`) : src(Math.min(2, count - 1))}
          alt={essay.workImage?.alt ?? ""}
          style={essay.workImage?.position ? { objectPosition: essay.workImage.position } : undefined}
        />
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

      {essay.afterMovesBlock ? (
        <>
          <section className="pp-path">
            <img
              src={sitePath(`/assets/${essay.afterMovesBlock.image.path}.jpg`)}
              alt={essay.afterMovesBlock.image.alt}
              style={essay.afterMovesBlock.image.position ? { objectPosition: essay.afterMovesBlock.image.position } : undefined}
              loading="lazy"
            />
            <div>
              <p className="pp-kicker">{essay.afterMovesBlock.kicker}</p>
              <h2>{essay.afterMovesBlock.title}</h2>
              <p>{essay.afterMovesBlock.text}</p>
            </div>
          </section>
          <div className="pp-pair">
            {essay.afterMovesBlock.pairedImages.map((photo) => (
              <figure key={photo.path}>
                <img
                  src={sitePath(`/assets/${photo.path}.jpg`)}
                  alt={photo.alt}
                  style={photo.position ? { objectPosition: photo.position } : undefined}
                  loading="lazy"
                />
                <figcaption>{photo.alt}</figcaption>
              </figure>
            ))}
          </div>
        </>
      ) : null}

      <NextProject next={next} />
    </main>
  );
}
