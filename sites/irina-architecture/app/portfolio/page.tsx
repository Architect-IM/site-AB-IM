
import { sitePath } from "@/lib/site-path";
import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/portfolio-grid";
export const metadata: Metadata = {title:"Портфолио", description:"Частные дома, туристические комплексы и храмовая архитектура. Избранные проекты Ирины Михейкиной."};
export default function Portfolio(){return <main id="content" className="inner-page"><section className="page-intro"><div className="page-overline"><p className="section-label">Архитектура / Избранное</p><span className="mono">01 — 04</span></div><h1>Портфолио<span className="title-count">04</span></h1><div className="intro-bottom"><p>Работы, которые живут.</p><p>От частного дома до места притяжения.<br/>Всегда — в контексте земли, людей и задачи.</p></div></section><section className="portfolio-section" aria-label="Проекты"><PortfolioGrid/></section><section className="statement-strip"><p className="section-label">Общий принцип</p><h2>У каждого места —<br/>свой ответ.</h2><a className="text-link" href={sitePath("/bureau")}>Как работает бюро</a></section></main>}
