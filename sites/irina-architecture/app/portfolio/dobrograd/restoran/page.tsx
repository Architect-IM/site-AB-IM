import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DobrogradProject } from "@/components/dobrograd-project";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Ресторан · Доброград",
  description: "Реконструкция ресторана в Доброграде: веранда, стадия П и Р, открытие к свадьбе.",
};

export default function DobrogradRestaurant() {
  const project = projects.find((item) => item.slug === "dobrograd");
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <DobrogradProject project={project} next={next} part="restaurant" selected />;
}
