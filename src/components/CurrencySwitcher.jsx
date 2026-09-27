export default function CurrencySwitcher() {
  return (
    <div
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 select-none shrink-0 text-xs font-black tracking-wide"
      title="Store Currency: USD ($)"
    >
      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#00ff88]" />
      <span className="text-[11px] font-bold">USD ($)</span>
    </div>
  );
}
