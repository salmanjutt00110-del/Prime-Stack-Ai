import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { HERO_PRODUCTS } from "@/data/products";
import { openWhatsApp } from "@/lib/whatsapp";
import { useNavigate } from "react-router-dom";
import ParticleBackground from "@/components/ParticleBackground";
import Animated3DText from "@/components/Animated3DText";

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
};

export default function Hero() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const [logoTilt, setLogoTilt] = useState({ x: 0, y: 0 });
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });

  const product = HERO_PRODUCTS[index];
  const theme = THEMES[product.id] || THEMES["chatgpt-plus-1m"];

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_PRODUCTS.length);
    }, 3500); // 3.5-second transition interval
    return () => clearInterval(timerRef.current);
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

  const go = (i) => setIndex((i + HERO_PRODUCTS.length) % HERO_PRODUCTS.length);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
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

      {/* Dynamic Theme Particles */}
      <div className="absolute inset-0 -z-10 opacity-60 pointer-events-none">
        <ParticleBackground color={theme.particles} />
      </div>

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
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold bg-white/5 border border-white/10 text-white/80 mb-4 shadow-[0_0_15px_rgba(255,255,255,0.03)] backdrop-blur-md">
            <span>✨</span>
            <span>PRIME AI MARKETPLACE</span>
          </div>

          <h1 className="font-display font-black text-white leading-[1.05] tracking-tight text-[clamp(2.1rem,5vw,3.6rem)]">
            <Animated3DText text="Premium AI Tools for Creators & Professionals" />
          </h1>

          <p className="mt-4 text-white/55 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Unlock the world's most powerful AI tools, premium subscriptions, and creator services—all in one secure platform with instant activation, trusted support, and exclusive savings.
          </p>

          {/* 10% OFF Glass Banner */}
          <div className="mt-5 ps-pulse inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/5 border border-white/8 text-white/80 shadow-[0_0_20px_rgba(255,255,255,0.03)] backdrop-blur-md">
            <span>🎉</span>
            <span>Limited Time — Enjoy 10% OFF on Every Product</span>
          </div>

          {/* Dynamic Showcase Card */}
          <div className="mt-8 relative" style={{ perspective: 1000 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(5px)" }}
                transition={SPRING}
                onClick={() => navigate(`/product/${product.id}`)}
                onMouseMove={handleCardMouseMove}
                onMouseLeave={handleCardMouseLeave}
                className="ps-luxury-glass rounded-2xl p-5 sm:p-6 border shadow-2xl relative text-left cursor-pointer transition-colors hover:bg-white/[0.04]"
                style={{
                  borderColor: `${product.color}25`,
                  boxShadow: `0 20px 45px ${product.color}10, inset 0 1px 0 rgba(255,255,255,0.06)`,
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
                      background: `${product.color}15`,
                      border: `1px solid ${product.color}30`,
                      color: product.color,
                    }}
                  >
                    {product.tag}
                  </span>
                  <span className="text-[11px] text-white/40">• {product.duration}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  <Animated3DText text={product.name} hoverTilt={true} variant="subheading" />
                </h2>

                <p className="mt-2 text-white/55 text-xs sm:text-sm leading-relaxed max-w-lg font-body">
                  {product.description}
                </p>

                <div className="mt-4 flex items-center gap-2.5 flex-wrap">
                  {product.oldPrice && (
                    <span className="text-white/35 text-xs sm:text-sm line-through font-light">
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
                    className="px-4.5 py-2.5 rounded-xl text-xs font-semibold text-white border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                    Explore Catalog
                  </a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openWhatsApp(product.name, product.duration, product.price);
                    }}
                    className="ps-magnetic-btn flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white transition-all duration-300"
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

          {/* Dot Navigation */}
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-2.5">
            {HERO_PRODUCTS.map((p, i) => (
              <button
                key={p.id}
                onClick={() => go(i)}
                aria-label={`Show ${p.name}`}
                className="rounded-full transition-all duration-500"
                style={{
                  width: i === index ? 32 : 8,
                  height: 8,
                  background:
                    i === index ? product.color : "rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>
        </div>

        {/* RIGHT — floating logo card */}
        <div className="order-1 lg:order-2 flex justify-center mb-6 lg:mb-0" style={{ perspective: 1000 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 6 }}
              transition={SPRING}
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
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(40px)",
                  WebkitBackdropFilter: "blur(40px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: `0 24px 80px rgba(0,0,0,0.5), 0 0 60px ${product.color}25`,
                }}
              >
                {/* shimmer */}
                <span className="ps-shimmer absolute inset-0 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden" />
                <img
                  src={product.logo}
                  alt={product.name}
                  className="relative w-[58%] h-[58%] object-contain"
                  style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.4))" }}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}