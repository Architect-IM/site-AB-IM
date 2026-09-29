import { i as __toESM } from "../_runtime.mjs";
import { _ as Link, y as require_jsx_runtime, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-chrome-CcbFd0y1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var legal = {
	entity: "ООО «Ваш Проект»",
	inn: "3327121062",
	ogrn: "1143327001916",
	address: "600000, г. Владимир, ул. Георгиевская, д. 3, помещ. 1",
	email: "hello@im-architect.ru",
	phone800: "8 800 600-41-67",
	phoneMobile: "+7 915 768-04-60"
};
var irina = {
	ru: {
		brand: "Ирина Михейкина",
		nav: [
			{
				label: "Направления",
				to: "/napravleniya"
			},
			{
				label: "Портфолио",
				to: "/portfolio"
			},
			{
				label: "Бюро",
				to: "/bureau"
			},
			{
				label: "Лаборатория",
				to: "/lab"
			},
			{
				label: "Контакт",
				to: "/kontakt"
			}
		],
		homeCta: "Смотреть работы",
		manifestoShort: "Современная архитектура, всегда глубоко в контексте задачи. Сильное проектное бюро и комплексная экспертиза.",
		manifestoLong: "Я создаю современную архитектуру, всегда глубоко в контексте задачи, всегда многослойную и осмысленную. За каждым проектом стоит моё проектное бюро, комплексная экспертиза и умение решать задачи любой сложности на своей земле. Наши проекты живут, работают и помогают заказчикам достигать их целей — уверенно и надолго.",
		heroKicker: "Архитектор из Владимира",
		directionsTitle: "Направления",
		portfolioTitle: "Портфолио",
		inWorkTitle: "В работе",
		bureauWidget: {
			kicker: "Бюро",
			title: "Полный цикл: от замысла до площадки",
			body: "Инженерная, градостроительная, экономическая и сервисная экспертиза. Своя команда. Мы ведём проект как систему, а не как набор разделов.",
			cta: "Войти в бюро"
		},
		labWidget: {
			kicker: "Лаборатория",
			title: "Архитектурная лаборатория «Владимир»",
			body: "Независимый исследовательский проект. Изучаем владимирскую архитектурную школу и ищем, как её код работает в современных инженерных условиях.",
			cta: "К лаборатории"
		},
		footerNote: "Стенд. Фото синтетические — заменим на авторские.",
		contact: "Контакт",
		legalPage: "Реквизиты",
		demo: "Демо",
		viewAll: "Все работы",
		more: "Подробнее"
	},
	en: {
		brand: "Irina Mikheykina",
		nav: [
			{
				label: "Directions",
				to: "/napravleniya"
			},
			{
				label: "Portfolio",
				to: "/portfolio"
			},
			{
				label: "Bureau",
				to: "/bureau"
			},
			{
				label: "Laboratory",
				to: "/lab"
			},
			{
				label: "Contact",
				to: "/kontakt"
			}
		],
		homeCta: "See work",
		manifestoShort: "Contemporary architecture, always deep in the brief. A strong design bureau and complete expertise.",
		manifestoLong: "I make contemporary architecture that is always deep in the brief — layered and considered. Behind every project stands my design bureau, complete expertise, and the ability to solve work of any complexity on our own ground.",
		heroKicker: "Architect from Vladimir",
		directionsTitle: "Directions",
		portfolioTitle: "Portfolio",
		inWorkTitle: "In progress",
		bureauWidget: {
			kicker: "Bureau",
			title: "Full cycle: from idea to site",
			body: "Engineering, planning law, economy and service — one team. We run a project as a system, not a stack of folders.",
			cta: "Enter the bureau"
		},
		labWidget: {
			kicker: "Laboratory",
			title: "Vladimir Architecture Laboratory",
			body: "An independent research project on the Vladimir school — how its code can live with contemporary engineering.",
			cta: "Visit the laboratory"
		},
		footerNote: "Prototype. Photographs are synthetic placeholders.",
		contact: "Contact",
		legalPage: "Legal",
		demo: "Demo",
		viewAll: "All work",
		more: "Read more"
	}
};
var bureauCopy = {
	ru: {
		brand: "Бюро",
		brandFull: "Архитектурное бюро Ирины Михейкиной",
		nav: [
			{
				label: "Стадии",
				to: "/bureau/stadii"
			},
			{
				label: "Проекты",
				to: "/portfolio"
			},
			{
				label: "Подход",
				to: "/bureau"
			},
			{
				label: "Контакт",
				to: "/kontakt"
			}
		],
		manifesto: "Мы соединяем инженерную, градостроительно-правовую, экономическую и сервисную экспертизу с авторским подходом архитектора Ирины Михейкиной и гарантируем своевременное, точное и элегантное решение задач.",
		manifestoShort: "Современная архитектура, всегда глубоко в контексте задачи. Сильное проектное бюро и комплексная экспертиза.",
		hero: "Полный цикл. От замысла до площадки.",
		stagesTitle: "Стадии работы",
		guarantee: "100% положительных заключений экспертизы по нашим проектам.",
		back: "К архитектору"
	},
	en: {
		brand: "Bureau",
		brandFull: "Irina Mikheykina Architecture Bureau",
		nav: [
			{
				label: "Stages",
				to: "/bureau/stadii"
			},
			{
				label: "Projects",
				to: "/portfolio"
			},
			{
				label: "Approach",
				to: "/bureau"
			},
			{
				label: "Contact",
				to: "/kontakt"
			}
		],
		manifesto: "We join engineering, planning law, economy and service with Irina Mikheykina’s authorship — timely, precise, elegant.",
		manifestoShort: "Contemporary architecture, always deep in the brief. A strong bureau and complete expertise.",
		hero: "Full cycle. From idea to site.",
		stagesTitle: "Stages of work",
		guarantee: "Every project of ours has received a positive expert review.",
		back: "To the architect"
	}
};
var labCopy = {
	ru: {
		brand: "Лаборатория",
		brandFull: "Архитектурная лаборатория «Владимир»",
		nav: [
			{
				label: "Исследования",
				to: "/lab"
			},
			{
				label: "Код",
				to: "/lab"
			},
			{
				label: "Сообщество",
				to: "/lab"
			}
		],
		mission: "Раскрыть и сохранить уникальный архитектурно-пространственный код Владимирской земли и сделать его живым ресурсом развития региона.",
		body: "Лаборатория учреждена на общественных началах. Высший орган — учредительный совет, открытый к новым участникам. Сейчас в совете — Архитектурное бюро Ирины Михейкиной и проектная лаборатория ZaryaLab.",
		zarya: "Участник: ZaryaLab",
		back: "К архитектору"
	},
	en: {
		brand: "Laboratory",
		brandFull: "Vladimir Architecture Laboratory",
		nav: [
			{
				label: "Research",
				to: "/lab"
			},
			{
				label: "Code",
				to: "/lab"
			},
			{
				label: "Community",
				to: "/lab"
			}
		],
		mission: "To reveal and keep the spatial code of the Vladimir land — and make it a living resource for the region.",
		body: "The laboratory is a public research project. Its council is open to new members. Current founders: Irina Mikheykina Architecture Bureau and ZaryaLab.",
		zarya: "Partner: ZaryaLab",
		back: "To the architect"
	}
};
var directions = [
	{
		slug: "vladimir",
		image: "/images/territory.jpg",
		ru: {
			group: "Владимирский контекст",
			title: "Мастер-план территории, идеология, облик",
			body: "Место — не фон. Исследую школу, раскрываю потенциал земли, собираю решение, с которым можно выходить на защиту."
		},
		en: {
			group: "Vladimir context",
			title: "Territory, ideology, appearance",
			body: "Place is not a backdrop. I read the school, the land, and assemble a case that can be defended."
		}
	},
	{
		slug: "hospitality",
		image: "/images/resort.jpg",
		ru: {
			group: "Живое гостеприимство",
			title: "Туристические комплексы, которые живут",
			body: "Берусь, если вижу, как объект будет держать гостя и повторный спрос. Архитектура, экономика и опыт — одна система."
		},
		en: {
			group: "Living hospitality",
			title: "Resorts that keep working",
			body: "I take a brief only if the place can hold a guest and bring them back. Architecture, economy, experience — one system."
		}
	},
	{
		slug: "houses",
		image: "/images/house.jpg",
		ru: {
			group: "Частные владения",
			title: "Дома и территории",
			body: "Забота о человеке, коды места, технологическая свобода. Контент в работе — здесь демо."
		},
		en: {
			group: "Private estates",
			title: "Houses and grounds",
			body: "Care for the person, codes of place, technical freedom. Content pending — demo for now."
		}
	},
	{
		slug: "temples",
		image: "/images/chapel.jpg",
		ru: {
			group: "Храмовая архитектура",
			title: "Храм как место и конструкция",
			body: "Раздел зарезервирован. Пока демо-кадр — заменим авторским."
		},
		en: {
			group: "Sacred architecture",
			title: "Temple as place and structure",
			body: "Reserved. A demo frame until the author’s photographs arrive."
		}
	}
];
var stages = [
	{
		slug: "pre",
		ru: {
			title: "Предпроект",
			body: "Анализ, ТЗ, эскиз, АГО как комплект, объёмно-планировочные решения. Ясность до инерции проекта."
		},
		en: {
			title: "Pre-design",
			body: "Audit, brief, sketch, appearance pack, spatial plan. Clarity before the project gains inertia."
		}
	},
	{
		slug: "design",
		ru: {
			title: "Проектирование",
			body: "Стадии П и Р как единая система. 100% положительных заключений экспертизы."
		},
		en: {
			title: "Design",
			body: "Stages P and R as one system. Every file of ours has passed expert review."
		}
	},
	{
		slug: "service",
		ru: {
			title: "Сервис",
			body: "Обследование, ТЭО, архитектурно-строительный консалтинг бюро."
		},
		en: {
			title: "Service",
			body: "Survey, feasibility, construction consulting of the bureau."
		}
	},
	{
		slug: "build",
		ru: {
			title: "Стройка",
			body: "Техзаказчик, авторский надзор, управление строительством."
		},
		en: {
			title: "Construction",
			body: "Employer’s agent, author’s supervision, construction management."
		}
	},
	{
		slug: "business",
		ru: {
			title: "Экономика объекта",
			body: "Бренд, финансовая модель, коммуникационная стратегия."
		},
		en: {
			title: "Project economy",
			body: "Brand, financial model, communications."
		}
	}
];
var projects = [
	{
		slug: "usadba",
		image: "/images/mansion.jpg",
		tag: {
			ru: "Частный дом",
			en: "House"
		},
		status: "done",
		ru: {
			title: "Дом у бора",
			subtitle: "Современный особняк в сосновом крае",
			task: "Собрать дом, который держит горизонт участка и не спорит с лесом.",
			view: "Горизонталь важнее фасада. Камень и стекло — чтобы бор читался сквозь дом, а не вокруг него.",
			solution: "Консоль кровли, двор на гравии, одна олива как якорь двора. Инженерия спрятана в толщину плиты.",
			result: "Тихий объём. Дом работает как рама для света, а не как объект «на показ».",
			shows: "Умение остановиться. Авторский жест без декоративного шума."
		},
		en: {
			title: "House by the pine",
			subtitle: "A contemporary mansion in the forest edge",
			task: "A house that holds the horizon and does not argue with the trees.",
			view: "The horizontal matters more than the façade. Stone and glass so the forest reads through the house.",
			solution: "A cantilevered roof, a gravel court, one tree as the court’s anchor.",
			result: "A quiet volume. The house is a frame for light, not a display.",
			shows: "Knowing when to stop. Authorship without decorative noise."
		}
	},
	{
		slug: "complex",
		image: "/images/resort.jpg",
		tag: {
			ru: "Гостеприимство",
			en: "Hospitality"
		},
		status: "done",
		ru: {
			title: "Двор на склоне",
			subtitle: "Туристический комплекс",
			task: "Сделать место, куда возвращаются, а не локацию для открытия.",
			view: "Гость должен понять двор телом: тень, гравий, запах дерева. Архитектура — сценарий дня, не картинка.",
			solution: "Низкие павильоны камня и дерева вокруг двора. Маршруты без парадного портала.",
			result: "Живая терраса. Комплекс держит людей днём, а не только на фотографии заселения.",
			shows: "Овервью: архитектура, экономика и опыт гостя в одном жесте."
		},
		en: {
			title: "Court on the slope",
			subtitle: "A tourist complex",
			task: "A place people return to — not a venue for an opening.",
			view: "The guest should understand the court with the body: shade, gravel, timber.",
			solution: "Low stone and timber pavilions around a court. No ceremonial portal.",
			result: "A living terrace. The complex holds people in daylight.",
			shows: "Overview: architecture, economy and guest experience in one gesture."
		}
	},
	{
		slug: "lodge",
		image: "/images/lodge.jpg",
		tag: {
			ru: "Гостеприимство",
			en: "Hospitality"
		},
		status: "work",
		ru: {
			title: "Ночной сруб",
			subtitle: "Спа-лодж. В работе",
			task: "Тихий объём в лесу, который светится изнутри, не выжигая кроны.",
			view: "Ночь — часть продукта. Свет должен быть гостеприимным, не рекламным.",
			solution: "Большое стекло, тёплая глубина, скрытые карнизы.",
			result: "Проект в работе. Кадры — демо.",
			shows: "Дисциплина света."
		},
		en: {
			title: "Night lodge",
			subtitle: "Spa lodge. In progress",
			task: "A quiet forest volume that glows without burning the canopy.",
			view: "Night is part of the product. Light should host, not advertise.",
			solution: "Large glass, warm depth, hidden cornices.",
			result: "In progress. Frames are demo.",
			shows: "Discipline of light."
		}
	},
	{
		slug: "chapel",
		image: "/images/chapel.jpg",
		tag: {
			ru: "Храм",
			en: "Sacred"
		},
		status: "done",
		ru: {
			title: "Белая щель",
			subtitle: "Часовня. Демо",
			task: "Тихий объём, который держит вертикаль света.",
			view: "Священное не нуждается в цитате купола. Нужна точность просвета.",
			solution: "Белый камень, дерево, одно высокое окно.",
			result: "Демо-кадр. Ждёт авторский материал.",
			shows: "Сдержанность в теме, которую легко перегрузить."
		},
		en: {
			title: "White slit",
			subtitle: "Chapel. Demo",
			task: "A quiet volume that holds a vertical of light.",
			view: "The sacred does not need a quoted dome. It needs a precise slit.",
			solution: "White stone, timber, one tall window.",
			result: "Demo frame until author’s photographs arrive.",
			shows: "Restraint in a brief that is easy to overload."
		}
	}
];
var useLang = create((set) => ({
	lang: "ru",
	setLang: (lang) => set({ lang })
}));
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function SiteChrome({ site, children, overlay }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"data-site": site,
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				site,
				overlay
			}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, { site })
		]
	});
}
function Header({ site, overlay }) {
	const { lang, setLang } = useLang();
	const [open, setOpen] = (0, import_react.useState)(false);
	const copy = irina[lang];
	const bureau = bureauCopy[lang];
	const lab = labCopy[lang];
	const brand = site === "irina" ? copy.brand : site === "bureau" ? bureau.brandFull : lab.brandFull;
	const brandTo = site === "irina" ? "/" : site === "bureau" ? "/bureau" : "/lab";
	const links = site === "irina" ? copy.nav : site === "bureau" ? bureau.nav : lab.nav;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("z-40 w-full", overlay ? "absolute inset-x-0 top-0 bg-ink/40 text-white" : site === "bureau" ? "bg-ink text-white" : site === "lab" ? "border-b border-line bg-paper text-fg" : "bg-bg text-fg"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: brandTo,
					className: cn("max-w-[58%] text-left tracking-wide", site === "lab" ? "font-serif text-lg leading-tight" : "text-xs font-medium uppercase"),
					children: brand
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-6 lg:flex",
					children: [
						links.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: "text-xs font-medium uppercase tracking-[0.14em] opacity-80 transition hover:opacity-100",
							children: item.label
						}, item.to + item.label)),
						site !== "irina" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "text-xs font-medium uppercase tracking-[0.14em] text-gold",
							children: site === "bureau" ? bureau.back : lab.back
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangSwitch, {
							lang,
							setLang
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex size-11 items-center justify-center lg:hidden",
					"aria-label": "Menu",
					onClick: () => setOpen(true),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-50 bg-ink text-white lg:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs uppercase tracking-[0.14em]",
					children: brand
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex size-11 items-center justify-center",
					"aria-label": "Close",
					onClick: () => setOpen(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 px-5 py-8",
				children: [
					links.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "py-3 text-lg",
						onClick: () => setOpen(false),
						children: item.label
					}, item.to + item.label)),
					site !== "irina" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "py-3 text-gold",
						onClick: () => setOpen(false),
						children: site === "bureau" ? bureau.back : lab.back
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangSwitch, {
							lang,
							setLang
						})
					})
				]
			})]
		}) : null]
	});
}
function LangSwitch({ lang, setLang }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: cn("opacity-50", lang === "ru" && "opacity-100"),
				onClick: () => setLang("ru"),
				children: "RU"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-gold",
				children: "|"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: cn("opacity-50", lang === "en" && "opacity-100"),
				onClick: () => setLang("en"),
				"data-lang": "en",
				children: "EN"
			})
		]
	});
}
function Footer({ site }) {
	const { lang } = useLang();
	const copy = irina[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-ink text-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.16em] text-gold",
					children: site === "irina" ? copy.brand : site === "bureau" ? bureauCopy[lang].brand : labCopy[lang].brand
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-sm text-sm leading-relaxed text-white/70",
					children: site === "irina" ? copy.manifestoShort : site === "bureau" ? bureauCopy[lang].manifestoShort : labCopy[lang].mission
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm leading-relaxed text-white/70",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: legal.address }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${legal.phone800.replace(/\s/g, "")}`,
								children: legal.phone800
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${legal.phoneMobile.replace(/\s/g, "")}`,
							children: legal.phoneMobile
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${legal.email}`,
								children: legal.email
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm leading-relaxed text-white/55",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: legal.entity }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["ИНН ", legal.inn] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["ОГРН ", legal.ogrn] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/legal",
								className: "text-gold",
								children: [copy.legalPage, " →"]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-xs tracking-wide text-white/40",
							children: copy.footerNote
						})
					]
				})
			]
		})
	});
}
//#endregion
export { irina as a, projects as c, directions as i, stages as l, bureauCopy as n, labCopy as o, cn as r, legal as s, SiteChrome as t, useLang as u };
