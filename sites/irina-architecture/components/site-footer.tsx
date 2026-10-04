"use client";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/brand-logo";

export function Footer() {
 const pathname=usePathname();
 const portfolioHref=pathname === "/bureau" || pathname.startsWith("/bureau/") ? "/bureau/portfolio" : "/portfolio";
 return <footer className="section contact" id="contacts-footer"><p className="section-label">Продолжим разговор</p><div className="contact-title"><h2>Давайте обсудим проект</h2><a className="contact-action" href="/contacts">Написать</a></div><div className="footer-grid"><p className="footer-name">Ирина Михейкина<br/><span>Архитектор · Владимир</span></p><div className="footer-col"><small>Связаться</small><a href="mailto:hello@im-architect.ru">hello@im-architect.ru</a><a href="tel:88006004167">8 800 600-41-67</a><a href="tel:+79157680460">+7 915 768-04-60</a></div><div className="footer-col"><small>Адрес</small><span>600000, г. Владимир</span><span>ул. Георгиевская, д. 3</span><span>помещ. 1</span></div></div><div className="footer-navigation"><a href="/" className="footer-logo" aria-label="Ирина Михейкина — на главную"><BrandLogo footer/></a><nav className="footer-nav" aria-label="Навигация в подвале"><a href="/">Архитектор</a><a href={portfolioHref}>Портфолио</a><a href="/bureau">Бюро</a><a href="/lab">Лаборатория</a><a href="/contacts">Контакты</a></nav></div><div className="footer-bottom"><p>ООО «Ваш Проект» · ИНН 3327121062 · ОГРН 1143327001916</p><p>© 2026 Ирина Михейкина</p></div></footer>;
}
