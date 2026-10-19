
import { sitePath } from "@/lib/site-path";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { PortfolioGrid } from "@/components/portfolio-grid";
export const metadata: Metadata = {title:"Заказчики и работы", description:"Заказчики и работы архитектора и бюро."};
export default function Portfolio(){const count=String(projects.length).padStart(2,"0");return <main id="content" className="inner-page"><section className="page-intro"><h1>Заказчики и работы<span className="title-count">{count}</span></h1></section><section className="portfolio-section" aria-label="Проекты"><PortfolioGrid/></section><section className="statement-strip"><p className="section-label">Общий принцип</p><h2>У каждого места —<br/>свой ответ.</h2><a className="text-link" href={sitePath("/bureau")}>Как работает бюро</a></section></main>}
