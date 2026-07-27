import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Cpu, CheckCircle2, Lock } from "lucide-react";

export default function StartupIntro({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  const finish = () => {
    setVisible(false);
    if (onComplete) onComplete();
  };

  useEffect(() => {
    if (!visible) return;

    // Fast 0 to 100% digital counter
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    // High-tech cinematic sequence (2.8 seconds total)
    const t1 = setTimeout(() => setStepIndex(1), 600);
    const t2 = setTimeout(() => setStepIndex(2), 1200);
    const t3 = setTimeout(() => setStepIndex(3), 1800);
    const t4 = setTimeout(() => setStepIndex(4), 2400);
    const t5 = setTimeout(() => finish(), 3000);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [visible]);

  if (!visible) return null;

  const STEPS = [
    { title: "INITIALIZING TRILLION-DOLLAR AI MATRIX...", icon: Cpu, detail: "Quantum Core Synchronized" },
    { title: "VERIFYING ENCRYPTED SECURITY PROTOCOLS...", icon: ShieldCheck, detail: "256-Bit SSL Protection Active" },
    { title: "LOADING 21 PREMIUM AI TOOLS & SERVICES...", icon: Zap, detail: "Auto-Activation Engine Ready" },
    { title: "CONNECTING PRIORITY WHATSAPP NETWORK...", icon: CheckCircle2, detail: "24/7 Priority Support Online" },
    { title: "WELCOME TO PRIME TOOLS HUB", icon: Sparkles, detail: "Marketplace Successfully Unlocked" },
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
            scale: 1.08,
            filter: "blur(16px)",
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#020205] text-white overflow-hidden select-none py-8 px-5 cursor-pointer will-change-transform"
          onClick={finish}
        >
          {/* TRILLION-DOLLAR AMBIENT LIGHTING & LASER GRID */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {/* Cyber Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.06)_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-70" />
            
            {/* Animated Laser Beams */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
            
            {/* Pulsing Core Nebula Glows */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-r from-blue-600/30 via-violet-600/30 to-pink-600/30 blur-[160px] rounded-full animate-pulse pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/20 blur-[130px] rounded-full pointer-events-none" />
          </div>

          {/* TOP STATUS BAR & ENTER BUTTON */}
          <div className="relative z-10 w-full max-w-5xl flex items-center justify-between text-xs font-mono border-b border-white/10 pb-4 pt-[env(safe-area-inset-top,0px)]">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500" />
              </span>
              <span className="text-cyan-400 font-extrabold uppercase tracking-widest text-[11px]">
                SYSTEM ONLINE • v3.0 ULTIMATE
              </span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                finish();
              }}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all active:scale-95 cursor-pointer shadow-[0_0_20px_rgba(255,255,255,0.15)] backdrop-blur-md"
            >
              <span>ENTER MARKETPLACE</span>
              <ArrowRight size={14} className="text-cyan-300" />
            </button>
          </div>

          {/* MAIN CENTERSTAGE STAGE — 3D HOLOGRAPHIC WOW EFFECT */}
          <div className="flex flex-col items-center text-center max-w-xl relative z-10 my-auto">
            
            {/* Holographic 3D Floating Logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateY: -30 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-8 group"
            >
              {/* Outer Rotating Energy Rings */}
              <motion.div
                className="absolute -inset-8 rounded-[48px] border border-dashed border-cyan-400/40 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-4 rounded-[40px] border border-violet-500/40 pointer-events-none"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* Glowing Ambient Backdrop */}
              <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-r from-cyan-500 via-violet-600 to-pink-500 blur-3xl opacity-70 animate-pulse" />
              
              {/* Glass Logo Container */}
              <div className="relative p-7 sm:p-9 rounded-[32px] bg-white/10 border border-white/30 backdrop-blur-3xl shadow-[0_0_60px_rgba(139,92,246,0.6),inset_0_1px_0_rgba(255,255,255,0.4)]">
                <Logo size={96} animated={true} />
              </div>
            </motion.div>

            {/* Premium Trillion-Dollar Brand Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-5"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/40 text-blue-300 mb-3 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <Sparkles size={12} className="text-yellow-400 animate-spin" />
                <span>PAKISTAN'S #1 PREMIER AI MARKETPLACE</span>
              </div>

              <h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white leading-none">
                PRIME TOOLS{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-300 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]">
                  HUB
                </span>
              </h1>
              <p className="text-xs sm:text-sm font-body text-white/70 mt-2 uppercase tracking-widest font-mono">
                Genuine AI Subscriptions & Creator Services
              </p>
            </motion.div>

            {/* Dynamic Step Display */}
            <div className="w-full min-h-[70px] flex flex-col items-center justify-center my-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={stepIndex}
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex flex-col items-center gap-1 px-6 py-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-2xl shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
                >
                  <div className="flex items-center gap-2">
                    <StepIcon size={16} className="text-cyan-400 animate-bounce" />
                    <span className="font-display font-black text-xs sm:text-sm text-white tracking-wide">
                      {currentStep.title}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-300/80 font-medium">
                    {currentStep.detail}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Glowing Neon Cyber Progress Bar */}
            <div className="w-72 sm:w-80 bg-white/10 rounded-full h-3 mt-6 p-0.5 relative overflow-hidden border border-white/25 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 shadow-[0_0_20px_rgba(6,182,212,0.9)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            <div className="mt-2.5 flex items-center gap-3 font-mono text-xs font-bold tracking-widest text-cyan-300">
              <span>PROGRESS: {progress}%</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-emerald-400">
                <Lock size={12} /> SECURED
              </span>
            </div>
          </div>

          {/* FOOTER INSTRUCTION */}
          <div className="relative z-10 text-[11px] font-mono text-white/50 uppercase tracking-widest text-center flex items-center gap-2 pb-[env(safe-area-inset-bottom,0px)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Tap anywhere to launch instant experience</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
