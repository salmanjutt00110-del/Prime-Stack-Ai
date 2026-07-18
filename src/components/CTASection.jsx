import { MessageCircle } from "lucide-react";
import { WHATSAPP_GENERAL } from "@/lib/whatsapp";

export default function CTASection() {
  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-14 sm:py-16 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15), rgba(236,72,153,0.15))",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* glow orbs */}
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full blur-[100px] bg-blue-500/30" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full blur-[100px] bg-pink-500/30" />

          <div className="relative">
            <h2 className="font-display font-bold text-white text-[clamp(1.8rem,5vw,3rem)] tracking-tight">
              Ready to Go Premium?
            </h2>
            <p className="mt-4 text-white/65 text-base sm:text-lg max-w-xl mx-auto">
              Join 500+ happy clients using premium AI tools. Pick your product
              and order instantly on WhatsApp.
            </p>
            <a
              href={WHATSAPP_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
              style={{
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                boxShadow: "0 8px 32px rgba(37,211,102,0.4)",
              }}
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}