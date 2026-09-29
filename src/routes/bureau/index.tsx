import { createFileRoute } from "@tanstack/react-router";
import { BureauSheet } from "@/components/bureau-sheet";
import { CollagePlate } from "@/components/collage-plate";
import { FeedStrip } from "@/components/feed-strip";
import { SiteChrome } from "@/components/site-chrome";
import { bureauCopy } from "@/lib/content";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/bureau/")({ component: BureauHome });

function BureauHome() {
  const { lang } = useLang();
  const t = bureauCopy[lang];

  return (
    <SiteChrome site="bureau">
      <section className="bg-ink text-white">
        <CollagePlate
          src="/images/mansion.jpg"
          draw="/images/mansion-section-mep2.jpg"
          className="h-[calc(100dvh-3.75rem)] min-h-[560px]"
        />
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <p className="text-xs uppercase tracking-[0.22em] text-gold">{t.brandFull}</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-tight md:text-6xl">{t.hero}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75">{t.manifesto}</p>
        </div>
      </section>

      <BureauSheet />
      <FeedStrip brand="bureau" title={t.newsTitle} />
    </SiteChrome>
  );
}
