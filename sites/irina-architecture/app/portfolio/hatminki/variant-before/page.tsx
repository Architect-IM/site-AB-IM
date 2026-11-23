import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectEssay } from "@/components/project-essay";
import { hatminkiPreviousEssay } from "@/lib/hatminki-previous-essay";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Хатминки-Клаб — предыдущий вариант",
  description: "Предыдущий вариант страницы проекта Хатминки-Клаб для сравнения.",
  robots: { index: false, follow: false },
};

export default function HatminkiPreviousVariant() {
  const project = projects.find((item) => item.slug === "hatminki");
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <ProjectEssay project={project} next={next} essayOverride={hatminkiPreviousEssay} />;
}
