import { motion, useReducedMotion } from "framer-motion";

const smoothEase = [0.16, 1, 0.3, 1];

/**
 * Scroll-reveal wrapper with slow, buttery smooth motion.
 * @param {string} [direction] "up" | "down" | "left" | "right" | "none"
 * @param {number} [distance]  offset in px (default 32)
 * @param {number} [delay]     seconds (default 0)
 * @param {number} [duration]  seconds (default 0.9)
 * @param {number} [scale]     initial scale (default 1)
 * @param {string} [as]        wrapper element (default "div")
 * @param {number} [amount]    viewport trigger fraction (default 0.15)
 */
export default function Reveal({
  children,
  direction = "up",
  distance = 32,
  delay = 0,
  duration = 0.9,
  scale = 1,
  className = "",
  as = "div",
  amount = 0.15,
  once = true,
  style = {},
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return <Tag className={className} style={style}>{children}</Tag>;
  }

  const initial = {
    opacity: 0,
    x: direction === "left" ? -distance : direction === "right" ? distance : 0,
    y: direction === "up" ? distance : direction === "down" ? -distance : 0,
    scale,
  };

  return (
    <MotionTag
      className={className}
      style={style}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, amount, margin: "-30px 0px" }}
      transition={{
        duration,
        delay,
        ease: smoothEase,
      }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Staggered container for grids, lists, and card groups.
 */
export function StaggerContainer({
  children,
  className = "",
  as = "div",
  stagger = 0.12,
  delay = 0,
  amount = 0.12,
  once = true,
  style = {},
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return <Tag className={className} style={style}>{children}</Tag>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  return (
    <MotionTag
      className={className}
      style={style}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "-30px 0px" }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Child item inside a StaggerContainer.
 */
export function StaggerItem({
  children,
  className = "",
  as = "div",
  y = 28,
  x = 0,
  scale = 1,
  duration = 0.85,
  style = {},
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return <Tag className={className} style={style}>{children}</Tag>;
  }

  const itemVariants = {
    hidden: { opacity: 0, y, x, scale },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        ease: smoothEase,
      },
    },
  };

  return (
    <MotionTag className={className} style={style} variants={itemVariants}>
      {children}
    </MotionTag>
  );
}

