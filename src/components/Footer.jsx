import { useState } from "react";
import { MessageCircle, Send, CheckCircle2, Globe, ShieldCheck, Sparkles } from "lucide-react";
import Logo from "@/components/Logo";
import { WHATSAPP_GENERAL, WHATSAPP_NUMBER } from "@/lib/whatsapp";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail("");
    }, 4000);
  };

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
    <footer className="relative pt-20 pb-10 px-4 sm:px-6 border-t bg-[#02050e] border-white/10 text-white overflow-hidden">
      
      {/* Top Animated Gradient Divider Line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent ps-gradient-border-anim" />

      {/* Ambient Radial Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-radial from-violet-900/15 via-blue-900/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Top Grid: Logo & Bio | Quick Links | Products | Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Col 1: Logo & Branding Bio (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Logo size={42} />
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                Prime{" "}
                <span className="ps-grad-text bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent font-black">
                  Tools Hub
                </span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-body leading-relaxed max-w-sm">
              Pakistan's #1 premium AI tools marketplace and digital agency suite. Instant delivery, 100% verified replacement warranty, and official subscription licenses.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={WHATSAPP_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white transition-all hover:scale-105 min-h-[44px]"
                style={{
                  background: "linear-gradient(135deg, #25D366, #128C7E)",
                  boxShadow: "0 4px 15px rgba(37,211,102,0.3)",
                }}
              >
                <MessageCircle size={16} />
                <span>+{WHATSAPP_NUMBER}</span>
              </a>

              <a
                href="https://www.amirads.pro/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white border border-blue-500/40 bg-blue-500/15 hover:bg-blue-500/30 transition-all min-h-[44px]"
              >
                <Globe size={15} className="text-blue-400" />
                <span>AmirAds Agency ↗</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-display font-black text-xs uppercase tracking-widest text-cyan-300 mb-1">
              Quick Links
            </h4>
            <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="text-xs text-slate-300 hover:text-white transition-colors py-1">Home</a>
            <a href="#products" onClick={(e) => handleNavClick(e, "#products")} className="text-xs text-slate-300 hover:text-white transition-colors py-1">AI Products Catalog</a>
            <a href="#agency-services" onClick={(e) => handleNavClick(e, "#agency-services")} className="text-xs text-slate-300 hover:text-white transition-colors py-1">Agency Services</a>
            <a href="#bulk-offers" onClick={(e) => handleNavClick(e, "#bulk-offers")} className="text-xs text-slate-300 hover:text-white transition-colors py-1">Bulk Discounts</a>
            <a href="#reviews" onClick={(e) => handleNavClick(e, "#reviews")} className="text-xs text-slate-300 hover:text-white transition-colors py-1">Customer Reviews</a>
            <a href="#faq" onClick={(e) => handleNavClick(e, "#faq")} className="text-xs text-slate-300 hover:text-white transition-colors py-1">FAQ &amp; Warranty</a>
          </div>

          {/* Col 3: AI Products (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-display font-black text-xs uppercase tracking-widest text-purple-300 mb-1">
              Top AI Products
            </h4>
            <a href="#products" className="text-xs text-slate-300 hover:text-white transition-colors py-1">ChatGPT Plus (iCloud Method)</a>
            <a href="#products" className="text-xs text-slate-300 hover:text-white transition-colors py-1">Google Gemini Pro (18M 5TB)</a>
            <a href="#products" className="text-xs text-slate-300 hover:text-white transition-colors py-1">Canva Pro Edu (3 Years AI)</a>
            <a href="#products" className="text-xs text-slate-300 hover:text-white transition-colors py-1">CapCut Pro (Desktop &amp; Mobile)</a>
            <a href="#products" className="text-xs text-slate-300 hover:text-white transition-colors py-1">Google Veo 3 AI Video</a>
            <a href="#products" className="text-xs text-slate-300 hover:text-white transition-colors py-1">Surfshark VPN &amp; NordVPN</a>
          </div>

          {/* Col 4: Newsletter Box (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-display font-black text-xs uppercase tracking-widest text-emerald-400 mb-1">
              Stay Updated
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-body">
              Subscribe to get instant notifications on price drops, new AI models, and exclusive bulk discount coupons.
            </p>

            <form onSubmit={handleSubscribe} className="mt-2 space-y-2">
              <div className="relative flex items-center">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-3.5 pr-12 h-[44px] rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-white/40 text-xs focus:outline-none focus:border-emerald-400 transition-all font-body"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 p-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-400 transition-colors cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
                >
                  <Send size={14} />
                </button>
              </div>

              {subscribed && (
                <div className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={13} /> Subscribed successfully!
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Notice & Disclaimer Box */}
        <div className="mt-10 p-5 rounded-2xl border bg-white/[0.02] border-white/10 text-left">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck size={16} className="text-amber-400" />
            <h5 className="font-display font-black text-xs text-amber-400 uppercase tracking-wider">
              Marketplace Integrity &amp; Terms
            </h5>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-body">
            Prime Tools Hub provides verified digital subscriptions and official invite slots under standard reseller terms. All brand names (ChatGPT, Google Gemini, Canva, CapCut, Notion, Surfshark) belong to their respective copyright holders.
          </p>
        </div>

        {/* Bottom Copyright & Animated Line */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Prime Tools Hub (<span>PrimeToolsHub.store</span>). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Warranty</a>
            <span>•</span>
            <a href="#contact" className="hover:text-white transition-colors">Contact Support</a>
          </div>
        </div>

      </div>
    </footer>
  );
}