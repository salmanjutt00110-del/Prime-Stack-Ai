import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HelpCircle, ChevronDown, MessageCircle, Search, ShieldCheck, CreditCard, Truck, RefreshCw, ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WHATSAPP_NUMBER } from "@/data/products";

const FAQ_CATEGORIES = [
  { id: "all", label: "All Questions", icon: HelpCircle },
  { id: "account", label: "Account Types & Privacy", icon: ShieldCheck },
  { id: "payment", label: "Payment & Pricing", icon: CreditCard },
  { id: "delivery", label: "Delivery & Setup", icon: Truck },
  { id: "warranty", label: "Warranty & Support", icon: RefreshCw },
];

const FAQS = [
  {
    category: "delivery",
    q: "How do I place an order on Prime Tools Hub?",
    a: "Simply browse our catalog, click 'Buy on WhatsApp' or 'Order Now' on any product card. Your order details will auto-fill in a WhatsApp message. Send it to our team and we'll guide you through quick payment and instant activation."
  },
  {
    category: "delivery",
    q: "How fast is product delivery & activation?",
    a: "Most products (such as ChatGPT Plus, Gemini Advanced, CapCut Pro, Canva Pro, and VPNs) are activated within 15 to 30 minutes after payment confirmation. Custom growth services like TikTok Growth Challenge may take up to 24 hours."
  },
  {
    category: "account",
    q: "Are these accounts genuine, safe, and legal?",
    a: "Yes, 100%. We only deal in legitimate, genuine accounts and official activation channels. Your privacy and data safety are fully protected."
  },
  {
    category: "account",
    q: "What is the difference between Shared Slot, Admin Team, and Personal Email Invite?",
    a: "• Shared Slots: Managed multi-user account access where your personal workspace remains private.\n• Admin Team Seats: Multi-user admin seats for teams (e.g. CapCut 7 Seats).\n• Personal Email Invite: The subscription is activated directly on your personal Gmail/Google account (e.g. Gemini Pro 5TB)."
  },
  {
    category: "payment",
    q: "What payment methods do you accept?",
    a: "We accept EasyPaisa, JazzCash, Bank Account Transfers (HBL/Meezan/Standard Chartered), and international payment options. Payment details are shared instantly on WhatsApp."
  },
  {
    category: "payment",
    q: "Do you offer bulk discounts for agencies, teams, or resellers?",
    a: "Yes! If you purchase 5 or more products (or require multi-user team seats), we offer exclusive custom bulk pricing. Contact us on WhatsApp for a personalized quotation."
  },
  {
    category: "warranty",
    q: "What if I face an issue during my subscription period?",
    a: "All our products come with a dedicated replacement warranty for the duration specified on the product card. If you experience any issue, reach out to our WhatsApp support (+92-370-7020580) and we will provide replacement credentials within 2 to 4 hours."
  },
  {
    category: "warranty",
    q: "What is your refund policy if an account cannot be fixed?",
    a: "If an account access issue cannot be resolved or replaced within 24 hours, we issue a 100% full or prorated refund via EasyPaisa, JazzCash, or Bank Transfer."
  },
  {
    category: "warranty",
    q: "Can I renew my subscription when it expires?",
    a: "Yes! We send automatic renewal reminders 7 days before your subscription ends. Repeat customers get a 10% discount on renewals."
  }
];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCat = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Prime%20Tools%20Hub,%20I%20have%20a%20question%20about%20your%20products.`;

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 flex flex-col font-body selection:bg-emerald-500/30 selection:text-emerald-300">
      <SEOHead
        title="Frequently Asked Questions (FAQ) | Prime Tools Hub"
        description="Got questions about ChatGPT Plus, Canva Pro, Gemini Pro activations or JazzCash/EasyPaisa payments? Find instant answers in our FAQ."
        canonicalUrl="https://primetoolshub.store/faq"
      />
      <Navbar />

      <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        
        {/* Header */}
        <div className="mb-8 text-center border-b border-white/10 pb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors mb-4"
          >
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle size={14} /> Help Center & Knowledge Base
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sm text-slate-400 mt-2 max-w-xl mx-auto">
            Everything you need to know about our digital subscriptions, delivery SLA, payment options, and replacement warranties.
          </p>

          {/* Search Input */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search any question (e.g. refund, payment, chatgpt)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-11 pr-4 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8 justify-center flex-wrap">
          {FAQ_CATEGORIES.map(cat => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap border ${
                  isActive
                    ? "bg-emerald-500 text-black border-emerald-400 shadow-lg shadow-emerald-500/20"
                    : "bg-white/5 text-slate-400 border-white/10 hover:text-white hover:bg-white/10"
                }`}
              >
                <Icon size={14} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-display font-bold text-sm sm:text-base text-white">
                      {faq.q}
                    </span>
                    <span className={`p-1.5 rounded-full bg-white/5 text-slate-400 transition-transform ${isOpen ? "rotate-180 text-emerald-400" : ""}`}>
                      <ChevronDown size={16} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 whitespace-pre-line mt-2">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white/5 border border-white/10 rounded-2xl">
              <p className="text-slate-400 text-sm">No questions matching "{searchQuery}" found.</p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-3 text-xs text-emerald-400 hover:underline font-bold"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-emerald-900/20 to-teal-950/40 border border-emerald-500/30 text-center">
          <h2 className="text-xl font-display font-black text-white mb-2">Still have questions?</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-6">
            Our WhatsApp support team is online 9 AM – 11 PM PKT to assist you with quick ordering and activation.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-black font-extrabold text-xs sm:text-sm hover:bg-[#22bf5b] transition-all shadow-lg shadow-[#25D366]/20"
          >
            <MessageCircle size={18} /> Chat on WhatsApp Now
          </a>
        </div>

      </main>

      <Footer />
    </div>
  );
}
