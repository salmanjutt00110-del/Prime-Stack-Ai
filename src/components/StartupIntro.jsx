import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import { Sparkles, ArrowRight, ShieldCheck, Zap, PackageCheck } from "lucide-react";

export default function StartupIntro({ onComplete }) {
  const [visible, setVisible] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const hasSeen = sessionStorage.getItem("prime_welcome_seen");
        if (hasSeen) return false;
      } catch (e) {
        // Fallback if storage is blocked
      }
    }
    return true;
  });

  const [stepIndex, setStepIndex] = useState(0);

  const finish = () => {
    if (typeof window !== "undefined") {
      try {
        sessionStorage.setItem("prime_welcome_seen", "true");
      } catch (e) {}
    }
    setVisible(false);
    if (onComplete) onComplete();
  };

  useEffect(() => {
    if (!visible) {
      if (onComplete) onComplete();
      return;
    }

    // High-tech, cinematic sequence timing (3.2 seconds total)
    const timers = [
      setTimeout(() => setStepIndex(1), 700),
      setTimeout(() => setStepIndex(2), 1400),
      setTimeout(() => setStepIndex(3), 2100),
      setTimeout(() => setStepIndex(4), 2700),
      setTimeout(() => finish(), 3400),
    ];

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [visible]);

  if (!visible) return null;

  const STEPS = [
    { title: "Initializing Prime Tools Core Security...", icon: ShieldCheck, percent: 25 },
    { title: "Connecting Auto-Activation Engine...", icon: Zap, percent: 50 },
    { title: "Syncing Live Product Inventory & Stock...", icon: PackageCheck, percent: 75 },
    { title: "Ready — Premium AI Marketplace Loaded!", icon: Sparkles, percent: 95 },
    { title: "Welcome to Prime Tools Hub", icon: Sparkles, percent: 100 },
  ];

  const currentStep = STEPS[stepIndex] || STEPS[0];
  const StepIcon = currentStep.icon;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="welcome-intro-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(10px)",
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#030308]/90 backdrop-blur-2xl text-white overflow-hidden select-none py-10 px-6 cursor-pointer will-change-transform"
          onClick={finish}
        >
          {/* Cyber Grid & Ambient Radial Glows */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-70" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-blue-600/30 via-purple-600/25 to-pink-500/30 blur-[140px] rounded-full animate-pulse" />
          </div>

          {/* Top Bar with Live Badge & Skip Button */}
          <div className="relative z-10 w-full max-w-4xl flex items-center justify-between text-xs font-semibold border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 font-extrabold uppercase tracking-widest text-[11px] font-mono">
                System Initializing
              </span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                finish();
              }}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all active:scale-95 cursor-pointer shadow-lg backdrop-blur-md"
            >
              <span>Skip Intro</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Center Glass Stage */}
          <div className="flex flex-col items-center text-center max-w-lg relative z-10 my-auto">
            {/* Holographic Logo Container */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-8"
            >
              <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 blur-2xl opacity-60 animate-pulse" />
              <div className="relative p-6 sm:p-7 rounded-[28px] bg-white/10 border border-white/25 backdrop-blur-2xl shadow-[0_0_50px_rgba(139,92,246,0.45)]">
                <Logo size={84} animated={true} />
              </div>
            </motion.div>

            {/* Main Brand Headline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <h1 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-white">
                PRIME TOOLS <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">HUB</span>
              </h1>
              <p className="text-xs sm:text-sm font-body text-white/70 mt-1 uppercase tracking-widest font-mono">
                Official AI Tools Marketplace
              </p>
            </motion.div>

            {/* Dynamic Animated Status Box */}
            <div className="w-full min-h-[60px] flex items-center justify-center my-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={stepIndex}
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.96 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-xl"
                >
                  <StepIcon size={16} className="text-violet-400 animate-spin" />
                  <span className="font-display font-semibold text-xs sm:text-sm text-white">
                    {currentStep.title}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Glowing Neon Progress Bar with Percentage */}
            <div className="w-64 bg-white/10 rounded-full h-2.5 mt-6 p-0.5 relative overflow-hidden border border-white/20 shadow-inner">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 shadow-[0_0_12px_rgba(139,92,246,0.8)]"
                initial={{ width: "10%" }}
                animate={{ width: `${currentStep.percent}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
            
            <div className="mt-2 text-[11px] font-mono text-violet-300 font-bold tracking-wider">
              {currentStep.percent}%
            </div>
          </div>

          {/* Footer instruction */}
          <div className="relative z-10 text-[11px] font-mono text-white/50 uppercase tracking-widest text-center flex items-center gap-1.5">
            <span>Tap anywhere to launch marketplace</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
