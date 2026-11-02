"use client";

import { useEffect, useState } from "react";

export function StagePlace({ title }: { title: string }) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const titleEl = document.getElementById("product-lead-title");
    if (!titleEl) return;
    const header = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 77;
    const observer = new IntersectionObserver(
      ([entry]) => setOn(!entry.isIntersecting),
      { rootMargin: `-${header}px 0px 0px 0px`, threshold: 0 },
    );
    observer.observe(titleEl);
    return () => observer.disconnect();
  }, []);

  return (
    <p className={`stage-place${on ? " is-on" : ""}`} aria-hidden="true">
      {title}
    </p>
  );
}
