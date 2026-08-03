import React from "react";
import { ShieldCheck, Zap, Lock, CreditCard, Sparkles, CheckCircle2, Globe, Users } from "lucide-react";

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
            Prime Tools Hub is Pakistan's premier online marketplace for instant digital AI tool access, creator accounts, video editing subscriptions, and high-speed VPN services. Operating since 2022, we empower over 5,000+ Pakistani freelancers, digital marketers, agency owners, video editors, and students with official premium access at affordable PKR pricing.
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
              No long waiting periods or complicated verification processes. Once you select your desired subscription (such as{" "}
              <a href="https://openai.com/chatgpt" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ChatGPT Plus</a>,{" "}
              <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Gemini Advanced</a>, or CapCut Pro) and complete your order via WhatsApp, our dedicated support team delivers your login credentials or email activation link within 15 minutes during operating hours (9 AM – 11 PM PKT).
            </p>
          </article>

          {/* Box 2 */}
          <article className="p-6 rounded-2xl bg-[#0d0e14] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-2">
              <CreditCard size={20} />
            </div>
            <h3 className="text-lg font-bold text-white">Local PKR Payments (JazzCash &amp; EasyPaisa)</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Skip international USD debit/credit card restrictions and foreign transaction fees. We accept local Pakistani payment methods including JazzCash, EasyPaisa, and local bank transfers (Meezan, HBL, UBL, Allied Bank). International customers can pay via USDT cryptocurrency. Enjoy seamless digital subscription purchasing directly in Pakistani Rupees without PayPal or Stripe.
            </p>
          </article>

          {/* Box 3 */}
          <article className="p-6 rounded-2xl bg-[#0d0e14] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center mb-2">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-lg font-bold text-white">100% Replacement Warranty &amp; Reliability</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every digital tool subscription purchased from Prime Tools Hub includes complete replacement warranty coverage for the full duration specified on the product page. If you ever experience access interruptions, credential issues, or service restrictions, our customer care team resolves or replaces your plan instantly — at no additional cost.
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
                Access <a href="https://openai.com/chatgpt" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">GPT-4o</a>, DALL·E 3 image generation, Web Browsing, Data Analysis, Custom GPTs, and OpenAI Sora video capabilities. Available with 10-day and 1-month warranty options.
              </dd>
            </div>

            <div className="space-y-1.5">
              <dt className="font-bold text-blue-400 text-sm">🌐 Google Gemini Pro &amp; VEO 3</dt>
              <dd className="text-slate-400 leading-relaxed">
                <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Google's premier AI model</a> with 2M context window, 5TB Google Cloud Storage, and Veo 3 high-definition AI video generation. 18-month subscription on your personal Gmail.
              </dd>
            </div>

            <div className="space-y-1.5">
              <dt className="font-bold text-pink-400 text-sm">🎨 Canva Pro Magic Studio</dt>
              <dd className="text-slate-400 leading-relaxed">
                Unlock <a href="https://www.canva.com/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">Canva's</a> 100M+ premium stock photos, brand kits, Magic Eraser, background remover, and full video template exports. 3-year access for just Rs. 279.
              </dd>
            </div>

            <div className="space-y-1.5">
              <dt className="font-bold text-red-400 text-sm">✂️ CapCut Pro 4K Editing</dt>
              <dd className="text-slate-400 leading-relaxed">
                Export 4K videos without watermarks using <a href="https://www.capcut.com/" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">CapCut Pro's</a> auto-captions, AI video effects, body tracking, and trending TikTok templates.
              </dd>
            </div>
          </dl>

          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-emerald-400" />
              <span>Verified 4.9/5 Rating across 5,000+ Pakistani Creators</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock size={15} className="text-blue-400" />
              <span>SSL Encrypted &amp; Secure Account Activation</span>
            </div>
          </div>
        </div>

        {/* Additional SEO Content — Extended Coverage (~400 words) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <article className="p-6 rounded-2xl bg-[#0d0e14] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-2">
              <Globe size={20} />
            </div>
            <h3 className="text-lg font-bold text-white">Additional AI Tools: HeyGen, Figma, YouTube Premium &amp; More</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Beyond our flagship offerings, Prime Tools Hub provides access to specialized tools for every professional need. HeyGen Creator subscription offers 600 AI credits for generating realistic avatar videos with multi-language dubbing — perfect for marketing agencies and course creators producing video content at scale.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Figma Pro gives UI/UX designers and product teams industry-standard collaborative design capabilities with unlimited projects, components, and design system libraries. Notion Plus provides advanced project management, wikis, databases, and team collaboration workspace for startups and remote teams.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              YouTube Premium eliminates ads across all YouTube videos, unlocks YouTube Music, enables background playback, and allows offline video downloads — activated directly on your personal Google account via a fixed family slot for 1, 3, or 12 months.
            </p>
          </article>

          <article className="p-6 rounded-2xl bg-[#0d0e14] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-2">
              <Users size={20} />
            </div>
            <h3 className="text-lg font-bold text-white">Who Uses Prime Tools Hub? Our Customer Base</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our diverse customer base spans every digital profession in Pakistan and beyond. Freelancers on Upwork, Fiverr, and PeoplePerHour use ChatGPT Plus and Gemini Pro to deliver faster, higher-quality work to international clients. Social media managers and TikTok creators rely on CapCut Pro and Canva Pro for producing professional content without expensive subscriptions.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              University students access ChatGPT Plus for research assistance, essay drafting, and coding homework. Software developers use Lovable AI and Cursor AI Pro for rapid prototyping and AI-assisted development. Digital marketing agencies purchase bulk subscriptions for their teams at our exclusive agency pricing — saving thousands of rupees monthly compared to retail pricing.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Privacy-conscious users across Pakistan rely on our Surfshark VPN and NordVPN subscriptions for encrypted browsing, geo-unblocking streaming services, and protecting sensitive data on public WiFi networks. Every subscription comes with our trademark instant WhatsApp delivery and full replacement warranty.
            </p>
          </article>

        </div>

      </div>
    </section>
  );
}
