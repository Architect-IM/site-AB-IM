"use client";
import { sitePath, sitePathname } from "@/lib/site-path";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/brand-logo";
const pages = [["/", "Архитектор"], ["/portfolio", "Портфолио"], ["/bureau", "Бюро"], ["/lab", "Лаборатория"], ["/contacts", "Контакты"]];
const bureauPages = [["/bureau#raboty", "Услуги"], ["/bureau/portfolio", "Портфолио"], ["/bureau/news", "Новости"], ["/contacts", "Контакт"]];
export function Header() {
  const pathname = sitePathname(usePathname());
  const isBureau = pathname === "/bureau" || pathname.startsWith("/bureau/");
  const [activeSection, setActiveSection] = useState("");
  const [open, setOpen] = useState(false);
  const menu = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!isBureau) return;
    const updateSection = () => setActiveSection(window.location.hash);
    updateSection();
    window.addEventListener("hashchange", updateSection);
    return () => window.removeEventListener("hashchange", updateSection);
  }, [isBureau, pathname]);
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (open) menu.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const key = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") { setOpen(false); toggle.current?.focus(); }
      if (e.key === "Tab") {
        const links = menu.current?.querySelectorAll<HTMLAnchorElement>("a");
        if (!links?.length) return;
        if (e.shiftKey && document.activeElement === links[0]) { e.preventDefault(); toggle.current?.focus(); }
        else if (e.shiftKey && document.activeElement === toggle.current) { e.preventDefault(); links[links.length-1].focus(); }
        else if (!e.shiftKey && document.activeElement === links[links.length-1]) { e.preventDefault(); toggle.current?.focus(); }
        else if (!e.shiftKey && document.activeElement === toggle.current) { e.preventDefault(); links[0].focus(); }
      }
    };
    document.addEventListener("keydown", key);
    return () => { document.body.classList.remove("menu-open"); document.removeEventListener("keydown", key); };
  }, [open]);
  const navigation = (isBureau ? bureauPages : pages).map(([href, name]) => {
    const hashIndex = href.indexOf("#");
    const isSection = hashIndex !== -1;
    const current = isSection
      ? pathname === href.slice(0, hashIndex) && href.slice(hashIndex) === activeSection
      : href === "/" ? pathname === "/" || pathname === "/architect" : pathname === href || pathname.startsWith(`${href}/`);
    return <a key={href} href={sitePath(href)} aria-current={current ? (isSection ? "location" : "page") : undefined} onClick={()=>setOpen(false)}>{name}</a>;
  });
  return <>
    <header className={`site-header${isBureau ? " site-header-bureau" : ""}`}>
      <div className="header-inner">
        <a className="brand" href={sitePath(isBureau ? "/bureau" : "/")} aria-label={isBureau ? "Бюро Ирины Михейкиной — в начало раздела" : "Ирина Михейкина — на главную"}>
          <BrandLogo/><span className={isBureau ? "brand-role" : "brand-role brand-role-name"}>{isBureau ? <>Архитектурное бюро<br/>Ирины Михейкиной</> : "Ирина Михейкина"}</span>
        </a>
        <nav className="desktop-nav" aria-label={isBureau ? "Навигация бюро" : "Основная навигация"}>
          {navigation}
          {isBureau && <a className="architect-return" href={sitePath("/")}>К архитектору</a>}
        </nav>
        <div className="header-tools">
            <div className="language language-switcher" aria-label="Язык сайта">
              <span lang="ru" aria-current="true">RU</span><span className="language-divider" aria-hidden="true">|</span>
              <button type="button" lang="en" disabled title="Английская версия пока недоступна" aria-label="English — английская версия пока недоступна">EN</button>
            </div>
          <a className="header-cta" href={sitePath("/contacts")}>Обсудить проект</a>
          <button ref={toggle} className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Закрыть меню" : isBureau ? "Открыть меню бюро" : "Открыть меню"} onClick={()=>setOpen(!open)}><span className="visually-hidden">Меню</span></button>
        </div>
      </div>
    </header>
    <div ref={menu} className={`mobile-menu${isBureau ? " mobile-menu-bureau" : ""}${open ? " is-open" : ""}`} id="mobile-menu" inert={!open}>
      <nav aria-label={isBureau ? "Мобильная навигация бюро" : "Мобильная навигация"}>{navigation}</nav>
      {isBureau && <div className="bureau-menu-return"><a href={sitePath("/")} onClick={()=>setOpen(false)}>К архитектору</a></div>}
      <div className="mobile-menu-meta"><a className="mobile-menu-cta" href={sitePath("/contacts")} onClick={()=>setOpen(false)}>Обсудить проект</a><a href="mailto:hello@im-architect.ru">hello@im-architect.ru</a><a href="tel:+79157680460">+7 915 768-04-60</a><span>Владимир · Россия</span></div>
    </div>
  </>;
}
export function SiteEffects() {
  const progress = useRef<HTMLDivElement>(null);
  const path = sitePathname(usePathname());
  useEffect(() => {
    const update = () => { const range = document.documentElement.scrollHeight - window.innerHeight; if(progress.current) progress.current.style.transform = `scaleX(${range > 0 ? window.scrollY/range : 0})`; };
    window.addEventListener("scroll", update, {passive:true}); update();
    return () => window.removeEventListener("scroll", update);
  }, [path]);
  return <div className="progress" ref={progress} aria-hidden="true"/>;
}
