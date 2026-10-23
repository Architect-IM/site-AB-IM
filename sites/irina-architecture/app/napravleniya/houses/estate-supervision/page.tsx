import { sitePath } from "@/lib/site-path";

export default function Supervision() {
  const href = sitePath("/napravleniya/houses/estate-implementation");
  return (
    <main id="content" className="inner-page">
      <script dangerouslySetInnerHTML={{ __html: `location.replace(${JSON.stringify(href)})` }} />
      <h1 className="visually-hidden">Авторский надзор частного дома</h1>
      <noscript><a href={href}>Сопровождение реализации и авторский надзор</a></noscript>
    </main>
  );
}
