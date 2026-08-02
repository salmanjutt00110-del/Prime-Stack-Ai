import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, MessageCircle, CreditCard, Sparkles, ShieldCheck, Zap } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WHATSAPP_NUMBER } from "@/data/products";

const STEPS = [
  {
    step: "01",
    title: "Browse & Select Your Tool",
    desc: "Explore our catalog of official AI tools (ChatGPT Plus, Gemini Pro, Veo 3, CapCut Pro, Canva, NordVPN, etc.). Choose the package duration that fits your needs.",
    icon: Sparkles,
    badge: "Step 1"
  },
  {
    step: "02",
    title: "Click 'Buy on WhatsApp'",
    desc: "Click the Buy button on any product card. Your product name, package duration, and price will auto-fill directly into a WhatsApp message — just hit send!",
    icon: MessageCircle,
    badge: "Step 2"
  },
  {
    step: "03",
    title: "Fast Payment (EasyPaisa / JazzCash / Bank)",
    desc: "Our support agent will provide local payment details (JazzCash, EasyPaisa, or Bank Transfer). Send a screenshot of your transaction confirmation.",
    icon: CreditCard,
    badge: "Step 3"
  },
  {
    step: "04",
    title: "Instant Activation & Replacement Warranty",
    desc: "Receive your login credentials or redeem invite link within 15 to 30 minutes! Enjoy 100% full replacement warranty support throughout your plan duration.",
    icon: Zap,
    badge: "Step 4"
  }
];

export default function HowItWorksPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Prime%20Tools%20Hub,%20I%20want%20to%20place%20an%20order.`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 flex flex-col font-body selection:bg-emerald-500/30 selection:text-emerald-300">
      <SEOHead
        title="How It Works — Simple 4-Step Order Guide | Prime Tools Hub"
        description="Learn how to buy genuine ChatGPT Plus, Canva Pro, Gemini Pro & VPN subscriptions in Pakistan in 4 easy steps via JazzCash, EasyPaisa or Bank Transfer."
        canonicalUrl="https://primetoolshub.store/how-it-works"
      />
      <Navbar />

      <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        
        {/* Header */}
        <div className="mb-12 text-center border-b border-white/10 pb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors mb-4"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap size={14} /> Ordering Process
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            How Prime Tools Hub Works
          </h1>
          <p className="text-sm text-slate-400 mt-2 max-w-xl mx-auto">
            Get official AI tools &amp; digital subscriptions delivered straight to your WhatsApp in 4 simple steps.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:border-emerald-500/40 transition-all hover:bg-white/[0.07]"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-display font-black text-emerald-400/30 group-hover:text-emerald-400 transition-colors">
                    {s.step}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                    {s.badge}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <Icon size={24} />
                </div>
                <h2 className="text-xl font-display font-bold text-white mb-2">
                  {s.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust SLA Highlights */}
        <div className="bg-gradient-to-r from-emerald-950/60 via-emerald-900/40 to-teal-950/60 border border-emerald-500/30 rounded-3xl p-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex p-3 rounded-full bg-emerald-500/20 text-emerald-400 mb-4">
            <ShieldCheck size={28} />
          </div>
          <h3 className="text-2xl font-display font-black text-white mb-2">
            100% Satisfied or Full Replacement Guarantee
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
            All subscriptions include full warranty protection. If your credentials experience any issue, we replace them in under 4 hours or issue a 100% refund.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] text-black font-extrabold text-sm hover:bg-[#22bf5b] transition-all shadow-xl shadow-[#25D366]/20"
          >
            <MessageCircle size={18} /> Start Shopping on WhatsApp
          </a>
        </div>

      </main>

      <Footer />
    </div>
  );
}
