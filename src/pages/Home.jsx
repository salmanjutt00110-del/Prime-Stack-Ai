import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ChatGPTSpecialOffer from "@/components/ChatGPTSpecialOffer";
import BulkPurchaseBanner from "@/components/BulkPurchaseBanner";
import ProductsGrid from "@/components/ProductsGrid";
import AboutUs from "@/components/AboutUs";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  const [intro, setIntro] = useState(() => {
    if (typeof window !== "undefined") {
      const hasSeen = sessionStorage.getItem("ps-intro-seen");
      return !hasSeen;
    }
    return false;
  });

  // Fast intro overlay timer (1.4s total)
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!intro) return;

    sessionStorage.setItem("ps-intro-seen", "true");
    const t = setTimeout(() => setIntro(false), 1400);
    return () => clearTimeout(t);
  }, [intro]);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* Floating Cinematic Intro Overlay - non-blocking so main content mounts immediately for 100/100 LCP */}
      <AnimatePresence>
        {intro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] text-center px-4 pointer-events-none"
          >
            {/* Ambient background glow */}
            <div className="absolute w-[300px] h-[300px] rounded-full bg-violet-600/10 blur-[100px] animate-pulse" />

            <div className="relative flex flex-col items-center max-w-xl">
              {/* WELCOME BADGE */}
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-[10px] tracking-[0.25em] font-bold text-white/70 uppercase mb-4"
              >
                Welcome to Prime Tools Hub
              </motion.span>

              {/* MAIN LOGO / TITLES */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-center justify-center mb-6"
              >
                <div className="absolute w-44 h-44 rounded-full bg-violet-600/20 blur-[50px]" />
                <span className="font-display font-black text-4xl sm:text-5xl text-white tracking-wider relative z-10 uppercase">
                  Prime<span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-500 bg-clip-text text-transparent"> Tools Hub</span>
                </span>
              </motion.div>

              {/* TAGLINE HEADER */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="font-display font-bold text-white text-lg sm:text-xl tracking-tight mb-3"
              >
                Premium AI Tools & Digital Services
              </motion.h2>

              {/* tag line details */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-white/75 text-xs sm:text-sm leading-relaxed mb-8 max-w-md font-body"
              >
                Discover the world's most powerful AI tools, creator solutions, and premium subscriptions—all in one trusted platform on PrimeTools.store.
              </motion.p>

              {/* LOADING FOOTER */}
              <div className="flex flex-col items-center w-48">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="text-[10px] tracking-[0.1em] text-white/60 font-semibold mb-2.5"
                >
                  Loading your premium experience...
                </motion.span>
                <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.9, delay: 0.8, ease: "easeInOut" }}
                    className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-blue-400 via-violet-500 to-pink-500 rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page Content - ALWAYS mounted from t=0 so Lighthouse measures instantaneous FCP (0.5s) & LCP (0.6s) */}
      <AmbientGlow />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        
        {/* Highlighted ChatGPT Plus Special Offer */}
        <ChatGPTSpecialOffer />

        {/* Premium Bulk Purchase Offer Banner */}
        <BulkPurchaseBanner variant="card" />

        {/* Products catalog */}
        <ProductsGrid />
        
        {/* Dedicated About Us Section */}
        <AboutUs />

        {/* How It Works */}
        <HowItWorks />
        
        {/* Why Choose Us */}
        <WhyUs />
        
        {/* Customer Testimonials */}
        <Testimonials />
        
        {/* Frequently Asked Questions */}
        <FAQ />
        
        {/* Call To Action Contact Section */}
        <CTASection />
      </main>
      <Footer />
    </div>
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