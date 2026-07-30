import { useState } from "react";
import { MessageCircle, X, Sparkles } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/products";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello! I saw the limited-time discount on ChatGPT Plus (Rs. 1,299) on Prime Tools Hub and want to order."
  )}`;

  return (
    <div className="relative z-50 bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-white py-2 px-4 text-xs sm:text-sm font-semibold flex items-center justify-between shadow-lg">
      <div className="mx-auto flex flex-wrap items-center justify-center gap-2 text-center">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/20 text-yellow-300 font-extrabold text-[11px] uppercase tracking-wider">
          <Sparkles size={12} className="animate-pulse" /> Limited Offer
        </span>
        <span>
          🔥 Limited Time: Get <strong className="text-yellow-300">ChatGPT Plus</strong> for <strong>Rs. 1,299</strong> this week only!
        </span>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-3 py-1 rounded-full text-xs transition-transform hover:scale-105 shadow-md ml-1"
        >
          <MessageCircle size={13} className="fill-slate-950" />
          Order Now →
        </a>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="p-1 rounded-full hover:bg-white/20 transition-colors text-white/80 hover:text-white cursor-pointer ml-2"
        aria-label="Close announcement bar"
      >
        <X size={15} />
      </button>
    </div>
  );
}
