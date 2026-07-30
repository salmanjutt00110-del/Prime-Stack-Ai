import { useState, useEffect, Suspense, lazy } from "react";
import { Sparkles, ArrowRight, ShieldCheck, Zap, MessageCircle, Star, CheckCircle2, Lock } from "lucide-react";
import { BRAND, WHATSAPP_NUMBER } from "@/data/products";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const ParticleBackground = lazy(() => import("@/components/ParticleBackground"));

const OFFICIAL_LOGOS = [
  { name: "ChatGPT", logo: BRAND.chatgpt, glow: "#10A37F" },
  { name: "Canva Pro", logo: BRAND.canva, glow: "#7D2AE8" },
  { name: "Google Gemini", logo: BRAND.gemini, glow: "#4285F4" },
  { name: "CapCut Pro", logo: BRAND.capcut, glow: "#FFFFFF" },
  { name: "Surfshark VPN", logo: BRAND.surfshark, glow: "#00D1B2" },
];

const SHOWCASE_BRANDS = [
  { id: "chatgpt-plus-1m", name: "ChatGPT Plus", tag: "GPT-4o & Sora", logo: BRAND.chatgpt, glow: "#10A37F" },
  { id: "canva-pro-edu", name: "Canva Pro", tag: "Magic AI Studio", logo: BRAND.canva, glow: "#7D2AE8" },
  { id: "veo-31-ultra", name: "Google VEO 3.1 Ultra", tag: "Unlimited Video AI", logo: BRAND.veo, glow: "#6366F1" },
  { id: "capcut-pro-1m", name: "CapCut Pro", tag: "4K Pro Editing", logo: BRAND.capcut, glow: "#FE2C55" },
  { id: "gemini-pro-18", name: "Gemini Pro", tag: "5TB & Veo Video", logo: BRAND.gemini, glow: "#4285F4" },
  { id: "surfshark-vpn-1y", name: "Surfshark VPN", tag: "1-Yr Unlimited", logo: BRAND.surfshark, glow: "#00D1B2" },
  { id: "supergrok-12m-premium", name: "SuperGrok", tag: "High-Speed AI", logo: BRAND.grok, glow: "#9333EA" },
];

