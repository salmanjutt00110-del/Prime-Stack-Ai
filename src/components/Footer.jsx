import { MessageCircle } from "lucide-react";
import Logo from "@/components/Logo";
import { WHATSAPP_GENERAL, WHATSAPP_NUMBER } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 px-4 sm:px-6 border-t border-white/6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center gap-5">
          <div className="flex items-center gap-2.5">
            <Logo size={40} />
            <span className="font-display font-semibold text-white text-lg">
              PrimeStack{" "}
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                AI
              </span>
            </span>
          </div>
          <p className="text-white/50 text-sm max-w-md">
            Premium AI Tools & Digital Services — All in One Place. Powering the
            future with premium AI solutions through one trusted platform.
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
            <a href="#home" className="text-white/50 hover:text-white text-sm transition-colors">Home</a>
            <a href="#products" className="text-white/50 hover:text-white text-sm transition-colors">Products</a>
            <a href="#why-us" className="text-white/50 hover:text-white text-sm transition-colors">About</a>
            <a href="#faq" className="text-white/50 hover:text-white text-sm transition-colors">FAQ</a>
            <a href="#contact" className="text-white/50 hover:text-white text-sm transition-colors">Contact</a>
          </div>
        </div>

        {/* Static, highly readable disclaimer card */}
        <div className="mt-10 p-5 rounded-2xl border border-white/6 bg-white/[0.01] backdrop-blur-md max-w-3xl mx-auto text-left relative overflow-hidden group hover:border-white/12 transition-all duration-300">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400/75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            <h4 className="font-display font-semibold text-xs text-white/80 uppercase tracking-widest">
              Important Disclaimer / Zaroori Note
            </h4>
          </div>
          <p className="text-white/45 text-xs sm:text-[13px] leading-relaxed font-medium">
            Hamari services ki prices, duration, features aur availability market conditions, supplier updates aur platform policies ke mutabiq kisi bhi waqt tabdeel ho sakti hain. Hum website ko regularly update karte rehte hain taake aap ko latest information aur best rates mil saken. Order place karne se pehle latest price aur details zaroor verify karein.
          </p>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} PrimeStack AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}