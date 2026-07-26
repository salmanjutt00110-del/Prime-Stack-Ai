import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { HERO_PRODUCTS } from "@/data/products";
import { openWhatsApp } from "@/lib/whatsapp";
import { useNavigate } from "react-router-dom";
import Animated3DText from "@/components/Animated3DText";

const ParticleBackground = lazy(() => import("@/components/ParticleBackground"));

const SPRING = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

const THEMES = {
  "chatgpt-plus-1m": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(16, 163, 127, 0.14) 0%, transparent 70%)",
    glow: "rgba(16, 163, 127, 0.28)",
    glow2: "rgba(13, 138, 109, 0.15)",
    particles: "#10A37F",
  },
  "gemini-pro-18": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(66, 133, 244, 0.12) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)",
    glow: "rgba(139, 92, 246, 0.25)",
    glow2: "rgba(66, 133, 244, 0.18)",
    particles: "#60A5FA",
  },
  "veo-3-video": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(37, 99, 235, 0.12) 0%, rgba(6, 182, 212, 0.08) 50%, transparent 70%)",
    glow: "rgba(6, 182, 212, 0.25)",
    glow2: "rgba(37, 99, 235, 0.15)",
    particles: "#06B6D4",
  },
  "capcut-pro-1m": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(236, 72, 153, 0.14) 0%, transparent 70%)",
    glow: "rgba(236, 72, 153, 0.28)",
    glow2: "rgba(168, 85, 247, 0.15)",
    particles: "#EC4899",
  },
  "canva-pro-edu": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(139, 92, 246, 0.14) 0%, transparent 70%)",
    glow: "rgba(139, 92, 246, 0.28)",
    glow2: "rgba(236, 72, 153, 0.15)",
    particles: "#8B5CF6",
  },
  "supergrok-12m-premium": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(29, 161, 242, 0.14) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)",
    glow: "rgba(29, 161, 242, 0.3)",
    glow2: "rgba(139, 92, 246, 0.2)",
    particles: "#1DA1F2",
  },
  "surfshark-vpn-1y": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(30, 190, 165, 0.14) 0%, transparent 70%)",
    glow: "rgba(30, 190, 165, 0.28)",
    glow2: "rgba(59, 130, 246, 0.15)",
    particles: "#1EBEA5",
  },
  "tiktok-growth-challenge": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(254, 44, 85, 0.14) 0%, rgba(37, 244, 238, 0.08) 50%, transparent 70%)",
    glow: "rgba(254, 44, 85, 0.28)",
    glow2: "rgba(37, 244, 238, 0.18)",
    particles: "#FE2C55",
  },
  "youtube-premium-12m": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(255, 0, 0, 0.14) 0%, transparent 70%)",
    glow: "rgba(255, 0, 0, 0.28)",
    glow2: "rgba(220, 38, 38, 0.15)",
    particles: "#FF0000",
  },
  "nord-vpn-1y": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(0, 96, 255, 0.14) 0%, transparent 70%)",
    glow: "rgba(0, 96, 255, 0.28)",
    glow2: "rgba(37, 99, 235, 0.15)",
    particles: "#0060FF",
  },
  "lovable-ai-100c": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(238, 15, 121, 0.12) 0%, transparent 70%)",
    glow: "rgba(238, 15, 121, 0.25)",
    glow2: "rgba(139, 92, 246, 0.15)",
    particles: "#EE0F79",
  },
};

