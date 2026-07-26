import { MessageCircle } from "lucide-react";
import Logo from "@/components/Logo";
import { WHATSAPP_GENERAL, WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { useLanguageTheme } from "@/lib/LanguageThemeContext";

export default function Footer() {
  const { t, isDark } = useLanguageTheme();

  const handleNavClick = (e, targetId) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      const el = document.querySelector(targetId);
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      } else if (targetId === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <footer className={`relative pt-16 pb-8 px-4 sm:px-6 border-t ${
      isDark ? "bg-[#030305] border-white/8 text-white" : "bg-slate-100 border-slate-200 text-slate-900"
    }`}>
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center gap-5">
          <div className="flex items-center gap-2.5">
            <Logo size={40} />
            <span className={`font-display font-semibold text-lg ${isDark ? "text-white" : "text-slate-900"}`}>
              Prime{" "}
              <span className="ps-grad-text bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 bg-clip-text text-transparent font-bold">
                Tools Hub
              </span>
            </span>
          </div>
          <p className={`text-sm max-w-md font-body ${isDark ? "text-white/75" : "text-slate-600"}`}>
            {t('footer_desc', 'Pakistan\'s #1 digital tools and AI subscription marketplace.')}
          </p>
          <a
            href={WHATSAPP_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="keep-white flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-[1.03] min-h-[44px]"
            style={{ background: "linear-gradient(135deg, #25D366, #128C7E)", boxShadow: "0 4px 15px rgba(37,211,102,0.25)" }}
          >
            <MessageCircle size={15} />
            +{WHATSAPP_NUMBER}
          </a>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4">
            <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className={`text-sm transition-colors py-2 px-2 min-h-[44px] flex items-center ${isDark ? "text-white/80 hover:text-white" : "text-slate-700 hover:text-slate-950"}`}>{t('nav_home', 'Home')}</a>
            <a href="#products" onClick={(e) => handleNavClick(e, "#products")} className={`text-sm transition-colors py-2 px-2 min-h-[44px] flex items-center ${isDark ? "text-white/80 hover:text-white" : "text-slate-700 hover:text-slate-950"}`}>{t('nav_products', 'Products')}</a>
            <a href="#meta-ads" onClick={(e) => handleNavClick(e, "#meta-ads")} className={`text-sm transition-colors py-2 px-2 min-h-[44px] flex items-center ${isDark ? "text-white/80 hover:text-white" : "text-slate-700 hover:text-slate-950"}`}>{t('nav_meta_ads', 'Meta Ads')}</a>
            <a href="https://www.amirads.pro/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 text-sm font-semibold transition-colors py-2 px-2 min-h-[44px] flex items-center gap-1">AmirAds ↗</a>
            <a href="#about" onClick={(e) => handleNavClick(e, "#about")} className={`text-sm transition-colors py-2 px-2 min-h-[44px] flex items-center ${isDark ? "text-white/80 hover:text-white" : "text-slate-700 hover:text-slate-950"}`}>{t('nav_about', 'About')}</a>
            <a href="#faq" onClick={(e) => handleNavClick(e, "#faq")} className={`text-sm transition-colors py-2 px-2 min-h-[44px] flex items-center ${isDark ? "text-white/80 hover:text-white" : "text-slate-700 hover:text-slate-950"}`}>{t('nav_faq', 'FAQ')}</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className={`text-sm transition-colors py-2 px-2 min-h-[44px] flex items-center ${isDark ? "text-white/80 hover:text-white" : "text-slate-700 hover:text-slate-950"}`}>{t('nav_contact', 'Contact')}</a>
          </div>
        </div>

        {/* Disclaimer & Bulk Card */}
        <div className={`mt-10 p-5 sm:p-6 rounded-2xl border backdrop-blur-md max-w-3xl mx-auto text-left relative overflow-hidden shadow-sm ${
          isDark 
            ? "border-amber-500/25 bg-white/[0.02]" 
            : "border-amber-300 bg-white"
        }`}>
          <div className="flex items-center gap-2 mb-2.5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400/75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            <h4 className="font-display font-bold text-xs text-amber-500 uppercase tracking-widest">
              🎉 Bulk Purchase Offer & Important Notice
            </h4>
          </div>
          <p className={`text-xs sm:text-[13px] leading-relaxed font-medium mb-3 ${isDark ? "text-white/90" : "text-slate-800"}`}>
            Customers purchasing 5 or more products are eligible for a special bulk discount. Please contact us on WhatsApp for custom bulk pricing and quotations.
          </p>
          <p className={`text-xs sm:text-[12px] leading-relaxed font-normal border-t pt-2.5 ${isDark ? "text-white/70 border-white/8" : "text-slate-500 border-slate-200"}`}>
            Prices, duration, and availability are subject to market rates and platform updates. Please verify current prices on WhatsApp prior to order placement.
          </p>
        </div>

        <div className={`mt-10 pt-6 border-t text-center ${isDark ? "border-white/8" : "border-slate-200"}`}>
          <p className={`text-xs font-semibold ${isDark ? "text-white/65" : "text-slate-500"}`}>
            © {new Date().getFullYear()} Prime Tools Hub (<span>PrimeTools.store</span>). {t('footer_rights', 'All rights reserved.')}
          </p>
        </div>
      </div>
    </footer>
  );
}