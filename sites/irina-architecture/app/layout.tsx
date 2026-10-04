import type { Metadata } from "next";
import { sitePath } from "@/lib/site-path";
import { Header, SiteEffects } from "@/components/site-chrome";
import { Footer } from "@/components/site-footer";
import "./globals.css";
export const metadata: Metadata = {
  ...(process.env.SITE_REVIEW_EXPORT === "1" ? { robots: { index: false, follow: false } } : {}),
  title: { default: "Ирина Михейкина — архитектор", template: "%s · Ирина Михейкина" },
  description: "Современная архитектура в контексте места. Архитектор Ирина Михейкина, проектное бюро полного цикла и лаборатория «Владимир».",
  icons: { icon: sitePath("/favicon.svg"), shortcut: sitePath("/favicon.svg") },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="ru"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400&family=Onest:wght@400;500;600&display=swap" rel="stylesheet"/></head><body><a className="skip-link" href="#content">Перейти к содержанию</a><Header/>{children}<Footer/><SiteEffects/></body></html>;
}
