import { createFileRoute } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site-chrome";

export const Route = createFileRoute("/sketches")({ component: Sketches });

function Sketches() {
  return (
    <SiteChrome site="irina">
      <main className="mx-auto max-w-5xl space-y-16 px-5 py-12">
        <p className="text-xs uppercase tracking-[0.18em] text-gold">Эскиз · не продакшен</p>
        <h1 className="text-3xl">Лента на главной</h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Равная сетка. Сторис, рилы и посты в одной квадратной рамке. Справа — намёк на прокрутку.
        </p>
        <img src="/sketches/lenta-setka.jpg" alt="Эскиз ленты" className="w-full border border-line" />
        <h2 className="text-2xl">Типы карточек</h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Сторис с кольцом и таймером, рил с play, пост бюро, событие лаборатории.
        </p>
        <img
          src="/sketches/lenta-tipy-kartochek.jpg"
          alt="Типы карточек ленты"
          className="w-full border border-line"
        />
      </main>
    </SiteChrome>
  );
}
