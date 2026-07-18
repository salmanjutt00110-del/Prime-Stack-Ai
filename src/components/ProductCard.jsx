import { Check, MessageCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { openWhatsApp } from "@/lib/whatsapp";
import { motion } from "framer-motion";

export default function ProductCard({ product, index = 0 }) {
  const navigate = useNavigate();

  return (
    /* Outer wrapper handling only the scroll-triggered fade-in entrance */
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="w-full flex"
    >
      {/* Inner card handling continuous float and hover animations with zero conflicts */}
      <motion.div
        className="ps-luxury-glass ps-glass-reflection ps-border-glow-wrapper relative rounded-[30px] p-8 flex flex-col items-center justify-between cursor-pointer w-full text-center border border-white/5"
        style={{
          height: "auto",
          "--border-accent": `${product.color}66`,
        }}
        onClick={() => navigate(`/product/${product.id}`)}
        whileHover={{
          y: -10,
          scale: 1.02,
          rotate: 0.5,
          borderColor: `${product.color}66`,
          boxShadow: `0 35px 80px rgba(0, 0, 0, 0.8), 0 0 50px ${product.color}25`,
        }}
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          y: {
            duration: 5 + (index % 3) * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
      >
        {/* Top Right Discount Glass Badge */}
        <motion.div
          className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-[10px] font-bold border flex items-center gap-1 backdrop-blur-md"
          style={{
            background: "rgba(255, 255, 255, 0.04)",
            borderColor: "rgba(255, 255, 255, 0.08)",
            boxShadow: `0 0 15px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
            color: "rgba(255, 255, 255, 0.9)",
          }}
          animate={{
            boxShadow: [
              "0 0 10px rgba(255, 255, 255, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              "0 0 20px rgba(255, 255, 255, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              "0 0 10px rgba(255, 255, 255, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 animate-ping" />
          <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
            SAVE 10%
          </span>
        </motion.div>

        {/* Brand-themed ambient glow overlay inside the card on hover */}
        <div
          className="absolute inset-0 -z-10 rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${product.color}0f, transparent 65%)`,
          }}
        />

        {/* Glowing top line */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${product.color}, transparent)` }}
        />

        {/* Logo Area (Glass Orb) */}
        <div className="flex justify-center mb-6 mt-2">
          <motion.div
            className="ps-logo-float-loop relative flex items-center justify-center rounded-full border"
            style={{
              width: 110,
              height: 110,
              background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
              borderColor: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(20px)",
              boxShadow: `0 15px 35px rgba(0, 0, 0, 0.4), 0 0 25px ${product.color}20, inset 0 1px 0 rgba(255, 255, 255, 0.15)`,
            }}
            whileHover={{
              scale: 1.05,
              borderColor: `${product.color}50`,
              boxShadow: `0 15px 35px rgba(0, 0, 0, 0.5), 0 0 35px ${product.color}35`,
            }}
          >
            {/* Shimmer overlay inside orb */}
            <span className="ps-shimmer absolute inset-0 rounded-full" />

            <img
              src={product.logo}
              alt={product.name}
              className="w-[70px] h-[70px] object-contain relative z-10 transition-transform duration-500"
              style={{
                filter: `drop-shadow(0 6px 15px rgba(0,0,0,0.3)) drop-shadow(0 0 10px ${product.color}15)`,
              }}
            />
          </motion.div>
        </div>

        {/* Product Name */}
        <h3 className="font-display font-bold text-white text-xl sm:text-2xl leading-tight mb-3 tracking-tight max-h-[56px] overflow-hidden line-clamp-2">
          {product.name}
        </h3>

        {/* Duration Badge */}
        <div className="flex justify-center mb-5">
          <span
            className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-md"
            style={{
              background: "rgba(59, 130, 246, 0.15)", // Blue Glass Background
              borderColor: "rgba(59, 130, 246, 0.25)",
              color: "#60A5FA", // Blue text
              boxShadow: "0 4px 15px rgba(59, 130, 246, 0.1)",
            }}
          >
            {product.duration}
          </span>
        </div>

        {/* Pricing Block */}
        <div className="flex flex-col items-center gap-1 mb-6">
          {product.oldPrice && (
            <span className="text-white/35 text-xs sm:text-sm line-through font-light">
              {product.oldPrice}
            </span>
          )}
          <span className="text-3xl sm:text-4xl font-extrabold font-display bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
            {product.price}
          </span>
        </div>

        {/* Unified 3 Premium Features */}
        <ul className="w-full space-y-3 mb-8 text-left border-t border-b border-white/5 py-4 font-body">
          <li className="flex items-center gap-2.5 text-xs sm:text-sm text-white/70">
            <Check size={16} className="text-blue-400 shrink-0" />
            <span>Instant Activation</span>
          </li>
          <li className="flex items-center gap-2.5 text-xs sm:text-sm text-white/70">
            <Check size={16} className="text-violet-400 shrink-0" />
            <span>Premium Access</span>
          </li>
          <li className="flex items-center gap-2.5 text-xs sm:text-sm text-white/70">
            <Check size={16} className="text-pink-400 shrink-0" />
            <span>24/7 Support</span>
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 w-full mt-auto font-body">
          {/* BUY NOW Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              openWhatsApp(product.name, product.duration, product.price);
            }}
            className="ps-magnetic-btn flex items-center justify-center gap-2 w-full h-[56px] rounded-[18px] text-sm font-bold text-white transition-all duration-300 relative overflow-hidden active:scale-95"
            style={{
              background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)",
              boxShadow: `0 4px 20px rgba(139, 92, 246, 0.25)`,
            }}
          >
            {/* hover shimmer */}
            <span className="ps-shimmer absolute inset-0" />
            <MessageCircle size={16} className="shrink-0" />
            <span>BUY NOW</span>
          </button>

          {/* DETAILS Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${product.id}`);
            }}
            className="group/btn flex items-center justify-center gap-2 w-full h-[48px] rounded-xl text-sm font-semibold text-white/80 border border-white/10 hover:border-white/25 hover:text-white hover:bg-white/5 transition-all duration-300 active:scale-98"
          >
            <span>VIEW DETAILS</span>
            <ArrowRight size={15} className="shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}