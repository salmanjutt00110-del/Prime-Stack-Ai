import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Search } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import { WHATSAPP_GENERAL } from "@/lib/whatsapp";
import DisclaimerBar from "@/components/DisclaimerBar";
import { scrollToSection } from "@/lib/scroll";
import CurrencySwitcher from "@/components/CurrencySwitcher";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#agency-services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "/reviews", route: true },
  { label: "Sitemap", href: "/html-sitemap", route: true },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
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

  // Track active section on scroll when on home page
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = [
      { id: "contact", hash: "#contact" },
      { id: "faq", hash: "#faq" },
      { id: "about", hash: "#about" },
      { id: "agency-services", hash: "#agency-services" },
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

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
        style={{
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          background: "rgba(5, 5, 5, 0.92)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "env(safe-area-inset-top, 0px)",
        }}
      >
        <nav 
          className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between transition-all duration-300"
          style={{ height: scrolled ? 54 : 64 }}
        >
          <a href="/" onClick={handleLogoClick} className="flex items-center gap-2.5 group min-h-[44px]">
            <Logo size={scrolled ? 32 : 36} />
            <span
              className="font-display font-semibold tracking-tight text-white transition-all flex items-center gap-1.5"
              style={{ fontSize: scrolled ? 16 : 17 }}
            >
              Prime{" "}
              <span className="ps-grad-text bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 bg-clip-text text-transparent font-bold">
                Tools Hub
              </span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {LINKS.map((l) => {
              const isActive = l.route ? location.pathname === l.href : activeSection === l.href;
              return (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => handleNav(e, l)}
                  className={`text-sm font-medium transition-colors duration-200 relative group py-3 px-1 min-h-[44px] flex items-center ${
                    isActive ? "text-white font-bold" : "text-white/80 hover:text-white"
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Currency Switcher */}
            <CurrencySwitcher />

            {/* Search Button */}
            <button
              onClick={(e) => handleNav(e, { href: "#products", route: false })}
              className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold text-white/90 hover:text-white border border-white/15 hover:bg-white/10 transition-all min-h-[40px] cursor-pointer"
              aria-label="Search products catalog"
            >
              <Search size={14} />
              Search
            </button>

            {/* WhatsApp Contact */}
            <a
              href={WHATSAPP_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-lg min-h-[40px]"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)", boxShadow: "0 4px 20px rgba(37,211,102,0.25)" }}
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border text-white bg-white/10 border-white/20 cursor-pointer active:scale-95 transition-transform"
              aria-label="Toggle menu navigation"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
        <DisclaimerBar />

        {/* Mobile Navigation Menu Drawer */}
        <AnimatePresence>
          {open && (
            <>
              {/* Tap-outside Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 top-[100%] bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              />

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="lg:hidden relative z-50 overflow-hidden bg-[#050508]/98 backdrop-blur-2xl border-b border-white/15 shadow-2xl max-h-[80vh] overflow-y-auto"
              >
                <div className="px-5 py-4 flex flex-col gap-1">
                  <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10">
                    <span className="text-xs font-bold text-slate-300">Select Currency:</span>
                    <CurrencySwitcher />
                  </div>
                  {LINKS.map((l) => {
                    const isActive = l.route ? location.pathname === l.href : activeSection === l.href;
                    return (
                      <a
                        key={l.label}
                        href={l.href}
                        onClick={(e) => handleNav(e, l)}
                        className={`py-3.5 border-b border-white/10 text-base font-bold min-h-[50px] flex items-center justify-between transition-colors ${
                          isActive ? "text-cyan-400" : "text-white/90 hover:text-white"
                        }`}
                      >
                        <span>{l.label}</span>
                        {isActive && <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />}
                      </a>
                    );
                  })}

                  <a
                    href={WHATSAPP_GENERAL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="mt-4 flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl text-base font-extrabold text-white min-h-[52px] shadow-xl active:scale-[0.98] transition-transform"
                    style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
                  >
                    <MessageCircle size={20} />
                    WhatsApp Support
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}