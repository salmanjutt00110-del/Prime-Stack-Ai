import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ShieldAlert, CheckCircle2, ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Disclaimer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 flex flex-col font-body selection:bg-emerald-500/30 selection:text-emerald-300">
      <SEOHead
        title="Reseller Compliance Disclaimer & IP Notice | Prime Tools Hub"
        description="Official Independent Reseller Compliance Disclaimer for Prime Tools Hub. Read our transparency statement, trademark notice, and software service disclosures."
        canonicalUrl="https://primetoolshub.store/disclaimer"
      />
      <Navbar />

      <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="mb-8 border-b border-white/10 pb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors mb-4"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <span className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <ShieldAlert size={24} />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              Legal Disclosure
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight">
            Reseller Compliance & Disclaimer Statement
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Independent Reseller Transparency • Full Operational Disclosure
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm leading-relaxed text-slate-300">
          
          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-400" />
              1. Reseller Disclosure Statement
            </h2>
            <p>
              Prime Tools Hub (<strong className="text-white">primetoolshub.store</strong>) operates as an independent reseller platform facilitating subscription access and digital service setup for users worldwide. We explicitly declare that we are <strong className="text-amber-300">not an official representative, direct developer, or corporate affiliate</strong> of OpenAI LLC, Google LLC, Canva Pty Ltd, CapCut, Bytedance, Nord Security, or Surfshark Ltd.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-400" />
              2. Intellectual Property & Trademarks
            </h2>
            <p>
              All product names, brand titles, logos, designs, and registered trademarks featured or referenced across primetoolshub.store remain the exclusive property of their respective trademark holders. Their inclusion on our site is solely for identification and informational purposes.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-display font-bold text-white flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-400" />
              3. Service Availability & Upstream Policies
            </h2>
            <p>
              While Prime Tools Hub guarantees 100% active warranty replacement during your plan duration, third-party software tools are subject to the policies, server status, and features decided by their original software providers. We maintain no control over third-party server maintenance or global feature updates.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
