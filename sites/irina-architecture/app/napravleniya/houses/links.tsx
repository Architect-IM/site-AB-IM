import type { ReactNode } from "react";
import { sitePath } from "@/lib/site-path";
import styles from "./houses.module.css";

export function ActionLabel({ children, back = false }: { children: ReactNode; back?: boolean }) {
  return <span className={styles.actionLabel}>
    <span className={styles.arrow} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none"><path d={back ? "M20 12H4m5-5-5 5 5 5" : "M4 12h16m-5-5 5 5-5 5"} stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </span>
    <span>{children}</span>
  </span>;
}

export function HouseLink({ href, children, back = false }: { href: string; children: ReactNode; back?: boolean }) {
  return <a className={styles.action} href={sitePath(href)}><ActionLabel back={back}>{children}</ActionLabel></a>;
}
