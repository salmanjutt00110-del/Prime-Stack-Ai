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
    title: "AI Tools in Lahore Pakistan 2026 — Buy ChatGPT, Canva | PrimeToolsHub",
    description: "Premium AI tools in Lahore ✓ ChatGPT Plus, Canva Pro, CapCut from Rs.279 ✓ 15-min WhatsApp delivery ✓ JazzCash accepted. 5,000+ users 🇵🇰",
    headline: "Pakistan's #1 Digital AI Tools Marketplace in Lahore",
    romanUrduH2: "Lahore Mein AI Tools Kaise Lein",
    paymentNote: "Lahore mein ham JazzCash, EasyPaisa, Meezan Bank, HBL, aur Allied Bank se payment accept karte hain. Koi bhi extra fee nahi — direct payment WhatsApp pe.",
    faqs: [
      { question: "AI tools Lahore mein kaise milte hain?", answer: "PrimeToolsHub se WhatsApp pe order karein. Lahore mein sab se tez delivery — 5–15 minute mein credentials mil jaein gi. JazzCash, EasyPaisa, aur bank transfer sab accepted hain." },
      { question: "Lahore mein ChatGPT Plus ki price kya hai?", answer: "ChatGPT Plus Lahore mein Rs. 2,199 (1-month) aur Rs. 1,599 (10-day) mein available hai PrimeToolsHub pe." },
      { question: "Lahore mein EasyPaisa se AI tool kaise khariden?", answer: "WhatsApp pe order karein (+92-370-7020580), product select karein, EasyPaisa se payment karein, aur 15 minute mein activation mil jaegi." },
      { question: "Kya Lahore mein AI tool delivery same day hoti hai?", answer: "Haan! 90% orders 15 minute mein deliver ho jaate hain. Maximum delivery time 2 hours hai." },
      { question: "PrimeToolsHub Lahore mein kaunse tools deta hai?", answer: "ChatGPT Plus, Canva Pro, CapCut Pro, Google Gemini Pro, Surfshark VPN, NordVPN, Google VEO 3, HeyGen, Figma Pro, Notion Plus, YouTube Premium, aur bahut kuch." },
    ],
  },
  karachi: {
    name: "Karachi",
    title: "AI Tools in Karachi Pakistan 2026 — Buy ChatGPT, Canva | PrimeToolsHub",
    description: "Premium AI tools in Karachi ✓ ChatGPT Plus, Canva Pro, CapCut from Rs.279 ✓ WhatsApp delivery ✓ EasyPaisa accepted. 5,000+ users 🇵🇰",
    headline: "Fast Digital Subscription Delivery for Karachi Freelancers & Agencies",
    romanUrduH2: "Karachi Mein Premium AI Tools Kaise Khariden",
    paymentNote: "Karachi mein ham JazzCash, EasyPaisa, Meezan Bank, HBL, UBL, aur Allied Bank se payment accept karte hain. Direct payment WhatsApp pe — koi extra charge nahi.",
    faqs: [
      { question: "AI tools Karachi mein kaise milte hain?", answer: "PrimeToolsHub se WhatsApp pe order karein. Karachi mein instant delivery — credentials WhatsApp pe 5–15 minute mein mil jaein gi." },
      { question: "Karachi mein ChatGPT Plus ki price kya hai?", answer: "ChatGPT Plus Karachi mein Rs. 2,199 (1-month) aur Rs. 1,599 (10-day) mein available hai PrimeToolsHub pe." },
      { question: "Karachi mein EasyPaisa se AI tool kaise khariden?", answer: "WhatsApp pe order karein (+92-370-7020580), product select karein, EasyPaisa se payment karein, aur 15 minute mein activation." },
      { question: "Kya Karachi mein AI tool delivery same day hoti hai?", answer: "Haan! 90% orders 15 minute mein deliver. Maximum 2 hours mein guarantee." },
      { question: "PrimeToolsHub Karachi mein kaunse tools deta hai?", answer: "ChatGPT Plus, Canva Pro, CapCut Pro, Gemini Pro, VPN subscriptions, aur 15+ premium AI tools." },
    ],
  },
  islamabad: {
    name: "Islamabad",
    title: "AI Tools in Islamabad Pakistan 2026 — Buy ChatGPT, Canva | PrimeToolsHub",
    description: "Premium AI tools in Islamabad ✓ ChatGPT Plus, Canva Pro, CapCut from Rs.279 ✓ WhatsApp delivery ✓ JazzCash accepted. 5,000+ users 🇵🇰",
    headline: "Trusted AI Tools & Software Subscriptions in Islamabad & Rawalpindi",
    romanUrduH2: "Islamabad Mein AI Tool Subscriptions",
    paymentNote: "Islamabad mein ham JazzCash, EasyPaisa, Meezan Bank, aur bank transfer accept karte hain. Koi hidden fee nahi — sab transparent hai.",
    faqs: [
      { question: "AI tools Islamabad mein kaise milte hain?", answer: "PrimeToolsHub se WhatsApp pe order karein. Islamabad aur Rawalpindi dono mein fast delivery — 5–15 minute mein credentials mil jaein gi." },
      { question: "Islamabad mein ChatGPT Plus ki price kya hai?", answer: "ChatGPT Plus Islamabad mein Rs. 2,199 (1-month) aur Rs. 1,599 (10-day) mein available hai." },
      { question: "Islamabad mein EasyPaisa se AI tool kaise khariden?", answer: "WhatsApp pe order karein, product select karein, EasyPaisa se payment karein, aur 15 minute mein activation." },
      { question: "Kya Islamabad mein AI tool delivery same day hoti hai?", answer: "Haan! Most orders 15 minute mein deliver hote hain. Maximum 2 hours." },
      { question: "PrimeToolsHub Islamabad mein kaunse tools deta hai?", answer: "ChatGPT Plus, Canva Pro, CapCut Pro, Gemini Pro, VPN subscriptions, aur 15+ premium AI tools." },
    ],
  },
  faisalabad: {
    name: "Faisalabad",
    title: "AI Tools in Faisalabad Pakistan 2026 — Buy ChatGPT, Canva | PrimeToolsHub",
    description: "Premium AI tools in Faisalabad ✓ ChatGPT Plus, Canva Pro, CapCut from Rs.279 ✓ WhatsApp delivery ✓ JazzCash/EasyPaisa. 5,000+ users 🇵🇰",
    headline: "Affordable AI Tools Subscriptions in Faisalabad",
    romanUrduH2: "Faisalabad Mein AI Tools — Complete Guide",
    paymentNote: "Faisalabad mein ham JazzCash, EasyPaisa, aur Bank Transfer se payment accept karte hain. Koi extra fee nahi — direct WhatsApp pe payment.",
    faqs: [
      { question: "AI tools Faisalabad mein kaise milte hain?", answer: "PrimeToolsHub se WhatsApp pe order karein. Faisalabad mein bhi instant delivery — 5–15 minute mein credentials." },
      { question: "Faisalabad mein ChatGPT Plus ki price kya hai?", answer: "ChatGPT Plus Faisalabad mein Rs. 2,199 (1-month) aur Rs. 1,599 (10-day) mein available hai." },
      { question: "Faisalabad mein EasyPaisa se AI tool kaise khariden?", answer: "WhatsApp pe order karein, EasyPaisa se payment karein, aur 15 minute mein activation." },
      { question: "Kya Faisalabad mein AI tool delivery same day hoti hai?", answer: "Haan! Digital delivery hai — location se koi farq nahi parta. 15 minute mein mil jaata hai." },
      { question: "PrimeToolsHub Faisalabad mein kaunse tools deta hai?", answer: "ChatGPT Plus, Canva Pro, CapCut Pro, Gemini Pro, VPN, aur 15+ premium AI tools." },
    ],
  },
  rawalpindi: {
    name: "Rawalpindi",
    title: "AI Tools in Rawalpindi Pakistan 2026 — Buy ChatGPT, Canva | PrimeToolsHub",
    description: "Premium AI tools in Rawalpindi ✓ ChatGPT Plus, Canva Pro, CapCut from Rs.279 ✓ WhatsApp delivery ✓ JazzCash accepted. 5,000+ users 🇵🇰",
    headline: "Premium AI Tool Subscriptions in Rawalpindi",
    romanUrduH2: "Rawalpindi Mein AI Tools Kaise Milenge",
    paymentNote: "Rawalpindi mein ham JazzCash, EasyPaisa, aur Bank Transfer accept karte hain. Koi extra charge nahi — direct payment WhatsApp pe.",
    faqs: [
      { question: "AI tools Rawalpindi mein kaise milte hain?", answer: "PrimeToolsHub se WhatsApp pe order karein. Rawalpindi mein bhi instant delivery available hai — 5–15 minute mein." },
      { question: "Rawalpindi mein ChatGPT Plus ki price kya hai?", answer: "ChatGPT Plus Rs. 2,199 (1-month) aur Rs. 1,599 (10-day) mein available hai — same pricing poore Pakistan mein." },
      { question: "Rawalpindi mein EasyPaisa se AI tool kaise khariden?", answer: "WhatsApp pe message karein, product select karein, EasyPaisa se payment, aur 15 minute mein activation." },
      { question: "Kya Rawalpindi mein AI tool delivery same day hoti hai?", answer: "Haan! Digital delivery hai — WhatsApp pe 15 minute mein mil jaata hai." },
      { question: "PrimeToolsHub Rawalpindi mein kaunse tools deta hai?", answer: "ChatGPT Plus, Canva Pro, CapCut Pro, Gemini Pro, VPN, aur 15+ AI tools." },
    ],
  },
  peshawar: {
    name: "Peshawar",
    title: "AI Tools in Peshawar Pakistan 2026 — Buy ChatGPT, Canva | PrimeToolsHub",
    description: "Premium AI tools in Peshawar ✓ ChatGPT Plus, Canva Pro, CapCut from Rs.279 ✓ WhatsApp delivery ✓ EasyPaisa accepted. 5,000+ users 🇵🇰",
    headline: "AI Tool Subscriptions for Peshawar Creators & Students",
    romanUrduH2: "Peshawar Mein AI Tool Subscriptions",
    paymentNote: "Peshawar mein ham JazzCash, EasyPaisa, aur Bank Transfer accept karte hain. Online payment — koi extra charge nahi.",
    faqs: [
      { question: "AI tools Peshawar mein kaise milte hain?", answer: "PrimeToolsHub se WhatsApp pe order karein. Peshawar mein bhi fast delivery — 5–15 minute mein WhatsApp pe credentials." },
      { question: "Peshawar mein ChatGPT Plus ki price kya hai?", answer: "ChatGPT Plus Rs. 2,199 (1-month) mein available hai — poore Pakistan mein same price." },
      { question: "Peshawar mein EasyPaisa se AI tool kaise khariden?", answer: "WhatsApp pe order karein, EasyPaisa se payment, 15 minute mein activation." },
      { question: "Kya Peshawar mein AI tool delivery same day hoti hai?", answer: "Haan! Digital delivery instant hai — city se koi farq nahi." },
      { question: "PrimeToolsHub Peshawar mein kaunse tools deta hai?", answer: "ChatGPT Plus, Canva Pro, CapCut Pro, Gemini, VPN, aur bahut kuch." },
    ],
  },
  multan: {
    name: "Multan",
    title: "AI Tools in Multan Pakistan 2026 — Buy ChatGPT, Canva | PrimeToolsHub",
    description: "Premium AI tools in Multan ✓ ChatGPT Plus, Canva Pro, CapCut from Rs.279 ✓ WhatsApp delivery ✓ JazzCash/EasyPaisa. 5,000+ users 🇵🇰",
    headline: "AI Tool Subscriptions for Multan — Best Prices in Pakistan",
    romanUrduH2: "Multan Mein AI Tools Khareedne ka Tarika",
    paymentNote: "Multan mein ham JazzCash, EasyPaisa, aur Bank Transfer accept karte hain. Koi hidden charge nahi — transparent pricing.",
    faqs: [
      { question: "AI tools Multan mein kaise milte hain?", answer: "PrimeToolsHub se WhatsApp pe order karein. Multan mein bhi instant delivery — 5–15 minute." },
      { question: "Multan mein ChatGPT Plus ki price kya hai?", answer: "ChatGPT Plus Rs. 2,199 (1-month) — same price poore Pakistan mein." },
      { question: "Multan mein EasyPaisa se AI tool kaise khariden?", answer: "WhatsApp pe order karein, EasyPaisa se payment, instant activation." },
      { question: "Kya Multan mein AI tool delivery same day hoti hai?", answer: "Haan! Digital delivery hai — 15 minute mein WhatsApp pe." },
      { question: "PrimeToolsHub Multan mein kaunse tools deta hai?", answer: "ChatGPT Plus, Canva Pro, CapCut Pro, Gemini, VPN, aur 15+ AI tools." },
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

        {/* Roman Urdu H2 & Payment Section */}
        <div className="max-w-3xl mx-auto mb-10 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-400 mb-3">{cityData.romanUrduH2}</h2>
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
