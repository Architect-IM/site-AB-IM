import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteChrome } from "@/components/site-chrome";
import { legal } from "@/lib/content";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/kontakt")({ component: ContactPage });

function ContactPage() {
  const { lang } = useLang();
  const [sent, setSent] = useState(false);

  return (
    <SiteChrome site="irina">
      <main className="mx-auto grid max-w-6xl gap-16 px-5 py-16 md:grid-cols-2">
        <div>
          <h1 className="text-4xl">{lang === "ru" ? "Контакт" : "Contact"}</h1>
          <p className="mt-4 max-w-md text-muted">
            {lang === "ru"
              ? "Напишите. Форма на стенде демо — заявка никуда не уходит."
              : "Write. This prototype form does not send anywhere yet."}
          </p>
          <div className="mt-10 space-y-2 text-sm leading-relaxed">
            <p>{legal.address}</p>
            <p>{legal.phone800}</p>
            <p>{legal.phoneMobile}</p>
            <p>
              <a href={`mailto:${legal.email}`}>{legal.email}</a>
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
            <input
              required
              name="name"
              className="mt-2 w-full border border-line bg-bg px-3 py-3 text-base text-fg outline-none focus:border-gold"
            />
          </label>
          <label className="block text-xs uppercase tracking-[0.14em] text-muted">
            E-mail
            <input
              required
              type="email"
              name="email"
              className="mt-2 w-full border border-line bg-bg px-3 py-3 text-base text-fg outline-none focus:border-gold"
            />
          </label>
          <label className="block text-xs uppercase tracking-[0.14em] text-muted">
            {lang === "ru" ? "Сообщение" : "Message"}
            <textarea
              required
              name="message"
              rows={5}
              className="mt-2 w-full border border-line bg-bg px-3 py-3 text-base text-fg outline-none focus:border-gold"
            />
          </label>
          <button type="submit" className="bg-ink px-6 py-3 text-xs uppercase tracking-[0.16em] text-white">
            {lang === "ru" ? "Отправить" : "Send"}
          </button>
          {sent ? (
            <p className="text-sm text-gold">
              {lang === "ru" ? "Демо: заявка принята локально." : "Demo: received locally."}
            </p>
          ) : null}
        </form>
      </main>
    </SiteChrome>
  );
}
