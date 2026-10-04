
import { sitePath } from "@/lib/site-path";
import type { Metadata } from "next";
import styles from "./consulting.module.css";

export const metadata: Metadata = {
  title: "Консалтинг",
  description: "Консультации Ирины Михейкиной: разбор задачи, контекстный аудит, адаптация проекта, согласования и экспертизы. Понятный следующий шаг до начала проектирования.",
};

const contact = (topic: string) => `/contacts?topic=${encodeURIComponent(topic)}`;

export default function Consulting() {
  return (
    <main id="content" className={`inner-page ${styles.page}`}>
      <nav className={styles.breadcrumbs} aria-label="Навигация по разделу">
        <a href={sitePath("/#directions")}>На главную</a>
        <span aria-current="page">Консалтинг</span>
      </nav>

      <section className={styles.hero} aria-labelledby="consulting-title">
        <div className={styles.heroImage}>
          <img src={sitePath("/assets/bureau.jpg")} alt="Архитектурная мастерская: чертежи и макеты на рабочих столах" fetchPriority="high" />
        </div>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Архитектор / Консультации</p>
          <h1 id="consulting-title">Консалтинг</h1>
          <p className={styles.subtitle}>Взгляд до проекта</p>
          <p className={styles.lead}>С нами можно просто консультироваться — не запуская сразу проектирование или стройку. Я сама предлагаю этот шаг: разобраться в деталях, понять, что нужно делать сейчас, и наметить путь.</p>
          <p className={styles.intro}>Рекомендации берутся из исследования и практики реализации. Смотрю задачу целиком: от смысла и архитектуры до экономики, согласований и того, как объект будет жить.</p>
          <a className={styles.link} href="#formats">С чем можно прийти</a>
        </div>
      </section>

      <div className={styles.divider} aria-hidden="true" />

      <section id="formats" className={styles.format} aria-labelledby="conversation-title">
        <div className={styles.row}>
          <figure className={styles.image}>
            <img src={sitePath("/assets/house.jpg")} alt="Частный дом и участок в природном окружении" loading="lazy" />
          </figure>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>01 / Первая консультация</p>
            <h2 id="conversation-title">Сначала —<br />понять задачу</h2>
            <p>Можно прийти с идеей, участком, готовыми материалами или вопросом. Разберём, что уже известно, чего не хватает и какие решения стоит принять до начала проектирования.</p>
            <p>Опираюсь на практику и местный контекст. Помогаю увидеть связи между архитектурой, экономикой и будущей жизнью объекта.</p>
            <div className={styles.outcome}>
              <h3>Результат</h3>
              <p>Приоритеты, перечень исходных данных и понятный следующий шаг. Глубину дальнейшей работы определим по вашей задаче.</p>
            </div>
            <a className={styles.link} href={sitePath(contact("Первая архитектурная консультация"))}>Обсудить консультацию</a>
          </div>
        </div>
      </section>

      <section className={styles.panorama} aria-labelledby="audit-title">
        <img className={styles.panoramaImage} src={sitePath("/assets/territory.jpg")} alt="Территория у реки: застройка, рельеф и ландшафт" loading="lazy" />
        <div className={styles.panoramaInner}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>02 / Контекстный аудит</p>
            <h2 id="audit-title">Увидеть риски.<br />Найти возможности.</h2>
            <p>Спокойная оценка проекта, участка или идеи. Разбираю контекст, ограничения и развилки: где могут возникнуть сложности, а где есть пространство для сильного решения.</p>
            <p>Объём аудита зависит от этапа и вашей задачи. Выводы помогают определить, что делать сейчас, а что можно отложить.</p>
            <div className={styles.outcome}>
              <h3>Результат</h3>
              <p>Картина рисков и возможностей, рекомендации по дальнейшим действиям. Затем можно перейти к адаптации, согласованиям или концепции.</p>
            </div>
            <a className={styles.link} href={sitePath(contact("Контекстный аудит проекта"))}>Обсудить аудит</a>
          </div>
        </div>
      </section>

      <section className={styles.format} aria-labelledby="adaptation-title">
        <div className={`${styles.row} ${styles.reversed}`}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>03 / Адаптация проекта</p>
            <h2 id="adaptation-title">Привести проект<br />к рабочему стандарту</h2>
            <p>Когда проект уже есть, но его нужно подготовить к защите, согласованию или строительству. Начинаю с аудита материалов, определяю недостающее и выстраиваю последовательность доработки.</p>
            <p>Задача — сохранить сильные решения и привести документацию к требованиям следующего этапа.</p>
            <div className={styles.outcome}>
              <h3>Результат</h3>
              <p>Необходимый комплект: альбом архитектурно-градостроительного облика, рабочая документация или другие материалы. Состав определяем после разбора проекта.</p>
            </div>
            <a className={styles.link} href={sitePath(contact("Адаптация существующего проекта"))}>Обсудить адаптацию</a>
          </div>
          <figure className={styles.image}>
            <img src={sitePath("/assets/mansion.jpg")} alt="Архитектурная визуализация дома: фасад, материалы и связь с участком" loading="lazy" />
          </figure>
        </div>
      </section>

      <section className={styles.split} aria-labelledby="approvals-title">
        <div className={styles.splitImage}>
          <img src={sitePath("/assets/lab.jpg")} alt="Архитектурные чертежи и образцы материалов" loading="lazy" />
        </div>
        <div className={`${styles.copy} ${styles.splitCopy}`}>
          <p className={styles.eyebrow}>04 / Сопровождение</p>
          <h2 id="approvals-title">Согласования<br />и экспертизы</h2>
          <p>Для проектов, которым предстоит градсовет, экспертиза или другие согласования. Особенно если уже есть замечания, сложная история или ограниченные сроки.</p>
          <p>Разбираю исходные данные и требования, оцениваю готовность материалов и предлагаю маршрут прохождения. При необходимости подключаем сопровождение процесса.</p>
          <div className={styles.outcome}>
            <h3>Результат</h3>
            <p>Понятная стратегия: какие материалы подготовить, что доработать и в какой последовательности действовать.</p>
          </div>
          <a className={styles.link} href={sitePath(contact("Консультация по согласованиям и экспертизам"))}>Разобрать вашу ситуацию</a>
        </div>
      </section>

      <nav className={styles.return} aria-label="Другие направления">
        <a className={styles.link} href={sitePath("/#directions")}>Вернуться к направлениям</a>
      </nav>
    </main>
  );
}
