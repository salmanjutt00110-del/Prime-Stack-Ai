import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Breadcrumb from "@/components/Breadcrumb";
import { Sparkles, MessageCircle, ShieldCheck, Zap } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/products";
import {
  generateHowToSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema,
  DOMAIN,
} from "@/lib/seoSchema";

export default function HowItWorksPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Prime Tools Hub! I want to order digital tools.")}`;

  const breadcrumbItems = [{ name: "How It Works", url: "/how-it-works" }];
  const pageUrl = `${DOMAIN}/how-it-works`;

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      generateHowToSchema(),
      generateWebPageSchema({
        name: "How It Works — 4-Step Simple Order Guide",
        description: "Learn how to order ChatGPT Plus, Canva Pro, Gemini Pro & VPNs in 4 simple steps: Browse → Click WhatsApp → Pay via JazzCash/EasyPaisa → Get Instant Delivery.",
        url: pageUrl,
        breadcrumbItems,
      }),
      generateBreadcrumbSchema(breadcrumbItems),
    ],
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-[#00ff88] selection:text-black">
      <SEOHead
        title="How It Works — 4-Step Simple Order Guide"
        description="Learn how to order ChatGPT Plus, Canva Pro, Gemini Pro & VPNs in 4 simple steps: Browse → Click WhatsApp → Pay via JazzCash/EasyPaisa → Get Instant Delivery."
        canonicalUrl={pageUrl}
        schemaJson={schemaGraph}
      />

      <Navbar />

      <main id="main-content" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumb items={breadcrumbItems} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap size={14} />
            <span>Fast &amp; Simple Ordering</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How Prime Tools Hub Works
          </h1>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            Get official premium access to your favorite AI tools and digital subscriptions in under 15 minutes with zero hassle.
          </p>
        </div>

        {/* 4-Step Visual Grid Component */}
        <div className="mb-20">
          <HowItWorks />
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-6 rounded-2xl bg-[#0c0d12] border border-white/10 text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <Zap size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">⚡ 15-Minute SLA Delivery</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              95% of orders are delivered within 15 minutes of payment confirmation during operating hours.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c0d12] border border-white/10 text-center">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">🛡️ Full Duration Warranty</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              If credentials fail, our dedicated WhatsApp team replaces them immediately without hassle.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c0d12] border border-white/10 text-center">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center mx-auto mb-4">
              <Sparkles size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">🇵🇰 Local Payment Methods</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pay conveniently with EasyPaisa, JazzCash, or local Pakistani bank transfers without requiring a credit card.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-950/80 via-[#0c0d12] to-purple-950/80 border border-emerald-500/30 text-center relative overflow-hidden mb-20">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Ready to Upgrade Your Creative &amp; AI Workflow?
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Join 1,200+ freelancers, students, and agencies across Pakistan. Order your digital tool in seconds.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-extrabold text-sm shadow-xl shadow-[#25D366]/20 transition-all hover:scale-105"
          >
            <MessageCircle size={18} />
            <span>Order Now via WhatsApp</span>
          </a>
        </div>

        {/* Embedded FAQ */}
        <FAQ />
      </main>

      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
