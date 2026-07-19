import { MousePointerClick, MessageCircle, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import Animated3DText from "@/components/Animated3DText";

const STEPS = [
  {
    icon: MousePointerClick,
    title: "Choose Your Tool",
    desc: "Browse the marketplace and pick the premium AI product that fits your needs.",
    color: "#3B82F6", // Blue
  },
  {
    icon: MessageCircle,
    title: "Order on WhatsApp",
    desc: "Click Buy — your product details are auto-filled and sent straight to our WhatsApp.",
    color: "#10A37F", // WhatsApp Green
  },
  {
    icon: Rocket,
    title: "Get Delivered",
    desc: "Complete payment, receive instant activation, and start using your premium access.",
    color: "#EC4899", // Pink
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <motion.span
            className="text-xs font-semibold tracking-widest text-violet-400 uppercase inline-block"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Simple Process
          </motion.span>
          <h2 className="mt-3 font-display font-bold text-white text-[clamp(1.8rem,4vw,2.8rem)] tracking-tight">
            <Animated3DText text="How It Works" variant="heading" />
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.title}
              className="relative rounded-2xl p-7 text-center border overflow-hidden group transition-all duration-300"
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
                borderColor: `${s.color}50`,
                background: "rgba(255,255,255,0.05)",
                boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 30px ${s.color}15`,
              }}
            >
              {/* Subtle radial glow inside card on hover */}
              <div
                className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${s.color}0d, transparent 65%)`,
                }}
              />

              <div className="absolute top-5 right-6 font-display font-bold text-5xl text-white/5 transition-transform duration-300 group-hover:scale-110">
                {i + 1}
              </div>
              <div
                className="mx-auto mb-5 flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  width: 56,
                  height: 56,
                  background: `linear-gradient(135deg, ${s.color}25, rgba(139,92,246,0.15))`,
                  border: `1px solid ${s.color}40`,
                }}
              >
                <s.icon className="text-white" size={24} style={{ color: s.color }} />
              </div>
              <h3 className="font-display font-semibold text-white text-lg mb-2">
                {s.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}