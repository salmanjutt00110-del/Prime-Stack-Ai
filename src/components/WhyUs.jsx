import { ShieldCheck, BadgeCheck, Zap, Headphones, HeartHandshake, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Animated3DText from "@/components/Animated3DText";

const REASONS = [
  { icon: ShieldCheck, title: "100% Secure", desc: "Every transaction is protected and handled with care.", color: "#3B82F6" },
  { icon: BadgeCheck, title: "Verified Products", desc: "Genuine, premium accounts — no fakes, no shortcuts.", color: "#10A37F" },
  { icon: Zap, title: "Instant Delivery", desc: "Most products delivered within minutes of payment.", color: "#F59E0B" },
  { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock help whenever you need assistance.", color: "#8B5CF6" },
  { icon: HeartHandshake, title: "Trusted Seller", desc: "500+ happy clients and a reputation built on trust.", color: "#EC4899" },
  { icon: Sparkles, title: "Premium Service", desc: "A curated catalog of only the best AI tools available.", color: "#06B6D4" },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <motion.span
            className="text-xs font-semibold tracking-widest text-pink-400 uppercase inline-block"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Prime Tools Hub
          </motion.span>
          <h2 className="mt-3 font-display font-bold text-white text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight">
            <Animated3DText text="Why Choose Us" variant="heading" />
          </h2>
          <motion.p
            className="mt-3 text-white/50 text-base max-w-xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything premium. One trusted platform.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              className="relative rounded-2xl p-6 border overflow-hidden group transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(20px)",
                borderColor: "rgba(255,255,255,0.07)",
              }}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -4,
                borderColor: `${r.color}50`,
                background: "rgba(255,255,255,0.05)",
                boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 30px ${r.color}15`,
              }}
            >
              {/* Subtle radial glow inside card on hover */}
              <div
                className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${r.color}0d, transparent 65%)`,
                }}
              />

              <div
                className="mb-4 flex items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  width: 48,
                  height: 48,
                  background: `linear-gradient(135deg, ${r.color}25, rgba(139,92,246,0.15))`,
                  border: `1px solid ${r.color}40`,
                }}
              >
                <r.icon className="text-white" size={20} style={{ color: r.color }} />
              </div>
              <h3 className="font-display font-semibold text-white text-base mb-1.5">
                {r.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}