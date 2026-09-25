import { Link } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site-chrome";
import type { Product } from "@/lib/products";
import { productLabels } from "@/lib/products";
import { useLang, type Site } from "@/lib/lang";

const rest = ["who", "gets", "how", "why", "next"] as const;

export function ProductPage({
  product,
  site,
  backTo,
  backLabel,
  siblings = [],
}: {
  product: Product;
  site: Site;
  backTo: string;
  backLabel: string;
  siblings?: { slug: string; title: string; href: string; image?: string }[];
}) {
  const { lang } = useLang();
  const copy = product[lang];
  const labels = productLabels[lang];
  const others = siblings.filter((s) => s.slug !== product.slug);

  return (
    <SiteChrome site={site}>
      <div className="border-b border-line px-5 py-4">
        <div className="mx-auto max-w-6xl">
          <a href={backTo} className="text-xs uppercase tracking-[0.16em] text-gold">
            ← {backLabel}
          </a>
        </div>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col justify-end px-5 py-12 md:px-12 md:min-h-[70dvh]">
          {product.demo ? (
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-gold">{labels.demo}</p>
          ) : null}
          <h1 className="text-4xl leading-tight">{copy.title}</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed md:text-lg">{copy.essence}</p>
        </div>
        <div className="relative aspect-square md:min-h-[70dvh] md:aspect-auto">
          <img src={product.image} alt="" className="absolute inset-0 size-full object-cover" />
        </div>
      </div>

      <main className="mx-auto max-w-3xl px-5 py-16">
        <div className="space-y-12">
          {rest.map((key) => (
            <section key={key}>
              <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                {labels[key]}
              </h2>
              <p className="mt-3 text-base leading-relaxed md:text-lg">{copy[key]}</p>
            </section>
          ))}
        </div>
        <div className="mt-14">
          <Link
            to="/kontakt"
            className="inline-block bg-ink px-6 py-3 text-xs uppercase tracking-[0.16em] text-white"
          >
            {labels.cta} →
          </Link>
        </div>
        <a href={backTo} className="mt-12 inline-block text-xs uppercase tracking-[0.16em] text-gold">
          ← {backLabel}
        </a>
      </main>

      {others.length ? (
        <section className="border-t border-line bg-paper">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="text-xs uppercase tracking-[0.18em] text-muted">{labels.others}</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {others.map((s) => (
                <a key={s.slug} href={s.href} className="group block">
                  {s.image ? (
                    <div className="aspect-square overflow-hidden">
                      <img src={s.image} alt="" className="size-full object-cover" />
                    </div>
                  ) : null}
                  <p className="mt-3 text-base group-hover:text-gold">{s.title}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </SiteChrome>
  );
}
