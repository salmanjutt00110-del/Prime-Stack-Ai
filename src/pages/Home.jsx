import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductShowcaseRibbon from "@/components/ProductShowcaseRibbon";
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
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTopButton from "@/components/BackToTopButton";
import SectionDivider from "@/components/SectionDivider";
import { scrollToSection } from "@/lib/scroll";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const timer = setTimeout(() => {
        scrollToSection(location.hash);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  return (
    <div className="relative min-h-screen bg-[#02040a] text-white overflow-x-hidden">
      <ScrollProgress />
      <AmbientGlow />
      <Navbar />
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Product Showcase Horizontal Floating Ribbon right below Hero */}
        <ProductShowcaseRibbon />

        <SectionDivider color="rgba(59, 130, 246, 0.4)" />

        {/* Product Cards Catalog with Dynamic Brand Color Glow */}
        <ProductsGrid />

        <SectionDivider color="rgba(16, 163, 127, 0.4)" />

        {/* Tiered Free Gifts & Reseller Deals Section */}
        <TieredRewardsBanner />

        <SectionDivider color="rgba(125, 42, 232, 0.4)" />

        {/* ChatGPT Special Offer Section */}
        <ChatGPTSpecialOffer />

        <SectionDivider color="rgba(245, 158, 11, 0.4)" />

        {/* Bulk Offer Section */}
        <div id="bulk-offers" className="scroll-mt-24">
          <BulkPurchaseBanner variant="card" />
        </div>

        <SectionDivider color="rgba(99, 102, 241, 0.4)" />

        {/* Unified Digital Agency Services */}
        <DigitalServicesSection />

        <SectionDivider color="rgba(6, 182, 212, 0.4)" />

        {/* Agency Intro & How It Works */}
        <AboutUs />
        <HowItWorks />
        <WhyUs />

        <SectionDivider color="rgba(236, 72, 153, 0.4)" />

        {/* Luxury Reviews Section */}
        <Testimonials />

        <SectionDivider color="rgba(139, 92, 246, 0.4)" />

        {/* Apple Style FAQ Accordion */}
        <FAQ />

        <SectionDivider color="rgba(16, 185, 129, 0.4)" />

        {/* Premium Contact Form & Map Section */}
        <ContactSection />
      </main>
      <BackToTopButton />
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
        width: 450,
        height: 450,
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