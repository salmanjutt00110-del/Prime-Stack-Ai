import { MessageCircle } from "lucide-react";
import Logo from "@/components/Logo";
import { WHATSAPP_GENERAL, WHATSAPP_NUMBER } from "@/lib/whatsapp";

export default function Footer() {
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
    <footer className="relative pt-16 pb-8 px-4 sm:px-6 border-t border-white/6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center gap-5">
          <div className="flex items-center gap-2.5">
            <Logo size={40} />
            <span className="font-display font-semibold text-white text-lg">
              Prime{" "}
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent font-bold">
                Tools Hub
              </span>
            </span>
          </div>
          <p className="text-white/50 text-sm max-w-md">
            Premium AI Tools & Digital Services — Available on{" "}
            <span className="text-white/80 font-semibold">PrimeTools.store</span>. Powering the
            future with genuine AI solutions through one trusted platform.
          </p>
          <a
            href={WHATSAPP_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-[1.03]"
            style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
          >
            <MessageCircle size={15} />
            +{WHATSAPP_NUMBER}
          </a>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4">
            <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="text-white/50 hover:text-white text-sm transition-colors">Home</a>
            <a href="#products" onClick={(e) => handleNavClick(e, "#products")} className="text-white/50 hover:text-white text-sm transition-colors">Products</a>
            <a href="#about" onClick={(e) => handleNavClick(e, "#about")} className="text-white/50 hover:text-white text-sm transition-colors">About</a>
            <a href="#faq" onClick={(e) => handleNavClick(e, "#faq")} className="text-white/50 hover:text-white text-sm transition-colors">FAQ</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="text-white/50 hover:text-white text-sm transition-colors">Contact</a>
          </div>
        </div>

        {/* Static, highly readable disclaimer & bulk order card */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl border border-amber-500/20 bg-white/[0.01] backdrop-blur-md max-w-3xl mx-auto text-left relative overflow-hidden group hover:border-amber-500/40 transition-all duration-300">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400/75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            <h4 className="font-display font-bold text-xs text-amber-300 uppercase tracking-widest">
              🎉 Bulk Purchase Offer & Important Notice
            </h4>
          </div>
          <p className="text-white/80 text-xs sm:text-[13px] leading-relaxed font-medium mb-3">
            Customers purchasing 5 or more products are eligible for a special bulk discount. Please contact us on WhatsApp for custom bulk pricing and quotations.
          </p>
          <p className="text-white/45 text-xs sm:text-[12px] leading-relaxed font-normal border-t border-white/5 pt-2.5">
            Prices, duration, and availability are subject to market rates and platform updates. Please verify current prices on WhatsApp prior to order placement.
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-white/40 text-xs font-medium">
            © {new Date().getFullYear()} Prime Tools Hub (<span className="text-white/60">PrimeTools.store</span>). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}