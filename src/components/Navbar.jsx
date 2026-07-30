import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, ShoppingBag } from "lucide-react";
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
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      <div
        className="transition-all duration-300 border-b border-white/10"
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          background: scrolled ? "rgba(5, 5, 5, 0.92)" : "rgba(5, 5, 5, 0.85)",
          boxShadow: scrolled ? "0 4px 24px rgba(37, 99, 235, 0.15)" : "none",
        }}
      >
        <nav
          className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between transition-all duration-300"
          style={{ height: scrolled ? 58 : 68 }}
        >
          {/* LOGO: Left-aligned, high-res WebP */}
          <a href="/" onClick={handleLogoClick} className="flex items-center gap-2.5 group min-h-[44px]">
            <Logo size={scrolled ? 34 : 38} />
            <span
              className="font-display font-black tracking-tight text-white transition-all flex items-center gap-1.5"
              style={{ fontSize: scrolled ? 17 : 18 }}
            >
              Prime{" "}
              <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-[#00ff88] bg-clip-text text-transparent font-black">
                Tools Hub
              </span>
            </span>
          </a>

          {/* NAV LINKS (Center) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {LINKS.map((l) => {
              const isActive = l.route ? location.pathname === l.href : activeSection === l.href;
              return (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => handleNav(e, l)}
                  className={`text-sm font-bold transition-colors duration-200 relative group py-2 px-1 min-h-[44px] flex items-center ${
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

          {/* RIGHT SIDE ELEMENTS */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Live Support Indicator */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Live Support
            </div>

            <CurrencySwitcher />

            {/* WhatsApp Icon Button */}
            <a
              href={whatsappNavUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all flex items-center gap-1.5 min-h-[40px] text-xs font-bold"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
            >
              <MessageCircle size={17} />
              <span className="hidden md:inline">WhatsApp</span>
            </a>

            {/* "Order Now" CTA Button (Neon Colored) */}
            <a
              href="#products"
              onClick={(e) => handleNav(e, { href: "#products", route: false })}
              className="px-4 py-2 rounded-xl font-display font-black text-xs sm:text-sm text-slate-950 bg-[#00ff88] hover:bg-[#20ff95] transition-all hover:scale-105 shadow-[0_0_15px_rgba(0,255,136,0.4)] flex items-center gap-1.5 cursor-pointer min-h-[40px]"
            >
              <ShoppingBag size={15} />
              <span>Order Now</span>
            </a>

            {/* Mobile Hamburger Menu Trigger */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl border text-white bg-white/10 border-white/20 cursor-pointer active:scale-95 transition-transform"
              aria-label="Toggle mobile menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
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
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-xs z-50 bg-[#050508] border-l border-white/15 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Logo size={32} />
                    <span className="font-display font-black text-white text-base">
                      Prime <span className="text-[#00ff88]">Tools</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-2 text-slate-400 hover:text-white rounded-lg"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="py-6 flex flex-col gap-2">
                  {LINKS.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      onClick={(e) => handleNav(e, l)}
                      className="py-3 px-3 rounded-xl text-base font-bold text-slate-200 hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between"
                    >
                      <span>{l.label}</span>
                      <span className="text-xs text-[#00ff88]">→</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA Visible at Bottom of Mobile Menu */}
              <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
                <div className="flex items-center justify-between px-2 text-xs font-bold text-slate-300">
                  <span>Status:</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Online &amp; Active
                  </span>
                </div>
                <a
                  href={whatsappNavUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl text-base font-black text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-xl transition-all"
                >
                  <MessageCircle size={20} className="fill-white" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}