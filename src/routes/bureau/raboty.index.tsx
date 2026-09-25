import { createFileRoute } from "@tanstack/react-router";
import { BureauSheet } from "@/components/bureau-sheet";
import { SiteChrome } from "@/components/site-chrome";
import { bureauCopy } from "@/lib/content";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/bureau/raboty/")({ component: BureauWorks });

function BureauWorks() {
  const { lang } = useLang();
  const t = bureauCopy[lang];

  return (
    <SiteChrome site="bureau">
      <header className="mx-auto max-w-6xl px-5 pt-16">
        <p className="text-xs uppercase tracking-[0.2em] text-gold">{t.brand}</p>
        <h1 className="mt-4 text-4xl md:text-6xl">{t.worksTitle}</h1>
      </header>
      <BureauSheet />
    </SiteChrome>
  );
}
