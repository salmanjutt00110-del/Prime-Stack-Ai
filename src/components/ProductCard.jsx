import { useState, useEffect, memo } from "react";
import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { openWhatsApp } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import LazyImage from "@/components/LazyImage";
import { useLanguageTheme } from "@/lib/LanguageThemeContext";

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

const ProductCard = memo(function ProductCard({ product, index = 0, priority = false }) {
  const navigate = useNavigate();
  const { t, isDark } = useLanguageTheme();
  const sideGlow = getSideGlowColors(product.id);
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.05, ease: "easeOut" }}
      className="w-full flex"
    >
      <div className="relative w-full group">
        {/* Combined Ambient Glow */}
        <div
          className="hidden md:block absolute -inset-2 rounded-[40px] pointer-events-none z-0 opacity-40 transition-opacity duration-500 group-hover:opacity-75"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(${sideGlow.primary}, ${isDark ? "0.22" : "0.15"}) 0%, rgba(${sideGlow.secondary}, 0.08) 50%, transparent 70%)`,
            filter: "blur(25px)",
          }}
        />

        {/* ── Main Card Body ── */}
        <motion.div
          className="relative rounded-[32px] p-6 sm:p-7 flex flex-col cursor-pointer w-full overflow-hidden z-10 ps-glass-reflection shadow-xl border"
          onClick={() => navigate(`/product/${product.id}`)}
          style={{
            background: isDark
              ? "linear-gradient(180deg, rgba(15, 15, 20, 0.94) 0%, rgba(8, 8, 12, 0.98) 100%)"
              : "linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(248, 250, 252, 0.98) 100%)",
            backdropFilter: isMobile ? "blur(12px)" : "blur(30px)",
            WebkitBackdropFilter: isMobile ? "blur(12px)" : "blur(30px)",
            borderColor: isDark ? `rgba(${sideGlow.primary}, 0.2)` : `rgba(0, 0, 0, 0.08)`,
            boxShadow: isDark ? "0 20px 50px rgba(0, 0, 0, 0.75)" : "0 10px 30px rgba(0, 0, 0, 0.06)",
            willChange: "transform",
            transform: "translateZ(0)",
          }}
          whileHover={isMobile ? {} : {
            y: -6,
            scale: 1.015,
            borderColor: `rgba(${sideGlow.primary}, 0.4)`,
            boxShadow: isDark 
              ? `0 30px 65px rgba(0, 0, 0, 0.85), 0 0 30px rgba(${sideGlow.primary}, 0.15)`
              : `0 20px 45px rgba(0, 0, 0, 0.1), 0 0 25px rgba(${sideGlow.primary}, 0.15)`,
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

          {/* SAVE Badge */}
          <div
            className="absolute top-5 left-5 z-20 px-3 py-1.5 rounded-2xl flex items-center gap-1.5 shadow-md border"
            style={{
              background: isDark ? "rgba(8, 8, 12, 0.85)" : "rgba(255, 255, 255, 0.9)",
              borderColor: isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.1)",
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
              <span className={`text-[8px] font-black uppercase tracking-widest ${isDark ? "text-white/70" : "text-slate-500"}`}>SAVE</span>
              <span className={`text-xs font-black tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>{discountVal}</span>
            </div>
          </div>

          {/* Logo Section */}
          <div className="flex justify-center mb-6 mt-6 relative z-10">
            <div
              className="relative flex items-center justify-center rounded-full overflow-hidden md:ps-logo-float-loop"
              style={{
                width: 110,
                height: 110,
                background: `radial-gradient(circle at 50% 35%, rgba(${sideGlow.primary}, 0.15) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.03) 100%)`,
                border: `3px solid rgba(${sideGlow.primary}, 0.55)`,
                boxShadow: `0 15px 40px rgba(0, 0, 0, 0.2), 0 0 25px rgba(${sideGlow.primary}, 0.2)`,
              }}
            >
              <span className="ps-shimmer absolute inset-0" />
              <LazyImage
                src={product.logo}
                alt={`${product.name} official logo`}
                className="w-[80px] h-[80px] relative z-10"
                imgStyle={{
                  filter: "brightness(1.1) contrast(1.1)"
                }}
                priority={priority}
              />
            </div>
          </div>

          {/* Product Title */}
          <h3 className={`font-display font-bold text-lg sm:text-[20px] leading-snug tracking-tight mb-2 text-center min-h-[50px] flex items-center justify-center relative z-10 ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            {product.name}
          </h3>

          {/* Duration Badge */}
          <div className="flex justify-center mb-3 relative z-10">
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

          {/* Description */}
          <p className={`text-[11px] sm:text-xs text-center leading-relaxed mb-5 font-body px-1 line-clamp-2 min-h-[36px] relative z-10 ${
            isDark ? "text-white/75" : "text-slate-600"
          }`}>
            Official {product.name} account with {product.duration} access.
          </p>

          {/* Pricing Block */}
          <div className="flex flex-col items-center gap-1 mb-5 relative z-10">
            {product.oldPrice && (
              <span className={`text-xs line-through font-light tracking-wide ${isDark ? "text-white/60" : "text-slate-400"}`}>
                {product.oldPrice}
              </span>
            )}
            <span
              className="text-2xl sm:text-3xl font-black font-display tracking-tight"
              style={{
                background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 50%, #DB2777 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {product.price}
            </span>
          </div>

          {/* Features Row */}
          <div className={`flex items-center justify-between gap-1.5 py-3 mb-5 text-[10px] font-semibold border-t relative z-10 ${
            isDark ? "border-white/[0.08] text-white/85" : "border-slate-200 text-slate-700"
          }`}>
            <div className="flex items-center gap-1">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/15 text-blue-500 shrink-0">
                <LightningIcon size={11} style={{ color: "#3B82F6" }} />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className={isDark ? "text-white/90" : "text-slate-800"}>{t('card_instant', 'Instant')}</span>
                <span className={isDark ? "text-white/60 text-[8.5px]" : "text-slate-500 text-[8.5px]"}>Delivery</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-violet-500/15 text-violet-500 shrink-0">
                <ShieldIcon size={11} style={{ color: "#8B5CF6" }} />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className={isDark ? "text-white/90" : "text-slate-800"}>{t('card_verified', 'Verified')}</span>
                <span className={isDark ? "text-white/60 text-[8.5px]" : "text-slate-500 text-[8.5px]"}>Guarantee</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-pink-500/15 text-pink-500 shrink-0">
                <HeadsetIcon size={11} style={{ color: "#EC4899" }} />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className={isDark ? "text-white/90" : "text-slate-800"}>24/7</span>
                <span className={isDark ? "text-white/60 text-[8.5px]" : "text-slate-500 text-[8.5px]"}>Support</span>
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
              className="keep-white relative flex items-center justify-center gap-2 w-full h-[50px] rounded-2xl text-[13px] font-bold text-white overflow-hidden active:scale-[0.97] transition-transform shadow-md"
              style={{
                background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                boxShadow: "0 6px 20px rgba(37, 211, 102, 0.25)",
              }}
              whileHover={{ scale: 1.02 }}
            >
              <MessageCircle size={16} className="shrink-0 relative z-10" />
              <span className="tracking-wide relative z-10">{t('card_buy_now', 'Order on WhatsApp')}</span>
            </motion.button>

            {/* View Details Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/product/${product.id}`);
              }}
              className={`flex items-center justify-center gap-1.5 w-full h-[42px] rounded-xl text-xs font-semibold border transition-all duration-300 active:scale-[0.97] ${
                isDark
                  ? "text-white/85 border-white/15 hover:border-white/30 hover:bg-white/10"
                  : "text-slate-700 border-slate-300 hover:border-slate-400 hover:bg-slate-100"
              }`}
            >
              <span>{t('card_view_details', 'View Details')}</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
});

export default ProductCard;