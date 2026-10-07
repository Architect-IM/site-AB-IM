"use client";

import { useState } from "react";

type Land = "far" | "mid" | "near";
type Money = "own" | "12" | "18";
type Food = "kitchen" | "restaurant";
type Choice = { land: Land; road: boolean; capital: boolean; money: Money; food: Food; pool: boolean };
type Key = keyof Choice;

const start: Choice = { land: "mid", road: true, capital: true, money: "own", food: "kitchen", pool: false };

const landCost: Record<Land, number> = { far: 8, mid: 14, near: 22 };
const landIncome: Record<Land, number> = { far: -4, mid: 0, near: 3 };

function model(choice: Choice) {
  let capex = landCost[choice.land];
  let income = 17.6 + landIncome[choice.land];
  if (choice.road) {
    capex += 18;
    income += 3.4;
  }
  if (choice.capital) capex += 126;
  else {
    capex += 58;
    income -= 4;
  }
  if (choice.food === "restaurant") {
    capex += 28;
    income += 5;
  } else capex += 10;
  if (choice.pool) {
    capex += 14;
    income += 2.2;
  }
  const rate = choice.money === "own" ? 0 : choice.money === "12" ? 0.12 : 0.18;
  const interest = capex * rate;
  const net = income - interest;
  return { capex, income: net, interest, payback: net > 1 ? capex / net : Infinity };
}

function mln(value: number) {
  const rounded = Math.round(Math.abs(value) * 10) / 10;
  const text = Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1).replace(".", ",");
  return `${text} млн`;
}

function yearWord(value: number) {
  const n = Math.abs(Math.trunc(value));
  if (n % 10 === 1 && n % 100 !== 11) return "год";
  if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) return "года";
  return "лет";
}

function paybackLabel(value: number) {
  if (!Number.isFinite(value) || value > 25) return "не сходится";
  const rounded = Math.round(value * 10) / 10;
  const text = Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1).replace(".", ",");
  const word = Number.isInteger(rounded) ? yearWord(rounded) : Math.floor(rounded) === 1 ? "года" : "лет";
  return `${text} ${word}`;
}

function termShift(before: number, after: number) {
  if (!Number.isFinite(after)) return "деньги почти не возвращаются";
  if (!Number.isFinite(before)) return "срок снова появляется";
  const delta = after - before;
  const abs = Math.abs(delta);
  if (abs < 0.25) return "срок почти не меняется";
  const span = abs < 0.75 ? "примерно на полгода" : abs < 1.4 ? "примерно на год" : `примерно на ${Math.round(abs)} ${yearWord(Math.round(abs))}`;
  return delta < 0 ? `срок короче ${span}` : `срок длиннее ${span}`;
}

function explain(next: Choice, prev: Choice, key: Key) {
  const after = model(next);
  const before = model(prev);
  const term = termShift(before.payback, after.payback);
  if (key === "road") {
    return next.road
      ? `Дорога добавляет 18 млн к вложениям и поднимает заполняемость: гость доезжает. ${sentence(term)}`
      : `Без дороги вложения меньше на 18 млн, но часть гостей не доезжает. ${sentence(term)}`;
  }
  if (key === "land") {
    if (next.land === "far") return `Дальний участок дешевле, но гостей меньше. ${sentence(term)}`;
    if (next.land === "near") return `Ближний участок дороже, доход выше: гость ближе. ${sentence(term)}`;
    return `Средний участок держит середину между ценой земли и тем, доедет ли гость. ${sentence(term)}`;
  }
  if (key === "capital") {
    return next.capital
      ? `Капитальные здания дороже в стройке и держат более высокий доход. ${sentence(term)}`
      : `Некапитальные здания заметно дешевле, доход ниже. ${sentence(term)}`;
  }
  if (key === "money") {
    if (next.money === "own") return `Свои деньги не забирают ежегодный процент из дохода. ${sentence(term)}`;
    const rate = next.money === "12" ? "12%" : "18%";
    return `Заём под ${rate} забирает около ${mln(after.interest)} в год из дохода. ${sentence(term)}`;
  }
  if (key === "food") {
    return next.food === "restaurant"
      ? `Ресторан добавляет вложения и свой доход. ${sentence(term)}`
      : `Кухня для гостей дешевле ресторана, доход скромнее. ${sentence(term)}`;
  }
  return next.pool
    ? `Бассейн добавляет 14 млн и немного летнего дохода. ${sentence(term)}`
    : `Без бассейна и вложения, и доход ниже. ${sentence(term)}`;
}

function sentence(term: string) {
  return term.charAt(0).toUpperCase() + term.slice(1) + ".";
}

export function FinanceExample() {
  const [choice, setChoice] = useState(start);
  const [note, setNote] = useState(() => explain(start, { ...start, road: false }, "road"));
  const figures = model(choice);

  function pick<K extends Key>(key: K, value: Choice[K]) {
    if (choice[key] === value) return;
    const next = { ...choice, [key]: value };
    setNote(explain(next, choice, key));
    setChoice(next);
  }

  const groups: { key: Key; label: string; options: { value: Choice[Key]; label: string }[] }[] = [
    { key: "land", label: "Участок", options: [{ value: "far", label: "Дальний · 8 млн" }, { value: "mid", label: "Средний · 14 млн" }, { value: "near", label: "Ближний · 22 млн" }] },
    { key: "road", label: "Дорога", options: [{ value: true, label: "Строим" }, { value: false, label: "Не строим" }] },
    { key: "capital", label: "Здания", options: [{ value: true, label: "Капитальные" }, { value: false, label: "Некапитальные" }] },
    { key: "money", label: "Деньги", options: [{ value: "own", label: "Свои" }, { value: "12", label: "Заём · 12%" }, { value: "18", label: "Заём · 18%" }] },
    { key: "food", label: "Еда", options: [{ value: "restaurant", label: "Ресторан" }, { value: "kitchen", label: "Кухня для гостей" }] },
    { key: "pool", label: "Бассейн", options: [{ value: true, label: "Есть" }, { value: false, label: "Нет" }] },
  ];

  return (
    <section className="finance-example" aria-label="Сводная панель глемпинга">
      <p className="finance-kicker">Сводная панель (за каждой цифрой стоит отдельный расчёт)</p>
      <h2>Глемпинг на 20 домов</h2>
      <p className="finance-place">Средняя полоса · круглый год</p>
      <div className="finance-nums">
        <div><b>{mln(figures.capex)}</b><span>Вложения</span></div>
        <div><b>{mln(figures.income)}</b><span>Годовой доход</span></div>
        <div><b>{paybackLabel(figures.payback)}</b><span>Окупаемость</span></div>
      </div>
      <p className="finance-why">{note}</p>
      <div className="finance-rows">
        {groups.map((group) => (
          <div className="finance-row" key={group.key}>
            <strong>{group.label}</strong>
            <div className="finance-opts">
              {group.options.map((option) => (
                <button key={option.label} type="button" aria-pressed={choice[group.key] === option.value} onClick={() => pick(group.key, option.value)}>{option.label}</button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
