import { useState, useEffect, memo } from "react";
import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { openWhatsApp } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import LazyImage from "@/components/LazyImage";

/* ── Inline SVG Icons ── */
const LightningIcon = ({ size = 12, style = {}, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style} className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const ShieldIcon = ({ size = 12, style = {}, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={style} className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const HeadsetIcon = ({ size = 12, style = {}, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={style} className={className}>
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

/* ── Product-specific side-glow color pairs ── */
const getSideGlowColors = (id) => {
  const lowerId = id.toLowerCase();
  if (lowerId.includes("chatgpt"))   return { primary: "16, 163, 127", secondary: "52, 211, 153" };
  if (lowerId.includes("gemini"))    return { primary: "139, 92, 246",  secondary: "66, 133, 244" };
  if (lowerId.includes("veo"))       return { primary: "66, 133, 244",  secondary: "37, 99, 235" };
  if (lowerId.includes("capcut"))    return { primary: "255, 44, 85", secondary: "254, 44, 85" };
  if (lowerId.includes("canva"))     return { primary: "125, 42, 232",  secondary: "236, 72, 153" };
  if (lowerId.includes("grok"))      return { primary: "29, 161, 242",  secondary: "56, 189, 248" };
  if (lowerId.includes("surfshark")) return { primary: "2, 132, 199",   secondary: "13, 148, 136" };
  if (lowerId.includes("tiktok"))    return { primary: "254, 44, 85",   secondary: "37, 244, 238" };
  if (lowerId.includes("lovable"))   return { primary: "238, 15, 121",  secondary: "139, 92, 246" };
  if (lowerId.includes("youtube"))   return { primary: "255, 0, 0",     secondary: "204, 0, 0" };
  if (lowerId.includes("nord"))      return { primary: "69, 130, 241",  secondary: "52, 101, 200" };
  return { primary: "139, 92, 246", secondary: "59, 130, 246" };
};

// Preload route chunk on hover for instant 0ms page navigation
const preloadProductDetail = () => {
  import('@/pages/ProductDetail');
};

/**
 * @param {{ product: any, index?: number, priority?: boolean }} props
 */
function ProductCardComponent({ product, index = 0, priority = false }) {
  const navigate = useNavigate();
  const sideGlow = getSideGlowColors(product?.id || "");
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 768);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* Discount calculation */
  const calculateDiscount = (oldPriceStr, priceStr) => {
    if (!oldPriceStr || !priceStr) return "10%";
    const oldVal = parseInt(oldPriceStr.replace(/\D/g, ""), 10);
    const newVal = parseInt(priceStr.replace(/\D/g, ""), 10);
    if (isNaN(oldVal) || isNaN(newVal) || oldVal <= newVal) return "10%";
    return `${Math.round(((oldVal - newVal) / oldVal) * 100)}%`;
  };

  const discountVal = calculateDiscount(product.oldPrice, product.price);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="w-full flex"
      onMouseEnter={preloadProductDetail}
    >
      <div className="relative w-full group">
        {/* Combined Ambient Glow */}
        <div
          className="hidden md:block absolute -inset-2 rounded-[40px] pointer-events-none z-0 opacity-40 transition-opacity duration-500 group-hover:opacity-75"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(${sideGlow.primary}, 0.22) 0%, rgba(${sideGlow.secondary}, 0.08) 50%, transparent 70%)`,
            filter: "blur(25px)",
          }}
        />

        {/* ── Main Card Body ── */}
        <motion.div
          className="relative rounded-[32px] p-6 sm:p-7 flex flex-col cursor-pointer w-full overflow-hidden z-10 ps-glass-reflection shadow-xl border"
          onClick={() => navigate(`/product/${product.id}`)}
          style={{
            background: "linear-gradient(180deg, rgba(15, 15, 20, 0.94) 0%, rgba(8, 8, 12, 0.98) 100%)",
            backdropFilter: isMobile ? "blur(12px)" : "blur(30px)",
            WebkitBackdropFilter: isMobile ? "blur(12px)" : "blur(30px)",
            borderColor: `rgba(${sideGlow.primary}, 0.2)`,
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.75)",
            willChange: "transform",
            transform: "translateZ(0)",
          }}
          whileHover={isMobile ? {} : {
            y: -6,
            scale: 1.015,
            borderColor: `rgba(${sideGlow.primary}, 0.4)`,
            boxShadow: `0 30px 65px rgba(0, 0, 0, 0.85), 0 0 30px rgba(${sideGlow.primary}, 0.15)`,
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div
            className="absolute inset-0 rounded-[32px] pointer-events-none z-0"
            style={{
              padding: "1px",
              background: `linear-gradient(135deg, rgba(${sideGlow.primary}, 0.3), rgba(${sideGlow.secondary}, 0.12))`,
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />

          {/* SAVE & Rating Badges */}
          <div className="flex items-center justify-between flex-wrap gap-2 w-full mb-3 relative z-20">
            <div
              className="px-3 py-1.5 rounded-2xl flex items-center gap-1.5 shadow-md border"
              style={{
                background: "rgba(8, 8, 12, 0.85)",
                borderColor: "rgba(255, 255, 255, 0.15)",
              }}
            >
              <div
                className="flex items-center justify-center w-5 h-5 rounded-full shrink-0"
                style={{
                  background: `rgba(${sideGlow.primary}, 0.2)`,
                  border: `1px solid rgba(${sideGlow.primary}, 0.4)`,
                }}
              >
                <LightningIcon size={10} style={{ color: product.color }} />
              </div>
              <div className="flex flex-col text-left leading-[1.1]">
                <span className="text-[8px] font-black uppercase tracking-widest text-white/70">SAVE</span>
                <span className="text-xs font-black tracking-tight text-white">{discountVal}</span>
              </div>
            </div>

            {/* Stock & Rating Badge */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 backdrop-blur-md text-[10px] font-bold text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>Stock: {product.stock ? `${product.stock} Units` : "Available"} • ⭐ 4.9</span>
            </div>
          </div>

          {/* Logo Section */}
          <div className="flex justify-center mb-5 mt-2 relative z-10">
            <div
              className="relative flex items-center justify-center rounded-2xl overflow-hidden md:ps-logo-float-loop transition-transform group-hover:scale-105"
              style={{
                width: 100,
                height: 100,
                background: `radial-gradient(circle at 50% 35%, rgba(${sideGlow.primary}, 0.2) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.03) 100%)`,
                border: `2px solid rgba(${sideGlow.primary}, 0.55)`,
                boxShadow: `0 15px 40px rgba(0, 0, 0, 0.25), 0 0 25px rgba(${sideGlow.primary}, 0.25)`,
              }}
            >
              <span className="ps-shimmer absolute inset-0" />
              <LazyImage
                src={product.logo}
                alt={`${product.name} official logo`}
                className="w-[75px] h-[75px] relative z-10"
                imgStyle={{
                  filter: "brightness(1.1) contrast(1.1)"
                }}
                priority={priority}
              />
            </div>
          </div>

          {/* Product Title */}
          <h3 className="font-display font-bold text-lg sm:text-[20px] leading-snug tracking-tight mb-2 text-center min-h-[48px] flex items-center justify-center relative z-10 text-white">
            {product.name}
          </h3>

          {/* Duration & Stock Badge */}
          <div className="flex justify-center items-center gap-2 mb-3 relative z-10">
            <span
              className="inline-flex items-center px-3.5 py-1 rounded-full text-[10px] font-bold border backdrop-blur-sm"
              style={{
                background: `rgba(${sideGlow.primary}, 0.12)`,
                borderColor: `rgba(${sideGlow.primary}, 0.3)`,
                color: product.color,
              }}
            >
              {product.duration.includes("Stable") || product.duration.includes("Access") ? product.duration : `${product.duration} Access`}
            </span>
          </div>

          {/* Description / Tagline */}
          <p className="text-[11px] sm:text-xs text-center leading-relaxed mb-4 font-body px-1 line-clamp-2 min-h-[34px] relative z-10 text-white/75">
            {product.tagline || product.description || `Official ${product.name} account with ${product.duration} access.`}
          </p>

          {/* Pricing Block */}
          <div className="flex flex-col items-center gap-1 mb-4 relative z-10">
            {product.oldPrice && (
              <span className="text-xs line-through font-light tracking-wide text-white/60">
                {product.oldPrice}
              </span>
            )}
            <span
              className="text-2xl sm:text-3xl font-black font-display tracking-tight drop-shadow-[0_0_15px_rgba(16,185,129,0.35)]"
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

          {/* Features Row */}
          <div className="flex items-center justify-between gap-1.5 py-2.5 mb-4 text-[10px] font-semibold border-t border-b border-white/[0.08] text-white/85 relative z-10">
            <div className="flex items-center gap-1">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/15 text-blue-500 shrink-0">
                <LightningIcon size={11} style={{ color: "#3B82F6" }} />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-white/90">Instant</span>
                <span className="text-white/60 text-[8.5px]">Delivery</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-violet-500/15 text-violet-500 shrink-0">
                <ShieldIcon size={11} style={{ color: "#8B5CF6" }} />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-white/90">Verified</span>
                <span className="text-white/60 text-[8.5px]">Guarantee</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-pink-500/15 text-pink-500 shrink-0">
                <HeadsetIcon size={11} style={{ color: "#EC4899" }} />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-white/90">24/7</span>
                <span className="text-white/60 text-[8.5px]">Support</span>
              </div>
            </div>
          </div>

          {/* Buy Button */}
          <div className="flex flex-col gap-2.5 w-full mt-auto font-body relative z-10">
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                openWhatsApp(product.name, product.duration, product.price);
              }}
              className="relative flex items-center justify-center gap-2 w-full h-[50px] rounded-2xl text-[13px] font-bold text-white overflow-hidden active:scale-[0.97] transition-transform shadow-md"
              style={{
                background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                boxShadow: "0 6px 20px rgba(37, 211, 102, 0.25)",
              }}
              whileHover={{ scale: 1.02 }}
            >
              <MessageCircle size={16} className="shrink-0 relative z-10" />
              <span className="tracking-wide relative z-10">Order on WhatsApp</span>
            </motion.button>

            {/* View Details Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/product/${product.id}`);
              }}
              className="flex items-center justify-center gap-1.5 w-full h-[42px] rounded-xl text-xs font-semibold border transition-all duration-300 active:scale-[0.97] text-white/85 border-white/15 hover:border-white/30 hover:bg-white/10"
            >
              <span>View Details</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

const ProductCard = memo(ProductCardComponent);
export default ProductCard;