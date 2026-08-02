import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import ContactSection from "@/components/ContactSection";
import { Mail, MessageCircle, Clock } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/products";

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-[#00ff88] selection:text-black">
      <SEOHead
        title="Contact Us | Prime Tools Hub — 15-Minute Support SLA"
        description="Contact Prime Tools Hub support via WhatsApp +92-370-7020580 or email support@primetoolshub.store. Operating hours: 9 AM – 11 PM PKT."
        canonical="https://primetoolshub.store/contact"
      />

      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageCircle size={14} />
            <span>Dedicated Customer Care</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get in Touch with Prime Tools Hub
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-400">
            Have questions before ordering or need warranty support? Reach out directly — we respond within minutes.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#0c0d12] border border-white/10 hover:border-[#25D366]/50 transition-all text-center group"
          >
            <div className="w-12 h-12 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle size={24} />
            </div>
            <h3 className="font-bold text-white text-base mb-1">WhatsApp Direct Chat</h3>
            <p className="text-xs text-emerald-400 font-semibold mb-2">+92-370-7020580</p>
            <p className="text-xs text-slate-400">Average response time: &lt; 15 minutes</p>
          </a>

          <div className="p-6 rounded-2xl bg-[#0c0d12] border border-white/10 text-center">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center mx-auto mb-4">
              <Clock size={24} />
            </div>
            <h3 className="font-bold text-white text-base mb-1">Support Hours</h3>
            <p className="text-xs text-purple-300 font-semibold mb-2">9:00 AM – 11:00 PM (PKT)</p>
            <p className="text-xs text-slate-400">7 Days a Week • Full Warranty Assistance</p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0c0d12] border border-white/10 text-center">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto mb-4">
              <Mail size={24} />
            </div>
            <h3 className="font-bold text-white text-base mb-1">Email Support</h3>
            <p className="text-xs text-blue-300 font-semibold mb-2">support@primetoolshub.store</p>
            <p className="text-xs text-slate-400">For inquiries, partnerships &amp; privacy</p>
          </div>
        </div>

        {/* Embedded Contact Component */}
        <div className="mb-16">
          <ContactSection />
        </div>
      </main>

      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
