import { Link } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site-chrome";
import type { Product } from "@/lib/products";
import { productLabels } from "@/lib/products";
import { useLang, type Site } from "@/lib/lang";

const blocks = ["essence", "who", "gets", "how", "why", "next"] as const;

export function ProductPage({
  product,
  site,
  backTo,
  backLabel,
}: {
  product: Product;
  site: Site;
  backTo: string;
  backLabel: string;
}) {
  const { lang } = useLang();
  const copy = product[lang];
  const labels = productLabels[lang];

  return (
    <SiteChrome site={site}>
      <div className="aspect-portrait overflow-hidden md:h-[420px] md:aspect-auto">
        <img src={product.image} alt="" className="size-full object-cover" />
      </div>
      <main className="mx-auto max-w-3xl px-5 py-16">
        {product.demo ? (
          <p className="text-xs uppercase tracking-[0.18em] text-gold">{labels.demo}</p>
        ) : null}
        <h1 className="mt-3 text-4xl leading-tight">{copy.title}</h1>
        <div className="mt-12 space-y-12">
          {blocks.map((key) => (
            <section key={key}>
              <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                {labels[key]}
              </h2>
              <p className="mt-3 text-base leading-relaxed md:text-lg">{copy[key]}</p>
            </section>
          ))}
        </div>
        <div className="mt-14 flex flex-wrap gap-6">
          <Link
            to="/kontakt"
            className="bg-ink px-6 py-3 text-xs uppercase tracking-[0.16em] text-white"
          >
            {labels.cta} →
          </Link>
          <a href={backTo} className="py-3 text-xs uppercase tracking-[0.16em] text-gold">
            ← {backLabel}
          </a>
        </div>
      </main>
    </SiteChrome>
  );
}
