import { createFileRoute } from "@tanstack/react-router";
import { SiteChrome } from "@/components/site-chrome";
import { legal } from "@/lib/content";
import { useLang } from "@/lib/lang";

export const Route = createFileRoute("/legal")({ component: LegalPage });

function LegalPage() {
  const { lang } = useLang();
  return (
    <SiteChrome site="irina">
      <main className="mx-auto max-w-2xl px-5 py-16">
        <h1 className="text-4xl">{lang === "ru" ? "Реквизиты" : "Legal"}</h1>
        <dl className="mt-10 space-y-4 text-sm leading-relaxed">
          <div>
            <dt className="text-muted">{lang === "ru" ? "Юридическое лицо" : "Entity"}</dt>
            <dd>{legal.entity}</dd>
          </div>
          <div>
            <dt className="text-muted">ИНН / КПП</dt>
            <dd>
              {legal.inn} / 332801001
            </dd>
          </div>
          <div>
            <dt className="text-muted">ОГРН</dt>
            <dd>{legal.ogrn}</dd>
          </div>
          <div>
            <dt className="text-muted">{lang === "ru" ? "Адрес приёма" : "Studio"}</dt>
            <dd>{legal.address}</dd>
          </div>
          <div>
            <dt className="text-muted">E-mail</dt>
            <dd>
              <a href={`mailto:${legal.email}`}>{legal.email}</a>
            </dd>
          </div>
          <div>
            <dt className="text-muted">{lang === "ru" ? "Телефоны" : "Phone"}</dt>
            <dd>
              {legal.phone800}
              <br />
              {legal.phoneMobile}
            </dd>
          </div>
        </dl>
      </main>
    </SiteChrome>
  );
}
