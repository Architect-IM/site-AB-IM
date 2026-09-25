import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site-chrome";
import { bureauCopy, stages } from "@/lib/content";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/bureau/stadii/")({ component: CyclePage });

function CyclePage() {
  const { lang } = useLang();
  const t = bureauCopy[lang];

  return (
    <SiteChrome site="bureau">
      <main className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-xs uppercase tracking-[0.2em] text-gold">{t.brand}</p>
        <h1 className="mt-4 text-4xl md:text-6xl">
          {lang === "ru" ? "Как ведём цикл" : "How the cycle runs"}
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          {lang === "ru"
            ? "Служебный ход тома. Состав работ — на главной, по четырём экспертизам."
            : "The working order of a set. The body of work sits on the home, in four expertises."}
        </p>
        <ol className="mt-16 divide-y divide-line border-y border-line">
          {stages.map((s, i) => (
            <li key={s.slug} id={s.slug} className="grid gap-4 py-10 md:grid-cols-[80px_1fr_2fr] md:items-baseline">
              <span className="font-tech text-[11px] tracking-[0.28em] text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="text-2xl">{s[lang].title}</h2>
              <p className="text-sm leading-relaxed text-muted">{s[lang].body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10">
          <Link to="/bureau" hash="raboty" className="text-xs uppercase tracking-[0.16em] text-gold">
            ← {t.worksTitle}
          </Link>
        </p>
      </main>
    </SiteChrome>
  );
}
