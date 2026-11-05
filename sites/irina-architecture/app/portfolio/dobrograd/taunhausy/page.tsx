import { notFound } from "next/navigation";
import { DobrogradProject } from "@/components/dobrograd-project";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Доброград — таунхаусы на улице Цветочной",
  description: "Таунхаусы второй очереди на улице Цветочной в Доброграде.",
};

export default function DobrogradTownhouses() {
  const project = projects.find((item) => item.slug === "dobrograd");
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <DobrogradProject project={project} next={next} selected />;
}
