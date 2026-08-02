import React from "react";
import { ShieldCheck, Zap, Lock, CreditCard, Sparkles, CheckCircle2 } from "lucide-react";

export default function SeoContentSection() {
  return (
    <section 
      aria-label="SEO Content Guide & About Prime Tools Hub" 
      className="py-16 bg-[#07080d] border-t border-b border-white/5 text-slate-300 font-body relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles size={13} />
            <span>Pakistan's #1 Digital AI Tools Marketplace</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Buy Genuine ChatGPT Plus, Canva Pro, Veo 3 &amp; VPN Subscriptions in Pakistan
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Prime Tools Hub is Pakistan's premier online marketplace for instant digital AI tool access, creator accounts, video editing subscriptions, and high-speed VPN services. Operating since 2022, we empower over 1,200+ Pakistani freelancers, digital marketers, agency owners, video editors, and students with official premium access at affordable PKR pricing.
          </p>
        </div>

        {/* 3-Column Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Box 1 */}
          <article className="p-6 rounded-2xl bg-[#0d0e14] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-2">
              <Zap size={20} />
            </div>
            <h3 className="text-lg font-bold text-white">Instant 15-Minute Delivery via WhatsApp</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              No long waiting periods or complicated verification processes. Once you select your desired subscription (such as ChatGPT Plus, Gemini Advanced, or CapCut Pro) and complete your order via WhatsApp, our dedicated support team delivers your login credentials or email activation link within 15 minutes during operating hours.
            </p>
          </article>

          {/* Box 2 */}
          <article className="p-6 rounded-2xl bg-[#0d0e14] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-2">
              <CreditCard size={20} />
            </div>
            <h3 className="text-lg font-bold text-white">Local PKR Payments (JazzCash &amp; EasyPaisa)</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Skip international USD debit/credit card restrictions and foreign transaction fees. We accept local Pakistani payment methods including JazzCash, EasyPaisa, and local bank transfers (Meezan, HBL, UBL, Allied Bank). Enjoy seamless digital subscription purchasing directly in Pakistani Rupees.
            </p>
          </article>

          {/* Box 3 */}
          <article className="p-6 rounded-2xl bg-[#0d0e14] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center mb-2">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-lg font-bold text-white">100% Replacement Warranty &amp; Reliability</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every digital tool subscription purchased from Prime Tools Hub includes complete replacement warranty coverage for the full duration specified. If you ever experience access interruptions, credential issues, or service restrictions, our customer care team resolves or replaces your plan instantly.
            </p>
          </article>

        </div>

        {/* Detailed Product Breakdown List for Keyword Optimization */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0d0e14] border border-white/10 space-y-6">
          <h3 className="text-xl font-bold text-white tracking-tight">
            Popular AI &amp; Software Subscriptions Available in Pakistan
          </h3>
          
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="space-y-1.5">
              <dt className="font-bold text-emerald-400 text-sm">🤖 OpenAI ChatGPT Plus (GPT-4o &amp; Sora)</dt>
              <dd className="text-slate-400 leading-relaxed">
                Access GPT-4o, DALL·E 3 image generation, Web Browsing, Data Analysis, Custom GPTs, and upcoming OpenAI Sora video capabilities.
              </dd>
            </div>

            <div className="space-y-1.5">
              <dt className="font-bold text-blue-400 text-sm">🌐 Google Gemini Pro &amp; VEO 3</dt>
              <dd className="text-slate-400 leading-relaxed">
                Google's premier AI model with 2M context window, 5TB Google Cloud Storage, and Veo 3 high-definition AI video generation.
              </dd>
            </div>

            <div className="space-y-1.5">
              <dt className="font-bold text-pink-400 text-sm">🎨 Canva Pro Magic Studio</dt>
              <dd className="text-slate-400 leading-relaxed">
                Unlock 100M+ premium stock photos, brand kits, Magic Eraser, background remover, and full video template exports.
              </dd>
            </div>

            <div className="space-y-1.5">
              <dt className="font-bold text-red-400 text-sm">✂️ CapCut Pro 4K Editing</dt>
              <dd className="text-slate-400 leading-relaxed">
                Export 4K videos without watermarks, auto-captions, AI video effects, body tracking, and trending TikTok templates.
              </dd>
            </div>
          </dl>

          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-400" />
              <span>Verified 4.9/5 Rating across 1,200+ Pakistani Creators</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock size={15} className="text-blue-400" />
              <span>SSL Encrypted &amp; Secure Account Activation</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
