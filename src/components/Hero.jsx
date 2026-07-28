import { useEffect, useRef, useState, lazy, Suspense, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import { HERO_PRODUCTS } from "@/data/products";
import { openWhatsApp } from "@/lib/whatsapp";
import { useNavigate } from "react-router-dom";
import Animated3DText from "@/components/Animated3DText";

const ParticleBackground = lazy(() => import("@/components/ParticleBackground"));

const SPRING = { duration: 0.6, ease: [0.16, 1, 0.3, 1] };

const THEMES = {
  "chatgpt-plus-1m": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(16, 163, 127, 0.16) 0%, transparent 70%)",
    glow: "rgba(16, 163, 127, 0.3)",
    glow2: "rgba(13, 138, 109, 0.18)",
    particles: "#10A37F",
  },
  "gemini-pro-18": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(66, 133, 244, 0.15) 0%, rgba(139, 92, 246, 0.12) 50%, transparent 70%)",
    glow: "rgba(139, 92, 246, 0.28)",
    glow2: "rgba(66, 133, 244, 0.2)",
    particles: "#60A5FA",
  },
  "veo-3-video": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(37, 99, 235, 0.14) 0%, rgba(6, 182, 212, 0.1) 50%, transparent 70%)",
    glow: "rgba(6, 182, 212, 0.28)",
    glow2: "rgba(37, 99, 235, 0.18)",
    particles: "#06B6D4",
  },
  "capcut-pro-1m": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(236, 72, 153, 0.16) 0%, transparent 70%)",
    glow: "rgba(236, 72, 153, 0.3)",
    glow2: "rgba(168, 85, 247, 0.18)",
    particles: "#EC4899",
  },
  "canva-pro-edu": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(139, 92, 246, 0.16) 0%, transparent 70%)",
    glow: "rgba(139, 92, 246, 0.3)",
    glow2: "rgba(236, 72, 153, 0.18)",
    particles: "#8B5CF6",
  },
  "supergrok-12m-premium": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(29, 161, 242, 0.16) 0%, rgba(139, 92, 246, 0.12) 50%, transparent 70%)",
    glow: "rgba(29, 161, 242, 0.32)",
    glow2: "rgba(139, 92, 246, 0.22)",
    particles: "#1DA1F2",
  },
  "surfshark-vpn-1y": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(30, 190, 165, 0.16) 0%, transparent 70%)",
    glow: "rgba(30, 190, 165, 0.3)",
    glow2: "rgba(59, 130, 246, 0.18)",
    particles: "#1EBEA5",
  },
  "tiktok-growth-challenge": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(254, 44, 85, 0.16) 0%, rgba(37, 244, 238, 0.1) 50%, transparent 70%)",
    glow: "rgba(254, 44, 85, 0.3)",
    glow2: "rgba(37, 244, 238, 0.2)",
    particles: "#FE2C55",
  },
  "youtube-premium-12m": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(255, 0, 0, 0.16) 0%, transparent 70%)",
    glow: "rgba(255, 0, 0, 0.3)",
    glow2: "rgba(220, 38, 38, 0.18)",
    particles: "#FF0000",
  },
  "chatgpt-go-3m": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(16, 163, 127, 0.16) 0%, transparent 70%)",
    glow: "rgba(16, 163, 127, 0.3)",
    glow2: "rgba(13, 138, 109, 0.18)",
    particles: "#10A37F",
  },
  "capcut-pro-admin-7s": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(254, 44, 85, 0.16) 0%, transparent 70%)",
    glow: "rgba(254, 44, 85, 0.3)",
    glow2: "rgba(37, 244, 238, 0.2)",
    particles: "#FE2C55",
  },
  "surfshark-vpn-1m": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(28, 159, 232, 0.16) 0%, transparent 70%)",
    glow: "rgba(28, 159, 232, 0.3)",
    glow2: "rgba(34, 211, 238, 0.18)",
    particles: "#1C9FE8",
  },
  "nordvpn-3m": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(0, 96, 255, 0.16) 0%, transparent 70%)",
    glow: "rgba(0, 96, 255, 0.3)",
    glow2: "rgba(37, 99, 235, 0.18)",
    particles: "#0060FF",
  },
  "lovable-ai-100c": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(238, 15, 121, 0.14) 0%, transparent 70%)",
    glow: "rgba(238, 15, 121, 0.28)",
    glow2: "rgba(139, 92, 246, 0.18)",
    particles: "#EE0F79",
  },
  "lovable-ai-12m-pro-lite": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(238, 15, 121, 0.14) 0%, transparent 70%)",
    glow: "rgba(238, 15, 121, 0.28)",
    glow2: "rgba(139, 92, 246, 0.18)",
    particles: "#EE0F79",
  },
  "heygen-creator-600c": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(92, 36, 255, 0.16) 0%, rgba(0, 102, 255, 0.12) 50%, transparent 70%)",
    glow: "rgba(92, 36, 255, 0.32)",
    glow2: "rgba(0, 102, 255, 0.2)",
    particles: "#6366F1",
  },
  "notion-plus-12m": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(255, 255, 255, 0.12) 0%, rgba(100, 100, 100, 0.08) 50%, transparent 70%)",
    glow: "rgba(255, 255, 255, 0.25)",
    glow2: "rgba(150, 150, 150, 0.18)",
    particles: "#FFFFFF",
  },
  "figma-pro-12m": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(242, 78, 30, 0.16) 0%, rgba(162, 89, 255, 0.12) 50%, transparent 70%)",
    glow: "rgba(242, 78, 30, 0.3)",
    glow2: "rgba(10, 207, 131, 0.2)",
    particles: "#F24E1E",
  },
};

