import { useState, useEffect, Suspense, lazy } from "react";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Layers, Award, Star } from "lucide-react";
import { BRAND } from "@/data/products";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const ParticleBackground = lazy(() => import("@/components/ParticleBackground"));

const FLOATING_BRANDS = [
  { id: "chatgpt-plus-1m", name: "ChatGPT Plus", tag: "GPT-4o & Sora", logo: BRAND.chatgpt, glow: "#10A37F", border: "rgba(16,163,127,0.5)" },
  { id: "gemini-pro-18", name: "Gemini Pro", tag: "5TB & Veo Video", logo: BRAND.gemini, glow: "#4285F4", border: "rgba(66,133,244,0.5)" },
  { id: "canva-pro-edu", name: "Canva Pro", tag: "Magic AI Studio", logo: BRAND.canva, glow: "#7D2AE8", border: "rgba(125,42,232,0.5)" },
  { id: "veo-3-video", name: "Google Veo 3", tag: "45K Video Credits", logo: BRAND.veo, glow: "#6366F1", border: "rgba(99,102,241,0.5)" },
  { id: "capcut-pro-1m", name: "CapCut Pro", tag: "Pro Video Editing", logo: BRAND.capcut, glow: "#FFFFFF", border: "rgba(255,255,255,0.5)" },
  { id: "notion-plus-12m", name: "Notion AI", tag: "3K AI Credits/Mo", logo: BRAND.notion, glow: "#F8FAFC", border: "rgba(255,255,255,0.5)" },
  { id: "surfshark-vpn-1y", name: "Surfshark VPN", tag: "1-Yr Unlimited", logo: BRAND.surfshark, glow: "#00D1B2", border: "rgba(0,209,178,0.5)" },
  { id: "supergrok-12m-premium", name: "SuperGrok", tag: "High-Speed AI", logo: BRAND.grok, glow: "#9333EA", border: "rgba(147,51,234,0.5)" },
];

