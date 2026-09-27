import { createContext, useContext, useState, useCallback } from "react";
import { translations } from "@/i18n/translations";

const LanguageContext = createContext({
  lang: "en",
  changeLang: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }) {
  const lang = "en";

  const changeLang = useCallback(() => {
    // English-only mode enforced
  }, []);

  const t = useCallback(
    (key) => {
      return translations.en?.[key] || key;
    },
    []
  );

  return (
    <LanguageContext.Provider value={{ lang, changeLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
