import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { bureauCopy, irina, labCopy, legal } from "@/lib/content";
import { useLang, type Site } from "@/lib/lang";
import { cn } from "@/lib/utils";

export function SiteChrome({
  site,
  children,
  overlay,
}: {
  site: Site;
  children: React.ReactNode;
  overlay?: boolean;
}) {
  return (
    <div data-site={site} className="min-h-dvh bg-bg text-fg">
      <Header site={site} overlay={overlay} />
      {children}
      <Footer site={site} />
    </div>
  );
}

function Header({ site, overlay }: { site: Site; overlay?: boolean }) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const copy = irina[lang];
  const bureau = bureauCopy[lang];
  const lab = labCopy[lang];

  const brand =
    site === "irina" ? copy.brand : site === "bureau" ? bureau.brandFull : lab.brandFull;
  const brandShort =
    site === "irina" ? (lang === "ru" ? "Ирина" : "Irina") : site === "bureau" ? (lang === "ru" ? "Бюро" : "Bureau") : lang === "ru" ? "Лаб" : "Lab";
  const brandTo = site === "irina" ? "/" : site === "bureau" ? "/bureau" : "/lab";
  const links =
    site === "irina" ? copy.nav : site === "bureau" ? bureau.nav : lab.nav;

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full",
        overlay
          ? "absolute inset-x-0 top-0 bg-ink/40 text-white"
          : site === "bureau"
            ? "bg-ink text-white"
            : site === "lab"
              ? "border-b border-line bg-paper text-fg"
              : "border-b border-line bg-bg text-fg",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link
          to={brandTo}
          className={cn(
            "text-left tracking-wide",
            site === "lab" ? "font-serif text-lg leading-tight" : "text-xs font-medium uppercase",
          )}
        >
          <span className="lg:hidden">{brandShort}</span>
          <span className="hidden lg:inline">{brand}</span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((item) => (
            <Link
              key={item.to + item.label}
              to={item.to}
              className="text-xs font-medium uppercase tracking-[0.14em] opacity-80 transition hover:opacity-100"
            >
              {item.label}
            </Link>
          ))}
          {site !== "irina" ? (
            <Link to="/" className="text-xs font-medium uppercase tracking-[0.14em] text-gold">
              {site === "bureau" ? bureau.back : lab.back}
            </Link>
          ) : null}
          <LangSwitch lang={lang} setLang={setLang} />
        </nav>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center lg:hidden"
          aria-label="Menu"
          onClick={() => setOpen(true)}
        >
          <Menu className="size-5" />
        </button>
      </div>
      {open ? (
        <div className="fixed inset-0 z-50 bg-ink text-white lg:hidden">
          <div className="flex items-center justify-between px-5 py-4">
            <span className="text-xs uppercase tracking-[0.14em]">{brand}</span>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center"
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              <X className="size-5" />
            </button>
          </div>
          <div className="flex flex-col gap-2 px-5 py-8">
            {links.map((item) => (
              <Link
                key={item.to + item.label}
                to={item.to}
                className="py-3 text-lg"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {site !== "irina" ? (
              <Link to="/" className="py-3 text-gold" onClick={() => setOpen(false)}>
                {site === "bureau" ? bureau.back : lab.back}
              </Link>
            ) : null}
            <div className="pt-6">
              <LangSwitch lang={lang} setLang={setLang} />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function LangSwitch({
  lang,
  setLang,
}: {
  lang: "ru" | "en";
  setLang: (l: "ru" | "en") => void;
}) {
  return (
    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em]">
      <button
        type="button"
        className={cn("opacity-50", lang === "ru" && "opacity-100")}
        onClick={() => setLang("ru")}
      >
        RU
      </button>
      <span className="text-gold">|</span>
      <button
        type="button"
        className={cn("opacity-50", lang === "en" && "opacity-100")}
        onClick={() => setLang("en")}
        data-lang="en"
      >
        EN
      </button>
    </div>
  );
}

function Footer({ site }: { site: Site }) {
  const { lang } = useLang();
  const copy = irina[lang];
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-gold">
            {site === "irina" ? copy.brand : site === "bureau" ? bureauCopy[lang].brand : labCopy[lang].brand}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            {site === "irina"
              ? copy.manifestoShort
              : site === "bureau"
                ? bureauCopy[lang].manifestoShort
                : labCopy[lang].mission}
          </p>
        </div>
        <div className="text-sm leading-relaxed text-white/70">
          <p>{legal.address}</p>
          <p className="mt-2">
            <a href={`tel:${legal.phone800.replace(/\s/g, "")}`}>{legal.phone800}</a>
          </p>
          <p>
            <a href={`tel:${legal.phoneMobile.replace(/\s/g, "")}`}>{legal.phoneMobile}</a>
          </p>
          <p className="mt-2">
            <a href={`mailto:${legal.email}`}>{legal.email}</a>
          </p>
        </div>
        <div className="text-sm leading-relaxed text-white/55">
          <p>{legal.entity}</p>
          <p>ИНН {legal.inn}</p>
          <p>ОГРН {legal.ogrn}</p>
          <p className="mt-4">
            <Link to="/legal" className="text-gold">
              {copy.legalPage} →
            </Link>
          </p>
          <p className="mt-8 text-xs tracking-wide text-white/40">{copy.footerNote}</p>
        </div>
      </div>
    </footer>
  );
}
