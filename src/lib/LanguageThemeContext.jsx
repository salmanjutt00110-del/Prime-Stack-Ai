import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageThemeContext = createContext();

export function LanguageThemeProvider({ children }) {
  // Initialize theme: check localStorage or default to 'dark'
  const [theme, setThemeState] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('ps_theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
    }
    return 'dark';
  });

  // Initialize language: check localStorage or default to 'en'
  const [language, setLanguageState] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('ps_lang');
      if (savedLang === 'ur' || savedLang === 'en') {
        return savedLang;
      }
    }
    return 'en';
  });

  // Apply theme to document elements
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
      body.classList.remove('dark');
      body.classList.add('light');
      body.style.backgroundColor = '#f8fafc';
      body.style.color = '#0f172a';
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
      body.classList.remove('light');
      body.classList.add('dark');
      body.style.backgroundColor = '#050505';
      body.style.color = '#f8fafc';
    }

    localStorage.setItem('ps_theme', theme);
  }, [theme]);

  // Apply language setting
  useEffect(() => {
    localStorage.setItem('ps_lang', language);
  }, [language]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setTheme = (newTheme) => {
    if (newTheme === 'dark' || newTheme === 'light') {
      setThemeState(newTheme);
    }
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'ur' : 'en'));
  };

  const setLanguage = (newLang) => {
    if (newLang === 'en' || newLang === 'ur') {
      setLanguageState(newLang);
    }
  };

  const t = (key, fallback = '') => {
    const langDict = translations[language] || translations.en;
    if (langDict && langDict[key] !== undefined) {
      return langDict[key];
    }
    const defaultDict = translations.en;
    if (defaultDict && defaultDict[key] !== undefined) {
      return defaultDict[key];
    }
    return fallback || key;
  };

  const value = {
    theme,
    toggleTheme,
    setTheme,
    isDark: theme === 'dark',
    language,
    toggleLanguage,
    setLanguage,
    isUrdu: language === 'ur',
    t
  };

  return (
    <LanguageThemeContext.Provider value={value}>
      {children}
    </LanguageThemeContext.Provider>
  );
}

export function useLanguageTheme() {
  const context = useContext(LanguageThemeContext);
  if (!context) {
    throw new Error('useLanguageTheme must be used within a LanguageThemeProvider');
  }
  return context;
}

export function useTranslation() {
  const { t, language, isUrdu } = useLanguageTheme();
  return { t, language, isUrdu };
}

export function useTheme() {
  const { theme, toggleTheme, setTheme, isDark } = useLanguageTheme();
  return { theme, toggleTheme, setTheme, isDark };
}
