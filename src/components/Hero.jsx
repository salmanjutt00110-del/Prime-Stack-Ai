import { useState, useEffect, Suspense, lazy } from "react";
import { Sparkles, MessageCircle } from "lucide-react";
import { ALL_PRODUCTS } from "@/data/products";
import { openWhatsApp } from "@/lib/whatsapp";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const ParticleBackground = lazy(() => import("@/components/ParticleBackground"));

const HERO_PRODUCTS = ALL_PRODUCTS.slice(0, 8);

const HERO_THEMES = [
  {
    glow: "radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(99, 102, 241, 0.15) 50%, transparent 75%)",
    glow2: "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(168, 85, 247, 0.1) 50%, transparent 70%)",
    border: "rgba(139, 92, 246, 0.35)",
    particles: "#8B5CF6",
  },
  {
    glow: "radial-gradient(circle, rgba(16, 163, 127, 0.4) 0%, rgba(52, 211, 153, 0.15) 50%, transparent 75%)",
    glow2: "radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, rgba(16, 185, 129, 0.1) 50%, transparent 70%)",
    border: "rgba(16, 163, 127, 0.35)",
    particles: "#10A37F",
  },
  {
    glow: "radial-gradient(circle, rgba(66, 133, 244, 0.4) 0%, rgba(139, 92, 246, 0.15) 50%, transparent 75%)",
    glow2: "radial-gradient(circle, rgba(234, 67, 53, 0.3) 0%, rgba(251, 188, 5, 0.1) 50%, transparent 70%)",
    border: "rgba(66, 133, 244, 0.35)",
    particles: "#4285F4",
  },
  {
    glow: "radial-gradient(circle, rgba(254, 44, 85, 0.4) 0%, rgba(37, 244, 238, 0.15) 50%, transparent 75%)",
    glow2: "radial-gradient(circle, rgba(255, 0, 80, 0.3) 0%, rgba(0, 242, 254, 0.1) 50%, transparent 70%)",
    border: "rgba(254, 44, 85, 0.35)",
    particles: "#FE2C55",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 768);
  const navigate = useNavigate();

  const product = HERO_PRODUCTS[index];
  const theme = HERO_THEMES[index % HERO_THEMES.length];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_PRODUCTS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("hero-product-change", {
          detail: {
            color: product.color,
            color2: product.color2 || product.color,
            id: product.id,
          },
        })
      );
    }
  }, [product]);

  return (
    <section id="home" className="relative min-h-[85vh] pt-28 sm:pt-32 lg:pt-36 pb-12 flex items-center justify-center overflow-hidden">
      
      {/* Background Reactive Particle Engine */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <Suspense fallback={null}>
            <ParticleBackground color={theme.particles} count={20} />
          </Suspense>
        </div>
      )}

      {/* Hardware Accelerated Glow Orbs */}
      <motion.div
        className="absolute -z-10 rounded-full blur-[120px] pointer-events-none will-change-transform"
        style={{ width: 400, height: 400, top: "8%", left: "52%" }}
        animate={{ background: theme.glow }}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        className="absolute -z-10 rounded-full blur-[120px] pointer-events-none will-change-transform"
        style={{ width: 320, height: 320, bottom: "4%", left: "8%" }}
        animate={{ background: theme.glow2 }}
        transition={{ duration: 0.8 }}
      />

      <div className="mx-auto max-w-4xl w-full px-4 sm:px-6 flex flex-col items-center text-center relative z-10">
        
        {/* Top Intro Badge Line */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold border border-violet-500/30 bg-violet-500/15 text-violet-300 mb-3 backdrop-blur-md"
        >
          <Sparkles size={13} className="text-yellow-400" />
          <span>PRIME TOOLS HUB MARKETPLACE</span>
        </motion.div>

        {/* Clean Professional Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight w-full max-w-3xl"
        >
          Premium AI Tools for Creators &amp; Professionals
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-2 text-xs sm:text-sm font-semibold text-emerald-400 tracking-wide w-full"
        >
          Wholesale &amp; Reseller Rates · Instant Delivery · 100% Verified Warranty
        </motion.p>

        {/* SHOWCASE PRODUCT CARD WITH PROMINENT LOGO & MOTION GRAPHICS */}
        <div className="mt-6 w-full max-w-xl relative" style={{ perspective: 1000 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 15, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.97 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={() => navigate(`/product/${product.id}`)}
              className="ps-luxury-glass rounded-3xl p-5 sm:p-7 border shadow-2xl relative text-center cursor-pointer transition-colors"
              style={{
                borderColor: `${product.color}45`,
                boxShadow: `0 20px 50px ${product.color}25, inset 0 1px 0 rgba(255,255,255,0.12)`,
              }}
            >
              <span className="ps-shimmer absolute inset-0 rounded-3xl overflow-hidden pointer-events-none" />
              
              {/* Card Header Tags */}
              <div className="flex items-center justify-center gap-2 mb-3 flex-wrap">
                <span
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-bold shrink-0"
                  style={{
                    background: `${product.color}25`,
                    border: `1px solid ${product.color}45`,
                    color: product.color,
                  }}
                >
                  {product.tag}
                </span>
                <span className="text-[11px] font-medium text-white/75 shrink-0">• {product.duration}</span>
                {product.stock && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 flex items-center gap-1 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    <span>Stock: {product.stock} Units</span>
                  </span>
                )}
              </div>

              {/* Product Title */}
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white mb-2">
                {product.name}
              </h2>

              {/* Central Motion Graphics Image Showcase Box */}
              <div className="relative my-4 flex items-center justify-center">
                <div
                  className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl p-3 sm:p-4 flex items-center justify-center border shadow-2xl overflow-hidden transition-transform group-hover:scale-105"
                  style={{
                    background: `radial-gradient(circle, ${product.color}35 0%, rgba(12,12,18,0.95) 100%)`,
                    borderColor: `${product.color}65`,
                    boxShadow: `0 15px 35px ${product.color}30, 0 0 25px ${product.color}20`,
                  }}
                >
                  <span className="ps-shimmer absolute inset-0 pointer-events-none" />
                  <img
                    src={product.logo}
                    alt={product.name}
                    className="w-24 h-24 sm:w-32 sm:h-32 object-contain relative z-10 filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)] transition-transform duration-300"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Tagline / Description */}
              <p className="text-xs sm:text-sm text-white/80 line-clamp-2 leading-relaxed font-body mb-4 px-2">
                {product.tagline || product.description}
              </p>

              {/* Price & Full Width WhatsApp CTA Button */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
                <div>
                  <span className="text-[10px] sm:text-[11px] text-white/60 block uppercase font-mono tracking-wider">Instant Price</span>
                  <span className="text-xl sm:text-2xl font-black font-mono text-emerald-400">
                    {product.price}
                  </span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openWhatsApp(product);
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-2xl text-sm font-bold text-white flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] active:scale-[0.97] transition-all h-[56px] min-h-[56px] cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, #25D366, #128C7E)",
                    boxShadow: "0 8px 24px rgba(37,211,102,0.3)",
                  }}
                >
                  <MessageCircle size={18} className="text-white shrink-0" />
                  <span className="text-white font-extrabold tracking-wide">Order on WhatsApp</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Indicators */}
          <div className="mt-4 flex items-center justify-center gap-1.5">
            {HERO_PRODUCTS.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setIndex(i)}
                className="h-1.5 rounded-full transition-all duration-300 min-w-[20px] cursor-pointer"
                style={{
                  width: i === index ? 32 : 12,
                  background: i === index ? p.color : "rgba(255,255,255,0.2)",
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Feature Pills & Details BELOW Product Card */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 w-full text-xs font-semibold">
          <a
            href="#special-offers"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-amber-500/35 bg-amber-500/15 text-amber-200 hover:bg-amber-500/25 transition-all text-center"
          >
            <span>🎁 FREE Gifts on Rs. 2,000+ Orders</span>
          </a>
          <a
            href="#special-offers"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-emerald-500/35 bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/25 transition-all text-center"
          >
            <span>🤝 Wholesale Reseller Rates</span>
          </a>
        </div>

      </div>
    </section>
  );
}