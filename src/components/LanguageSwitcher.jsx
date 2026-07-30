import { useLanguage } from "@/context/LanguageContext";
import { supportedLanguages } from "@/i18n/translations";

export default function LanguageSwitcher() {
  const { lang, changeLang } = useLanguage();

  return (
    <div className="inline-flex items-center p-0.5 rounded-xl bg-white/[0.08] border border-white/15 backdrop-blur-md select-none shrink-0">
      {supportedLanguages.map((l) => {
        const isActive = lang === l.code;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => changeLang(l.code)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-black transition-all cursor-pointer ${
              isActive
                ? "bg-indigo-600 text-white shadow-sm font-extrabold"
                : "text-slate-400 hover:text-white"
            }`}
            title={l.label}
          >
            <span>{l.flag}</span>
            <span className="hidden sm:inline">{l.label}</span>
          </button>
        );
      })}
    </div>
  );
}
