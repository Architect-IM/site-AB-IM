import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site-chrome";
import { bureauCopy, projects } from "@/lib/content";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/bureau/proekty/")({ component: BureauProjects });

function BureauProjects() {
  const { lang } = useLang();
  const t = bureauCopy[lang];

  return (
    <SiteChrome site="bureau">
      <main className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-xs uppercase tracking-[0.2em] text-gold">{t.brand}</p>
        <h1 className="mt-4 text-4xl md:text-6xl">{lang === "ru" ? "Портфолио" : "Portfolio"}</h1>
        <p className="mt-4 max-w-xl text-muted">
          {lang === "ru"
            ? "Угол бюро: состав, стадия, то, как объект доведён. Авторский комментарий — на сайте архитектора."
            : "The bureau’s angle: pack, stage, how the object was delivered. The author’s note lives on her site."}
        </p>
        <div className="mt-16 space-y-16">
          {projects.map((p, i) => (
            <article key={p.slug} className="grid items-stretch gap-8 md:grid-cols-2">
              <div className={`relative aspect-[4/3] overflow-hidden md:min-h-[360px] ${i % 2 ? "md:order-2" : ""}`}>
                <img src={p.image} alt="" className="absolute inset-0 size-full object-cover" />
              </div>
              <div className={`flex flex-col justify-end ${i % 2 ? "md:order-1" : ""}`}>
                <p className="text-xs uppercase tracking-[0.16em] text-gold">{p.tag[lang]}</p>
                <h2 className="mt-3 text-3xl">{p[lang].title}</h2>
                <p className="mt-3 text-muted">{p[lang].subtitle}</p>
                <p className="mt-5 max-w-md text-sm leading-relaxed">{p[lang].result}</p>
                <Link
                  to="/bureau/proekty/$slug"
                  params={{ slug: p.slug }}
                  className="mt-8 text-xs uppercase tracking-[0.16em] text-gold"
                >
                  {lang === "ru" ? "Объект" : "The object"} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </SiteChrome>
  );
}
