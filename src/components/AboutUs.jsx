import { motion } from "framer-motion";
import { ShieldCheck, Zap, Headphones, Sparkles, CheckCircle2, MessageCircle, Award, Users } from "lucide-react";
import Animated3DText from "@/components/Animated3DText";
import { WHATSAPP_GENERAL } from "@/lib/whatsapp";

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "100% Genuine Access",
    desc: "We provide authentic, fully verified subscriptions and legitimate account setups. No temporary trial scams or unstable links.",
    color: "#3B82F6",
  },
  {
    icon: Zap,
    title: "Instant WhatsApp Activation",
    desc: "No waiting for hours. Once payment is confirmed, our dedicated support team delivers your login or invitation within minutes.",
    color: "#F59E0B",
  },
  {
    icon: Headphones,
    title: "24/7 Priority Support",
    desc: "Have a question or technical issue? Our WhatsApp customer care is available round the clock to ensure seamless usage.",
    color: "#8B5CF6",
  },
  {
    icon: Sparkles,
    title: "Unbeatable Rates & Bulk Offers",
    desc: "Get premium AI features at prices tailored for freelancers, students, agencies, and teams with special discounts for 5+ purchases.",
    color: "#EC4899",
  },
];

const STATS = [
  { value: "500+", label: "Happy Clients", icon: Users, color: "#3B82F6" },
  { value: "99.9%", label: "Satisfaction Rate", icon: Award, color: "#10A37F" },
  { value: "15+", label: "Premium AI Tools", icon: Sparkles, color: "#8B5CF6" },
  { value: "24/7", label: "WhatsApp Support", icon: Headphones, color: "#EC4899" },
];

export default function AboutUs() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 scroll-mt-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-violet-500/10 border border-violet-500/20 text-violet-300 uppercase tracking-widest mb-4"
          >
            <span>✨</span>
            <span>About Prime Tools Hub</span>
          </motion.div>

          <h2 className="font-display font-bold text-white text-[clamp(2rem,4.5vw,3.2rem)] tracking-tight">
            <Animated3DText text="Empowering Your Digital Workflow" variant="heading" />
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-body"
          >
            Your trusted marketplace for authentic AI tools, premium subscriptions, and creator software with instant delivery & dedicated support.
          </motion.p>
        </div>

        {/* Story & Highlights Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left Column: Who We Are Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 rounded-3xl p-7 sm:p-9 border flex flex-col justify-between relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
              backdropFilter: "blur(20px)",
              borderColor: "rgba(255,255,255,0.08)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
            }}
          >
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-gradient-to-br from-violet-500/10 to-pink-500/5 blur-3xl pointer-events-none" />

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-pink-400 font-mono">
                Who We Are
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                Bridging the Gap to World-Class AI Tools
              </h3>
              
              <div className="mt-5 space-y-4 text-white/65 text-sm sm:text-base leading-relaxed font-body">
                <p>
                  At <strong className="text-white font-semibold">Prime Tools Hub</strong> (<span className="text-violet-300">PrimeTools.store</span>), we believe top-tier artificial intelligence and creative tools shouldn't be limited by payment barriers or exorbitant recurring costs.
                </p>
                <p>
                  We specialize in offering verified access to industry-leading solutions—ranging from <strong className="text-white font-semibold">ChatGPT Plus</strong>, <strong className="text-white font-semibold">Gemini Advanced</strong>, and <strong className="text-white font-semibold">Veo 3 AI Video</strong> to <strong className="text-white font-semibold">CapCut Pro</strong>, <strong className="text-white font-semibold">Canva Pro</strong>, and premium VPN services.
                </p>
                <p>
                  Whether you are a solo freelancer, video editor, developer, or agency team, we deliver immediate, hassle-free activations with complete peace of mind.
                </p>
              </div>
            </div>

            {/* Bullet Highlights */}
            <div className="mt-8 pt-6 border-t border-white/8 grid sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span>Legitimate & Safe Accounts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span>Fast WhatsApp Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span>Replacement Warranties</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span>Custom Bulk Pricing</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Pillar Cards */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, borderColor: `${p.color}50` }}
                className="rounded-2xl p-6 border flex flex-col justify-between group transition-all duration-300 relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  backdropFilter: "blur(16px)",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${p.color}20, rgba(139,92,246,0.1))`,
                      border: `1px solid ${p.color}35`,
                    }}
                  >
                    <p.icon size={22} style={{ color: p.color }} />
                  </div>

                  <h4 className="font-display font-semibold text-white text-base mb-2">
                    {p.title}
                  </h4>
                  <p className="text-white/55 text-xs sm:text-sm leading-relaxed font-body">
                    {p.desc}
                  </p>
                </div>

                <div
                  className="mt-4 h-0.5 w-12 rounded-full transition-all duration-300 group-hover:w-full"
                  style={{ background: p.color }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Counter Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-5 border text-center relative overflow-hidden group"
              style={{
                background: "rgba(255,255,255,0.02)",
                borderColor: "rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="w-10 h-10 mx-auto mb-2 rounded-lg flex items-center justify-center opacity-80"
                style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}
              >
                <s.icon size={18} style={{ color: s.color }} />
              </div>
              <div
                className="text-2xl sm:text-3xl font-extrabold font-display"
                style={{ color: s.color }}
              >
                {s.value}
              </div>
              <div className="text-white/50 text-xs mt-1 font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Trust Guarantee & Direct WhatsApp Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 sm:p-10 border text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(139,92,246,0.12), rgba(59,130,246,0.1), rgba(236,72,153,0.08))",
            borderColor: "rgba(139,92,246,0.25)",
            backdropFilter: "blur(24px)",
          }}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="font-display font-bold text-white text-xl sm:text-2xl tracking-tight">
              Have Questions Before Buying?
            </h3>
            <p className="mt-2 text-white/65 text-xs sm:text-sm leading-relaxed">
              Our team is ready to guide you to the perfect tool for your workflow, answer warranty details, or calculate bulk pricing for your team.
            </p>

            <a
              href={WHATSAPP_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
              style={{
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                boxShadow: "0 8px 25px rgba(37,211,102,0.35)",
              }}
            >
              <MessageCircle size={17} />
              Talk to Us on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
