import { siteHtml } from "@/lib/site-path";
import { homeHTML } from "@/lib/home";
export default function Home() { return <main id="content" dangerouslySetInnerHTML={{__html:siteHtml(homeHTML)}}/>; }
