import { memo } from "react";
import { motion } from "framer-motion";
import { ExternalLink, MessageCircle, CheckCircle2, Globe, Rocket, TrendingUp, Target, BarChart3, Zap } from "lucide-react";

const META_FEATURES = [
  "High-ROAS Facebook & Instagram Ad Campaigns",
  "TikTok Ads Setup & Viral Audience Funnels",
  "Custom Audience Targeting & Retargeting Funnels",
  "Meta Pixel Setup, API Conversions & Analytics",
  "Creative Ad Copywriting & High-Converting Designs",
];

const ADS_STATS = [
  { label: "Target ROAS", val: "3.5X - 8.0X" },
  { label: "Ad Formats", val: "Meta + TikTok" },
  { label: "Reporting", val: "Real-Time Dashboard" },
];

const MetaAdsSection = memo(function MetaAdsSection() {
  const handleWhatsAppConsultation = () => {
    const text = encodeURIComponent(
      "Hi AmirAds, I saw your Meta & TikTok Ads section on Prime Tools Hub and I want to discuss Facebook/Instagram/TikTok advertising services for my business!"
    );
    window.open(`https://wa.me/923227157125?text=${text}`, "_blank");
  };

  return (
    <section id="meta-ads" className="relative py-16 px-4 sm:px-6 overflow-hidden bg-[#030307]">
      {/* Dynamic Radial Ambient Lights */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-radial from-blue-600/20 via-purple-900/15 to-transparent blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-[2px] overflow-hidden ps-gradient-border-anim shadow-[0_30px_70px_rgba(0,0,0,0.85),0_0_50px_rgba(59,130,246,0.3)]"
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
            {/* Moving Shimmer Beam */}
            <div className="ps-glass-shine-line absolute inset-y-0 w-40 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] pointer-events-none" />

            <div className="flex flex-col text-left relative z-10 max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/35 text-blue-300 font-black text-xs uppercase tracking-wider mb-3 w-max shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <Rocket size={15} className="text-blue-400 animate-bounce" />
                <span>META ADS & TIKTOK MARKETING SPECIALIST</span>
              </div>

              {/* Title */}
              <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-snug">
                Scale Your Business with Expert{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                  Meta & TikTok Ads
                </span>
              </h2>

              {/* Description */}
              <p className="mt-3 text-white/80 text-xs sm:text-sm leading-relaxed font-body">
                Need high-ROAS Facebook, Instagram & TikTok ad campaigns, targeted lead generation, or expert Meta Ads setup? We specialize in data-driven advertising strategies designed to scale e-commerce stores, digital agencies, and local services. From high-converting ad copy and custom audience targeting to pixel setup and budget scaling, get end-to-end Meta Ads management tailored for maximum ROI.
              </p>

              {/* Highlights grid */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {META_FEATURES.map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-white/90">
                    <CheckCircle2 size={15} className="text-blue-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Stat Pills */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {ADS_STATS.map((st) => (
                  <div key={st.label} className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-semibold text-white/85">
                    <span className="text-white/50 font-normal mr-1">{st.label}:</span>
                    <span className="text-emerald-400 font-extrabold">{st.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
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
    </section>
  );
});

export default MetaAdsSection;
