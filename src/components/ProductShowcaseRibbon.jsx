import { memo } from "react";
import { BRAND } from "@/data/products";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SHOWCASE_PRODUCTS = [
  { id: "chatgpt-plus-1m", name: "ChatGPT", brand: "OpenAI", logo: BRAND.chatgpt, glow: "#10A37F", border: "rgba(16, 163, 127, 0.4)", badge: "GPT-4o & Canvas" },
  { id: "gemini-pro-18", name: "Gemini Pro", brand: "Google AI", logo: BRAND.gemini, glow: "#4285F4", border: "rgba(66, 133, 244, 0.4)", badge: "🔥 Rs. 1,099 (24h Offer)" },
  { id: "canva-pro-edu", name: "Canva", brand: "Visual AI", logo: BRAND.canva, glow: "#7D2AE8", border: "rgba(125, 42, 232, 0.4)", badge: "Magic Studio" },
  { id: "veo-3-video", name: "Google Veo", brand: "Google DeepMind", logo: BRAND.veo, glow: "#6366F1", border: "rgba(99, 102, 241, 0.4)", badge: "45K AI Credits" },
  { id: "capcut-pro-1m", name: "CapCut Pro", brand: "ByteDance", logo: BRAND.capcut, glow: "#FFFFFF", border: "rgba(255, 255, 255, 0.4)", badge: "Pro Editing & FX" },
  { id: "notion-plus-12m", name: "Notion AI", brand: "Notion", logo: BRAND.notion, glow: "#F8FAFC", border: "rgba(255, 255, 255, 0.35)", badge: "3K AI Credits/Mo" },
  { id: "heygen-creator-600c", name: "HeyGen AI", brand: "AI Video", logo: BRAND.heygen, glow: "#5C24FF", border: "rgba(92, 36, 255, 0.4)", badge: "600 Credits" },
  { id: "supergrok-12m-premium", name: "SuperGrok", brand: "xAI", logo: BRAND.grok, glow: "#9333EA", border: "rgba(147, 51, 234, 0.4)", badge: "Fun & Fast AI" },
  { id: "surfshark-vpn-1y", name: "Surfshark", brand: "VPN Security", logo: BRAND.surfshark, glow: "#00D1B2", border: "rgba(0, 209, 178, 0.4)", badge: "1-Yr Unlimited" },
  { id: "figma-pro-12m", name: "Cursor AI", brand: "Anysphere", logo: BRAND.figma, glow: "#3B82F6", border: "rgba(59, 130, 246, 0.4)", badge: "AI Code Editor" },
];

export default memo(function ProductShowcaseRibbon() {
  const navigate = useNavigate();

  // Duplicate list to achieve continuous 60fps infinite marquee loop
  const list = [...SHOWCASE_PRODUCTS, ...SHOWCASE_PRODUCTS];

  return (
    <section className="relative py-8 overflow-hidden bg-gradient-to-b from-[#050505] via-[#08080f] to-[#050505] border-y border-white/5 z-20">
      
      {/* Top Banner Tag */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-5 text-center flex items-center justify-center gap-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black tracking-widest uppercase border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 backdrop-blur-md">
          <Sparkles size={12} className="text-cyan-400 animate-spin" style={{ animationDuration: "6s" }} />
          <span>FEATURED PREMIUM AI ECOSYSTEM</span>
        </div>
      </div>

      {/* Edge Blur Fades for Seamless Marquee Effect */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#050505] to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#050505] to-transparent z-20" />

      {/* Infinite Marquee Track */}
      <div className="ps-ribbon-track flex items-center gap-4 sm:gap-6 py-2 px-4">
        {list.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            onClick={() => navigate(`/product/${item.id}`)}
            className="group relative flex items-center gap-3.5 px-4 sm:px-5 py-3 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 shrink-0 border ps-glass-reflection shadow-lg"
            style={{
              background: `linear-gradient(135deg, rgba(15, 15, 24, 0.85) 0%, rgba(8, 8, 14, 0.95) 100%)`,
              borderColor: item.border,
              boxShadow: `0 10px 25px rgba(0,0,0,0.6), 0 0 20px ${item.glow}20`,
            }}
          >
            {/* Ambient Background Brand Glow */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${item.glow}25 0%, transparent 80%)`,
              }}
            />

            {/* Logo Image in Glowing Glass Frame */}
            <div
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl p-1.5 flex items-center justify-center border shadow-md shrink-0 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
              style={{
                background: `radial-gradient(circle, ${item.glow}30 0%, rgba(10,10,16,0.9) 100%)`,
                borderColor: `${item.glow}60`,
                boxShadow: `0 4px 12px ${item.glow}30`,
              }}
            >
              <img
                src={item.logo}
                alt={item.name}
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                loading="lazy"
              />
            </div>

            {/* Text & Tagline Info */}
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-sm sm:text-base text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {item.name}
                </span>
                <ArrowUpRight size={14} className="text-white/40 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <span className="text-[10px] font-semibold text-white/60 font-mono tracking-wide">
                {item.badge}
              </span>
            </div>

            {/* Glow Tag Indicator */}
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0 animate-pulse ml-1"
              style={{ background: item.glow }}
            />
          </div>
        ))}
      </div>
    </section>
  );
});
