
import { sitePath } from "@/lib/site-path";
export default function NotFound(){return <main className="inner-page" id="content"><section className="page-intro"><p className="section-label">404 / Страница не найдена</p><h1>Здесь пока<br/>нет проекта.</h1><a href={sitePath("/portfolio")} className="text-link">Перейти в портфолио</a></section></main>}
