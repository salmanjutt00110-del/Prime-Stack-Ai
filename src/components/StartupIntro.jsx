import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";

export default function StartupIntro({ onComplete }) {
  // Phase: "intro" (0-2.2s) -> "loading" (2.2s - 4.0s) -> "complete"
  const [phase, setPhase] = useState("intro");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setPhase("loading");
    }, 2200);

    return () => clearTimeout(timer1);
  }, []);

  // Progress Bar RAF counter during loading phase
  useEffect(() => {
    if (phase !== "loading") return;

    let animationFrameId;
    const startTime = performance.now();
    const duration = 1400; // 1.4 seconds for crisp progress bar completion

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct < 100) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          setPhase("complete");
          if (onComplete) onComplete();
        }, 300);
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
        exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030305] text-white overflow-hidden select-none"
        style={{ willChange: "opacity" }}
      >
        {/* Background Radial Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(139, 92, 246, 0.18) 0%, rgba(59, 130, 246, 0.08) 40%, transparent 70%)",
          }}
        />

        {/* Ambient Grid Lines Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />

        {/* PHASE 1: WELCOME INTRO */}
        {phase === "intro" && (
          <motion.div
            key="intro-phase"
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -15 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center px-6 max-w-2xl relative z-10"
          >
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-white/10 border border-white/15 text-violet-300 mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.25)]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>OFFICIAL MARKETPLACE</span>
            </motion.div>

            {/* Main Welcome Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-white leading-tight"
            >
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(139,92,246,0.5)]">
                Prime Tools Hub
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-4 text-base sm:text-lg text-white/80 font-body font-medium tracking-wide"
            >
              Pakistan's Premium AI Tools Marketplace
            </motion.p>
          </motion.div>
        )}

        {/* PHASE 2: PREMIUM LOADING SCREEN */}
        {phase === "loading" && (
          <motion.div
            key="loading-phase"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center relative z-10 px-6 w-full max-w-sm"
          >
            {/* Glowing Logo Container */}
            <div className="relative flex items-center justify-center mb-8">
              {/* Outer Pulse Glow Ring */}
              <motion.div
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full blur-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"
              />

              {/* Central Logo */}
              <div className="relative z-10 transform scale-125">
                <Logo size={72} animated={true} />
              </div>
            </div>

            {/* Brand Title */}
            <h2 className="font-display font-extrabold text-xl text-white tracking-tight mb-6">
              Prime <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Tools Hub</span>
            </h2>

            {/* Progress Bar Container */}
            <div className="w-full bg-white/10 rounded-full h-2.5 p-0.5 border border-white/15 backdrop-blur-md overflow-hidden relative mb-3">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative"
                style={{ width: `${progress}%` }}
              >
                <span className="ps-shimmer absolute inset-0 rounded-full" />
              </motion.div>
            </div>

            {/* Progress Percentage & Status */}
            <div className="flex items-center justify-between w-full text-xs font-semibold text-white/70">
              <span>Initializing workspace...</span>
              <span className="font-mono text-purple-300 font-bold">{progress}%</span>
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
