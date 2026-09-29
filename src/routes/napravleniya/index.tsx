import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site-chrome";
import { directions, irina } from "@/lib/content";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/napravleniya/")({ component: Directions });

function Directions() {
  const { lang } = useLang();
  const t = irina[lang];

  return (
    <SiteChrome site="irina">
      <main className="mx-auto max-w-6xl px-5 py-16">
        <h1 className="text-4xl">{t.directionsTitle}</h1>
        <p className="mt-4 max-w-2xl text-muted">
          {lang === "ru"
            ? "Каталог архитектора. Стадии проектирования — в бюро."
            : "The architect’s catalogue. Design stages live in the bureau."}
        </p>
        <div className="mt-12 space-y-16">
          {directions.map((d) => (
            <Link
              key={d.slug}
              to="/napravleniya/$slug"
              params={{ slug: d.slug }}
              className="block md:grid md:items-center md:gap-8 md:grid-cols-2"
            >
              <div className="aspect-square overflow-hidden md:aspect-video">
                <img src={d.image} alt="" className="size-full object-cover" />
              </div>
              <div>
                <h2 className="text-3xl">{d[lang].group}</h2>
                <p className="mt-2 text-lg">{d[lang].title}</p>
                <p className="mt-4 leading-relaxed text-muted">{d[lang].body}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </SiteChrome>
  );
}
