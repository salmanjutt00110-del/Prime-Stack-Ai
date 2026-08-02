import { Link } from "react-router-dom";
import { MessageCircle, Clock, MapPin, Instagram, Facebook, ShieldCheck, Lock, CheckCircle2 } from "lucide-react";
import Logo from "@/components/Logo";
import { WHATSAPP_NUMBER } from "@/data/products";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <footer className="bg-[#0a0a0a] text-slate-300 relative z-10 border-t border-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 pt-16 pb-8">
      
      {/* Top subtle border gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-[#00ff88]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* 4-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* COLUMN 1 — BRAND */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <Logo size={36} />
              <span className="font-display font-black text-xl text-white">
                Prime <span className="text-[#00ff88]">Tools Hub</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed font-body">
              Pakistan's trusted digital tools marketplace since 2022. Delivering official ChatGPT Plus, Canva Pro, Gemini, CapCut &amp; VPNs with full warranty support.
            </p>

            {/* Trust Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] font-bold">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Lock size={12} /> 256-Bit SSL Encrypted
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <ShieldCheck size={12} /> SECP &amp; NTN Verified
              </span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* COLUMN 2 — QUICK LINKS */}
          <div>
            <h4 className="font-display font-black text-sm text-[#00ff88] uppercase tracking-wider mb-4">
              Navigation &amp; Help
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ &amp; Knowledge Base</Link></li>
              <li><Link to="/reviews" className="hover:text-white transition-colors">Customer Reviews (1,200+)</Link></li>
              <li><Link to="/seo-guide" className="text-[#00ff88] font-bold hover:underline transition-colors flex items-center gap-1.5">SEO Guide (2026) <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">NEW</span></Link></li>
              <li><Link to="/html-sitemap" className="hover:text-white transition-colors">HTML Sitemap</Link></li>
            </ul>
          </div>

          {/* COLUMN 3 — LEGAL & COMPLIANCE */}
          <div>
            <h4 className="font-display font-black text-sm text-[#00ff88] uppercase tracking-wider mb-4">
              Legal &amp; Policies
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className="hover:text-white transition-colors">Refund &amp; Guarantee Policy</Link></li>
              <li><Link to="/disclaimer" className="hover:text-white transition-colors">Reseller Disclaimer</Link></li>
            </ul>
          </div>

          {/* COLUMN 4 — CONTACT */}
          <div>
            <h4 className="font-display font-black text-sm text-[#00ff88] uppercase tracking-wider mb-4">
              Contact &amp; Support
            </h4>
            <ul className="space-y-3 text-xs font-semibold">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MessageCircle size={15} />
                  <span>📱 WhatsApp: +92-370-7020580</span>
                </a>
              </li>

              <li className="flex items-center gap-2 text-slate-300">
                <Clock size={15} className="text-purple-400" />
                <span>🕐 Support Hours: 9 AM – 11 PM (PKT)</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <MapPin size={15} className="text-amber-400" />
                <span>📍 Based in Lahore, Pakistan 🇵🇰</span>
              </li>
            </ul>
          </div>

        </div>

        {/* RESELLER DISCLOSURE BANNER */}
        <div className="py-6 border-b border-white/10 text-[11px] text-slate-400 leading-relaxed text-center sm:text-left">
          <p className="max-w-5xl">
            <strong className="text-slate-300">Reseller Disclosure:</strong> Prime Tools Hub is an independent digital tools reseller platform. We are not officially affiliated with, endorsed by, or sponsored by OpenAI, Canva, Google, CapCut, Bytedance, Nord Security, or Surfshark. All product names, trademarks, and logos are property of their respective owners.
          </p>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-body">
          <p>© 2026 Prime Tools Hub. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>•</span>
            <Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
            <span>•</span>
            <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}