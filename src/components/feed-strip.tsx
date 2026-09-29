import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useRef } from "react";
import { feedDemo, type FeedBrand, type FeedChannel } from "@/lib/feed";
import { useLang } from "@/lib/lang";
import { cn } from "@/lib/utils";

export function FeedStrip({
  brand,
  title,
}: {
  brand?: FeedBrand;
  title?: string;
}) {
  const { lang } = useLang();
  const rail = useRef<HTMLDivElement>(null);
  const items = brand ? feedDemo.filter((item) => item.brand === brand) : feedDemo;

  function move(dir: -1 | 1) {
    rail.current?.scrollBy({ left: dir * 284, behavior: "smooth" });
  }

  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-xs font-medium uppercase tracking-[0.2em]">
            {title ?? (lang === "ru" ? "Лента" : "Feed")}
          </h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="size-10 text-gold"
              aria-label={lang === "ru" ? "Назад" : "Previous"}
              onClick={() => move(-1)}
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              type="button"
              className="size-10 text-gold"
              aria-label={lang === "ru" ? "Дальше" : "Next"}
              onClick={() => move(1)}
            >
              <ChevronRight className="size-6" />
            </button>
          </div>
        </div>
        <div ref={rail} className="feed-rail -mx-5 snap-x overflow-x-auto px-5">
          <ul className="flex w-max gap-5">
            {items.map((item) => {
              const inner = (
                <>
                  <div
                    className={cn(
                      "relative aspect-square overflow-hidden bg-ink",
                      item.kind === "story" && "ring-2 ring-gold ring-offset-2 ring-offset-bg",
                    )}
                  >
                    <img src={item.image} alt="" className="size-full object-cover" />
                    {item.kind === "reel" || item.kind === "video" ? (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <Play className="size-10 text-white" fill="currentColor" />
                      </span>
                    ) : null}
                    {item.duration ? (
                      <span className="absolute right-3 bottom-3 text-xs text-white/90">{item.duration}</span>
                    ) : null}
                    <span className="absolute bottom-3 left-3 text-white">
                      <ChannelMark channel={item.channel} />
                    </span>
                  </div>
                  <p className="mt-3 text-base leading-snug">{item[lang].title}</p>
                </>
              );
              const local = item.href.startsWith("/");
              return (
                <li key={item.id} className="w-64 shrink-0 snap-start">
                  <a
                    href={item.href}
                    target={local ? undefined : "_blank"}
                    rel={local ? undefined : "noreferrer"}
                    className="group block"
                  >
                    {inner}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ChannelMark({ channel }: { channel: FeedChannel }) {
  const className = "size-5 drop-shadow";
  switch (channel) {
    case "ig":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label="Instagram">
          <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
        </svg>
      );
    case "tg":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label="Telegram">
          <path
            d="M21 5 3.4 12.2c-.6.2-.6.6 0 .8l4.4 1.4 1.7 5.3c.2.6.6.7 1 .3l2.4-2.3 4.6 3.4c.5.3 1 .1 1.1-.5L22 5.7c.2-.8-.4-1.3-1-1.1z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "yt":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label="YouTube">
          <rect x="2.5" y="6" width="19" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M10 9.5v5l5-2.5-5-2.5z" fill="currentColor" />
        </svg>
      );
    case "vk":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label="VK">
          <path
            d="M4 8h2.2c.1 3.2 1.5 4.8 2.6 5.5V8h2.1v3.4c1.1-.2 2.2-1.8 2.6-3.4H16c-.4 2.2-1.8 3.8-2.8 4.5 1 .6 2.6 2 3.3 3.5h-2.4c-.6-1.1-1.8-2.5-3.1-2.7V16H11c-3.4 0-5.4-2.3-7-8z"
            fill="currentColor"
          />
        </svg>
      );
    case "dzen":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label="Дзен">
          <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="2.4" fill="currentColor" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label="Сайт">
          <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M4 12h16M12 4c2.4 2.8 3.6 5.6 3.6 8S14.4 17.2 12 20c-2.4-2.8-3.6-5.6-3.6-8S9.6 6.8 12 4z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      );
  }
}