import { houses } from "@/lib/houses";
import { sitePath } from "@/lib/site-path";
import { HouseLink } from "./links";
import styles from "./houses.module.css";

const supervisionDetails = [
  { heading: "Для кого и когда", text: "Когда важно собрать задуманное, а не удобное. Особенно на доме с несколькими подрядчиками — там легко потерять и характер, и деньги." },
  { heading: "Что в результате?", text: "Слежение за скрытыми работами и параметрами. Согласованные изменения стоимости. Журнал, фотофиксация, выводы и отчёт." },
  { heading: "Как работаем", text: "Смотрят разные специалисты бюро, каждый свой контур. Подрядчиков контролируем широко: репутация и реальный опыт. Всех, кому есть дело до объекта, собираю в одном разговоре." },
  { heading: "Почему это важно", text: "Характер и замысел на стройке теряют тихо: узел, замена, спешка, компромисс. Надзор нужен, чтобы и замысел и затраты не разъехались." },
  { heading: "Формат и следующий шаг", text: "Зависит от этапа. Обычно до сдачи ключевых решений и ввода в эксплуатацию." },
];

export function ImplementationBlocks() {
  return <>
    <section className={styles.implementationWelcome} aria-labelledby="implementation-welcome-title">
      <div className={styles.welcomeCopy}>
        <h2 id="implementation-welcome-title">Заказчики, которые уже выбрали направление дома и не хотят остаться один на один со стройкой.</h2>
        <p>Подключаю бюро на нужной стадии. Держу прямой разговор между вами, проектом и теми, кто строит.</p>
        <p className={styles.welcomeNote}>Частный объект особенно раним к человеческому фактору на площадке. Комфорт сегодня и запас на завтра.</p>
      </div>
      <div className={styles.welcomeImage}><img src={sitePath(houses.image)} alt={houses.alt} loading="lazy" /></div>
    </section>

    <section className={styles.supervisionBlock} aria-labelledby="supervision-title">
      <div className={styles.supervisionIntro}>
        <div className={styles.supervisionCopy}>
          <h2 id="supervision-title">Авторский надзор частного дома</h2>
          <p>Присутствие бюро на реализации: скрытые работы, параметры проекта, узкие специалисты. Свожу стороны и веду бюджет, чтобы стройка прошла максимально близко к проекту и смете.</p>
        </div>
        <div className={styles.supervisionImage}><img src={sitePath(houses.image)} alt={houses.alt} loading="lazy" /></div>
      </div>
      <div className={styles.supervisionDetails}>
        {supervisionDetails.map((detail, index) => <div key={detail.heading} className={styles.supervisionDetail}>
          <h3 id={`supervision-detail-${index}`}>{detail.heading}</h3>
          <p>{detail.text}</p>
        </div>)}
        <HouseLink href={`/contacts?topic=${encodeURIComponent("Авторский надзор частного дома")}`}>Написать</HouseLink>
      </div>
    </section>
  </>;
}
