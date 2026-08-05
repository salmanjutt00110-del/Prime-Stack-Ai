import { motion } from "framer-motion";

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.4,
  direction = "up", // 'up' | 'down' | 'left' | 'right' | 'scale'
  className = ""
}) {
  const getVariants = () => {
    switch (direction) {
      case "down":
        return { initial: { opacity: 0, y: -25 }, animate: { opacity: 1, y: 0 } };
      case "left":
        return { initial: { opacity: 0, x: -30 }, animate: { opacity: 1, x: 0 } };
      case "right":
        return { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } };
      case "scale":
        return { initial: { opacity: 0, scale: 0.92 }, animate: { opacity: 1, scale: 1 } };
      case "up":
      default:
        return { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } };
    }
  };

  const { initial, animate } = getVariants();

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
