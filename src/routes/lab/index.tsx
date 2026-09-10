import { createFileRoute } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site-chrome";
import { labCopy } from "@/lib/content";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/lab/")({ component: LabHome });

function LabHome() {
  const { lang } = useLang();
  const t = labCopy[lang];

  return (
    <SiteChrome site="lab">
      <section className="relative aspect-square md:aspect-auto md:min-h-[60dvh]">
        <img src="/images/lab.jpg" alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-bg/40" />
      </section>
      <main className="mx-auto max-w-3xl px-5 py-20">
        <p className="font-serif text-sm italic text-muted">{t.brand}</p>
        <h1 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">{t.brandFull}</h1>
        <p className="mt-10 text-xl leading-relaxed">{t.mission}</p>
        <p className="mt-8 text-base leading-relaxed text-muted">{t.body}</p>
        <p className="mt-10 border-t border-line pt-8 text-xs uppercase tracking-[0.18em] text-gold">
          {t.zarya}
        </p>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {(lang === "ru"
            ? [
                ["Исследования", "История, культура, пространство, технология школы."],
                ["Код", "Границы, принципы, ценность и ограничения феномена."],
                ["Сообщество", "Совет открыт. Институт — горизонт, не статус."],
              ]
            : [
                ["Research", "History, culture, space, technology of the school."],
                ["Code", "Limits, principles, value and constraints of the phenomenon."],
                ["Community", "The council is open. An institute is a horizon, not a title."],
              ]
          ).map(([title, body]) => (
            <div key={title}>
              <h2 className="font-serif text-2xl">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
            </div>
          ))}
        </div>
      </main>
    </SiteChrome>
  );
}
