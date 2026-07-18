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
  const [intro, setIntro] = useState(true);

  // Cinematic page intro loader timer
  useEffect(() => {
    const t = setTimeout(() => setIntro(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Premium Cinematic Intro Screen */}
      <AnimatePresence>
        {intro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
          >
            {/* Glowing Logo */}
            <motion.div
              initial={{ scale: 0.8, filter: "blur(10px)", opacity: 0 }}
              animate={{ scale: [0.85, 1.03, 1], filter: "blur(0px)", opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center"
            >
              <div className="absolute w-44 h-44 rounded-full bg-violet-600/20 blur-[50px] animate-pulse" />
              <span className="font-display font-black text-4xl text-white tracking-wider relative z-10 uppercase">
                Prime<span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-500 bg-clip-text text-transparent">Stack</span>
              </span>
            </motion.div>
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
        el.style.left = e.clientX + "px";
        el.style.top = e.clientY + "px";
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
      className="pointer-events-none fixed z-0 rounded-full blur-[160px] opacity-25 transition-opacity duration-500"
      style={{
        width: 400,
        height: 400,
        background:
          "radial-gradient(circle, rgba(139,92,246,0.35), transparent 70%)",
        transform: "translate(-50%, -50%)",
        left: "50%",
        top: "50%",
      }}
      aria-hidden="true"
    />
  );
}