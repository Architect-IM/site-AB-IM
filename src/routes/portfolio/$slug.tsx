import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Building2, Calendar, CircleDot, MapPin } from "lucide-react";
import { SiteChrome } from "@/components/site-chrome";
import { projects } from "@/lib/content";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/portfolio/$slug")({
  component: CasePage,
});

function CasePage() {
  const { slug } = Route.useParams();
  const { lang } = useLang();
  const project = projects.find((p) => p.slug === slug);
  if (!project) throw notFound();
  const c = project[lang];
  const status =
    project.status === "work"
      ? lang === "ru"
        ? "В работе"
        : "In progress"
      : lang === "ru"
        ? "Реализован"
        : "Complete";
  const facts = [
    { icon: Building2, label: lang === "ru" ? "Тип" : "Type", value: project.tag[lang] },
    { icon: CircleDot, label: lang === "ru" ? "Статус" : "Status", value: status },
    {
      icon: MapPin,
      label: lang === "ru" ? "Место" : "Place",
      value: lang === "ru" ? "Владимирский край" : "Vladimir land",
    },
    { icon: Calendar, label: lang === "ru" ? "Год" : "Year", value: "2024" },
  ];

  return (
    <SiteChrome site="irina">
      <section>
        <div className="relative aspect-portrait md:hidden">
          <img src={project.image} alt="" className="absolute inset-0 size-full object-cover" />
        </div>
        <div className="bg-ink px-5 py-10 text-white md:hidden">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">{project.tag[lang]}</p>
          <h1 className="mt-4 text-4xl leading-none">{c.title}</h1>
          <p className="mt-4 text-base text-white/80">{c.subtitle}</p>
        </div>
        <div className="relative hidden min-h-[72dvh] bg-ink text-white md:block">
          <img src={project.image} alt="" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/45 to-ink/10" />
          <div className="relative mx-auto flex min-h-[72dvh] max-w-6xl flex-col justify-end px-5 py-20">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">{project.tag[lang]}</p>
            <h1 className="mt-4 max-w-3xl text-6xl">{c.title}</h1>
            <p className="mt-4 max-w-xl text-lg text-white/80">{c.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            {lang === "ru" ? "Ключевые факты" : "Key facts"}
          </p>
          <ul className="mt-6 divide-y divide-line border-y border-line md:grid md:grid-cols-4 md:divide-x md:divide-y-0 md:border-0">
            {facts.map((f) => (
              <li key={f.label} className="flex items-start gap-3 py-4 md:block md:px-4 md:py-0">
                <f.icon className="mt-0.5 size-4 shrink-0 text-gold" />
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted">{f.label}</p>
                  <p className="mt-1 text-base">{f.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-3xl space-y-14 px-5 py-16 md:max-w-6xl md:grid md:grid-cols-2 md:gap-10 md:space-y-0">
        <div>
          <h2 className="text-xs uppercase tracking-[0.18em] text-muted">
            {lang === "ru" ? "Задача" : "Brief"}
          </h2>
          <p className="mt-3 text-base leading-relaxed md:text-lg">{c.task}</p>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-[0.18em] text-muted">
            {lang === "ru" ? "Решение" : "Solution"}
          </h2>
          <p className="mt-3 text-base leading-relaxed md:text-lg">{c.solution}</p>
          <div className="mt-6 aspect-square overflow-hidden">
            <img src={project.image} alt="" className="size-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:grid md:grid-cols-2 md:items-center md:gap-10">
          <img
            src="/images/portrait.jpg"
            alt=""
            className="aspect-square w-full object-cover object-[50%_18%] md:h-[520px] md:aspect-auto"
          />
          <div className="mt-8 md:mt-0">
            <p className="text-xs uppercase tracking-[0.18em] text-gold">
              {lang === "ru" ? "Взгляд Ирины" : "Irina’s view"}
            </p>
            <blockquote className="mt-6 text-xl leading-relaxed font-light md:text-2xl">{c.view}</blockquote>
            <p className="mt-8 font-script text-4xl text-gold">Irina Mikheykina</p>
            <p className="mt-2 text-sm text-muted">
              {lang === "ru" ? "Ирина Михейкина, архитектор" : "Irina Mikheykina, architect"}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <h2 className="text-xs uppercase tracking-[0.18em] text-muted">
          {lang === "ru" ? "Результат" : "Result"}
        </h2>
        <p className="mt-3 text-base leading-relaxed md:text-lg">{c.result}</p>
        <div className="mt-8 aspect-square overflow-hidden">
          <img src="/images/house.jpg" alt="" className="size-full object-cover" />
        </div>
        <div className="mt-12 grid gap-6">
          <div className="border border-line px-5 py-6">
            <p className="text-xs uppercase tracking-[0.16em] text-gold">
              {lang === "ru" ? "Для Ирины" : "For Irina"}
            </p>
            <p className="mt-3 text-base leading-relaxed">{c.shows}</p>
          </div>
          <div className="border border-line px-5 py-6">
            <p className="text-xs uppercase tracking-[0.16em] text-gold">
              {lang === "ru" ? "Для бюро" : "For the bureau"}
            </p>
            <p className="mt-3 text-base leading-relaxed">
              {lang === "ru"
                ? "Полный цикл: замысел, комплект, площадка — как система, не как набор разделов."
                : "Full cycle: idea, pack, site — a system, not a stack of folders."}
            </p>
          </div>
        </div>
        <Link to="/portfolio" className="mt-12 inline-block text-xs uppercase tracking-[0.16em] text-gold">
          ← {lang === "ru" ? "Все работы" : "All work"}
        </Link>
      </section>
    </SiteChrome>
  );
}
