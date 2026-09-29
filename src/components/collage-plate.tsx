import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";

function sectionSrc(src: string) {
  return src.replace(/(\.\w+)$/, "-section$1");
}

export function CollagePlate({
  src,
  draw,
  className,
}: {
  src: string;
  draw?: string;
  className?: string;
}) {
  const [pos, setPos] = useState(50);
  const frame = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const model = draw ?? sectionSrc(src);

  const move = useCallback((clientX: number) => {
    const el = frame.current;
    if (!el) return;
    const box = el.getBoundingClientRect();
    const next = ((clientX - box.left) / box.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  function down(e: React.PointerEvent<HTMLDivElement>) {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    move(e.clientX);
  }

  function slide(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragging.current) return;
    move(e.clientX);
  }

  function up() {
    dragging.current = false;
  }

  return (
    <div
      ref={frame}
      className={cn("relative cursor-ew-resize touch-none select-none overflow-hidden bg-paper", className)}
      onPointerDown={down}
      onPointerMove={slide}
      onPointerUp={up}
      onPointerCancel={up}
      role="slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      aria-label="Фото и инженерный разрез"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
        if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
      }}
    >
      <img src={model} alt="" draggable={false} className="absolute inset-0 size-full object-cover" />
      <img
        src={src}
        alt=""
        draggable={false}
        className="absolute inset-0 size-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <div
        className="absolute inset-y-0 z-10 w-px bg-white"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <span className="absolute top-1/2 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-white bg-ink text-white">
          <span className="text-[10px] tracking-widest">↔</span>
        </span>
      </div>
    </div>
  );
}
