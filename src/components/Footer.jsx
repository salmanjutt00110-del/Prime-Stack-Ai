import { MessageCircle, Clock, MapPin, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { WHATSAPP_NUMBER } from "@/data/products";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className="bg-[#0a0a0a] text-slate-300 relative z-10 border-t border-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 pt-16 pb-8"
    >
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
            <div className="flex items-center gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all"
                aria-label="WhatsApp Support"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all"
                aria-label="Instagram Page"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all"
                aria-label="Facebook Page"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* COLUMN 2 — QUICK LINKS */}
          <div>
            <h3 className="font-display font-black text-sm text-[#00ff88] uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/compare" className="hover:text-white transition-colors">Price Comparison</Link></li>
              <li><Link to="/track-order" className="hover:text-white transition-colors">Track Order</Link></li>
              <li><Link to="/reviews" className="hover:text-white transition-colors">Customer Reviews</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
              <li>
                <Link to="/seo-guide" className="text-[#00ff88] font-bold hover:underline transition-colors flex items-center gap-1.5">
                  SEO Guide (2026) <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">NEW</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 — LEGAL & COMPLIANCE */}
          <div>
            <h3 className="font-display font-black text-sm text-[#00ff88] uppercase tracking-wider mb-4">
              Legal &amp; Policy
            </h3>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className="hover:text-white transition-colors">Refund &amp; Replacement</Link></li>
              <li><Link to="/disclaimer" className="hover:text-white transition-colors">Reseller Disclaimer</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/acceptable-use" className="hover:text-white transition-colors">Acceptable Use Policy</Link></li>
              <li><Link to="/html-sitemap" className="hover:text-white transition-colors">HTML Sitemap</Link></li>
            </ul>

            {/* Trusted External Links */}
            <h4 className="font-display font-bold text-xs text-slate-500 uppercase tracking-wider mt-5 mb-2">
              Official Resources
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-500">
              <li><a href="https://openai.com/chatgpt" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">OpenAI ChatGPT ↗</a></li>
              <li><a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">Google Gemini ↗</a></li>
              <li><a href="https://www.canva.com/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">Canva Design ↗</a></li>
              <li><a href="https://www.capcut.com/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">CapCut Editor ↗</a></li>
              <li><a href="https://surfshark.com/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">Surfshark VPN ↗</a></li>
            </ul>
          </div>

          {/* COLUMN 4 — TRUST & CONTACT */}
          <div>
            <h3 className="font-display font-black text-sm text-[#00ff88] uppercase tracking-wider mb-4">
              Trust &amp; Contact
            </h3>
            <address className="not-italic space-y-3 text-xs font-semibold mb-4">
              <div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MessageCircle size={15} />
                  <span>📱 WhatsApp: +92-370-7020580</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <Clock size={15} className="text-purple-400" />
                <span>🕐 Support Hours: 9 AM – 11 PM (PKT)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin size={15} className="text-amber-400" />
                <span>📍 Based in Lahore, Pakistan 🇵🇰</span>
              </div>
            </address>

            {/* Local SEO Cities Links */}
            <div className="mb-4 pt-2 border-t border-white/10">
              <span className="text-[11px] font-bold text-slate-400 block mb-1.5">Top Cities Served:</span>
              <div className="flex items-center gap-2 flex-wrap text-[11px] text-emerald-400 font-medium">
                <Link to="/lahore" className="hover:underline">Lahore</Link>
                <span>•</span>
                <Link to="/karachi" className="hover:underline">Karachi</Link>
                <span>•</span>
                <Link to="/islamabad" className="hover:underline">Islamabad</Link>
                <span>•</span>
                <Link to="/faisalabad" className="hover:underline">Faisalabad</Link>
              </div>
            </div>

            {/* TRUST BADGES BOX */}
            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 space-y-1.5 text-[10px] text-slate-400">
              <div className="flex items-center justify-between text-emerald-400 font-bold">
                <span>🔒 256-Bit SSL Encrypted</span>
                <span>⭐ 4.9/5 Rating</span>
              </div>
              <p>Independent Authorized Digital Reseller</p>
            </div>
          </div>

        </div>

        {/* RESELLER TRANSPARENCY STATEMENT */}
        <div className="my-6 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 text-[11px] text-amber-200/80 leading-relaxed text-center">
          <strong>Disclaimer:</strong> Prime Tools Hub is an independent reseller. We are not officially affiliated with, endorsed by, or partnered with OpenAI, Canva, Google, CapCut, or any software provider listed. All trademarks belong to their respective owners.
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-body">
          <p>© 2026 Prime Tools Hub. All Rights Reserved.</p>
          <div className="flex items-center gap-3 flex-wrap justify-center text-[11px]">
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms</Link>
            <span>•</span>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <span>•</span>
            <Link to="/refund-policy" className="hover:text-white transition-colors">Refunds</Link>
            <span>•</span>
            <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}