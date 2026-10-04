"use client";
import { sitePath } from "@/lib/site-path";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { projects } from "@/lib/projects";
const categories = ["Все", "Частный дом", "Гостеприимство", "Храм"];
export function PortfolioGrid({bureau=false}:{bureau?:boolean}){
const basePath=bureau ? "/bureau/portfolio" : "/portfolio";
return <Tabs defaultValue="Все" className={`portfolio-tabs${bureau ? " bureau-portfolio-tabs" : ""}`}><TabsList className="filter-list" aria-label="Категории проектов">{categories.map(category=><TabsTrigger key={category} value={category} className="filter">{category}<sup>{category === "Все" ? projects.length : projects.filter(p=>p.category===category).length.toString().padStart(2,"0")}</sup></TabsTrigger>)}</TabsList>{categories.map(category=><TabsContent key={category} value={category}><div className="portfolio-grid">{projects.filter(p=>category === "Все" || p.category === category).map((p,i)=><a href={sitePath(`${basePath}/${p.slug}`)} key={p.slug} className="work-card"><div className="work-image media-frame"><img src={sitePath(`/assets/${p.image}.jpg`)} alt={p.name} loading={i===0?"eager":"lazy"}/><span className="image-tag">{p.status} · {p.year}</span><span className="work-view">Смотреть проект</span></div><div className="work-meta"><div><span className="project-kicker">{p.category} · {p.place}</span><h2>{p.name}</h2><p>{p.description}</p></div><span className="work-number">0{projects.indexOf(p)+1}</span></div></a>)}</div></TabsContent>)}</Tabs>;
}
