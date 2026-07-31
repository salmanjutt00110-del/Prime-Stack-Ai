import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import { Sparkles, ShieldCheck, Cpu } from "lucide-react";

export default function StartupIntro({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing Secure Gateway...");

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

    // Smooth 1.2s progress counter with dynamic system logs
    const startTime = performance.now();
    const duration = 1200;

    const updateProgress = (now) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      // Dynamic premium status logs based on loading stage
      if (pct < 25) {
        setStatusText("Initializing Secure Gateway...");
      } else if (pct < 55) {
        setStatusText("Retrieving Live Catalogs...");
      } else if (pct < 80) {
        setStatusText("Decrypting AI Credentials...");
      } else if (pct < 100) {
        setStatusText("Optimizing Interface Layer...");
      } else {
        setStatusText("Ready!");
      }

      if (pct < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(finish, 200);
      }
    };

    const rafId = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(rafId);
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
            scale: 0.97,
            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-between bg-[#040408] text-white overflow-hidden select-none py-8 px-6 cursor-pointer will-change-transform font-sans"
          onClick={finish}
        >
          {/* Cyber-Grid Pattern Overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" 
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
          />

          {/* Futuristic Scanlines */}
          <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%]" />

          {/* Multiple High-End Ambient Glowing Orbs */}
          <div className="absolute top-1/4 left-1/4 w-[35vw] h-[35vw] max-w-[400px] rounded-full pointer-events-none z-0 bg-[radial-gradient(circle,rgba(99,102,241,0.18)_0%,transparent_70%)] animate-pulse" style={{ animationDuration: "5s" }} />
          <div className="absolute bottom-1/3 right-1/4 w-[30vw] h-[30vw] max-w-[350px] rounded-full pointer-events-none z-0 bg-[radial-gradient(circle,rgba(236,72,153,0.12)_0%,transparent_70%)] animate-pulse" style={{ animationDuration: "7s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[700px] rounded-full pointer-events-none z-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_0%,transparent_60%)]" />

          {/* Top Status Bar */}
          <div className="relative z-10 w-full max-w-5xl flex items-center justify-between text-[11px] font-mono border-b border-white/10 pb-4 pt-[env(safe-area-inset-top,0px)]">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00ff88] shadow-[0_0_8px_rgba(0,255,136,0.8)] animate-pulse" />
              <span className="text-white/60 font-black tracking-widest uppercase">
                SYSTEM STATE: ONLINE
              </span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                finish();
              }}
              className="px-4 py-1.5 rounded-full text-[10px] font-black tracking-wider uppercase bg-white/5 hover:bg-white/10 text-white/90 border border-white/15 hover:border-white/30 transition-all active:scale-95 cursor-pointer backdrop-blur-md"
            >
              Skip Init
            </button>
          </div>

          {/* Center Showcase */}
          <div className="flex flex-col items-center text-center max-w-lg relative z-10 my-auto">
            {/* Elegant Shimmering Logo Card */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-8 group"
            >
              {/* Outer Logo Ring Glow */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 opacity-30 blur-md group-hover:opacity-75 transition duration-500 animate-pulse" />
              
              <div className="relative p-6 sm:p-7 rounded-[24px] bg-[#0d1117]/80 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl flex items-center justify-center">
                <Logo size={80} animated={true} />
              </div>
            </motion.div>

            {/* Brand Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest bg-gradient-to-r from-violet-500/10 to-indigo-500/10 border border-violet-500/30 text-violet-300 shadow-sm">
                <Sparkles size={11} className="text-yellow-400 animate-spin-slow" />
                <span>PREMIER AI MARKETPLACE</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-white leading-none">
                PRIME TOOLS{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(129,140,248,0.2)]">
                  HUB
                </span>
              </h1>
              
              <p className="text-xs sm:text-sm text-slate-400 font-body max-w-sm mx-auto leading-relaxed">
                Premium AI Subscriptions, Software Licenses & Creator Tools.
              </p>
            </motion.div>

            {/* Premium Progress Bar Wrapper */}
            <div className="w-72 sm:w-80 mt-9">
              {/* Sleek track */}
              <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden p-[1px] border border-white/10 relative">
                {/* Glowing Lead Head */}
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 transition-all duration-75 relative"
                  style={{ width: `${progress}%` }}
                >
                  {/* Neon end point indicator */}
                  {progress > 0 && (
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#fff,0_0_20px_#06b6d4] animate-ping" />
                  )}
                </div>
              </div>

              {/* Status and Percentage Counters */}
              <div className="mt-3 flex items-center justify-between font-mono text-[11px]">
                <div className="flex items-center gap-2 text-slate-400">
                  <Cpu size={12} className="text-cyan-400 animate-pulse" />
                  <span className="tracking-wide">{statusText}</span>
                </div>
                <span className="text-[#00ff88] font-black drop-shadow-[0_0_8px_rgba(0,255,136,0.3)]">
                  {progress}%
                </span>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="relative z-10 flex flex-col items-center gap-1">
            <div className="text-[10px] font-mono text-white/40 uppercase tracking-[0.25em] text-center pb-[env(safe-area-inset-bottom,0px)]">
              Instant Activation • Full Support Warranty
            </div>
            <div className="flex items-center gap-1.5 text-[9px] font-mono text-white/20 uppercase tracking-widest mt-1">
              <ShieldCheck size={11} className="text-white/30" />
              <span>SSL 256-bit Encrypted Connection</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
