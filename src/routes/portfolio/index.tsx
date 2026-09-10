import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteChrome } from "@/components/site-chrome";
import { irina, projects } from "@/lib/content";
import { useLang } from "@/lib/lang";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio/")({ component: Portfolio });

function Portfolio() {
  const { lang } = useLang();
  const t = irina[lang];
  const tags = ["all", ...new Set(projects.map((p) => p.tag[lang]))];
  const [tag, setTag] = useState("all");
  const list = useMemo(
    () => (tag === "all" ? projects : projects.filter((p) => p.tag[lang] === tag)),
    [tag, lang],
  );

  return (
    <SiteChrome site="irina">
      <main className="mx-auto max-w-6xl px-5 py-16">
        <h1 className="text-4xl">{t.portfolioTitle}</h1>
        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTag(item)}
              className={cn(
                "border border-line px-4 py-2 text-xs uppercase tracking-[0.14em]",
                tag === item ? "bg-ink text-white" : "bg-bg",
              )}
            >
              {item === "all" ? (lang === "ru" ? "Все" : "All") : item}
            </button>
          ))}
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {list.map((p) => (
            <Link key={p.slug} to="/portfolio/$slug" params={{ slug: p.slug }} className="group">
              <div className="aspect-square overflow-hidden md:aspect-video">
                <img
                  src={p.image}
                  alt=""
                  className="size-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-muted">
                {p.tag[lang]}
                {p.status === "work" ? ` · ${t.inWorkTitle}` : ""}
              </p>
              <p className="mt-1 text-2xl">{p[lang].title}</p>
              <p className="mt-1 text-sm text-muted">{p[lang].subtitle}</p>
            </Link>
          ))}
        </div>
      </main>
    </SiteChrome>
  );
}
