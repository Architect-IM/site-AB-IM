"use client";

import { useState, type CSSProperties } from "react";

export function PhotoRail({ photos, viewport = false }: { photos: { src: string; alt: string; position?: string; keepVisible?: boolean; standardLayout?: boolean }[]; viewport?: boolean }) {
  const [index, setIndex] = useState(0);
  const count = photos.length;
  const photo = photos[index];
  const go = (step: number) => setIndex((index + step + count) % count);

  return (
    <figure className={viewport && !photo.standardLayout ? "pp-rail pp-rail-viewport" : "pp-rail"}>
      <img
        src={photo.src}
        alt={photo.alt}
        data-keep-visible={photo.keepVisible || undefined}
        style={photo.position ? ({ "--rail-position": photo.position } as CSSProperties) : undefined}
      />
      <figcaption>
        <span>{photo.alt}</span>
        <span className="pp-rail-nav">
          <button type="button" onClick={() => go(-1)} aria-label="Предыдущий кадр">←</button>
          <span>{String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}</span>
          <button type="button" onClick={() => go(1)} aria-label="Следующий кадр">→</button>
        </span>
      </figcaption>
    </figure>
  );
}
