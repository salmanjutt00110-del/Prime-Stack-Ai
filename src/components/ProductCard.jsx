import { memo } from "react";
import { ShoppingCart, Check, ArrowRight, ShieldCheck, Bell, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { openWhatsApp } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import LazyImage from "@/components/LazyImage";
import { useCurrency } from "@/context/CurrencyContext";

// Brand-tailored aesthetic color tokens (matching reference image 1)
const getBrandTheme = (id = "", name = "") => {
  const str = (id + " " + name).toLowerCase();
  if (str.includes("youtube")) {
    return {
      glow: "rgba(239, 68, 68, 0.75)",
      bgGlow: "from-red-500/30 via-slate-900/40 to-transparent",
      logoRing: "border-red-500/80 shadow-[0_0_30px_rgba(239,68,68,0.55)]",
      logoGradient: "radial-gradient(circle at 50% 50%, rgba(239,68,68,0.45) 0%, rgba(10,15,30,0.95) 75%)",
    };
  }
  if (str.includes("capcut")) {
    return {
      glow: "rgba(236, 72, 153, 0.75)",
      bgGlow: "from-pink-500/30 via-purple-900/30 to-transparent",
      logoRing: "border-pink-400/80 shadow-[0_0_30px_rgba(236,72,153,0.55)]",
      logoGradient: "radial-gradient(circle at 50% 50%, rgba(236,72,153,0.45) 0%, rgba(10,15,30,0.95) 75%)",
    };
  }
  if (str.includes("lovable")) {
    return {
      glow: "rgba(244, 63, 94, 0.85)",
      bgGlow: "from-rose-500/35 via-pink-950/40 to-transparent",
      logoRing: "border-rose-400/80 shadow-[0_0_30px_rgba(244,63,94,0.6)]",
      logoGradient: "radial-gradient(circle at 50% 50%, rgba(244,63,94,0.5) 0%, rgba(25,10,20,0.98) 80%)",
    };
  }
  if (str.includes("notion")) {
    return {
      glow: "rgba(255, 255, 255, 0.9)",
      bgGlow: "from-slate-100/20 via-slate-800/30 to-transparent",
      logoRing: "border-white/90 shadow-[0_0_30px_rgba(255,255,255,0.7)]",
      logoGradient: "radial-gradient(circle at 50% 50%, #ffffff 0%, #e2e8f0 100%)",
      isNotion: true,
    };
  }
  if (str.includes("chatgpt")) {
    return {
      glow: "rgba(16, 185, 129, 0.85)",
      bgGlow: "from-emerald-500/35 via-teal-950/40 to-transparent",
      logoRing: "border-emerald-400/80 shadow-[0_0_30px_rgba(16,185,129,0.6)]",
      logoGradient: "radial-gradient(circle at 50% 50%, rgba(16,185,129,0.5) 0%, rgba(6,20,18,0.98) 80%)",
    };
  }
  if (str.includes("gemini") || str.includes("veo")) {
    return {
      glow: "rgba(66, 133, 244, 0.85)",
      bgGlow: "from-blue-500/35 via-indigo-900/40 to-transparent",
      logoRing: "border-blue-400/80 shadow-[0_0_30px_rgba(66,133,244,0.6)]",
      logoGradient: "radial-gradient(circle at 50% 50%, rgba(66,133,244,0.5) 0%, rgba(10,15,35,0.98) 80%)",
    };
  }
  if (str.includes("canva")) {
    return {
      glow: "rgba(168, 85, 247, 0.75)",
      bgGlow: "from-purple-500/30 via-violet-900/30 to-transparent",
      logoRing: "border-purple-400/80 shadow-[0_0_30px_rgba(168,85,247,0.55)]",
      logoGradient: "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.45) 0%, rgba(10,15,30,0.95) 75%)",
    };
  }
  if (str.includes("nord")) {
    return {
      glow: "rgba(0, 96, 255, 0.85)",
      bgGlow: "from-blue-600/35 via-blue-950/40 to-transparent",
      logoRing: "border-blue-400/80 shadow-[0_0_30px_rgba(0,96,255,0.6)]",
      logoGradient: "radial-gradient(circle at 50% 50%, rgba(0,96,255,0.5) 0%, rgba(7,14,30,0.98) 80%)",
    };
  }
  if (str.includes("surfshark")) {
    return {
      glow: "rgba(0, 209, 178, 0.85)",
      bgGlow: "from-teal-400/35 via-slate-900/40 to-transparent",
      logoRing: "border-teal-400/80 shadow-[0_0_30px_rgba(0,209,178,0.6)]",
      logoGradient: "radial-gradient(circle at 50% 50%, rgba(0,209,178,0.5) 0%, rgba(6,20,30,0.98) 80%)",
    };
  }
  return {
    glow: "rgba(59, 130, 246, 0.75)",
    bgGlow: "from-blue-500/30 via-slate-900/30 to-transparent",
    logoRing: "border-blue-400/80 shadow-[0_0_30px_rgba(59,130,246,0.55)]",
    logoGradient: "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.45) 0%, rgba(10,15,30,0.95) 75%)",
  };
};

function ProductCardComponent({ product, index = 0, priority = false, onQuickView }) {
  const navigate = useNavigate();
  const { formatPrice } = useCurrency();

  const brandTheme = getBrandTheme(product.id, product.name);
  const isChatGPT = String(product.id || "").toLowerCase().includes("chatgpt");
  const isOutOfStock =
    product.stock === "0" ||
    product.stock === 0 ||
    String(product.stock).toLowerCase().includes("out of stock") ||
    String(product.id || "").toLowerCase().includes("grok") ||
    String(product.id || "").toLowerCase().includes("surfshark") ||
    String(product.name || "").toLowerCase().includes("surfshark");

  const pricing = {
    price: product.price,
    oldPrice: product.oldPrice,
    label: product.duration || "1 Month Subscription"
  };

  // Calculate percentage off
  const calcDiscount = () => {
    if (!pricing.oldPrice || !pricing.price) return "20% OFF";
    const pNum = parseFloat(String(pricing.price).replace(/[^0-9.]/g, ""));
    const opNum = parseFloat(String(pricing.oldPrice).replace(/[^0-9.]/g, ""));
    if (opNum && pNum && opNum > pNum) {
      const pct = Math.round(((opNum - pNum) / opNum) * 100);
      return `${pct}% OFF`;
    }
    return "20% OFF";
  };

  const discountText = calcDiscount();

  const defaultFeatures = [
    isChatGPT ? "GPT-4 Access" : "Full Pro Features",
    isChatGPT ? "10 Days Warranty" : "Official Family Plan"
  ];

  const featuresList = (product.features && product.features.length >= 2)
    ? product.features.slice(0, 2)
    : (product.tagline ? [product.tagline, "Official Account"] : defaultFeatures);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10px" }}
      transition={{ duration: 0.3, delay: (index % 4) * 0.04 }}
      className="w-full flex"
    >
      <div className="relative w-full group flex flex-col">
        
        {/* Hover Radial Ambient Glow */}
        <div
          className="absolute -inset-0.5 rounded-[24px] pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
          style={{
            background: `radial-gradient(circle at 50% 30%, ${brandTheme.glow} 0%, transparent 80%)`,
          }}
        />

        {/* Card Main Container (Ultra-Clean Glassmorphism matching reference image 1) */}
        <div
          onClick={() => {
            if (onQuickView) onQuickView(product);
            else navigate(`/product/${product.id}`);
          }}
          className="relative w-full h-full rounded-[22px] sm:rounded-[26px] p-3.5 sm:p-5 flex flex-col justify-between cursor-pointer overflow-hidden z-10 bg-[#060a16] border border-[#16223b] hover:border-blue-500/60 transition-all duration-300 hover:-translate-y-1 shadow-[0_12px_35px_rgba(0,0,0,0.85)] backdrop-blur-2xl"
        >
          {/* Subtle Top Card Gradient */}
          <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${brandTheme.bgGlow} pointer-events-none opacity-60 z-0`} />

          <div className="relative z-10">
            {/* BADGES ROW */}
            <div className="flex items-center justify-between gap-1 mb-2.5">
              {isOutOfStock ? (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-[#290c3d] text-[#c084fc] border border-[#a855f7]/40 flex items-center gap-1 shrink-0">
                  <Sparkles size={11} className="text-purple-300" />
                  <span>Restocking</span>
                </span>
              ) : (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-[#0c1f38] text-[#38bdf8] border border-[#0284c7]/40 flex items-center gap-1 shrink-0">
                  <ShieldCheck size={11} className="text-[#38bdf8]" />
                  <span>Official</span>
                </span>
              )}

              {/* Best Seller Ribbon or Rating Star */}
              {isChatGPT ? (
                <span className="px-2.5 py-0.5 rounded-full text-[9.5px] sm:text-[10.5px] font-extrabold uppercase bg-[#3b0764] text-[#e9d5ff] border border-[#a855f7]/50 font-mono flex items-center gap-1 shrink-0">
                  👑 Best Seller
                </span>
              ) : (
                <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold bg-[#231707] text-[#fbbf24] border border-[#d97706]/40 flex items-center gap-0.5 font-mono shrink-0">
                  ★ 4.9
                </span>
              )}
            </div>

            {/* CIRCULAR LOGO CONTAINER WITH TRANSPARENT BG LOGO & GLOWING NEON SPOTLIGHT */}
            <div className="flex justify-center my-3 sm:my-4">
              <div
                className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full p-3 sm:p-3.5 flex items-center justify-center border ${brandTheme.logoRing} group-hover:scale-105 transition-transform duration-300 relative overflow-hidden shrink-0 shadow-2xl ${brandTheme.isNotion ? 'bg-white' : ''}`}
                style={{
                  background: brandTheme.isNotion ? "#FFFFFF" : (brandTheme.logoGradient || "radial-gradient(circle at 50% 50%, rgba(15,23,42,0.95) 0%, rgba(8,12,24,0.98) 100%)"),
                }}
              >
                {/* Vibrant Brand Neon Glow Spotlight directly behind the transparent logo */}
                {!brandTheme.isNotion && (
                  <div
                    className="absolute inset-0 pointer-events-none rounded-full blur-md opacity-90"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${brandTheme.glow} 0%, transparent 65%)`,
                    }}
                  />
                )}

                <LazyImage
                  src={product.logo}
                  alt={product.name}
                  title={product.name}
                  width={100}
                  height={100}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain relative z-10 flex items-center justify-center"
                  imgStyle={{
                    objectFit: "contain",
                    filter: brandTheme.isNotion ? "none" : "drop-shadow(0 2px 8px rgba(0,0,0,0.5)) brightness(1.15) contrast(1.1)",
                  }}
                  priority={priority}
                />
              </div>
            </div>

            {/* PRODUCT NAME & SUBTITLE */}
            <h3 className="font-display font-black text-base sm:text-lg text-white text-center tracking-tight leading-snug group-hover:text-blue-400 transition-colors line-clamp-1">
              {product.name}
            </h3>

            <p className="text-xs text-slate-400 text-center font-medium mt-0.5 mb-3 line-clamp-1">
              {product.duration || "1 Month Subscription"}
            </p>

            {/* BULLET FEATURES LIST */}
            <div className="space-y-1.5 mb-4 text-xs text-slate-300 font-sans">
              {featuresList.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Check size={14} className="text-[#38bdf8] shrink-0" />
                  <span className="truncate">{feat}</span>
                </div>
              ))}
            </div>

            {/* PRICING & DISCOUNT ROW — SINGLE LINE LAYOUT MATCHING REFERENCE IMAGE 0 */}
            <div className="flex items-center justify-between gap-1 pt-2.5 mb-3 border-t border-[#1e293b] flex-nowrap">
              <span className="text-[10px] sm:text-xs text-slate-500 line-through font-mono shrink-0">
                {pricing.oldPrice ? formatPrice(pricing.oldPrice) : "Rs. 1,299"}
              </span>

              <span className="text-sm sm:text-lg font-black font-display text-white tracking-tight shrink-0">
                {formatPrice(pricing.price)}
              </span>

              <span className="px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10.5px] font-extrabold uppercase bg-[#2a0e3b] text-[#e879f9] border border-[#a855f7]/40 font-mono shadow-sm shrink-0">
                {discountText}
              </span>
            </div>

          </div>

          {/* ACTION BUTTONS ROW */}
          <div className="relative z-10">
            {isOutOfStock ? (
              <div className="flex items-center justify-between gap-1.5 pt-1">
                <div className="flex flex-col">
                  <span className="text-[9px] text-slate-400 font-mono hidden sm:inline">Currently</span>
                  <span className="text-[11px] sm:text-xs font-black text-[#c084fc]">Out of Stock</span>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openWhatsApp(product.name, "Notify Me", "Out of Stock");
                  }}
                  className="py-2 px-3 sm:px-4 rounded-xl font-display font-bold text-[11px] sm:text-xs text-[#f3e8ff] bg-[#3b0764] hover:bg-[#581c87] border border-[#a855f7]/50 flex items-center gap-1 cursor-pointer shadow-md active:scale-95 transition-all shrink-0"
                >
                  <Bell size={12} />
                  <span>Notify</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2 pt-1">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openWhatsApp(product.name, pricing.label, pricing.price);
                  }}
                  className="w-full py-2 sm:py-2.5 rounded-xl font-display font-bold text-[11px] sm:text-xs text-white bg-[#2563eb] hover:bg-[#1d4ed8] flex items-center justify-center gap-1 shadow-[0_4px_16px_rgba(37,99,235,0.35)] cursor-pointer transition-all active:scale-95"
                >
                  <ShoppingCart size={13} className="shrink-0" />
                  <span className="truncate">Order Now</span>
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onQuickView) onQuickView(product);
                    else navigate(`/product/${product.id}`);
                  }}
                  className="w-full py-2 sm:py-2.5 rounded-xl font-display font-bold text-[11px] sm:text-xs text-slate-200 bg-[#0f172a] hover:bg-[#1e293b] hover:text-white flex items-center justify-center gap-0.5 border border-[#334155] cursor-pointer transition-all active:scale-95"
                >
                  <span className="truncate">Details</span>
                  <ArrowRight size={12} className="shrink-0" />
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </motion.div>
  );
}

export default memo(ProductCardComponent);