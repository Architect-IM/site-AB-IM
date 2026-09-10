import { R as notFound, _ as Link, y as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { r as Route$2 } from "./_ssr/router-CYC6ZRNf.mjs";
import { i as directions, t as SiteChrome, u as useLang } from "./_ssr/site-chrome-CcbFd0y1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CIcgpBCB.js
var import_jsx_runtime = require_jsx_runtime();
function DirectionPage() {
	const { slug } = Route$2.useParams();
	const { lang } = useLang();
	const item = directions.find((d) => d.slug === slug);
	if (!item) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteChrome, {
		site: "irina",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-72 overflow-hidden md:h-96",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: item.image,
				alt: "",
				className: "size-full object-cover"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-3xl px-5 py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.18em] text-gold",
					children: item[lang].group
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-4xl",
					children: item[lang].title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-lg leading-relaxed",
					children: item[lang].body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/napravleniya",
					className: "mt-12 inline-block text-xs uppercase tracking-[0.16em] text-gold",
					children: ["← ", lang === "ru" ? "Все направления" : "All directions"]
				})
			]
		})]
	});
}
//#endregion
export { DirectionPage as component };
