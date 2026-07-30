import { MessageCircle, Mail, Clock, MapPin, Instagram, Facebook } from "lucide-react";
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
            <a href="/" className="flex items-center gap-2.5">
              <Logo size={36} />
              <span className="font-display font-black text-xl text-white">
                Prime <span className="text-[#00ff88]">Tools Hub</span>
              </span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed font-body">
              Pakistan's trusted digital tools marketplace since 2022. Delivering official ChatGPT Plus, Canva Pro, Gemini, CapCut &amp; VPNs with full warranty support.
            </p>
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
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">All Tools</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* COLUMN 3 — TOOLS */}
          <div>
            <h4 className="font-display font-black text-sm text-[#00ff88] uppercase tracking-wider mb-4">
              Popular Tools
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li><a href="#products" className="hover:text-white transition-colors">ChatGPT Plus</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Canva Pro</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Veo 3</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">CapCut Pro</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Gemini Advanced</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Surfshark VPN</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">SuperGrok</a></li>
            </ul>
          </div>

          {/* COLUMN 4 — CONTACT */}
          <div>
            <h4 className="font-display font-black text-sm text-[#00ff88] uppercase tracking-wider mb-4">
              Contact Us
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
                <Mail size={15} className="text-blue-400" />
                <span>📧 Email: support@primetoolshub.store</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Clock size={15} className="text-purple-400" />
                <span>🕐 Support Hours: 9 AM – 11 PM (PKT)</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <MapPin size={15} className="text-amber-400" />
                <span>📍 Based in Pakistan 🇵🇰</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-body">
          <p>© 2025 Prime Tools Hub. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}