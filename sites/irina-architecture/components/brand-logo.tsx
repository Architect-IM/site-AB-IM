"use client";

import { usePathname } from "next/navigation";
import { sitePath, sitePathname } from "@/lib/site-path";

export function BrandLogo({ footer = false }: { footer?: boolean }) {
  const pathname = sitePathname(usePathname()).replace(/\/$/, "") || "/";
  if (pathname === "/" || pathname === "/architect") {
    return (
      <span className={`brand-symbol${footer ? " brand-symbol-footer" : ""}`} aria-hidden="true">
        <img src={sitePath("/assets/logo-irina.jpg")} alt="" width={1280} height={678} />
      </span>
    );
  }
  return (
    <span className={`brand-mark${footer ? " brand-mark-footer" : ""}`} aria-hidden="true">ИМ</span>
  );
}
