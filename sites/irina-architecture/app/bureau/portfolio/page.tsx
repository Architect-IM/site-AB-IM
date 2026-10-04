
import { sitePath } from "@/lib/site-path";
import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Портфолио бюро",
  description: "Проекты архитектурного бюро Ирины Михейкиной. Архитектура, проектирование и реализация.",
};

export default function BureauPortfolio() {
  return <main id="content" className="inner-page bureau-portfolio-page">
    <section className="page-intro bureau-portfolio-intro">
      <div className="page-overline"><a className="mono" href={sitePath("/bureau")}>Бюро / Проекты</a><span className="mono">{String(projects.length).padStart(2, "0")} проекта</span></div>
      <h1>Портфолио бюро</h1>
      <div className="intro-bottom"><p>От задачи — к результату.</p><p>Архитектура и комплексная экспертиза.<br/>Работа команды над общей задачей.</p></div>
      <div className="bureau-portfolio-disciplines" aria-label="Подход бюро"><span>Архитектура</span><span>Проектирование</span><span>Реализация</span></div>
    </section>
    <section className="portfolio-section bureau-portfolio-list" aria-label="Проекты бюро"><PortfolioGrid bureau/></section>
    <section className="statement-strip"><p className="section-label">Следующий шаг</p><h2>Обсудим вашу задачу.</h2><a className="text-link" href={sitePath("/contacts")}>Обсудить проект</a></section>
  </main>;
}
