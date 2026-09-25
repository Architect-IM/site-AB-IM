import { createFileRoute, Link } from "@tanstack/react-router";
import { DirectionIndex } from "@/components/direction-index";
import { FeedStrip } from "@/components/feed-strip";
import { SiteChrome } from "@/components/site-chrome";
import { irina, projects } from "@/lib/content";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { lang } = useLang();
  const t = irina[lang];
  const done = projects.filter((p) => p.status === "done").slice(0, 3);

  return (
    <SiteChrome site="irina">
      <section className="bg-ink text-white">
        <div className="md:grid md:min-h-[88dvh] md:grid-cols-2">
          <div className="relative aspect-portrait md:aspect-auto md:min-h-[88dvh]">
            <img
              src="/images/portrait.jpg"
              alt=""
              className="absolute inset-0 size-full object-cover object-[50%_12%]"
            />
          </div>
          <div className="relative aspect-portrait md:aspect-auto md:min-h-[88dvh]">
            <img src="/images/mansion.jpg" alt="" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 hidden bg-gradient-to-r from-ink/75 via-ink/35 to-transparent md:block" />
            <div className="absolute bottom-12 left-10 hidden max-w-md md:block">
              <p className="text-xs uppercase tracking-[0.22em] text-gold">{t.heroKicker}</p>
              <h1 className="mt-4 font-medium text-5xl leading-none">{t.brand}</h1>
              <p className="mt-5 text-base leading-relaxed text-white/80">{t.manifestoShort}</p>
              <Link
                to="/portfolio"
                className="mt-8 inline-flex items-center text-xs font-medium uppercase tracking-[0.16em] text-gold"
              >
                {t.homeCta} →
              </Link>
            </div>
          </div>
        </div>
        <div className="px-5 py-10 md:hidden">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">{t.heroKicker}</p>
          <h1 className="mt-4 text-4xl font-medium leading-none">{t.brand}</h1>
          <p className="mt-5 text-base leading-relaxed text-white/80">{t.manifestoShort}</p>
          <Link
            to="/portfolio"
            className="mt-8 inline-flex items-center text-xs font-medium uppercase tracking-[0.16em] text-gold"
          >
            {t.homeCta} →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="max-w-3xl text-lg leading-relaxed text-fg md:text-xl">{t.manifestoLong}</p>
      </section>

      <DirectionIndex />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-xs font-medium uppercase tracking-[0.2em]">{t.portfolioTitle}</h2>
            <Link to="/portfolio" className="text-xs uppercase tracking-[0.14em] text-gold">
              {t.viewAll} →
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {done.map((p) => (
              <Link key={p.slug} to="/portfolio/$slug" params={{ slug: p.slug }} className="group">
                <div className="aspect-square overflow-hidden md:aspect-video">
                  <img
                    src={p.image}
                    alt=""
                    className="size-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-muted">{p.tag[lang]}</p>
                <p className="mt-1 text-lg">{p[lang].title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FeedStrip />

      <section className="grid md:grid-cols-2">
        <Link to="/bureau" className="relative block overflow-hidden md:min-h-[420px]">
          <div className="relative aspect-square md:absolute md:inset-0 md:aspect-auto">
            <img src="/images/bureau.jpg" alt="" className="absolute inset-0 size-full object-cover" />
          </div>
          <div className="relative bg-ink p-8 text-white md:flex md:min-h-[420px] md:flex-col md:justify-end md:bg-ink/55 md:p-12">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">{t.bureauWidget.kicker}</p>
            <h2 className="mt-3 max-w-md text-2xl md:text-3xl">{t.bureauWidget.title}</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/75">{t.bureauWidget.body}</p>
            <span className="mt-6 text-xs uppercase tracking-[0.16em]">{t.bureauWidget.cta} →</span>
          </div>
        </Link>
        <Link to="/lab" className="relative block overflow-hidden bg-paper md:min-h-[420px]">
          <div className="relative aspect-square md:absolute md:inset-0 md:aspect-auto">
            <img src="/images/lab.jpg" alt="" className="absolute inset-0 size-full object-cover" />
          </div>
          <div className="relative p-8 md:flex md:min-h-[420px] md:flex-col md:justify-end md:bg-bg/55 md:p-12">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">{t.labWidget.kicker}</p>
            <h2 className="mt-3 max-w-md font-serif text-3xl">{t.labWidget.title}</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">{t.labWidget.body}</p>
            <span className="mt-6 text-xs uppercase tracking-[0.16em]">{t.labWidget.cta} →</span>
          </div>
        </Link>
      </section>
    </SiteChrome>
  );
}
