import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ProductChapters } from "@/components/product-chapters";
import { SiteChrome } from "@/components/site-chrome";
import { directions, irina } from "@/lib/content";
import { childrenOf, topOffers } from "@/lib/products";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/napravleniya/$slug/")({
  component: DirectionPage,
});

function DirectionPage() {
  const { slug } = Route.useParams();
  const { lang } = useLang();
  const item = directions.find((d) => d.slug === slug);
  if (!item) throw notFound();
  const list = topOffers("irina", slug);
  const services = list.filter((p) => p.kind === "product");
  const bundles = list.filter((p) => p.kind === "bundle");
  const t = irina[lang];

  return (
    <SiteChrome site="irina">
      <div className="border-b border-line px-5 py-4">
        <div className="mx-auto max-w-6xl">
          <Link to="/" className="text-xs uppercase tracking-[0.16em] text-gold">
            ← {lang === "ru" ? "На главную" : "Home"}
          </Link>
        </div>
      </div>
      <div className="grid border-b border-line md:grid-cols-2">
        <div className="relative aspect-square md:min-h-[70dvh] md:aspect-auto">
          <img src={item.image} alt="" className="absolute inset-0 size-full object-cover" />
        </div>
        <div className="flex flex-col justify-end bg-paper px-5 py-12 md:px-12">
          <h1 className="text-4xl">{item[lang].group}</h1>
          <p className="mt-4 text-xl text-muted">{item[lang].title}</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed md:text-lg">{item[lang].body}</p>
        </div>
      </div>

      {(services.length || bundles.length) ? (
        <div className="flex justify-center bg-bg py-12">
          <div className="h-px w-24 bg-gold" />
        </div>
      ) : null}

      {services.length ? <ProductChapters group={slug} items={services} /> : null}

      {bundles.map((b, i) => {
        const nested = childrenOf("irina", b.slug);
        if (b[lang].title === item[lang].group) {
          return nested.length ? <ProductChapters key={b.slug} group={slug} items={nested} /> : null;
        }
        const flip = i % 2 === 1;
        return (
          <section key={b.slug} className="border-t border-line">
            <div className="grid md:grid-cols-2">
              <div
                className={
                  flip
                    ? "relative aspect-square md:order-2 md:min-h-[520px] md:aspect-auto"
                    : "relative aspect-square md:min-h-[520px] md:aspect-auto"
                }
              >
                <img src={b.image} alt="" className="absolute inset-0 size-full object-cover" />
              </div>
              <div className="flex flex-col justify-center bg-ink px-5 py-12 text-white md:px-12">
                <Link
                  to="/napravleniya/$slug/$product"
                  params={{ slug, product: b.slug }}
                  className="group"
                >
                  <h2 className="text-3xl group-hover:text-gold">{b[lang].title}</h2>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-white/80">{b[lang].essence}</p>
                </Link>
              </div>
            </div>
            <div className="border-t border-white/10 bg-bg px-5 py-16 md:px-12">
              <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
                {nested.map((p) => (
                  <Link
                    key={p.slug}
                    to="/napravleniya/$slug/$product"
                    params={{ slug, product: p.slug }}
                    className="group block"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img src={p.image} alt="" className="size-full object-cover" />
                    </div>
                    <p className="mt-4 text-lg group-hover:text-gold">{p[lang].title}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <div className="mx-auto max-w-6xl px-5 py-12">
        <Link to="/napravleniya" className="text-xs uppercase tracking-[0.16em] text-gold">
          ← {t.directionsTitle}
        </Link>
      </div>
    </SiteChrome>
  );
}
