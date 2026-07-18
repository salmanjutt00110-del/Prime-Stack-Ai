import { Star } from "lucide-react";
import { motion } from "framer-motion";

const REVIEWS = [
  {
    name: "Ahmed Raza",
    role: "Content Creator",
    text: "Got my ChatGPT Plus within minutes. Super smooth process and the support was incredibly helpful. Highly recommend PrimeStack!",
    rating: 5,
    color: "#10A37F", // ChatGPT Green
  },
  {
    name: "Sana Khan",
    role: "Freelance Designer",
    text: "Canva Pro for 3 years at this price is unbeatable. Activation was instant and everything works perfectly. Trusted seller for sure.",
    rating: 5,
    color: "#7D2AE8", // Canva Purple
  },
  {
    name: "Bilal Ahmed",
    role: "Digital Marketer",
    text: "Bought the Gemini Pro 18-month plan. Premium quality, fast delivery, and genuine access. The best AI marketplace in Pakistan.",
    rating: 5,
    color: "#4285F4", // Gemini Blue
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <motion.span
            className="text-xs font-semibold tracking-widest text-blue-400 uppercase inline-block"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Testimonials
          </motion.span>
          <motion.h2
            className="mt-3 font-display font-bold text-white text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Loved by Creators
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              className="relative rounded-2xl p-6 flex flex-col border overflow-hidden group transition-colors duration-300"
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(20px)",
                borderColor: "rgba(255,255,255,0.07)",
              }}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -4,
                borderColor: `${r.color}50`,
                background: "rgba(255,255,255,0.05)",
                boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 30px ${r.color}1a`,
              }}
            >
              {/* Subtle brand radial glow inside testomonial card on hover */}
              <div
                className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${r.color}0d, transparent 65%)`,
                }}
              />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <Star key={idx} size={15} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-white/65 text-sm leading-relaxed flex-1">
                "{r.text}"
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div
                  className="flex items-center justify-center rounded-full text-white font-semibold text-sm"
                  style={{
                    width: 40,
                    height: 40,
                    background:
                      `linear-gradient(135deg, ${r.color}, #8B5CF6, #EC4899)`,
                  }}
                >
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{r.name}</div>
                  
                  {/* Colored Role Badge */}
                  <div className="mt-1">
                    <span
                      className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold border"
                      style={{
                        background: `${r.color}15`,
                        borderColor: `${r.color}25`,
                        color: r.color,
                      }}
                    >
                      {r.role}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}