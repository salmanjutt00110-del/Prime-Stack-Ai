import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import { Search, CheckCircle2, MessageCircle, Package } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/products";

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!orderId.trim()) return;
    setSearched(true);
  };

  const whatsappSupportUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Prime Tools Hub! I want to check the status of my Order: ${orderId}`
  )}`;

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-[#00ff88] selection:text-black">
      <SEOHead
        title="Track Order Status | Prime Tools Hub"
        description="Check your digital subscription order status at Prime Tools Hub. Track delivery progress and message support instantly."
        canonical="https://primetoolshub.store/track-order"
      />

      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Package size={14} />
            <span>Order Lookup</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Track Your Order
          </h1>
          <p className="mt-3 text-sm text-slate-400">
            Enter your WhatsApp order number or transaction reference below to verify order activation status.
          </p>
        </div>

        {/* Input Form */}
        <div className="max-w-lg mx-auto bg-[#0c0d12] p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl mb-12">
          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Order ID or WhatsApp Phone Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. PRIME-8842 or +923001234567"
                  value={orderId}
                  onChange={(e) => {
                    setOrderId(e.target.value);
                    setSearched(false);
                  }}
                  className="w-full pl-4 pr-10 py-3.5 rounded-xl bg-[#14161f] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00ff88]"
                />
                <Search size={18} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#00ff88] hover:bg-[#00e077] text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#00ff88]/20"
            >
              Check Status
            </button>
          </form>

          {searched && (
            <div className="mt-8 pt-6 border-t border-white/10 space-y-4 text-center">
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center justify-center gap-2">
                <CheckCircle2 size={16} />
                <span>Order Status: Processing / Ready for Activation</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Orders are fulfilled directly on WhatsApp within 15 minutes of payment verification.
              </p>
              <a
                href={whatsappSupportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-extrabold text-xs uppercase tracking-wider transition-all"
              >
                <MessageCircle size={16} />
                <span>Chat with Agent on WhatsApp</span>
              </a>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
