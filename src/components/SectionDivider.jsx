import { memo } from "react";

export default memo(function SectionDivider({ color = "rgba(139, 92, 246, 0.4)" }) {
  return (
    <div className="relative w-full py-2 pointer-events-none z-10 flex items-center justify-center overflow-hidden">
      {/* Glowing horizontal divider line */}
      <div
        className="w-full h-[1px] opacity-70"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${color} 50%, transparent 100%)`,
        }}
      />
      {/* Center glowing orb */}
      <div
        className="absolute w-24 h-6 rounded-full blur-lg opacity-40"
        style={{
          background: color,
        }}
      />
    </div>
  );
});
