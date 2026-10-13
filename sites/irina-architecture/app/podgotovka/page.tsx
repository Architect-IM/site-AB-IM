import type { Metadata } from "next";
import { PhotoGrade } from "@/components/photo-grade";

export const metadata: Metadata = {
  title: "Подготовка фото",
  robots: { index: false, follow: false },
};

export default function PhotoPreparation() {
  return (
    <main id="content" className="inner-page">
      <section className="page-intro">
        <div className="page-overline">
          <p className="section-label">Служебная страница</p>
        </div>
        <h1>Подготовка фото</h1>
        <div className="intro-bottom">
          <p>Фотограф сдаёт как есть. Здесь снимок получает общий вид сайта.</p>
          <p>
            Выравниваются свет, теплота камня и слишком кричащий цвет. Размер приводится к длинной стороне 2800.
            Кадрирование, горизонт и лишние предметы обработка не исправляет.
          </p>
        </div>
      </section>
      <PhotoGrade />
    </main>
  );
}
