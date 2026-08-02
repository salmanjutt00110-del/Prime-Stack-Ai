import { useEffect, useState } from "react";
import { 
  Menu, 
  X, 
  MessageCircle, 
  ShoppingBag, 
  Zap, 
  Search, 
  Sun, 
  Moon, 
  Home as HomeIcon, 
  Star, 
  HelpCircle, 
  PhoneCall, 
  ChevronRight,
  ShieldCheck,
  Compass
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import { WHATSAPP_NUMBER } from "@/data/products";
import DisclaimerBar from "@/components/DisclaimerBar";
import { scrollToSection } from "@/lib/scroll";
import CurrencySwitcher from "@/components/CurrencySwitcher";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

const DESKTOP_LINKS = [
  { labelKey: "nav_home", href: "#home" },
  { labelKey: "nav_tools", href: "#products" },
  { labelKey: "nav_reviews", href: "/reviews", route: true },
  { labelKey: "nav_faq", href: "#faq" },
  { labelKey: "nav_contact", href: "#contact" },
];

const MAIN_NAV_ITEMS = [
  { 
    labelKey: "nav_home", 
    defaultLabel: "Home", 
    desc: "Main Storefront & Catalog", 
    href: "#home", 
    icon: HomeIcon,
    accent: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-400"
  },
  { 
    labelKey: "nav_tools", 
    defaultLabel: "Products", 
    desc: "ChatGPT, Canva, Veo & More", 
    href: "#products", 
    icon: ShoppingBag,
    accent: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/30",
    text: "text-violet-400"
  },
  { 
    labelKey: "nav_reviews", 
    defaultLabel: "Reviews", 
    desc: "4.9/5 ⭐ Customer Feedback", 
    href: "/reviews", 
    route: true, 
    icon: Star,
    accent: "from-amber-500/20 to-yellow-500/10",
    border: "border-amber-500/30",
    text: "text-amber-400"
  },
];

const SUPPORT_NAV_ITEMS = [
  { 
    labelKey: "nav_faq", 
    defaultLabel: "FAQ", 
    desc: "Instant Answers & Ordering Info", 
    href: "#faq", 
    icon: HelpCircle,
    accent: "from-indigo-500/20 to-blue-500/10",
    border: "border-indigo-500/30",
    text: "text-indigo-400"
  },
  { 
    labelKey: "nav_contact", 
    defaultLabel: "Contact Us", 
    desc: "24/7 Instant WhatsApp Support", 
    href: "#contact", 
    icon: PhoneCall,
    accent: "from-rose-500/20 to-pink-500/10",
    border: "border-rose-500/30",
    text: "text-rose-400"
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("#home");
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return !document.documentElement.classList.contains("light-theme");
    }
    return true;
  });

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      if (!next) {
        document.documentElement.classList.add("light-theme");
        try { localStorage.setItem("ps-theme", "light"); } catch (_) {}
      } else {
        document.documentElement.classList.remove("light-theme");
        try { localStorage.setItem("ps-theme", "dark"); } catch (_) {}
      }
      return next;
    });
  };

  useEffect(() => {
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100 && !open) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }
      setScrolled(currentScrollY > 24);
      lastScrollY = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = [
      { id: "contact", hash: "#contact" },
      { id: "faq", hash: "#faq" },
      { id: "testimonials", hash: "#testimonials" },
      { id: "products", hash: "#products" },
      { id: "home", hash: "#home" },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(s.hash);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleLogoClick = (e) => {
    if (e) e.preventDefault();
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.history.pushState(null, "", "/");
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  const handleNav = (e, link) => {
    if (e) e.preventDefault();
    setOpen(false);

    if (link.route) {
      navigate(link.href);
      return;
    }

    if (location.pathname !== "/") {
      navigate("/" + link.href);
      setTimeout(() => scrollToSection(link.href), 100);
    } else {
      window.history.pushState(null, "", link.href);
      scrollToSection(link.href);
    }
  };

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    if (!searchQuery.trim()) return;
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection("#products");
        window.dispatchEvent(new CustomEvent("mobile-search", { detail: searchQuery.trim() }));
      }, 150);
    } else {
      scrollToSection("#products");
      window.dispatchEvent(new CustomEvent("mobile-search", { detail: searchQuery.trim() }));
    }
  };

  const whatsappNavUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Prime Tools Hub! I have a question about digital AI subscriptions."
  )}`;

  return (
    <>
      {/* HEADER TOP NAVBAR */}
      <header
        className={`navbar fixed top-0 inset-x-0 z-[1000] transition-transform duration-300 ${
          navHidden && !open ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div
          className="transition-all duration-300 border-b border-white/10"
          style={{
            background: scrolled ? "rgba(4, 5, 12, 0.96)" : "rgba(4, 5, 12, 0.88)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            boxShadow: scrolled ? "0 8px 32px rgba(0, 0, 0, 0.5), inset 0 -1px 0 rgba(255,255,255,0.08)" : "none",
          }}
        >
          <nav
            aria-label="Main navigation"
            className="mx-auto max-w-7xl px-3.5 sm:px-6 flex items-center justify-between transition-all duration-300 h-[64px]"
          >
            {/* LOGO (Always visible on left, perfectly aligned) */}
            <a
              href="/"
              onClick={handleLogoClick}
              className="flex items-center gap-2.5 group shrink-0 min-h-[44px] whitespace-nowrap"
            >
              <Logo size={scrolled ? 30 : 34} />
              <span className="font-display font-black tracking-tight text-white text-sm sm:text-base flex items-center gap-1">
                Prime <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-[#00ff88] bg-clip-text text-transparent font-black">Tools Hub</span>
              </span>
            </a>

            {/* DESKTOP NAV LINKS (Hidden on Mobile) */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-7 flex-1 justify-center">
              {DESKTOP_LINKS.map((l) => {
                const label = t(l.labelKey);
                const isActive = l.route ? location.pathname === l.href : activeSection === l.href;
                return (
                  <a
                    key={l.labelKey}
                    href={l.href}
                    onClick={(e) => handleNav(e, l)}
                    className={`text-xs xl:text-sm font-bold transition-colors duration-200 relative group py-2 px-1 min-h-[44px] flex items-center whitespace-nowrap ${
                      isActive ? "text-[#00ff88]" : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {label}
                    <span
                      className={`absolute bottom-1 left-0 h-0.5 bg-[#00ff88] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            {/* RIGHT SIDE ACTIONS */}
            <div className="flex items-center gap-2 shrink-0">
              {/* DESKTOP CONTROLS (Hidden on Mobile) */}
              <div className="hidden lg:flex items-center gap-2.5">
                <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold shrink-0">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  {t("nav_live")}
                </div>

                <LanguageSwitcher />
                <CurrencySwitcher />

                <a
                  href={whatsappNavUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 px-3 py-1.5 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all flex items-center gap-1.5 min-h-[38px] text-xs font-bold shrink-0"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle size={16} />
                  <span>{t("nav_whatsapp")}</span>
                </a>

                <a
                  href="#products"
                  onClick={(e) => handleNav(e, { href: "#products", route: false })}
                  className="px-3.5 py-1.5 rounded-xl font-display font-black text-xs text-slate-950 bg-[#00ff88] hover:bg-[#20ff95] transition-all hover:scale-105 shadow-[0_0_15px_rgba(0,255,136,0.4)] flex items-center gap-1.5 cursor-pointer min-h-[38px] shrink-0"
                >
                  <ShoppingBag size={14} />
                  <span>{t("nav_order")}</span>
                </a>
              </div>

              {/* MOBILE HAMBURGER MENU TRIGGER (Apple / Linear Glass Icon Button) */}
              <button
                onClick={() => setOpen((v) => !v)}
                className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-2xl border text-white bg-white/[0.06] hover:bg-white/[0.14] border-white/20 backdrop-blur-md cursor-pointer active:scale-95 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.2)] shrink-0 group relative overflow-hidden"
                aria-label="Toggle mobile menu"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-[#00ff88]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                {open ? (
                  <X size={20} className="text-[#00ff88] relative z-10" />
                ) : (
                  <Menu size={20} className="text-white relative z-10 group-hover:text-[#00ff88] transition-colors" />
                )}
              </button>
            </div>
          </nav>

          {/* Bulk Offer / Marquee Disclaimer Bar */}
          <DisclaimerBar />
        </div>
      </header>

      {/* ULTRA-LUXURY MOBILE GLASSMORPHISM DRAWER */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[99998] lg:hidden">
            {/* Backdrop Overlay with 30px blur & ambient aurora pulse */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-[30px] bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.2),transparent_70%)]"
            />

            {/* Premium Slide-In Glassmorphism Drawer Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
              className="mobile-nav-drawer absolute top-0 right-0 bottom-0 w-[90%] max-w-[380px] bg-[#03050e]/92 backdrop-blur-[36px] backdrop-saturate-[200%] border-l border-white/[0.18] rounded-l-[32px] shadow-[-20px_0_60px_rgba(0,0,0,0.95),-8px_0_35px_rgba(0,255,136,0.18),inset_1px_0_0_rgba(255,255,255,0.2)] flex flex-col justify-between overflow-y-auto z-[99999] relative"
              style={{
                paddingTop: "max(1.25rem, env(safe-area-inset-top))",
                paddingBottom: "max(1.25rem, env(safe-area-inset-bottom))",
                paddingRight: "max(1rem, env(safe-area-inset-right))",
                paddingLeft: "1.25rem",
              }}
            >
              {/* Layered Live Background Glows */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 rounded-l-[32px]">
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-violet-600/25 blur-[70px] animate-pulse" />
                <div className="absolute top-1/3 -left-28 w-64 h-64 rounded-full bg-blue-600/20 blur-[70px]" />
                <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-[#00ff88]/20 blur-[70px] animate-pulse" style={{ animationDuration: "4s" }} />
                
                {/* Micro Glass Shine Sweep Line */}
                <div className="ps-glass-shine-line absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent skew-x-[-25deg]" />
              </div>

              {/* Main Content Area */}
              <div className="space-y-4 relative z-10">
                
                {/* Header Row: Logo, Live Status & Close Button */}
                <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.15]">
                  <div className="flex items-center gap-2.5">
                    <Logo size={32} />
                    <div className="flex flex-col">
                      <span className="font-display font-black text-white text-base tracking-tight leading-none flex items-center gap-1">
                        Prime <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-[#00ff88] bg-clip-text text-transparent font-black">Tools Hub</span>
                      </span>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                          Official Access 🇵🇰
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 min-w-[42px] min-h-[42px] flex items-center justify-center text-slate-300 hover:text-white rounded-2xl bg-white/[0.08] hover:bg-white/[0.18] border border-white/20 backdrop-blur-xl active:scale-95 transition-all cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.2)] group"
                    aria-label="Close menu"
                  >
                    <X size={18} className="group-hover:rotate-90 transition-transform duration-300" />
                  </button>
                </div>

                {/* Command-K Linear Style Search Bar */}
                <form onSubmit={handleSearchSubmit} className="relative w-full">
                  <div className="relative flex items-center rounded-2xl bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-white/[0.02] border border-white/20 focus-within:border-[#00ff88]/70 focus-within:shadow-[0_0_24px_rgba(0,255,136,0.3),inset_0_1px_0_rgba(255,255,255,0.25)] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)]">
                    <Search size={16} className="absolute left-3.5 text-[#00ff88] pointer-events-none" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search ChatGPT, Canva, Veo 3..."
                      className="w-full pl-9 pr-14 py-3 bg-transparent text-xs font-semibold text-white placeholder-slate-400 focus:outline-none"
                    />
                    <div className="absolute right-3 flex items-center gap-1 pointer-events-none">
                      {searchQuery ? (
                        <button
                          type="button"
                          onClick={() => setSearchQuery("")}
                          className="pointer-events-auto text-slate-400 hover:text-white p-0.5 cursor-pointer"
                        >
                          <X size={14} />
                        </button>
                      ) : (
                        <span className="px-1.5 py-0.5 rounded-lg bg-white/10 border border-white/15 text-[10px] font-mono text-slate-300 font-bold">
                          ⌘K
                        </span>
                      )}
                    </div>
                  </div>
                </form>

                {/* SECTION 1: MARKETPLACE NAVIGATION */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-[10px] font-extrabold text-slate-400 uppercase tracking-widest px-1">
                    <span className="flex items-center gap-1.5">
                      <Compass size={12} className="text-violet-400" />
                      Explore Marketplace
                    </span>
                    <span className="text-[9.5px] text-[#00ff88] font-mono font-bold bg-[#00ff88]/10 px-2 py-0.5 rounded-full border border-[#00ff88]/20">
                      25+ Tools
                    </span>
                  </div>

                  <nav className="flex flex-col gap-1.5">
                    {MAIN_NAV_ITEMS.map((item) => {
                      const Icon = item.icon;
                      const label = t(item.labelKey) || item.defaultLabel;
                      const isActive = item.route
                        ? location.pathname === item.href
                        : activeSection === item.href;

                      return (
                        <a
                          key={item.labelKey}
                          href={item.href}
                          onClick={(e) => handleNav(e, item)}
                          className={`group px-3.5 py-2.5 rounded-2xl text-xs transition-all flex items-center justify-between border cursor-pointer relative overflow-hidden ${
                            isActive
                              ? "bg-gradient-to-r from-[#00ff88]/20 via-[#00ff88]/10 to-transparent border-[#00ff88]/60 text-[#00ff88] shadow-[0_0_24px_rgba(0,255,136,0.25),inset_0_1px_0_rgba(255,255,255,0.2)]"
                              : "bg-gradient-to-r from-white/[0.05] via-white/[0.02] to-transparent border-white/12 text-slate-200 hover:text-white hover:border-white/30 hover:bg-white/[0.1] shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.12)]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`p-2.5 rounded-xl transition-all bg-gradient-to-br ${item.accent} ${item.border} ${item.text} border shadow-sm group-hover:scale-105`}>
                              <Icon size={16} />
                            </div>
                            <div className="flex flex-col">
                              <span className="font-bold text-xs sm:text-sm text-white tracking-wide">{label}</span>
                              <span className="text-[10.5px] text-slate-400 font-medium group-hover:text-slate-300 transition-colors">{item.desc}</span>
                            </div>
                          </div>
                          <ChevronRight size={16} className={`transition-transform group-hover:translate-x-1 ${
                            isActive ? "text-[#00ff88]" : "text-slate-500 group-hover:text-[#00ff88]"
                          }`} />
                        </a>
                      );
                    })}
                  </nav>
                </div>

                {/* SECTION 2: SUPPORT & CONTACT */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex items-center justify-between text-[10px] font-extrabold text-slate-400 uppercase tracking-widest px-1">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck size={12} className="text-emerald-400" />
                      Help & Support
                    </span>
                  </div>

                  <nav className="grid grid-cols-2 gap-2">
                    {SUPPORT_NAV_ITEMS.map((item) => {
                      const Icon = item.icon;
                      const label = t(item.labelKey) || item.defaultLabel;
                      const isActive = item.route
                        ? location.pathname === item.href
                        : activeSection === item.href;

                      return (
                        <a
                          key={item.labelKey}
                          href={item.href}
                          onClick={(e) => handleNav(e, item)}
                          className={`group p-3 rounded-2xl text-xs transition-all flex flex-col justify-between border cursor-pointer relative overflow-hidden min-h-[72px] ${
                            isActive
                              ? "bg-gradient-to-r from-[#00ff88]/20 to-transparent border-[#00ff88]/50 text-[#00ff88]"
                              : "bg-gradient-to-r from-white/[0.05] to-white/[0.02] border-white/12 text-slate-200 hover:text-white hover:border-white/30 hover:bg-white/[0.1]"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className={`p-2 rounded-xl bg-gradient-to-br ${item.accent} ${item.border} ${item.text} border shadow-sm`}>
                              <Icon size={15} />
                            </div>
                            <ChevronRight size={14} className="text-slate-500 group-hover:text-[#00ff88] transition-transform group-hover:translate-x-0.5" />
                          </div>
                          <span className="font-bold text-xs text-white mt-2 tracking-wide">{label}</span>
                        </a>
                      );
                    })}
                  </nav>
                </div>
              </div>

              {/* Bottom Drawer Section: Preferences, Mode Toggle & Actions */}
              <div className="pt-4 mt-3 border-t border-white/[0.15] space-y-3 relative z-10">
                
                {/* Theme Mode Segmented Glass Toggle */}
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-between p-3 rounded-2xl bg-gradient-to-r from-white/[0.07] to-white/[0.03] backdrop-blur-xl border border-white/15 hover:border-white/30 active:scale-[0.99] transition-all text-xs font-bold text-slate-200 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15)]"
                >
                  <div className="flex items-center gap-2.5">
                    {isDarkMode ? (
                      <div className="p-1.5 rounded-xl bg-violet-500/20 text-violet-400 border border-violet-500/30">
                        <Moon size={15} />
                      </div>
                    ) : (
                      <div className="p-1.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                        <Sun size={15} />
                      </div>
                    )}
                    <span className="font-semibold text-xs text-white">Appearance Theme</span>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                    isDarkMode
                      ? "bg-violet-500/25 text-violet-300 border border-violet-500/40 shadow-[0_0_12px_rgba(139,92,246,0.35)]"
                      : "bg-amber-500/25 text-amber-300 border border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.35)]"
                  }`}>
                    {isDarkMode ? "🌙 Dark" : "☀️ Light"}
                  </span>
                </button>

                {/* Language & Currency Controls Glass Box */}
                <div className="p-3 rounded-2xl bg-gradient-to-r from-white/[0.07] to-white/[0.03] backdrop-blur-xl border border-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15)] space-y-2">
                  <div className="flex items-center justify-between text-[9.5px] font-extrabold text-slate-400 uppercase tracking-widest px-0.5">
                    <span>Language & Currency</span>
                    <span className="text-[9px] text-emerald-400 font-mono">PKR / USD / GBP</span>
                  </div>
                  <div className="flex items-center justify-between gap-2 flex-wrap pt-0.5">
                    <LanguageSwitcher />
                    <CurrencySwitcher />
                  </div>
                </div>

                {/* Primary Action Buttons */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <a
                    href={whatsappNavUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 p-3.5 rounded-2xl text-xs font-black text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f7a6e] shadow-[0_6px_24px_rgba(37,211,102,0.4)] active:scale-95 transition-all min-h-[46px] border border-emerald-400/40 group"
                  >
                    <MessageCircle size={17} className="fill-white shrink-0 group-hover:scale-110 transition-transform" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="#products"
                    onClick={(e) => handleNav(e, { href: "#products", route: false })}
                    className="flex items-center justify-center gap-2 p-3.5 rounded-2xl text-xs font-black text-slate-950 bg-gradient-to-r from-[#00ff88] via-[#20ff95] to-[#00e676] hover:brightness-110 shadow-[0_6px_24px_rgba(0,255,136,0.5)] active:scale-95 transition-all min-h-[46px] border border-[#00ff88]/60 group"
                  >
                    <Zap size={17} className="fill-slate-950 shrink-0 group-hover:scale-110 transition-transform" />
                    <span>Order Now</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}