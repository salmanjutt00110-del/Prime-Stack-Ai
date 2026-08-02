import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import ComparisonTable from "@/components/ComparisonTable";
import { Scale, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/products";

export default function ComparePage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://primetoolshub.store/" },
      { "@type": "ListItem", "position": 2, "name": "Price Comparison", "item": "https://primetoolshub.store/compare" }
    ]
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-[#00ff88] selection:text-black">
      <SEOHead
        title="Compare AI Subscription Prices in PKR â€” Prime Tools Hub"
        description="Compare Prime Tools Hub localized prices in PKR with official USD credit card prices for ChatGPT Plus, Canva Pro, Gemini, CapCut & NordVPN. Save up to 80%."
        canonicalUrl="https://primetoolshub.store/compare"
        schemaJson={breadcrumbSchema}
      />

      <Navbar />

      <main id="main-content" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Scale size={14} />
            <span>Value Comparison</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Price vs Official Retail Price
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-400">
            See how much you save by getting localized digital tool subscriptions via EasyPaisa / JazzCash instead of paying international bank card taxes.
          </p>
        </div>

        {/* Embedded Comparison Table */}
        <div className="mb-16">
          <ComparisonTable />
        </div>

        {/* Why Save Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-[#0c0d12] border border-white/10 text-center">
            <h3 className="font-bold text-white text-base mb-2">ðŸ’³ No International Card Taxes</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pakistani banks charge 10%â€“16% withholding tax + bank fees on foreign USD subscriptions. We eliminate currency taxes completely.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[#0c0d12] border border-white/10 text-center">
            <h3 className="font-bold text-white text-base mb-2">âš¡ Easy Local Payment</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pay conveniently with EasyPaisa, JazzCash, or local Pakistani bank accounts without needing USD credit/debit cards.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[#0c0d12] border border-white/10 text-center">
            <h3 className="font-bold text-white text-base mb-2">ðŸ›¡ï¸ Full Duration Warranty</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every subscription is backed by our replacement guarantee, so you never lose access during your paid term.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-950/60 via-[#0c0d12] to-emerald-950/60 p-8 sm:p-12 rounded-3xl border border-white/10">
          <h2 className="text-2xl font-extrabold text-white mb-3">Start Saving on Your AI Tools Today</h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mb-6">
            Get instant activation via WhatsApp within 15 minutes.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all"
          >
            <MessageCircle size={16} />
            <span>Order via WhatsApp</span>
          </a>
        </div>
      </main>

      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
