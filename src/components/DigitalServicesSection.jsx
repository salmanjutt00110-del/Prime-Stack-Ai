import { memo } from "react";
import { motion } from "framer-motion";
import {
  Globe, Megaphone, Sparkles, ExternalLink, MessageCircle,
  CheckCircle2, Flame, ShieldCheck, Tag, ArrowRight
} from "lucide-react";

const SERVICES = [
  {
    id: "web-dev",
    title: "Custom Website Creation & Web Development",
    badge: "🔥 50% OFF (First 2 Customers)",
    badgeColor: "#EF4444",
    priceNote: "Super Affordable & Pocket-Friendly Rates",
    image: "/website-creation-showcase.png",
    description: "Get a stunning, fast, and modern custom website designed to convert visitors into paying clients. From e-commerce stores to agency portfolios and digital landing pages, we build end-to-end responsive web applications.",
    features: [
      "50% OFF Special Launch Discount for First 2 Clients",
      "E-commerce, Portfolios & Custom Web Applications",
      "100% Mobile Responsive & Ultra-Fast Loading Speed",
      "Free Domain Setup & SEO Optimization Included",
    ],
    ctaText: "Claim 50% OFF Website Discount",
  },
  {
    id: "video-creation",
    title: "Professional Video Editing & TikTok Reel Creation",
    badge: "🎬 High-Converting Video Ads",
    badgeColor: "#EC4899",
    priceNote: "Engaging Content Built for Maximum Conversions",
    image: "/video-editing-showcase.png",
    description: "Drive sales and viral reach with high-converting video ads, TikTok reels, YouTube shorts, and promotional videos. We create polished visuals, motion graphics, AI voiceovers, and dynamic captions.",
    features: [
      "TikTok & Meta High-ROAS Video Ad Creatives",
      "Dynamic Captions, Sound Effects & Motion Graphics",
      "E-commerce Product Showcase Videos",
      "AI Voiceover Integration & Reel Formatting",
    ],
    ctaText: "Order Custom Video Editing",
  },
  {
    id: "ads-marketing",
    title: "Meta Ads & TikTok Ads Management",
    badge: "🚀 High ROAS Campaign Scaling",
    badgeColor: "#3B82F6",
    priceNote: "Data-Driven Advertising & Audience Targeting",
    description: "Scale your e-commerce store or digital agency with expert Meta Ads (Facebook & Instagram) and TikTok Ads management. We set up targeted funnels, pixel tracking, and ad copy optimized for high ROI.",
    features: [
      "Facebook, Instagram & TikTok Ad Setup",
      "Custom Audience Targeting & Retargeting Funnels",
      "Meta Pixel & TikTok Events API Tracking",
      "Continuous Campaign Scaling & ROAS Optimization",
    ],
    ctaText: "Consult for Ads Management",
  },
];

