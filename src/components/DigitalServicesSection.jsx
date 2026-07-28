import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_NUMBER } from "@/data/products";
import {
  Globe, Video, Megaphone, Sparkles, ExternalLink, MessageCircle,
  Flame, Layers, Palette, Share2, Award, Check
} from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "✨ All Agency Services", icon: Layers },
  { id: "web-dev", label: "🌐 Web Development (50% OFF)", icon: Globe },
  { id: "design", label: "🎨 Brand Identity Design", icon: Palette },
  { id: "marketing", label: "🚀 Meta & TikTok Ads", icon: Megaphone },
];

const SERVICES = [
  {
    id: "web-dev",
    category: "web-dev",
    title: "Website Development",
    subtitle: "High-Converting & Mobile Responsive",
    badge: "🔥 50% OFF (FIRST 2 CLIENTS)",
    duration: "Custom Project",
    badgeColor: "#EF4444",
    accentGlow: "#3B82F6",
    secondaryGlow: "#60A5FA",
    icon: Globe,
    borderGradient: "linear-gradient(140deg, rgba(59, 130, 246, 0.5) 0%, rgba(10, 10, 24, 0.97) 100%)",
    priceNote: "Flat 50% OFF For First 2 Customers",
    price: "Custom Quote",
    oldPrice: "Regular Price",
    description: "Get a high-converting, modern custom website engineered to turn visitors into paying customers.",
    features: [
      "Flat 50% OFF Discount First 2 Clients",
      "E-Commerce & Custom Web Apps",
      "100% Mobile Responsive Speed 95+",
      "Free Domain Setup & Technical SEO",
    ],
    ctaText: "Claim 50% OFF Offer",
    highlight: true,
  },
  {
    id: "meta-ads",
    category: "marketing",
    title: "Meta Ads (Facebook & IG)",
    subtitle: "High ROAS Ads Scaling",
    badge: "🚀 HIGH ROAS AD SCALING",
    duration: "Campaign Management",
    badgeColor: "#3B82F6",
    accentGlow: "#3B82F6",
    secondaryGlow: "#8B5CF6",
    icon: Megaphone,
    borderGradient: "linear-gradient(140deg, rgba(59, 130, 246, 0.5) 0%, rgba(8, 10, 24, 0.97) 100%)",
    priceNote: "Laser Audience Targeting & Pixel",
    price: "Custom Quote",
    oldPrice: "Ad Audit",
    description: "Scale your e-commerce store or agency with highly profitable Meta ad campaign funnels.",
    features: [
      "FB & Instagram Funnel Setup",
      "Custom Laser Audience Targeting",
      "Meta Pixel & Conversion API",
      "High-Converting Copywriting",
    ],
    ctaText: "Consult Meta Ads",
    highlight: true,
  },
  {
    id: "tiktok-reels",
    category: "marketing",
    title: "TikTok Ads & Video Reels",
    subtitle: "Viral Social Content & Motion FX",
    badge: "🎬 VIRAL REELS & ADS",
    duration: "Per Video / Package",
    badgeColor: "#FE2C55",
    accentGlow: "#FE2C55",
    secondaryGlow: "#25F4EE",
    icon: Video,
    borderGradient: "linear-gradient(140deg, rgba(254, 44, 85, 0.5) 0%, rgba(16, 8, 14, 0.97) 100%)",
    priceNote: "Engaging Content Built to Retain",
    price: "Custom Quote",
    oldPrice: "Promo Offer",
    description: "Skyrocket sales and audience engagement with high-impact video ads and TikTok reels.",
    features: [
      "TikTok & IG Reels Video Editing",
      "Subtitles, Sound FX & Motion Graphics",
      "Product Unboxing & Showcase",
      "AI Voiceover Sync & 4K Export",
    ],
    ctaText: "Order Video Editing",
    highlight: false,
  },
  {
    id: "brand-identity",
    category: "design",
    title: "Brand Identity Design",
    subtitle: "Vector Logo Kits & Guidelines",
    badge: "👑 LUXURY BRAND BUILDING",
    duration: "Full Brand Package",
    badgeColor: "#9333EA",
    accentGlow: "#9333EA",
    secondaryGlow: "#C084FC",
    icon: Palette,
    borderGradient: "linear-gradient(140deg, rgba(147, 51, 234, 0.5) 0%, rgba(14, 8, 22, 0.97) 100%)",
    priceNote: "Full Brand Book & Vector Files",
    price: "Custom Quote",
    oldPrice: "Brand Audit",
    description: "Establish an unforgettable brand identity that commands premium pricing and instant trust.",
    features: [
      "Custom Vector Logo Concepts",
      "Color Palette & Typography Book",
      "Social Branding Templates",
      "Business Cards & Print Files",
    ],
    ctaText: "Create Brand Kit",
    highlight: false,
  },
  {
    id: "social-management",
    category: "marketing",
    title: "Social Media Management",
    subtitle: "Content Calendar & Growth",
    badge: "⚡ 360° SOCIAL SCALING",
    duration: "Monthly Retainer",
    badgeColor: "#EC4899",
    accentGlow: "#EC4899",
    secondaryGlow: "#F472B6",
    icon: Share2,
    borderGradient: "linear-gradient(140deg, rgba(236, 72, 153, 0.5) 0%, rgba(18, 8, 16, 0.97) 100%)",
    priceNote: "Daily Posts, Reels & Engagement",
    price: "Custom Quote",
    oldPrice: "Social Audit",
    description: "Turn your social media channels into consistent automated sales and branding funnels.",
    features: [
      "Monthly Content Calendar",
      "Custom Graphic Posts & Reels",
      "Hashtag Strategy & Organic Reach",
      "DM & Comment Engagement Support",
    ],
    ctaText: "Hire Social Manager",
    highlight: false,
  },
];

