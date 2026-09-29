import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as labCopy, t as SiteChrome, u as useLang } from "./site-chrome-CcbFd0y1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lab-BCvR4E4g.js
var import_jsx_runtime = require_jsx_runtime();
function LabHome() {
	const { lang } = useLang();
	const t = labCopy[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteChrome, {
		site: "lab",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-[60dvh]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/lab.jpg",
				alt: "",
				className: "absolute inset-0 size-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg/40" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-3xl px-5 py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-sm italic text-muted",
					children: t.brand
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-serif text-4xl leading-tight md:text-5xl",
					children: t.brandFull
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 text-xl leading-relaxed",
					children: t.mission
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-base leading-relaxed text-muted",
					children: t.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 border-t border-line pt-8 text-xs uppercase tracking-[0.18em] text-gold",
					children: t.zarya
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-10 md:grid-cols-3",
					children: (lang === "ru" ? [
						["Исследования", "История, культура, пространство, технология школы."],
						["Код", "Границы, принципы, ценность и ограничения феномена."],
						["Сообщество", "Совет открыт. Институт — горизонт, не статус."]
					] : [
						["Research", "History, culture, space, technology of the school."],
						["Code", "Limits, principles, value and constraints of the phenomenon."],
						["Community", "The council is open. An institute is a horizon, not a title."]
					]).map(([title, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: body
					})] }, title))
				})
			]
		})]
	});
}
//#endregion
export { LabHome as component };
