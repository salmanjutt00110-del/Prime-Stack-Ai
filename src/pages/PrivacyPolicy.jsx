import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import { Lock, Shield, Eye, Database } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-[#00ff88] selection:text-black">
      <SEOHead
        title="Privacy Policy | Prime Tools Hub — Customer Data Protection"
        description="Read Prime Tools Hub's Privacy Policy. We respect your privacy — learn how customer data, WhatsApp contacts, and transactions are securely handled."
        canonical="https://primetoolshub.store/privacy-policy"
      />

      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Lock size={14} />
            <span>Data Security</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-slate-400">
            Last Updated: August 2026 • Your Privacy Matters
          </p>
        </div>

        {/* Policy Container */}
        <div className="space-y-10 text-slate-300 text-sm leading-relaxed bg-[#0c0d12] p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Eye size={20} className="text-[#00ff88]" />
              1. Information We Collect
            </h2>
            <p>
              When you interact with Prime Tools Hub (primetoolshub.store), we collect minimal required information to process your order and provide warranty support:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-white">Contact Details:</strong> Your WhatsApp phone number and email address (if provided for direct account invite/redeem).</li>
              <li><strong className="text-white">Transaction Data:</strong> Payment confirmation reference numbers or screenshots sent via WhatsApp for order validation.</li>
              <li><strong className="text-white">Technical Logs:</strong> Basic browser analytics, IP address, and cookie identifiers for performance monitoring.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Database size={20} className="text-[#00ff88]" />
              2. How We Use Your Information
            </h2>
            <p>We strictly utilize your data for the following legitimate business purposes:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fulfilling your digital tool orders and delivering activation links/credentials.</li>
              <li>Providing replacement support and active warranty management.</li>
              <li>Sending optional renewal reminders 7 days prior to subscription expiration.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Shield size={20} className="text-[#00ff88]" />
              3. Data Sharing &amp; Third-Party Protection
            </h2>
            <p>
              We <strong className="text-white">NEVER sell, rent, or trade</strong> your personal information to marketing agencies or third parties. Information is only accessed by authorized customer support personnel strictly for order delivery.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Lock size={20} className="text-[#00ff88]" />
              4. Data Retention &amp; Deletion Rights
            </h2>
            <p>
              Order records are retained for the duration of your active subscription warranty plus 90 days. You have the right to request full deletion of your contact records at any time by messaging privacy@primetoolshub.store or contacting our WhatsApp support.
            </p>
          </section>

          <section className="pt-6 border-t border-white/10 text-xs text-slate-400">
            <p>If you have privacy concerns or questions regarding data protection, reach out via WhatsApp at +92-370-7020580.</p>
          </section>

        </div>
      </main>

      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
