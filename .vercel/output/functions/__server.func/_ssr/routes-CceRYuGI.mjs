import { _ as Link, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as irina, c as projects, i as directions, t as SiteChrome, u as useLang } from "./site-chrome-CcbFd0y1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CceRYuGI.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const { lang } = useLang();
	const t = irina[lang];
	const done = projects.filter((p) => p.status === "done").slice(0, 3);
	const work = projects.filter((p) => p.status === "work");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteChrome, {
		site: "irina",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative min-h-[88dvh] bg-ink text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid min-h-[88dvh] lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative min-h-[50dvh]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/portrait.jpg",
								alt: "",
								className: "absolute inset-0 size-full object-cover object-[50%_12%] brightness-110 contrast-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-8 left-5 right-5 max-w-xl lg:left-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-[0.22em] text-gold",
										children: t.heroKicker
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-4 font-medium text-4xl leading-none md:text-6xl",
										children: t.brand
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 max-w-md text-sm leading-relaxed text-white/80 md:text-base",
										children: t.manifestoShort
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/portfolio",
										className: "mt-8 inline-flex items-center text-xs font-medium uppercase tracking-[0.16em] text-gold",
										children: [t.homeCta, " →"]
									})
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative min-h-[42dvh]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/mansion.jpg",
							alt: "",
							className: "absolute inset-0 size-full object-cover"
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative min-h-[52dvh]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/resort.jpg",
						alt: "",
						className: "absolute inset-0 size-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/35" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative mx-auto flex min-h-[52dvh] max-w-6xl items-end px-5 py-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-lg text-white",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-[0.2em] text-gold",
								children: lang === "ru" ? "Живое гостеприимство" : "Living hospitality"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-2xl font-medium md:text-3xl",
								children: lang === "ru" ? "Туркомплекс как место, куда возвращаются" : "A resort people return to"
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-6xl px-5 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-3xl text-lg leading-relaxed text-fg md:text-xl",
					children: t.manifestoLong
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 py-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-10 flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xs font-medium uppercase tracking-[0.2em]",
							children: t.directionsTitle
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/napravleniya",
							className: "text-xs uppercase tracking-[0.14em] text-gold",
							children: [t.more, " →"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-px bg-line md:grid-cols-2",
						children: directions.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/napravleniya/$slug",
							params: { slug: d.slug },
							className: "group bg-bg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-video overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: d.image,
									alt: "",
									className: "size-full object-cover transition duration-500 group-hover:scale-[1.03]"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "px-5 py-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] uppercase tracking-[0.18em] text-muted",
									children: d[lang].group
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-lg",
									children: d[lang].title
								})]
							})]
						}, d.slug))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 py-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-10 flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xs font-medium uppercase tracking-[0.2em]",
							children: t.portfolioTitle
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/portfolio",
							className: "text-xs uppercase tracking-[0.14em] text-gold",
							children: [t.viewAll, " →"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-8 md:grid-cols-3",
						children: done.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-[11px] uppercase tracking-[0.16em] text-muted",
									children: p.tag[lang]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-lg",
									children: p[lang].title
								})
							]
						}, p.slug))
					})]
				})
			}),
			work.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-6xl px-5 py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xs font-medium uppercase tracking-[0.2em]",
					children: t.inWorkTitle
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-8 md:grid-cols-2",
					children: work.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/portfolio/$slug",
						params: { slug: p.slug },
						className: "group",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-video overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image,
									alt: "",
									className: "size-full object-cover"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-[11px] uppercase tracking-[0.16em] text-gold",
								children: t.inWorkTitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xl",
								children: p[lang].title
							})
						]
					}, p.slug))
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/bureau",
					className: "relative min-h-[420px] overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/bureau.jpg",
							alt: "",
							className: "absolute inset-0 size-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/55" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex h-full min-h-[420px] flex-col justify-end p-8 text-white md:p-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.2em] text-gold",
									children: t.bureauWidget.kicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 max-w-md text-2xl md:text-3xl",
									children: t.bureauWidget.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-md text-sm leading-relaxed text-white/75",
									children: t.bureauWidget.body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-6 text-xs uppercase tracking-[0.16em]",
									children: [t.bureauWidget.cta, " →"]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/lab",
					className: "relative min-h-[420px] overflow-hidden bg-paper",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/lab.jpg",
							alt: "",
							className: "absolute inset-0 size-full object-cover opacity-80"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg/55" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex h-full min-h-[420px] flex-col justify-end p-8 md:p-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.2em] text-gold",
									children: t.labWidget.kicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 max-w-md font-serif text-3xl",
									children: t.labWidget.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-md text-sm leading-relaxed text-muted",
									children: t.labWidget.body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-6 text-xs uppercase tracking-[0.16em]",
									children: [t.labWidget.cta, " →"]
								})
							]
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { Home as component };
