import { redirect } from "next/navigation";
import { sitePath } from "@/lib/site-path";

export default function Supervision() {
  redirect(sitePath("/napravleniya/houses/estate-implementation"));
}
