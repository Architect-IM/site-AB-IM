import { Link } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site-chrome";
import type { Product } from "@/lib/products";
import { childrenOf, productLabels } from "@/lib/products";
import { useLang } from "@/lib/lang";

export function GroupPage({
  bundle,
  directionSlug,
  directionLabel,
}: {
  bundle: Product;
  directionSlug: string;
  directionLabel: string;
}) {
  const { lang } = useLang();
  const labels = productLabels[lang];
  const copy = bundle[lang];
  const children = childrenOf("irina", bundle.slug);

  return (
    <SiteChrome site="irina">
      <div className="border-b border-line px-5 py-4">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/napravleniya/$slug"
            params={{ slug: directionSlug }}
            className="text-xs uppercase tracking-[0.16em] text-gold"
          >
            ← {directionLabel}
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="relative aspect-square md:min-h-[70dvh] md:aspect-auto">
          <img src={bundle.image} alt="" className="absolute inset-0 size-full object-cover" />
        </div>
        <div className="flex flex-col justify-end bg-paper px-5 py-12 md:px-12">
          <p className="text-sm text-muted">
            <Link to="/napravleniya/$slug" params={{ slug: directionSlug }}>
              {directionLabel}
            </Link>
          </p>
          <h1 className="mt-6 text-4xl leading-tight">{copy.title}</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed">{copy.essence}</p>
        </div>
      </div>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-xs uppercase tracking-[0.18em] text-muted">{copy.who}</h2>
          <p className="mt-4 text-base leading-relaxed">{copy.how}</p>
          <p className="mt-4 text-base leading-relaxed text-muted">{copy.why}</p>
        </div>
        <div className="aspect-square overflow-hidden">
          <img src="/images/house.jpg" alt="" className="size-full object-cover" />
        </div>
      </section>

      <section className="border-t border-line bg-bg">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-xs uppercase tracking-[0.18em] text-muted">{labels.services}</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {children.map((p) => (
              <Link
                key={p.slug}
                to="/napravleniya/$slug/$product"
                params={{ slug: directionSlug, product: p.slug }}
                className="group"
              >
                <div className="aspect-square overflow-hidden">
                  <img src={p.image} alt="" className="size-full object-cover" />
                </div>
                <p className="mt-4 text-xl group-hover:text-gold">{p[lang].title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p[lang].essence}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
