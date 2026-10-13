"use client";
import { sitePath } from "@/lib/site-path";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { services } from "@/lib/services";
export function Services(){return <div className="service-groups">{services.map(group=><section className="service-group" id={group.id} key={group.id}><div className="service-heading"><span className="service-number">{group.number}</span><h3>{group.title}</h3><p>{group.description}</p></div><Accordion className="service-accordion" type="multiple">{group.items.map(([name,text,slug])=><AccordionItem className="service-item" key={name} value={String(slug)}><AccordionTrigger className="service-trigger">{name}</AccordionTrigger><AccordionContent className="service-copy"><p>{text}</p><a href={sitePath(`/bureau/uslugi/${slug}`)}>Подробнее</a></AccordionContent></AccordionItem>)}</Accordion></section>)}</div>}
