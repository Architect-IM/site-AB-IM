import { Link } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site-chrome";
import { useLang } from "@/lib/lang";

const copy = {
  ru: {
    back: "Все услуги",
    kicker: "Экономика объекта  ·  03",
    title: "Финансово-экономическое моделирование",
    situation:
      "Часто к нам приходят с одним красивым прогнозом: заполняемость высокая, второй корпус тоже «окупится». Мы считаем объект как дело — несколькими сценариями. Если цифра не держит архитектуру, меняем архитектуру, а не подгоняем таблицу.",
    artifactKicker: "Фрагмент модели",
    artifactTitle: "Гостевой дом на берегу, 48 номеров",
    artifactNote: "Демо. Цифры условные, логика — как в рабочих моделях бюро.",
    cols: ["Базовый", "Осторожный", "Без второго корпуса"],
    rows: [
      ["Номера", "48", "48", "32"],
      ["Счёт с гостя, ₽", "18 400", "15 200", "17 100"],
      ["Заполняемость", "58%", "44%", "61%"],
      ["Прибыль, год 3", "42 млн", "11 млн", "38 млн"],
      ["Срок возврата", "7,5 лет", "не сходится", "6,2 года"],
    ],
    videoKicker: "Разбор",
    videoTitle: "Три сценария, не один прогноз",
    videoMeta: "0:30  ·  запись рабочей сессии бюро",
    videoCaption: "Как читаем допущения, где ломается «красивый» год и что из этого следует для объёма.",
    caseKicker: "Один ход",
    caseTitle: "Не строили второй объём",
    caseBody:
      "Заказчик держал береговой комплекс как «якорь территории»: два корпуса, ресторан, баня. Базовый сценарий ещё дышал. Осторожный — нет: заполняемость в межсезонье не несла второй объём, инженерия и берегоукрепление съедали запас. Сняли второй корпус на модели, до того как он появился на площадке. Первый объём пересобрали: меньше номеров, выше счёт с гостя, общий двор вместо второго дома.",
    caseFact: "Срок возврата 7,5 → 6,2. Второй объём остался в резерве земли, не в бетоне.",
    leaveKicker: "Что уносите",
    leave: [
      "Модель со сценариями, не один лист «как будет хорошо».",
      "Список допущений: что мы приняли и что вы можете оспорить.",
      "Точки, где архитектура начинает стоить дороже, чем зарабатывает.",
      "Решение: строить как задумано / урезать / не входить.",
    ],
    whoTitle: "Кому это нужно",
    who: "Собственник или инвестор до серьёзных вложений. Когда уже есть идея или эскиз и хочется увидеть, живёт ли объект как дело — не как картинка.",
    notTitle: "Кому нет",
    not: "Кто ищет обоснование уже принятого решения. Кто просит «сделать красивую доходность для банка» без права менять программу. Это не наша работа.",
    quote:
      "Нам было неприятно увидеть осторожный сценарий. И правильно: мы не вывели на берег второй корпус, который кормили бы из кармана.",
    quoteBy: "Управляющий партнёр, туристический комплекс, Владимирская область",
    cta: "Написать в бюро",
    ctaNote: "Коротко задачу и что уже есть: участок, эскиз, чужая модель. Ответим, имеет ли смысл считать.",
    passportKicker: "Паспорт услуги",
    passport: [
      {
        label: "Как работаем",
        text: "Собираем допущения. Считаем несколько сценариев. Не сглаживаем цифры ради комфорта.",
      },
      {
        label: "Почему это важно",
        text: "Красивая архитектура без рабочей экономики быстро перестаёт радовать.",
      },
      {
        label: "Формат и следующий шаг",
        text: "Модель с пояснениями. Затем уточнение концепции, параметров объекта или решение об инвестировании.",
      },
    ],
  },
  en: {
    back: "All services",
    kicker: "The object’s economy  ·  03",
    title: "Financial modelling",
    situation:
      "People often arrive with one pretty forecast: high occupancy, block B will “pay back too”. We count the object as a business — in several scenarios. If the number cannot hold the architecture, we change the architecture, not the spreadsheet.",
    artifactKicker: "A fragment of the model",
    artifactTitle: "A guest house on the river, 48 keys",
    artifactNote: "Demo. Figures are illustrative; the logic is from the bureau’s working models.",
    cols: ["Base", "Cautious", "Without block B"],
    rows: [
      ["Keys", "48", "48", "32"],
      ["Average check", "18 400 ₽", "15 200 ₽", "17 100 ₽"],
      ["Occupancy", "58%", "44%", "61%"],
      ["EBITDA, year 3", "42 m", "11 m", "38 m"],
      ["Payback", "7.5 yrs", "does not close", "6.2 yrs"],
    ],
    videoKicker: "A reading",
    videoTitle: "Three scenarios, not one forecast",
    videoMeta: "0:30  ·  a working session of the bureau",
    videoCaption: "How we read assumptions, where the “pretty” year breaks, and what that does to volume.",
    caseKicker: "One move",
    caseTitle: "We did not build the second volume",
    caseBody:
      "The client held a riverside complex as an “anchor”: two blocks, a restaurant, a bath. The base case still breathed. The cautious one did not: off-season occupancy could not carry the second volume; engineering and the bank ate the reserve. Block B came off the model before it reached the site. The first volume was rebuilt: fewer keys, a stronger check, a shared court instead of a second footprint.",
    caseFact: "Payback 7.5 → 6.2. The second volume stayed in the land reserve, not in concrete.",
    leaveKicker: "What you leave with",
    leave: [
      "A model with scenarios, not one sheet of “how it will go well”.",
      "Assumptions: what we took, and what you may contest.",
      "Points where architecture starts to cost more than it earns.",
      "A decision: build as drawn / cut / do not enter.",
    ],
    whoTitle: "Who this is for",
    who: "An owner or investor before serious spend. When an idea or a sketch exists and you want to see if the object lives as a business — not as a picture.",
    notTitle: "Who it is not for",
    not: "Anyone looking for a rationale of a decision already taken. Anyone who wants a pretty yield for a bank, with no right to change the programme. That is not our work.",
    quote:
      "The cautious scenario was unpleasant to see. And right: we did not put a second block on the bank that we would have fed from our own pocket.",
    quoteBy: "Managing partner, a tourist complex, Vladimir region",
    cta: "Write to the bureau",
    ctaNote: "A short brief and what you already hold: land, a sketch, someone else’s model. We will say if it is worth counting.",
    passportKicker: "Service passport",
    passport: [
      {
        label: "How we work",
        text: "We gather assumptions. We count several scenarios. We do not smooth the numbers for comfort.",
      },
      {
        label: "Why it matters",
        text: "Fine architecture without a working economy stops pleasing quickly.",
      },
      {
        label: "Format and next step",
        text: "A model with notes. Then a change of concept, of parameters, or a decision to invest.",
      },
    ],
  },
};