export default function Hero() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [logoTilt, setLogoTilt] = useState({ x: 0, y: 0 });
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });
  const rafTiltRef = useRef(null);

  const product = HERO_PRODUCTS[index];
  const theme = THEMES[product.id] || THEMES["chatgpt-plus-1m"];

  // Auto-cycle product showcase every 4 seconds consistently
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % HERO_PRODUCTS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (product) {
      window.dispatchEvent(
        new CustomEvent("hero-product-change", {
          detail: {
            productId: product.id,
            color: product.color,
            color2: product.color2 || product.color,
            name: product.name,
          },
        })
      );
    }
  }, [index, product]);

  const handleLogoMouseMove = useCallback((e) => {
    if (typeof window === "undefined" || window.innerWidth < 768) return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    if (rafTiltRef.current) cancelAnimationFrame(rafTiltRef.current);
    rafTiltRef.current = requestAnimationFrame(() => {
      setLogoTilt({ x: x * 0.06, y: -y * 0.06 });
    });
  }, []);

  const handleLogoMouseLeave = useCallback(() => {
    setLogoTilt({ x: 0, y: 0 });
  }, []);

  const handleCardMouseMove = useCallback((e) => {
    if (typeof window === "undefined" || window.innerWidth < 768) return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    if (rafTiltRef.current) cancelAnimationFrame(rafTiltRef.current);
    rafTiltRef.current = requestAnimationFrame(() => {
      setCardTilt({ x: x * 0.04, y: -y * 0.04 });
    });
  }, []);

  const handleCardMouseLeave = useCallback(() => {
    setCardTilt({ x: 0, y: 0 });
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] pt-32 sm:pt-36 lg:pt-40 pb-14 flex items-center justify-center overflow-hidden">
      {/* Dynamic Theme Radial Canvas Background */}
      <motion.div
        className="absolute inset-0 -z-10 transition-all duration-700 pointer-events-none"
        style={{ background: theme.bg }}
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Cyber Grid Overlay for SuperGrok */}
      {product.id === "supergrok-12m-premium" && (
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(29,161,242,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(29,161,242,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60 pointer-events-none transition-opacity duration-700" />
      )}

      {/* Dynamic Theme Particles — desktop only for optimal 60 FPS */}
      {typeof window !== "undefined" && window.innerWidth >= 768 && (
        <div className="absolute inset-0 -z-10 opacity-50 pointer-events-none">
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

      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 grid lg:grid-cols-[52%_48%] gap-8 lg:gap-8 items-center relative z-10">
        
        {/* LEFT — Titles, Offer Banners, and Active Product Card */}
        <div className="order-1 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start w-full max-w-full">
          
          {/* Announcement Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold border border-violet-500/30 bg-violet-500/15 text-violet-300 mb-3 backdrop-blur-md"
          >
            <Sparkles size={12} className="text-yellow-400" />
            <span>PREMIUM AI TOOLS MARKETPLACE</span>
          </motion.div>

          {/* Hero Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black leading-[1.12] tracking-tight text-white text-[clamp(1.4rem,4.2vw,2.8rem)] text-center lg:text-left w-full max-w-full px-1 sm:px-0"
          >
            <Animated3DText text="Premium AI Tools for Creators & Professionals" />
          </motion.h1>

          {/* Subtitle Pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 flex flex-wrap items-center justify-center lg:justify-start gap-2 w-full text-[11px] sm:text-xs font-semibold"
          >
            <a
              href="#special-offers"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-amber-500/35 bg-amber-500/15 text-amber-200 hover:bg-amber-500/25 transition-all text-center"
            >
              <span>🎁 FREE Gifts on Rs. 2,000+ Orders</span>
            </a>
            <a
              href="#special-offers"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-emerald-500/35 bg-emerald-500/15 text-emerald-300 hover:bg-emerald-500/25 transition-all text-center"
            >
              <span>🤝 Reseller Wholesale Rates</span>
            </a>
          </motion.div>

          {/* Dynamic Floating & Glowing Showcase Card */}
          <div className="mt-8 relative w-full max-w-xl" style={{ perspective: 1000 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 15, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.97 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                onClick={() => navigate(`/product/${product.id}`)}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                className="ps-luxury-glass rounded-2xl p-5 sm:p-6 border border-white/10 shadow-2xl relative text-left cursor-pointer transition-colors will-change-transform"
                style={{
                  borderColor: `${product.color}40`,
                  boxShadow: `0 16px 40px ${product.color}20, inset 0 1px 0 rgba(255,255,255,0.12)`,
                  transform: `translate3d(0,0,0) rotateX(${cardTilt.y}deg) rotateY(${cardTilt.x}deg)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <span className="ps-shimmer absolute inset-0 rounded-2xl overflow-hidden pointer-events-none" />
                
                <div className="flex items-center gap-2 mb-3 flex-wrap">
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
                      <span>Stock: {product.stock} Units Available</span>
                    </span>
                  )}
                </div>

                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {product.name}
                </h2>

                <p className="mt-1 text-xs sm:text-sm text-white/80 line-clamp-2 leading-relaxed font-body">
                  {product.tagline || product.description}
                </p>

                <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] sm:text-[11px] text-white/60 block uppercase font-mono tracking-wider">Price</span>
                    <span className="text-lg font-bold font-mono text-emerald-400">
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
            <div className="mt-4 flex items-center justify-center lg:justify-start gap-1.5">
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
        </div>

        {/* RIGHT — Premium 3D Floating Glass Product Showcase */}
        <div className="order-2 lg:order-2 flex flex-col items-center justify-center relative my-2 lg:my-0">
          <div className="relative w-52 h-52 sm:w-72 sm:h-72 flex items-center justify-center" style={{ perspective: 1000 }}>
            {/* Outer Animated Gradient Border Ring */}
            <motion.div
              className="absolute -inset-2 rounded-[36px] border border-dashed opacity-40 pointer-events-none"
              style={{ borderColor: product.color }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            {/* Ambient Soft Glow Backing */}
            <motion.div
              className="absolute inset-2 rounded-3xl blur-2xl opacity-50 transition-colors duration-700 will-change-transform pointer-events-none"
              style={{ background: product.color }}
            />

            {/* Central Glass Showcase Box */}
            <AnimatePresence mode="wait">
              <motion.div
                key={product.id}
                initial={{ scale: 0.88, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.88, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                onMouseMove={handleLogoMouseMove}
                onMouseLeave={handleLogoMouseLeave}
                className="relative z-10 w-44 h-44 sm:w-60 sm:h-60 rounded-3xl p-5 sm:p-6 bg-gradient-to-br from-white/14 via-white/8 to-white/4 border backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex flex-col items-center justify-center cursor-pointer group will-change-transform"
                style={{
                  borderColor: `${product.color}60`,
                  boxShadow: `0 20px 50px rgba(0,0,0,0.65), 0 0 35px ${product.color}30`,
                  transform: `rotateX(${logoTilt.y}deg) rotateY(${logoTilt.x}deg)`,
                  transformStyle: "preserve-3d",
                }}
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <span className="ps-shimmer absolute inset-0 rounded-3xl overflow-hidden pointer-events-none" />
                <img
                  src={product.logo}
                  alt={product.name}
                  className="w-full h-full object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-300 relative z-10"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}