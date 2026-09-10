import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site-chrome";
import { directions, irina, projects } from "@/lib/content";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const { lang } = useLang();
  const t = irina[lang];
  const done = projects.filter((p) => p.status === "done").slice(0, 3);
  const work = projects.filter((p) => p.status === "work");

  return (
    <SiteChrome site="irina">
      <section className="bg-ink text-white">
        <div className="lg:grid lg:min-h-[88dvh] lg:grid-cols-2">
          <div className="relative aspect-portrait lg:aspect-auto lg:min-h-[88dvh]">
            <img
              src="/images/portrait.jpg"
              alt=""
              className="absolute inset-0 size-full object-cover object-[50%_12%]"
            />
          </div>
          <div className="relative aspect-portrait lg:aspect-auto lg:min-h-[88dvh]">
            <img src="/images/mansion.jpg" alt="" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 hidden bg-gradient-to-r from-ink/75 via-ink/35 to-transparent lg:block" />
            <div className="absolute bottom-12 left-10 hidden max-w-md lg:block">
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
        <div className="px-5 py-10 lg:hidden">
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

      <section>
        <div className="relative aspect-square md:hidden">
          <img src="/images/resort.jpg" alt="" className="absolute inset-0 size-full object-cover" />
        </div>
        <div className="bg-ink px-5 py-10 text-white md:hidden">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">
            {lang === "ru" ? "Живое гостеприимство" : "Living hospitality"}
          </p>
          <p className="mt-3 text-xl font-medium">
            {lang === "ru" ? "Туркомплекс как место, куда возвращаются" : "A resort people return to"}
          </p>
        </div>
        <div className="relative hidden min-h-[52dvh] md:block">
          <img src="/images/resort.jpg" alt="" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-ink/35" />
          <div className="relative mx-auto flex min-h-[52dvh] max-w-6xl items-end px-5 py-16">
            <div className="max-w-lg text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">
                {lang === "ru" ? "Живое гостеприимство" : "Living hospitality"}
              </p>
              <p className="mt-3 text-2xl font-medium md:text-3xl">
                {lang === "ru"
                  ? "Туркомплекс как место, куда возвращаются"
                  : "A resort people return to"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="max-w-3xl text-lg leading-relaxed text-fg md:text-xl">{t.manifestoLong}</p>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-px bg-line md:grid-cols-2">
            {directions.map((d) => (
              <Link key={d.slug} to="/napravleniya/$slug" params={{ slug: d.slug }} className="group bg-bg">
                <div className="aspect-square overflow-hidden md:aspect-video">
                  <img
                    src={d.image}
                    alt=""
                    className="size-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="px-5 py-6">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted">{d[lang].group}</p>
                  <p className="mt-2 text-lg">{d[lang].title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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

      {work.length ? (
        <section className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em]">{t.inWorkTitle}</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {work.map((p) => (
              <Link key={p.slug} to="/portfolio/$slug" params={{ slug: p.slug }} className="group">
                <div className="aspect-square overflow-hidden md:aspect-video">
                  <img src={p.image} alt="" className="size-full object-cover" />
                </div>
                <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-gold">{t.inWorkTitle}</p>
                <p className="mt-1 text-xl">{p[lang].title}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="grid lg:grid-cols-2">
        <Link to="/bureau" className="relative block overflow-hidden lg:min-h-[420px]">
          <div className="relative aspect-square lg:absolute lg:inset-0 lg:aspect-auto">
            <img src="/images/bureau.jpg" alt="" className="absolute inset-0 size-full object-cover" />
          </div>
          <div className="relative bg-ink p-8 text-white lg:flex lg:min-h-[420px] lg:flex-col lg:justify-end lg:bg-ink/55 md:p-12">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">{t.bureauWidget.kicker}</p>
            <h2 className="mt-3 max-w-md text-2xl md:text-3xl">{t.bureauWidget.title}</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/75">{t.bureauWidget.body}</p>
            <span className="mt-6 text-xs uppercase tracking-[0.16em]">{t.bureauWidget.cta} →</span>
          </div>
        </Link>
        <Link to="/lab" className="relative block overflow-hidden bg-paper lg:min-h-[420px]">
          <div className="relative aspect-square lg:absolute lg:inset-0 lg:aspect-auto">
            <img src="/images/lab.jpg" alt="" className="absolute inset-0 size-full object-cover" />
          </div>
          <div className="relative p-8 lg:flex lg:min-h-[420px] lg:flex-col lg:justify-end lg:bg-bg/55 md:p-12">
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
