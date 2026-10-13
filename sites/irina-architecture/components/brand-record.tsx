import { sitePath } from "@/lib/site-path";

const audit = [
  ["Курорт на все случаи", "Двадцать домов и один двор"],
  ["Ресторан и бассейн", "Свой стол в доме. Бассейна в обещании нет"],
  ["Лето у реки", "Дом, в котором живут и зимой"],
  ["Для всех, кто любит природу", "Тот, кто едет за тишиной на несколько дней"],
];

const points = [
  ["Дорога", "Обещание «доедете», не романтика глуши."],
  ["Капитальный дом", "Зима входит в бренд, не только в конструктив."],
  ["Свой стол", "Ужин не сцена. Кухня в доме, не ресторан."],
  ["Двадцать домов", "Мало. Второй объём не обещаем: в осторожном счёте он не держится."],
  ["Повтор", "Возвращаются в тот же дом, не за новым аттракционом."],
];

export function BrandRecord() {
  return (
    <div className="brand-sheet">
      <p className="finance-kicker">Тот же комплекс, что в финансово-экономической модели</p>
      <h2>Глемпинг на 20 домов</h2>
      <p className="finance-place">Средняя полоса · круглый год</p>

      <section className="brand-audit">
        <div>
          <h3>Что легко пообещать</h3>
          <ul>
            {audit.map(([loose]) => <li key={loose}>{loose}</li>)}
          </ul>
        </div>
        <div>
          <h3>Что место может удержать</h3>
          <ul>
            {audit.map(([loose, held]) => <li key={loose}>{held}</li>)}
          </ul>
        </div>
      </section>
      <p className="brand-note">Аудит здесь не оценка логотипа. Это сверка обещания с тем, что объект уже может удержать.</p>

      <section className="brand-platform">
        <p><strong>Для кого</strong>Кто остаётся в доме на несколько дней и не ждёт программы.</p>
        <p><strong>Обещание</strong>Тихий капитальный дом в средней полосе, пригодный и зимой.</p>
        <p><strong>Не говорим</strong>Курорт, бассейн, ресторан, «для всех сразу».</p>
      </section>

      <section className="brand-points">
        {points.map(([name, text]) => (
          <div key={name}><strong>{name}</strong><p>{text}</p></div>
        ))}
      </section>

      <section className="finance-split brand-place">
        <img src={sitePath("/assets/resort.jpg")} alt="" />
        <div>
          <p className="section-label">Как место устроено для гостя</p>
          <p className="brand-stay">Приезд. Дом. Стол. Двор. Снова.</p>
          <p>Не программа на день и не новый аттракцион к следующему сезону. Идеология комплекса короткая: один дом, в который есть зачем вернуться.</p>
        </div>
      </section>
    </div>
  );
}
