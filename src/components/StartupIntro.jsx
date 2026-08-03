import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import { 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Lock, 
  Zap, 
  CheckCircle2, 
  Layers,
  Server,
  Terminal,
  Activity
} from "lucide-react";

const STATUS_MESSAGES = [
  "Connecting AI Servers...",
  "Loading Marketplace...",
  "Verifying Licenses...",
  "Encrypting Session...",
  "Initializing Dashboard...",
  "Loading Products...",
  "Loading ChatGPT...",
  "Loading Gemini...",
  "Loading Canva...",
  "Preparing Interface...",
  "Finalizing Experience..."
];

const PLATFORMS = [
  { name: "ChatGPT", color: "#10A37F" },
  { name: "Gemini", color: "#4285F4" },
  { name: "Claude", color: "#D97706" },
  { name: "Canva", color: "#7D2AE8" },
  { name: "Notion", color: "#FFFFFF" },
  { name: "Cursor", color: "#3B82F6" },
  { name: "Lovable", color: "#EE0F79" },
  { name: "Figma", color: "#F24E1E" },
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
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;
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
            filter: "blur(12px)",
            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col justify-between bg-gradient-to-b from-[#04050A] via-[#060912] to-[#090B15] text-white overflow-hidden select-none py-5 px-4 sm:px-8 cursor-pointer font-sans"
          onClick={finish}
        >
          {/* Ambient Lighting, Volumetric Blobs & Cyber Grid */}
          <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
            {/* Cyber Grid */}
            <div 
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
                backgroundSize: "36px 36px",
              }}
            />

            {/* Scanline Layer */}
            <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%),linear-gradient(90deg,rgba(0,229,255,0.03),rgba(168,85,247,0.02),rgba(255,79,216,0.03))] bg-[size:100%_4px,4px_100%]" />

            {/* Glowing Volumetric Blobs */}
            <motion.div 
              style={{ x: mousePos.x * 0.5, y: mousePos.y * 0.5 }}
              className="absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(108,92,231,0.25)_0%,rgba(124,77,255,0.12)_35%,transparent_75%)] blur-[120px]" 
            />
            <motion.div 
              style={{ x: -mousePos.x * 0.3, y: -mousePos.y * 0.3 }}
              className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.18)_0%,transparent_70%)] blur-[100px]" 
            />
            <motion.div 
              style={{ x: mousePos.x * 0.4, y: -mousePos.y * 0.4 }}
              className="absolute top-1/3 right-10 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,79,216,0.14)_0%,rgba(168,85,247,0.15)_40%,transparent_75%)] blur-[120px]" 
            />
          </div>

          {/* TOP NAVIGATION HUD */}
          <div className="relative z-20 w-full max-w-7xl mx-auto flex items-center justify-between pt-[env(safe-area-inset-top,0px)] pb-3 border-b border-white/10 text-xs font-mono">
            {/* Left: System Status */}
            <div className="flex items-center gap-2.5 bg-white/[0.03] border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-xl shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_12px_#22c55e]" />
              </span>
              <span className="text-slate-300 font-bold uppercase tracking-wider text-[11px]">
                SYSTEM STATUS <span className="text-emerald-400 font-black">ONLINE</span>
              </span>
            </div>

            {/* Right: Skip Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                finish();
              }}
              className="group flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-white/5 hover:bg-white/10 text-slate-200 border border-white/15 hover:border-white/30 transition-all active:scale-95 cursor-pointer backdrop-blur-xl shadow-lg"
            >
              <span>SKIP INTRO</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform text-[#00E5FF]" />
            </button>
          </div>

          {/* CENTER LAYOUT */}
          <motion.div 
            style={{ x: mousePos.x * 0.2, y: mousePos.y * 0.2 }}
            className="relative z-20 w-full max-w-5xl mx-auto my-auto flex flex-col items-center text-center py-4"
          >
            
            {/* SIDE GLASS CARDS (DESKTOP) */}
            <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-52 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl text-left font-mono space-y-2 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-white/10 pb-2">
                <span className="flex items-center gap-1.5 text-[#00E5FF] font-bold">
                  <Lock size={12} /> SECURE GATEWAY
                </span>
                <span className="text-emerald-400 font-bold">256-BIT</span>
              </div>
              <p className="text-[10px] text-slate-300 font-medium leading-tight">SSL Encrypted Stream</p>
              <div className="flex items-center gap-1 pt-1">
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-gradient-to-r from-[#00E5FF] to-emerald-400 animate-pulse" />
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-52 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl text-left font-mono space-y-2 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-white/10 pb-2">
                <span className="flex items-center gap-1.5 text-[#A855F7] font-bold">
                  <Server size={12} /> SERVER CLUSTER
                </span>
                <span className="text-[#00E5FF] font-bold">LIVE</span>
              </div>
              <p className="text-[10px] text-slate-300 font-medium leading-tight">All Systems Operational</p>
              <div className="flex items-center gap-1 pt-1">
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-11/12 bg-gradient-to-r from-[#A855F7] to-[#FF4FD8] animate-pulse" />
                </div>
              </div>
            </div>

            {/* FLOATING LOGO CARD */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-5 group"
            >
              {/* Dual Neon Backlight Glow */}
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-r from-[#6C5CE7] via-[#00E5FF] to-[#FF4FD8] opacity-35 blur-xl group-hover:opacity-75 transition duration-700 animate-pulse" />

              {/* Glass Container */}
              <div className="relative p-6 sm:p-7 rounded-[28px] bg-[#090B15]/90 border border-white/20 shadow-[0_30px_70px_rgba(0,0,0,0.9)] backdrop-blur-2xl flex items-center justify-center overflow-hidden">
                {/* Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60 pointer-events-none" />
                <Logo size={80} animated={true} />
              </div>
            </motion.div>

            {/* PREMIER AI MARKETPLACE BADGE */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-widest bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-cyan-500/10 border border-purple-500/30 text-purple-300 shadow-[0_0_25px_rgba(168,85,247,0.25)] mb-4 backdrop-blur-xl"
            >
              <Sparkles size={13} className="text-[#00E5FF] animate-spin-slow" />
              <span>PREMIER AI MARKETPLACE</span>
            </motion.div>

            {/* MAIN HEADING */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2.5"
            >
              <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-none">
                PRIME TOOLS{" "}
                <span className="bg-gradient-to-r from-[#00E5FF] via-[#A855F7] to-[#FF4FD8] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,229,255,0.45)]">
                  HUB
                </span>
              </h1>

              {/* SUBTITLE */}
              <p className="text-xs sm:text-sm text-slate-300 font-body max-w-lg mx-auto leading-relaxed flex flex-wrap items-center justify-center gap-2 font-medium">
                <span>Premium AI Subscriptions</span>
                <span className="text-white/40">•</span>
                <span>Software Licenses</span>
                <span className="text-white/40">•</span>
                <span>Creator Tools</span>
                <span className="text-white/40">•</span>
                <span>Instant Activation</span>
              </p>
            </motion.div>

            {/* LOADING SECTION */}
            <div className="w-full max-w-md mt-7 px-2">
              {/* Glass Track */}
              <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden p-[1px] border border-white/20 relative shadow-[0_0_20px_rgba(0,0,0,0.6)]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#00E5FF] via-[#7C4DFF] to-[#FF4FD8] transition-all duration-75 relative"
                  style={{ width: `${progress}%` }}
                >
                  {progress > 0 && (
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_15px_#00E5FF,0_0_25px_#FF4FD8] animate-ping" />
                  )}
                </div>
              </div>

              {/* Status Message & Percentage */}
              <div className="mt-3 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2 text-slate-300 truncate pr-2">
                  <Terminal size={14} className="text-[#00E5FF] shrink-0 animate-pulse" />
                  <span className="truncate text-[11px] sm:text-xs font-semibold">{currentMsg}</span>
                </div>
                <span className="text-[#00E5FF] font-black text-sm drop-shadow-[0_0_12px_rgba(0,229,255,0.6)] shrink-0">
                  {progress}%
                </span>
              </div>
            </div>

            {/* TOOL CHIPS WITH COLORED DOTS */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 max-w-xl opacity-90">
              {PLATFORMS.map((p) => (
                <span
                  key={p.name}
                  className="px-2.5 py-1 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/25 text-[10px] font-mono font-bold text-slate-200 flex items-center gap-1.5 transition-all backdrop-blur-md shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: p.color, boxShadow: `0 0 6px ${p.color}` }} />
                  {p.name}
                </span>
              ))}
            </div>

          </motion.div>

          {/* BOTTOM FEATURE CARDS & FOOTER */}
          <div className="relative z-20 w-full max-w-7xl mx-auto space-y-3 pb-[env(safe-area-inset-bottom,0px)]">
            {/* 4 EQUAL FEATURE CARDS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              
              {/* Card 1 */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl flex items-center gap-3 transition-all duration-300 group hover:-translate-y-1 shadow-lg">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-[#00E5FF] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Zap size={16} />
                </div>
                <div className="text-left">
                  <span className="font-bold text-xs text-white block">⚡ Premium Access</span>
                  <span className="text-[10px] text-slate-400">Top AI Tools</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-purple-500/40 backdrop-blur-xl flex items-center gap-3 transition-all duration-300 group hover:-translate-y-1 shadow-lg">
                <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={16} />
                </div>
                <div className="text-left">
                  <span className="font-bold text-xs text-white block">🛡️ Trusted by 5,000+</span>
                  <span className="text-[10px] text-slate-400">Verified Clients</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-emerald-500/40 backdrop-blur-xl flex items-center gap-3 transition-all duration-300 group hover:-translate-y-1 shadow-lg">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={16} />
                </div>
                <div className="text-left">
                  <span className="font-bold text-xs text-white block">🚀 Instant Delivery</span>
                  <span className="text-[10px] text-slate-400">Within 15 Minutes</span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-pink-500/40 backdrop-blur-xl flex items-center gap-3 transition-all duration-300 group hover:-translate-y-1 shadow-lg">
                <div className="w-8 h-8 rounded-xl bg-pink-500/10 border border-pink-500/30 text-pink-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Layers size={16} />
                </div>
                <div className="text-left">
                  <span className="font-bold text-xs text-white block">✔ Genuine Licenses</span>
                  <span className="text-[10px] text-slate-400">Official Warranty</span>
                </div>
              </div>

            </div>

            {/* MINIMAL FOOTER TEXT */}
            <div className="pt-2 text-center text-[10px] font-mono text-slate-400 tracking-wider flex items-center justify-center gap-3 flex-wrap">
              <span>Instant WhatsApp Activation</span>
              <span>•</span>
              <span>Full Support Warranty Included</span>
              <span>•</span>
              <span>256-Bit SSL Encryption</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


