import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";
import { ShieldCheck, Zap, Globe, Sparkles, ArrowRight } from "lucide-react";

export default function StartupIntro({ onComplete }) {
  const [visible, setVisible] = useState(true);

  const finish = () => {
    setVisible(false);
    if (onComplete) onComplete();
  };

  useEffect(() => {
    // Automatically finish and unmount in 2.2 seconds for a professional yet prompt presentation
    const timer = setTimeout(() => {
      finish();
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="startup-welcome-overlay"
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 1.03,
          filter: "blur(8px)",
          transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
        }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#030307] text-white overflow-hidden select-none py-10 px-6 cursor-pointer"
        onClick={finish}
      >
        {/* Dynamic Background Glowing Orbs */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-radial from-violet-600/30 via-indigo-600/15 to-transparent blur-[140px] animate-pulse" />
          <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-pink-500/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] bg-blue-500/15 rounded-full blur-[100px]" />
        </div>

        {/* Top bar with system status & skip button */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 w-full max-w-4xl flex items-center justify-between text-xs font-semibold border-b border-white/10 pb-3"
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 font-extrabold uppercase tracking-wider text-[11px]">Official Portal Live</span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              finish();
            }}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer shadow-lg active:scale-95"
          >
            <span>Enter Marketplace</span>
            <ArrowRight size={14} />
          </button>
        </motion.div>

        {/* Center Main Intro Card */}
        <div className="flex flex-col items-center text-center max-w-2xl relative z-10 my-auto">
          {/* Logo Showcase with Glowing Aura */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-6"
          >
            <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-60 animate-pulse" />
            <div className="relative p-5 rounded-3xl bg-white/10 border border-white/25 backdrop-blur-2xl shadow-[0_0_50px_rgba(139,92,246,0.35)]">
              <Logo size={90} animated={true} />
            </div>
          </motion.div>

          {/* Subtitle Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-pink-500/15 border border-purple-500/30 text-purple-300 text-xs font-black uppercase tracking-wider mb-4 shadow-md"
          >
            <Sparkles size={14} className="text-yellow-400 animate-spin" />
            <span>PAKISTAN'S #1 VERIFIED AI & DIGITAL AGENCY MARKETPLACE</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight mb-4"
          >
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent drop-shadow-sm">
              Prime Tools Hub
            </span>
          </motion.h1>

          {/* Rich Introduction Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xs sm:text-base text-white/85 font-body leading-relaxed max-w-xl mb-6"
          >
            Your trusted destination for instant-activation <strong className="text-white font-semibold">ChatGPT Plus</strong>, <strong className="text-white font-semibold">Canva Pro Edu</strong>, <strong className="text-white font-semibold">Google Gemini Advanced</strong>, <strong className="text-white font-semibold">CapCut Pro</strong>, <strong className="text-white font-semibold">TikTok Organic Growth</strong> & <strong className="text-white font-semibold">Custom Web Development & Meta Ads Services</strong>.
          </motion.p>

          {/* Feature Highlights Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-2.5 text-xs font-bold"
          >
            <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-emerald-300 flex items-center gap-2 shadow-sm backdrop-blur-md">
              <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
              <span>100% Genuine Access & Warranty</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-blue-300 flex items-center gap-2 shadow-sm backdrop-blur-md">
              <Zap size={16} className="text-blue-400 shrink-0" />
              <span>Instant WhatsApp Delivery</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-purple-300 flex items-center gap-2 shadow-sm backdrop-blur-md">
              <Globe size={16} className="text-purple-400 shrink-0" />
              <span>Custom Web Dev & Meta Ads</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative z-10 text-[11px] font-mono text-white/50 uppercase tracking-widest text-center"
        >
          <span>Tap anywhere to launch main site</span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
