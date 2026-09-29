import { Link } from "@tanstack/react-router";
import { directions } from "@/lib/content";
import { useLang } from "@/lib/lang";

const shown = directions.filter((d) => d.slug !== "temples");

export function DirectionIndex() {
  const { lang } = useLang();
  const [vladimir, consulting, hospitality, houses] = shown;

  return (
    <section className="border-t border-line">
      <header className="border-y border-line">
        <div className="mx-auto flex max-w-6xl items-end justify-between gap-8 px-5 py-10 md:py-12">
          <h2 className="text-xs font-medium uppercase tracking-[0.22em]">
            {lang === "ru" ? "С чем можно прийти" : "What you can bring"}
          </h2>
          <p className="text-xs tracking-[0.22em] text-gold">01 — 04</p>
        </div>
      </header>

      {/* 01 — wide plate, type left */}
      <article className="mx-auto grid max-w-6xl items-end gap-8 px-5 py-12 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5 md:pb-4">
          <p className="text-xs tracking-[0.22em] text-gold">01</p>
          <h2 className="mt-4 text-3xl leading-tight md:text-5xl">{vladimir[lang].group}</h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">{vladimir[lang].lead}</p>
          <Link
            to="/napravleniya/$slug"
            params={{ slug: vladimir.slug }}
            className="mt-8 inline-block text-xs uppercase tracking-[0.16em] text-gold"
          >
            {lang === "ru" ? "Подробнее" : "More"} →
          </Link>
        </div>
        <Link
          to="/napravleniya/$slug"
          params={{ slug: vladimir.slug }}
          className="group relative block aspect-[4/3] overflow-hidden md:col-span-7 md:aspect-[16/10]"
        >
          <img
            src={vladimir.image}
            alt=""
            className="size-full object-cover transition duration-700 group-hover:scale-[1.03]"
          />
        </Link>
      </article>

      {/* 02 — 50/50, same as 04 */}
      <article className="mx-auto grid max-w-6xl items-stretch gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <Link
          to="/napravleniya/$slug"
          params={{ slug: consulting.slug }}
          className="group relative aspect-[3/4] overflow-hidden md:min-h-[560px] md:aspect-auto"
        >
          <img
            src="/images/bureau.jpg"
            alt=""
            className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-[1.03]"
          />
        </Link>
        <div className="flex flex-col justify-end md:py-4">
          <p className="text-xs tracking-[0.22em] text-gold">02</p>
          <h2 className="mt-4 text-3xl leading-tight md:text-5xl">{consulting[lang].group}</h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">{consulting[lang].lead}</p>
          <Link
            to="/napravleniya/$slug"
            params={{ slug: consulting.slug }}
            className="mt-10 text-xs uppercase tracking-[0.16em] text-gold"
          >
            {lang === "ru" ? "Подробнее" : "More"} →
          </Link>
        </div>
      </article>

      {/* 03 — cinematic, text on the plate, air around */}
      <article className="py-8 md:py-16">
        <Link
          to="/napravleniya/$slug"
          params={{ slug: hospitality.slug }}
          className="group relative block overflow-hidden"
        >
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[72dvh]">
            <video
              className="pointer-events-none absolute inset-0 size-full object-cover"
              src="/videos/hospitality.mp4"
              poster={hospitality.image}
              muted
              loop
              autoPlay
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10 md:bg-gradient-to-r md:from-ink/90 md:via-ink/50 md:to-transparent" />
            <div className="relative flex size-full flex-col justify-end px-5 py-10 text-white md:max-w-xl md:px-12 md:py-16">
              <p className="text-xs tracking-[0.22em] text-gold">03</p>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">{hospitality[lang].group}</h2>
              <p className="mt-5 text-sm leading-relaxed text-white/80 md:text-base">
                {hospitality[lang].lead}
              </p>
              <span className="mt-8 text-xs uppercase tracking-[0.16em] text-gold">
                {lang === "ru" ? "Подробнее" : "More"} →
              </span>
            </div>
          </div>
        </Link>
      </article>

      {/* 04 — 50/50, same as 02 */}
      <article className="mx-auto grid max-w-6xl items-stretch gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <Link
          to="/napravleniya/$slug"
          params={{ slug: houses.slug }}
          className="group relative aspect-square overflow-hidden md:min-h-[560px] md:aspect-auto"
        >
          <img
            src={houses.image}
            alt=""
            className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-[1.03]"
          />
        </Link>
        <div className="flex flex-col justify-end md:py-4">
          <p className="text-xs tracking-[0.22em] text-gold">04</p>
          <h2 className="mt-4 text-3xl leading-tight md:text-5xl">{houses[lang].group}</h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">{houses[lang].lead}</p>
          <Link
            to="/napravleniya/$slug"
            params={{ slug: houses.slug }}
            className="mt-10 text-xs uppercase tracking-[0.16em] text-gold"
          >
            {lang === "ru" ? "Подробнее" : "More"} →
          </Link>
        </div>
      </article>
    </section>
  );
}
