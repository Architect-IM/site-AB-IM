import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site-chrome";
import { bureauExpertises } from "@/lib/content";
import { findProduct } from "@/lib/products";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/bureau/raboty/$slug")({
  component: ExpertisePage,
});

function ExpertisePage() {
  const { slug } = Route.useParams();
  const { lang } = useLang();
  const item = bureauExpertises.find((e) => e.slug === slug);
  if (!item) throw notFound();
  const i = bureauExpertises.indexOf(item);

  return (
    <SiteChrome site="bureau">
      <div className="border-b border-line px-5 py-4">
        <div className="mx-auto max-w-6xl">
          <Link to="/bureau" hash="raboty" className="text-xs uppercase tracking-[0.16em] text-gold">
            ← {lang === "ru" ? "Все услуги" : "All services"}
          </Link>
        </div>
      </div>
      <header className="mx-auto max-w-6xl px-5 py-16">
        <p className="font-tech text-[11px] tracking-[0.35em] text-gold">{String(i + 1).padStart(2, "0")}</p>
        <h1 className="mt-4 max-w-xl text-4xl font-medium uppercase leading-[0.95] tracking-[0.04em] md:text-6xl">
          {item[lang].title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{item[lang].body}</p>
      </header>
      <section className="border-t border-line">
        <ol className="mx-auto max-w-6xl px-5">
          {item.products.map((productSlug, n) => {
            const product = findProduct("bureau", productSlug);
            if (!product) return null;
            return (
              <li key={productSlug} className="border-b border-line">
                <Link
                  to="/bureau/stadii/$slug"
                  params={{ slug: productSlug }}
                  className="group grid gap-4 py-8 md:grid-cols-[80px_1fr_2fr] md:items-baseline"
                >
                  <span className="font-tech text-[11px] tracking-[0.28em] text-gold">
                    {String(i + 1).padStart(2, "0")}.{n + 1}
                  </span>
                  <h2 className="text-2xl group-hover:text-gold">{product[lang].title}</h2>
                  <p className="text-sm leading-relaxed text-muted">{product[lang].essence}</p>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>
    </SiteChrome>
  );
}
