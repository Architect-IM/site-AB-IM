import { Link } from "@tanstack/react-router";
import type { Product } from "@/lib/products";
import { useLang } from "@/lib/lang";

type Props = {
  group: string;
  items: Product[];
};

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function ProductChapters({ group, items }: Props) {
  const { lang } = useLang();
  const more = lang === "ru" ? "Подробнее" : "More";

  return (
    <div>
      {items.map((p, i) => {
        const n = pad(i + 1);
        const title = p[lang].title;
        const essence = p[lang].essence;
        const plate = i % 4;

        if (plate === 1) {
          return (
            <article key={p.slug} className="py-10 md:py-16">
              <Link
                to="/napravleniya/$slug/$product"
                params={{ slug: group, product: p.slug }}
                className="group relative block overflow-hidden"
              >
                <div className="relative aspect-[4/5] md:min-h-[70dvh] md:aspect-auto">
                  <img
                    src={p.image}
                    alt=""
                    className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent md:bg-gradient-to-r md:from-ink/90 md:via-ink/45 md:to-transparent" />
                  <div className="relative flex size-full flex-col justify-end px-5 py-10 text-white md:max-w-xl md:px-12 md:py-16">
                    <p className="text-xs tracking-[0.22em] text-gold">{n}</p>
                    <h2 className="mt-4 text-3xl leading-tight group-hover:text-gold md:text-5xl">{title}</h2>
                    <p className="mt-5 text-sm leading-relaxed text-white/80 md:text-base">{essence}</p>
                    <span className="mt-8 text-xs uppercase tracking-[0.16em] text-gold">{more} →</span>
                  </div>
                </div>
              </Link>
            </article>
          );
        }

        if (plate === 3) {
          return (
            <article key={p.slug} className="py-10 md:py-16">
              <Link
                to="/napravleniya/$slug/$product"
                params={{ slug: group, product: p.slug }}
                className="group grid overflow-hidden md:grid-cols-2"
              >
                <div className="relative aspect-[4/5] md:min-h-[64dvh] md:aspect-auto">
                  <img
                    src={p.image}
                    alt=""
                    className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col justify-end bg-ink px-5 py-12 text-white md:px-12">
                  <p className="text-xs tracking-[0.22em] text-gold">{n}</p>
                  <h2 className="mt-4 text-3xl leading-tight group-hover:text-gold md:text-5xl">{title}</h2>
                  <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75">{essence}</p>
                  <span className="mt-10 text-xs uppercase tracking-[0.16em] text-gold">{more} →</span>
                </div>
              </Link>
            </article>
          );
        }

        const flip = plate === 2;

        return (
          <article
            key={p.slug}
            className="mx-auto grid max-w-6xl items-stretch gap-10 px-5 py-16 md:grid-cols-2 md:py-24"
          >
            <Link
              to="/napravleniya/$slug/$product"
              params={{ slug: group, product: p.slug }}
              className={
                flip
                  ? "group relative aspect-[4/5] overflow-hidden md:order-2 md:min-h-[520px] md:aspect-auto"
                  : "group relative aspect-[4/5] overflow-hidden md:min-h-[520px] md:aspect-auto"
              }
            >
              <img
                src={p.image}
                alt=""
                className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
            </Link>
            <div className={`flex flex-col justify-end ${flip ? "md:order-1" : ""}`}>
              <p className="text-xs tracking-[0.22em] text-gold">{n}</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">{title}</h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">{essence}</p>
              <Link
                to="/napravleniya/$slug/$product"
                params={{ slug: group, product: p.slug }}
                className="mt-10 text-xs uppercase tracking-[0.16em] text-gold"
              >
                {more} →
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
