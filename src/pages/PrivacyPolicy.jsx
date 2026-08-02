import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Lock, CheckCircle2, ArrowLeft, Mail } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 flex flex-col font-body selection:bg-emerald-500/30 selection:text-emerald-300">
      <SEOHead
        title="Privacy Policy & Data Security | Prime Tools Hub"
        description="Official Privacy Policy for Prime Tools Hub. Learn how we protect customer privacy, store data securely, and maintain 100% data confidentiality."
        canonicalUrl="https://primetoolshub.store/privacy-policy"
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
              <Lock size={24} />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Privacy & Security
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
            Privacy Policy & Data Rights
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Last Updated: August 2026 • GDPR & Pakistan Personal Data Protection Compliant
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-sm leading-relaxed text-slate-300">
          
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <ShieldCheck size={18} className="text-emerald-400" />
              1. Our Privacy Commitment
            </h2>
            <p>
              At Prime Tools Hub (<strong className="text-white">primetoolshub.store</strong>), we take customer privacy with absolute seriousness. We never sell, rent, trade, or leak customer personal information to third parties under any circumstances.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-400" />
              2. Data We Collect
            </h2>
            <p>
              To fulfill order activations and provide replacement warranty support, we only collect essential operational details:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-400 pl-2">
              <li><strong className="text-slate-200">Contact Details:</strong> Your WhatsApp phone number or Email address for sending login credentials and order receipts.</li>
              <li><strong className="text-slate-200">Transaction References:</strong> Payment confirmation transaction ID or screenshot (JazzCash, EasyPaisa, Bank Transfer) to verify payments.</li>
              <li><strong className="text-slate-200">Account Credentials:</strong> If activating a product on your personal Gmail (e.g. Gemini Pro), only your email address is used for sending the official redeem invite link.</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-400" />
              3. Data Storage & Security Controls
            </h2>
            <p>
              All customer communication and order records are encrypted end-to-end. Our system employs SSL 256-bit encryption for all web sessions, preventing unauthorized access or data interception.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-400" />
              4. Cookies & Local Analytics
            </h2>
            <p>
              Our website uses minimal essential browser storage (Cookies & LocalStorage) solely to remember your preferences (such as selected Currency PKR/USD, Theme mode, and Language settings). No intrusive tracking scripts or third-party ad networks are active.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-400" />
              5. Right to Erasure (Data Deletion Request)
            </h2>
            <p>
              Under our privacy policy, any customer has the right to request total deletion of their contact history and order records after their warranty duration completes.
            </p>
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs sm:text-sm text-emerald-300 flex items-center gap-3">
              <Mail size={18} className="shrink-0 text-emerald-400" />
              <span>To request data deletion, send an email to <strong className="text-white underline">privacy@primetoolshub.store</strong> with your phone number or Order ID. Requests are processed within 48 hours.</span>
            </div>
          </section>

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center border-t border-white/10 pt-8">
          <Link
            to="/terms-of-service"
            className="text-xs text-emerald-400 hover:underline font-semibold"
          >
            Read our Terms of Service &rarr;
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
