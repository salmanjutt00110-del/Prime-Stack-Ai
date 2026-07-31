import { motion } from "framer-motion";

/**
 * Animated3DText
 * Simplified to use a clean, performant 2D fade-in and slide-up animation.
 * Avoids character splitting and 3D rotations to eliminate rendering lag on mobile/desktop.
 */
export default function Animated3DText({
  text = "",
  className = "",
  delay = 0,
  variant = "heading",
}) {
  const safeText = typeof text === "string" ? text : String(text || "");

  const variants = {
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

  const baseClass =
    variant === "heading"
      ? "hover:text-violet-400 transition-colors duration-500"
      : "";

  return (
    <motion.span
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      custom={delay}
      className={`inline-block w-full max-w-full text-balance break-normal select-none ${baseClass} ${className}`}
    >
      {safeText}
    </motion.span>
  );
}
