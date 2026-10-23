import { sitePath } from "@/lib/site-path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClientProject } from "@/components/client-project";
import { SaburovoProject } from "@/components/saburovo-project";
import { ProjectEssay } from "@/components/project-essay";
import { projects } from "@/lib/projects";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project?.name ?? "Проект не найден", description: project?.description };
}

export default async function Project({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  if (project.slug === "pokrovskiy-pryanik") return <ClientProject project={project} next={next} />;
  if (project.slug === "saburovo") return <SaburovoProject project={project} next={next} />;
  return <ProjectEssay project={project} next={next} />;
}

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
