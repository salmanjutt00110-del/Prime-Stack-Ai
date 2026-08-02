import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import { CheckCircle2, XCircle, Shield } from "lucide-react";

export default function AcceptableUse() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-[#00ff88] selection:text-black">
      <SEOHead
        title="Acceptable Use Policy | Prime Tools Hub"
        description="Guidelines on acceptable and prohibited uses of software subscriptions, team slots, and digital assets purchased from Prime Tools Hub."
        canonical="https://primetoolshub.store/acceptable-use"
      />
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Shield size={14} />
            <span>Usage Guidelines</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Acceptable Use Policy</h1>
          <p className="mt-3 text-sm text-slate-400">Rules &amp; Code of Conduct for Account Access</p>
        </div>

        <div className="space-y-8 text-slate-300 text-sm leading-relaxed bg-[#0c0d12] p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <CheckCircle2 size={20} className="text-emerald-400" />
              Allowed Activities
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-emerald-200/90">
              <li>Using subscriptions for personal freelancing, agency design work, content creation, or educational study.</li>
              <li>Logging in on the maximum permitted devices specified for your purchased plan tier.</li>
              <li>Reaching out to our WhatsApp support team for warranty assistance when credentials fail.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <XCircle size={20} className="text-red-400" />
              Prohibited Activities
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-red-200/90">
              <li>Attempting to modify account passwords, recovery phone numbers, or security settings on shared team slots.</li>
              <li>Reselling, sub-licensing, or sharing account credentials on public forums, groups, or social media.</li>
              <li>Using tools for automated web scraping, DDoS attacks, or generating illegal/abusive content.</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
