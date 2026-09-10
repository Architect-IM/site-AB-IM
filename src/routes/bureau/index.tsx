import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site-chrome";
import { bureauCopy, stages } from "@/lib/content";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/bureau/")({ component: BureauHome });

function BureauHome() {
  const { lang } = useLang();
  const t = bureauCopy[lang];

  return (
    <SiteChrome site="bureau">
      <section className="bg-ink text-white">
        <div className="relative aspect-square md:hidden">
          <img src="/images/bureau.jpg" alt="" className="absolute inset-0 size-full object-cover" />
        </div>
        <div className="px-5 py-10 md:hidden">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">{t.brandFull}</p>
          <h1 className="mt-5 text-4xl font-medium leading-tight">{t.hero}</h1>
          <p className="mt-6 text-base leading-relaxed text-white/75">{t.manifesto}</p>
        </div>
        <div className="relative hidden min-h-[72dvh] md:block">
          <img src="/images/bureau.jpg" alt="" className="absolute inset-0 size-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
          <div className="relative mx-auto flex min-h-[72dvh] max-w-6xl flex-col justify-end px-5 py-20">
            <p className="text-xs uppercase tracking-[0.22em] text-gold">{t.brandFull}</p>
            <h1 className="mt-5 max-w-3xl text-6xl font-medium leading-tight">{t.hero}</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75">{t.manifesto}</p>
          </div>
        </div>
      </section>

      <section className="bg-ink py-10 text-white">
        <div className="mx-auto max-w-6xl px-5">
          <p className="border-t border-gold/40 pt-8 text-sm tracking-wide text-gold">{t.guarantee}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em]">{t.stagesTitle}</h2>
          <Link to="/bureau/stadii" className="text-xs uppercase tracking-[0.14em] text-gold">
            {lang === "ru" ? "Все стадии" : "All stages"} →
          </Link>
        </div>
        <ol className="divide-y divide-line border-y border-line">
          {stages.map((s, i) => (
            <li key={s.slug} className="grid gap-4 py-8 md:grid-cols-[80px_1fr_2fr]">
              <span className="text-xs text-gold">0{i + 1}</span>
              <h3 className="text-xl">
                <Link to="/bureau/stadii" hash={s.slug} className="hover:text-gold">
                  {s[lang].title}
                </Link>
              </h3>
              <p className="text-sm leading-relaxed text-muted">{s[lang].body}</p>
            </li>
          ))}
        </ol>
      </section>
    </SiteChrome>
  );
}
