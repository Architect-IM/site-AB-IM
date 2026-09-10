import { i as __toESM } from "../_runtime.mjs";
import { y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as legal, t as SiteChrome, u as useLang } from "./site-chrome-CcbFd0y1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kontakt-C-vOBCQS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const { lang } = useLang();
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteChrome, {
		site: "irina",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto grid max-w-6xl gap-16 px-5 py-16 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl",
					children: lang === "ru" ? "Контакт" : "Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-muted",
					children: lang === "ru" ? "Напишите. Форма на стенде демо — заявка никуда не уходит." : "Write. This prototype form does not send anywhere yet."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 space-y-2 text-sm leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: legal.address }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: legal.phone800 }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: legal.phoneMobile }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${legal.email}`,
							children: legal.email
						}) })
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-4",
				onSubmit: (e) => {
					e.preventDefault();
					setSent(true);
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-xs uppercase tracking-[0.14em] text-muted",
						children: [lang === "ru" ? "Имя" : "Name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							name: "name",
							className: "mt-2 w-full border border-line bg-bg px-3 py-3 text-base text-fg outline-none focus:border-gold"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-xs uppercase tracking-[0.14em] text-muted",
						children: ["E-mail", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							type: "email",
							name: "email",
							className: "mt-2 w-full border border-line bg-bg px-3 py-3 text-base text-fg outline-none focus:border-gold"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-xs uppercase tracking-[0.14em] text-muted",
						children: [lang === "ru" ? "Сообщение" : "Message", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							required: true,
							name: "message",
							rows: 5,
							className: "mt-2 w-full border border-line bg-bg px-3 py-3 text-base text-fg outline-none focus:border-gold"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "bg-ink px-6 py-3 text-xs uppercase tracking-[0.16em] text-white",
						children: lang === "ru" ? "Отправить" : "Send"
					}),
					sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-gold",
						children: lang === "ru" ? "Демо: заявка принята локально." : "Demo: received locally."
					}) : null
				]
			})]
		})
	});
}
//#endregion
export { ContactPage as component };
