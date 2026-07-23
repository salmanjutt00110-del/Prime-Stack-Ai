import { LOGO } from "@/data/products";

// Prime Tools AI brand mark with floating + glow animation.
export default function Logo({ size = 40, animated = true }) {
  const logoSrc = LOGO.primetools || LOGO.primestack;
  return (
    <div
      className={`relative flex items-center justify-center rounded-xl overflow-hidden shrink-0 ${
        animated ? "ps-logo-anim" : ""
      }`}
      style={{
        width: size,
        height: size,
        background:
          "linear-gradient(135deg, rgba(59,130,246,0.22), rgba(139,92,246,0.22), rgba(236,72,153,0.22))",
        border: "1px solid rgba(255,255,255,0.2)",
        boxShadow: animated
          ? "0 0 24px rgba(139,92,246,0.5)"
          : "0 0 0 transparent",
      }}
    >
      <span className="ps-shimmer absolute inset-0 pointer-events-none" />
      <img
        src={logoSrc}
        alt="Prime Tools Hub logo"
        width={size}
        height={size}
        loading="eager"
        decoding="async"
        className="relative w-[85%] h-[85%] object-contain transition-transform duration-300 group-hover:scale-110"
        style={{ filter: "drop-shadow(0 0 8px rgba(139,92,246,0.7))" }}
      />
    </div>
  );
}