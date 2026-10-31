import { sitePath } from "@/lib/site-path";
import type { projects } from "@/lib/projects";
import { essays } from "@/lib/essays";
import { TalkSlot } from "@/components/talk-slot";

type Project = (typeof projects)[number];

const spoken: Record<string, string> = {
  "pokrovskiy-pryanik": "Покровский пряник начался с двух деревянных форм. Сейчас это место: пряник, шоколадная фабрика и люди, которые приезжают сюда каждую неделю. Наша работа — чтобы это место читалось ещё до вывески.",
  dobrograd: "Вторая очередь улицы Цветочной. Образ первой очереди оставили, а конструкцию собрали дешевле. Петля и перепад в пять метров не дали поставить типы как есть — пришлось собрать ритм из трёх домов.",
  saburovo: "Сабурово: сто тридцать четыре дома в соснах. Посадили каждый на свой участок. Воду собрали в резервуар и отдали насосом, двадцать литров в секунду. Четыре года вместе со стройкой.",
  gostec: "Гостец — небольшая территория в лесу, у поймы Шередари. Вопрос был не в картинке, а в том, что удержит человека на три дня. Ресторан здесь нужен и своим, и тем, кто иначе проезжает Покров мимо.",
  "zhar-ptitsa": "На Новой Риге модуль «Жар-Птицы» уже стоит и сдаётся. На Истре нужен ещё один комплекс, на четыре блока. Архитектуру сделали с нуля, а самым сложным оказалась вода и тепло.",
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
