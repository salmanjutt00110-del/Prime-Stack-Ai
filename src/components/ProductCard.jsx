import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { openWhatsApp } from "@/lib/whatsapp";
import { motion } from "framer-motion";

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
  if (lowerId.includes("chatgpt"))   return { primary: "16, 163, 127", secondary: "52, 211, 153" };   // Emerald
  if (lowerId.includes("gemini"))    return { primary: "139, 92, 246",  secondary: "66, 133, 244" };   // Blue + Purple
  if (lowerId.includes("veo"))       return { primary: "66, 133, 244",  secondary: "37, 99, 235" };    // Deep Blue
  if (lowerId.includes("capcut"))    return { primary: "255, 255, 255", secondary: "254, 44, 85" };    // White + Pink
  if (lowerId.includes("canva"))     return { primary: "125, 42, 232",  secondary: "236, 72, 153" };   // Purple + Pink
  if (lowerId.includes("grok"))      return { primary: "29, 161, 242",  secondary: "56, 189, 248" };   // Electric Blue
  if (lowerId.includes("surfshark")) return { primary: "2, 132, 199",   secondary: "13, 148, 136" };   // Ocean Blue
  if (lowerId.includes("tiktok"))    return { primary: "254, 44, 85",   secondary: "37, 244, 238" };   // Pink + Cyan
  if (lowerId.includes("lovable"))   return { primary: "238, 15, 121",  secondary: "139, 92, 246" };   // Pink + Purple
  if (lowerId.includes("youtube"))   return { primary: "255, 0, 0",     secondary: "204, 0, 0" };      // YouTube Red
  if (lowerId.includes("nord"))      return { primary: "69, 130, 241",  secondary: "52, 101, 200" };   // NordVPN Blue
  return { primary: "139, 92, 246", secondary: "59, 130, 246" };
};

