"use client";

import { useState } from "react";

export function PhotoRail({ photos }: { photos: { src: string; alt: string }[] }) {
  const [index, setIndex] = useState(0);
  const count = photos.length;
  const photo = photos[index];
  const go = (step: number) => setIndex((index + step + count) % count);

  return (
    <figure className="pp-rail">
      <img src={photo.src} alt={photo.alt} />
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
