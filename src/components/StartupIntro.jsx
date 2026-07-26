import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import { Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function StartupIntro({ onComplete }) {
  // Step 1: "welcome" (1.6s) -> Step 2: "loading" (1.8s) -> "complete"
  const [step, setStep] = useState(1);
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusMsg, setStatusMsg] = useState("Loading Premium Experience...");

  const finish = () => {
    setVisible(false);
    if (onComplete) onComplete();
  };

  // Step 1 -> Step 2 transition after 1.6 seconds
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setStep(2);
    }, 1600);

    // Failsafe max timer (4s total)
    const safetyTimer = setTimeout(() => {
      finish();
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(safetyTimer);
    };
  }, []);

  // Step 2 Progress Animation (0% to 100%) & status message updates
  useEffect(() => {
    if (step !== 2) return;

    const statusSteps = [
      { at: 0, msg: "Loading Premium Experience..." },
      { at: 25, msg: "Preparing Products & Services..." },
      { at: 55, msg: "Optimizing Performance..." },
      { at: 80, msg: "Loading AI Services..." },
      { at: 98, msg: "Almost Ready..." },
    ];

    const startTime = performance.now();
    const duration = 1600; // 1.6s smooth duration
    let rafId;

    const updateProgress = (now) => {
      const elapsed = now - startTime;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);

      const matched = [...statusSteps].reverse().find((s) => pct >= s.at);
      if (matched) {
        setStatusMsg(matched.msg);
      }

      if (pct < 100) {
        rafId = requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          finish();
        }, 200);
      }
    };

    rafId = requestAnimationFrame(updateProgress);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [step]);

  if (!visible) return null;

  // Words for Step 1 Animated Reveal
  const headingText = "Welcome to Prime Tools Hub";
  const words = headingText.split(" ");

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="billion-dollar-intro-overlay"
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 1.04,
          filter: "blur(12px)",
          transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#030307] text-white overflow-hidden select-none py-8 px-6 cursor-pointer"
        onClick={finish}
      >
        {/* Dynamic Background Radial Ambient Orbs */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-radial from-violet-600/30 via-indigo-600/15 to-transparent blur-[150px] animate-pulse" />
          <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-pink-500/15 rounded-full blur-[110px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-[110px]" />
        </div>

        {/* TOP BAR: System Status & Skip Button */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 w-full max-w-4xl flex items-center justify-between text-xs font-semibold border-b border-white/10 pb-3"
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 font-extrabold uppercase tracking-wider text-[11px]">
              {step === 1 ? "System Ready" : "Initializing Platform"}
            </span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              finish();
            }}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer shadow-lg active:scale-95"
          >
            <span>Skip Intro</span>
            <ArrowRight size={14} />
          </button>
        </motion.div>

        {/* STEP 1: WELCOME SCREEN */}
        {step === 1 && (
          <motion.div
            key="step1-welcome"
            initial={{ opacity: 0, filter: "blur(12px)", scale: 0.95 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            exit={{ opacity: 0, filter: "blur(8px)", scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center max-w-2xl relative z-10 my-auto"
          >
            {/* Logo with Soft Glow */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-6"
            >
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-60 animate-pulse" />
              <div className="relative p-5 rounded-3xl bg-white/10 border border-white/25 backdrop-blur-2xl shadow-[0_0_50px_rgba(139,92,246,0.4)]">
                <Logo size={90} animated={true} />
              </div>
            </motion.div>

            {/* Word-by-Word Revealed Heading */}
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight mb-4 flex flex-wrap justify-center gap-x-3">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={
                    word.toLowerCase().includes("prime") || word.toLowerCase().includes("tools") || word.toLowerCase().includes("hub")
                      ? "bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent"
                      : ""
                  }
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-sm sm:text-lg font-body text-white/80 max-w-lg mb-6"
            >
              Premium AI Tools & Digital Services Platform
            </motion.p>

            {/* Soft Glow Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-purple-300 backdrop-blur-md"
            >
              <Sparkles size={14} className="text-yellow-400 animate-spin" />
              <span>Loading your premium experience...</span>
            </motion.div>
          </motion.div>
        )}

        {/* STEP 2: PREMIUM PROGRESS LOADING SCREEN */}
        {step === 2 && (
          <motion.div
            key="step2-loading"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center relative z-10 w-full max-w-md my-auto"
          >
            {/* SVG Circular Progress Ring around Logo */}
            <div className="relative flex items-center justify-center mb-8">
              <svg className="w-32 h-32 transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="6"
                  fill="transparent"
                />
                <motion.circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="url(#progress-gradient)"
                  strokeWidth="6"
                  strokeDasharray={351.8}
                  strokeDashoffset={351.8 - (351.8 * progress) / 100}
                  strokeLinecap="round"
                  fill="transparent"
                  transition={{ ease: "easeInOut" }}
                />
                <defs>
                  <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Logo inside circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Logo size={56} animated={true} />
              </div>
            </div>

            {/* Percentage Display */}
            <div className="text-center mb-5">
              <span className="font-display font-black text-4xl sm:text-5xl bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                {progress}%
              </span>
            </div>

            {/* Linear Progress Bar */}
            <div className="w-full bg-white/10 rounded-full h-2.5 p-0.5 border border-white/15 backdrop-blur-xl overflow-hidden mb-4 shadow-inner">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative"
                style={{ width: `${progress}%` }}
              >
                <span className="ps-shimmer absolute inset-0" />
              </motion.div>
            </div>

            {/* Status Message */}
            <div className="flex items-center justify-between w-full px-1 text-xs font-semibold">
              <span className="text-white/80 font-body animate-pulse">{statusMsg}</span>
              <span className="text-purple-300 font-mono">STATION ONLINE</span>
            </div>
          </motion.div>
        )}

        {/* BOTTOM FOOTER */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative z-10 text-[11px] font-mono text-white/50 uppercase tracking-widest text-center"
        >
          <span>Tap anywhere to launch platform</span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
