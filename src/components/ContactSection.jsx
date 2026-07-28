import { useState } from "react";
import { MessageCircle, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi Prime Tools Hub, my name is ${formData.name} (${formData.email}). Message: ${formData.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-16 px-4 sm:px-6 scroll-mt-24 overflow-hidden border-t border-white/5 bg-[#02040a]">
      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* GRID: Get In Touch Form + Info + Map Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Get In Touch Info & Form Column */}
          <div className="md:col-span-7 rounded-3xl p-6 sm:p-8 border bg-white/[0.03] border-white/12 backdrop-blur-xl shadow-2xl">
            <h3 className="font-display font-black text-2xl text-white tracking-tight mb-6">
              Get In Touch
            </h3>

            {/* Support Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/50 transition-all flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">WhatsApp Support</span>
                  <span className="text-xs font-extrabold text-white">+{WHATSAPP_NUMBER}</span>
                </div>
              </a>

              <a
                href="mailto:support@primetoolshub.store"
                className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-blue-500/50 transition-all flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Email Support</span>
                  <span className="text-xs font-extrabold text-white truncate max-w-[110px] block">support@...</span>
                </div>
              </a>

              <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Working Hours</span>
                  <span className="text-xs font-extrabold text-white">24/7 Available</span>
                </div>
              </div>
            </div>

            {/* Direct Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-4 h-[46px] rounded-xl bg-white/[0.04] border border-white/12 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-all font-body"
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Your Email"
                  className="w-full px-4 h-[46px] rounded-xl bg-white/[0.04] border border-white/12 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-all font-body"
                />
              </div>

              <div>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your Message"
                  className="w-full p-4 rounded-xl bg-white/[0.04] border border-white/12 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition-all font-body resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-3.5 rounded-2xl font-display font-extrabold text-xs sm:text-sm text-white flex items-center justify-center gap-2 transition-all duration-300 shadow-xl cursor-pointer h-[48px] min-h-[48px]"
                style={{
                  background: "linear-gradient(135deg, #7C3AED 0%, #2563EB 100%)",
                  boxShadow: "0 8px 25px rgba(124, 58, 237, 0.35)",
                }}
              >
                <span>Send Message</span>
                <Send size={16} />
              </motion.button>

              {submitted && (
                <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/35 text-emerald-300 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 size={16} /> Opening WhatsApp chat...
                </div>
              )}
            </form>
          </div>

          {/* Map Image Card Column */}
          <div className="md:col-span-5 rounded-3xl p-6 border bg-gradient-to-br from-[#0c0e1a] to-[#060710] border-white/12 relative overflow-hidden shadow-2xl flex flex-col justify-between h-full min-h-[380px]">
            {/* Dark Styled Map Overlay Graphic */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" />
            
            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase text-purple-400 bg-purple-500/15 px-3 py-1 rounded-full border border-purple-500/30 inline-block mb-3">
                📍 PHYSICAL OFFICE HUB
              </span>
              <h4 className="font-display font-black text-xl text-white tracking-tight">Lahore, Pakistan Office</h4>
              <p className="text-xs text-slate-400 mt-1 font-body">
                Official Prime Tools Hub Operations &amp; Support HQ.
              </p>
            </div>

            {/* Map Visual Box with Pin Marker */}
            <div className="relative my-4 rounded-2xl h-48 border border-white/15 overflow-hidden flex items-center justify-center bg-[#070914] shadow-inner group">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-blue-900/20 to-transparent pointer-events-none" />
              
              {/* Map grid lines */}
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px]" />
              
              {/* Center Map Pin Marker */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center text-red-500 animate-bounce shadow-[0_0_20px_rgba(239,68,68,0.6)]">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                </div>
                <div className="mt-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-[10px] font-black text-white shadow-lg backdrop-blur-md">
                  Lahore, Pakistan • Prime Tools Hub Office
                </div>
              </div>
            </div>

            <div className="relative z-10 text-xs text-slate-400 text-center font-medium">
              Nationwide Pakistan &amp; International Instant Fulfillment
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
