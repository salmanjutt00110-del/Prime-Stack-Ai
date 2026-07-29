import { useState, useEffect } from "react";
import { Flame, Clock } from "lucide-react";

export default function CountdownTimer({
  targetPrice = "Rs. 1,099",
  futurePrice = "Rs. 1,599",
  compact = false,
}) {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 54, seconds: 30 });

  useEffect(() => {
    // Persistent 24h countdown target timestamp stored in localStorage
    const STORAGE_KEY = "ps_gemini_24h_deal_end";
    let endTime = localStorage.getItem(STORAGE_KEY);
    const now = Date.now();

    if (!endTime || parseInt(endTime, 10) <= now) {
      // Set end time to 23 hours and 58 minutes from now
      const newEndTime = now + (23 * 60 * 60 + 58 * 60) * 1000;
      localStorage.setItem(STORAGE_KEY, newEndTime.toString());
      endTime = newEndTime.toString();
    }

    const targetTime = parseInt(endTime, 10);

    const updateTimer = () => {
      const remaining = targetTime - Date.now();
      if (remaining <= 0) {
        // Reset 24h timer cycle
        const resetEndTime = Date.now() + 24 * 60 * 60 * 1000;
        localStorage.setItem(STORAGE_KEY, resetEndTime.toString());
        setTimeLeft({ hours: 23, minutes: 59, seconds: 59 });
      } else {
        const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((remaining / (1000 * 60)) % 60);
        const seconds = Math.floor((remaining / 1000) % 60);
        setTimeLeft({ hours, minutes, seconds });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, "0");

  if (compact) {
    return (
      <div className="flex items-center justify-between gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-red-500/20 via-amber-500/20 to-purple-500/20 border border-red-500/40 text-white font-mono text-[11px]">
        <div className="flex items-center gap-1 text-red-400 font-bold shrink-0">
          <Flame size={13} className="animate-pulse text-amber-400" />
          <span className="uppercase tracking-wider text-[10px]">Limited 24h Offer:</span>
        </div>
        <div className="flex items-center gap-1 font-bold text-amber-300">
          <span>{formatNumber(timeLeft.hours)}h</span>
          <span>:</span>
          <span>{formatNumber(timeLeft.minutes)}m</span>
          <span>:</span>
          <span className="text-red-400 animate-pulse">{formatNumber(timeLeft.seconds)}s</span>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl p-4 sm:p-5 border bg-gradient-to-r from-red-950/60 via-purple-950/40 to-blue-950/60 border-red-500/40 shadow-2xl backdrop-blur-xl relative overflow-hidden my-4">
      {/* Background Pulse Glow */}
      <div className="absolute inset-0 -z-10 bg-radial from-red-500/10 via-transparent to-transparent blur-xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: Text & Badges */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/50 flex items-center justify-center shrink-0">
            <Flame size={22} className="text-amber-400 animate-bounce" />
          </div>
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-0.5">
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-red-500/30 text-red-200 border border-red-400/40 animate-pulse">
                ⚡ 24-Hour Flash Sale
              </span>
              <span className="text-xs text-amber-300 font-bold">Limited Offer</span>
            </div>
            <p className="text-xs text-slate-200 font-body">
              Special Price <strong className="text-emerald-400 font-bold">{targetPrice}</strong> (Regular <span className="line-through text-slate-400">{futurePrice}</span>). Price increases after timer!
            </p>
          </div>
        </div>

        {/* Right: Countdown Clock Display */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center justify-center flex-col w-12 h-12 rounded-xl bg-black/60 border border-white/15 text-white shadow-inner">
            <span className="font-mono font-black text-lg text-amber-300 leading-none">{formatNumber(timeLeft.hours)}</span>
            <span className="text-[9px] uppercase tracking-wider text-slate-400 mt-0.5">HRS</span>
          </div>
          <span className="font-mono font-bold text-lg text-amber-400 animate-pulse">:</span>
          <div className="flex items-center justify-center flex-col w-12 h-12 rounded-xl bg-black/60 border border-white/15 text-white shadow-inner">
            <span className="font-mono font-black text-lg text-amber-300 leading-none">{formatNumber(timeLeft.minutes)}</span>
            <span className="text-[9px] uppercase tracking-wider text-slate-400 mt-0.5">MIN</span>
          </div>
          <span className="font-mono font-bold text-lg text-amber-400 animate-pulse">:</span>
          <div className="flex items-center justify-center flex-col w-12 h-12 rounded-xl bg-black/60 border border-red-500/50 text-white shadow-inner">
            <span className="font-mono font-black text-lg text-red-400 leading-none animate-pulse">{formatNumber(timeLeft.seconds)}</span>
            <span className="text-[9px] uppercase tracking-wider text-red-300/80 mt-0.5">SEC</span>
          </div>
        </div>

      </div>
    </div>
  );
}
