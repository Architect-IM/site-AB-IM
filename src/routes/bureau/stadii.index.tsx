import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site-chrome";
import { bureauCopy, stages } from "@/lib/content";
import { productsOf } from "@/lib/products";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/bureau/stadii/")({ component: StagesPage });

function StagesPage() {
  const { lang } = useLang();
  const t = bureauCopy[lang];

  return (
    <SiteChrome site="bureau">
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs uppercase tracking-[0.2em] text-gold">{t.brand}</p>
        <h1 className="mt-4 text-4xl">{t.stagesTitle}</h1>
        <p className="mt-4 text-muted">
          {lang === "ru"
            ? "Каталог бюро. Направления архитектора — на главном сайте."
            : "The bureau’s catalogue. The architect’s directions live on the main site."}
        </p>
        <div className="mt-14 space-y-16">
          {stages.map((s) => {
            const list = productsOf("bureau", s.slug);
            return (
              <section key={s.slug} id={s.slug}>
                <h2 className="text-2xl">{s[lang].title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s[lang].body}</p>
                <ul className="mt-6 divide-y divide-line border-y border-line">
                  {list.map((p) => (
                    <li key={p.slug} className="py-5">
                      <Link
                        to="/bureau/stadii/$slug"
                        params={{ slug: p.slug }}
                        className="group block"
                      >
                        <p className="text-lg group-hover:text-gold">{p[lang].title}</p>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{p[lang].essence}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </main>
    </SiteChrome>
  );
}
