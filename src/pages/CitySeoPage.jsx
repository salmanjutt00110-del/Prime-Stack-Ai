import { useParams, useLocation } from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import ProductsGrid from "@/components/ProductsGrid";
import Breadcrumb from "@/components/Breadcrumb";
import { MapPin, ShieldCheck, Zap, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/products";
import {
  generateLocalBusinessSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema,
  DOMAIN,
} from "@/lib/seoSchema";

const CITIES = {
  lahore: {
    name: "Lahore",
    title: "Buy ChatGPT Plus & Canva Pro in Lahore 🇵🇰 | Prime Tools Hub",
    description: "Instant activation of ChatGPT Plus, Canva Pro, Veo 3 & CapCut in Lahore, Punjab. Pay locally via JazzCash / EasyPaisa with 15-minute delivery.",
    headline: "Pakistan's #1 Digital AI Tools Marketplace in Lahore",
  },
  karachi: {
    name: "Karachi",
    title: "Buy ChatGPT Plus & Canva Pro in Karachi 🇵🇰 | Prime Tools Hub",
    description: "Get ChatGPT Plus, Canva Pro, Gemini & VPN subscriptions delivered instantly in Karachi, Sindh via JazzCash/EasyPaisa with 100% warranty.",
    headline: "Fast Digital Subscription Delivery for Karachi Freelancers & Agencies",
  },
  islamabad: {
    name: "Islamabad",
    title: "Buy ChatGPT Plus & Canva Pro in Islamabad & Rawalpindi | Prime Tools Hub",
    description: "Official digital tools & AI account subscriptions in Islamabad & Rawalpindi. 15-minute delivery, full warranty & local PKR bank transfers.",
    headline: "Trusted AI Tools & Software Subscriptions in Islamabad & Pindi",
  },
  faisalabad: {
    name: "Faisalabad",
    title: "Buy ChatGPT Plus & Canva Pro in Faisalabad 🇵🇰 | Prime Tools Hub",
    description: "Get cheap ChatGPT Plus, Canva Pro & CapCut subscriptions in Faisalabad via JazzCash and EasyPaisa with instant replacement warranty.",
    headline: "Affordable AI Tools Subscriptions in Faisalabad",
  },
};

export default function CitySeoPage() {
  const { city } = useParams();
  const location = useLocation();
  
  // Extract city from route params or pathname
  const pathCity = location.pathname.replace(/^\//, "").toLowerCase();
  const cityKey = (city || pathCity || "lahore").toLowerCase();
  const cityData = CITIES[cityKey] || CITIES.lahore;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Prime Tools Hub! I am ordering from ${cityData.name}. I want to buy AI tool subscriptions.`
  )}`;

  const pageUrl = `${DOMAIN}/${cityKey}`;
  const breadcrumbItems = [{ name: cityData.name, url: `/${cityKey}` }];

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
      generateBreadcrumbSchema(breadcrumbItems),
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

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-emerald-950/70 via-[#0c0d12] to-blue-950/70 p-8 sm:p-12 rounded-3xl border border-emerald-500/30">
          <h2 className="text-2xl font-extrabold text-white mb-3">Order Your Digital Tools in {cityData.name} Now</h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mb-6">
            Join thousands of satisfied Pakistani creators, freelancers, and businesses.
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
