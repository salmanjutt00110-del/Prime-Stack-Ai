import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/Logo";

export default function StartupIntro({ onComplete }) {
  const [visible, setVisible] = useState(true);

  const finish = () => {
    setVisible(false);
    if (onComplete) onComplete();
  };

  useEffect(() => {
    // Automatically finish and unmount in 1.4 seconds for a fast, clean intro
    const timer = setTimeout(() => {
      finish();
    }, 1400);

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
          scale: 1.02,
          filter: "blur(6px)",
          transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
        }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050508] text-white overflow-hidden select-none px-6 cursor-pointer"
        onClick={finish}
      >
        {/* Radial Ambient Backglow */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-radial from-violet-600/25 via-blue-600/10 to-transparent blur-[130px]" />
        </div>

        <div className="flex flex-col items-center text-center max-w-xl relative z-10">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-6"
          >
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-40 animate-pulse" />
            <div className="relative p-4 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-2xl shadow-2xl">
              <Logo size={76} animated={true} />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white leading-tight mb-3"
          >
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Prime Tools Hub
            </span>
          </motion.h1>

          {/* Introduction Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm sm:text-base text-white/80 font-body leading-relaxed max-w-md"
          >
            Pakistan's Premier Marketplace for Verified AI Accounts, Custom Web Development & High-ROAS Digital Agency Services.
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
