import { Check, X, ShieldCheck } from "lucide-react";

export default function ComparisonTable() {
  const rows = [
    { feature: "100% Verified & Official Accounts", us: true, others: false, textUs: "Official & Guaranteed", textOthers: "Risky / Unverified" },
    { feature: "Instant Delivery (5-30 mins)", us: true, others: false, textUs: "5–30 Minutes", textOthers: "Hours / Days Delay" },
    { feature: "Full 30-Day Support & Replacement", us: true, others: false, textUs: "30-Day Free Fix", textOthers: "Ghost After Payment" },
    { feature: "Affordable Wholesale Rates in PKR", us: true, others: false, textUs: "Best Prices", textOthers: "Overpriced / Hidden Fees" },
    { feature: "Local Payment via JazzCash & EasyPaisa", us: true, others: false, textUs: "Instant Local Pay", textOthers: "Complex / Foreign Cards" },
    { feature: "Long-term Reliability & Trust (2+ Yrs)", us: true, others: false, textUs: "1,200+ Verified Buyers", textOthers: "New / Scam Sellers" },
  ];

  return (
    <section className="py-16 px-4 bg-[#050505] border-t border-white/10 relative z-10">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            Why Choose Us
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight mt-3">
            Why Buy from Us vs Other Sellers?
          </h2>
          <p className="text-slate-400 text-sm mt-2 font-body max-w-xl mx-auto">
            Compare Prime Tools Hub against unauthorized random sellers before placing your order.
          </p>
        </div>

        {/* Table Container */}
        <div className="rounded-2xl border border-white/10 bg-[#0d1117] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-12 bg-slate-900/90 p-4 font-display text-sm font-extrabold border-b border-white/10 text-slate-200">
            <div className="col-span-6 sm:col-span-6 flex items-center gap-2">
              <ShieldCheck size={18} className="text-blue-400" />
              <span>Features &amp; Guarantees</span>
            </div>
            <div className="col-span-3 sm:col-span-3 text-center text-[#00ff88] flex items-center justify-center gap-1">
              <span>Prime Tools Hub</span>
            </div>
            <div className="col-span-3 sm:col-span-3 text-center text-slate-400">
              <span>Random Sellers</span>
            </div>
          </div>

          <div className="divide-y divide-white/5">
            {rows.map((row, i) => (
              <div key={i} className="grid grid-cols-12 p-4 items-center text-xs sm:text-sm hover:bg-white/[0.02] transition-colors">
                <div className="col-span-6 sm:col-span-6 font-bold text-slate-200">
                  {row.feature}
                </div>

                <div className="col-span-3 sm:col-span-3 text-center flex flex-col items-center justify-center font-extrabold text-emerald-400 bg-emerald-500/5 py-2 rounded-xl border border-emerald-500/20">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-0.5">
                    <Check size={14} />
                  </span>
                  <span className="text-[11px] sm:text-xs">{row.textUs}</span>
                </div>

                <div className="col-span-3 sm:col-span-3 text-center flex flex-col items-center justify-center font-bold text-red-400 bg-red-500/5 py-2 rounded-xl border border-red-500/10">
                  <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mb-0.5">
                    <X size={14} />
                  </span>
                  <span className="text-[11px] sm:text-xs">{row.textOthers}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
