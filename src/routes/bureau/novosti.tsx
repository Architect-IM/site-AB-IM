import { createFileRoute } from "@tanstack/react-router";
import { FeedStrip } from "@/components/feed-strip";
import { SiteChrome } from "@/components/site-chrome";
import { bureauCopy } from "@/lib/content";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/bureau/novosti")({ component: BureauNews });

function BureauNews() {
  const { lang } = useLang();
  const t = bureauCopy[lang];

  return (
    <SiteChrome site="bureau">
      <header className="mx-auto max-w-6xl px-5 pt-16">
        <p className="text-xs uppercase tracking-[0.2em] text-gold">{t.brand}</p>
        <h1 className="mt-4 text-4xl md:text-6xl">{t.newsTitle}</h1>
        <p className="mt-4 max-w-xl text-muted">
          {lang === "ru"
            ? "Дзен бюро, канал бюро, ВК, YouTube и Telegram архитектора — где выходят новости бюро, — и анонсы с этого сайта."
            : "Dzen of the bureau, the bureau channel, VK, the architect’s YouTube and Telegram where bureau news runs, and notes from this site."}
        </p>
      </header>
      <FeedStrip brand="bureau" title={t.newsTitle} />
    </SiteChrome>
  );
}
