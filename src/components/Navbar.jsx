import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Search } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";
import { WHATSAPP_GENERAL } from "@/lib/whatsapp";
import DisclaimerBar from "@/components/DisclaimerBar";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
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
          background: "rgba(5,5,5,0.88)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <nav 
          className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between transition-all duration-500"
          style={{ height: scrolled ? 54 : 64 }}
        >
          <a href="/" onClick={handleLogoClick} className="flex items-center gap-2.5 group min-h-[44px]">
            <Logo size={scrolled ? 32 : 36} />
            <span
              className="font-display font-semibold tracking-tight text-white transition-all flex items-center gap-1.5"
              style={{ fontSize: scrolled ? 16 : 17 }}
            >
              Prime{" "}
              <span className="ps-grad-text bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent font-bold">
                Tools Hub
              </span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.route ? l.href : l.href}
                onClick={(e) => handleNav(e, l)}
                className="text-sm text-white/85 hover:text-white transition-colors duration-300 relative group py-3 px-1 min-h-[44px] flex items-center"
              >
                {l.label}
                <span className="absolute bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-pink-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={(e) => handleNav(e, { href: "#products", route: false })}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm text-white/90 hover:text-white border border-white/15 hover:bg-white/10 transition-all min-h-[44px]"
              aria-label="Search products catalog"
            >
              <Search size={15} />
              Search
            </button>
            <a
              href={WHATSAPP_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-lg min-h-[44px]"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)", boxShadow: "0 4px 20px rgba(37,211,102,0.25)" }}
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-white/5 border border-white/10"
              aria-label="Toggle menu navigation"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ${open ? "max-h-96" : "max-h-0"}`}
          style={{
            background: "rgba(5,5,5,0.95)",
            backdropFilter: "blur(24px)",
            borderBottom: open ? "1px solid rgba(255,255,255,0.08)" : "none",
          }}
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.route ? l.href : l.href}
                onClick={(e) => handleNav(e, l)}
                className="py-3 text-white/90 hover:text-white border-b border-white/5 text-sm font-semibold min-h-[44px] flex items-center"
              >
                {l.label}
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
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </motion.header>
      <DisclaimerBar />
    </>
  );
}