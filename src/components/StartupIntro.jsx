import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import { Sparkles, ShieldCheck, Zap, Cpu, CheckCircle2, ArrowRight } from "lucide-react";

export default function StartupIntro({ onComplete }) {
  const canvasRef = useRef(null);
  // Phase: "intro" (0-2.5s) -> "loading" (2.5s-4.5s) -> "complete"
  const [phase, setPhase] = useState("intro");
  const [progress, setProgress] = useState(0);
  const [statusMsg, setStatusMsg] = useState("Initializing System Gateway...");

  // High-performance smooth floating ambient particles on HTML5 Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener("resize", setSize);

    // Create 70 soft circular glowing particles
    const particleCount = 70;
    const particles = [];
    const colors = ["rgba(99, 102, 241, ", "rgba(139, 92, 246, ", "rgba(236, 72, 153, ", "rgba(59, 130, 246, "];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.5 + 1.2,
        colorBase: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.25,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorBase}${p.alpha})`;
        ctx.shadowColor = `${p.colorBase}0.8)`;
        ctx.shadowBlur = 12;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", setSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Timer for intro -> loading phase transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase("loading");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // RAF Progress counter & dynamic status messages
  useEffect(() => {
    if (phase !== "loading") return;

    const statusSteps = [
      { at: 12, msg: "Establishing Encrypted Security SSL..." },
      { at: 35, msg: "Loading Premium AI Accounts & Tools..." },
      { at: 65, msg: "Synchronizing AmirAds Web & Ad Agency Services..." },
      { at: 88, msg: "Finalizing Ultra-Fast 60FPS Workspace..." },
      { at: 100, msg: "Welcome to Prime Tools Hub!" },
    ];

    let animationFrameId;
    const startTime = performance.now();
    const duration = 1900; // 1.9 seconds smooth progress completion

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);

      const matched = [...statusSteps].reverse().find((s) => pct >= s.at);
      if (matched) {
        setStatusMsg(matched.msg);
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
          scale: 1.05,
          filter: "blur(10px)",
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
        }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#030307] text-white overflow-hidden select-none py-10 px-4"
      >
        {/* HTML5 CANVAS FLOATING GLOWING PARTICLES BACKGROUND */}
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

        {/* RADIAL AMBIENT GLOW SPHERES */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-radial from-indigo-600/25 via-purple-600/15 to-transparent blur-[150px]" />
          <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-radial from-blue-600/15 to-transparent blur-[130px]" />
        </div>

        {/* ELEGANT APPLE-STYLE TOP STATUS HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full max-w-5xl flex items-center justify-between text-xs font-semibold text-white/60 border-b border-white/10 pb-4"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 font-extrabold uppercase tracking-wider text-[11px]">System Online</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="hidden sm:inline text-white/70">256-Bit SSL Encrypted</span>
          </div>

          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-purple-400 animate-spin" />
            <span className="font-bold text-white/90 text-xs">Prime Tools Hub</span>
            <span className="px-2 py-0.5 rounded-md bg-purple-500/20 border border-purple-500/30 text-[10px] text-purple-300 font-extrabold">
              OFFICIAL
            </span>
          </div>
        </motion.div>

        {/* PHASE 1: WELCOME SCREEN (HIGH CONTRAST & ULTRA VISIBLE) */}
        {phase === "intro" && (
          <motion.div
            key="intro-phase"
            initial={{ opacity: 0, scale: 0.92, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center max-w-3xl relative z-10 my-auto"
          >
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-blue-500/40 text-blue-200 mb-7 shadow-[0_0_25px_rgba(59,130,246,0.3)] backdrop-blur-xl uppercase tracking-wider"
            >
              <Zap size={14} className="text-yellow-400 animate-bounce" />
              <span>PAKISTAN'S PREMIER AI & DIGITAL AGENCY MARKETPLACE</span>
            </motion.div>

            {/* Glowing Logo Card */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative mb-7"
            >
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-50 animate-pulse" />
              <div className="relative p-5 rounded-3xl bg-white/[0.05] border border-white/20 backdrop-blur-2xl shadow-[0_0_50px_rgba(139,92,246,0.4)]">
                <Logo size={80} animated={true} />
              </div>
            </motion.div>

            {/* ULTRA CRISP & LEGIBLE MAIN HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="font-display font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-white leading-tight mb-5"
            >
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(139,92,246,0.8)] font-extrabold">
                Prime Tools Hub
              </span>
            </motion.h1>

            {/* SUB-HEADLINE COPY (ATTRACTIVE & HIGH CONTRAST) */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-base sm:text-xl text-white/90 font-body font-medium tracking-wide max-w-2xl leading-relaxed mb-7"
            >
              Your All-In-One Hub for Premium Verified AI Accounts, Custom High-Converting Websites & High-ROAS Agency Ads.
            </motion.p>

            {/* HIGH IMPACT FEATURE BADGES */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-3 text-xs font-bold"
            >
              <div className="px-4 py-2 rounded-2xl bg-white/[0.05] border border-white/15 text-emerald-300 flex items-center gap-2 backdrop-blur-md shadow-md">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>100% Genuine Verified Accounts</span>
              </div>

              <div className="px-4 py-2 rounded-2xl bg-white/[0.05] border border-white/15 text-blue-300 flex items-center gap-2 backdrop-blur-md shadow-md">
                <Zap size={16} className="text-blue-400" />
                <span>Instant Auto Delivery</span>
              </div>

              <div className="px-4 py-2 rounded-2xl bg-white/[0.05] border border-white/15 text-pink-300 flex items-center gap-2 backdrop-blur-md shadow-md">
                <Sparkles size={16} className="text-pink-400" />
                <span>🔥 50% OFF Web Development</span>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* PHASE 2: SLEEK APPLE-STYLE PROGRESS LOADER */}
        {phase === "loading" && (
          <motion.div
            key="loading-phase"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center relative z-10 w-full max-w-md my-auto"
          >
            {/* Glowing Orbit Logo Center */}
            <div className="relative flex items-center justify-center mb-8">
              <div className="absolute inset-0 rounded-full blur-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-60 animate-pulse" />

              <div className="w-28 h-28 rounded-full border-2 border-purple-500/40 border-t-purple-400 border-b-pink-400 animate-spin flex items-center justify-center shadow-[0_0_35px_rgba(139,92,246,0.5)]">
                <div className="w-20 h-20 rounded-full border border-dashed border-blue-400/50 animate-[spin_5s_linear_infinite_reverse] flex items-center justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center">
                    <Logo size={36} animated={true} />
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Title */}
            <div className="text-center mb-6">
              <h2 className="font-display font-black text-2xl text-white tracking-tight">
                Prime <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Tools Hub</span>
              </h2>
              <p className="text-xs text-white/60 font-body mt-1">Preparing Your Premium AI Workspace</p>
            </div>

            {/* High-Contrast Glass Progress Bar */}
            <div className="w-full bg-white/10 rounded-2xl p-1 border border-white/20 backdrop-blur-2xl overflow-hidden relative mb-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              <motion.div
                className="h-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative"
                style={{ width: `${progress}%` }}
              >
                <span className="ps-shimmer absolute inset-0 rounded-xl" />
                <div className="absolute right-0 top-0 bottom-0 w-2.5 bg-white blur-[2px] rounded-r-xl" />
              </motion.div>
            </div>

            {/* Status Text & Progress Percentage */}
            <div className="flex items-center justify-between w-full text-xs font-semibold px-1">
              <div className="flex items-center gap-2 text-white/90">
                <Cpu size={15} className="text-purple-400 animate-spin shrink-0" />
                <span className="font-body text-white/90 truncate max-w-[280px]">{statusMsg}</span>
              </div>
              <span className="font-mono text-purple-300 font-extrabold text-sm bg-purple-500/20 px-2 py-0.5 rounded border border-purple-500/30">
                {progress}%
              </span>
            </div>
          </motion.div>
        )}

        {/* ELEGANT BOTTOM FOOTER MARK */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 text-[11px] font-mono text-white/40 uppercase tracking-widest text-center"
        >
          <span>AMIRADS & PRIME TOOLS HUB © ALL RIGHTS RESERVED</span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
