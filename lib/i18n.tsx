"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "fa" | "en";

type LanguageContextValue = {
  lang: Lang;
  dir: "rtl" | "ltr";
  toggle: () => void;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fa");

  useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? (window.localStorage.getItem("parmis-lang") as Lang | null)
        : null;
    if (stored === "fa" || stored === "en") {
      setLangState(stored);
    }
  }, []);

  useEffect(() => {
    const dir = lang === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    document.documentElement.dataset.lang = lang;
    if (typeof window !== "undefined") {
      window.localStorage.setItem("parmis-lang", lang);
    }
  }, [lang]);

  const setLang = (next: Lang) => setLangState(next);
  const toggle = () => setLangState((prev) => (prev === "fa" ? "en" : "fa"));

  return (
    <LanguageContext.Provider
      value={{ lang, dir: lang === "fa" ? "rtl" : "ltr", toggle, setLang }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
