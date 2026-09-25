import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site-chrome";
import { bureauCopy, projects } from "@/lib/content";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/bureau/proekty/$slug")({
  component: BureauCase,
});

function BureauCase() {
  const { slug } = Route.useParams();
  const { lang } = useLang();
  const t = bureauCopy[lang];
  const project = projects.find((p) => p.slug === slug);
  if (!project) throw notFound();
  const c = project[lang];
  const status =
    project.status === "work"
      ? lang === "ru"
        ? "В работе"
        : "In progress"
      : lang === "ru"
        ? "Реализован"
        : "Complete";

  return (
    <SiteChrome site="bureau">
      <div className="border-b border-line px-5 py-4">
        <div className="mx-auto max-w-6xl">
          <Link to="/bureau/proekty" className="text-xs uppercase tracking-[0.16em] text-gold">
            ← {lang === "ru" ? "Портфолио" : "Portfolio"}
          </Link>
        </div>
      </div>
      <div className="relative min-h-[48dvh] overflow-hidden md:min-h-[70dvh]">
        <img src={project.image} alt="" className="absolute inset-0 size-full object-cover" />
      </div>
      <header className="mx-auto max-w-6xl px-5 py-12">
        <p className="text-xs uppercase tracking-[0.2em] text-gold">{project.tag[lang]}</p>
        <h1 className="mt-4 text-4xl md:text-6xl">{c.title}</h1>
        <p className="mt-4 max-w-xl text-lg text-muted">{c.subtitle}</p>
      </header>
      <section className="border-y border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-muted">{lang === "ru" ? "Статус" : "Status"}</p>
            <p className="mt-2">{status}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-muted">{lang === "ru" ? "Тип" : "Type"}</p>
            <p className="mt-2">{project.tag[lang]}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-muted">{lang === "ru" ? "Контур" : "Contour"}</p>
            <p className="mt-2">{t.brandFull}</p>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-xs uppercase tracking-[0.16em] text-muted">{lang === "ru" ? "Задача" : "Brief"}</h2>
          <p className="mt-3 text-base leading-relaxed">{c.task}</p>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-[0.16em] text-muted">{lang === "ru" ? "Как вели" : "How we ran it"}</h2>
          <p className="mt-3 text-base leading-relaxed">{c.solution}</p>
        </div>
      </section>
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-xs uppercase tracking-[0.16em] text-muted">{lang === "ru" ? "Результат" : "Result"}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed">{c.result}</p>
        </div>
      </section>
    </SiteChrome>
  );
}
