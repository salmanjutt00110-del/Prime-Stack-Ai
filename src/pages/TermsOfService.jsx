import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, FileText, CheckCircle2, AlertTriangle, HelpCircle, ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 flex flex-col font-body selection:bg-emerald-500/30 selection:text-emerald-300">
      <SEOHead
        title="Terms of Service & Usage Policy | Prime Tools Hub"
        description="Official Terms of Service for Prime Tools Hub. Read our digital goods terms, shared account guidelines, 7-day replacement policy, and reseller terms."
        canonicalUrl="https://primetoolshub.store/terms-of-service"
      />
      <Navbar />

      <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        {/* Header Breadcrumb & Title */}
        <div className="mb-8 border-b border-white/10 pb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors mb-4"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <span className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <FileText size={24} />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Legal Agreement
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
            Terms of Service & Terms of Use
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Last Updated: August 2026 • Applies to all purchases on PrimeToolsHub.store
          </p>
        </div>

        {/* Reseller Disclosure Alert Box */}
        <div className="mb-8 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm leading-relaxed flex gap-4 items-start">
          <AlertTriangle size={24} className="text-amber-400 shrink-0 mt-0.5" />
          <div>
            <h2 className="font-bold text-amber-300 text-sm mb-1 uppercase tracking-wide">
              Independent Reseller Compliance Disclosure
            </h2>
            <p>
              Prime Tools Hub (<strong className="text-white">primetoolshub.store</strong>) operates as an independent digital subscription reseller. We are not officially affiliated with, endorsed by, or sponsored by OpenAI, Canva, Google, CapCut, NordVPN, Surfshark, or any software provider listed. All product names, logos, and trademarks belong to their respective copyright holders.
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-sm leading-relaxed text-slate-300">
          
          {/* Section 1 */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-400" />
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or purchasing from Prime Tools Hub, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our website or purchase any digital subscriptions.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-400" />
              2. Nature of Digital Goods & Account Types
            </h2>
            <p>
              We provide access to legitimate digital accounts, redeem links, and multi-user slots for premium productivity and AI software.
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-400 pl-2">
              <li><strong className="text-slate-200">Official Semi-Private / Shared Slots:</strong> Access is provided on managed account slots. Your personal files and workspaces remain private, but login credentials must not be altered without authorization.</li>
              <li><strong className="text-slate-200">Personal Account Activations:</strong> Activations (e.g., Gemini Pro, Canva Edu) are linked directly to your personal email address via official redeem invites.</li>
              <li><strong className="text-slate-200">Device Limits:</strong> Each single-user purchase is strictly restricted to 1 active device at a time unless explicitly sold as a multi-seat admin team package.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-400" />
              3. Delivery & Setup SLA
            </h2>
            <p>
              Orders placed via WhatsApp or website checkout are processed promptly:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                <span className="text-emerald-400 font-bold block mb-1">Standard Delivery SLA</span>
                <span className="text-xs text-slate-400">15 to 30 minutes after payment verification during working hours (9 AM – 11 PM PKT).</span>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                <span className="text-emerald-400 font-bold block mb-1">Custom Growth Services</span>
                <span className="text-xs text-slate-400">Up to 24 hours for special accounts like TikTok Creator Growth Challenges.</span>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-400" />
              4. Replacement Warranty & Refund SLA
            </h2>
            <p>
              All products include a dedicated replacement warranty for the duration specified on the product page.
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-400 pl-2">
              <li>If an account credential fails during your valid warranty period, our team will provide replacement credentials within 2 to 4 hours.</li>
              <li>If we are unable to resolve or replace a non-working account within 24 hours, you are entitled to a full prorated refund via JazzCash, EasyPaisa, or Bank Transfer.</li>
              <li>Warranty is void if credentials are shared outside authorized device limits, or if account settings are modified without consent.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-400" />
              5. User Conduct & Acceptable Use
            </h2>
            <p>
              Users must refrain from taking unauthorized actions on delivered accounts:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-400 pl-2">
              <li>Do not attempt to change the account billing details, email, or master password unless instructed.</li>
              <li>Do not use AI tools for illegal, abusive, harmful, or automated spamming activity.</li>
              <li>Violations will result in immediate subscription termination without a refund.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <ShieldCheck size={18} className="text-emerald-400" />
              6. Dispute Resolution & Customer Rights
            </h2>
            <p>
              If you experience any issues with your order, please contact our support team immediately:
            </p>
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs sm:text-sm text-emerald-300">
              📱 <strong>WhatsApp Support:</strong> +92-370-7020580 (9 AM – 11 PM PKT)<br />
              📧 <strong>Email Support:</strong> support@primetoolshub.store
            </div>
          </section>

        </div>

        {/* Bottom Contact CTA */}
        <div className="mt-12 text-center border-t border-white/10 pt-8">
          <p className="text-xs text-slate-400 mb-3">Have questions about our Terms of Service?</p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-emerald-500 text-black font-bold text-xs hover:bg-emerald-400 transition-colors"
          >
            <HelpCircle size={15} /> Contact Support
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
