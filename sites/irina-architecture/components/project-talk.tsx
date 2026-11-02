import { sitePath } from "@/lib/site-path";
import type { projects } from "@/lib/projects";
import { essays } from "@/lib/essays";
import { TalkSlot } from "@/components/talk-slot";

type Project = (typeof projects)[number];

const spoken: Record<string, string> = {
  "pokrovskiy-pryanik": "Покровский пряник начался с двух деревянных форм. Сейчас это место: пряник, шоколадная фабрика и люди, которые приезжают сюда каждую неделю. Наша работа — чтобы это место читалось ещё до вывески.",
  dobrograd: "Вторая очередь улицы Цветочной. Образ первой очереди оставили, а конструкцию собрали дешевле. Петля и перепад в пять метров не дали поставить типы как есть — пришлось собрать ритм из трёх домов.",
  saburovo: "Сабурово: сто тридцать четыре дома в соснах. Сложный, крупный и интересный проект. Нашей задачей было посадить уже спроектированные дома каждый на свой участок и своими решениями подчеркнуть общий замысел проекта. Как и в любом масштабном проекте, здесь за общей красотой скрывается миллион мелочей, но в итоге получился удобный и красивый посёлок с продуманной эстетикой, логистикой, инженерией и высоким качеством жизни.",
};

export function ProjectTalk({ project }: { project: Project }) {
  const essay = essays[project.slug];
  const quote = spoken[project.slug] ?? essay?.voice ?? project.caption;
  return (
    <section className="talk-band">
      <TalkSlot
        image={sitePath(`/assets/${project.image}.jpg`)}
        name="Ирина Михейкина"
        role="архитектор"
        quote={quote}
      />
    </section>
  );
}
