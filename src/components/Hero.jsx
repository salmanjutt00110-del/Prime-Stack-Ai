import { useState, useEffect, Suspense, lazy } from "react";
import { Zap, MessageCircle, Star, CheckCircle2, Lock, Sparkles, ArrowRight } from "lucide-react";
import { BRAND, WHATSAPP_NUMBER } from "@/data/products";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

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
  const { t } = useLanguage();

  const currentBrand = SHOWCASE_BRANDS[activeBrandIndex];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", checkMobile, { passive: true });
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
    <section
      id="home"
      className="hero-section relative pt-8 sm:pt-16 lg:pt-20 pb-12 sm:pb-20 flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#03060d] via-[#080d19] to-[#0d1117] contain-paint"
    >
      
      {/* Dynamic Animated Particles */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <Suspense fallback={null}>
            <ParticleBackground color={currentBrand.glow} count={24} />
          </Suspense>
        </div>
      )}

      {/* Glowing Mesh Orbs with animated float */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute -z-10 rounded-full blur-[160px] pointer-events-none will-change-transform"
            style={{ width: 650, height: 650, top: "2%", left: "35%" }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.6, 0.9, 0.6],
              background: `radial-gradient(circle, ${currentBrand.glow}40 0%, rgba(37, 99, 235, 0.2) 50%, transparent 75%)`,
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -z-10 rounded-full blur-[140px] pointer-events-none will-change-transform"
            style={{ width: 450, height: 450, bottom: "0%", left: "5%" }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
              background: `radial-gradient(circle, rgba(0, 255, 136, 0.2) 0%, rgba(37, 211, 102, 0.12) 50%, transparent 70%)`,
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </>
      )}

      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
        
        {/* LEFT COLUMN: Main Copy, CTAs & Social Proof */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          
          {/* Social Proof Badge Row */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="trust-badges-row inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold border shadow-xl mb-5 bg-[#0d1117]/90 border-cyan-500/40 text-slate-200 backdrop-blur-md hover:border-cyan-400/70 transition-colors"
          >
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <CheckCircle2 size={14} className="animate-pulse" /> {t("hero_badge_customers")}
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Star size={13} className="fill-amber-400 text-amber-400 animate-spin-slow" /> {t("hero_badge_rating")}
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5 text-blue-400 font-semibold">
              <Lock size={13} /> {t("hero_badge_secure")}
            </span>
          </motion.div>

          {/* Benefit-Driven Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-headline font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-white"
          >
            <span className="relative inline-block">
              {t("hero_headline_1")}
              <span className="hidden sm:block absolute -bottom-1 left-0 w-24 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-[#00ff88] rounded-full animate-pulse" />
            </span>{" "}
            <br className="hidden sm:inline" />
            <span
              className="bg-clip-text text-transparent inline-block mt-1 drop-shadow-[0_0_25px_rgba(0,255,136,0.3)]"
              style={{
                backgroundImage: `linear-gradient(135deg, #00ff88 0%, #38BDF8 40%, #818CF8 100%)`,
              }}
            >
              {t("hero_headline_2")}
            </span>
          </motion.h1>

          {/* Benefit Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero-subtext mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-slate-300 font-body max-w-xl leading-relaxed"
          >
            {t("hero_subtext")}
          </motion.p>

          {/* Primary & Secondary CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="cta-buttons-row mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto"
          >
            {/* Primary CTA: Electric Blue / Neon Button */}
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(0,255,136,0.6)" }}
              whileTap={{ scale: 0.96 }}
              href="#products"
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-2xl font-display font-black text-sm sm:text-base text-slate-950 flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer group h-[52px] min-h-[52px] bg-[#00ff88] hover:bg-[#20ff95] shadow-[0_0_25px_rgba(0,255,136,0.4)]"
            >
              <Zap size={20} className="fill-slate-950 group-hover:rotate-12 transition-transform duration-300" />
              <span>{t("hero_btn_browse")}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* Secondary CTA: WhatsApp Green Button */}
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(37,211,102,0.5)" }}
              whileTap={{ scale: 0.96 }}
              href={whatsappHeroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-2xl font-display font-black text-sm sm:text-base text-white bg-[#25D366] hover:bg-[#22c35e] border border-emerald-400/30 flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer shadow-lg shadow-emerald-900/30 h-[52px] min-h-[52px]"
            >
              <MessageCircle size={20} className="fill-white animate-bounce" />
              <span>{t("hero_btn_whatsapp")}</span>
            </motion.a>
          </motion.div>

          {/* TRUST LOGOS STRIP Below CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 sm:mt-10 pt-4 sm:pt-6 border-t border-white/10 w-full"
          >
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-3.5 text-center lg:text-left flex items-center justify-center lg:justify-start gap-1.5">
              <Sparkles size={13} className="text-amber-400" />
              {t("hero_tools_label")}
            </p>
            <div className="tools-strip-row flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 opacity-90">
              {OFFICIAL_LOGOS.map((brand, i) => (
                <motion.div
                  key={brand.name}
                  whileHover={{ scale: 1.08, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="tools-strip-logo flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.07] border border-white/12 hover:border-cyan-400/50 transition-all cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                >
                  <img
                    src={brand.logo}
                    alt={`${brand.name} Official Logo`}
                    width="22"
                    height="22"
                    loading="lazy"
                    decoding="async"
                    className="w-5 h-5 object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                  />
                  <span className="text-xs font-bold text-slate-200">
                    {brand.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>

        {/* RIGHT COLUMN: Interactive Glass Showcase Box with Smooth Floating & Crossfade */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center ps-3d-perspective mt-4 lg:mt-0"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="w-full max-w-md relative overflow-visible"
          >
            
            {/* Outer Glow */}
            {!isMobile && (
              <motion.div
                className="absolute -inset-5 rounded-[45px] blur-3xl pointer-events-none transition-all duration-700 opacity-70"
                animate={{
                  background: `radial-gradient(circle, ${currentBrand.glow}60 0%, rgba(15,23,42,0) 75%)`,
                }}
                transition={{ duration: 1 }}
              />
            )}

            {/* Central Glass Card with AnimatePresence */}
            <div
              onClick={() => navigate(`/product/${currentBrand.id}`)}
              className="relative rounded-3xl p-5 sm:p-8 border bg-[#0d1117]/95 border-white/20 shadow-2xl text-center overflow-hidden cursor-pointer group hover:border-cyan-400/70 transition-all backdrop-blur-2xl"
              style={{
                boxShadow: `0 25px 60px rgba(0,0,0,0.85), 0 0 40px ${currentBrand.glow}35`,
              }}
            >
              {/* Top Tag */}
              <div className="flex items-center justify-between gap-2 mb-3 relative z-10">
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/12 text-white flex items-center gap-1.5 border border-white/15 shadow-sm">
                  <Star size={12} className="text-amber-400 fill-amber-400 animate-spin-slow" />
                  {t("card_top_recommended")}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-extrabold text-[#00ff88]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00ff88] animate-ping" />
                  {t("card_instant_access")}
                </span>
              </div>

              {/* Logo & Orbit Box with Animated Crossfade */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentBrand.id}
                  initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.85, rotate: 5 }}
                  transition={{ duration: 0.35 }}
                  className="relative my-4 sm:my-6 py-2 flex flex-col items-center justify-center"
                >
                  <div
                    className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-3xl p-4 flex items-center justify-center border border-white/25 shadow-2xl overflow-hidden bg-slate-900/90 group-hover:scale-105 transition-transform duration-300"
                    style={{
                      boxShadow: `0 15px 45px ${currentBrand.glow}50`,
                    }}
                  >
                    {/* Animated Pulsing Spotlight behind Logo */}
                    <div
                      className="absolute inset-0 pointer-events-none rounded-3xl blur-xl opacity-90 animate-pulse"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${currentBrand.glow} 0%, transparent 70%)`,
                      }}
                    />

                    <img
                      src={currentBrand.logo}
                      alt={currentBrand.name}
                      width="128"
                      height="128"
                      loading="lazy"
                      decoding="async"
                      className="w-24 h-24 sm:w-32 sm:h-32 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-[0_0_16px_rgba(255,255,255,0.8)]"
                    />
                  </div>

                  <div className="mt-3 px-3.5 py-1 rounded-xl text-[11px] font-black bg-slate-950/90 border border-slate-700 text-cyan-300 shadow-xl tracking-wide">
                    ⚡ {currentBrand.tag}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Title & Controls */}
              <div className="relative z-10">
                <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {currentBrand.name}
                </h3>
                <p className="text-xs text-slate-300 font-medium mt-1">
                  100% Official &amp; Verified Access
                </p>

                {/* Switcher Dots */}
                <div className="mt-4 flex items-center justify-center gap-2">
                  {SHOWCASE_BRANDS.map((b, i) => (
                    <button
                      key={b.name}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveBrandIndex(i);
                      }}
                      className="h-2 rounded-full transition-all duration-300 cursor-pointer min-h-[16px] flex items-center group/dot"
                      aria-label={`Show ${b.name}`}
                    >
                      <span
                        className="block h-2.5 rounded-full transition-all duration-300 group-hover/dot:scale-125"
                        style={{
                          width: i === activeBrandIndex ? 28 : 9,
                          background: i === activeBrandIndex ? b.glow : "rgba(255,255,255,0.3)",
                          boxShadow: i === activeBrandIndex ? `0 0 12px ${b.glow}` : "none",
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}