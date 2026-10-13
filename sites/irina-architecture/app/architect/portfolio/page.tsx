import { sitePath } from "@/lib/site-path";

export default function ArchitectPortfolio() {
  const href = sitePath("/portfolio");
  return (
    <main id="content" className="inner-page">
      <script dangerouslySetInnerHTML={{ __html: `location.replace(${JSON.stringify(href)})` }} />
      <h1 className="visually-hidden">Портфолио</h1>
    </main>
  );
}
