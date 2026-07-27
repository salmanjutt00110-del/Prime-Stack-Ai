import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Search } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import { WHATSAPP_GENERAL } from "@/lib/whatsapp";
import DisclaimerBar from "@/components/DisclaimerBar";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#agency-services" },
  { label: "Meta Ads", href: "#meta-ads" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "/reviews", route: true },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
          background: "rgba(5, 5, 5, 0.88)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "env(safe-area-inset-top, 0px)",
        }}
      >
        <nav 
          className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between transition-all duration-500"
          style={{ height: scrolled ? 52 : 62 }}
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

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.route ? l.href : l.href}
                onClick={(e) => handleNav(e, l)}
                className="text-sm font-medium text-white/85 hover:text-white transition-colors duration-300 relative group py-3 px-1 min-h-[44px] flex items-center"
              >
                {l.label}
                <span className="absolute bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-500 to-pink-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Button */}
            <button
              onClick={(e) => handleNav(e, { href: "#products", route: false })}
              className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold text-white/90 hover:text-white border border-white/15 hover:bg-white/10 transition-all min-h-[40px]"
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
              className="lg:hidden p-2 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl border text-white bg-white/5 border-white/10"
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
              className="lg:hidden overflow-hidden transition-all bg-[#050505]/95 backdrop-blur-xl border-b border-white/10"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {LINKS.map((l) => (
                  <a
                    key={l.label}
                    href={l.route ? l.href : l.href}
                    onClick={(e) => handleNav(e, l)}
                    className="py-3 border-b border-white/5 text-sm font-semibold text-white/90 hover:text-white min-h-[44px] flex items-center justify-between"
                  >
                    <span>{l.label}</span>
                  </a>
                ))}

                <a
                  href={WHATSAPP_GENERAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white min-h-[44px]"
                  style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
                >
                  <MessageCircle size={16} />
                  WhatsApp Support
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