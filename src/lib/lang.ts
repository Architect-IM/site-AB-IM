import { create } from "zustand";

export type Lang = "ru" | "en";
export type Site = "irina" | "bureau" | "lab";

type LangState = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

export const useLang = create<LangState>((set) => ({
  lang: "ru",
  setLang: (lang) => set({ lang }),
}));
