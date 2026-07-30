import { useState } from "react";
import { MessageCircle, X, Sparkles } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  const { t } = useLanguage();

  if (!visible) return null;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello! I saw the bulk purchase offer on Prime Tools Hub and want to order."
  )}`;

  return (
    <div className="announcement-bar relative z-40 w-full mt-[54px] sm:mt-[64px] bg-gradient-to-r from-violet-950 via-indigo-900 to-slate-950 text-white py-2 px-3 sm:px-4 text-xs font-semibold flex items-center justify-between border-b border-white/10 shadow-md">
      <div className="mx-auto flex flex-wrap items-center justify-center gap-2 text-center">
        <span className="bulk-badge inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-extrabold text-[10px] uppercase tracking-wider shrink-0">
          <Sparkles size={11} className="animate-pulse text-amber-400" /> {t("announcement_bulk")}
        </span>
        <span className="announcement-text text-slate-200 font-medium">
          {t("announcement_text")}
        </span>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black px-2.5 py-0.5 rounded-full text-[11px] transition-transform hover:scale-105 shadow-sm ml-1"
        >
          <MessageCircle size={12} className="fill-white" />
          <span>{t("nav_whatsapp")}</span>
        </a>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="p-1 rounded-full hover:bg-white/10 transition-colors text-slate-400 hover:text-white cursor-pointer ml-2"
        aria-label="Close announcement bar"
      >
        <X size={14} />
      </button>
    </div>
  );
}
