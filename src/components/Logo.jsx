import { LOGO } from "@/data/products";

// PrimeStack AI brand mark with floating + glow animation.
export default function Logo({ size = 40, animated = true }) {
  return (
    <div
      className={`relative flex items-center justify-center rounded-xl overflow-hidden ${
        animated ? "ps-logo-anim" : ""
      }`}
      style={{
        width: size,
        height: size,
        background:
          "linear-gradient(135deg, rgba(59,130,246,0.18), rgba(139,92,246,0.18), rgba(236,72,153,0.18))",
        border: "1px solid rgba(255,255,255,0.16)",
        boxShadow: animated
          ? "0 0 24px rgba(139,92,246,0.45)"
          : "0 0 0 transparent",
      }}
    >
      {/* shimmer sweep */}
      <span className="ps-shimmer absolute inset-0" />
      <img
        src={LOGO.primestack}
        alt="PrimeStack AI"
        className="relative w-[72%] h-[72%] object-contain"
        style={{ filter: "drop-shadow(0 0 6px rgba(139,92,246,0.6))" }}
      />
    </div>
  );
}