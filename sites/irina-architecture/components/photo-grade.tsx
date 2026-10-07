"use client";

import { useState } from "react";
import { gradePixels, gradedSize, photoGrade } from "@/lib/grade-photo";

type GradedPhoto = {
  name: string;
  beforeUrl: string;
  afterUrl: string;
  width: number;
  height: number;
};

function downloadName(name: string): string {
  const dot = name.lastIndexOf(".");
  const stem = dot > 0 ? name.slice(0, dot) : name;
  return `${stem}-site.jpg`;
}

async function gradeFile(file: File): Promise<GradedPhoto> {
  const bitmap = await createImageBitmap(file, { imageOrientation: "from-image" });
  const size = gradedSize(bitmap.width, bitmap.height);
  const canvas = document.createElement("canvas");
  canvas.width = size.width;
  canvas.height = size.height;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) throw new Error("Не удалось подготовить изображение.");
  context.drawImage(bitmap, 0, 0, size.width, size.height);
  bitmap.close();
  const image = context.getImageData(0, 0, size.width, size.height);
  gradePixels(image.data);
  context.putImageData(image, 0, 0);
  const blob = await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (result) => (result ? resolve(result) : reject(new Error("Не удалось сохранить JPEG."))),
      "image/jpeg",
      photoGrade.jpegQuality,
    );
  });
  return {
    name: downloadName(file.name),
    beforeUrl: URL.createObjectURL(file),
    afterUrl: URL.createObjectURL(blob),
    width: size.width,
    height: size.height,
  };
}

export function PhotoGrade() {
  const [photos, setPhotos] = useState<GradedPhoto[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function take(files: FileList | File[]) {
    const images = [...files].filter((file) => file.type.startsWith("image/"));
    if (!images.length) {
      setError("Нужен файл JPEG, PNG или WebP. Снимки HEIC с телефона сначала сохраните как JPEG.");
      return;
    }
    setBusy(true);
    setError("");
    try {
      const graded = await Promise.all(images.map(gradeFile));
      setPhotos((current) => [...graded, ...current]);
    } catch {
      setError("Этот файл не удалось прочитать. Сохраните его как JPEG и загрузите снова.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="section photo-grade">
      <label className="photo-drop">
        <input
          type="file"
          accept="image/jpeg,image/png,image/webp"
          multiple
          onChange={(event) => {
            if (event.target.files) void take(event.target.files);
            event.target.value = "";
          }}
        />
        <span>{busy ? "Обрабатываю…" : "Положить фотографии сюда"}</span>
        <small>JPEG, PNG или WebP. Несколько файлов сразу.</small>
      </label>
      {error ? <p className="photo-grade-error">{error}</p> : null}
      <div className="photo-grade-list">
        {photos.map((photo) => (
          <article key={photo.afterUrl}>
            <figure>
              <img src={photo.beforeUrl} alt="" />
              <figcaption>Как сдали</figcaption>
            </figure>
            <figure>
              <img src={photo.afterUrl} alt="" />
              <figcaption>
                Для сайта · {photo.width}×{photo.height}
              </figcaption>
            </figure>
            <a href={photo.afterUrl} download={photo.name}>
              Скачать
            </a>
          </article>
        ))}
      </div>
      <style>{`
        .photo-grade { padding-top: 0; }
        .photo-drop {
          display: grid;
          gap: 8px;
          align-content: center;
          min-height: 180px;
          padding: 28px;
          border: 1px dashed var(--line);
          cursor: pointer;
        }
        .photo-drop input { display: none; }
        .photo-drop small { color: var(--muted); }
        .photo-grade-error { color: #8a3b32; }
        .photo-grade-list { display: grid; gap: 28px; margin-top: 36px; }
        .photo-grade-list article {
          display: grid;
          grid-template-columns: 1fr 1fr auto;
          gap: 18px;
          align-items: end;
        }
        .photo-grade-list figure { margin: 0; }
        .photo-grade-list img { aspect-ratio: 3 / 2; object-fit: cover; background: var(--paper-deep); }
        .photo-grade-list figcaption { margin-top: 8px; color: var(--muted); font-size: 13px; }
        .photo-grade-list a { padding-bottom: 28px; border-bottom: 1px solid var(--ink); }
        @media (max-width: 800px) {
          .photo-grade-list article { grid-template-columns: 1fr; }
          .photo-grade-list a { padding-bottom: 0; }
        }
      `}</style>
    </section>
  );
}
