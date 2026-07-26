import { useEffect, useRef, useState } from "react";
import { Package, Users, Headphones, Zap } from "lucide-react";
import { useLanguageTheme } from "@/lib/LanguageThemeContext";

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

function Counter({ to, active }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf;
    const start = performance.now();
    const dur = 1500;
    const tick = (now) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(eased * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, to]);
  return <>{n}</>;
}

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const { t, isDark } = useLanguageTheme();

  const STATS = [
    { icon: Package, value: 30, suffix: "+", label: t('cat_all', 'Premium Products') },
    { icon: Users, value: 15000, suffix: "+", label: t('stats_clients', 'Happy Clients') },
    { icon: Headphones, value: 24, suffix: "/7", label: t('stats_support', 'Support Active') },
    { icon: Zap, value: 100, suffix: "%", label: t('stats_guarantee', '100% Replacement Warranty') },
  ];

  return (
    <section className="relative py-10 px-4 sm:px-6">
      <div
        ref={ref}
        className="mx-auto max-w-5xl rounded-2xl px-6 py-8 flex flex-wrap items-center justify-center gap-y-6 ps-luxury-glass border shadow-lg"
      >
        {STATS.map((s, i) => (
          <div
            key={i}
            className="flex-1 min-w-[140px] flex flex-col items-center text-center px-2 relative"
          >
            {i > 0 && (
              <span className={`hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 h-10 w-px ${isDark ? "bg-white/10" : "bg-slate-300"}`} />
            )}
            <s.icon className="text-violet-500 mb-2" size={22} />
            <div className={`text-2xl sm:text-3xl font-bold font-display ${isDark ? "text-white" : "text-slate-900"}`}>
              <Counter to={s.value} active={inView} />
              {s.suffix}
            </div>
            <div className={`text-xs sm:text-sm font-medium mt-1 ${isDark ? "text-white/60" : "text-slate-600"}`}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}