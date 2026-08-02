import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import { AlertCircle, FileText, Info } from "lucide-react";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-[#00ff88] selection:text-black">
      <SEOHead
        title="Reseller Disclaimer | Prime Tools Hub — Third-Party Brand Statement"
        description="Read the independent reseller disclaimer for Prime Tools Hub. We operate as an independent digital marketplace and do not claim official ownership of third-party software."
        canonical="https://primetoolshub.store/disclaimer"
      />

      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Info size={14} />
            <span>Transparency Statement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Reseller Disclaimer
          </h1>
          <p className="mt-3 text-sm text-slate-400">
            Clear Ownership &amp; Brand Identification
          </p>
        </div>

        <div className="space-y-8 text-slate-300 text-sm leading-relaxed bg-[#0c0d12] p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <AlertCircle size={20} className="text-amber-400" />
              1. Non-Affiliation Statement
            </h2>
            <p>
              Prime Tools Hub (primetoolshub.store) is an independent reseller of software subscriptions, team education slots, and digital utility accounts. We are <strong className="text-white">NOT officially affiliated, authorized, endorsed by, or in any way connected</strong> with OpenAI Inc., Canva Pty Ltd, Google LLC, CapCut / ByteDance Ltd., Nord Security, Surfshark B.V., Notion Labs Inc., Figma Inc., or any of their subsidiaries or affiliates.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FileText size={20} className="text-[#00ff88]" />
              2. Trademarks &amp; Intellectual Property
            </h2>
            <p>
              All product names, logos, brands, trademarks, and registered trademarks displayed on this site belong to their respective copyright holders. Use of these names, logos, and brands is strictly for identification and cataloging purposes and does not imply endorsement or ownership by Prime Tools Hub.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Info size={20} className="text-[#00ff88]" />
              3. Service Quality &amp; Upstream Availability
            </h2>
            <p>
              While Prime Tools Hub guarantees 100% replacement warranty support for the agreed subscription period, server outages, feature changes, or policy updates enacted by upstream software providers are outside our direct control. In such cases, equivalent replacements or pro-rata refunds will be provided as outlined in our Refund Policy.
            </p>
          </section>

        </div>
      </main>

      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
