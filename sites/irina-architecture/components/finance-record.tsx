import { sitePath } from "@/lib/site-path";

const cols = ["Базовый", "Осторожный", "Без второго корпуса"];
const rows = [
  ["Номера", "48", "48", "32"],
  ["Счёт с гостя, ₽", "18 400", "15 200", "17 100"],
  ["Заполняемость", "58%", "44%", "61%"],
  ["Прибыль, год 3", "42 млн", "11 млн", "38 млн"],
  ["Срок возврата", "7,5 лет", "не сходится", "6,2 года"],
];

const leave = [
  "Модель со сценариями, не один лист «как будет хорошо».",
  "Список допущений: что мы приняли и что вы можете оспорить.",
  "Точки, где архитектура начинает стоить дороже, чем зарабатывает.",
  "Решение: строить как задумано, урезать или не входить.",
];

const passport = [
  ["Как работаем", "Собираем допущения. Считаем несколько сценариев. Не сглаживаем цифры ради комфорта."],
  ["Почему это важно", "Красивая архитектура без рабочей экономики быстро перестаёт радовать."],
  ["Формат и следующий шаг", "Модель с пояснениями. Затем уточнение концепции, параметров объекта или решение об инвестировании."],
];

export function FinanceRecord() {
  return (
    <div className="finance-record">
      <section className="finance-block">
        <p className="section-label">Фрагмент модели</p>
        <h2>Гостевой дом на берегу, 48 номеров</h2>
        <div className="finance-table-wrap">
          <table className="finance-table">
            <thead>
              <tr>
                <th />
                {cols.map((col, index) => <th key={col} className={index === 1 ? "is-cautious" : undefined}>{col}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, index) => <td key={index} className={index === 2 ? "is-cautious" : undefined}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="finance-note">Демо. Цифры условные, логика — как в рабочих моделях бюро.</p>
      </section>

      <section className="finance-block finance-split">
        <div className="finance-video">
          <video src={sitePath("/assets/finance-session.mp4")} poster={sitePath("/assets/resort.jpg")} muted loop autoPlay playsInline />
          <span>0:30 · запись рабочей сессии бюро</span>
        </div>
        <div>
          <p className="section-label">Разбор</p>
          <h2>Три сценария, не один прогноз</h2>
          <p>Как читаем допущения, где ломается «красивый» год и что из этого следует для объёма.</p>
        </div>
      </section>

      <section className="finance-block finance-split">
        <img src={sitePath("/assets/mansion.jpg")} alt="" />
        <div>
          <p className="section-label">Один ход</p>
          <h2>Не строили второй объём</h2>
          <p>Заказчик держал береговой комплекс как «якорь территории»: два корпуса, ресторан, баня. Базовый сценарий ещё дышал. Осторожный — нет: заполняемость в межсезонье не несла второй объём, инженерия и берегоукрепление съедали запас. Сняли второй корпус на модели, до того как он появился на площадке. Первый объём пересобрали: меньше номеров, выше счёт с гостя, общий двор вместо второго дома.</p>
          <p className="finance-fact">Срок возврата 7,5 → 6,2. Второй объём остался в резерве земли, не в бетоне.</p>
        </div>
      </section>

      <section className="finance-block">
        <p className="section-label">Что уносите</p>
        <ol className="finance-leave">
          {leave.map((line, index) => (
            <li key={line}><span>0{index + 1}</span><p>{line}</p></li>
          ))}
        </ol>
      </section>

      <section className="finance-block finance-who">
        <div>
          <p className="section-label">Кому это нужно</p>
          <p>Собственник или инвестор до серьёзных вложений. Когда уже есть идея или эскиз и хочется увидеть, живёт ли объект как дело — не как картинка.</p>
        </div>
        <div>
          <p className="section-label">Кому нет</p>
          <p>Кто ищет обоснование уже принятого решения. Кто просит «сделать красивую доходность для банка» без права менять программу. Это не наша работа.</p>
        </div>
      </section>

      <section className="finance-quote">
        <blockquote>Нам было неприятно увидеть осторожный сценарий. И правильно: мы не вывели на берег второй корпус, который кормили бы из кармана.</blockquote>
        <p>Управляющий партнёр, туристический комплекс, Владимирская область</p>
      </section>

      <section className="finance-block">
        <p className="section-label">Паспорт услуги</p>
        <dl className="finance-passport">
          {passport.map(([label, text]) => (
            <div key={label}><dt>{label}</dt><dd>{text}</dd></div>
          ))}
        </dl>
      </section>
      <p className="finance-close"><a href={sitePath("/contacts")}>Написать в бюро</a> Коротко задачу и что уже есть: участок, эскиз, чужая модель. Ответим, имеет ли смысл считать.</p>
    </div>
  );
}
