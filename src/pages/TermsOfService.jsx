import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import { ShieldCheck, FileText, AlertCircle, HelpCircle } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-[#00ff88] selection:text-black">
      <SEOHead
        title="Terms of Service | Prime Tools Hub — Official Reseller Terms"
        description="Read the complete Terms of Service for Prime Tools Hub. Understand digital goods delivery, shared plan slot policies, 7-day replacement guarantee, and user obligations."
        canonical="https://primetoolshub.store/terms-of-service"
      />

      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck size={14} />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-slate-400">
            Last Updated: August 2026 • Effective Date: January 1, 2026
          </p>
        </div>

        {/* Reseller Disclosure Alert Box */}
        <div className="mb-10 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-sm leading-relaxed flex items-start gap-4">
          <AlertCircle size={22} className="text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-amber-300 mb-1">Independent Reseller Disclosure</h3>
            <p>
              Prime Tools Hub (primetoolshub.store) operates as an independent digital subscription reseller. We are not officially affiliated with, endorsed by, or partnered with OpenAI, Canva, Google, CapCut, or any software provider listed. All brand names and trademarks belong to their respective owners.
            </p>
          </div>
        </div>

        {/* Legal Content Sections */}
        <div className="space-y-10 text-slate-300 text-sm leading-relaxed bg-[#0c0d12] p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FileText size={20} className="text-[#00ff88]" />
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or purchasing digital goods from Prime Tools Hub ("we", "us", or "our"), you agree to be bound by these Terms of Service. If you do not agree to all terms, please refrain from using our service. These terms apply to all visitors, users, and buyers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck size={20} className="text-[#00ff88]" />
              2. Nature of Digital Services &amp; Account Types
            </h2>
            <p>
              Prime Tools Hub provides access to digital tools, software subscriptions, and education/team accounts. Depending on the product tier selected:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-white">Shared Plan Slots / Team Seats:</strong> Products marked as shared slots provide multi-user access under a managed team or family plan. Personal workspace items remain private, but plan credentials must be respected.</li>
              <li><strong className="text-white">Dedicated / Redeem Link Accounts:</strong> Products delivered via redeem link or direct Gmail activation belong to your personal account.</li>
              <li><strong className="text-white">Device &amp; Login Limits:</strong> Standard products are restricted to 1 device per user unless explicitly stated (e.g. CapCut Admin Team seats).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <HelpCircle size={20} className="text-[#00ff88]" />
              3. Orders, Payments &amp; Delivery SLA
            </h2>
            <p>
              Orders are placed via our website and fulfilled over WhatsApp or automated delivery links.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Payments are accepted via JazzCash, EasyPaisa, Bank Account Transfer, and supported digital payment options.</li>
              <li><strong className="text-white">Delivery SLA:</strong> 95% of orders are delivered within 15 to 30 minutes during standard support hours (9:00 AM – 11:00 PM PKT). Orders placed after hours will be processed first thing the following morning.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck size={20} className="text-[#00ff88]" />
              4. Replacement &amp; Warranty Policy
            </h2>
            <p>
              Every product comes with a dedicated replacement warranty covering the active subscription duration:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>If account credentials fail or upstream provider updates cause login issues within the warranty period, we will issue replacement credentials within 2–4 hours.</li>
              <li>Misuse, password changes without authorization (on shared slots), reselling credentials, or violating software provider policies will void the warranty immediately.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <AlertCircle size={20} className="text-[#00ff88]" />
              5. User Conduct &amp; Prohibited Uses
            </h2>
            <p>You agree NOT to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Share, sell, or publicly post account credentials provided to you.</li>
              <li>Attempt to change security settings, recovery emails, or passwords on shared team accounts.</li>
              <li>Use subscriptions for illegal, abusive, or spam activities.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FileText size={20} className="text-[#00ff88]" />
              6. Limitation of Liability &amp; Governing Law
            </h2>
            <p>
              To the maximum extent permitted by applicable Pakistani law, Prime Tools Hub shall not be liable for indirect, incidental, or consequential damages resulting from upstream provider service outages. These terms are governed by the laws of the Islamic Republic of Pakistan.
            </p>
          </section>

          <section className="pt-6 border-t border-white/10 text-xs text-slate-400">
            <p>For questions or formal dispute resolution, contact our team on WhatsApp at +92-370-7020580 or via support@primetoolshub.store.</p>
          </section>

        </div>
      </main>

      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
