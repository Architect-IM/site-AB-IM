import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as irina, i as directions, t as SiteChrome, u as useLang } from "./site-chrome-CcbFd0y1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/napravleniya-BnsFneRG.js
var import_jsx_runtime = require_jsx_runtime();
function Directions() {
	const { lang } = useLang();
	const t = irina[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteChrome, {
		site: "irina",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-6xl px-5 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl",
					children: t.directionsTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-muted",
					children: lang === "ru" ? "Каталог архитектора. Стадии проектирования — в бюро." : "The architect’s catalogue. Design stages live in the bureau."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 space-y-16",
					children: directions.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/napravleniya/$slug",
						params: { slug: d.slug },
						className: "grid items-center gap-8 md:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-video overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: d.image,
								alt: "",
								className: "size-full object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] uppercase tracking-[0.18em] text-gold",
								children: d[lang].group
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-3xl",
								children: d[lang].title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 leading-relaxed text-muted",
								children: d[lang].body
							})
						] })]
					}, d.slug))
				})
			]
		})
	});
}
//#endregion
export { Directions as component };
