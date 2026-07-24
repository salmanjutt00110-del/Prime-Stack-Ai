import { useEffect, lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ProductsGrid from "@/components/ProductsGrid";

const TieredRewardsBanner = lazy(() => import("@/components/TieredRewardsBanner"));
const ChatGPTSpecialOffer = lazy(() => import("@/components/ChatGPTSpecialOffer"));
const BulkPurchaseBanner = lazy(() => import("@/components/BulkPurchaseBanner"));
const MetaAdsSection = lazy(() => import("@/components/MetaAdsSection"));
const AboutUs = lazy(() => import("@/components/AboutUs"));
const HowItWorks = lazy(() => import("@/components/HowItWorks"));
const WhyUs = lazy(() => import("@/components/WhyUs"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));

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
        <Suspense fallback={null}>
          <TieredRewardsBanner />
        </Suspense>
        
        {/* Below-fold lazy sections — loaded after initial paint */}
        <Suspense fallback={null}>
          <ChatGPTSpecialOffer />
        </Suspense>

        <Suspense fallback={null}>
          <BulkPurchaseBanner variant="card" />
        </Suspense>

        <ProductsGrid />
        
        {/* Meta Ads & Advertising Services Section */}
        <Suspense fallback={null}>
          <MetaAdsSection />
        </Suspense>

        <Suspense fallback={null}>
          <AboutUs />
          <HowItWorks />
          <WhyUs />
          <Testimonials />
          <FAQ />
          <CTASection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
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