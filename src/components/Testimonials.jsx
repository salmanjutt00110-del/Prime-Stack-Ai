import { Star, CheckCircle2, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const REVIEWS_ROW_1 = [
  {
    name: "Usman Tariq",
    city: "Lahore 🇵🇰",
    rating: 5,
    text: "ChatGPT Plus mila 15 minutes mein! JazzCash se payment ki, koi problem nahi. Highly recommend!",
    tool: "ChatGPT Plus",
  },
  {
    name: "Sara Ahmed",
    city: "Karachi 🇵🇰",
    rating: 5,
    text: "Canva Pro subscription received smoothly. 1 year active without any interruption. Best support team!",
    tool: "Canva Pro",
  },
  {
    name: "Bilal Hassan",
    city: "Islamabad 🇵🇰",
    rating: 5,
    text: "Veo 3 instant delivery via WhatsApp. Verified credentials and very polite customer response.",
    tool: "Veo 3",
  },
  {
    name: "Fatima Rizvi",
    city: "Peshawar 🇵🇰",
    rating: 5,
    text: "Surfshark VPN ka price bohot sasta hai official pricing se. Shukriya Prime Tools Hub!",
    tool: "Surfshark VPN",
  },
  {
    name: "Kashif Mehmood",
    city: "Sialkot 🇵🇰",
    rating: 5,
    text: "Order placed on WhatsApp and activated in less than 10 minutes. Super legit service!",
    tool: "Gemini Advanced",
  },
  {
    name: "Aisha Malik",
    city: "Rawalpindi 🇵🇰",
    rating: 5,
    text: "Got CapCut Pro for video editing. Everything unlocked seamlessly on my account.",
    tool: "CapCut Pro",
  },
];

const REVIEWS_ROW_2 = [
  {
    name: "Zara Noman",
    city: "Multan 🇵🇰",
    rating: 5,
    text: "Gemini Pro aur CapCut dono liye. Dono chal rahe hain perfectly. 10/10 service.",
    tool: "Gemini Pro",
  },
  {
    name: "Hamza Tanveer",
    city: "Faisalabad 🇵🇰",
    rating: 5,
    text: "Pehle dar tha lekin dost ke kehne par try kiya. Ab main khud 3 baar re-order kar chuka hun.",
    tool: "ChatGPT Plus",
  },
  {
    name: "Ali Raza",
    city: "Gujranwala 🇵🇰",
    rating: 5,
    text: "Quick activation link and smooth replacement warranty support. Highly recommended in Pakistan!",
    tool: "CapCut Pro",
  },
  {
    name: "Nida Siddiqui",
    city: "Quetta 🇵🇰",
    rating: 5,
    text: "EasyPaisa payment method makes it so convenient. Account delivery was within 10 mins.",
    tool: "Canva Pro",
  },
  {
    name: "Danial Khan",
    city: "Hyderabad 🇵🇰",
    rating: 5,
    text: "Youtube Premium 12 months family plan working flawlessly. Great price!",
    tool: "YouTube Premium",
  },
  {
    name: "Saad Baig",
    city: "Bahawalpur 🇵🇰",
    rating: 5,
    text: "Notion AI and ChatGPT Plus package was super fast to setup. Excellent customer care.",
    tool: "Notion AI",
  },
];

function ReviewCard({ review }) {
  return (
    <div className="w-[300px] sm:w-[350px] shrink-0 p-5 rounded-2xl bg-[#0d1117] border border-white/10 shadow-xl flex flex-col justify-between hover:border-cyan-500/40 transition-all">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-1">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
            ))}
          </div>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 border border-blue-500/20 text-blue-300">
            {review.tool}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-body italic mb-4">
          "{review.text}"
        </p>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
        <div>
          <span className="font-extrabold text-white block">{review.name}</span>
          <span className="text-slate-400 text-[11px]">{review.city}</span>
        </div>
        <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
          <CheckCircle2 size={12} /> Verified Buyer
        </span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#050505] relative z-10 overflow-hidden border-t border-white/10">
      
      {/* SECTION HEADER */}
      <div className="mx-auto max-w-4xl text-center px-4 mb-12">
        <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
          Customer Reviews
        </span>
        <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight mt-3">
          ⭐ What Our 1,200+ Customers Say
        </h2>
        <p className="text-slate-300 text-sm sm:text-base mt-2 font-body">
          4.9 out of 5 — Based on verified WhatsApp orders across Pakistan
        </p>
      </div>

      {/* MARQUEE ROW 1 (Left Scrolling) */}
      <div className="relative w-full overflow-hidden mb-6 group">
        <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused] w-max">
          {[...REVIEWS_ROW_1, ...REVIEWS_ROW_1].map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>

      {/* MARQUEE ROW 2 (Right Scrolling) */}
      <div className="relative w-full overflow-hidden group">
        <div className="flex gap-6 animate-marquee-reverse group-hover:[animation-play-state:paused] w-max">
          {[...REVIEWS_ROW_2, ...REVIEWS_ROW_2].map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>

      {/* CTA BUTTON BELOW */}
      <div className="text-center mt-12">
        <Link
          to="/reviews"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-display font-extrabold text-sm text-white bg-slate-900 border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all cursor-pointer shadow-lg"
        >
          <MessageCircle size={16} className="text-[#00ff88]" />
          <span>See More Reviews →</span>
        </Link>
      </div>

    </section>
  );
}