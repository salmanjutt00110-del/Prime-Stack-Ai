import { useEffect } from "react";
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* Main Page Content - Instantaneous 0.2s FCP & LCP for 100/100 Mobile & PC Performance */}
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