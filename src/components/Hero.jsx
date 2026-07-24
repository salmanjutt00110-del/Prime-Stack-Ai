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
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(255, 255, 255, 0.06) 0%, rgba(17, 17, 17, 0.15) 60%, transparent 70%)",
    glow: "rgba(255, 255, 255, 0.15)",
    glow2: "rgba(254, 44, 85, 0.08)",
    particles: "#ffffff",
  },
  "canva-pro-edu": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(125, 42, 232, 0.14) 0%, rgba(236, 72, 153, 0.1) 50%, transparent 70%)",
    glow: "rgba(125, 42, 232, 0.28)",
    glow2: "rgba(236, 72, 153, 0.15)",
    particles: "#A78BFA",
  },
  "supergrok-12m-premium": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(29, 161, 242, 0.12) 0%, rgba(0, 0, 0, 0.3) 60%, transparent 70%)",
    glow: "rgba(29, 161, 242, 0.25)",
    glow2: "rgba(139, 92, 246, 0.15)",
    particles: "#1DA1F2",
  },
  "surfshark-vpn-1y": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(2, 132, 199, 0.12) 0%, rgba(13, 148, 136, 0.08) 50%, transparent 70%)",
    glow: "rgba(2, 132, 199, 0.25)",
    glow2: "rgba(13, 148, 136, 0.15)",
    particles: "#0284C7",
  },
  "tiktok-growth-challenge": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(254, 44, 85, 0.14) 0%, rgba(37, 244, 238, 0.08) 50%, transparent 70%)",
    glow: "rgba(254, 44, 85, 0.25)",
    glow2: "rgba(37, 244, 238, 0.15)",
    particles: "#FE2C55",
  },
  "youtube-premium-12m": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(255, 0, 0, 0.12) 0%, transparent 70%)",
    glow: "rgba(255, 0, 0, 0.25)",
    glow2: "rgba(204, 0, 0, 0.15)",
    particles: "#FF0000",
  },
  "chatgpt-go-3m": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(16, 163, 127, 0.12) 0%, transparent 70%)",
    glow: "rgba(16, 163, 127, 0.25)",
    glow2: "rgba(13, 138, 109, 0.15)",
    particles: "#10A37F",
  },
  "capcut-pro-admin-7s": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(254, 44, 85, 0.12) 0%, transparent 70%)",
    glow: "rgba(254, 44, 85, 0.25)",
    glow2: "rgba(37, 244, 238, 0.15)",
    particles: "#FE2C55",
  },
  "surfshark-vpn-1m": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(28, 159, 232, 0.12) 0%, transparent 70%)",
    glow: "rgba(28, 159, 232, 0.25)",
    glow2: "rgba(34, 211, 238, 0.15)",
    particles: "#1C9FE8",
  },
  "nordvpn-3m": {
    bg: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(0, 96, 255, 0.12) 0%, transparent 70%)",
    glow: "rgba(0, 96, 255, 0.25)",
    glow2: "rgba(139, 92, 246, 0.15)",
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
    const rx = -(y / (rect.height / 2)) * 12;
    const ry = (x / (rect.width / 2)) * 12;
    setLogoTilt({ x: ry, y: rx });
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
    const rx = -(y / (rect.height / 2)) * 6;
    const ry = (x / (rect.width / 2)) * 6;
    setCardTilt({ x: ry, y: rx });
  };

  const handleCardMouseLeave = () => {
    setCardTilt({ x: 0, y: 0 });
  };

  const go = (i) => {
    setIndex((i + HERO_PRODUCTS.length) % HERO_PRODUCTS.length);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-36 sm:pt-40 pb-16"
    >
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 -z-20 bg-[#050505]" />
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ background: theme.bg }}
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
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold bg-white/10 border border-white/15 text-white/90 mb-4 shadow-[0_0_15px_rgba(255,255,255,0.03)] backdrop-blur-md"
          >
            <span>✨</span>
            <span>PRIME TOOLS HUB MARKETPLACE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-white leading-[1.05] tracking-tight text-[clamp(2.1rem,5vw,3.6rem)]"
          >
            <Animated3DText text="Premium AI Tools for Creators & Professionals" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-white/80 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-body"
          >
            Unlock the world's most powerful AI tools, premium subscriptions, and creator services—all in one secure platform on <span className="text-white font-semibold">PrimeTools.store</span> with instant activation & 24/7 support.
          </motion.p>

          {/* Offer & Reseller Banners */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
          >
            <a
              href="#special-offers"
              className="ps-pulse inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-pink-500/20 border border-amber-500/40 text-amber-200 shadow-[0_0_20px_rgba(245,158,11,0.2)] backdrop-blur-md hover:scale-105 transition-transform"
            >
              <span>🎁</span>
              <span>FREE Gifts on Orders Rs. 2,000+ (Canva, Gemini, ChatGPT)</span>
            </a>
            <a
              href="#special-offers"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 backdrop-blur-md hover:scale-105 transition-transform"
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
                className="ps-luxury-glass rounded-2xl p-5 sm:p-6 border shadow-2xl relative text-left cursor-pointer transition-colors hover:bg-white/[0.04]"
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
                  <span className="text-[11px] text-white/75 font-medium">• {product.duration}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  <Animated3DText text={product.name} hoverTilt={true} variant="subheading" />
                </h2>

                <p className="mt-2 text-white/75 text-xs sm:text-sm leading-relaxed max-w-lg font-body">
                  {product.description}
                </p>

                <div className="mt-4 flex items-center gap-2.5 flex-wrap">
                  {product.oldPrice && (
                    <span className="text-white/60 text-xs sm:text-sm line-through font-light">
                      {product.oldPrice}
                    </span>
                  )}
                  <span
                    className="text-xl sm:text-2xl font-extrabold font-display tracking-tight"
                    style={{ color: product.color }}
                  >
                    {product.price}
                  </span>
                </div>

                {/* Buttons */}
                <div className="mt-5 flex items-center gap-3 flex-wrap">
                  <a
                    href="#products"
                    onClick={(e) => e.stopPropagation()}
                    className="px-4.5 py-2.5 rounded-xl text-xs font-semibold text-white border border-white/15 bg-white/10 hover:bg-white/15 transition-all duration-300 min-h-[44px] inline-flex items-center"
                  >
                    Explore Catalog
                  </a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openWhatsApp(product.name, product.duration, product.price);
                    }}
                    className="ps-magnetic-btn flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white transition-all duration-300 min-h-[44px]"
                    style={{
                      background: `linear-gradient(135deg, ${product.color} 0%, ${product.color}cc 100%)`,
                      boxShadow: `0 4px 20px ${product.color}35`,
                    }}
                  >
                    <MessageCircle size={14} className="shrink-0" />
                    Buy Now
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot Navigation with 44px touch targets */}
          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-1 max-w-full px-2">
            {HERO_PRODUCTS.map((p, i) => (
              <button
                key={p.id}
                onClick={() => go(i)}
                aria-label={`Show ${p.name}`}
                className="py-3 px-1.5 flex items-center justify-center min-w-[36px] min-h-[44px] transition-transform active:scale-95"
              >
                <span
                  className="block rounded-full transition-all duration-500"
                  style={{
                    width: i === index ? 32 : 8,
                    height: 8,
                    background:
                      i === index ? product.color : "rgba(255,255,255,0.25)",
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT — floating logo card */}
        <div className="order-1 lg:order-2 flex justify-center mb-6 lg:mb-0" style={{ perspective: 1000 }}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.75, rotateX: -25, rotateY: -25, y: 40 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.75, rotateX: 25, rotateY: 25, y: -40 }}
              transition={{
                type: "spring",
                stiffness: 140,
                damping: 18
              }}
              onClick={() => navigate(`/product/${product.id}`)}
              onMouseMove={handleLogoMouseMove}
              onMouseLeave={handleLogoMouseLeave}
              className="relative cursor-pointer group"
              style={{
                transform: `rotateX(${logoTilt.y}deg) rotateY(${logoTilt.x}deg)`,
                transformStyle: "preserve-3d",
                transition: "transform 0.15s ease-out",
              }}
              whileHover={{ scale: 1.03 }}
            >
              {/* glow behind */}
              <div
                className="absolute inset-0 rounded-[2rem] blur-[60px]"
                style={{ background: `${product.color}40` }}
              />
              <div
                className="ps-float relative flex items-center justify-center rounded-[1.5rem] sm:rounded-[2rem] w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80"
                style={{
                  background: `linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 50%, ${product.color}12 100%)`,
                  backdropFilter: "blur(40px)",
                  WebkitBackdropFilter: "blur(40px)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  boxShadow: `0 24px 80px rgba(0,0,0,0.5), 0 0 60px ${product.color}25`,
                }}
              >
                {/* shimmer */}
                <span className="ps-shimmer absolute inset-0 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden" />
                <img
                  src={product.logo}
                  alt={`${product.name} official logo`}
                  fetchPriority="high"
                  decoding="async"
                  width="160"
                  height="160"
                  className="relative w-[76%] h-[76%] object-contain transition-transform duration-300 group-hover:scale-105"
                  style={{
                    filter: `drop-shadow(0 8px 24px rgba(0,0,0,0.4)) drop-shadow(0 0 15px ${product.color}20)`
                  }}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}