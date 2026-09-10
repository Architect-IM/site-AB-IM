import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site-chrome";
import { directions, irina } from "@/lib/content";
import { productsOf } from "@/lib/products";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/napravleniya/$slug")({
  component: DirectionPage,
});

function DirectionPage() {
  const { slug } = Route.useParams();
  const { lang } = useLang();
  const item = directions.find((d) => d.slug === slug);
  if (!item) throw notFound();
  const list = productsOf("irina", slug);
  const t = irina[lang];

  return (
    <SiteChrome site="irina">
      <div className="aspect-portrait overflow-hidden md:h-96 md:aspect-auto">
        <img src={item.image} alt="" className="size-full object-cover" />
      </div>
      <main className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xs uppercase tracking-[0.18em] text-gold">{item[lang].group}</p>
        <h1 className="mt-4 text-4xl">{item[lang].title}</h1>
        <p className="mt-6 text-lg leading-relaxed">{item[lang].body}</p>
        <ol className="mt-14 divide-y divide-line border-y border-line">
          {list.map((p) => (
            <li key={p.slug} className="py-6">
              <Link
                to="/napravleniya/$slug/$product"
                params={{ slug, product: p.slug }}
                className="group block"
              >
                <p className="text-xl group-hover:text-gold">{p[lang].title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p[lang].essence}</p>
              </Link>
            </li>
          ))}
        </ol>
        <Link to="/napravleniya" className="mt-12 inline-block text-xs uppercase tracking-[0.16em] text-gold">
          ← {t.directionsTitle}
        </Link>
      </main>
    </SiteChrome>
  );
}
