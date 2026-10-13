import { sitePath } from "@/lib/site-path";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ArchitectProject({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const href = sitePath(`/portfolio/${slug}`);
  return (
    <main id="content" className="inner-page">
      <script dangerouslySetInnerHTML={{ __html: `location.replace(${JSON.stringify(href)})` }} />
      <h1 className="visually-hidden">Портфолио</h1>
    </main>
  );
}