export function FinancePage() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <SiteChrome site="bureau">
      <div className="border-b border-line px-5 py-4">
        <div className="mx-auto max-w-6xl">
          <Link to="/bureau" hash="raboty" className="text-xs uppercase tracking-[0.16em] text-gold">
            ← {t.back}
          </Link>
        </div>
      </div>

      <header className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <p className="font-tech text-[11px] tracking-[0.28em] text-gold">{t.kicker}</p>
        <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.05] md:text-6xl">{t.title}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">{t.situation}</p>
      </header>

      <section className="border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-[11px] uppercase tracking-[0.2em] text-gold">{t.artifactKicker}</p>
          <h2 className="mt-3 text-2xl md:text-3xl">{t.artifactTitle}</h2>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-line">
                  <th className="py-3 pr-4 font-medium text-muted" />
                  {t.cols.map((c) => (
                    <th key={c} className="py-3 pr-4 font-medium tracking-wide">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.rows.map((row) => (
                  <tr key={row[0]} className="border-b border-line">
                    {row.map((cell, i) => (
                      <td
                        key={i}
                        className={
                          i === 0
                            ? "py-4 pr-4 text-muted"
                            : i === 2
                              ? "py-4 pr-4 text-gold"
                              : "py-4 pr-4"
                        }
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted">{t.artifactNote}</p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
          <div className="relative aspect-video overflow-hidden bg-ink">
            <video
              className="size-full object-cover"
              src="/videos/finance-session.mp4"
              poster="/images/resort.jpg"
              muted
              loop
              autoPlay
              playsInline
            />
            <span className="pointer-events-none absolute right-4 bottom-4 text-xs text-white/80">
              {t.videoMeta}
            </span>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-gold">{t.videoKicker}</p>
            <h2 className="mt-3 text-3xl">{t.videoTitle}</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">{t.videoCaption}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl items-stretch gap-10 px-5 py-16 md:grid-cols-2">
          <div className="relative min-h-[320px] overflow-hidden md:min-h-[480px]">
            <img src="/images/mansion.jpg" alt="" className="absolute inset-0 size-full object-cover" />
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-[11px] uppercase tracking-[0.2em] text-gold">{t.caseKicker}</p>
            <h2 className="mt-3 text-3xl">{t.caseTitle}</h2>
            <p className="mt-5 text-base leading-relaxed">{t.caseBody}</p>
            <p className="mt-6 border-l-2 border-gold pl-4 text-sm text-muted">{t.caseFact}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-[11px] uppercase tracking-[0.2em] text-gold">{t.leaveKicker}</p>
          <ol className="mt-8 divide-y divide-line border-y border-line">
            {t.leave.map((line, i) => (
              <li key={line} className="grid gap-4 py-5 md:grid-cols-[80px_1fr] md:items-baseline">
                <span className="font-tech text-[11px] tracking-[0.28em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg">{line}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-xs uppercase tracking-[0.18em] text-gold">{t.whoTitle}</h2>
            <p className="mt-4 text-base leading-relaxed">{t.who}</p>
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-[0.18em] text-muted">{t.notTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{t.not}</p>
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <blockquote className="max-w-3xl text-2xl font-light leading-snug md:text-3xl">{t.quote}</blockquote>
          <p className="mt-8 text-xs uppercase tracking-[0.16em] text-white/50">{t.quoteBy}</p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-[11px] uppercase tracking-[0.2em] text-gold">{t.passportKicker}</p>
          <dl className="mt-8 divide-y divide-line border-y border-line">
            {t.passport.map((row) => (
              <div key={row.label} className="grid gap-3 py-6 md:grid-cols-[220px_1fr] md:items-baseline">
                <dt className="text-xs uppercase tracking-[0.16em] text-muted">{row.label}</dt>
                <dd className="text-base leading-relaxed">{row.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-16">
          <Link
            to="/bureau/kontakt"
            className="inline-block bg-ink px-6 py-3 text-xs uppercase tracking-[0.16em] text-white"
          >
            {t.cta} →
          </Link>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">{t.ctaNote}</p>
        </div>
      </section>
    </SiteChrome>
  );
}
