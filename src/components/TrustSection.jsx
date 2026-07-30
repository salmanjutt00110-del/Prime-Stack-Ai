import { ShieldCheck, RefreshCw, Zap, Star, ShoppingBag, Headphones, Lock, Calendar, CreditCard, DollarSign } from "lucide-react";

const STATS_ITEMS = [
  { icon: ShoppingBag, val: "1,200+", label: "Orders Completed", grad: "from-blue-400 via-cyan-400 to-[#00ff88]", iconColor: "text-blue-400" },
  { icon: Star, val: "4.9★", label: "Customer Rating", grad: "from-amber-400 via-yellow-300 to-[#00ff88]", iconColor: "text-amber-400", fill: true },
  { icon: Zap, val: "5-30m", label: "Instant Delivery", grad: "from-[#00ff88] via-emerald-300 to-cyan-400", iconColor: "text-[#00ff88]" },
  { icon: Headphones, val: "30 Days", label: "Dedicated Support", grad: "from-purple-400 via-pink-400 to-indigo-400", iconColor: "text-purple-400" },
  { icon: Lock, val: "100%", label: "Secure Payment", grad: "from-emerald-400 via-teal-300 to-blue-400", iconColor: "text-emerald-400" },
  { icon: Calendar, val: "2+ Yrs", label: "Active & Trusted", grad: "from-cyan-400 via-blue-400 to-purple-400", iconColor: "text-cyan-400" },
];

const PAYMENT_METHODS = [
  { name: "JazzCash", color: "bg-gradient-to-r from-red-600/30 via-rose-600/20 to-red-950/40 border-red-500/40 text-white shadow-red-950/40", dot: "bg-red-500" },
  { name: "EasyPaisa", color: "bg-gradient-to-r from-emerald-600/30 via-teal-600/20 to-emerald-950/40 border-emerald-500/40 text-white shadow-emerald-950/40", dot: "bg-emerald-400" },
  { name: "Bank Transfer", color: "bg-gradient-to-r from-blue-600/30 via-indigo-600/20 to-blue-950/40 border-blue-500/40 text-white shadow-blue-950/40", icon: CreditCard, iconColor: "text-blue-400" },
  { name: "USDT / Crypto", color: "bg-gradient-to-r from-amber-600/30 via-yellow-600/20 to-amber-950/40 border-amber-500/40 text-white shadow-amber-950/40", icon: DollarSign, iconColor: "text-amber-400" },
];

export default function TrustSection() {
  return (
    <section className="relative z-10 py-14 bg-gradient-to-b from-[#050505] via-[#090d16] to-[#050505] border-y border-white/10 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-[#00ff88]/10 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* BLOCK A — STATS BAR (Infinite Gradient Horizontal Marquee) */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0d1117] via-[#111827] to-[#0d1117] border border-blue-500/30 p-5 shadow-[0_0_35px_rgba(37,99,235,0.15)] overflow-hidden group">
          <div className="flex gap-8 animate-marquee group-hover:[animation-play-state:paused] w-max">
            {[...STATS_ITEMS, ...STATS_ITEMS, ...STATS_ITEMS, ...STATS_ITEMS].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="flex items-center gap-3 shrink-0 px-4 py-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                  <div className="flex items-center gap-1.5 font-black text-xl sm:text-2xl font-display">
                    <IconComp size={22} className={`${item.iconColor} ${item.fill ? "fill-amber-400" : ""}`} />
                    <span className={`bg-gradient-to-r ${item.grad} bg-clip-text text-transparent`}>
                      {item.val}
                    </span>
                  </div>
                  <span className="text-xs font-black text-slate-300 uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* BLOCK B — PAYMENT METHODS STRIP (Infinite Gradient Horizontal Marquee) */}
        <div className="rounded-3xl bg-gradient-to-r from-[#0d1117] via-[#0f172a] to-[#0d1117] border border-emerald-500/30 p-6 text-center space-y-4 shadow-[0_0_35px_rgba(16,185,129,0.12)] overflow-hidden group">
          <h3 className="text-xs sm:text-sm font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] via-cyan-300 to-blue-400 flex items-center justify-center gap-2">
            <Lock size={16} className="text-[#00ff88]" />
            Secure Payment Methods Accepted
          </h3>

          <div className="flex overflow-hidden py-1">
            <div className="flex gap-4 sm:gap-6 animate-marquee-reverse group-hover:[animation-play-state:paused] w-max">
              {[...PAYMENT_METHODS, ...PAYMENT_METHODS, ...PAYMENT_METHODS, ...PAYMENT_METHODS].map((pay, i) => {
                const PayIcon = pay.icon;
                return (
                  <div
                    key={i}
                    className={`px-6 py-3 rounded-2xl border text-sm font-black flex items-center gap-2.5 shrink-0 shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-105 ${pay.color}`}
                  >
                    {pay.dot && <span className={`w-2.5 h-2.5 rounded-full ${pay.dot} animate-pulse`} />}
                    {PayIcon && <PayIcon size={17} className={pay.iconColor} />}
                    <span>{pay.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* BLOCK C — GUARANTEE BADGES (3 Modern Gradient Glass Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#0d1117] to-[#080c14] border border-emerald-500/40 backdrop-blur-2xl hover:border-emerald-400 transition-all shadow-[0_15px_40px_rgba(0,0,0,0.8)] group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-[#00ff88] to-cyan-400" />
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <ShieldCheck size={28} />
            </div>
            <h4 className="font-display font-black text-xl text-white">
              Verified Accounts
            </h4>
            <p className="text-xs text-slate-300 mt-2.5 leading-relaxed font-body">
              100% Real &amp; Official access. No fake portals, no risky credentials. Your peace of mind is guaranteed.
            </p>
          </div>

          <div className="relative p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#0d1117] to-[#080c14] border border-blue-500/40 backdrop-blur-2xl hover:border-blue-400 transition-all shadow-[0_15px_40px_rgba(0,0,0,0.8)] group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <RefreshCw size={28} />
            </div>
            <h4 className="font-display font-black text-xl text-white">
              If Issue Arises — We Fix It Free
            </h4>
            <p className="text-xs text-slate-300 mt-2.5 leading-relaxed font-body">
              Complete replacement warranty. If your tool access has any issue during the warranty period, we replace it for free.
            </p>
          </div>

          <div className="relative p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#0d1117] to-[#080c14] border border-[#00ff88]/40 backdrop-blur-2xl hover:border-[#00ff88] transition-all shadow-[0_15px_40px_rgba(0,0,0,0.8)] group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ff88] via-cyan-400 to-blue-500" />
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00ff88]/20 to-emerald-500/10 border border-[#00ff88]/40 flex items-center justify-center text-[#00ff88] mb-4 group-hover:scale-110 transition-transform shadow-lg">
              <Zap size={28} />
            </div>
            <h4 className="font-display font-black text-xl text-white">
              Delivery in 5–30 Minutes
            </h4>
            <p className="text-xs text-slate-300 mt-2.5 leading-relaxed font-body">
              Fast processing after payment confirmation. Get started with your AI tool without unnecessary delays.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
