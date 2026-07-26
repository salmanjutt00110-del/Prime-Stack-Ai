import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageThemeContext = createContext();

const safeGetItem = (key, fallback) => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const val = window.localStorage.getItem(key);
      if (val !== null && val !== undefined) return val;
    }
  } catch (e) {
    console.warn(`localStorage getItem failed for ${key}:`, e);
  }
  return fallback;
};

const safeSetItem = (key, val) => {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(key, val);
    }
  } catch (e) {
    console.warn(`localStorage setItem failed for ${key}:`, e);
  }
};

export function LanguageThemeProvider({ children }) {
  // Initialize theme safely: check localStorage or default to 'dark'
  const [theme, setThemeState] = useState(() => {
    const savedTheme = safeGetItem('ps_theme', 'dark');
    return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';
  });

  // Initialize language safely: check localStorage or default to 'en'
  const [language, setLanguageState] = useState(() => {
    const savedLang = safeGetItem('ps_lang', 'en');
    return savedLang === 'ur' || savedLang === 'en' ? savedLang : 'en';
  });

  // Apply theme to document elements
  useEffect(() => {
    try {
      const root = document.documentElement;
      const body = document.body;

      if (!root || !body) return;

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
    } catch (e) {
      console.warn('Error applying theme classes:', e);
    }

    safeSetItem('ps_theme', theme);
  }, [theme]);

  // Apply language setting
  useEffect(() => {
    safeSetItem('ps_lang', language);
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