export default function Hero() {
  const [activeBrandIndex, setActiveBrandIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 768);
  const navigate = useNavigate();

  const currentBrand = SHOWCASE_BRANDS[activeBrandIndex];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBrandIndex((prev) => (prev + 1) % SHOWCASE_BRANDS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const whatsappHeroUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Prime Tools Hub! I want to order a premium AI tool subscription."
  )}`;

  return (
    <section id="home" className="relative min-h-[92vh] pt-32 sm:pt-36 lg:pt-40 pb-20 flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#050505] via-[#080c14] to-[#0d1117]">
      
      {/* Dynamic Animated Particles */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <Suspense fallback={null}>
            <ParticleBackground color={currentBrand.glow} count={26} />
          </Suspense>
        </div>
      )}

      {/* Glowing Mesh & Orbs */}
      <motion.div
        className="absolute -z-10 rounded-full blur-[150px] pointer-events-none will-change-transform ps-glow-pulse"
        style={{ width: 650, height: 650, top: "5%", left: "40%" }}
        animate={{
          background: `radial-gradient(circle, ${currentBrand.glow}35 0%, rgba(37, 99, 235, 0.15) 50%, transparent 75%)`,
        }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute -z-10 rounded-full blur-[130px] pointer-events-none will-change-transform"
        style={{ width: 450, height: 450, bottom: "2%", left: "5%" }}
        animate={{
          background: `radial-gradient(circle, rgba(0, 255, 136, 0.15) 0%, rgba(37, 211, 102, 0.1) 50%, transparent 70%)`,
        }}
        transition={{ duration: 1 }}
      />

      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: Main Copy, CTAs & Social Proof */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Social Proof Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-full text-xs font-bold border shadow-xl mb-6 backdrop-blur-2xl bg-[#0d1117]/80 border-cyan-500/30 text-slate-200"
          >
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 size={14} /> 1,200+ Happy Customers
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1 text-amber-400">
              <Star size={13} className="fill-amber-400" /> 4.9/5 Rating
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1 text-blue-400">
              <Lock size={13} /> Secure Payment
            </span>
          </motion.div>

          {/* Benefit-Driven Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-white"
          >
            Premium AI Tools — <br className="hidden sm:inline" />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(135deg, #00ff88 0%, #2563EB 50%, #60A5FA 100%)`,
              }}
            >
              Delivered Instantly to Pakistan 🇵🇰
            </span>
          </motion.h1>

          {/* Benefit Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-slate-300 font-body max-w-xl leading-relaxed"
          >
            ChatGPT Plus, Canva Pro, Veo 3 &amp; 10+ more tools — Fast, Affordable, Trusted. Get full official access with 100% replacement warranty &amp; 24/7 WhatsApp support.
          </motion.p>

          {/* Primary & Secondary CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            {/* Primary CTA: Electric Blue / Neon Pulse Button */}
            <a
              href="#products"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-display font-black text-base text-slate-950 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.05] active:scale-95 shadow-[0_0_30px_rgba(0,255,136,0.4)] cursor-pointer group h-[54px] min-h-[54px] bg-[#00ff88] hover:bg-[#20ff95] animate-pulse"
            >
              <Zap size={20} className="fill-slate-950 group-hover:rotate-12 transition-transform" />
              <span>Browse All Tools →</span>
            </a>

            {/* Secondary CTA: WhatsApp Green Button */}
            <a
              href={whatsappHeroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl font-display font-black text-base text-white bg-[#25D366] hover:bg-[#22c35e] border border-emerald-400/30 flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.04] active:scale-95 cursor-pointer shadow-lg shadow-emerald-900/30 h-[54px] min-h-[54px]"
            >
              <MessageCircle size={20} className="fill-white" />
              <span>💬 Order on WhatsApp</span>
            </a>
          </motion.div>

          {/* TRUST LOGOS ROW Below CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 pt-6 border-t border-white/10 w-full"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 text-center lg:text-left">
              Official Tools We Provide
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 opacity-85">
              {OFFICIAL_LOGOS.map((brand) => (
                <div key={brand.name} className="flex items-center gap-2 group cursor-pointer">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} Official Logo`}
                    className="w-6 h-6 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                  />
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: Interactive Glass Showcase Box */}
        <div className="lg:col-span-5 relative flex items-center justify-center ps-3d-perspective">
          <div className="w-full max-w-md relative">
            
            {/* Outer Glow */}
            <div
              className="absolute -inset-4 rounded-[40px] blur-2xl pointer-events-none transition-all duration-700 opacity-60"
              style={{
                background: `radial-gradient(circle, ${currentBrand.glow}50 0%, transparent 70%)`,
              }}
            />

            {/* Central Glass Card */}
            <motion.div
              onClick={() => navigate(`/product/${currentBrand.id}`)}
              className="relative rounded-3xl p-6 sm:p-8 border bg-[#0d1117]/90 border-white/15 backdrop-blur-2xl shadow-2xl text-center overflow-hidden cursor-pointer group hover:border-cyan-500/50 transition-all"
              style={{
                boxShadow: `0 25px 60px rgba(0,0,0,0.8), 0 0 45px ${currentBrand.glow}25`,
              }}
            >
              {/* Top Tag */}
              <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/10 text-white flex items-center gap-1">
                  <Star size={11} className="text-amber-400 fill-amber-400" />
                  TOP RECOMMENDED TOOL
                </span>
                <span className="flex items-center gap-1 text-xs font-extrabold text-[#00ff88]">
                  <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-ping" />
                  Instant Access
                </span>
              </div>

              {/* Logo & Orbit Box */}
              <div className="relative my-6 py-4 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentBrand.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-3xl p-4 flex items-center justify-center border border-white/20 shadow-2xl overflow-hidden bg-slate-900/90"
                    style={{
                      boxShadow: `0 15px 40px ${currentBrand.glow}40`,
                    }}
                  >
                    <img
                      src={currentBrand.logo}
                      alt={currentBrand.name}
                      width="128"
                      height="128"
                      className="w-28 h-28 sm:w-32 sm:h-32 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-lg"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute -top-1 left-4 px-3 py-1 rounded-xl text-[10px] font-black bg-slate-950 border border-slate-700 text-cyan-300 shadow-lg">
                  {currentBrand.tag}
                </div>
              </div>

              {/* Title & Controls */}
              <div className="relative z-10">
                <h3 className="font-display font-black text-xl text-white tracking-tight">
                  {currentBrand.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  100% Official &amp; Verified Access in Pakistan
                </p>

                {/* Switcher Dots */}
                <div className="mt-5 flex items-center justify-center gap-2">
                  {SHOWCASE_BRANDS.map((b, i) => (
                    <button
                      key={b.name}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveBrandIndex(i);
                      }}
                      className="h-2 rounded-full transition-all duration-300 cursor-pointer min-h-[16px] flex items-center"
                      aria-label={`Show ${b.name}`}
                    >
                      <span
                        className="block h-2 rounded-full transition-all duration-300"
                        style={{
                          width: i === activeBrandIndex ? 26 : 8,
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