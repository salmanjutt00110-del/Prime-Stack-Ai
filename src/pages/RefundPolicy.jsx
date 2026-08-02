import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import { RefreshCw, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-[#00ff88] selection:text-black">
      <SEOHead
        title="Refund & Replacement Policy | Prime Tools Hub — 100% Warranty Support"
        description="Learn about Prime Tools Hub's clear Refund and Replacement Policy. Enjoy full duration replacement warranty and 100% money-back guarantee for invalid activations."
        canonical="https://primetoolshub.store/refund-policy"
      />

      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <RefreshCw size={14} />
            <span>Guaranteed Satisfaction</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Refund &amp; Replacement Policy
          </h1>
          <p className="mt-3 text-sm text-slate-400">
            Fair, Transparent &amp; Customer-First Protection
          </p>
        </div>

        {/* Policy Highlights Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="p-5 rounded-2xl bg-[#0c0d12] border border-white/10 text-center">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 size={20} />
            </div>
            <h3 className="font-bold text-white text-sm">Instant Replacement</h3>
            <p className="text-xs text-slate-400 mt-1">Free credential replacement within 2–4 hours if account fails.</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#0c0d12] border border-white/10 text-center">
            <div className="w-10 h-10 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center mx-auto mb-3">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-bold text-white text-sm">Full Warranty Period</h3>
            <p className="text-xs text-slate-400 mt-1">Covered for the entire duration specified on your product card.</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#0c0d12] border border-white/10 text-center">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto mb-3">
              <RefreshCw size={20} />
            </div>
            <h3 className="font-bold text-white text-sm">Money-Back Guarantee</h3>
            <p className="text-xs text-slate-400 mt-1">100% refund if we fail to deliver working access within 24 hours.</p>
          </div>
        </div>

        {/* Policy Details */}
        <div className="space-y-10 text-slate-300 text-sm leading-relaxed bg-[#0c0d12] p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <CheckCircle2 size={20} className="text-[#00ff88]" />
              1. Full Duration Replacement Guarantee
            </h2>
            <p>
              At Prime Tools Hub, every product comes with a mandatory replacement warranty for its entire active period (e.g. 1 Month, 3 Months, 12 Months). If your account experiences login difficulties, plan downgrades, or access restrictions, message our support team on WhatsApp immediately for a quick replacement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <RefreshCw size={20} className="text-[#00ff88]" />
              2. 100% Refund Eligibility
            </h2>
            <p>You are eligible for a 100% full monetary refund under the following conditions:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>We are unable to deliver your ordered digital item or activation link within 24 hours of payment.</li>
              <li>A replacement credential cannot be provided within 24 hours of a reported valid issue.</li>
              <li>You were charged incorrectly or duplicated payment.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <AlertTriangle size={20} className="text-amber-400" />
              3. Non-Refundable Scenarios
            </h2>
            <p>Refunds or replacements will NOT be granted under the following circumstances:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Changing your mind after credentials have been successfully delivered and verified.</li>
              <li>Attempting to change account security settings (password/email) on shared team slots.</li>
              <li>Violating the official terms of service of third-party software providers.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck size={20} className="text-[#00ff88]" />
              4. How to Request a Replacement or Refund
            </h2>
            <p>
              Simply send a WhatsApp message to <strong className="text-emerald-400">+92-370-7020580</strong> containing:
            </p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Your Order ID or WhatsApp Order Chat reference.</li>
              <li>A description or screenshot of the issue.</li>
            </ol>
            <p className="mt-2">Our team will resolve the issue or process your refund to JazzCash / EasyPaisa / Bank Account within 24 hours.</p>
          </section>

        </div>
      </main>

      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
