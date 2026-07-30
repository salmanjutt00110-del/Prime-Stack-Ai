import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, ShoppingBag, Zap } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import { WHATSAPP_NUMBER } from "@/data/products";
import DisclaimerBar from "@/components/DisclaimerBar";
import { scrollToSection } from "@/lib/scroll";
import CurrencySwitcher from "@/components/CurrencySwitcher";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Tools", href: "#products" },
  { label: "Pricing", href: "#products" },
  { label: "Reviews", href: "/reviews", route: true },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 90) {
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
  }, []);

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

  const whatsappNavUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Prime Tools Hub! I have a question about digital AI subscriptions."
  )}`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-transform duration-300 ${
        navHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className="transition-all duration-300 border-b border-white/10"
        style={{
          background: scrolled ? "rgba(5, 5, 5, 0.94)" : "rgba(5, 5, 5, 0.88)",
          boxShadow: scrolled ? "0 4px 24px rgba(37, 99, 235, 0.15)" : "none",
        }}
      >
        <nav
          className="mx-auto max-w-7xl px-3.5 sm:px-6 flex items-center justify-between transition-all duration-300 gap-2 sm:gap-4"
          style={{ height: scrolled ? 54 : 64 }}
        >
          {/* LOGO: Single line non-wrapping logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2 group shrink-0 min-h-[44px] whitespace-nowrap"
          >
            <Logo size={scrolled ? 30 : 34} />
            <span className="font-display font-black tracking-tight text-white text-sm sm:text-base flex items-center gap-1">
              Prime <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-[#00ff88] bg-clip-text text-transparent font-black">Tools Hub</span>
            </span>
          </a>

          {/* DESKTOP NAV LINKS (Centered) */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7 flex-1 justify-center">
            {LINKS.map((l) => {
              const isActive = l.route ? location.pathname === l.href : activeSection === l.href;
              return (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => handleNav(e, l)}
                  className={`text-xs xl:text-sm font-bold transition-colors duration-200 relative group py-2 px-1 min-h-[44px] flex items-center whitespace-nowrap ${
                    isActive ? "text-[#00ff88]" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {l.label}
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
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Live Support Badge (Desktop Only) */}
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Live Support
            </div>

            {/* PKR | USD Currency Toggle */}
            <CurrencySwitcher />

            {/* WhatsApp Button (Desktop Only) */}
            <a
              href={whatsappNavUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex p-2 px-3 py-1.5 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all items-center gap-1.5 min-h-[38px] text-xs font-bold shrink-0"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>

            {/* "Order Now" CTA Button (Desktop Only) */}
            <a
              href="#products"
              onClick={(e) => handleNav(e, { href: "#products", route: false })}
              className="hidden sm:flex px-3.5 py-1.5 rounded-xl font-display font-black text-xs text-slate-950 bg-[#00ff88] hover:bg-[#20ff95] transition-all hover:scale-105 shadow-[0_0_15px_rgba(0,255,136,0.4)] items-center gap-1.5 cursor-pointer min-h-[38px] shrink-0"
            >
              <ShoppingBag size={14} />
              <span>Order Now</span>
            </a>

            {/* Mobile Hamburger Menu Trigger */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden p-2 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl border text-white bg-white/10 border-white/20 cursor-pointer active:scale-95 transition-transform shrink-0"
              aria-label="Toggle mobile menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
        <DisclaimerBar />
      </div>

      {/* MOBILE HAMBURGER MENU: Smooth Slide-In from Right */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm z-40 lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-xs z-50 bg-[#050508] border-l border-white/15 p-5 flex flex-col justify-between shadow-2xl overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Logo size={30} />
                    <span className="font-display font-black text-white text-sm">
                      Prime <span className="text-[#00ff88]">Tools Hub</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 text-slate-400 hover:text-white rounded-lg cursor-pointer"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="py-4 flex flex-col gap-1">
                  {LINKS.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      onClick={(e) => handleNav(e, l)}
                      className="py-2.5 px-3 rounded-xl text-sm font-bold text-slate-200 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between"
                    >
                      <span>{l.label}</span>
                      <span className="text-xs text-[#00ff88]">→</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Action Buttons in Mobile Menu */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                <a
                  href={whatsappNavUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-black text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-lg transition-all"
                >
                  <MessageCircle size={18} className="fill-white" />
                  <span>💬 Order on WhatsApp</span>
                </a>

                <a
                  href="#products"
                  onClick={(e) => handleNav(e, { href: "#products", route: false })}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-black text-slate-950 bg-[#00ff88] hover:bg-[#20ff95] shadow-lg transition-all"
                >
                  <Zap size={18} className="fill-slate-950" />
                  <span>⚡ Order Now</span>
                </a>

                <div className="flex items-center justify-between pt-2 px-1">
                  <span className="text-xs text-slate-400 font-bold">Currency:</span>
                  <CurrencySwitcher />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}