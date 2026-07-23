import { useState, useEffect, memo } from "react";
import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { openWhatsApp } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import LazyImage from "@/components/LazyImage";

/* ── Inline SVG Icons ── */
const LightningIcon = ({ size = 12, style, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style} className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const ShieldIcon = ({ size = 12, style, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={style} className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const HeadsetIcon = ({ size = 12, style, className }) => (
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
  if (lowerId.includes("capcut"))    return { primary: "255, 255, 255", secondary: "254, 44, 85" };
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
            background: `radial-gradient(circle at 50% 50%, rgba(${sideGlow.primary}, 0.22) 0%, rgba(${sideGlow.secondary}, 0.08) 50%, transparent 70%)`,
            filter: "blur(25px)",
          }}
        />

        {/* ── Main Card Body ── */}
        <motion.div
          className="relative rounded-[32px] p-7 sm:p-8 flex flex-col cursor-pointer w-full overflow-hidden z-10 ps-glass-reflection"
          onClick={() => navigate(`/product/${product.id}`)}
          style={{
            background: "linear-gradient(180deg, rgba(15, 15, 20, 0.94) 0%, rgba(8, 8, 12, 0.98) 100%)",
            backdropFilter: isMobile ? "blur(12px)" : "blur(30px)",
            WebkitBackdropFilter: isMobile ? "blur(12px)" : "blur(30px)",
            border: `1px solid rgba(${sideGlow.primary}, 0.2)`,
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.75)",
            willChange: "transform",
            transform: "translateZ(0)",
          }}
          whileHover={isMobile ? {} : {
            y: -8,
            scale: 1.015,
            borderColor: `rgba(${sideGlow.primary}, 0.35)`,
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

          <div
            className="absolute top-0 left-0 right-0 h-[60%] pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(ellipse at 50% 0%, rgba(${sideGlow.primary}, 0.12) 0%, transparent 70%)`,
            }}
          />

          {/* SAVE Badge */}
          <div
            className="absolute top-5 left-5 z-20 px-3.5 py-2 rounded-2xl flex items-center gap-2"
            style={{
              background: "rgba(8, 8, 12, 0.85)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
            }}
          >
            <div
              className="flex items-center justify-center w-6 h-6 rounded-full shrink-0"
              style={{
                background: `rgba(${sideGlow.primary}, 0.2)`,
                border: `1px solid rgba(${sideGlow.primary}, 0.4)`,
              }}
            >
              <LightningIcon size={11} style={{ color: product.color }} />
            </div>
            <div className="flex flex-col text-left leading-[1.15]">
              <span className="text-white/70 text-[8px] font-black uppercase tracking-widest">SAVE</span>
              <span className="text-white text-sm font-black tracking-tight">{discountVal}</span>
            </div>
          </div>

          {/* Logo Section */}
          <div className="flex justify-center mb-7 mt-6 relative z-10">
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none w-36 h-36 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle, rgba(${sideGlow.primary}, 0.25) 0%, transparent 70%)`,
                filter: "blur(30px)",
              }}
            />

            <div
              className="relative flex items-center justify-center rounded-full overflow-hidden md:ps-logo-float-loop"
              style={{
                width: 120,
                height: 120,
                background: `radial-gradient(circle at 50% 35%, rgba(${sideGlow.primary}, 0.15) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.03) 100%)`,
                backdropFilter: isMobile ? "blur(10px)" : "blur(20px)",
                WebkitBackdropFilter: isMobile ? "blur(10px)" : "blur(20px)",
                border: `3px solid rgba(${sideGlow.primary}, 0.55)`,
                boxShadow: `0 15px 40px rgba(0, 0, 0, 0.4), 0 0 35px rgba(${sideGlow.primary}, 0.25)`,
              }}
            >
              <span className="ps-shimmer absolute inset-0" />
              <LazyImage
                src={product.logo}
                alt={`${product.name} official logo`}
                className="w-[70px] h-[70px] relative z-10"
                imgStyle={{
                  filter: "brightness(1.2) contrast(1.15)"
                }}
                priority={priority}
              />
            </div>
          </div>

          {/* Product Title */}
          <h3 className="font-display font-bold text-white text-xl sm:text-[22px] leading-snug tracking-tight mb-2.5 text-center min-h-[56px] flex items-center justify-center relative z-10">
            {product.name}
          </h3>

          {/* Duration Badge */}
          <div className="flex justify-center mb-4 relative z-10">
            <span
              className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-bold border backdrop-blur-sm"
              style={{
                background: `rgba(${sideGlow.primary}, 0.12)`,
                borderColor: `rgba(${sideGlow.primary}, 0.3)`,
                color: product.color,
                boxShadow: `0 4px 12px rgba(0, 0, 0, 0.15)`,
              }}
            >
              {product.duration.includes("Stable") || product.duration.includes("Access") ? product.duration : `${product.duration} Access`}
            </span>
          </div>

          {/* Description */}
          <p className="text-white/75 text-[11px] sm:text-xs text-center leading-relaxed mb-5 font-body px-1 line-clamp-2 min-h-[36px] relative z-10">
            Official {product.name} account with {product.duration} premium access.
          </p>

          {/* Pricing Block */}
          <div className="flex flex-col items-center gap-1.5 mb-6 relative z-10">
            {product.oldPrice && (
              <span className="text-white/60 text-xs line-through font-light tracking-wide">
                {product.oldPrice}
              </span>
            )}
            <span
              className="text-3xl sm:text-[34px] font-black font-display tracking-tight relative"
              style={{
                background: "linear-gradient(135deg, #60A5FA 0%, #A78BFA 50%, #F472B6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {product.price}
            </span>
          </div>

          {/* Features Row */}
          <div className="flex items-center justify-between gap-2 border-t border-white/[0.08] py-4 mb-6 text-[10px] text-white/85 font-semibold relative z-10">
            <div className="flex items-center gap-1.5">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/25 shrink-0">
                <LightningIcon size={12} style={{ color: "#3B82F6" }} />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-white/90">Instant</span>
                <span className="text-white/60 text-[9px]">Activation</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-violet-500/15 text-violet-400 border border-violet-500/25 shrink-0">
                <ShieldIcon size={12} style={{ color: "#8B5CF6" }} />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-white/90">Premium</span>
                <span className="text-white/60 text-[9px]">Access</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-pink-500/15 text-pink-400 border border-pink-500/25 shrink-0">
                <HeadsetIcon size={12} style={{ color: "#EC4899" }} />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-white/90">24/7</span>
                <span className="text-white/60 text-[9px]">Support</span>
              </div>
            </div>
          </div>

          {/* Buy Button */}
          <div className="flex flex-col gap-3 w-full mt-auto font-body relative z-10">
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                openWhatsApp(product.name, product.duration, product.price);
              }}
              className="relative flex items-center justify-center gap-2.5 w-full h-[58px] rounded-2xl text-[13px] font-bold text-white overflow-hidden active:scale-[0.97] transition-transform min-h-[48px]"
              style={{
                background: "linear-gradient(135deg, #3B82F6 0%, #7C3AED 50%, #EC4899 100%)",
                boxShadow: `0 8px 35px rgba(124, 58, 237, 0.25)`,
              }}
              whileHover={isMobile ? {} : {
                scale: 1.025,
                boxShadow: `0 12px 45px rgba(124, 58, 237, 0.4)`,
              }}
            >
              <span className="ps-shimmer absolute inset-0 z-0" />
              <MessageCircle size={16} className="shrink-0 relative z-10" />
              <span className="tracking-wide relative z-10">Buy on WhatsApp</span>
            </motion.button>

            {/* View Details Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/product/${product.id}`);
              }}
              className="group/details flex items-center justify-center gap-2 w-full h-[46px] rounded-xl text-xs font-semibold text-white/85 border border-white/[0.12] hover:border-white/30 hover:text-white hover:bg-white/[0.06] transition-all duration-300 active:scale-[0.97] min-h-[44px]"
            >
              <span>View Details</span>
              <span className="transition-transform duration-300 group-hover/details:translate-x-1 text-white/60 group-hover/details:text-white">→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
});

export default ProductCard;