import { memo } from "react";
import { MessageCircle, ArrowRight, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { openWhatsApp } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import LazyImage from "@/components/LazyImage";
import CountdownTimer from "@/components/CountdownTimer";

/* Comprehensive Brand Color & Theme Glow Engine */
const getBrandTheme = (id = "", name = "") => {
  const str = (id + " " + name).toLowerCase();

  // ChatGPT → Emerald Green Glow
  if (str.includes("chatgpt")) {
    return {
      glow: "#10A37F",
      secondary: "#22C55E",
      border: "rgba(16, 163, 127, 0.5)",
      bgGradient: "linear-gradient(140deg, rgba(16, 163, 127, 0.18) 0%, rgba(8, 14, 12, 0.97) 100%)",
      badgeBg: "rgba(16, 163, 127, 0.22)",
      badgeColor: "#34D399",
    };
  }

  // Gemini → Google Blue
  if (str.includes("gemini")) {
    return {
      glow: "#4285F4",
      secondary: "#38BDF8",
      border: "rgba(66, 133, 244, 0.5)",
      bgGradient: "linear-gradient(140deg, rgba(66, 133, 244, 0.18) 0%, rgba(8, 10, 24, 0.97) 100%)",
      badgeBg: "rgba(66, 133, 244, 0.22)",
      badgeColor: "#60A5FA",
    };
  }

  // Canva → Purple + Cyan
  if (str.includes("canva")) {
    return {
      glow: "#7D2AE8",
      secondary: "#00C4CC",
      border: "rgba(125, 42, 232, 0.5)",
      bgGradient: "linear-gradient(140deg, rgba(125, 42, 232, 0.2) 0%, rgba(0, 196, 204, 0.1) 50%, rgba(10, 8, 24, 0.97) 100%)",
      badgeBg: "rgba(125, 42, 232, 0.22)",
      badgeColor: "#C084FC",
    };
  }

  // CapCut → White + Dark Gray
  if (str.includes("capcut")) {
    return {
      glow: "#FFFFFF",
      secondary: "#475569",
      border: "rgba(255, 255, 255, 0.45)",
      bgGradient: "linear-gradient(140deg, rgba(255, 255, 255, 0.14) 0%, rgba(15, 23, 42, 0.97) 100%)",
      badgeBg: "rgba(255, 255, 255, 0.18)",
      badgeColor: "#F8FAFC",
    };
  }

  // Google Veo → Blue Gradient
  if (str.includes("veo")) {
    return {
      glow: "#6366F1",
      secondary: "#3B82F6",
      border: "rgba(99, 102, 241, 0.5)",
      bgGradient: "linear-gradient(140deg, rgba(99, 102, 241, 0.18) 0%, rgba(10, 10, 24, 0.97) 100%)",
      badgeBg: "rgba(99, 102, 241, 0.22)",
      badgeColor: "#818CF8",
    };
  }

  // YouTube → Red Glow
  if (str.includes("youtube")) {
    return {
      glow: "#FF0000",
      secondary: "#DC2626",
      border: "rgba(255, 0, 0, 0.5)",
      bgGradient: "linear-gradient(140deg, rgba(255, 0, 0, 0.18) 0%, rgba(20, 8, 10, 0.97) 100%)",
      badgeBg: "rgba(255, 0, 0, 0.22)",
      badgeColor: "#F87171",
    };
  }

  // Notion → White + Gray
  if (str.includes("notion")) {
    return {
      glow: "#F8FAFC",
      secondary: "#64748B",
      border: "rgba(255, 255, 255, 0.38)",
      bgGradient: "linear-gradient(140deg, rgba(248, 250, 252, 0.12) 0%, rgba(6, 7, 12, 0.98) 100%)",
      badgeBg: "rgba(255, 255, 255, 0.16)",
      badgeColor: "#E2E8F0",
    };
  }

  // Cursor → Blue
  if (str.includes("cursor")) {
    return {
      glow: "#3B82F6",
      secondary: "#1D4ED8",
      border: "rgba(59, 130, 246, 0.5)",
      bgGradient: "linear-gradient(140deg, rgba(59, 130, 246, 0.18) 0%, rgba(8, 10, 24, 0.97) 100%)",
      badgeBg: "rgba(59, 130, 246, 0.22)",
      badgeColor: "#60A5FA",
    };
  }

  // Figma → Multi-color Accent
  if (str.includes("figma")) {
    return {
      glow: "#F24E1E",
      secondary: "#A259FF",
      border: "rgba(242, 78, 30, 0.5)",
      bgGradient: "linear-gradient(140deg, rgba(242, 78, 30, 0.18) 0%, rgba(162, 89, 255, 0.12) 50%, rgba(14, 8, 20, 0.97) 100%)",
      badgeBg: "rgba(242, 78, 30, 0.22)",
      badgeColor: "#FF8A65",
    };
  }

  // Lovable → Purple Gradient
  if (str.includes("lovable")) {
    return {
      glow: "#EE0F79",
      secondary: "#9333EA",
      border: "rgba(238, 15, 121, 0.5)",
      bgGradient: "linear-gradient(140deg, rgba(238, 15, 121, 0.18) 0%, rgba(18, 8, 18, 0.97) 100%)",
      badgeBg: "rgba(238, 15, 121, 0.22)",
      badgeColor: "#F472B6",
    };
  }

  // NordVPN → Blue
  if (str.includes("nord")) {
    return {
      glow: "#0060FF",
      secondary: "#3B82F6",
      border: "rgba(0, 96, 255, 0.5)",
      bgGradient: "linear-gradient(140deg, rgba(0, 96, 255, 0.18) 0%, rgba(6, 10, 24, 0.97) 100%)",
      badgeBg: "rgba(0, 96, 255, 0.22)",
      badgeColor: "#60A5FA",
    };
  }

  // Surfshark / VPN → Teal
  if (str.includes("surfshark") || str.includes("vpn")) {
    return {
      glow: "#00D1B2",
      secondary: "#06B6D4",
      border: "rgba(0, 209, 178, 0.5)",
      bgGradient: "linear-gradient(140deg, rgba(0, 209, 178, 0.18) 0%, rgba(6, 14, 18, 0.97) 100%)",
      badgeBg: "rgba(0, 209, 178, 0.22)",
      badgeColor: "#2DD4BF",
    };
  }

  // SuperGrok → Purple
  if (str.includes("grok") || str.includes("supergrok")) {
    return {
      glow: "#9333EA",
      secondary: "#C084FC",
      border: "rgba(147, 51, 234, 0.5)",
      bgGradient: "linear-gradient(140deg, rgba(147, 51, 234, 0.18) 0%, rgba(14, 8, 22, 0.97) 100%)",
      badgeBg: "rgba(147, 51, 234, 0.22)",
      badgeColor: "#C084FC",
    };
  }

  // HeyGen → Deep Violet
  if (str.includes("heygen")) {
    return {
      glow: "#5C24FF",
      secondary: "#F97316",
      border: "rgba(92, 36, 255, 0.5)",
      bgGradient: "linear-gradient(140deg, rgba(92, 36, 255, 0.18) 0%, rgba(10, 8, 24, 0.97) 100%)",
      badgeBg: "rgba(92, 36, 255, 0.22)",
      badgeColor: "#A78BFA",
    };
  }

  // TikTok → Pink / Cyan
  if (str.includes("tiktok")) {
    return {
      glow: "#FE2C55",
      secondary: "#25F4EE",
      border: "rgba(254, 44, 85, 0.5)",
      bgGradient: "linear-gradient(140deg, rgba(254, 44, 85, 0.18) 0%, rgba(37, 244, 238, 0.1) 50%, rgba(16, 8, 14, 0.97) 100%)",
      badgeBg: "rgba(254, 44, 85, 0.22)",
      badgeColor: "#FF6B8B",
    };
  }

  // Default Luxury Theme
  return {
    glow: "#8B5CF6",
    secondary: "#EC4899",
    border: "rgba(139, 92, 246, 0.45)",
    bgGradient: "linear-gradient(140deg, rgba(139, 92, 246, 0.15) 0%, rgba(10, 8, 16, 0.97) 100%)",
    badgeBg: "rgba(139, 92, 246, 0.22)",
    badgeColor: "#C084FC",
  };
};

/* Discount calculation helper */
const calculateDiscount = (oldPriceStr, priceStr) => {
  if (!oldPriceStr || !priceStr) return "20% OFF";
  const oldVal = parseInt(oldPriceStr.replace(/\D/g, ""), 10);
  const newVal = parseInt(priceStr.replace(/\D/g, ""), 10);
  if (isNaN(oldVal) || isNaN(newVal) || oldVal <= newVal) return "20% OFF";
  return `${Math.round(((oldVal - newVal) / oldVal) * 100)}% OFF`;
};

// Default glass feature chips
const getFeatureChips = (product) => {
  if (product.features && product.features.length >= 3) {
    return product.features.slice(0, 3).map(f => f.replace(/^[🔥⚡🎬👑🎨📺🛡️🚀\s]+/, ''));
  }
  return ["Instant Delivery", "100% Warranty", "Official Access"];
};

function ProductCardComponent({ product, index = 0, priority = false }) {
  const navigate = useNavigate();
  const theme = getBrandTheme(product.id, product.name);
  const discountVal = calculateDiscount(product.oldPrice, product.price);
  const chips = getFeatureChips(product);
  const isOutOfStock = product.stock === "0" || product.stock === 0 || String(product.stock).toLowerCase().includes("out of stock") || String(product.id || "").toLowerCase().includes("grok") || String(product.name || "").toLowerCase().includes("grok");

  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="w-full flex"
    >
      <div className="relative w-full group">
        
        {/* Brand-Colored Ambient Glow Halo */}
        <div
          className="absolute -inset-1.5 rounded-[34px] pointer-events-none z-0 opacity-35 transition-all duration-500 group-hover:opacity-85 blur-2xl"
          style={{
            background: `radial-gradient(circle at 50% 30%, ${theme.glow}50 0%, ${theme.secondary}20 60%, transparent 80%)`,
          }}
        />

        {/* Unified 28px Rounded Glassmorphism Card Container */}
        <div
          onClick={() => navigate(`/product/${product.id}`)}
          className="relative w-full rounded-[28px] p-5 sm:p-6 flex flex-col justify-between cursor-pointer overflow-hidden z-10 ps-glass-reflection shadow-2xl border transition-all duration-400 group-hover:-translate-y-2.5 group-hover:shadow-[0_30px_70px_rgba(0,0,0,0.9)]"
          style={{
            background: theme.bgGradient,
            borderColor: theme.border,
            boxShadow: `0 20px 50px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.15)`,
          }}
        >
          {/* Noise Overlay & Shimmer Reflection */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <span className="ps-shimmer absolute inset-0 rounded-[28px] overflow-hidden pointer-events-none" />

          <div>
            
            {/* TOP BADGES ROW: Guaranteed single line with zero overlap */}
            <div className="flex items-center justify-between gap-1 w-full mb-4 relative z-10 min-h-[28px]">
              
              {/* Top Left: Duration Badge */}
              <span
                className="px-2 py-1 rounded-full text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider border backdrop-blur-md shadow-sm shrink-0 flex items-center gap-1"
                style={{
                  background: theme.badgeBg,
                  borderColor: `${theme.glow}50`,
                  color: theme.badgeColor,
                }}
              >
                <span>🕒</span>
                <span>{product.duration}</span>
              </span>

              {/* Top Right: Stock & Discount Badges */}
              <div className="flex items-center gap-1 shrink-0">
                <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[9.5px] font-extrabold bg-red-500/20 text-red-300 border border-red-500/40 uppercase tracking-wider shrink-0">
                  {discountVal}
                </span>

                {isOutOfStock ? (
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-500/20 border border-red-500/40 text-[9px] sm:text-[9.5px] font-bold text-red-300 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    <span>Out of Stock</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 text-[9px] sm:text-[9.5px] font-bold text-emerald-300 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span>{product.stock ? `${product.stock} Stock` : "In Stock"}</span>
                  </div>
                )}
              </div>

            </div>

            {(product.hasTimer || product.id === "gemini-pro-18") && (
              <div className="mb-3 relative z-10">
                <CountdownTimer compact targetPrice={product.price} futurePrice={product.oldPrice} />
              </div>
            )}

            {/* PRODUCT LOGO: Large Glass Box with Soft Brand Glow Lighting */}
            <div className="flex justify-center my-3 relative z-10">
              <div
                className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl sm:rounded-3xl p-3 sm:p-4 flex items-center justify-center border shadow-2xl transition-transform duration-500 group-hover:scale-105"
                style={{
                  background: `radial-gradient(circle, ${theme.glow}35 0%, rgba(10, 12, 18, 0.98) 100%)`,
                  borderColor: `${theme.glow}65`,
                  boxShadow: `0 12px 30px rgba(0,0,0,0.8), 0 0 25px ${theme.glow}25`,
                }}
              >
                <span className="ps-shimmer absolute inset-0 pointer-events-none" />
                <LazyImage
                  src={product.logo}
                  alt={`${product.name} Official Subscription Logo`}
                  title={`${product.name} Subscription at Prime Tools Hub`}
                  width={180}
                  height={180}
                  className="w-22 h-22 sm:w-26 sm:h-26 object-contain relative z-10 filter drop-shadow-[0_8px_18px_rgba(0,0,0,0.85)]"
                  priority={priority}
                />
              </div>
            </div>

            {/* PRODUCT TITLE: Large Bold Luxury Typography */}
            <h3 className="font-display font-black text-lg sm:text-xl text-white tracking-tight leading-snug text-center mb-1.5 min-h-[46px] flex items-center justify-center relative z-10 group-hover:text-cyan-300 transition-colors">
              {product.name}
            </h3>

            {/* DESCRIPTION: Max 2 lines, clean gray text */}
            <p className="text-xs text-slate-300 text-center leading-relaxed font-body mb-3.5 line-clamp-2 px-1 relative z-10 min-h-[36px]">
              {product.tagline || product.description}
            </p>

            {/* FEATURE CHIPS: Glass Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 mb-4 relative z-10">
              {chips.map((chip, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 rounded-lg text-[10px] font-semibold text-slate-200 bg-white/[0.06] border border-white/10 flex items-center gap-1 backdrop-blur-md"
                >
                  <Check size={11} className="text-emerald-400 shrink-0" />
                  <span className="truncate max-w-[120px]">{chip}</span>
                </span>
              ))}
            </div>

            {/* PRICE AREA: Premium Pricing Layout */}
            <div className="flex flex-col items-center justify-center gap-0.5 mb-4 relative z-10 py-2 border-y border-white/10 bg-white/[0.03] rounded-2xl">
              {product.oldPrice && (
                <span className="text-xs text-slate-400 line-through font-mono tracking-wide">
                  {product.oldPrice}
                </span>
              )}
              <span
                className="text-2xl sm:text-3xl font-black font-display tracking-tight text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.35)]"
                style={{
                  background: "linear-gradient(135deg, #10B981 0%, #34D399 50%, #6EE7B7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {product.price}
              </span>
            </div>

          </div>

          {/* BUTTONS ROW: Side-by-side View Details & Buy Now matching reference image */}
          <div className="grid grid-cols-2 gap-2 w-full relative z-10 font-body">
            {/* View Details Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/product/${product.id}`);
              }}
              className="py-2.5 px-2 rounded-xl text-[11px] sm:text-xs font-bold text-slate-200 border border-white/15 bg-white/5 hover:bg-white/15 hover:text-white transition-all flex items-center justify-center min-h-[42px] cursor-pointer"
            >
              <span>View Details</span>
            </button>

            {/* Buy Now Button (WhatsApp Order) */}
            {isOutOfStock ? (
              <button
                disabled
                onClick={(e) => e.stopPropagation()}
                className="py-2.5 px-2 rounded-xl text-[11px] sm:text-xs font-extrabold text-red-300/80 bg-red-950/40 border border-red-500/30 flex items-center justify-center gap-1 cursor-not-allowed min-h-[42px]"
              >
                <span>Out of Stock</span>
              </button>
            ) : (
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  openWhatsApp(product.name, product.duration, product.price);
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="py-2.5 px-2 rounded-xl text-[11px] sm:text-xs font-extrabold text-white flex items-center justify-center gap-1 transition-all duration-300 shadow-lg cursor-pointer min-h-[42px]"
                style={{
                  background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
                  boxShadow: "0 4px 15px rgba(124, 58, 237, 0.35)",
                }}
              >
                <MessageCircle size={14} className="text-white shrink-0" />
                <span className="tracking-wide text-white font-extrabold">Buy Now</span>
              </motion.button>
            )}
          </div>

        </div>

      </div>
    </motion.div>
  );
}

export default memo(ProductCardComponent);