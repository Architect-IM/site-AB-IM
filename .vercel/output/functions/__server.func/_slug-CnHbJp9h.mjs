import { R as notFound, _ as Link, y as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as Route } from "./_ssr/router-CYC6ZRNf.mjs";
import { c as projects, t as SiteChrome, u as useLang } from "./_ssr/site-chrome-CcbFd0y1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CnHbJp9h.js
var import_jsx_runtime = require_jsx_runtime();
function CasePage() {
	const { slug } = Route.useParams();
	const { lang } = useLang();
	const project = projects.find((p) => p.slug === slug);
	if (!project) throw notFound();
	const c = project[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteChrome, {
		site: "irina",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[72dvh] bg-ink text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: project.image,
						alt: "",
						className: "absolute inset-0 size-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/45 to-ink/10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto flex min-h-[72dvh] max-w-6xl flex-col justify-end px-5 py-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.2em] text-gold",
								children: project.tag[lang]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-4 max-w-3xl text-4xl md:text-6xl",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xl text-lg text-white/80",
								children: c.subtitle
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-4",
					children: [
						[lang === "ru" ? "Тип" : "Type", project.tag[lang]],
						[lang === "ru" ? "Статус" : "Status", project.status === "work" ? lang === "ru" ? "В работе" : "In progress" : lang === "ru" ? "Реализован" : "Complete"],
						[lang === "ru" ? "Место" : "Place", lang === "ru" ? "Владимирский край" : "Vladimir land"],
						[lang === "ru" ? "Год" : "Year", "2024"]
					].map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-[0.16em] text-muted",
						children: label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm",
						children: value
					})] }, label))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs uppercase tracking-[0.18em] text-muted",
					children: lang === "ru" ? "Задача" : "Brief"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-lg leading-relaxed",
					children: c.task
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs uppercase tracking-[0.18em] text-muted",
					children: lang === "ru" ? "Решение" : "Solution"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-lg leading-relaxed",
					children: c.solution
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/portrait.jpg",
						alt: "",
						className: "h-[520px] w-full object-cover object-[50%_18%]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.18em] text-gold",
							children: lang === "ru" ? "Взгляд Ирины" : "Irina’s view"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
							className: "mt-6 text-2xl leading-relaxed font-light",
							children: c.view
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 font-script text-4xl text-gold",
							children: "Irina Mikheykina"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted",
							children: lang === "ru" ? "Ирина Михейкина, архитектор" : "Irina Mikheykina, architect"
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-5 py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs uppercase tracking-[0.18em] text-muted",
						children: lang === "ru" ? "Результат" : "Result"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-lg leading-relaxed",
						children: c.result
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-2xl text-sm leading-relaxed text-muted",
						children: c.shows
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/portfolio",
						className: "mt-12 inline-block text-xs uppercase tracking-[0.16em] text-gold",
						children: ["← ", lang === "ru" ? "Все работы" : "All work"]
					})
				]
			})
		]
	});
}
//#endregion
export { CasePage as component };
