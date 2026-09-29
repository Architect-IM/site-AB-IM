import { i as __toESM } from "../_runtime.mjs";
import { _ as Link, y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as irina, c as projects, r as cn, t as SiteChrome, u as useLang } from "./site-chrome-CcbFd0y1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portfolio-BKNtvX4P.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Portfolio() {
	const { lang } = useLang();
	const t = irina[lang];
	const tags = ["all", ...new Set(projects.map((p) => p.tag[lang]))];
	const [tag, setTag] = (0, import_react.useState)("all");
	const list = (0, import_react.useMemo)(() => tag === "all" ? projects : projects.filter((p) => p.tag[lang] === tag), [tag, lang]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteChrome, {
		site: "irina",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-6xl px-5 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl",
					children: t.portfolioTitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap gap-2",
					children: tags.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setTag(item),
						className: cn("border border-line px-4 py-2 text-xs uppercase tracking-[0.14em]", tag === item ? "bg-ink text-white" : "bg-bg"),
						children: item === "all" ? lang === "ru" ? "Все" : "All" : item
					}, item))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-10 md:grid-cols-2",
					children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/portfolio/$slug",
						params: { slug: p.slug },
						className: "group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-video overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image,
									alt: "",
									className: "size-full object-cover transition duration-500 group-hover:scale-[1.03]"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-[11px] uppercase tracking-[0.16em] text-muted",
								children: [p.tag[lang], p.status === "work" ? ` · ${t.inWorkTitle}` : ""]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-2xl",
								children: p[lang].title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: p[lang].subtitle
							})
						]
					}, p.slug))
				})
			]
		})
	});
}
//#endregion
export { Portfolio as component };
