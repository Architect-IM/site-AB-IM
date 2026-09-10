import { y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as legal, t as SiteChrome, u as useLang } from "./site-chrome-CcbFd0y1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/legal-CQpIC_Fu.js
var import_jsx_runtime = require_jsx_runtime();
function LegalPage() {
	const { lang } = useLang();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteChrome, {
		site: "irina",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-2xl px-5 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl",
				children: lang === "ru" ? "Реквизиты" : "Legal"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-10 space-y-4 text-sm leading-relaxed",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted",
						children: lang === "ru" ? "Юридическое лицо" : "Entity"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: legal.entity })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted",
						children: "ИНН / КПП"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [legal.inn, " / 332801001"] })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted",
						children: "ОГРН"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: legal.ogrn })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted",
						children: lang === "ru" ? "Адрес приёма" : "Studio"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: legal.address })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted",
						children: "E-mail"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${legal.email}`,
						children: legal.email
					}) })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-muted",
						children: lang === "ru" ? "Телефоны" : "Phone"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", { children: [
						legal.phone800,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						legal.phoneMobile
					] })] })
				]
			})]
		})
	});
}
//#endregion
export { LegalPage as component };
