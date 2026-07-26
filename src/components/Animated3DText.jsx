import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Animated3DText
 * Premium typography component that splits text into words/letters on desktop
 * and renders clean, balanced text on mobile to ensure zero overflow clipping.
 */
export default function Animated3DText({
  text = "",
  className = "",
  delay = 0,
  hoverTilt = true,
  variant = "heading",
}) {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const safeText = typeof text === "string" ? text : String(text || "");
  const words = safeText.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (customDelay = 0) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: customDelay,
      },
    }),
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      rotateX: 85,
      y: 12,
      z: -20,
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      z: 0,
      transition: {
        type: "spring",
        damping: 14,
        stiffness: 110,
      },
    },
  };

  const mobileVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: (customDelay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: customDelay,
        ease: "easeOut",
      },
    }),
  };

  const baseShadow =
    variant === "heading"
      ? "ps-text-3d hover:text-violet-400 transition-colors duration-500"
      : "";

  if (isMobile) {
    return (
      <motion.span
        variants={mobileVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20px" }}
        custom={delay}
        className={`inline-block w-full max-w-full text-balance break-normal select-none ${baseShadow} ${className}`}
      >
        {safeText}
      </motion.span>
    );
  }

  return (
    <motion.span
      style={{ perspective: 1200, display: "inline-block" }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      custom={delay}
      className={`inline-block max-w-full select-none ${baseShadow} ${className}`}
    >
      {words.map((word, wordIdx) => (
        <span
          key={wordIdx}
          className="inline-block whitespace-nowrap mr-[0.25em]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {Array.from(word).map((char, charIdx) => (
            <motion.span
              key={charIdx}
              variants={letterVariants}
              className="inline-block origin-center"
              style={{
                display: "inline-block",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
              whileHover={
                hoverTilt
                  ? {
                      rotateY: 25,
                      rotateX: -20,
                      z: 40,
                      scale: 1.12,
                      color: "#A78BFA",
                      textShadow: "0 10px 20px rgba(139, 92, 246, 0.45)",
                      transition: { duration: 0.18 },
                    }
                  : {}
              }
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}
