import { memo } from "react";
import { motion } from "framer-motion";
import { ExternalLink, MessageCircle, CheckCircle2, Globe, Rocket } from "lucide-react";

const META_FEATURES = [
  "High-ROAS Facebook & Instagram Ad Campaigns",
  "Custom Audience Targeting & Retargeting Funnels",
  "Meta Pixel Setup, API Conversions & Analytics",
  "Creative Ad Copywriting & High-Converting Designs",
];

const MetaAdsSection = memo(function MetaAdsSection() {
  const handleWhatsAppConsultation = () => {
    const text = encodeURIComponent(
      "Hi AmirAds, I saw your Meta Ads section on Prime Tools Hub and I want to discuss Facebook/Instagram advertising services for my business!"
    );
    window.open(`https://wa.me/923227157125?text=${text}`, "_blank");
  };

  return (
    <section id="meta-ads" className="relative py-14 px-4 sm:px-6 overflow-hidden bg-[#050508]">
      {/* Dynamic Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-radial from-blue-600/15 via-indigo-900/10 to-transparent blur-[130px]" />
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-[2px] overflow-hidden ps-gradient-border-anim shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(59,130,246,0.2)]"
          style={{
            background:
              "linear-gradient(135deg, rgba(59,130,246,0.9), rgba(147,51,234,0.8), rgba(236,72,153,0.9))",
          }}
        >
          <div
            className="w-full rounded-[22px] p-6 sm:p-10 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8"
            style={{
              background:
                "linear-gradient(135deg, rgba(12, 15, 29, 0.96) 0%, rgba(7, 8, 16, 0.98) 100%)",
              backdropFilter: "blur(30px)",
            }}
          >
            {/* Shimmer light pass */}
            <div className="ps-glass-shine-line absolute inset-y-0 w-36 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] pointer-events-none" />

            <div className="flex flex-col text-left relative z-10 max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/35 text-blue-300 font-extrabold text-xs uppercase tracking-wider mb-3 w-max shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <Rocket size={14} className="text-blue-400 animate-bounce" />
                <span>META ADS & DIGITAL MARKETING SERVICES</span>
              </div>

              {/* Title */}
              <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight leading-snug">
                Scale Your Business with Expert{" "}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-pink-400 bg-clip-text text-transparent">
                  Meta Ads Campaigns
                </span>
              </h2>

              {/* Description (3-4 lines as requested in user voice prompt) */}
              <p className="mt-3 text-white/80 text-xs sm:text-sm leading-relaxed font-body">
                Need high-ROAS Facebook & Instagram ad campaigns, targeted lead generation, or expert Meta Ads setup? We specialize in data-driven advertising strategies designed to scale e-commerce stores, digital agencies, and service businesses. From high-converting ad copy and custom audience targeting to pixel setup and budget scaling, get end-to-end Meta Ads management tailored for maximum ROI.
              </p>

              {/* Highlights grid */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {META_FEATURES.map((feat) => (
                  <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-white/85">
                    <CheckCircle2 size={15} className="text-blue-400 shrink-0" />
                    <span>{feat}</span>
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
                className="w-full lg:w-64 px-6 py-3.5 rounded-2xl font-display font-extrabold text-xs sm:text-sm text-white flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.04] active:scale-95 shadow-[0_0_30px_rgba(59,130,246,0.4)] cursor-pointer group"
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
                className="w-full lg:w-64 px-6 py-3.5 rounded-2xl font-display font-extrabold text-xs sm:text-sm text-white flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.04] active:scale-95 border border-emerald-500/40 bg-emerald-500/15 hover:bg-emerald-500/25 shadow-[0_0_20px_rgba(37,211,102,0.2)] cursor-pointer"
              >
                <MessageCircle size={18} className="text-emerald-400" />
                <span>Meta Ads Consultation</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default MetaAdsSection;
