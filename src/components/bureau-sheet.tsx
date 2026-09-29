import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { bureauCopy, bureauExpertises } from "@/lib/content";
import { findProduct } from "@/lib/products";
import { useLang } from "@/lib/lang";

export function BureauSheet() {
  const { lang } = useLang();
  const t = bureauCopy[lang];
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="raboty" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="mb-10 flex items-baseline justify-between gap-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em]">{t.worksTitle}</p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted">01 — 04</p>
        </div>
        <div className="grid border border-line md:grid-cols-2">
          {bureauExpertises.map((item, i) => (
            <article
              key={item.slug}
              className="flex flex-col border-t border-line px-5 py-8 first:border-t-0 md:border-r md:border-t-0 md:px-8 md:py-10 md:[&:nth-child(2n)]:border-r-0 md:[&:nth-child(n+3)]:border-t"
            >
              <Link to="/bureau/raboty/$slug" params={{ slug: item.slug }} className="group block">
                <p className="font-tech text-[11px] tracking-[0.35em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <h2 className="max-w-[14ch] text-[1.65rem] font-medium uppercase leading-[1.05] tracking-[0.06em] group-hover:text-gold md:text-[1.85rem]">
                    {item[lang].title}
                  </h2>
                  <p className="w-[10.5rem] shrink-0 pt-1 text-right text-[11px] leading-snug text-muted md:w-[12.5rem] md:text-[12px]">
                    {item[lang].lead}
                  </p>
                </div>
              </Link>
              <ul className="mt-8 flex-1">
                {item.products.map((slug) => {
                  const product = findProduct("bureau", slug);
                  if (!product) return null;
                  const shown = open === slug;
                  return (
                    <li key={slug} className="border-t border-line">
                      <button
                        type="button"
                        aria-expanded={shown}
                        onClick={() => setOpen(shown ? null : slug)}
                        className="flex w-full items-baseline justify-between gap-4 py-3 text-left text-sm leading-snug hover:text-gold"
                      >
                        <span>{product[lang].title}</span>
                        <span className="shrink-0 text-[10px] tracking-[0.16em] text-gold">
                          {shown ? "–" : "→"}
                        </span>
                      </button>
                      {shown ? (
                        <div className="pb-4">
                          <p className="max-w-sm text-[13px] leading-relaxed text-muted">
                            {product[lang].essence}
                          </p>
                          <Link
                            to="/bureau/stadii/$slug"
                            params={{ slug }}
                            className="mt-3 inline-block text-[11px] uppercase tracking-[0.16em] text-gold"
                          >
                            {lang === "ru" ? "Подробнее" : "More"} →
                          </Link>
                        </div>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