export default function Hero() {
  const [activeBrandIndex, setActiveBrandIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 768);
  const navigate = useNavigate();

  const currentBrand = FLOATING_BRANDS[activeBrandIndex];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBrandIndex((prev) => (prev + 1) % FLOATING_BRANDS.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] pt-28 sm:pt-32 lg:pt-36 pb-16 flex items-center justify-center overflow-hidden bg-[#02040a]">
      
      {/* Background Reactive Particle Engine */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <Suspense fallback={null}>
            <ParticleBackground color={currentBrand.glow} count={24} />
          </Suspense>
        </div>
      )}

      {/* Dynamic Background Aurora Mesh & Neon Orbs */}
      <motion.div
        className="absolute -z-10 rounded-full blur-[150px] pointer-events-none will-change-transform ps-glow-pulse"
        style={{ width: 600, height: 600, top: "8%", left: "42%" }}
        animate={{
          background: `radial-gradient(circle, ${currentBrand.glow}40 0%, rgba(139, 92, 246, 0.15) 50%, transparent 75%)`,
        }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute -z-10 rounded-full blur-[130px] pointer-events-none will-change-transform"
        style={{ width: 420, height: 420, bottom: "4%", left: "4%" }}
        animate={{
          background: `radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, rgba(99, 102, 241, 0.1) 50%, transparent 70%)`,
        }}
        transition={{ duration: 1 }}
      />

      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: Main Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Small Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black border shadow-2xl mb-6 backdrop-blur-2xl"
            style={{
              background: "rgba(10, 14, 26, 0.85)",
              borderColor: `${currentBrand.glow}70`,
              boxShadow: `0 0 25px ${currentBrand.glow}30`,
            }}
          >
            <Sparkles size={14} className="text-yellow-400 animate-pulse" />
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent uppercase tracking-widest font-mono">
              Pakistan's #1 Premium AI Marketplace
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </motion.div>

          {/* Huge Heading with Multi-Layer Gradient Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white"
          >
            Premium AI Tools <br className="hidden sm:inline" />
            <span
              className="bg-clip-text text-transparent ps-grad-text"
              style={{
                backgroundImage: `linear-gradient(135deg, #FFFFFF 0%, ${currentBrand.glow} 50%, #38BDF8 100%)`,
              }}
            >
              For Creators &amp; Professionals
            </span>
          </motion.h1>

          {/* Short Premium Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-sm sm:text-base lg:text-lg text-slate-300 font-body max-w-xl leading-relaxed"
          >
            Full official access to ChatGPT Plus, Gemini Pro, Canva, CapCut, Veo 3, Notion &amp; VPNs at wholesale pricing. Instant delivery backed by 100% verified replacement warranty.
          </motion.p>

          {/* Premium CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#products"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-display font-extrabold text-sm sm:text-base text-white flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.04] active:scale-95 shadow-2xl cursor-pointer group h-[52px] min-h-[52px]"
              style={{
                background: `linear-gradient(135deg, ${currentBrand.glow} 0%, #3B82F6 100%)`,
                boxShadow: `0 10px 35px ${currentBrand.glow}45`,
              }}
            >
              <Zap size={19} className="text-yellow-300 group-hover:rotate-12 transition-transform" />
              <span>Explore Products</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#agency-services"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-display font-extrabold text-sm sm:text-base text-white border border-white/15 bg-white/[0.04] hover:bg-white/[0.12] hover:border-white/30 backdrop-blur-2xl flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.04] active:scale-95 cursor-pointer shadow-lg h-[52px] min-h-[52px]"
            >
              <Layers size={19} className="text-cyan-400" />
              <span>Browse Services</span>
            </a>
          </motion.div>

          {/* Small Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-semibold text-slate-300"
          >
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 backdrop-blur-md">
              <ShieldCheck size={15} />
              <span>100% Verified</span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/25 text-blue-300 backdrop-blur-md">
              <Zap size={14} className="text-blue-400" />
              <span>Instant Delivery</span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/25 text-purple-300 backdrop-blur-md">
              <Award size={14} className="text-purple-400" />
              <span>Premium Warranty</span>
            </div>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: Large Interactive Glass Showcase Card */}
        <div className="lg:col-span-5 relative flex items-center justify-center ps-3d-perspective">
          <div className="w-full max-w-md relative">
            
            {/* Outer Glass Ring Glow */}
            <div
              className="absolute -inset-4 rounded-[40px] blur-2xl pointer-events-none transition-all duration-700 opacity-70"
              style={{
                background: `radial-gradient(circle, ${currentBrand.glow}45 0%, transparent 70%)`,
              }}
            />

            {/* Central Animated Glass Stage Card */}
            <motion.div
              onClick={() => navigate(`/product/${currentBrand.id}`)}
              className="relative rounded-3xl p-6 sm:p-8 border ps-luxury-glass ps-glass-reflection ps-3d-card shadow-2xl text-center overflow-hidden cursor-pointer group"
              style={{
                borderColor: `${currentBrand.glow}60`,
                boxShadow: `0 30px 80px rgba(0,0,0,0.9), 0 0 55px ${currentBrand.glow}30`,
              }}
            >
              {/* Shimmer Light Line */}
              <span className="ps-shimmer absolute inset-0 rounded-3xl overflow-hidden pointer-events-none" />

              {/* Card Header Tags */}
              <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/10 border border-white/15 text-white flex items-center gap-1">
                  <Star size={11} className="text-amber-400 fill-amber-400" />
                  FEATURED AI SUITE
                </span>
                <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Instant Activation
                </span>
              </div>

              {/* Central Brand Logo Box & Orbiting Rings */}
              <div className="relative my-6 py-6 flex items-center justify-center">
                
                {/* Orbital Neon Ring */}
                <div
                  className="absolute w-56 h-56 rounded-full border border-dashed animate-spin pointer-events-none"
                  style={{
                    borderColor: `${currentBrand.glow}40`,
                    animationDuration: "22s",
                  }}
                />

                {/* Central Brand Logo Box */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentBrand.name}
                    initial={{ opacity: 0, scale: 0.85, rotateY: -30 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.85, rotateY: 30 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-3xl p-4 flex items-center justify-center border shadow-2xl overflow-hidden"
                    style={{
                      background: `radial-gradient(circle, ${currentBrand.glow}45 0%, rgba(10,12,20,0.96) 100%)`,
                      borderColor: `${currentBrand.glow}80`,
                      boxShadow: `0 20px 50px ${currentBrand.glow}45, 0 0 35px ${currentBrand.glow}35`,
                    }}
                  >
                    <span className="ps-shimmer absolute inset-0 pointer-events-none" />
                    <img
                      src={currentBrand.logo}
                      alt={`${currentBrand.name} Official Subscription Logo`}
                      title={`${currentBrand.name} Subscription at Prime Tools Hub`}
                      width="128"
                      height="128"
                      fetchpriority="high"
                      decoding="async"
                      className="w-28 h-28 sm:w-32 sm:h-32 object-contain relative z-10 filter drop-shadow-[0_12px_25px_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform duration-300"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Satellite Floating Tags */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <motion.div
                    animate={{ y: [-6, 6, -6] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-2 left-2 px-3 py-1 rounded-xl text-[10px] font-extrabold bg-slate-900/95 border border-slate-700 text-slate-200 shadow-xl backdrop-blur-md"
                  >
                    {currentBrand.tag}
                  </motion.div>
                  <motion.div
                    animate={{ y: [6, -6, 6] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-2 right-2 px-3 py-1 rounded-xl text-[10px] font-extrabold bg-slate-900/95 border border-slate-700 text-slate-200 shadow-xl backdrop-blur-md"
                  >
                    Verified License
                  </motion.div>
                </div>

              </div>

              {/* Title & Brand Dots */}
              <div className="relative z-10">
                <h3 className="font-display font-black text-xl text-white tracking-tight">
                  {currentBrand.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-body">
                  Full official access &amp; instant delivery
                </p>

                {/* Brand Selector Dots */}
                <div className="mt-5 flex items-center justify-center gap-2">
                  {FLOATING_BRANDS.map((b, i) => (
                    <button
                      key={b.name}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveBrandIndex(i);
                      }}
                      className="h-2 rounded-full transition-all duration-300 cursor-pointer min-h-[16px] flex items-center"
                      aria-label={`Select ${b.name}`}
                    >
                      <span
                        className="block h-2 rounded-full transition-all duration-300"
                        style={{
                          width: i === activeBrandIndex ? 28 : 8,
                          background: i === activeBrandIndex ? b.glow : "rgba(255,255,255,0.25)",
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>

            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}