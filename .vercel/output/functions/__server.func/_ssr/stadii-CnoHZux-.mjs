import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as stages, n as bureauCopy, t as SiteChrome, u as useLang } from "./site-chrome-CcbFd0y1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stadii-CnoHZux-.js
var import_jsx_runtime = require_jsx_runtime();
function StagesPage() {
	const { lang } = useLang();
	const t = bureauCopy[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteChrome, {
		site: "bureau",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-3xl px-5 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.2em] text-gold",
					children: t.brand
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-4xl",
					children: t.stagesTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 space-y-14",
					children: stages.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						id: s.slug,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl",
							children: s[lang].title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-base leading-relaxed text-muted",
							children: s[lang].body
						})]
					}, s.slug))
				})
			]
		})
	});
}
//#endregion
export { StagesPage as component };