export default function ProductCard({ product, index = 0 }) {
  const navigate = useNavigate();
  const sideGlow = getSideGlowColors(product.id);

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
    /* ── Entrance animation wrapper ── */
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.92, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.9, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="w-full flex"
    >
      {/* ── Outer glow wrapper — premium side glow effect ── */}
      <div className="relative w-full group">

        {/* Side Glow — Left */}
        <motion.div
          className="absolute -left-3 top-[15%] bottom-[15%] w-20 rounded-full pointer-events-none z-0"
          style={{
            background: `radial-gradient(ellipse at 100% 50%, rgba(${sideGlow.primary}, 0.35) 0%, rgba(${sideGlow.secondary}, 0.15) 40%, transparent 70%)`,
            filter: "blur(30px)",
            willChange: "transform, opacity",
            transform: "translateZ(0)",
          }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scaleY: [1, 1.05, 1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
        />

        {/* Side Glow — Right */}
        <motion.div
          className="absolute -right-3 top-[15%] bottom-[15%] w-20 rounded-full pointer-events-none z-0"
          style={{
            background: `radial-gradient(ellipse at 0% 50%, rgba(${sideGlow.secondary}, 0.35) 0%, rgba(${sideGlow.primary}, 0.15) 40%, transparent 70%)`,
            filter: "blur(30px)",
            willChange: "transform, opacity",
            transform: "translateZ(0)",
          }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scaleY: [1, 1.05, 1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 + 0.5 }}
        />

        {/* Side Glow — Top */}
        <motion.div
          className="absolute left-[15%] right-[15%] -top-2 h-16 rounded-full pointer-events-none z-0"
          style={{
            background: `radial-gradient(ellipse at 50% 100%, rgba(${sideGlow.primary}, 0.3) 0%, transparent 70%)`,
            filter: "blur(25px)",
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.15 }}
        />

        {/* Side Glow — Bottom */}
        <motion.div
          className="absolute left-[15%] right-[15%] -bottom-2 h-16 rounded-full pointer-events-none z-0"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, rgba(${sideGlow.secondary}, 0.3) 0%, transparent 70%)`,
            filter: "blur(25px)",
          }}
          animate={{
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: index * 0.15 + 0.3 }}
        />

        {/* ── Main Card Body ── */}
        <motion.div
          className="relative rounded-[32px] p-7 sm:p-8 flex flex-col cursor-pointer w-full overflow-hidden z-10"
          layoutScroll
          onClick={() => navigate(`/product/${product.id}`)}
          style={{
            background: "linear-gradient(180deg, rgba(15, 15, 20, 0.92) 0%, rgba(8, 8, 12, 0.96) 100%)",
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
            border: `1px solid rgba(${sideGlow.primary}, 0.15)`,
            boxShadow: `0 30px 80px rgba(0, 0, 0, 0.8), 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.06)`,
            willChange: "transform",
            transform: "translateZ(0)",
          }}
          whileHover={{
            y: -10,
            scale: 1.02,
            borderColor: `rgba(${sideGlow.primary}, 0.3)`,
            boxShadow: `0 40px 100px rgba(0, 0, 0, 0.9), 0 0 50px rgba(${sideGlow.primary}, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 280, damping: 24 }}
        >
          {/* Animated border glow — rotating gradient border */}
          <motion.div
            className="absolute inset-0 rounded-[32px] pointer-events-none z-0"
            style={{
              padding: "1px",
              background: `conic-gradient(from 0deg, transparent, rgba(${sideGlow.primary}, 0.4), transparent, rgba(${sideGlow.secondary}, 0.3), transparent)`,
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
            animate={{
              rotate: [0, 360]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />

          {/* Glass Reflection sweep */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-20 z-0"
            style={{
              background: "linear-gradient(115deg, transparent 35%, rgba(255, 255, 255, 0.04) 50%, transparent 65%)",
              backgroundSize: "200% 100%",
            }}
            animate={{
              backgroundPosition: ["-200% 0%", "200% 0%"]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: index * 0.3 }}
          />

          {/* Ambient brand color glow inside card (top area) */}
          <div
            className="absolute top-0 left-0 right-0 h-[60%] pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: `radial-gradient(ellipse at 50% 0%, rgba(${sideGlow.primary}, 0.12) 0%, transparent 70%)`,
            }}
          />

          {/* ── SAVE Badge (top-left floating glass) ── */}
          <motion.div
            className="absolute top-5 left-5 z-20 px-3.5 py-2 rounded-2xl flex items-center gap-2"
            style={{
              background: "rgba(8, 8, 12, 0.75)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: `0 8px 30px rgba(0,0,0,0.6), 0 0 15px rgba(${sideGlow.primary}, 0.1)`,
            }}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div
              className="flex items-center justify-center w-6 h-6 rounded-full shrink-0"
              style={{
                background: `rgba(${sideGlow.primary}, 0.15)`,
                border: `1px solid rgba(${sideGlow.primary}, 0.3)`,
                boxShadow: `0 0 12px rgba(${sideGlow.primary}, 0.3)`,
              }}
            >
              <LightningIcon size={11} style={{ color: product.color }} />
            </div>
            <div className="flex flex-col text-left leading-[1.15]">
              <span className="text-white/40 text-[8px] font-black uppercase tracking-widest">SAVE</span>
              <span className="text-white text-sm font-black tracking-tight">{discountVal}</span>
            </div>
          </motion.div>

          {/* ── Logo Section ── */}
          <div className="flex justify-center mb-7 mt-6 relative z-10">
            {/* Breathing radial glow behind logo */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
              style={{
                width: 180,
                height: 180,
                background: `radial-gradient(circle, rgba(${sideGlow.primary}, 0.2) 0%, rgba(${sideGlow.secondary}, 0.1) 40%, transparent 70%)`,
                filter: "blur(100px)",
              }}
              animate={{
                opacity: [0.15, 0.4, 0.15],
                scale: [1, 1.15, 1],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.15 }}
            />

            {/* Logo Orb */}
            <motion.div
              className="relative flex items-center justify-center rounded-full overflow-hidden"
              style={{
                width: 120,
                height: 120,
                background: `radial-gradient(circle at 50% 35%, rgba(${sideGlow.primary}, 0.12) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.03) 100%)`,
                backdropFilter: "blur(35px)",
                WebkitBackdropFilter: "blur(35px)",
                border: `3px solid rgba(${sideGlow.primary}, 0.6)`,
                boxShadow: `0 15px 40px rgba(0, 0, 0, 0.5), 0 0 40px rgba(${sideGlow.primary}, 0.25), 0 0 80px rgba(${sideGlow.primary}, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 0 25px rgba(255, 255, 255, 0.03)`,
              }}
              animate={{
                y: [0, -5, 0],
                scale: [1, 1.02, 1],
                boxShadow: [
                  `0 15px 40px rgba(0,0,0,0.5), 0 0 40px rgba(${sideGlow.primary}, 0.25), 0 0 80px rgba(${sideGlow.primary}, 0.1), inset 0 1px 0 rgba(255,255,255,0.2)`,
                  `0 15px 40px rgba(0,0,0,0.5), 0 0 55px rgba(${sideGlow.primary}, 0.4), 0 0 100px rgba(${sideGlow.primary}, 0.18), inset 0 1px 0 rgba(255,255,255,0.2)`,
                  `0 15px 40px rgba(0,0,0,0.5), 0 0 40px rgba(${sideGlow.primary}, 0.25), 0 0 80px rgba(${sideGlow.primary}, 0.1), inset 0 1px 0 rgba(255,255,255,0.2)`,
                ],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: index * 0.12 }}
              whileHover={{
                scale: 1.08,
                boxShadow: `0 15px 40px rgba(0,0,0,0.6), 0 0 65px rgba(${sideGlow.primary}, 0.5), 0 0 120px rgba(${sideGlow.primary}, 0.25), inset 0 1px 0 rgba(255,255,255,0.25)`,
              }}
            >
              <span className="ps-shimmer absolute inset-0" />
              <img
                src={product.logo}
                alt={product.name}
                className="w-[70px] h-[70px] object-contain relative z-10"
                style={{
                  filter: product.id.toLowerCase().includes("youtube")
                    ? `invert(1) hue-rotate(180deg) brightness(1.3) contrast(1.2) drop-shadow(0 4px 12px rgba(0,0,0,0.3)) drop-shadow(0 0 20px rgba(${sideGlow.primary}, 0.3))`
                    : `brightness(1.2) contrast(1.15) drop-shadow(0 4px 12px rgba(0,0,0,0.3)) drop-shadow(0 0 20px rgba(${sideGlow.primary}, 0.3))`,
                  mixBlendMode: product.id.toLowerCase().includes("youtube") ? "screen" : "normal",
                }}
              />
            </motion.div>
          </div>

          {/* ── Product Title ── */}
          <h3 className="font-display font-bold text-white text-xl sm:text-[22px] leading-snug tracking-tight mb-2.5 text-center min-h-[56px] flex items-center justify-center relative z-10">
            {product.name}
          </h3>

          {/* ── Duration Badge ── */}
          <div className="flex justify-center mb-4 relative z-10">
            <span
              className="inline-flex items-center px-4 py-1.5 rounded-full text-[10px] font-bold border backdrop-blur-sm"
              style={{
                background: `rgba(${sideGlow.primary}, 0.08)`,
                borderColor: `rgba(${sideGlow.primary}, 0.25)`,
                color: product.color,
                boxShadow: `0 4px 15px rgba(0, 0, 0, 0.2), 0 0 12px rgba(${sideGlow.primary}, 0.12)`,
              }}
            >
              {product.duration.includes("Stable") || product.duration.includes("Access") ? product.duration : `${product.duration} Access`}
            </span>
          </div>

          {/* ── Description ── */}
          <p className="text-white/45 text-[11px] sm:text-xs text-center leading-relaxed mb-5 font-body px-1 line-clamp-2 min-h-[36px] relative z-10">
            Official {product.name} account with {product.duration} premium access.
          </p>

          {/* ── Pricing Block ── */}
          <div className="flex flex-col items-center gap-1.5 mb-6 relative z-10">
            {product.oldPrice && (
              <span className="text-white/35 text-xs line-through font-light tracking-wide">
                {product.oldPrice}
              </span>
            )}
            <motion.span
              className="text-3xl sm:text-[34px] font-black font-display tracking-tight relative"
              style={{
                background: "linear-gradient(135deg, #60A5FA 0%, #A78BFA 40%, #F472B6 80%, #60A5FA 100%)",
                backgroundSize: "300% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              animate={{
                backgroundPosition: ["0% center", "300% center"],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              {product.price}
            </motion.span>
          </div>

          {/* ── Features Row ── */}
          <div className="flex items-center justify-between gap-2 border-t border-white/[0.06] py-4 mb-6 text-[10px] text-white/70 font-semibold relative z-10">
            <div className="flex items-center gap-1.5">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/15 shrink-0">
                <LightningIcon size={12} style={{ color: "#3B82F6" }} />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-white/80">Instant</span>
                <span className="text-white/35 text-[8px]">Activation</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/15 shrink-0">
                <ShieldIcon size={12} style={{ color: "#8B5CF6" }} />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-white/80">Premium</span>
                <span className="text-white/35 text-[8px]">Access</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/15 shrink-0">
                <HeadsetIcon size={12} style={{ color: "#EC4899" }} />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-white/80">24/7</span>
                <span className="text-white/35 text-[8px]">Support</span>
              </div>
            </div>
          </div>

          {/* ── Buy Button ── */}
          <div className="flex flex-col gap-3 w-full mt-auto font-body relative z-10">
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                openWhatsApp(product.name, product.duration, product.price);
              }}
              className="relative flex items-center justify-center gap-2.5 w-full h-[58px] rounded-2xl text-[13px] font-bold text-white overflow-hidden active:scale-[0.97] transition-transform"
              style={{
                background: "linear-gradient(135deg, #3B82F6 0%, #7C3AED 50%, #EC4899 100%)",
                backgroundSize: "200% 200%",
                boxShadow: `0 8px 35px rgba(124, 58, 237, 0.25), 0 0 20px rgba(${sideGlow.primary}, 0.1)`,
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: `0 12px 45px rgba(124, 58, 237, 0.4), 0 0 30px rgba(${sideGlow.primary}, 0.2)`,
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <span className="ps-shimmer absolute inset-0 z-0" />
              <MessageCircle size={16} className="shrink-0 relative z-10" />
              <span className="tracking-wide relative z-10">Buy on WhatsApp</span>
            </motion.button>

            {/* ── View Details Button ── */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/product/${product.id}`);
              }}
              className="group/details flex items-center justify-center gap-2 w-full h-[46px] rounded-xl text-xs font-semibold text-white/70 border border-white/[0.08] hover:border-white/20 hover:text-white hover:bg-white/[0.04] transition-all duration-300 active:scale-[0.97]"
            >
              <span>View Details</span>
              <span className="transition-transform duration-300 group-hover/details:translate-x-1 text-white/40 group-hover/details:text-white">→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}