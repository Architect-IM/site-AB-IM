"use client";

import { useState } from "react";
import { sitePath } from "@/lib/site-path";
import { productTags, projects, type ProductTagId } from "@/lib/projects";

const sides = [
  ["all", "Все"],
  ["architect", "Архитектор"],
  ["bureau", "Бюро"],
] as const;

function tagOf(id: string) {
  return productTags.find((tag) => tag.id === id);
}

export function PortfolioGrid() {
  const [side, setSide] = useState<(typeof sides)[number][0]>("all");
  const [tag, setTag] = useState<ProductTagId | "">("");

  const visible = projects.filter((project) => {
    const ids = project.tags;
    if (side !== "all" && !ids.some((id) => tagOf(id)?.side === side)) return false;
    if (tag && !ids.includes(tag)) return false;
    return true;
  });

  function count(next: (typeof sides)[number][0]) {
    return projects.filter((project) => next === "all" || project.tags.some((id) => tagOf(id)?.side === next)).length;
  }

  return (
    <div className="portfolio-tabs">
      <div className="filter-list" role="group" aria-label="Чьи работы">
        {sides.map(([id, label]) => (
          <button key={id} type="button" className="filter" aria-pressed={side === id} onClick={() => setSide(id)}>
            {label}<sup>{String(count(id)).padStart(2, "0")}</sup>
          </button>
        ))}
      </div>
      <div className="portfolio-tags" role="group" aria-label="Продукты">
        {productTags.map((item) => (
          <button key={item.id} type="button" aria-pressed={tag === item.id} onClick={() => setTag(tag === item.id ? "" : item.id)}>
            {item.label}
          </button>
        ))}
      </div>
      {visible.length === 0 ? <p className="portfolio-empty">Таких работ пока нет.</p> : null}
      <div className="portfolio-grid">
        {visible.map((project, index) => (
          <article key={project.slug} className="work-card">
            <a href={sitePath(`/portfolio/${project.slug}`)}>
              <div className="work-image media-frame">
                <img src={sitePath(`/assets/${project.image}.jpg`)} alt={project.name} loading={index === 0 ? "eager" : "lazy"} style={"imagePosition" in project && project.imagePosition ? { objectPosition: project.imagePosition } : undefined} />
                {project.tags.length === 0 ? <span className="image-tag">{project.status} · {project.year}</span> : null}
                <span className="work-view">Смотреть</span>
              </div>
            </a>
            <div className="work-meta">
              <div>
                {project.tags.length === 0 ? <span className="project-kicker">{project.category} · {project.place}</span> : null}
                <h2><a href={sitePath(`/portfolio/${project.slug}`)}>{project.name}</a></h2>
                {project.tags.length ? (
                  <ul className="work-tags">
                    {project.tags.map((id) => {
                      const tag = tagOf(id);
                      return <li key={id}>{tag ? <a href={sitePath(tag.href)}>{tag.label}</a> : null}</li>;
                    })}
                  </ul>
                ) : null}
                {project.slug === "pokrovskiy-pryanik" ? <p className="work-quote">— Увидели не руины, а возможности.</p> : project.tags.length === 0 ? <p>{project.description}</p> : null}
              </div>
              <span className="work-number">{String(projects.indexOf(project) + 1).padStart(2, "0")}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
