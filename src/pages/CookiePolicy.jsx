import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import { Cookie, ShieldCheck } from "lucide-react";

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-[#00ff88] selection:text-black">
      <SEOHead
        title="Cookie Policy & Site Storage Info â€” Prime Tools Hub"
        description="Learn how Prime Tools Hub uses essential cookies and local storage to enhance site functionality, shopping cart performance, and session security."
        canonicalUrl="https://primetoolshub.store/cookie-policy"
      />
      <Navbar />
      <main id="main-content" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Cookie size={14} />
            <span>Web Tracking</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Cookie Policy</h1>
          <p className="mt-3 text-sm text-slate-400">Essential Browser Storage &amp; Cookies</p>
        </div>
        <div className="space-y-8 text-slate-300 text-sm leading-relaxed bg-[#0c0d12] p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck size={20} className="text-[#00ff88]" />
              1. What Are Cookies &amp; Local Storage?
            </h2>
            <p>
              Cookies and browser local storage are small text fragments saved on your device to remember user preferences, active cart items, dark mode toggles, and currency choices.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Cookie size={20} className="text-[#00ff88]" />
              2. Cookies We Use
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-white">Essential Cookies:</strong> Required for site navigation, security token validation, and currency preference.</li>
              <li><strong className="text-white">Analytics Cookies:</strong> Anonymized Google Analytics tags to measure site visitor counts and page loading speeds.</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