export default function Hero() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const [logoTilt, setLogoTilt] = useState({ x: 0, y: 0 });
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });

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

  const handleLogoMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setLogoTilt({ x: x * 0.08, y: -y * 0.08 });
  };

  const handleLogoMouseLeave = () => {
    setLogoTilt({ x: 0, y: 0 });
  };

  const handleCardMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setCardTilt({ x: x * 0.05, y: -y * 0.05 });
  };

  const handleCardMouseLeave = () => {
    setCardTilt({ x: 0, y: 0 });
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Dynamic Theme Radial Canvas Background */}
      <motion.div
        className="absolute inset-0 -z-10 transition-all duration-1000"
        style={{ background: theme.bg }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {/* Cyber Grid Overlay for SuperGrok */}
      {product.id === "supergrok-12m-premium" && (
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(29,161,242,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(29,161,242,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50 pointer-events-none transition-opacity duration-1000" />
      )}

      {/* Dynamic Theme Particles — desktop only (canvas is expensive on mobile) */}
      {typeof window !== "undefined" && window.innerWidth >= 768 && (
        <div className="absolute inset-0 -z-10 opacity-60 pointer-events-none">
          <Suspense fallback={null}>
            <ParticleBackground color={theme.particles} count={25} />
          </Suspense>
        </div>
      )}

      {/* Animated Glow Orbs */}
      <motion.div
        className="absolute -z-10 rounded-full blur-[130px]"
        style={{ width: 420, height: 420, top: "8%", left: "52%" }}
        animate={{ background: theme.glow }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute -z-10 rounded-full blur-[130px]"
        style={{ width: 340, height: 340, bottom: "4%", left: "8%" }}
        animate={{ background: theme.glow2 }}
        transition={{ duration: 1 }}
      />

      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 grid lg:grid-cols-[52%_48%] gap-12 lg:gap-8 items-center relative z-10">
        
        {/* LEFT — static landing titles and active product card */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          
          {/* Announcement Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold border border-white/15 bg-white/10 text-white/90 mb-4 shadow-sm backdrop-blur-md"
          >
            <span>✨</span>
            <span>PRIME TOOLS HUB MARKETPLACE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black leading-[1.12] tracking-tight text-white text-[clamp(1.5rem,5.2vw,3.4rem)] text-center lg:text-left break-words max-w-full px-2"
          >
            <Animated3DText text="Premium AI Tools for Creators &amp; Professionals" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-xs sm:text-base text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-body px-2 text-center lg:text-left break-words"
          >
            Unlock the world's most powerful AI tools, premium subscriptions, and creator services—all in one secure platform on PrimeTools.store with instant activation & 24/7 support.
          </motion.p>

          {/* Offer & Reseller Banners */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-5 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-2.5 w-full max-w-full px-2"
          >
            <a
              href="#special-offers"
              className="ps-pulse w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold border border-amber-500/40 bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-pink-500/20 text-amber-200 backdrop-blur-md hover:scale-105 transition-transform text-center leading-snug"
            >
              <span>🎁</span>
              <span>FREE Gifts on Orders Rs. 2,000+ (Canva, Gemini, ChatGPT)</span>
            </a>
            <a
              href="#special-offers"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold border border-emerald-500/35 bg-emerald-500/15 text-emerald-300 backdrop-blur-md hover:scale-105 transition-transform text-center leading-snug"
            >
              <span>🤝</span>
              <span>Special Reseller Wholesale Discounts</span>
            </a>
          </motion.div>

          {/* Dynamic Showcase Card */}
          <div className="mt-8 relative" style={{ perspective: 1000 }}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={SPRING}
                onClick={() => navigate(`/product/${product.id}`)}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                className="ps-luxury-glass rounded-2xl p-5 sm:p-6 border border-white/10 shadow-2xl relative text-left cursor-pointer transition-colors"
                style={{
                  borderColor: `${product.color}35`,
                  boxShadow: `0 20px 45px ${product.color}15, inset 0 1px 0 rgba(255,255,255,0.08)`,
                  transform: `rotateX(${cardTilt.y}deg) rotateY(${cardTilt.x}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.1s ease-out",
                }}
              >
                {/* subtle moving reflection */}
                <span className="ps-shimmer absolute inset-0 rounded-2xl overflow-hidden" />
                
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-bold"
                    style={{
                      background: `${product.color}25`,
                      border: `1px solid ${product.color}45`,
                      color: product.color,
                    }}
                  >
                    {product.tag}
                  </span>
                  <span className="text-[11px] font-medium text-white/75">• {product.duration}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {product.name}
                </h2>

                <p className="mt-1 text-xs sm:text-sm text-white/80 line-clamp-2 leading-relaxed">
                  {product.tagline}
                </p>

                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-white/50 block">Price</span>
                    <span className="text-lg font-bold font-mono text-emerald-400">
                      {product.price}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openWhatsApp(product);
                    }}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-black flex items-center gap-1.5 shadow-lg hover:scale-105 transition-all min-h-[38px] cursor-pointer"
                    style={{
                      background: "linear-gradient(135deg, #25D366, #128C7E)",
                    }}
                  >
                    <MessageCircle size={14} />
                    Order on WhatsApp
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
                  className="h-1.5 rounded-full transition-all duration-300 min-w-[24px] cursor-pointer"
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

        {/* RIGHT — Interactive Glass Product Card Showcase */}
        <div className="order-1 lg:order-2 flex flex-col items-center justify-center relative my-2 lg:my-0">
          <div className="relative w-52 h-52 sm:w-72 sm:h-72 flex items-center justify-center" style={{ perspective: 1000 }}>
            {/* Outer Animated Gradient Border Ring */}
            <motion.div
              className="absolute -inset-2 rounded-[36px] border border-dashed opacity-40 pointer-events-none"
              style={{ borderColor: product.color }}
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />

            {/* Ambient Radial Backglow */}
            <motion.div
              className="absolute inset-2 rounded-3xl blur-2xl opacity-50 transition-colors duration-1000"
              style={{ background: product.color }}
            />

            {/* Central Chauras Glass Showcase Box (Square Glassmorphism) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={product.id}
                initial={{ scale: 0.85, opacity: 0, rotateY: -20, y: 10 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0, y: 0 }}
                exit={{ scale: 0.85, opacity: 0, rotateY: 20, y: -10 }}
                transition={SPRING}
                onMouseMove={handleLogoMouseMove}
                onMouseLeave={handleLogoMouseLeave}
                className="relative z-10 w-44 h-44 sm:w-60 sm:h-60 rounded-3xl p-5 sm:p-6 bg-gradient-to-br from-white/12 via-white/8 to-white/4 border backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] flex flex-col items-center justify-center cursor-pointer group"
                style={{
                  borderColor: `${product.color}60`,
                  boxShadow: `0 20px 50px rgba(0,0,0,0.65), 0 0 35px ${product.color}25`,
                  transform: `rotateX(${logoTilt.y}deg) rotateY(${logoTilt.x}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.1s ease-out",
                }}
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <span className="ps-shimmer absolute inset-0 rounded-3xl overflow-hidden pointer-events-none" />
                <img
                  src={product.logo}
                  alt={product.name}
                  className="w-full h-full object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.6)] group-hover:scale-110 transition-transform duration-500 relative z-10"
                  loading="eager"
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