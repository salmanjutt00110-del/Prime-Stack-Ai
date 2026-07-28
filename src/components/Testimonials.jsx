import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Animated3DText from "@/components/Animated3DText";

const REVIEWS = [
  { name: "Ahmed Raza", role: "Content Creator", text: "Got my ChatGPT Plus within 5 minutes. Super smooth process and the WhatsApp support was incredibly fast. Highly recommend Prime Tools Hub!", rating: 5, color: "#10A37F", product: "ChatGPT Plus", country: "🇵🇰 Pakistan" },
  { name: "Sana Khan", role: "Freelance Designer", text: "Canva Pro for 3 years at this price is unbeatable. Instant invitation link, all AI features unlocked. 100% trusted seller.", rating: 5, color: "#7D2AE8", product: "Canva Pro", country: "🇵🇰 Pakistan" },
  { name: "Bilal Ahmed", role: "Digital Marketer", text: "Bought the Gemini Pro 18-month plan. 5TB cloud storage and Veo video credits on my personal Gmail. Best AI marketplace in Pakistan.", rating: 5, color: "#4285F4", product: "Google Gemini Pro", country: "🇦🇪 UAE" },
  { name: "Hiba Noor", role: "Student", text: "CapCut Pro works perfectly for my TikTok reels. No watermarks and full pro transitions. Fast delivery!", rating: 5, color: "#FE2C55", product: "CapCut Pro", country: "🇵🇰 Pakistan" },
  { name: "Usman Tariq", role: "Startup Founder", text: "SuperGrok 12 months premium is fast and stable. The team guided me through setup. Genuinely 100M+ luxury service.", rating: 5, color: "#1DA1F2", product: "SuperGrok Premium", country: "🇬🇧 UK" },
  { name: "Mariam J.", role: "TikTok Creator", text: "Activated the Creator Growth Challenge on my USA account smoothly. Genuine service and full policy compliance.", rating: 5, color: "#FE2C55", product: "TikTok Creator Growth", country: "🇺🇸 USA" },
  { name: "Faisal Iqbal", role: "Video Editor", text: "Veo 3 gave me 45,000 credits for high quality video generation. Unbeatable price and quick setup support.", rating: 5, color: "#06B6D4", product: "Google Veo 3", country: "🇵🇰 Pakistan" },
  { name: "Zainab A.", role: "Freelancer", text: "Surfshark VPN 1 year activated instantly with the redeem key. High-speed streaming and global privacy.", rating: 5, color: "#1C9FE8", product: "Surfshark VPN", country: "🇵🇰 Pakistan" },
  { name: "Hamza Sheikh", role: "UI/UX Designer", text: "Extremely fast service. Got my Canva Pro account within 10 minutes. The design templates are fully unlocked.", rating: 5, color: "#7D2AE8", product: "Canva Pro", country: "🇵🇰 Pakistan" },
  { name: "Ayesha Malik", role: "Blogger", text: "Highly satisfied with ChatGPT Plus. Instant activation on my own account. Will definitely purchase again.", rating: 5, color: "#10A37F", product: "ChatGPT Plus", country: "🇵🇰 Pakistan" },
  { name: "Zarrar Shah", role: "Software Engineer", text: "Got Grok access for coding. The support is highly professional and resolved my login issues immediately.", rating: 5, color: "#1DA1F2", product: "SuperGrok Premium", country: "🇬🇧 UK" },
  { name: "Omer Farooq", role: "Agency Owner", text: "Activated Gemini Advanced with 5TB storage. Perfect for my team's cloud storage and AI writing needs.", rating: 5, color: "#4285F4", product: "Google Gemini Pro", country: "🇦🇪 UAE" },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 250 : -250,
    opacity: 0,
    rotateY: direction > 0 ? 30 : -30,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 280,
      damping: 22,
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 250 : -250,
    opacity: 0,
    rotateY: direction < 0 ? 30 : -30,
    scale: 0.9,
    transition: {
      duration: 0.25,
    },
  }),
};

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % REVIEWS.length);
      }, 4000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered]);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const activeReview = REVIEWS[index];

  return (
    <section id="reviews" className="relative py-24 px-4 sm:px-6 overflow-hidden bg-[#030712] border-t border-white/5 scroll-mt-20">
      <div className="mx-auto max-w-5xl relative z-10">
        
        {/* SECTION HEADER ROW matching reference screenshot */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-purple-400 font-bold text-lg">✦</span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
              What Our <span className="ps-grad-text bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Customers Say</span>
            </h2>
          </div>

          <a
            href="/reviews"
            className="text-xs sm:text-sm font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
          >
            <span>View All Reviews</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Carousel Container */}
        <div
          className="relative min-h-[380px] sm:min-h-[320px] flex items-center justify-center"
          style={{ perspective: 1200, transformStyle: "preserve-3d" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.8}
              onDragEnd={(e, { offset }) => {
                const swipeThreshold = 50;
                if (Math.abs(offset.x) > swipeThreshold) {
                  if (offset.x > 0) {
                    handlePrev();
                  } else {
                    handleNext();
                  }
                }
              }}
              className="absolute w-full max-w-2xl cursor-grab active:cursor-grabbing"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="ps-luxury-glass ps-glass-reflection rounded-[32px] p-8 sm:p-10 border relative overflow-hidden"
                style={{
                  borderColor: `${activeReview.color}60`,
                  background: "linear-gradient(135deg, rgba(16, 18, 30, 0.94) 0%, rgba(8, 9, 18, 0.98) 100%)",
                  boxShadow: `0 30px 70px rgba(0, 0, 0, 0.85), 0 0 50px ${activeReview.color}25`,
                }}
              >
                {/* Brand ambient glow */}
                <div
                  className="absolute inset-0 -z-10 rounded-[32px] pointer-events-none transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${activeReview.color}15, transparent 70%)`,
                  }}
                />

                {/* Quote Icon */}
                <Quote
                  className="absolute top-8 right-8 text-white/10 pointer-events-none"
                  size={56}
                />

                {/* Badges: Star Rating + Verified Buyer + Country */}
                <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: activeReview.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        size={18}
                        className="text-yellow-400 fill-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]"
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 flex items-center gap-1">
                      <ShieldCheck size={12} />
                      Verified Buyer
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/10 border border-white/15 text-slate-200">
                      {activeReview.country}
                    </span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-white text-base sm:text-lg leading-relaxed mb-8 italic font-body">
                  "{activeReview.text}"
                </p>

                {/* User Info Footer */}
                <div className="flex items-center justify-between flex-wrap gap-4 pt-5 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    {/* User Avatar */}
                    <div
                      className="flex items-center justify-center rounded-2xl text-white font-extrabold text-lg shrink-0 border shadow-lg"
                      style={{
                        width: 48,
                        height: 48,
                        background: `linear-gradient(135deg, ${activeReview.color}, #8B5CF6)`,
                        borderColor: `${activeReview.color}80`,
                        boxShadow: `0 8px 20px ${activeReview.color}35`,
                      }}
                    >
                      {activeReview.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-white text-base font-bold">
                        {activeReview.name}
                      </h3>
                      <p className="text-slate-400 text-xs mt-0.5 font-medium">
                        {activeReview.role}
                      </p>
                    </div>
                  </div>

                  {/* Purchased Product Tag */}
                  <span
                    className="inline-block px-3.5 py-1.5 rounded-full text-xs font-black border"
                    style={{
                      background: `${activeReview.color}25`,
                      borderColor: `${activeReview.color}50`,
                      color: activeReview.color,
                      boxShadow: `0 4px 14px ${activeReview.color}15`,
                    }}
                  >
                    {activeReview.product}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div className="mt-10 flex items-center justify-between max-w-2xl mx-auto px-4 relative z-20">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full flex items-center justify-center border border-white/20 hover:border-white/40 bg-white/10 hover:bg-white/20 text-white transition-all duration-300 active:scale-90 min-w-[48px] min-h-[48px] cursor-pointer shadow-lg"
            aria-label="Previous Review"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-1.5 max-w-[220px] overflow-hidden py-2 px-1">
            {REVIEWS.map((_, i) => {
              const distance = Math.abs(i - index);
              if (distance > 3) return null;
              
              return (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className="min-w-[28px] min-h-[44px] flex items-center justify-center py-2 transition-transform active:scale-95 cursor-pointer"
                  aria-label={`Go to review ${i + 1}`}
                >
                  <span
                    className="block rounded-full transition-all duration-300"
                    style={{
                      width: i === index ? 20 : 7,
                      height: 7,
                      background:
                        i === index
                          ? activeReview.color
                          : "rgba(255,255,255,0.25)",
                    }}
                  />
                </button>
              );
            })}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full flex items-center justify-center border border-white/20 hover:border-white/40 bg-white/10 hover:bg-white/20 text-white transition-all duration-300 active:scale-90 min-w-[48px] min-h-[48px] cursor-pointer shadow-lg"
            aria-label="Next Review"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Counter */}
        <div className="text-center mt-6 text-slate-400 text-xs font-semibold select-none">
          Showing review {index + 1} of {REVIEWS.length}
        </div>
      </div>
    </section>
  );
}