
import { sitePath } from "@/lib/site-path";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { PortfolioGrid } from "@/components/portfolio-grid";
export const metadata: Metadata = {title:"Портфолио", description:"Общее портфолио архитектора и бюро."};
export default function Portfolio(){const count=String(projects.length).padStart(2,"0");return <main id="content" className="inner-page"><section className="page-intro"><div className="page-overline"><p className="section-label">Общее портфолио</p><span className="mono">{count}</span></div><h1>Портфолио<span className="title-count">{count}</span></h1><div className="intro-bottom"><p>Заказчики и работы.</p><p>Одна лента для архитектора и бюро.</p></div></section><section className="portfolio-section" aria-label="Проекты"><PortfolioGrid/></section><section className="statement-strip"><p className="section-label">Общий принцип</p><h2>У каждого места —<br/>свой ответ.</h2><a className="text-link" href={sitePath("/bureau")}>Как работает бюро</a></section></main>}
