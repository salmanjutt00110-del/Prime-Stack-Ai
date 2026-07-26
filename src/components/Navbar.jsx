import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Search, Sun, Moon, Languages, Globe } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import { WHATSAPP_GENERAL } from "@/lib/whatsapp";
import DisclaimerBar from "@/components/DisclaimerBar";
import { useLanguageTheme } from "@/lib/LanguageThemeContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t, theme, toggleTheme, language, toggleLanguage, isDark, isUrdu } = useLanguageTheme();

  const LINKS = [
    { label: t('nav_home', 'Home'), href: "#home" },
    { label: t('nav_products', 'Products'), href: "#products" },
    { label: t('nav_services', 'Services'), href: "#agency-services" },
    { label: t('nav_meta_ads', 'Meta Ads'), href: "#meta-ads" },
    { label: t('nav_about', 'About'), href: "#about" },
    { label: t('nav_reviews', 'Reviews'), href: "/reviews", route: true },
    { label: t('nav_faq', 'FAQ'), href: "#faq" },
    { label: t('nav_contact', 'Contact'), href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    setOpen(false);
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNav = (e, link) => {
    e.preventDefault();
    setOpen(false);

    if (link.route) {
      navigate(link.href);
      return;
    }

    if (location.pathname === "/") {
      const el = document.querySelector(link.href);
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      } else if (link.href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      navigate("/" + link.href);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
        style={{
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          background: isDark ? "rgba(5, 5, 5, 0.88)" : "rgba(255, 255, 255, 0.92)",
          borderBottom: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
          boxShadow: isDark ? "none" : "0 4px 20px rgba(0,0,0,0.03)"
        }}
      >
        <nav 
          className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between transition-all duration-500"
          style={{ height: scrolled ? 54 : 64 }}
        >
          <a href="/" onClick={handleLogoClick} className="flex items-center gap-2.5 group min-h-[44px]">
            <Logo size={scrolled ? 32 : 36} />
            <span
              className={`font-display font-semibold tracking-tight transition-all flex items-center gap-1.5 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
              style={{ fontSize: scrolled ? 16 : 17 }}
            >
              Prime{" "}
              <span className="ps-grad-text bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 bg-clip-text text-transparent font-bold">
                Tools Hub
              </span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.route ? l.href : l.href}
                onClick={(e) => handleNav(e, l)}
                className={`text-sm font-medium transition-colors duration-300 relative group py-3 px-1 min-h-[44px] flex items-center ${
                  isDark ? "text-white/85 hover:text-white" : "text-slate-700 hover:text-slate-950"
                }`}
              >
                {l.label}
                <span className="absolute bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-500 to-pink-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-xs font-semibold transition-all duration-300 min-h-[40px] border shadow-sm ${
                isDark
                  ? "bg-white/10 hover:bg-white/15 border-white/15 text-white"
                  : "bg-slate-100 hover:bg-slate-200 border-slate-300/80 text-slate-800"
              }`}
              title="Change Language"
              aria-label="Toggle language between English and Roman Urdu"
            >
              <Globe size={14} className="text-violet-500 shrink-0" />
              <span className="font-bold">{isUrdu ? "🇵🇰 Roman Urdu" : "🇬🇧 ENG"}</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-xs font-semibold transition-all duration-300 min-h-[40px] border shadow-sm ${
                isDark
                  ? "bg-white/10 hover:bg-white/15 border-white/15 text-amber-300"
                  : "bg-slate-100 hover:bg-slate-200 border-slate-300/80 text-violet-700"
              }`}
              title="Toggle Light / Dark Theme"
              aria-label="Toggle light or dark theme"
            >
              {isDark ? (
                <>
                  <Sun size={14} className="text-amber-400 shrink-0" />
                  <span className="hidden sm:inline font-medium text-amber-200">Light</span>
                </>
              ) : (
                <>
                  <Moon size={14} className="text-violet-600 shrink-0" />
                  <span className="hidden sm:inline font-medium text-violet-900">Dark</span>
                </>
              )}
            </button>

            {/* Search Button */}
            <button
              onClick={(e) => handleNav(e, { href: "#products", route: false })}
              className={`hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold border transition-all min-h-[40px] ${
                isDark
                  ? "text-white/90 hover:text-white border-white/15 hover:bg-white/10"
                  : "text-slate-700 hover:text-slate-900 border-slate-300 hover:bg-slate-100"
              }`}
              aria-label="Search products catalog"
            >
              <Search size={14} />
              {t('nav_search', 'Search')}
            </button>

            {/* WhatsApp Contact */}
            <a
              href={WHATSAPP_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="keep-white hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-lg min-h-[40px]"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)", boxShadow: "0 4px 20px rgba(37,211,102,0.25)" }}
            >
              <MessageCircle size={15} />
              {t('nav_whatsapp', 'WhatsApp')}
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setOpen((v) => !v)}
              className={`lg:hidden p-2 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl border ${
                isDark
                  ? "text-white bg-white/5 border-white/10"
                  : "text-slate-900 bg-slate-100 border-slate-300"
              }`}
              aria-label="Toggle menu navigation"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden transition-all"
              style={{
                background: isDark ? "rgba(5,5,5,0.96)" : "rgba(255,255,255,0.98)",
                backdropFilter: "blur(24px)",
                borderBottom: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {LINKS.map((l) => (
                  <a
                    key={l.label}
                    href={l.route ? l.href : l.href}
                    onClick={(e) => handleNav(e, l)}
                    className={`py-3 border-b text-sm font-semibold min-h-[44px] flex items-center justify-between ${
                      isDark 
                        ? "text-white/90 hover:text-white border-white/5" 
                        : "text-slate-800 hover:text-slate-950 border-slate-100"
                    }`}
                  >
                    <span>{l.label}</span>
                  </a>
                ))}

                {/* Mobile controls for Language & Theme */}
                <div className="mt-3 grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                  <button
                    onClick={toggleLanguage}
                    className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold border ${
                      isDark ? "bg-white/10 text-white border-white/15" : "bg-slate-100 text-slate-900 border-slate-300"
                    }`}
                  >
                    <Globe size={14} className="text-violet-500" />
                    <span>{isUrdu ? "🇵🇰 Roman Urdu" : "🇬🇧 English"}</span>
                  </button>

                  <button
                    onClick={toggleTheme}
                    className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold border ${
                      isDark ? "bg-white/10 text-amber-300 border-white/15" : "bg-slate-100 text-violet-700 border-slate-300"
                    }`}
                  >
                    {isDark ? <Sun size={14} className="text-amber-400" /> : <Moon size={14} className="text-violet-600" />}
                    <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
                  </button>
                </div>

                <a
                  href={WHATSAPP_GENERAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="keep-white mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white min-h-[44px]"
                  style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
                >
                  <MessageCircle size={16} />
                  {t('nav_whatsapp', 'WhatsApp Support')}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      <DisclaimerBar />
    </>
  );
}