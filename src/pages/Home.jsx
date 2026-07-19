import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ProductsGrid from "@/components/ProductsGrid";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  const [intro, setIntro] = useState(() => {
    // Only show the intro loader once per session
    const hasSeen = sessionStorage.getItem("ps-intro-seen");
    return !hasSeen;
  });

  // Cinematic page intro loader timer
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!intro) return;

    sessionStorage.setItem("ps-intro-seen", "true");
    const t = setTimeout(() => setIntro(false), 2800);
    return () => clearTimeout(t);
  }, [intro]);

  return (
    <>
      {/* Premium Cinematic Intro Screen */}
      <AnimatePresence>
        {intro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] text-center px-4"
          >
            {/* Ambient background glow */}
            <div className="absolute w-[300px] h-[300px] rounded-full bg-violet-600/10 blur-[100px] animate-pulse" />

            <div className="relative flex flex-col items-center max-w-xl">
              {/* WELCOME BADGE */}
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[10px] tracking-[0.25em] font-bold text-white/40 uppercase mb-4"
              >
                Welcome to PrimeStack AI
              </motion.span>

              {/* MAIN LOGO / TITLES */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0, filter: "blur(8px)" }}
                animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-center justify-center mb-6"
              >
                <div className="absolute w-44 h-44 rounded-full bg-violet-600/20 blur-[50px]" />
                <span className="font-display font-black text-4xl sm:text-5xl text-white tracking-wider relative z-10 uppercase">
                  Prime<span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-500 bg-clip-text text-transparent">Stack</span>
                </span>
              </motion.div>

              {/* TAGLINE HEADER */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="font-display font-bold text-white text-lg sm:text-xl tracking-tight mb-3"
              >
                Premium AI Tools & Digital Services
              </motion.h2>

              {/* tag line details */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="text-white/50 text-xs sm:text-sm leading-relaxed mb-10 max-w-md font-body"
              >
                Discover the world's most powerful AI tools, creator solutions, and premium subscriptions—all in one trusted platform.
              </motion.p>

              {/* LOADING FOOTER */}
              <div className="flex flex-col items-center w-48">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="text-[10px] tracking-[0.1em] text-white/30 font-semibold mb-2.5"
                >
                  Loading your premium experience...
                </motion.span>
                {/* sleek horizontal progress bar line */}
                <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden relative">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.3, delay: 1.3, ease: "easeInOut" }}
                    className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-blue-400 via-violet-500 to-pink-500 rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.97, filter: "blur(12px)" }}
        animate={!intro ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden"
      >
        {/* ambient cursor glow */}
        <AmbientGlow />
        <Navbar />
        <main>
          <Hero />
          <StatsBar />
          <ProductsGrid />
          <HowItWorks />
          <WhyUs />
          <Testimonials />
          <FAQ />
          <CTASection />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}

function AmbientGlow() {
  useEffect(() => {
    const el = document.getElementById("ps-ambient");
    if (!el) return;
    let raf;
    const move = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate3d(-50%, -50%, 0)`;
      });
    };
    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div
      id="ps-ambient"
      className="pointer-events-none fixed z-0 rounded-full blur-[160px] opacity-25 transition-opacity duration-500 hidden md:block"
      style={{
        width: 400,
        height: 400,
        background:
          "radial-gradient(circle, rgba(139,92,246,0.35), transparent 70%)",
        transform: "translate3d(50vw, 50vh, 0) translate3d(-50%, -50%, 0)",
        left: 0,
        top: 0,
      }}
      aria-hidden="true"
    />
  );
}