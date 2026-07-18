import { useEffect, useRef } from "react";

// Performance-optimized Canvas-based floating particle background.
// Constrained to viewport size using fixed positioning to prevent huge canvas rendering lag.
export default function ParticleBackground({ color = "#8B5CF6", count }) {
  const canvasRef = useRef(null);
  const colorRef = useRef(color);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    colorRef.current = color;
  }, [color]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    let raf;
    let particles = [];

    const isMobile = window.innerWidth < 768;
    const n = count || (isMobile ? 15 : 35); // Optimized particle count

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.2); // Cap DPR to 1.2 for performance
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function hexToRgb(hex) {
      const h = hex.replace("#", "");
      const v = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
      const num = parseInt(v, 16);
      return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
    }

    function spawn() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      particles = [];
      for (let i = 0; i < n; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 2 + 0.5,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          o: Math.random() * 0.25 + 0.05,
        });
      }
    }

    function draw() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      const [r, g, b] = hexToRgb(colorRef.current);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const p of particles) {
        // gentle mouse attraction
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const f = (1 - dist / 120) * 0.4;
          p.x += dx * 0.008 * f;
          p.y += dy * 0.008 * f;
        }
        p.x += p.vx;
        p.y += p.vy;
        
        // Wrap around viewport edges
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${p.o})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }

    function onMouse(e) {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    }
    function onLeave() {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    }

    resize();
    spawn();
    draw();

    window.addEventListener("resize", resize); // Only resize, do NOT trigger GC spawn spike
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none"
      style={{ zIndex: -10 }}
      aria-hidden="true"
    />
  );
}