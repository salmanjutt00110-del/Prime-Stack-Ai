import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, MessageCircle, Quote, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WHATSAPP_GENERAL, WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { motion } from "framer-motion";
import Animated3DText from "@/components/Animated3DText";

const SEED_REVIEWS = [
  { name: "Ahmed Raza", role: "Content Creator", rating: 5, text: "Got my ChatGPT Plus within minutes. Super smooth process and the support was incredibly helpful. Highly recommend Prime Tools Hub!", product: "ChatGPT Plus", date: "2 weeks ago" },
  { name: "Sana Khan", role: "Freelance Designer", rating: 5, text: "Canva Pro for 3 years at this price is unbeatable. Activation was instant and everything works perfectly. Trusted seller for sure.", product: "Canva Pro Edu", date: "1 month ago" },
  { name: "Bilal Ahmed", role: "Digital Marketer", rating: 5, text: "Bought the Gemini Pro 18-month plan. Premium quality, fast delivery, and genuine access. The best AI marketplace in Pakistan.", product: "Google Gemini Pro", date: "3 weeks ago" },
  { name: "Hiba Noor", role: "Student", rating: 5, text: "CapCut Pro works perfectly for my reels and edits. Export without watermark is a game changer. Quick delivery too!", product: "CapCut Pro", date: "1 week ago" },
  { name: "Usman Tariq", role: "Startup Founder", rating: 5, text: "SuperGrok 12 months premium is stable and fast. The team guided me through 2FA setup. Genuinely premium service.", product: "SuperGrok 12 Months Premium", date: "5 days ago" },
  { name: "Mariam J.", role: "TikTok Creator", rating: 5, text: "They activated the Creator Growth Challenge on my USA account smoothly. Honest, fast, and exactly as described.", product: "TikTok Creator Growth", date: "2 months ago" },
  { name: "Faisal Iqbal", role: "Video Editor", rating: 5, text: "Veo 3 gave me 45,000 credits and unlimited video generation. Best price I've found anywhere. Will buy again.", product: "Google Veo 3", date: "4 days ago" },
  { name: "Zainab A.", role: "Freelancer", rating: 5, text: "Surfshark VPN 1 year activated instantly with the redeem code. Streaming is fast and secure. Great experience overall.", product: "Surfshark VPN", date: "3 days ago" },
];

const STATS = [
  { value: "500+", label: "Happy Clients" },
  { value: "4.9", label: "Average Rating" },
  { value: "8+", label: "Premium Products" },
  { value: "100%", label: "Recommend Us" },
];

// Helper to get color properties for brand matching
const getProductColor = (product) => {
  const p = product?.toLowerCase() || "";
  if (p.includes("chatgpt")) return { bg: "rgba(16, 163, 127, 0.12)", border: "rgba(16, 163, 127, 0.25)", text: "#10A37F" };
  if (p.includes("gemini") || p.includes("veo")) return { bg: "rgba(66, 133, 244, 0.12)", border: "rgba(66, 133, 244, 0.25)", text: "#60A5FA" };
  if (p.includes("canva")) return { bg: "rgba(125, 42, 232, 0.12)", border: "rgba(125, 42, 232, 0.25)", text: "#A78BFA" };
  if (p.includes("capcut") || p.includes("tiktok")) return { bg: "rgba(254, 44, 85, 0.12)", border: "rgba(254, 44, 85, 0.25)", text: "#FE2C55" };
  if (p.includes("grok")) return { bg: "rgba(29, 161, 242, 0.12)", border: "rgba(29, 161, 242, 0.25)", text: "#60A5FA" };
  if (p.includes("surfshark")) return { bg: "rgba(28, 159, 232, 0.12)", border: "rgba(28, 159, 232, 0.25)", text: "#22D3EE" };
  return { bg: "rgba(255, 255, 255, 0.08)", border: "rgba(255, 255, 255, 0.15)", text: "#FFFFFF" };
};

