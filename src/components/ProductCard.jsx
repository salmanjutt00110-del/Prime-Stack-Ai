import { memo, useState } from "react";
import { MessageCircle, Check, Flame, Zap, Gem, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { openWhatsApp } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import LazyImage from "@/components/LazyImage";
import CountdownTimer from "@/components/CountdownTimer";
import { useCurrency } from "@/context/CurrencyContext";

const getBadgeConfig = (id = "", name = "") => {
  const str = (id + " " + name).toLowerCase();
  if (str.includes("surfshark")) return { label: "❌ Out of Stock", color: "bg-red-500/20 text-red-300 border-red-500/40" };
  if (str.includes("grok") || str.includes("supergrok")) return { label: "❌ Out of Stock", color: "bg-red-500/20 text-red-300 border-red-500/40" };
  if (str.includes("chatgpt")) return { label: "🔥 Best Seller", color: "bg-amber-500/20 text-amber-300 border-amber-500/40" };
  if (str.includes("veo")) return { label: "⚡ New", color: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40" };
  if (str.includes("canva")) return { label: "🔥 Popular", color: "bg-pink-500/20 text-pink-300 border-pink-500/40" };
  if (str.includes("gemini")) return { label: "⚡ Top Value", color: "bg-blue-500/20 text-blue-300 border-blue-500/40" };
  return null;
};

const getBrandTheme = (id = "", name = "") => {
  const str = (id + " " + name).toLowerCase();
  if (str.includes("chatgpt")) {
    return {
      glow: "#10A37F",
      border: "rgba(16, 163, 127, 0.5)",
      bgGradient: "linear-gradient(140deg, rgba(16, 163, 127, 0.18) 0%, rgba(8, 14, 12, 0.97) 100%)",
    };
  }
  if (str.includes("gemini")) {
    return {
      glow: "#4285F4",
      border: "rgba(66, 133, 244, 0.5)",
      bgGradient: "linear-gradient(140deg, rgba(66, 133, 244, 0.18) 0%, rgba(8, 10, 24, 0.97) 100%)",
    };
  }
  if (str.includes("canva")) {
    return {
      glow: "#7D2AE8",
      border: "rgba(125, 42, 232, 0.5)",
      bgGradient: "linear-gradient(140deg, rgba(125, 42, 232, 0.2) 0%, rgba(10, 8, 24, 0.97) 100%)",
    };
  }
  if (str.includes("capcut")) {
    return {
      glow: "#FE2C55",
      border: "rgba(254, 44, 85, 0.5)",
      bgGradient: "linear-gradient(140deg, rgba(254, 44, 85, 0.18) 0%, rgba(15, 23, 42, 0.97) 100%)",
    };
  }
  if (str.includes("veo")) {
    return {
      glow: "#6366F1",
      border: "rgba(99, 102, 241, 0.5)",
      bgGradient: "linear-gradient(140deg, rgba(99, 102, 241, 0.18) 0%, rgba(10, 10, 24, 0.97) 100%)",
    };
  }
  if (str.includes("surfshark") || str.includes("vpn")) {
    return {
      glow: "#00D1B2",
      border: "rgba(0, 209, 178, 0.5)",
      bgGradient: "linear-gradient(140deg, rgba(0, 209, 178, 0.18) 0%, rgba(6, 14, 18, 0.97) 100%)",
    };
  }
  return {
    glow: "#8B5CF6",
    border: "rgba(139, 92, 246, 0.45)",
    bgGradient: "linear-gradient(140deg, rgba(139, 92, 246, 0.15) 0%, rgba(10, 8, 16, 0.97) 100%)",
  };
};

function ProductCardComponent({ product, index = 0, priority = false }) {
  const navigate = useNavigate();
  const { formatPrice } = useCurrency();
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  const theme = getBrandTheme(product.id, product.name);
  const badge = getBadgeConfig(product.id, product.name);
  const isChatGPT = String(product.id || "").toLowerCase().includes("chatgpt");
  const isOutOfStock =
    product.stock === "0" ||
    product.stock === 0 ||
    String(product.stock).toLowerCase().includes("out of stock") ||
    String(product.id || "").toLowerCase().includes("grok") ||
    String(product.id || "").toLowerCase().includes("surfshark") ||
    String(product.name || "").toLowerCase().includes("surfshark");

  // Dynamic price calculation based on selected plan
  const getDynamicPricing = () => {
    const rawPrice = parseInt(product.price.replace(/\D/g, ""), 10) || 1500;
    const rawOldPrice = parseInt((product.oldPrice || "").replace(/\D/g, ""), 10) || rawPrice * 1.25;

    if (selectedPlan === "3months") {
      const p = Math.round(rawPrice * 2.6);
      const op = Math.round(rawOldPrice * 2.7);
      return { price: `Rs. ${p.toLocaleString()}`, oldPrice: `Rs. ${op.toLocaleString()}`, label: "3 Months" };
    }
    if (selectedPlan === "yearly") {
      const p = Math.round(rawPrice * 8.5);
      const op = Math.round(rawOldPrice * 9);
      return { price: `Rs. ${p.toLocaleString()}`, oldPrice: `Rs. ${op.toLocaleString()}`, label: "Yearly" };
    }
    return { price: product.price, oldPrice: product.oldPrice, label: product.duration || "1 Month" };
  };

  const pricing = getDynamicPricing();

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      className="w-full flex"
    >
      <div className="relative w-full group">
        
        {/* Glow Border Animation */}
        <div
          className="absolute -inset-1 rounded-[28px] pointer-events-none z-0 opacity-40 transition-all duration-500 group-hover:opacity-100 blur-xl"
          style={{
            background: `radial-gradient(circle at 50% 30%, ${theme.glow}70 0%, transparent 80%)`,
          }}
        />

        {/* Card Container */}
        <div
          onClick={() => navigate(`/product/${product.id}`)}
          className="relative w-full rounded-[26px] p-5 sm:p-6 flex flex-col justify-between cursor-pointer overflow-hidden z-10 bg-[#0d1117] border transition-all duration-400 group-hover:-translate-y-2 group-hover:border-cyan-400/60 shadow-2xl"
          style={{
            borderColor: theme.border,
            boxShadow: `0 20px 40px rgba(0,0,0,0.8)`,
          }}
        >
          {/* Most Popular Ribbon on ChatGPT */}
          {isChatGPT && (
            <div className="absolute -top-1 -right-1 z-20 overflow-hidden w-28 h-28 pointer-events-none">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 text-[10px] font-black uppercase tracking-wider text-center py-1 font-mono shadow-md rotate-45 translate-x-7 translate-y-4 w-32 border border-yellow-200">
                Most Popular
              </div>
            </div>
          )}

          <div>
            {/* BADGES & STOCK ROW */}
            <div className="flex items-center justify-between gap-2 mb-3 relative z-10">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/10 text-white flex items-center gap-1 border border-white/15">
                {product.duration || "Verified"}
              </span>

              {badge && (
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${badge.color}`}>
                  {badge.label}
                </span>
              )}
            </div>

            {/* TOOL LOGO WITH HIGH-CONTRAST DUAL GLOW */}
            <div className="flex justify-center my-3 relative z-10">
              <div
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl p-3 flex items-center justify-center border shadow-2xl transition-transform duration-300 group-hover:scale-105"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${theme.glow}45 0%, rgba(13, 17, 23, 0.98) 100%)`,
                  borderColor: `${theme.glow}70`,
                  boxShadow: `0 12px 30px rgba(0,0,0,0.8), 0 0 25px ${theme.glow}30`,
                }}
              >
                <LazyImage
                  src={product.logo}
                  alt={product.name}
                  width={140}
                  height={140}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain filter drop-shadow-[0_0_12px_rgba(255,255,255,0.75)] drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]"
                  priority={priority}
                />
              </div>
            </div>

            {/* TOOL NAME */}
            <h3 className="font-display font-black text-lg sm:text-xl text-white tracking-tight text-center mb-1 group-hover:text-[#00ff88] transition-colors">
              {product.name}
            </h3>

            {/* SHORT DESCRIPTION (1 line max) */}
            <p className="text-xs text-slate-300 text-center leading-snug font-body mb-4 line-clamp-1 px-1">
              {product.tagline || product.description}
            </p>

            {/* PLAN OPTIONS SELECTOR TABS */}
            <div className="grid grid-cols-3 gap-1 p-1 bg-slate-900/90 border border-white/10 rounded-xl mb-4 text-[10px] font-bold text-center">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPlan("monthly");
                }}
                className={`py-1.5 rounded-lg transition-all ${
                  selectedPlan === "monthly"
                    ? "bg-[#2563EB] text-white font-extrabold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPlan("3months");
                }}
                className={`py-1.5 rounded-lg transition-all ${
                  selectedPlan === "3months"
                    ? "bg-[#2563EB] text-white font-extrabold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                3 Months
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPlan("yearly");
                }}
                className={`py-1.5 rounded-lg transition-all ${
                  selectedPlan === "yearly"
                    ? "bg-[#2563EB] text-white font-extrabold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Yearly
              </button>
            </div>

            {/* PRICE DISPLAY */}
            <div className="flex flex-col items-center justify-center py-2.5 px-3 bg-white/[0.04] border border-white/10 rounded-xl mb-4">
              <div className="flex items-center gap-2">
                {pricing.oldPrice && (
                  <span className="text-xs text-slate-400 line-through font-mono">
                    {pricing.oldPrice}
                  </span>
                )}
                <span className="text-xs font-extrabold text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20">
                  SAVE 25%
                </span>
              </div>
              <span className="text-2xl font-black font-display text-[#00ff88] mt-0.5">
                {pricing.price}
              </span>
            </div>

          </div>

          {/* CTA BUTTON: "Order via WhatsApp →" */}
          {isOutOfStock ? (
            <button
              disabled
              onClick={(e) => e.stopPropagation()}
              className="w-full py-3 rounded-xl font-display font-bold text-xs text-slate-400 bg-slate-800 border border-slate-700 cursor-not-allowed text-center"
            >
              Out of Stock
            </button>
          ) : (
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                openWhatsApp(product.name, pricing.label, pricing.price);
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-xl font-display font-black text-sm text-white bg-[#25D366] hover:bg-[#20bd5a] flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-all cursor-pointer"
            >
              <MessageCircle size={17} className="fill-white" />
              <span>Order via WhatsApp →</span>
            </motion.button>
          )}

        </div>

      </div>
    </motion.div>
  );
}

export default memo(ProductCardComponent);