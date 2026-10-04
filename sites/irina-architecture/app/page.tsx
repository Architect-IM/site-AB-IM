import { homeHTML } from "@/lib/home";
export default function Home() { return <main id="content" dangerouslySetInnerHTML={{__html:homeHTML}}/>; }
