import { sitePath } from "@/lib/site-path";
import { projects } from "@/lib/projects";

export function ProductClients({ slug, slugs }: { slug?: string; slugs?: string[] }) {
  const ids = slugs ?? (slug ? [slug] : []);
  const shown = projects.filter((project) => ids.some((id) => (project.tags as readonly string[]).includes(id)));
  if (!shown.length) return null;
  return (
    <section className="product-clients" aria-label="Клиенты">
      <h2>Клиенты</h2>
      <div>
        {shown.map((project) => (
          <a href={sitePath(`/portfolio/${project.slug}`)} key={project.slug}>
            <img src={sitePath(`/assets/${project.image}.jpg`)} alt="" style={"imagePosition" in project && project.imagePosition ? { objectPosition: project.imagePosition } : undefined} />
            <h3>{project.name}</h3>
            <p>— {project.caption}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
