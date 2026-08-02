import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ProductShowcaseRibbon from "@/components/ProductShowcaseRibbon";
import ProductsGrid from "@/components/ProductsGrid";
import ComparisonTable from "@/components/ComparisonTable";
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
import WhatsAppFloating from "@/components/WhatsAppFloating";
import AIChatBot from "@/components/AIChatBot";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTopButton from "@/components/BackToTopButton";
import SectionDivider from "@/components/SectionDivider";
import SEOHead from "@/components/SEOHead";
import SeoContentSection from "@/components/SeoContentSection";
import { ALL_PRODUCTS } from "@/data/products";
import { generateHomepageGraph, DOMAIN } from "@/lib/seoSchema";
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

  const homepageSchema = useMemo(() => generateHomepageGraph(ALL_PRODUCTS), []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <SEOHead
        title="Buy ChatGPT Plus &amp; AI Subscriptions â€” Prime Tools Hub"
        description="Pakistan's trusted marketplace for ChatGPT Plus, Canva Pro, Veo 3, CapCut, Gemini Pro &amp; more. Fast delivery via JazzCash/EasyPaisa."
        canonicalUrl={`${DOMAIN}/`}
        schemaJson={homepageSchema}
      />
      <ScrollProgress />
      <AmbientGlow />
      
      {/* Top Sticky Announcement Bar */}
      <AnnouncementBar />

      {/* Navigation Bar */}
      <Navbar />

      <main id="main-content">
        {/* Hero Section */}
        <Hero />

        {/* Trust & Credibility Section */}
        <TrustSection />

        {/* Product Showcase Ribbon */}
        <ProductShowcaseRibbon />

        <SectionDivider color="rgba(59, 130, 246, 0.4)" />

        {/* Products Grid Catalog */}
        <ProductsGrid />

        <SectionDivider color="rgba(16, 163, 127, 0.4)" />

        {/* Why Buy From Us Comparison Table */}
        <ComparisonTable />

        <SectionDivider color="rgba(125, 42, 232, 0.4)" />

        {/* Tiered Free Gifts & Reseller Deals */}
        <TieredRewardsBanner />

        <SectionDivider color="rgba(245, 158, 11, 0.4)" />

        {/* ChatGPT Special Offer */}
        <ChatGPTSpecialOffer />

        <SectionDivider color="rgba(99, 102, 241, 0.4)" />

        {/* Bulk Offer */}
        <div id="bulk-offers" className="scroll-mt-24">
          <BulkPurchaseBanner variant="card" />
        </div>

        <SectionDivider color="rgba(6, 182, 212, 0.4)" />

        {/* Digital Agency Services */}
        <DigitalServicesSection />

        <SectionDivider color="rgba(236, 72, 153, 0.4)" />

        {/* About & How It Works */}
        <SeoContentSection />
        <AboutUs />
        <HowItWorks />
        <WhyUs />

        <SectionDivider color="rgba(236, 72, 153, 0.4)" />

        {/* Customer Reviews */}
        <Testimonials />

        <SectionDivider color="rgba(139, 92, 246, 0.4)" />

        {/* FAQ Accordion */}
        <FAQ />

        <SectionDivider color="rgba(16, 185, 129, 0.4)" />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Conversion Floating & Modal Tools */}
      <WhatsAppFloating />
      <AIChatBot />
      <ExitIntentPopup />
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