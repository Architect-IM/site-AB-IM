import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as stages, n as bureauCopy, t as SiteChrome, u as useLang } from "./site-chrome-CcbFd0y1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bureau-DtiofApo.js
var import_jsx_runtime = require_jsx_runtime();
function BureauHome() {
	const { lang } = useLang();
	const t = bureauCopy[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteChrome, {
		site: "bureau",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[72dvh] bg-ink text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/bureau.jpg",
						alt: "",
						className: "absolute inset-0 size-full object-cover opacity-50"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto flex min-h-[72dvh] max-w-6xl flex-col justify-end px-5 py-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.22em] text-gold",
								children: t.brandFull
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-5 max-w-3xl text-4xl font-medium leading-tight md:text-6xl",
								children: t.hero
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-2xl text-base leading-relaxed text-white/75",
								children: t.manifesto
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-ink py-10 text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-6xl px-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "border-t border-gold/40 pt-8 text-sm tracking-wide text-gold",
						children: t.guarantee
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-5 py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs font-medium uppercase tracking-[0.2em]",
						children: t.stagesTitle
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/bureau/stadii",
						className: "text-xs uppercase tracking-[0.14em] text-gold",
						children: [lang === "ru" ? "Все стадии" : "All stages", " →"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "divide-y divide-line border-y border-line",
					children: stages.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid gap-4 py-8 md:grid-cols-[80px_1fr_2fr]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-gold",
								children: ["0", i + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl",
								children: s[lang].title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-muted",
								children: s[lang].body
							})
						]
					}, s.slug))
				})]
			})
		]
	});
}
//#endregion
export { BureauHome as component };
