import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import { Sparkles, ShieldCheck, Cpu, Zap, Layers } from "lucide-react";

export default function StartupIntro({ onComplete }) {
  // Phase: "intro" (0 - 2.4s) -> "loading" (2.4s - 4.4s) -> "complete"
  const [phase, setPhase] = useState("intro");
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing System Core...");

  // Trigger phase transition to loading after intro duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase("loading");
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  // RAF Progress Counter & Dynamic Status Messages
  useEffect(() => {
    if (phase !== "loading") return;

    const statusSteps = [
      { at: 10, msg: "Establishing Secure Encryption..." },
      { at: 35, msg: "Loading Premium AI Catalog & Tools..." },
      { at: 65, msg: "Synchronizing Reseller Deals & Agency Rates..." },
      { at: 88, msg: "Optimizing 3D Interactive UI..." },
      { at: 100, msg: "Welcome to Prime Tools Hub!" },
    ];

    let animationFrameId;
    const startTime = performance.now();
    const duration = 1800; // 1.8 seconds smooth progress build

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);

      const matchedStep = [...statusSteps].reverse().find((s) => pct >= s.at);
      if (matchedStep) {
        setStatusText(matchedStep.msg);
      }

      if (pct < 100) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          setPhase("complete");
          if (onComplete) onComplete();
        }, 400);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [phase, onComplete]);

  if (phase === "complete") return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="startup-overlay"
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 1.08,
          filter: "blur(12px)",
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020205] text-white overflow-hidden select-none"
        style={{ perspective: "1200px" }}
      >
        {/* DYNAMIC 3D BACKGROUND AMBIENT LIGHTS & GRID */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Animated Glowing Light Orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial from-violet-600/25 via-blue-600/15 to-transparent blur-[160px] animate-pulse" />
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-radial from-pink-600/20 to-transparent blur-[140px]" />
          <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-radial from-indigo-600/20 to-transparent blur-[140px]" />

          {/* 3D Holographic Perspective Mesh Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-35" />
          
          {/* Floating Particle Dots */}
          <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-blue-400 blur-[1px] ps-float-particle-1" />
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-purple-400 blur-[2px] ps-float-particle-2" />
          <div className="absolute top-1/3 right-1/5 w-2.5 h-2.5 rounded-full bg-pink-400 blur-[1px] ps-float-particle-1" />
        </div>

        {/* STAGE 1: 3D WELCOME INTRO CARD */}
        {phase === "intro" && (
          <motion.div
            key="intro-phase"
            initial={{ opacity: 0, rotateX: 20, rotateY: -10, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1, y: 0 }}
            exit={{ opacity: 0, rotateX: -20, rotateY: 10, scale: 1.1, y: -30 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center px-6 max-w-2xl relative z-10"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Top 3D Glass Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-xs font-black bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-500/40 text-blue-300 mb-8 backdrop-blur-xl shadow-[0_0_30px_rgba(59,130,246,0.3)] tracking-widest uppercase"
            >
              <Sparkles size={15} className="text-blue-400 animate-spin" />
              <span>PAKISTAN'S #1 AI & DIGITAL MARKETPLACE</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </motion.div>

            {/* 3D Floating Logo Container */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-8"
            >
              {/* Outer Glowing Orbit Ring */}
              <div className="absolute -inset-6 rounded-full border border-violet-500/30 animate-[spin_10s_linear_infinite]" />
              <div className="absolute -inset-12 rounded-full border border-dashed border-blue-500/20 animate-[spin_18s_linear_infinite_reverse]" />
              
              {/* Center Logo Card */}
              <div className="p-5 rounded-3xl bg-white/[0.03] border border-white/15 backdrop-blur-2xl shadow-[0_0_50px_rgba(139,92,246,0.4)] ps-logo-anim">
                <Logo size={80} animated={true} />
              </div>
            </motion.div>

            {/* Main Welcome 3D Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-tight mb-4"
            >
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(139,92,246,0.6)] ps-text-3d">
                Prime Tools Hub
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="text-base sm:text-xl text-white/80 font-body font-medium tracking-wide max-w-lg"
            >
              Premium Accounts, Custom Web Apps & Digital Agency Services
            </motion.p>
          </motion.div>
        )}

        {/* STAGE 2: 3D CYBER LOADER & LIVE INITIALIZATION PROGRESS */}
        {phase === "loading" && (
          <motion.div
            key="loading-phase"
            initial={{ opacity: 0, rotateX: -15, scale: 0.88 }}
            animate={{ opacity: 1, rotateX: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center relative z-10 px-6 w-full max-w-md"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* 3D Holographic Core Ring */}
            <div className="relative flex items-center justify-center mb-10">
              {/* Pulsing Back Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.35, 0.75, 0.35],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full blur-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60"
              />

              {/* Rotating 3D Rings */}
              <div className="w-32 h-32 rounded-full border-2 border-blue-500/40 border-t-blue-400 border-b-purple-500 animate-spin flex items-center justify-center shadow-[0_0_35px_rgba(59,130,246,0.5)]">
                <div className="w-24 h-24 rounded-full border-2 border-dashed border-purple-400/50 border-r-pink-400 animate-[spin_4s_linear_infinite_reverse] flex items-center justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/20 backdrop-blur-xl flex items-center justify-center shadow-inner">
                    <Logo size={42} animated={true} />
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Title */}
            <div className="text-center mb-7">
              <h2 className="font-display font-black text-2xl text-white tracking-tight flex items-center justify-center gap-2">
                <span>Prime</span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Tools Hub
                </span>
                <ShieldCheck size={20} className="text-emerald-400 animate-pulse ml-1" />
              </h2>
              <p className="text-xs text-white/50 font-mono uppercase tracking-widest mt-1">
                SYSTEM INITIALIZATION & SECURE CONNECT
              </p>
            </div>

            {/* 3D Glass Progress Bar */}
            <div className="w-full bg-white/[0.06] rounded-2xl p-1.5 border border-white/15 backdrop-blur-2xl overflow-hidden relative mb-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              <motion.div
                className="h-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative"
                style={{ width: `${progress}%` }}
              >
                {/* Moving Shimmer Sweep */}
                <span className="ps-shimmer absolute inset-0 rounded-xl" />
                {/* Glow Tip */}
                <div className="absolute right-0 top-0 bottom-0 w-3 bg-white blur-[2px] rounded-r-xl" />
              </motion.div>
            </div>

            {/* Live Status Readout */}
            <div className="flex items-center justify-between w-full text-xs font-semibold px-1">
              <div className="flex items-center gap-2 text-white/80">
                <Cpu size={14} className="text-purple-400 animate-spin" />
                <span className="font-body text-white/90">{statusText}</span>
              </div>
              <span className="font-mono text-purple-300 font-black text-sm bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/30">
                {progress}%
              </span>
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
