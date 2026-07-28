import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import { Sparkles, ShieldCheck } from "lucide-react";

export default function StartupIntro({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  const finish = () => {
    setVisible(false);
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
    if (onComplete) onComplete();
  };

  useEffect(() => {
    if (!visible) return;

    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    // Smooth & fast progress counter (1 second total)
    const startTime = performance.now();
    const duration = 1000;

    const updateProgress = (now) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(finish, 250);
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
            scale: 0.98,
            transition: { duration: 0.35, ease: "easeOut" },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#040407] text-white overflow-hidden select-none py-8 px-5 cursor-pointer will-change-transform"
          onClick={finish}
        >
          {/* Subtle Ambient Radial Glow (Hardware Accelerated) */}
          <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_45%,rgba(99,102,241,0.14),transparent_65%)]" />

          {/* Top Status Bar */}
          <div className="relative z-10 w-full max-w-4xl flex items-center justify-between text-xs font-mono border-b border-white/10 pb-4 pt-[env(safe-area-inset-top,0px)]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/60 font-semibold text-[11px] tracking-wider uppercase">
                Prime Tools Hub • Online
              </span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                finish();
              }}
              className="px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 hover:bg-white/20 text-white/90 border border-white/15 transition-all active:scale-95 cursor-pointer"
            >
              Skip
            </button>
          </div>

          {/* Center Showcase */}
          <div className="flex flex-col items-center text-center max-w-md relative z-10 my-auto">
            {/* Logo Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative mb-6"
            >
              <div className="p-6 sm:p-7 rounded-3xl bg-white/5 border border-white/15 shadow-[0_12px_40px_rgba(139,92,246,0.35)] backdrop-blur-xl">
                <Logo size={72} animated={false} />
              </div>
            </motion.div>

            {/* Brand Title */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-violet-500/15 border border-violet-500/30 text-violet-300 mb-3">
                <Sparkles size={11} className="text-yellow-400" />
                <span>PREMIER AI MARKETPLACE</span>
              </div>

              <h1 className="font-display font-black text-3xl sm:text-4xl tracking-tight text-white leading-tight">
                PRIME TOOLS{" "}
                <span className="ps-grad-text bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                  HUB
                </span>
              </h1>
              <p className="text-xs sm:text-sm text-white/70 font-body mt-2">
                100% Genuine Subscriptions & Creator Tools
              </p>
            </motion.div>

            {/* Smooth Loading Bar */}
            <div className="w-64 sm:w-72 bg-white/10 rounded-full h-2 mt-7 overflow-hidden p-0.5 border border-white/15">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-2.5 flex items-center gap-2 font-mono text-[11px] text-white/50">
              <ShieldCheck size={13} className="text-emerald-400" />
              <span>Verified & Secured</span>
              <span>•</span>
              <span className="text-white/80 font-bold">{progress}%</span>
            </div>
          </div>

          {/* Footer note */}
          <div className="relative z-10 text-[11px] font-mono text-white/40 uppercase tracking-widest text-center pb-[env(safe-area-inset-bottom,0px)]">
            Instant Delivery • 24/7 Support
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
