import { useCurrency } from "@/context/CurrencyContext";

export default function CurrencySwitcher({ compact = false }) {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="inline-flex items-center p-0.5 rounded-xl bg-white/[0.08] border border-white/15 backdrop-blur-md select-none shrink-0">
      <button
        type="button"
        onClick={() => setCurrency("PKR")}
        className={`px-2.5 py-1 rounded-lg text-[11px] font-black transition-all cursor-pointer ${
          currency === "PKR"
            ? "bg-[#00ff88] text-slate-950 shadow-sm font-extrabold"
            : "text-slate-400 hover:text-white"
        }`}
      >
        PKR
      </button>

      <span className="text-white/20 text-[10px] px-0.5 font-bold">|</span>

      <button
        type="button"
        onClick={() => setCurrency("USD")}
        className={`px-2.5 py-1 rounded-lg text-[11px] font-black transition-all cursor-pointer ${
          currency === "USD"
            ? "bg-blue-600 text-white shadow-sm font-extrabold"
            : "text-slate-400 hover:text-white"
        }`}
      >
        USD
      </button>
    </div>
  );
}
