import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import { 
  Sparkles, 
  ShieldCheck, 
  ChevronsRight, 
  Lock, 
  Zap, 
  Award,
  Headphones,
  Terminal,
  Server,
  Shield
} from "lucide-react";

const STATUS_MESSAGES = [
  "PREPARING YOUR EXPERIENCE...",
  "CONNECTING AI SERVERS...",
  "VERIFYING LICENSE DATABASE...",
  "ENCRYPTING 256-BIT SESSION...",
  "INITIALIZING AI MARKETPLACE...",
  "AUTHENTICATING PRODUCT MATRIX...",
  "FINALIZING DASHBOARD INTERFACE..."
];

const PLATFORMS = [
  { name: "ChatGPT", color: "#10A37F" },
  { name: "Gemini", color: "#4285F4" },
  { name: "Claude", color: "#D97706" },
  { name: "Canva", color: "#7D2AE8" },
  { name: "Notion", color: "#FFFFFF" },
  { name: "Cursor", color: "#3B82F6" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Lovable", color: "#EE0F79" },
  { name: "Veo", color: "#8B5CF6" },
  { name: "CapCut", color: "#FE2C55" },
  { name: "Surfshark", color: "#00D1B2" },
  { name: "OpenAI", color: "#10A37F" }
];

export default function StartupIntro({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [msgIndex, setMsgIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const currentMsg = useMemo(() => {
    return STATUS_MESSAGES[msgIndex % STATUS_MESSAGES.length];
  }, [msgIndex]);

  const finish = () => {
    setVisible(false);
    try {
      if (!window.location.hash) {
        window.scrollTo(0, 0);
      }
    } catch (e) {
      console.error(e);
    }
    if (onComplete) onComplete();
  };

  useEffect(() => {
    if (!visible) return;

    try {
      if (!window.location.hash) {
        window.scrollTo(0, 0);
      }
    } catch (e) {
      console.error(e);
    }

    const startTime = performance.now();
    const duration = 1400;

    const updateProgress = (now) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      const nextIdx = Math.floor((pct / 100) * STATUS_MESSAGES.length);
      if (nextIdx !== msgIndex && nextIdx < STATUS_MESSAGES.length) {
        setMsgIndex(nextIdx);
      }

      if (pct < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(finish, 250);
      }
    };

    const rafId = requestAnimationFrame(updateProgress);

    const handleMouseMove = (e) => {
      if (window.innerWidth > 1024) {
        const x = (e.clientX / window.innerWidth - 0.5) * 25;
        const y = (e.clientY / window.innerHeight - 0.5) * 25;
        setMousePos({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="startup-intro-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 0.98,
            filter: "blur(14px)",
            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col justify-between bg-[#04050A] text-white overflow-hidden select-none py-5 px-4 sm:px-8 cursor-pointer font-sans"
          onClick={finish}
        >
          {/* CINEMATIC BACKGROUND: DUAL AURORA & HOLOGRAPHIC GRID */}
          <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
            {/* Tech Grid Floor with Horizon Fade */}
            <div 
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(123, 97, 255, 0.2) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Left Electric Blue Aurora Fog */}
            <motion.div 
              style={{ x: mousePos.x * 0.4, y: mousePos.y * 0.4 }}
              className="absolute top-10 -left-32 w-[750px] h-[650px] rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.22)_0%,rgba(0,140,255,0.1)_45%,transparent_75%)] blur-[130px]" 
            />

            {/* Right Purple / Magenta Aurora Wave */}
            <motion.div 
              style={{ x: -mousePos.x * 0.4, y: -mousePos.y * 0.4 }}
              className="absolute top-20 -right-32 w-[750px] h-[650px] rounded-full bg-[radial-gradient(circle,rgba(224,86,253,0.22)_0%,rgba(123,97,255,0.15)_45%,transparent_75%)] blur-[130px]" 
            />

            {/* Center Volumetric Spotlight */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(0,212,255,0.12)_0%,transparent_70%)] blur-[90px]" />
          </div>

          {/* TOP NAVIGATION BAR */}
          <div className="relative z-20 w-full max-w-7xl mx-auto flex items-center justify-between pt-[env(safe-area-inset-top,0px)] pb-3 font-mono">
            {/* Left: System Status Pill */}
            <div className="flex items-center gap-2.5 bg-[#090D1A]/80 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22C55E] shadow-[0_0_12px_#22C55E]" />
              </span>
              <span className="text-slate-300 font-bold tracking-wider text-[11px]">
                SYSTEM STATUS <span className="text-[#22C55E] font-black ml-1">ONLINE</span>
              </span>
            </div>

            {/* Right: Skip Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                finish();
              }}
              className="group flex items-center gap-2 px-5 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-white/5 hover:bg-white/10 text-slate-200 border border-white/15 hover:border-cyan-400/40 transition-all active:scale-95 cursor-pointer backdrop-blur-2xl shadow-lg"
            >
              <span>SKIP INTRO</span>
              <ChevronsRight size={14} className="group-hover:translate-x-1 transition-transform text-[#00D4FF]" />
            </button>
          </div>

          {/* CENTER HERO STAGE */}
          <motion.div 
            style={{ x: mousePos.x * 0.15, y: mousePos.y * 0.15 }}
            className="relative z-20 w-full max-w-4xl mx-auto my-auto flex flex-col items-center text-center py-2"
          >
            {/* SIDE PANELS (DESKTOP) */}
            <div className="hidden xl:block absolute -left-20 top-1/3 -translate-y-1/2 w-48 p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-2xl text-left font-mono space-y-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
              <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-white/10 pb-1.5">
                <span className="flex items-center gap-1.5 text-[#00D4FF] font-bold">
                  <Lock size={11} /> SECURE GATEWAY
                </span>
                <span className="text-[#22C55E] font-bold">256-BIT</span>
              </div>
              <p className="text-[10px] text-slate-300">SSL Encrypted Stream</p>
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-gradient-to-r from-[#00D4FF] to-[#22C55E] animate-pulse" />
              </div>
            </div>

            <div className="hidden xl:block absolute -right-20 top-1/3 -translate-y-1/2 w-48 p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-2xl text-left font-mono space-y-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
              <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-white/10 pb-1.5">
                <span className="flex items-center gap-1.5 text-[#7B61FF] font-bold">
                  <Server size={11} /> SERVER CLUSTER
                </span>
                <span className="text-[#00D4FF] font-bold">LIVE</span>
              </div>
              <p className="text-[10px] text-slate-300">All Systems Operational</p>
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-11/12 bg-gradient-to-r from-[#7B61FF] to-[#E056FD] animate-pulse" />
              </div>
            </div>

            {/* HOLOGRAPHIC STAGE WITH RINGS & 3D NEON GLASS CUBE LOGO */}
            <div className="relative mb-4 flex flex-col items-center">
              {/* Concentric Energy Rings Behind Stage */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-cyan-500/20 animate-spin-slow pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-purple-500/15 pointer-events-none" />

              {/* 3D Glass Cube Logo */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 p-7 sm:p-9 rounded-[32px] bg-gradient-to-br from-white/15 via-white/[0.04] to-black/60 border-2 border-transparent shadow-[0_25px_60px_rgba(0,214,255,0.25)] backdrop-blur-3xl flex items-center justify-center group"
                style={{
                  borderImage: "linear-gradient(135deg, #00D4FF, #7B61FF, #E056FD) 1",
                  borderRadius: "32px",
                }}
              >
                {/* Dual Neon Edge Reflections */}
                <div className="absolute -inset-[2px] rounded-[34px] bg-gradient-to-r from-[#00D4FF] via-[#7B61FF] to-[#E056FD] opacity-60 blur-md group-hover:opacity-100 transition duration-500 -z-10" />

                {/* Logo */}
                <Logo size={90} animated={true} />
              </motion.div>

              {/* Holographic Pedestal / Circular Stage Base */}
              <div className="w-56 h-8 -mt-4 rounded-[100%] bg-gradient-to-b from-cyan-500/30 via-purple-500/15 to-transparent border-t border-cyan-400/40 blur-xs shadow-[0_10px_30px_rgba(0,214,255,0.4)]" />
            </div>

            {/* BADGE: PREMIER AI MARKETPLACE */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-widest bg-[#0A0E1D] border border-cyan-500/30 text-cyan-300 shadow-[0_0_25px_rgba(0,214,255,0.25)] mb-3 backdrop-blur-2xl"
            >
              <Sparkles size={12} className="text-[#00D4FF] animate-spin-slow" />
              <span>PREMIER AI MARKETPLACE</span>
            </motion.div>

            {/* MAIN HEADING */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-none">
                PRIME TOOLS{" "}
                <span className="bg-gradient-to-r from-[#00D4FF] via-[#7B61FF] to-[#E056FD] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,214,255,0.5)]">
                  HUB
                </span>
              </h1>

              {/* SUBTITLE */}
              <p className="text-xs sm:text-sm text-slate-300 font-body tracking-wider uppercase max-w-xl mx-auto leading-relaxed flex flex-wrap items-center justify-center gap-2 font-medium">
                <span>PREMIUM AI SUBSCRIPTIONS</span>
                <span className="text-cyan-400">•</span>
                <span>SOFTWARE LICENSES</span>
                <span className="text-cyan-400">•</span>
                <span>CREATOR TOOLS</span>
              </p>
            </motion.div>

            {/* ELEGANT THIN LOADING BAR & ROTATING STATUS */}
            <div className="w-full max-w-md mt-6 px-2">
              {/* Thin Glass Track */}
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden p-[1px] border border-white/20 relative shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#00D4FF] via-[#7B61FF] to-[#E056FD] transition-all duration-75 relative"
                  style={{ width: `${progress}%` }}
                >
                  {progress > 0 && (
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_15px_#00D4FF,0_0_25px_#E056FD] animate-ping" />
                  )}
                </div>
              </div>

              {/* Monospaced Status Message */}
              <div className="mt-3 flex items-center justify-center gap-2 font-mono text-[11px] sm:text-xs text-slate-300 tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#00D4FF] shadow-[0_0_8px_#00D4FF] animate-pulse" />
                <span className="font-semibold text-slate-200">{currentMsg}</span>
              </div>
            </div>

            {/* TOOL CHIPS STRIP */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 max-w-2xl opacity-90">
              {PLATFORMS.map((p) => (
                <span
                  key={p.name}
                  className="px-2.5 py-1 rounded-xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 text-[10px] font-mono font-bold text-slate-200 flex items-center gap-1.5 backdrop-blur-md transition-all"
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: p.color, boxShadow: `0 0 6px ${p.color}` }} />
                  {p.name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* BOTTOM FEATURE CARDS & FOOTER */}
          <div className="relative z-20 w-full max-w-6xl mx-auto space-y-3 pb-[env(safe-area-inset-bottom,0px)]">
            {/* 4 FEATURE CARDS MATCHING REFERENCE IMAGE */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              
              {/* Card 1: 100% SECURE */}
              <div className="p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-[#00D4FF]/40 backdrop-blur-2xl flex items-center gap-3 transition-all duration-300 group hover:-translate-y-1 shadow-lg">
                <div className="w-9 h-9 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#00D4FF] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,214,255,0.2)]">
                  <Shield size={18} />
                </div>
                <div className="text-left font-mono">
                  <span className="font-bold text-xs text-white block uppercase tracking-wide">100% SECURE</span>
                  <span className="text-[10px] text-slate-400">256-BIT ENCRYPTION</span>
                </div>
              </div>

              {/* Card 2: INSTANT ACCESS */}
              <div className="p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-[#7B61FF]/40 backdrop-blur-2xl flex items-center gap-3 transition-all duration-300 group hover:-translate-y-1 shadow-lg">
                <div className="w-9 h-9 rounded-full bg-[#7B61FF]/10 border border-[#7B61FF]/30 text-[#7B61FF] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(123,97,255,0.2)]">
                  <Zap size={18} />
                </div>
                <div className="text-left font-mono">
                  <span className="font-bold text-xs text-white block uppercase tracking-wide">INSTANT ACCESS</span>
                  <span className="text-[10px] text-slate-400">WITHIN SECONDS</span>
                </div>
              </div>

              {/* Card 3: GENUINE LICENSES */}
              <div className="p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-[#E056FD]/40 backdrop-blur-2xl flex items-center gap-3 transition-all duration-300 group hover:-translate-y-1 shadow-lg">
                <div className="w-9 h-9 rounded-full bg-[#E056FD]/10 border border-[#E056FD]/30 text-[#E056FD] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(224,86,253,0.2)]">
                  <Award size={18} />
                </div>
                <div className="text-left font-mono">
                  <span className="font-bold text-xs text-white block uppercase tracking-wide">GENUINE LICENSES</span>
                  <span className="text-[10px] text-slate-400">OFFICIAL &amp; AUTHENTIC</span>
                </div>
              </div>

              {/* Card 4: 24/7 SUPPORT */}
              <div className="p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-[#22C55E]/40 backdrop-blur-2xl flex items-center gap-3 transition-all duration-300 group hover:-translate-y-1 shadow-lg">
                <div className="w-9 h-9 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                  <Headphones size={18} />
                </div>
                <div className="text-left font-mono">
                  <span className="font-bold text-xs text-white block uppercase tracking-wide">24/7 SUPPORT</span>
                  <span className="text-[10px] text-slate-400">DEDICATED ASSISTANCE</span>
                </div>
              </div>

            </div>

            {/* MINIMAL FOOTER */}
            <div className="pt-2 text-center text-[10px] font-mono text-slate-400 tracking-widest uppercase flex items-center justify-center gap-2">
              <Lock size={12} className="text-[#00D4FF]" />
              <span>SSL 256-BIT ENCRYPTED CONNECTION</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}



