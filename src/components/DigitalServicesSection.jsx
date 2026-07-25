import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe, Video, Megaphone, Sparkles, ExternalLink, MessageCircle,
  CheckCircle2, Flame, ShieldCheck, Tag, ArrowRight, Zap, Star, Award, Layers,
  Rocket, TrendingUp, Target, BarChart3, Clock
} from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "✨ All Agency Services", icon: Layers },
  { id: "web-dev", label: "🌐 Web Development (50% OFF)", icon: Globe },
  { id: "video", label: "🎬 Video & Reels Editing", icon: Video },
  { id: "ads", label: "🚀 Meta & TikTok Ads", icon: Megaphone },
];

const SERVICES = [
  {
    id: "web-dev",
    category: "web-dev",
    title: "Custom Website Creation & Web Development",
    subtitle: "High-Converting, Ultra-Fast & Mobile Responsive Websites",
    badge: "🔥 50% OFF (FIRST 2 CLIENTS)",
    badgeColor: "#EF4444",
    themeColor: "indigo",
    accentGlow: "rgba(99, 102, 241, 0.35)",
    borderGradient: "linear-gradient(135deg, rgba(239,68,68,0.9), rgba(99,102,241,0.85), rgba(168,85,247,0.9))",
    priceNote: "Special Pocket-Friendly Agency Rates — 50% Discount",
    image: "/website-creation-showcase.png",
    description: "Get a high-converting, modern custom website engineered to turn visitors into paying customers. From e-commerce storefronts to agency portfolios, landing pages, and web applications.",
    features: [
      "🔥 Flat 50% OFF Discount for First 2 Customers",
      "E-Commerce, Portfolios & Custom Web Applications",
      "100% Mobile Responsive & Lightning-Fast Performance",
      "Free Domain Setup, Hosting Config & Technical SEO",
      "Interactive UI/UX with Modern Glassmorphism Design",
    ],
    stats: [
      { label: "Discount", val: "50% OFF" },
      { label: "Turnaround", val: "3-5 Days" },
      { label: "Rating", val: "5.0 ★" },
    ],
    ctaText: "Claim 50% OFF Website Offer",
    highlight: true,
  },
  {
    id: "video-creation",
    category: "video",
    title: "Professional Video Editing & TikTok Reel Creation",
    subtitle: "Viral Social Content & High-ROAS Video Ad Creatives",
    badge: "🎬 HIGH-CONVERTING VIRAL ADS",
    badgeColor: "#EC4899",
    themeColor: "pink",
    accentGlow: "rgba(236, 72, 153, 0.35)",
    borderGradient: "linear-gradient(135deg, rgba(236,72,153,0.9), rgba(168,85,247,0.85), rgba(6,182,212,0.9))",
    priceNote: "Engaging Content Built to Skyrocket Retention & ROAS",
    image: "/video-editing-showcase.png",
    description: "Skyrocket sales and audience engagement with high-impact video ads, TikTok reels, YouTube shorts, and product promos featuring motion graphics, punchy captions, and AI voiceovers.",
    features: [
      "TikTok, Instagram & Meta High-ROAS Video Ad Creatives",
      "Dynamic Subtitles, Sound FX & Smooth Motion Graphics",
      "E-Commerce Product Showcase & Unboxing Video Edits",
      "AI Voiceover Sync & Vertical Reel Format Optimization",
      "Hook-Oriented Editing to Maximize Viewer Retention",
    ],
    stats: [
      { label: "Format", val: "4K 60FPS" },
      { label: "Delivery", val: "24-48 Hrs" },
      { label: "ROAS Impact", val: "+300% ROAS" },
    ],
    ctaText: "Order Custom Video Editing",
    highlight: false,
  },
  {
    id: "ads-marketing",
    category: "ads",
    title: "Meta Ads & TikTok Ads Campaign Management",
    subtitle: "Data-Driven Advertising & Targeted Audience Funnels",
    badge: "🚀 HIGH ROAS CAMPAIGN SCALING",
    badgeColor: "#3B82F6",
    themeColor: "blue",
    accentGlow: "rgba(59, 130, 246, 0.35)",
    borderGradient: "linear-gradient(135deg, rgba(59,130,246,0.9), rgba(16,185,129,0.85), rgba(139,92,246,0.9))",
    priceNote: "Targeted Funnels & Budget Optimization",
    image: "/ads-marketing-showcase.png",
    description: "Scale your e-commerce brand or agency with profitable Meta (Facebook & Instagram) and TikTok ad campaigns. We build custom audience funnels, setup pixel tracking, and continuously scale winning ads.",
    features: [
      "Facebook, Instagram & TikTok Ad Campaign Setup",
      "Custom Audience Targeting & Laser Retargeting Funnels",
      "Meta Pixel & TikTok Events API Conversion Setup",
      "High-Converting Copywriting & Creative Ad Designs",
      "Weekly ROAS Reporting & Continuous Optimization",
    ],
    stats: [
      { label: "Platforms", val: "Meta + TikTok" },
      { label: "Strategy", val: "Full Funnel" },
      { label: "Target ROAS", val: "3.5X - 8.0X" },
    ],
    ctaText: "Consult for Ads Management",
    highlight: false,
  },
];