export default memo(function DigitalServicesSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredServices = activeTab === "all" 
    ? SERVICES 
    : SERVICES.filter((s) => s.category === activeTab);

  const handleOrderService = (serviceTitle) => {
    const text = encodeURIComponent(
      `Hi AmirAds / Prime Tools Hub, I am interested in your Digital Agency Service: ${serviceTitle}. Please share details & custom pricing!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <section id="agency-services" className="relative py-24 px-3 sm:px-6 overflow-hidden scroll-mt-20 border-t bg-[#02040a] border-white/5">
      
      {/* Background Radial Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[950px] h-[600px] bg-radial from-blue-900/20 via-purple-900/10 to-transparent blur-[160px]" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* SECTION HEADER ROW matching reference screenshot */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-purple-400 font-bold text-lg">✦</span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
              Our Premium <span className="ps-grad-text bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</span>
            </h2>
          </div>

          <a
            href="https://www.amirads.pro/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
          >
            <span>View All Services</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* AGENCY ACTION BUTTONS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://www.amirads.pro/"
            target="_blank"
            rel="noopener noreferrer"
            className="keep-white px-8 py-4 rounded-2xl font-display font-extrabold text-xs sm:text-sm text-white flex items-center gap-3 transition-all duration-300 hover:scale-[1.04] active:scale-95 shadow-2xl cursor-pointer group h-[52px] min-h-[52px]"
            style={{
              background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
            }}
          >
            <Globe size={18} className="text-blue-200 group-hover:rotate-12 transition-transform" />
            <span>Visit Official Agency (amirads.pro)</span>
            <ExternalLink size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <div className="px-5 py-3.5 rounded-2xl border text-xs sm:text-sm font-black uppercase tracking-wider flex items-center gap-2 shadow-sm bg-gradient-to-r from-red-500/20 via-pink-500/20 to-purple-500/20 border-red-500/40 text-red-300 min-h-[52px]">
            <Flame size={16} className="text-red-500 animate-bounce" />
            <span>🔥 50% OFF For First 2 Website Clients!</span>
          </div>
        </motion.div>

        {/* CATEGORY TABS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex items-center overflow-x-auto no-scrollbar snap-x sm:flex-wrap sm:justify-center gap-2 max-w-4xl mx-auto pb-2 px-1"
        >
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer min-h-[42px] shrink-0 snap-start flex items-center justify-center gap-2 border ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white border-violet-400 shadow-lg scale-[1.04]"
                    : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/10 border-white/10"
                }`}
              >
                <Icon size={15} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* SERVICES CARDS GRID (UNIFIED 28px GLASS CARDS MATCHING PRODUCT CARDS) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 ps-3d-perspective"
          >
            {filteredServices.map((srv, idx) => {
              const ServiceIcon = srv.icon;
              return (
                <motion.div
                  key={srv.id}
                  initial={{ opacity: 0, y: 25, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="w-full flex"
                >
                  <div className="relative w-full group">
                    
                    {/* Ambient Glow */}
                    <div
                      className="absolute -inset-1.5 rounded-[34px] pointer-events-none z-0 opacity-35 transition-all duration-500 group-hover:opacity-85 blur-2xl"
                      style={{
                        background: `radial-gradient(circle at 50% 30%, ${srv.accentGlow}50 0%, ${srv.secondaryGlow}20 60%, transparent 80%)`,
                      }}
                    />

                    {/* 28px Glass Container */}
                    <div
                      onClick={() => handleOrderService(srv.title)}
                      className="relative w-full rounded-[28px] p-5 sm:p-6 flex flex-col justify-between cursor-pointer overflow-hidden z-10 ps-glass-reflection shadow-2xl border transition-all duration-400 group-hover:-translate-y-2.5"
                      style={{
                        background: srv.borderGradient,
                        borderColor: `${srv.accentGlow}60`,
                        boxShadow: `0 20px 50px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.15)`,
                      }}
                    >
                      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                      <span className="ps-shimmer absolute inset-0 rounded-[28px] overflow-hidden pointer-events-none" />

                      <div>
                        
                        {/* TOP BADGES ROW */}
                        <div className="flex items-center justify-between gap-1 w-full mb-4 relative z-10 min-h-[28px]">
                          <span
                            className="px-2 py-1 rounded-full text-[9.5px] sm:text-[10px] font-black uppercase tracking-wider border backdrop-blur-md shadow-sm shrink-0 flex items-center gap-1"
                            style={{
                              background: `${srv.accentGlow}25`,
                              borderColor: `${srv.accentGlow}60`,
                              color: "#FFFFFF",
                            }}
                          >
                            <span>🛠️</span>
                            <span>{srv.duration}</span>
                          </span>

                          <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[9.5px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase tracking-wider shrink-0">
                            {srv.badge}
                          </span>
                        </div>

                        {/* SERVICE ICON STAGE */}
                        <div className="flex justify-center my-3 relative z-10">
                          <div
                            className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl sm:rounded-3xl p-3 sm:p-4 flex items-center justify-center border shadow-2xl transition-transform duration-500 group-hover:scale-105"
                            style={{
                              background: `radial-gradient(circle, ${srv.accentGlow}40 0%, rgba(10, 12, 18, 0.98) 100%)`,
                              borderColor: `${srv.accentGlow}75`,
                              boxShadow: `0 12px 30px rgba(0,0,0,0.8), 0 0 25px ${srv.accentGlow}30`,
                            }}
                          >
                            <ServiceIcon size={44} style={{ color: srv.accentGlow === "#FFFFFF" ? "#00D1B2" : srv.accentGlow }} />
                          </div>
                        </div>

                        {/* SERVICE TITLE */}
                        <h3 className="font-display font-black text-lg sm:text-xl text-white tracking-tight leading-snug text-center mb-1.5 min-h-[46px] flex items-center justify-center relative z-10 group-hover:text-cyan-300 transition-colors">
                          {srv.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <p className="text-xs text-slate-300 text-center leading-relaxed font-body mb-3.5 line-clamp-2 px-1 relative z-10 min-h-[36px]">
                          {srv.description}
                        </p>

                        {/* FEATURE CHIPS */}
                        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-4 relative z-10">
                          {srv.features.map((feat, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-0.5 rounded-lg text-[10px] font-semibold text-slate-200 bg-white/[0.06] border border-white/10 flex items-center gap-1 backdrop-blur-md"
                            >
                              <Check size={11} className="text-emerald-400 shrink-0" />
                              <span className="truncate max-w-[125px]">{feat}</span>
                            </span>
                          ))}
                        </div>

                        {/* PRICE / NOTE AREA */}
                        <div className="flex flex-col items-center justify-center gap-0.5 mb-4 relative z-10 py-2 border-y border-white/10 bg-white/[0.03] rounded-2xl">
                          <span className="text-[11px] text-slate-400 font-mono tracking-wide">
                            {srv.priceNote}
                          </span>
                          <span className="text-2xl sm:text-3xl font-black font-display tracking-tight text-emerald-400">
                            {srv.price}
                          </span>
                        </div>

                      </div>

                      {/* BUTTON: Order via WhatsApp */}
                      <div className="w-full relative z-10 font-body">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOrderService(srv.title);
                          }}
                          className="w-full py-4 rounded-2xl text-sm font-black text-white flex items-center justify-center gap-2.5 transition-all duration-300 shadow-xl cursor-pointer h-[52px] min-h-[52px]"
                          style={{
                            background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                            boxShadow: "0 8px 25px rgba(37, 211, 102, 0.35)",
                          }}
                        >
                          <MessageCircle size={19} className="text-white shrink-0" />
                          <span className="tracking-wide text-white font-extrabold text-sm sm:text-base">{srv.ctaText}</span>
                        </button>
                      </div>

                    </div>

                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* BOTTOM GUARANTEE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-8 rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div className="flex items-start sm:items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center shrink-0">
              <Award size={30} className="text-blue-400 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-black uppercase text-blue-300 tracking-wider">Agency Guarantee</span>
                <span className="text-xs font-bold text-emerald-400">✓ 100% Satisfaction</span>
              </div>
              <h4 className="font-display text-base sm:text-lg font-black text-white">Need Custom Digital Marketing, Web App or Video Project?</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">Get in touch with our agency team for custom quotes, budget planning, and instant onboarding.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="https://www.amirads.pro/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-6 py-3.5 rounded-xl font-display font-extrabold text-xs text-white border border-blue-500/40 bg-blue-500/20 hover:bg-blue-500/35 transition-all flex items-center justify-center gap-2 cursor-pointer h-[48px] min-h-[48px]"
            >
              <span>Visit amirads.pro</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
});
