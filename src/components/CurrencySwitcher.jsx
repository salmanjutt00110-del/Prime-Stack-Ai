import { useCurrency } from "@/context/CurrencyContext";

const CURRENCIES = [
  { code: "PKR", label: "PKR", flag: "🇵🇰", activeClass: "bg-[#00ff88] text-slate-950" },
  { code: "USD", label: "USD", flag: "🇺🇸", activeClass: "bg-blue-600 text-white" },
  { code: "GBP", label: "GBP", flag: "🇬🇧", activeClass: "bg-purple-600 text-white" },
];

export default function CurrencySwitcher() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="inline-flex items-center p-0.5 rounded-xl bg-white/[0.08] border border-white/15 backdrop-blur-md select-none shrink-0">
      {CURRENCIES.map((c, i) => {
        const isActive = currency === c.code;
        return (
          <div key={c.code} className="flex items-center">
            {i > 0 && <span className="text-white/20 text-[10px] px-0.5 font-bold">|</span>}
            <button
              type="button"
              onClick={() => setCurrency(c.code)}
              className={`px-2 py-1 rounded-lg text-[11px] font-black transition-all cursor-pointer flex items-center gap-1 ${
                isActive
                  ? `${c.activeClass} shadow-sm font-extrabold`
                  : "text-slate-400 hover:text-white"
              }`}
              title={c.label}
            >
              <span className="text-[10px]">{c.flag}</span>
              <span>{c.label}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