const DigitalServicesSection = memo(function DigitalServicesSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredServices = activeTab === "all" 
    ? SERVICES 
    : SERVICES.filter((s) => s.category === activeTab);

  const handleOrderService = (serviceTitle) => {
    const text = encodeURIComponent(
      `Hi AmirAds / Prime Tools Hub, I am interested in your Digital Service: ${serviceTitle}. Please share pricing & details!`
    );
    window.open(`https://wa.me/923227157125?text=${text}`, "_blank");
  };

  const handleWhatsAppConsultation = () => {
    const text = encodeURIComponent(
      "Hi AmirAds, I saw your Meta & TikTok Ads agency section on Prime Tools Hub and I want to discuss advertising & growth services for my business!"
    );
    window.open(`https://wa.me/923227157125?text=${text}`, "_blank");
  };

  return (
    <section id="agency-services" className="relative py-24 px-4 sm:px-6 overflow-hidden bg-[#030307] scroll-mt-20">
      {/* Background Radial Ambient Glow Lights */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[950px] h-[600px] bg-radial from-indigo-900/30 via-purple-900/18 to-transparent blur-[160px]" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-radial from-pink-600/18 to-transparent blur-[140px]" />
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-radial from-blue-600/18 to-transparent blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-black bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-pink-500/15 border border-blue-500/35 text-blue-300 shadow-[0_0_25px_rgba(59,130,246,0.3)] mb-4"
          >
            <Sparkles size={15} className="text-blue-400 animate-spin" />
            <span className="tracking-wider uppercase">AMIRADS DIGITAL AGENCY SERVICES</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight"
          >
            Website Creation, Video Editing &{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent ps-text-3d">
              Meta / TikTok Ads
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-white/80 text-sm sm:text-base max-w-2xl mx-auto font-body leading-relaxed"
          >
            Empower your online business with full-stack digital solutions — custom high-converting web apps, viral video reel editing, and targeted Meta & TikTok ad scaling.
          </motion.p>

          {/* ACTION BUTTON & PROMO DISCOUNT CALLOUT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="https://www.amirads.pro/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-2xl font-display font-extrabold text-xs sm:text-sm text-white flex items-center gap-3 transition-all duration-300 hover:scale-[1.05] active:scale-95 shadow-[0_0_35px_rgba(59,130,246,0.45)] cursor-pointer group"
              style={{
                background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
              }}
            >
              <Globe size={18} className="text-blue-200 group-hover:rotate-12 transition-transform" />
              <span>Visit Official Agency Website (amirads.pro)</span>
              <ExternalLink size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <div className="px-5 py-3 rounded-2xl bg-gradient-to-r from-red-500/20 via-pink-500/20 to-purple-500/20 border border-red-500/40 text-red-300 text-xs sm:text-sm font-black uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(239,68,68,0.25)]">
              <Flame size={16} className="text-red-400 animate-bounce" />
              <span>🔥 50% OFF For First 2 Website Clients!</span>
              <span className="px-2 py-0.5 rounded-full bg-red-500/30 text-[10px] text-white font-bold">LIMITED SLOTS</span>
            </div>
          </motion.div>

          {/* CATEGORY TABS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 inline-flex flex-wrap items-center justify-center p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-2xl gap-1.5 shadow-2xl"
          >
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-extrabold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg scale-[1.03]"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={15} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* SERVICES CARDS GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          >
            {filteredServices.map((srv, idx) => (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`relative rounded-3xl p-[1.5px] overflow-hidden group transition-all duration-500 ${
                  srv.highlight
                    ? "shadow-[0_20px_60px_rgba(239,68,68,0.25)]"
                    : "shadow-[0_15px_45px_rgba(0,0,0,0.6)]"
                }`}
                style={{
                  background: srv.borderGradient,
                }}
              >
                <div
                  className="w-full h-full rounded-[22.5px] p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between"
                  style={{
                    background: "linear-gradient(135deg, rgba(14, 11, 26, 0.96) 0%, rgba(7, 7, 14, 0.98) 100%)",
                    backdropFilter: "blur(30px)",
                  }}
                >
                  {/* Hover Shine Effect */}
                  <div className="ps-glass-shine-line absolute inset-y-0 w-36 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] pointer-events-none group-hover:translate-x-full transition-transform duration-1000" />

                  <div>
                    {/* Image Banner */}
                    <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-6 border border-white/12 group-hover:border-white/25 transition-all shadow-inner">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b1a] via-transparent to-black/30" />
                      
                      {/* Floating Badge on Image */}
                      <span
                        className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase border backdrop-blur-md shadow-lg flex items-center gap-1.5"
                        style={{
                          background: "rgba(10, 10, 18, 0.85)",
                          borderColor: srv.badgeColor,
                          color: "#FFFFFF",
                        }}
                      >
                        <Zap size={12} style={{ color: srv.badgeColor }} className="animate-pulse" />
                        <span>{srv.badge}</span>
                      </span>

                      {/* Stat Pills */}
                      <div className="absolute bottom-3 inset-x-3 flex items-center justify-between gap-2 px-3 py-1.5 rounded-xl bg-black/65 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white/90">
                        {srv.stats.map((st) => (
                          <div key={st.label} className="text-center">
                            <span className="text-white/50 block text-[8px] uppercase">{st.label}</span>
                            <span className="text-emerald-400 font-extrabold">{st.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Service Header */}
                    <div className="mb-3">
                      <span className="text-[10px] font-black uppercase tracking-widest text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded border border-purple-500/20 inline-block mb-2">
                        {srv.subtitle}
                      </span>
                      <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight leading-snug">
                        {srv.title}
                      </h3>
                    </div>

                    {/* Price & Offer Note */}
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/25 mb-4">
                      <Tag size={13} className="text-emerald-400" />
                      <span>{srv.priceNote}</span>
                    </div>

                    {/* Description */}
                    <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-body mb-5">
                      {srv.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2.5 border-t border-white/10 pt-4 mb-6">
                      {srv.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2.5 text-xs text-white/90 font-medium">
                          <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Order CTA Button */}
                  <button
                    onClick={() => handleOrderService(srv.title)}
                    className="w-full py-4 rounded-2xl font-display font-extrabold text-xs sm:text-sm text-white flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer shadow-[0_0_25px_rgba(37,211,102,0.35)]"
                    style={{
                      background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                    }}
                  >
                    <MessageCircle size={18} />
                    <span>{srv.ctaText}</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* DEDICATED META ADS & TIKTOK ADVERTISING SPOTLIGHT SECTION */}
        <div id="meta-ads" className="scroll-mt-24 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl p-[2px] overflow-hidden ps-gradient-border-anim shadow-[0_30px_70px_rgba(0,0,0,0.85),0_0_50px_rgba(59,130,246,0.35)]"
            style={{
              background:
                "linear-gradient(135deg, rgba(59,130,246,0.95), rgba(147,51,234,0.9), rgba(236,72,153,0.95))",
            }}
          >
            <div
              className="w-full rounded-[22px] p-6 sm:p-10 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8"
              style={{
                background:
                  "linear-gradient(135deg, rgba(12, 14, 30, 0.97) 0%, rgba(6, 7, 16, 0.99) 100%)",
                backdropFilter: "blur(30px)",
              }}
            >
              {/* Shimmer line */}
              <div className="ps-glass-shine-line absolute inset-y-0 w-40 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] pointer-events-none" />

              <div className="flex flex-col text-left relative z-10 max-w-3xl">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/35 text-blue-300 font-black text-xs uppercase tracking-wider mb-3 w-max shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                  <Rocket size={15} className="text-blue-400 animate-bounce" />
                  <span>META ADS & TIKTOK ADVERTISING SPECIALIST</span>
                </div>

                {/* Title */}
                <h3 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-snug">
                  Scale Your E-Commerce Store & Agency with{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                    Meta & TikTok Ads
                  </span>
                </h3>

                {/* Description */}
                <p className="mt-3 text-white/80 text-xs sm:text-sm leading-relaxed font-body">
                  Maximize your Return on Ad Spend (ROAS) with high-converting Facebook, Instagram & TikTok advertising campaigns. We engineer targeted sales funnels, setup Meta Pixel & Conversion API, write compelling ad copy, and scale winning campaigns.
                </p>

                {/* Highlights grid */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "High-ROAS Facebook & Instagram Ad Campaigns",
                    "TikTok Ads Setup & Viral Audience Funnels",
                    "Custom Audience Targeting & Retargeting",
                    "Meta Pixel Setup, API Conversions & Analytics",
                    "Creative Ad Copywriting & High-Converting Designs",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-white/90">
                      <CheckCircle2 size={15} className="text-blue-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Stat Pills */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {[
                    { label: "Target ROAS", val: "3.5X - 8.0X" },
                    { label: "Platforms", val: "Meta + TikTok" },
                    { label: "Reporting", val: "Real-Time Tracking" },
                  ].map((st) => (
                    <div key={st.label} className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-semibold text-white/85">
                      <span className="text-white/50 font-normal mr-1">{st.label}:</span>
                      <span className="text-emerald-400 font-extrabold">{st.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="relative z-10 shrink-0 w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col gap-3.5">
                <a
                  href="https://www.amirads.pro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full lg:w-64 px-6 py-4 rounded-2xl font-display font-extrabold text-xs sm:text-sm text-white flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.05] active:scale-95 shadow-[0_0_35px_rgba(59,130,246,0.45)] cursor-pointer group"
                  style={{
                    background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
                  }}
                >
                  <Globe size={18} className="text-blue-200" />
                  <span>Visit AmirAds Website</span>
                  <ExternalLink size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <button
                  onClick={handleWhatsAppConsultation}
                  className="w-full lg:w-64 px-6 py-4 rounded-2xl font-display font-extrabold text-xs sm:text-sm text-white flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.05] active:scale-95 border border-emerald-500/40 bg-emerald-500/15 hover:bg-emerald-500/25 shadow-[0_0_25px_rgba(37,211,102,0.25)] cursor-pointer"
                >
                  <MessageCircle size={18} className="text-emerald-400" />
                  <span>Ads Campaign Consultation</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM GUARANTEE & CUSTOM CONSULTATION CARD */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-8 rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-start sm:items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center shrink-0">
              <ShieldCheck size={30} className="text-blue-400 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-black uppercase text-blue-300 tracking-wider">Agency Guarantee</span>
                <span className="text-xs font-bold text-emerald-400">✓ 100% Satisfaction</span>
              </div>
              <h4 className="font-display text-base sm:text-lg font-black text-white">Need Custom Digital Marketing, Web App or Video Project?</h4>
              <p className="text-xs sm:text-sm text-white/75 mt-0.5">Get in touch with our agency team for custom quotes, budget planning, and instant onboarding.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="https://www.amirads.pro/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-6 py-3.5 rounded-xl font-display font-extrabold text-xs text-white border border-blue-500/40 bg-blue-500/15 hover:bg-blue-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
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

export default DigitalServicesSection;
