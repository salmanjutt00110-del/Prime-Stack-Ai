import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Animated3DText from "@/components/Animated3DText";

const REVIEWS = [
  { name: "Ahmed Raza", role: "Content Creator", text: "Got my ChatGPT Plus within minutes. Super smooth process and the support was incredibly helpful. Highly recommend PrimeStack!", rating: 5, color: "#10A37F", product: "ChatGPT Plus" },
  { name: "Sana Khan", role: "Freelance Designer", text: "Canva Pro for 3 years at this price is unbeatable. Activation was instant and everything works perfectly. Trusted seller for sure.", rating: 5, color: "#7D2AE8", product: "Canva Pro" },
  { name: "Bilal Ahmed", role: "Digital Marketer", text: "Bought the Gemini Pro 18-month plan. Premium quality, fast delivery, and genuine access. The best AI marketplace in Pakistan.", rating: 5, color: "#4285F4", product: "Google Gemini Pro" },
  { name: "Hiba Noor", role: "Student", text: "CapCut Pro works perfectly for my reels and edits. Export without watermark is a game changer. Quick delivery too!", rating: 5, color: "#FE2C55", product: "CapCut Pro" },
  { name: "Usman Tariq", role: "Startup Founder", text: "SuperGrok 12 months premium is stable and fast. The team guided me through 2FA setup. Genuinely premium service.", rating: 5, color: "#1DA1F2", product: "SuperGrok Premium" },
  { name: "Mariam J.", role: "TikTok Creator", text: "They activated the Creator Growth Challenge on my USA account smoothly. Honest, fast, and exactly as described.", rating: 5, color: "#FE2C55", product: "TikTok Creator Growth" },
  { name: "Faisal Iqbal", role: "Video Editor", text: "Veo 3 gave me 45,000 credits and unlimited video generation. Best price I've found anywhere. Will buy again.", rating: 5, color: "#06B6D4", product: "Google Veo 3" },
  { name: "Zainab A.", role: "Freelancer", text: "Surfshark VPN 1 year activated instantly with the redeem code. Streaming is fast and secure. Great experience overall.", rating: 5, color: "#1C9FE8", product: "Surfshark VPN" },
  { name: "Hamza Sheikh", role: "UI/UX Designer", text: "Extremely fast service. Got my Canva Pro account within 10 minutes. The design templates are fully unlocked.", rating: 5, color: "#7D2AE8", product: "Canva Pro" },
  { name: "Ayesha Malik", role: "Blogger", text: "Highly satisfied with ChatGPT Plus. Instant activation on my own account. Will definitely purchase again.", rating: 5, color: "#10A37F", product: "ChatGPT Plus" },
  { name: "Zarrar Shah", role: "Software Engineer", text: "Got Grok access for coding. The support is highly professional and resolved my login issues immediately.", rating: 5, color: "#1DA1F2", product: "SuperGrok Premium" },
  { name: "Nimra Khan", role: "Digital Creator", text: "No more watermarks or restricted effects. The account is working perfectly. Best price in town!", rating: 5, color: "#FE2C55", product: "CapCut Pro" },
  { name: "Omer Farooq", role: "Agency Owner", text: "Activated Gemini Advanced with 5TB storage. Perfect for my team's cloud storage and AI writing needs.", rating: 5, color: "#4285F4", product: "Google Gemini Pro" },
  { name: "Sadia Batool", role: "Student", text: "Cheap and genuine. Being a student, this Canva Pro deal saved me so much money. Instant activation.", rating: 5, color: "#7D2AE8", product: "Canva Pro" },
  { name: "Ali Raza", role: "Dropshipper", text: "Fast activation of US TikTok growth account. Got access to TikTok Shop and Creator program. Trusted guys!", rating: 5, color: "#FE2C55", product: "TikTok Creator Growth" },
  { name: "Fatima Zahra", role: "Social Media Manager", text: "Using it for my client accounts. No lag, no activation issues. The support is always available.", rating: 5, color: "#FE2C55", product: "CapCut Pro" },
  { name: "Mustafa Ali", role: "Tech Enthusiast", text: "Video generation credits are stable. Generating highly realistic videos for my faceless YouTube channel.", rating: 5, color: "#06B6D4", product: "Google Veo 3" },
  { name: "Maryam Nisar", role: "Freelance Writer", text: "Writing blogs has become so much easier with ChatGPT Plus. Unbelievable response time and prompt activation.", rating: 5, color: "#10A37F", product: "ChatGPT Plus" },
  { name: "Waqas Khan", role: "Cybersecurity Specialist", text: "Genuine Surfshark key. Fast speeds and connects on multiple devices. Best VPN service.", rating: 5, color: "#1C9FE8", product: "Surfshark VPN" },
  { name: "Kiran Shahzadi", role: "E-commerce Seller", text: "Making social media posts for my brand is so much easier. Genuine Canva Pro invitation. Highly recommended!", rating: 5, color: "#7D2AE8", product: "Canva Pro" },
  { name: "Daniyal Asif", role: "Vlogger", text: "Amazing service! CapCut Pro editing features work flawlessly on my desktop. Thank you PrimeStack!", rating: 5, color: "#FE2C55", product: "CapCut Pro" },
  { name: "Zain ul Abideen", role: "SEO Expert", text: "Advanced Gemini helps with deep analysis. The 18-month plan is a steal. Instant activation.", rating: 5, color: "#4285F4", product: "Google Gemini Pro" },
  { name: "Sarah Joseph", role: "English Teacher", text: "Excellent customer service on WhatsApp. Guided me step-by-step through the iCloud activation.", rating: 5, color: "#10A37F", product: "ChatGPT Plus" },
  { name: "Haris Mehmood", role: "Graphic Artist", text: "Fully premium assets are accessible now. The delivery took just 5 minutes. Outstanding seller!", rating: 5, color: "#7D2AE8", product: "Canva Pro" },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
    rotateY: direction > 0 ? 35 : -35,
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
    x: direction < 0 ? 200 : -200,
    opacity: 0,
    rotateY: direction < 0 ? 35 : -35,
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

  // Autoplay functionality: swap review every 3 seconds
  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % REVIEWS.length);
      }, 3000);
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
    <section className="relative py-24 px-4 sm:px-6 overflow-hidden">
      <div className="mx-auto max-w-4xl relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            className="text-xs font-semibold tracking-widest text-blue-400 uppercase inline-block"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Testimonials
          </motion.span>
          <h2 className="mt-3 font-display font-bold text-white text-[clamp(2rem,5vw,3rem)] tracking-tight">
            <Animated3DText text="Loved by Creators" variant="heading" />
          </h2>
        </div>

        {/* Carousel Container */}
        <div
          className="relative min-h-[360px] sm:min-h-[300px] flex items-center justify-center"
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
              onDragEnd={(e, { offset, velocity }) => {
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
                className="ps-luxury-glass ps-glass-reflection ps-border-glow-wrapper rounded-[30px] p-8 sm:p-10 border border-white/5 relative"
                style={{
                  "--border-accent": `${activeReview.color}66`,
                  background: "rgba(255, 255, 255, 0.02)",
                  boxShadow: `0 30px 60px rgba(0, 0, 0, 0.6), 0 0 40px ${activeReview.color}15`,
                }}
              >
                {/* Brand glow overlay */}
                <div
                  className="absolute inset-0 -z-10 rounded-[30px] pointer-events-none transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${activeReview.color}0a, transparent 70%)`,
                  }}
                />

                {/* Quote Mark */}
                <Quote
                  className="absolute top-8 right-8 text-white/5"
                  size={56}
                />

                {/* Rating */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: activeReview.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 italic">
                  "{activeReview.text}"
                </p>

                {/* User Info Footer */}
                <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-4">
                    {/* User Avatar */}
                    <div
                      className="flex items-center justify-center rounded-full text-white font-semibold text-base shrink-0"
                      style={{
                        width: 48,
                        height: 48,
                        background: `linear-gradient(135deg, ${activeReview.color}, #8B5CF6, #EC4899)`,
                        boxShadow: `0 5px 15px ${activeReview.color}25`,
                      }}
                    >
                      {activeReview.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-white text-base font-semibold">
                        {activeReview.name}
                      </h4>
                      <p className="text-white/50 text-xs mt-0.5">
                        {activeReview.role}
                      </p>
                    </div>
                  </div>

                  {/* Product Pill Tag */}
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold border"
                    style={{
                      background: `${activeReview.color}18`,
                      borderColor: `${activeReview.color}35`,
                      color: activeReview.color,
                      boxShadow: `0 4px 12px ${activeReview.color}10`,
                    }}
                  >
                    {activeReview.product}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="mt-8 flex items-center justify-between max-w-2xl mx-auto px-4 relative z-20">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-300 active:scale-90"
            aria-label="Previous Review"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2 max-w-[200px] overflow-hidden py-2 px-1">
            {/* Show only 7 dots max at a time for aesthetic spacing, centered around the current index */}
            {REVIEWS.map((_, i) => {
              const distance = Math.abs(i - index);
              // Hide dots too far from current index to keep it compact
              if (distance > 3) return null;
              
              return (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === index ? 16 : 6,
                    height: 6,
                    background:
                      i === index
                        ? activeReview.color
                        : "rgba(255,255,255,0.15)",
                  }}
                  aria-label={`Go to review ${i + 1}`}
                />
              );
            })}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-300 active:scale-90"
            aria-label="Next Review"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Total Count Badge */}
        <div className="text-center mt-6 text-white/30 text-xs font-semibold select-none">
          Showing review {index + 1} of {REVIEWS.length}
        </div>
      </div>
    </section>
  );
}