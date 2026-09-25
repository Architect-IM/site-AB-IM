import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteChrome } from "@/components/site-chrome";
import { bureauCopy, legal } from "@/lib/content";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/bureau/kontakt")({ component: BureauContact });

function BureauContact() {
  const { lang } = useLang();
  const t = bureauCopy[lang];
  const [sent, setSent] = useState(false);

  return (
    <SiteChrome site="bureau">
      <main className="mx-auto grid max-w-6xl gap-16 px-5 py-16 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">{t.brandFull}</p>
          <h1 className="mt-4 text-4xl md:text-6xl">{lang === "ru" ? "Контакт" : "Contact"}</h1>
          <p className="mt-4 max-w-md text-muted">
            {lang === "ru"
              ? "Адрес приёма бюро. Форма на стенде демо — заявка никуда не уходит."
              : "The bureau’s reception. This prototype form does not send yet."}
          </p>
          <div className="mt-10 space-y-2 text-sm leading-relaxed">
            <p>{legal.address}</p>
            <p>{legal.phone800}</p>
            <p>{legal.phoneMobile}</p>
            <p>
              <a href={`mailto:${legal.email}`}>{legal.email}</a>
            </p>
            <p className="pt-6 text-muted">
              {legal.entity}
              <br />
              ИНН {legal.inn}
              <br />
              ОГРН {legal.ogrn}
            </p>
          </div>
        </div>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <label className="block text-xs uppercase tracking-[0.14em] text-muted">
            {lang === "ru" ? "Имя" : "Name"}
            <input className="mt-2 w-full border border-line bg-bg px-4 py-3 text-base text-fg" name="name" />
          </label>
          <label className="block text-xs uppercase tracking-[0.14em] text-muted">
            {lang === "ru" ? "Почта" : "Email"}
            <input className="mt-2 w-full border border-line bg-bg px-4 py-3 text-base text-fg" name="email" type="email" />
          </label>
          <label className="block text-xs uppercase tracking-[0.14em] text-muted">
            {lang === "ru" ? "Задача" : "Task"}
            <textarea className="mt-2 min-h-32 w-full border border-line bg-bg px-4 py-3 text-base text-fg" name="body" />
          </label>
          <button type="submit" className="bg-ink px-6 py-3 text-xs uppercase tracking-[0.16em] text-white">
            {lang === "ru" ? "Отправить" : "Send"}
          </button>
          {sent ? (
            <p className="text-sm text-muted">
              {lang === "ru" ? "Демо: сообщение не ушло." : "Demo: nothing was sent."}
            </p>
          ) : null}
        </form>
      </main>
    </SiteChrome>
  );
}
