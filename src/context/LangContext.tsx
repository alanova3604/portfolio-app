"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "es";

interface LangContextType {
  lang: Lang;
  toggle: () => void;
  t: (en: string, es: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  toggle: () => {},
  t: (en) => en,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggle = () => setLang((l) => (l === "en" ? "es" : "en"));
  const t = (en: string, es: string) => (lang === "en" ? en : es);

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
