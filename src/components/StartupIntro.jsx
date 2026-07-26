import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import { Sparkles, ShieldCheck, Zap, Cpu, ArrowRight } from "lucide-react";

export default function StartupIntro({ onComplete }) {
  const canvasRef = useRef(null);
  // Phase: "intro" (0-1s) -> "loading" (1s-2s) -> "complete"
  const [phase, setPhase] = useState("intro");
  const [progress, setProgress] = useState(0);
  const [statusMsg, setStatusMsg] = useState("Initializing System Gateway...");

  const finishIntro = () => {
    setPhase("complete");
    if (onComplete) onComplete();
  };

  // FAILSAFE SAFETY TIMEOUT: Guarantees startup intro unmounts within 3.5 seconds MAX no matter what
  useEffect(() => {
    const safetyTimer = setTimeout(() => {
      finishIntro();
    }, 3500);

    return () => clearTimeout(safetyTimer);
  }, []);

  // Floating ambient particles on Canvas
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

    const particleCount = 40;
    const particles = [];
    const colors = ["rgba(99, 102, 241, ", "rgba(139, 92, 246, ", "rgba(236, 72, 153, ", "rgba(59, 130, 246, "];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.5 + 1,
        colorBase: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.4 + 0.2,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
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
        ctx.shadowBlur = 10;
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

  // Timer for intro -> loading phase transition (reduced to 1s for ultra-fast startup)
  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase("loading");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Progress counter & status messages
  useEffect(() => {
    if (phase !== "loading") return;

    const statusSteps = [
      { at: 15, msg: "Establishing Encrypted Security SSL..." },
      { at: 40, msg: "Loading Premium AI Accounts & Tools..." },
      { at: 75, msg: "Synchronizing Agency Services..." },
      { at: 100, msg: "Welcome to Prime Tools Hub!" },
    ];

    let animationFrameId;
    let fallbackInterval;
    const startTime = performance.now();
    const duration = 1200; // 1.2 seconds fast completion

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
          finishIntro();
        }, 200);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    // Fallback interval in case browser tab is inactive or RAF is throttled
    fallbackInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(fallbackInterval);
          finishIntro();
          return 100;
        }
        return prev + 25;
      });
    }, 300);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (fallbackInterval) clearInterval(fallbackInterval);
    };
  }, [phase]);

  if (phase === "complete") return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="startup-overlay"
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 1.03,
          filter: "blur(8px)",
          transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
        }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#030307] text-white overflow-hidden select-none py-8 px-4 cursor-pointer"
        onClick={finishIntro}
      >
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-radial from-indigo-600/20 via-purple-600/10 to-transparent blur-[140px]" />
        </div>

        {/* TOP HEADER WITH SKIP BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 w-full max-w-5xl flex items-center justify-between text-xs font-semibold text-white/60 border-b border-white/10 pb-3"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 font-extrabold uppercase tracking-wider text-[10px]">System Ready</span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              finishIntro();
            }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer min-h-[36px]"
          >
            <span>Skip</span>
            <ArrowRight size={13} />
          </button>
        </motion.div>

        {/* PHASE 1: WELCOME SCREEN */}
        {phase === "intro" && (
          <motion.div
            key="intro-phase"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.03, y: -15 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center max-w-2xl relative z-10 my-auto"
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="relative mb-5"
            >
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-50 animate-pulse" />
              <div className="relative p-4 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-2xl shadow-xl">
                <Logo size={70} animated={true} />
              </div>
            </motion.div>

            <h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white leading-tight mb-3">
              Prime <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">Tools Hub</span>
            </h1>

            <p className="text-xs sm:text-base text-white/85 font-body max-w-lg leading-relaxed mb-5">
              Verified AI Accounts, Web Development & Digital Marketing Services.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold">
              <div className="px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/15 text-emerald-300 flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>Verified Accounts</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/15 text-blue-300 flex items-center gap-1.5">
                <Zap size={14} className="text-blue-400" />
                <span>Instant Delivery</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* PHASE 2: PROGRESS LOADER */}
        {phase === "loading" && (
          <motion.div
            key="loading-phase"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center relative z-10 w-full max-w-sm my-auto"
          >
            <div className="relative flex items-center justify-center mb-6">
              <div className="w-20 h-20 rounded-full border-2 border-purple-500/40 border-t-purple-400 border-b-pink-400 animate-spin flex items-center justify-center">
                <Logo size={32} animated={true} />
              </div>
            </div>

            <div className="text-center mb-4">
              <h2 className="font-display font-bold text-xl text-white tracking-tight">
                Prime <span className="text-purple-400">Tools Hub</span>
              </h2>
              <p className="text-xs text-white/60 font-body mt-0.5">Loading workspace...</p>
            </div>

            <div className="w-full bg-white/10 rounded-2xl p-1 border border-white/20 backdrop-blur-xl overflow-hidden relative mb-3">
              <motion.div
                className="h-2.5 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between w-full text-xs font-semibold px-1">
              <span className="font-body text-white/80 truncate max-w-[220px]">{statusMsg}</span>
              <span className="font-mono text-purple-300 font-extrabold text-xs">{progress}%</span>
            </div>
          </motion.div>
        )}

        <div className="relative z-10 text-[10px] font-mono text-white/40 uppercase tracking-widest text-center">
          <span>Click anywhere to skip</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
