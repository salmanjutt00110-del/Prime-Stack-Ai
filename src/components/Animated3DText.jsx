import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Animated3DText
 * A premium typography component that splits text into words and letters,
 * applying a staggered 3D entrance rotation (along the X-axis) and
 * interactive 3D parallax tilt effects on cursor hover.
 * Optimized to bypass letter-splitting on mobile to prevent performance lag.
 */
export default function Animated3DText({
  text,
  className = "",
  delay = 0,
  hoverTilt = true,
  variant = "heading", // "heading" | "subheading" | "body"
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const words = text.split(" ");

  // Container variants triggering staggered entrance animations on scroll
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

  // Letter animations doing a flip rotation around the X-axis with deep perspective
  const letterVariants = {
    hidden: {
      opacity: 0,
      rotateX: 85,
      y: 15,
      z: -30,
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      z: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // Mobile simple entry animation (opacity and y shift for the entire block)
  const mobileVariants = {
    hidden: { opacity: 0, y: 15 },
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

  // Custom styling based on hierarchy
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
        className={`inline-block select-none ${baseShadow} ${className}`}
      >
        {text}
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
      className={`inline-block select-none ${baseShadow} ${className}`}
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
