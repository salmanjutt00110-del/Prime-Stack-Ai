import { createContext, useContext, useState, useCallback } from "react";
import { translations } from "@/i18n/translations";

const LanguageContext = createContext({
  lang: "en",
  changeLang: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("ptHub_lang") || "en";
    } catch {
      return "en";
    }
  });

  const changeLang = useCallback((code) => {
    setLang(code);
    try {
      localStorage.setItem("ptHub_lang", code);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const t = useCallback(
    (key) => {
      return translations[lang]?.[key] || translations.en?.[key] || key;
    },
    [lang]
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
