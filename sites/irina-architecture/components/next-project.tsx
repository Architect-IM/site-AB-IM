import { sitePath } from "@/lib/site-path";
import type { projects } from "@/lib/projects";

type Project = (typeof projects)[number];

export function NextProject({ next }: { next: Project }) {
  return (
    <a className="next-project" href={sitePath(`/portfolio/${next.slug}`)}>
      <span className="section-label">Следующий проект</span>
      <span>
        {next.name}
        <small>— {next.caption}</small>
      </span>
      <img src={sitePath(`/assets/${next.image}.jpg`)} alt="" loading="lazy" />
    </a>
  );
}
