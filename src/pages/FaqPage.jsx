import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import { HelpCircle, ChevronDown, Search } from "lucide-react";

const FAQ_CATEGORIES = [
  { id: "all", label: "All Questions" },
  { id: "accounts", label: "Account Types & Privacy" },
  { id: "payment", label: "Payment & Pricing" },
  { id: "delivery", label: "Delivery & Setup" },
  { id: "warranty", label: "Warranty & Support" },
  { id: "renewals", label: "Renewals & Discounts" },
];

const FAQS_DATA = [
  {
    category: "accounts",
    q: "What is the difference between a Shared Slot and a Dedicated Account?",
    a: "A Shared Slot is a seat on a managed team/family plan where you get personal workspace privacy at a budget-friendly price. A Dedicated Account is assigned exclusively to your email with full individual administrative control."
  },
  {
    category: "accounts",
    q: "Are my files and design projects private on shared accounts?",
    a: "Yes! On platforms like Canva Pro, CapCut Pro, and ChatGPT Plus, your personal projects, workspace history, and chats remain private to your user profile."
  },
  {
    category: "accounts",
    q: "Can I log in on multiple devices?",
    a: "Standard subscriptions permit 1 device login unless specified otherwise (e.g., CapCut Admin Team seats permit up to 2 devices)."
  },
  {
    category: "accounts",
    q: "Are these accounts official and legal?",
    a: "Yes, 100%. We only deal with legitimate software subscriptions, official redeem links, and managed team access."
  },
  {
    category: "payment",
    q: "What local payment options do you accept in Pakistan?",
    a: "We accept JazzCash, EasyPaisa, Bank Account Transfers (HBL, Meezan, UBL, etc.), and select international card methods."
  },
  {
    category: "payment",
    q: "Do I need an international credit card to buy?",
    a: "No! You can pay entirely using local Pakistani currency (PKR) via EasyPaisa or JazzCash."
  },
  {
    category: "payment",
    q: "Are there any hidden renewal fees or auto-charges?",
    a: "Zero hidden fees. You only pay for the exact duration (e.g. 1 Month, 12 Months) you select."
  },
  {
    category: "delivery",
    q: "How fast is product delivery after payment?",
    a: "Most accounts (ChatGPT Plus, Gemini Pro, CapCut, Canva, VPNs) are delivered within 15 minutes of payment confirmation on WhatsApp."
  },
  {
    category: "delivery",
    q: "How do I receive my account credentials?",
    a: "Account details or redeem links are delivered directly to your WhatsApp chat along with step-by-step video/text activation instructions."
  },
  {
    category: "warranty",
    q: "What happens if my account stops working during the subscription?",
    a: "All products include a full duration replacement warranty. Contact our WhatsApp support and we will issue replacement credentials within 2â€“4 hours."
  },
  {
    category: "warranty",
    q: "What is your Money-Back Guarantee policy?",
    a: "If we are unable to deliver a working subscription or replacement within 24 hours of purchase, you receive a 100% full refund."
  },
  {
    category: "renewals",
    q: "How do I renew my subscription before it expires?",
    a: "We send automated WhatsApp renewal reminders 7 days before expiration. You can renew seamlessly with a 10% repeat customer discount."
  }
];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIdx, setOpenIdx] = useState(null);

  const filteredFaqs = FAQS_DATA.filter((item) => {
    const matchesCat = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Generate FAQ Schema for rich results
  const faqSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://primetoolshub.store/faq#faqpage",
        "mainEntity": FAQS_DATA.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://primetoolshub.store/" },
          { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://primetoolshub.store/faq" }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-[#00ff88] selection:text-black">
      <SEOHead
        title="Frequently Asked Questions & Answers â€” Prime Tools Hub"
        description="Got questions about buying ChatGPT Plus, Canva Pro, Gemini, or VPNs in Pakistan? Read our comprehensive 25+ FAQ guide on pricing, delivery & replacement warranty."
        canonicalUrl="https://primetoolshub.store/faq"
        schemaJson={faqSchema}
      />

      <Navbar />

      <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle size={14} />
            <span>Help Center</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-400">
            Everything you need to know about our digital tool subscriptions, payments, delivery, and replacement warranty.
          </p>

          {/* Search Input */}
          <div className="mt-8 relative max-w-lg mx-auto">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search any question (e.g. refund, delivery, JazzCash)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#0c0d12] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00ff88] transition-all"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {FAQ_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? "bg-[#00ff88] text-black shadow-lg shadow-[#00ff88]/20"
                  : "bg-[#0c0d12] text-slate-300 border border-white/10 hover:border-white/20"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion Questions List */}
        <div className="space-y-4 max-w-3xl mx-auto mb-16">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-[#0c0d12] rounded-2xl border border-white/10 text-slate-400 text-sm">
              No questions found matching "{searchQuery}". Contact us on WhatsApp for custom inquiries.
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#0c0d12] border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm font-bold text-white hover:text-[#00ff88] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-[#00ff88] flex-shrink-0 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </main>

      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
