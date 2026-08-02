import { useEffect } from "react";
import { Link } from "react-router-dom";
import { RefreshCw, CheckCircle2, AlertCircle, ArrowLeft, ShieldCheck } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RefundPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 flex flex-col font-body selection:bg-emerald-500/30 selection:text-emerald-300">
      <SEOHead
        title="Refund & Replacement Policy | Prime Tools Hub"
        description="Official Refund & Replacement Warranty Policy for Prime Tools Hub. Enjoy 100% money-back guarantee if non-working accounts cannot be resolved within 24 hours."
        canonicalUrl="https://primetoolshub.store/refund-policy"
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
              <RefreshCw size={24} />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Guarantee & SLA
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
            Refund & Replacement Guarantee Policy
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Clear, transparent, customer-first policy • Guaranteed resolution or 100% refund
          </p>
        </div>

        {/* Highlight Guarantee Box */}
        <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/60 via-emerald-900/40 to-teal-950/60 border border-emerald-500/30 text-slate-200">
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck size={28} className="text-emerald-400" />
            <h2 className="text-lg font-bold text-white">Our 100% Resolution Guarantee</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Every subscription purchased at Prime Tools Hub comes with a dedicated replacement warranty for the complete package duration. If your access is interrupted, we guarantee a replacement within <strong className="text-emerald-300">4 hours</strong>. If we cannot resolve your issue within <strong className="text-emerald-300">24 hours</strong>, we issue a <strong className="text-emerald-300">100% full or prorated refund</strong>.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-sm leading-relaxed text-slate-300">
          
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-400" />
              1. Replacement Process Step-by-Step
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-slate-300 pl-1">
              <li><strong className="text-white">Report Issue:</strong> Send a message on WhatsApp (+92-370-7020580) with your Order ID and screenshot of the error.</li>
              <li><strong className="text-white">Verification:</strong> Our team checks the login log within 15 minutes.</li>
              <li><strong className="text-white">Replacement Delivery:</strong> Fresh login credentials or redeem links are provided immediately.</li>
              <li><strong className="text-white">Refund Trigger:</strong> If stock is unavailable or access cannot be restored within 24 hours, money is refunded instantly.</li>
            </ol>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-400" />
              2. Eligible Refund Scenarios
            </h2>
            <ul className="list-disc list-inside space-y-2 text-slate-400 pl-2">
              <li>Account credentials fail to work upon delivery and cannot be fixed within 24 hours.</li>
              <li>Product is out of stock after payment confirmation.</li>
              <li>Duplicate or accidental overpayment by customer.</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <AlertCircle size={18} className="text-amber-400" />
              3. Non-Eligible Scenarios
            </h2>
            <ul className="list-disc list-inside space-y-2 text-slate-400 pl-2">
              <li>Sharing delivered account credentials with unauthorized secondary users exceeding package device limits.</li>
              <li>Attempting to change account email, password, or security settings without support guidance.</li>
              <li>Violations of official software vendor terms of service resulting in platform bans.</li>
              <li>Change of mind after successful activation and product usage.</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-400" />
              4. Payment Refund Methods & Speed
            </h2>
            <p>
              Refunds are dispatched back via your original payment channel:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-semibold">
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 text-center text-emerald-300">
                EasyPaisa (Instant - 1 Hour)
              </div>
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 text-center text-emerald-300">
                JazzCash (Instant - 1 Hour)
              </div>
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 text-center text-emerald-300">
                Bank Transfer (2 to 4 Hours)
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