export default function Reviews() {
  const navigate = useNavigate();
  const [reviews] = useState(SEED_REVIEWS);
  const [form, setForm] = useState({ name: "", product: "", rating: 5, text: "" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const submitReview = () => {
    const msg = encodeURIComponent(
      `Hello Prime Tools Hub! 👋\n\nI'd like to leave a review:\n\n` +
        `⭐ Rating: ${form.rating}/5\n` +
        `👤 Name: ${form.name || "—"}\n` +
        `🛒 Product: ${form.product || "—"}\n\n` +
        `💬 "${form.text || "—"}"`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden flex flex-col justify-between">
      <Navbar />
      <main className="pt-20 flex-grow">
        {/* hero */}
        <section className="relative py-16 px-4 sm:px-6 overflow-hidden">
          <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(139,92,246,0.15), transparent 70%)" }} />
          <div className="mx-auto max-w-4xl text-center">
            <motion.span
              className="text-xs font-semibold tracking-widest text-pink-400 uppercase inline-block"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Testimonials
            </motion.span>
            <h1 className="mt-3 font-display font-bold text-white text-[clamp(2.2rem,6vw,3.5rem)] tracking-tight">
              <Animated3DText text="What Our Clients Say" variant="heading" />
            </h1>
            <motion.p
              className="mt-4 text-white/55 text-base max-w-xl mx-auto"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Real reviews from 500+ happy clients who trust Prime Tools Hub for premium digital tools.
            </motion.p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="rounded-2xl py-5 px-3 text-center border"
                  style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  whileHover={{
                    scale: 1.03,
                    borderColor: "rgba(255,255,255,0.15)",
                    background: "rgba(255,255,255,0.05)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                  }}
                >
                  <div className="text-2xl sm:text-3xl font-bold font-display bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                    {s.value}
                  </div>
                  <div className="text-xs text-white/50 mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* reviews grid */}
        <section className="relative py-8 px-4 sm:px-6">
          <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r, i) => {
              const colors = getProductColor(r.product);
              return (
                <motion.div
                  key={r.name + r.product}
                  className="relative rounded-2xl p-6 flex flex-col border overflow-hidden group transition-colors duration-300"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(20px)",
                    borderColor: "rgba(255,255,255,0.07)",
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{
                    y: -4,
                    borderColor: `${colors.text}50`,
                    background: "rgba(255,255,255,0.05)",
                    boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 30px ${colors.text}1a`,
                  }}
                >
                  {/* Subtle brand radial glow inside review card on hover */}
                  <div
                    className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${colors.text}0d, transparent 65%)`,
                    }}
                  />
                  <Quote className="absolute top-5 right-5 text-white/5 transition-transform duration-300 group-hover:scale-110" size={40} />
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: r.rating }).map((_, idx) => (
                      <Star key={idx} size={15} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed flex-1">"{r.text}"</p>
                  
                  <div className="mt-4 pt-4 border-t border-white/6 flex items-center gap-3">
                    <div
                      className="flex items-center justify-center rounded-full text-white font-semibold text-sm shrink-0"
                      style={{ width: 40, height: 40, background: "linear-gradient(135deg, #3B82F6, #8B5CF6, #EC4899)" }}
                    >
                      {r.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-white text-sm font-medium truncate">{r.name}</div>
                      
                      {/* Colorful Pill Badges for Client Role and Product Tag */}
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        <span
                          className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold border"
                          style={{
                            background: "rgba(255, 255, 255, 0.05)",
                            borderColor: "rgba(255, 255, 255, 0.1)",
                            color: "rgba(255, 255, 255, 0.7)"
                          }}
                        >
                          {r.role}
                        </span>
                        <span
                          className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold border"
                          style={{
                            background: colors.bg,
                            borderColor: colors.border,
                            color: colors.text
                          }}
                        >
                          {r.product}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 text-white/30 text-[11px]">{r.date}</div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* submit review */}
        <section className="relative py-16 px-4 sm:px-6">
          <div className="mx-auto max-w-2xl">
            <motion.div
              className="rounded-3xl p-8 sm:p-10 relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(139,92,246,0.12), rgba(236,72,153,0.12))", border: "1px solid rgba(255,255,255,0.1)" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full blur-[90px] bg-blue-500/30" />
              <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full blur-[90px] bg-pink-500/30" />
              <div className="relative">
                <h2 className="font-display font-bold text-white text-2xl text-center mb-2">
                  Share Your Experience
                </h2>
                <p className="text-white/55 text-sm text-center mb-6">
                  Loved your purchase? Send your review — we'll feature it here.
                </p>

                <div className="space-y-3">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/35 outline-none focus:ring-1 focus:ring-purple-400 transition-all"
                      style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)" }}
                    />
                    <input
                      value={form.product}
                      onChange={(e) => setForm({ ...form, product: e.target.value })}
                      placeholder="Which product?"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/35 outline-none focus:ring-1 focus:ring-purple-400 transition-all"
                      style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)" }}
                    />
                  </div>
                  <div className="flex items-center gap-2 py-1">
                    <span className="text-white/55 text-sm">Rating:</span>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button
                        key={n}
                        onClick={() => setForm({ ...form, rating: n })}
                        aria-label={`${n} stars`}
                        className="transition-transform active:scale-95"
                      >
                        <Star
                          size={20}
                          className={n <= form.rating ? "text-yellow-400 fill-yellow-400" : "text-white/20"}
                        />
                      </button>
                    ))}
                  </div>
                  <textarea
                    value={form.text}
                    onChange={(e) => setForm({ ...form, text: e.target.value })}
                    placeholder="Write your review..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/35 outline-none resize-none focus:ring-1 focus:ring-purple-400 transition-all"
                    style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)" }}
                  />
                  <button
                    onClick={submitReview}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.01]"
                    style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
                  >
                    <Send size={16} /> Send Review on WhatsApp
                  </button>
                  <p className="text-white/35 text-center text-xs">Reviews are submitted via WhatsApp to +{WHATSAPP_NUMBER}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-12 px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <a
              href={WHATSAPP_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.03]"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)", boxShadow: "0 4px 24px rgba(37,211,102,0.4)" }}
            >
              <MessageCircle size={16} /> Browse Products on WhatsApp
            </a>
            <button
              onClick={() => navigate("/")}
              className="block mx-auto mt-4 text-sm text-white/55 hover:text-white transition-colors"
            >
              ← Back to Home
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}