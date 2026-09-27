import { useLocation } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import ProductsGrid from "@/components/ProductsGrid";
import Breadcrumb from "@/components/Breadcrumb";
import { MapPin, ShieldCheck, Zap, MessageCircle, HelpCircle, ChevronRight } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/products";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  generateLocalBusinessSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  DOMAIN,
} from "@/lib/seoSchema";

const CITIES = {
  lahore: {
    name: "Lahore",
    title: "AI Tools in Lahore 2026 — Buy ChatGPT, Canva | PrimeToolsHub",
    description: "Premium AI tools in Lahore ✓ ChatGPT Plus, Canva Pro, CapCut ✓ Instant WhatsApp delivery ✓ 5,000+ users worldwide",
    headline: "Official AI Tools & Subscriptions in Lahore",
    englishH2: "How to Buy Premium AI Tools in Lahore",
    paymentNote: "We accept JazzCash, EasyPaisa, Meezan Bank, HBL, Allied Bank, and direct transfers. Prompt activation via WhatsApp.",
    faqs: [
      { question: "How to get AI tools in Lahore?", answer: "Order via WhatsApp at +92-370-7020580. Get official credentials delivered within 5–15 minutes." },
      { question: "What is the price of ChatGPT Plus in Lahore?", answer: "ChatGPT Plus is available at competitive USD rates with full warranty on PrimeToolsHub." },
      { question: "How to pay using EasyPaisa or JazzCash?", answer: "Send us a WhatsApp message, select your plan, pay locally, and receive instant access." },
      { question: "Is same-day delivery guaranteed in Lahore?", answer: "Yes! 90% of digital orders are delivered within 15 minutes." },
      { question: "Which tools are available?", answer: "ChatGPT Plus, Canva Pro, CapCut Pro, Google Gemini Pro, Surfshark VPN, NordVPN, Google VEO 3, Figma Pro, Office 365, and more." },
    ],
  },
  karachi: {
    name: "Karachi",
    title: "AI Tools in Karachi 2026 — Buy ChatGPT, Canva | PrimeToolsHub",
    description: "Premium AI tools in Karachi ✓ ChatGPT Plus, Canva Pro, CapCut ✓ WhatsApp delivery ✓ 5,000+ happy clients",
    headline: "Fast Digital Subscription Delivery for Karachi Freelancers & Agencies",
    englishH2: "How to Buy Premium AI Tools in Karachi",
    paymentNote: "We accept JazzCash, EasyPaisa, Meezan Bank, HBL, UBL, and direct transfers. No hidden fees.",
    faqs: [
      { question: "How to get AI tools in Karachi?", answer: "Order via WhatsApp from PrimeToolsHub. Credentials arrive directly on WhatsApp in 5–15 minutes." },
      { question: "What is the price of ChatGPT Plus in Karachi?", answer: "Available at low wholesale USD pricing with full warranty." },
      { question: "Can I pay using EasyPaisa in Karachi?", answer: "Yes, you can easily pay via EasyPaisa, JazzCash, or bank transfer." },
      { question: "Is digital delivery instant?", answer: "Yes, fast digital fulfillment within 15 minutes." },
      { question: "Which tools are in stock?", answer: "ChatGPT Plus, Canva Pro, CapCut Pro, Gemini Pro, VPNs, and 15+ premium tools." },
    ],
  },
  islamabad: {
    name: "Islamabad",
    title: "AI Tools in Islamabad 2026 — Buy ChatGPT, Canva | PrimeToolsHub",
    description: "Premium AI tools in Islamabad ✓ ChatGPT Plus, Canva Pro, CapCut ✓ WhatsApp delivery ✓ 5,000+ users",
    headline: "Trusted AI Tools & Software Subscriptions in Islamabad & Rawalpindi",
    englishH2: "AI Tool Subscriptions in Islamabad",
    paymentNote: "We support JazzCash, EasyPaisa, Meezan Bank, and bank transfers with instant verification.",
    faqs: [
      { question: "How to get AI tools in Islamabad?", answer: "Order via WhatsApp. Rapid delivery within 5–15 minutes for Islamabad & Rawalpindi." },
      { question: "What is the price of ChatGPT Plus?", answer: "Offered at discounted USD prices with instant replacement warranty." },
      { question: "How to buy using local payment methods?", answer: "Message on WhatsApp, choose your tool, pay via mobile wallet or bank, and get access." },
      { question: "Is delivery guaranteed same-day?", answer: "Yes! Most orders are fulfilled within 15 minutes." },
      { question: "What tools can I purchase?", answer: "ChatGPT Plus, Canva Pro, CapCut Pro, Gemini Pro, VPNs, Miro, and Office 365." },
    ],
  },
  faisalabad: {
    name: "Faisalabad",
    title: "AI Tools in Faisalabad 2026 — Buy ChatGPT, Canva | PrimeToolsHub",
    description: "Premium AI tools in Faisalabad ✓ ChatGPT Plus, Canva Pro, CapCut ✓ Fast WhatsApp delivery",
    headline: "Affordable AI Tools Subscriptions in Faisalabad",
    englishH2: "AI Tools in Faisalabad — Complete Buyer Guide",
    paymentNote: "Payment accepted via JazzCash, EasyPaisa, and bank transfer. Direct WhatsApp checkout.",
    faqs: [
      { question: "How are tools delivered in Faisalabad?", answer: "Delivered digitally via WhatsApp within 5–15 minutes." },
      { question: "How can I purchase with EasyPaisa?", answer: "Message our official WhatsApp number, send payment screenshot, and get activated." },
      { question: "Which subscriptions are supported?", answer: "ChatGPT Plus, Canva Pro, CapCut Pro, Gemini Pro, VPNs, and 15+ AI tools." },
    ],
  },
  rawalpindi: {
    name: "Rawalpindi",
    title: "AI Tools in Rawalpindi 2026 — Buy ChatGPT, Canva | PrimeToolsHub",
    description: "Premium AI tools in Rawalpindi ✓ ChatGPT Plus, Canva Pro, CapCut ✓ WhatsApp delivery",
    headline: "Premium AI Tool Subscriptions in Rawalpindi",
    englishH2: "How to Get AI Tools in Rawalpindi",
    paymentNote: "Accepted payment methods include JazzCash, EasyPaisa, and bank transfer.",
    faqs: [
      { question: "How quickly do I get account access?", answer: "Digital delivery on WhatsApp in 5–15 minutes." },
      { question: "What tools are available in Rawalpindi?", answer: "ChatGPT Plus, Canva Pro, CapCut Pro, Gemini Pro, VPN, and 15+ tools." },
    ],
  },
  peshawar: {
    name: "Peshawar",
    title: "AI Tools in Peshawar 2026 — Buy ChatGPT, Canva | PrimeToolsHub",
    description: "Premium AI tools in Peshawar ✓ ChatGPT Plus, Canva Pro, CapCut ✓ WhatsApp delivery",
    headline: "AI Tool Subscriptions for Peshawar Creators & Students",
    englishH2: "AI Tool Subscriptions in Peshawar",
    paymentNote: "Pay easily using JazzCash, EasyPaisa, and online banking.",
    faqs: [
      { question: "How to order AI tools in Peshawar?", answer: "Order via WhatsApp for fast 5–15 minute credential delivery." },
      { question: "Which tools are available?", answer: "ChatGPT Plus, Canva Pro, CapCut Pro, Gemini, VPNs, and productivity suites." },
    ],
  },
  multan: {
    name: "Multan",
    title: "AI Tools in Multan 2026 — Buy ChatGPT, Canva | PrimeToolsHub",
    description: "Premium AI tools in Multan ✓ ChatGPT Plus, Canva Pro, CapCut ✓ WhatsApp delivery",
    headline: "AI Tool Subscriptions for Multan — Best Prices Online",
    englishH2: "How to Buy AI Tools in Multan",
    paymentNote: "JazzCash, EasyPaisa, and direct bank transfers accepted with transparent rates.",
    faqs: [
      { question: "How to purchase in Multan?", answer: "Order via WhatsApp for instant delivery in 5–15 minutes." },
      { question: "Which AI tools are in stock?", answer: "ChatGPT Plus, Canva Pro, CapCut Pro, Gemini, VPN, and 15+ tools." },
    ],
  },
};

function CityFAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="rounded-xl border border-white/8 overflow-hidden transition-all" style={isOpen ? { borderColor: 'rgba(0,255,136,0.3)', background: 'rgba(255,255,255,0.02)' } : {}}>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left hover:bg-white/[0.03] transition-colors">
        <span className="text-sm font-medium text-white/80 leading-relaxed">{faq.question}</span>
        <ChevronRight size={16} className={`shrink-0 text-white/40 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} style={isOpen ? { color: '#00ff88' } : {}} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
            <div className="px-4 pb-4 text-sm text-white/55 leading-relaxed">{faq.answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CitySeoPage() {
  const location = useLocation();
  
  // Extract city from pathname
  const pathCity = location.pathname.replace(/^\//, "").toLowerCase();
  const cityKey = pathCity || "lahore";
  const cityData = CITIES[cityKey] || CITIES.lahore;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Prime Tools Hub! I am ordering from ${cityData.name}. I want to buy AI tool subscriptions.`
  )}`;

  const pageUrl = `${DOMAIN}/${cityKey}`;
  const breadcrumbItems = [{ name: cityData.name, url: `/${cityKey}` }];

  const faqSchema = cityData.faqs ? generateFAQSchema(cityData.faqs, `${pageUrl}#faq`) : null;

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      generateLocalBusinessSchema(cityData.name),
      generateWebPageSchema({
        name: cityData.title,
        description: cityData.description,
        url: pageUrl,
        breadcrumbItems,
      }),
      generateBreadcrumbSchema(breadcrumbItems, pageUrl),
      ...(faqSchema ? [faqSchema] : []),
    ],
  };

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-[#00ff88] selection:text-black">
      <SEOHead
        title={cityData.title}
        description={cityData.description}
        canonicalUrl={pageUrl}
        schemaJson={schemaGraph}
      />

      <Navbar />

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumb items={breadcrumbItems} />

        {/* City Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 pt-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <MapPin size={14} />
            <span>Serving {cityData.name}, Pakistan</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {cityData.headline}
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            Get instant WhatsApp activation for ChatGPT Plus, Canva Pro, Veo 3, CapCut Pro, and VPNs in {cityData.name}. Pay hassle-free with EasyPaisa, JazzCash, or local bank transfers.
          </p>
        </div>

        {/* English H2 & Payment Section */}
        <div className="max-w-3xl mx-auto mb-10 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-400 mb-3">{cityData.englishH2 || `How to Buy Premium AI Tools in ${cityData.name}`}</h2>
          <p className="text-sm text-slate-400 leading-relaxed">{cityData.paymentNote}</p>
        </div>

        {/* Localized Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-[#0c0d12] border border-white/10 text-center">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-3">
              <Zap size={20} />
            </div>
            <h3 className="font-bold text-white text-sm mb-1">⚡ 15-Minute Local Delivery</h3>
            <p className="text-xs text-slate-400">Instant credentials sent to your WhatsApp in {cityData.name}.</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c0d12] border border-white/10 text-center">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto mb-3">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-bold text-white text-sm mb-1">🛡️ Full Duration Replacement</h3>
            <p className="text-xs text-slate-400">Every plan includes 100% warranty support during your subscription.</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c0d12] border border-white/10 text-center">
            <div className="w-10 h-10 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center mx-auto mb-3">
              <MessageCircle size={20} />
            </div>
            <h3 className="font-bold text-white text-sm mb-1">🇵🇰 JazzCash &amp; EasyPaisa</h3>
            <p className="text-xs text-slate-400">No international USD bank card required.</p>
          </div>
        </div>

        {/* Catalog Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-extrabold text-white text-center mb-8">
            Available Subscriptions in {cityData.name}
          </h2>
          <ProductsGrid />
        </div>

        {/* City FAQ Section */}
        {cityData.faqs && cityData.faqs.length > 0 && (
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
              <HelpCircle size={18} className="text-emerald-400" />
              <span>{cityData.name} — Aksar Pooche Jane Wale Sawalaat</span>
            </h2>
            <div className="space-y-2">
              {cityData.faqs.map((faq, idx) => (
                <CityFAQItem key={idx} faq={faq} />
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-emerald-950/70 via-[#0c0d12] to-blue-950/70 p-8 sm:p-12 rounded-3xl border border-emerald-500/30">
          <h2 className="text-2xl font-extrabold text-white mb-3">Order Your Digital Tools in {cityData.name} Now</h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mb-6">
            Join 5,000+ satisfied Pakistani creators, freelancers, and businesses.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all"
          >
            <MessageCircle size={16} />
            <span>Order via WhatsApp in {cityData.name}</span>
          </a>
        </div>
      </main>

      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
