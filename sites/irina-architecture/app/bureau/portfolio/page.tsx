import { sitePath } from "@/lib/site-path";

export default function BureauPortfolio() {
  const href = sitePath("/portfolio");
  return (
    <main id="content" className="inner-page">
      <script dangerouslySetInnerHTML={{ __html: `location.replace(${JSON.stringify(href)})` }} />
      <p className="section" style={{ padding: "48px var(--side)" }}><a href={href}>Портфолио</a></p>
    </main>
  );
}