const DigitalServicesSection = memo(function DigitalServicesSection() {
  const handleOrderService = (serviceTitle) => {
    const text = encodeURIComponent(
      `Hi AmirAds / Prime Tools Hub, I am interested in your Digital Service: ${serviceTitle}. Please share pricing & details!`
    );
    window.open(`https://wa.me/923227157125?text=${text}`, "_blank");
  };

  return (
    <section id="agency-services" className="relative py-16 px-4 sm:px-6 overflow-hidden bg-[#040408]">
      {/* Glow Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[850px] h-[500px] bg-radial from-indigo-900/20 via-purple-900/10 to-transparent blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black bg-blue-500/15 border border-blue-500/35 text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.2)] mb-4"
          >
            <Sparkles size={14} className="text-blue-400 animate-spin" />
            <span>DIGITAL AGENCY & MARKETING SERVICES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black text-3xl sm:text-5xl tracking-tight text-white leading-tight"
          >
            Website Creation, Video Editing &{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              TikTok / Meta Ads
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-3 text-white/75 text-sm sm:text-base max-w-2xl mx-auto font-body"
          >
            Beyond premium AI accounts, we offer full digital growth solutions — from high-converting custom websites to video editing and targeted TikTok & Meta Ad campaigns.
          </motion.p>

          {/* TOP BUTTON TO VISIT AMIRADS WEBSITE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="https://www.amirads.pro/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-2xl font-display font-extrabold text-xs sm:text-sm text-white flex items-center gap-2.5 transition-all duration-300 hover:scale-[1.04] shadow-[0_0_25px_rgba(59,130,246,0.4)] cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)",
              }}
            >
              <Globe size={18} className="text-blue-200" />
              <span>Visit Official Website (amirads.pro)</span>
              <ExternalLink size={15} />
            </a>

            <div className="px-4 py-2 rounded-xl bg-red-500/15 border border-red-500/35 text-red-300 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 animate-pulse">
              <Flame size={14} className="text-red-400" />
              <span>50% OFF For First 2 Website Clients!</span>
            </div>
          </motion.div>
        </div>

        {/* SERVICES CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {SERVICES.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative rounded-3xl p-6 flex flex-col justify-between bg-[#090912]/90 border border-white/12 hover:border-white/25 transition-all duration-300 group hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
            >
              <div>
                {/* Image or Showcase Banner */}
                {srv.image ? (
                  <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-5 border border-white/10 group-hover:border-white/20 transition-all">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090912] via-transparent to-transparent" />
                    
                    {/* Badge on Image */}
                    <span
                      className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase border backdrop-blur-md shadow-md"
                      style={{
                        background: `${srv.badgeColor}25`,
                        borderColor: `${srv.badgeColor}60`,
                        color: "#FFFFFF",
                      }}
                    >
                      {srv.badge}
                    </span>
                  </div>
                ) : (
                  <div className="mb-4">
                    <span
                      className="px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase border inline-block"
                      style={{
                        background: `${srv.badgeColor}20`,
                        borderColor: `${srv.badgeColor}50`,
                        color: srv.badgeColor,
                      }}
                    >
                      {srv.badge}
                    </span>
                  </div>
                )}

                {/* Service Title */}
                <h3 className="font-display font-black text-xl text-white tracking-tight leading-snug mb-2">
                  {srv.title}
                </h3>

                {/* Price Guarantee */}
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20 mb-3">
                  <Tag size={12} />
                  <span>{srv.priceNote}</span>
                </div>

                {/* Description */}
                <p className="text-white/75 text-xs leading-relaxed font-body mb-4">
                  {srv.description}
                </p>

                {/* Feature Bullet Points */}
                <div className="space-y-2 border-t border-white/8 pt-4 mb-6">
                  {srv.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs text-white/85 font-medium">
                      <CheckCircle2 size={15} className="text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action CTA Button */}
              <button
                onClick={() => handleOrderService(srv.title)}
                className="w-full py-3.5 rounded-xl font-display font-extrabold text-xs text-white flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer shadow-md"
                style={{
                  background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                }}
              >
                <MessageCircle size={16} />
                <span>{srv.ctaText}</span>
                <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* AGENCY GUARANTEE BANNER */}
        <div className="p-6 rounded-2xl border border-blue-500/25 bg-blue-500/5 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <ShieldCheck size={28} className="text-blue-400 shrink-0" />
            <div>
              <h4 className="font-display text-sm font-bold text-white">Need Custom Digital Marketing or Development?</h4>
              <p className="text-xs text-white/70">Contact our AmirAds agency team for personalized web development, TikTok campaigns & video editing packages.</p>
            </div>
          </div>

          <a
            href="https://www.amirads.pro/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-blue-300 border border-blue-500/40 hover:bg-blue-500/20 transition-all shrink-0 flex items-center gap-1.5"
          >
            <span>Visit amirads.pro</span>
            <ExternalLink size={13} />
          </a>
        </div>

      </div>
    </section>
  );
});

export default DigitalServicesSection;
