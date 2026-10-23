"use client";

import { useEffect } from "react";

export function MarketingNavOffset() {
  useEffect(() => {
    const nav = document.querySelector<HTMLElement>(".marketing-nav");
    if (!nav) return;
    const apply = () => {
      const header = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 77;
      const sticky = getComputedStyle(nav).position === "sticky";
      const offset = Math.round(header + (sticky ? nav.offsetHeight : 0));
      document.documentElement.style.setProperty("--marketing-scroll", `${offset}px`);
    };
    apply();
    if (window.location.hash) document.querySelector(window.location.hash)?.scrollIntoView();
    const observer = new ResizeObserver(apply);
    observer.observe(nav);
    window.addEventListener("resize", apply);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", apply);
    };
  }, []);
  return null;
}
