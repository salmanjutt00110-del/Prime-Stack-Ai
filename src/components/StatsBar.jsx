import { useEffect, useRef, useState } from "react";
import { Package, Users, Headphones, Zap } from "lucide-react";

const STATS = [
  { icon: Package, value: 8, suffix: "+", label: "Premium Products" },
  { icon: Users, value: 500, suffix: "+", label: "Happy Clients" },
  { icon: Headphones, value: 24, suffix: "/7", label: "Support" },
  { icon: Zap, value: 100, suffix: "%", label: "Instant Delivery" },
];

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

  return (
    <section className="relative py-10 px-4 sm:px-6">
      <div
        ref={ref}
        className="mx-auto max-w-5xl rounded-2xl px-6 py-8 flex flex-wrap items-center justify-center gap-y-6 ps-luxury-glass"
      >
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className="flex-1 min-w-[140px] flex flex-col items-center text-center px-2 relative"
          >
            {i > 0 && (
              <span className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 h-10 w-px bg-white/10" />
            )}
            <s.icon className="text-blue-400 mb-2" size={22} />
            <div className="text-2xl sm:text-3xl font-bold text-white font-display">
              <Counter to={s.value} active={inView} />
              {s.suffix}
            </div>
            <div className="text-xs sm:text-sm text-white/50 mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}