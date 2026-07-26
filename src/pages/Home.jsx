import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ProductsGrid from "@/components/ProductsGrid";
import TieredRewardsBanner from "@/components/TieredRewardsBanner";
import ChatGPTSpecialOffer from "@/components/ChatGPTSpecialOffer";
import BulkPurchaseBanner from "@/components/BulkPurchaseBanner";
import DigitalServicesSection from "@/components/DigitalServicesSection";
import AboutUs from "@/components/AboutUs";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <AmbientGlow />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />

        {/* Tiered Free Gifts & Reseller Deals Section */}
        <TieredRewardsBanner />

        <ChatGPTSpecialOffer />

        <BulkPurchaseBanner variant="card" />

        <ProductsGrid />

        {/* Unified Digital Agency Services: Website Creation, Video Editing, TikTok & Meta Ads */}
        <DigitalServicesSection />

        <AboutUs />
        <HowItWorks />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

function AmbientGlow() {
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 768) return;
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
        willChange: "transform",
      }}
      aria-hidden="true"
    />
  );
}