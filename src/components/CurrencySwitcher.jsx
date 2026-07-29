import { useCurrency } from "@/context/CurrencyContext";
import { DollarSign, Banknote } from "lucide-react";

export default function CurrencySwitcher({ compact = false }) {
  const { currency, setCurrency } = useCurrency();

  return (
    <div
      className={`inline-flex items-center p-0.5 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-md shadow-lg select-none ${
        compact ? "scale-90" : ""
      }`}
    >
      <button
        type="button"
        onClick={() => setCurrency("PKR")}
        className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-black tracking-wide transition-all cursor-pointer ${
          currency === "PKR"
            ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md scale-[1.03]"
            : "text-slate-300 hover:text-white"
        }`}
      >
        <Banknote size={12} className={currency === "PKR" ? "text-white" : "text-emerald-400"} />
        <span>PKR (Rs)</span>
      </button>

      <button
        type="button"
        onClick={() => setCurrency("USD")}
        className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-black tracking-wide transition-all cursor-pointer ${
          currency === "USD"
            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md scale-[1.03]"
            : "text-slate-300 hover:text-white"
        }`}
      >
        <DollarSign size={12} className={currency === "USD" ? "text-white" : "text-blue-400"} />
        <span>USD ($)</span>
      </button>
    </div>
  );
}
