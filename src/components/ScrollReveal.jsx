import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ─── Animation Variants ───────────────────────────────────────────────────────

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.6 },
    visible: { opacity: 1, scale: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  },
};

// ─── Default Transition ───────────────────────────────────────────────────────

const defaultTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1], // custom ease-out-expo feel
};

// ─── ScrollReveal — single element ───────────────────────────────────────────
//
// Usage:
//   <ScrollReveal animation="fadeUp" delay={0.2}>
//     <YourComponent />
//   </ScrollReveal>

export const ScrollReveal = ({
  children,
  animation = "fadeUp",
  delay = 0,
  duration,
  threshold = 0.15,
  once = true,
  className = "",
  as = "div",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const Tag = motion[as] || motion.div;

  return (
    <Tag
      ref={ref}
      variants={variants[animation]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        ...defaultTransition,
        delay,
        ...(duration ? { duration } : {}),
      }}
      className={className}
    >
      {children}
    </Tag>
  );
};

// ─── ScrollStagger — staggered children ──────────────────────────────────────
//
// Wraps a list of children and staggers them in one by one.
//
// Usage:
//   <ScrollStagger staggerDelay={0.1}>
//     <div>Item 1</div>
//     <div>Item 2</div>
//     <div>Item 3</div>
//   </ScrollStagger>

export const ScrollStagger = ({
  children,
  staggerDelay = 0.1,
  initialDelay = 0,
  animation = "fadeUp",
  threshold = 0.1,
  once = true,
  className = "",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: initialDelay,
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={variants[animation]} transition={defaultTransition}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
};

// ─── ScrollRevealText — word-by-word text reveal ─────────────────────────────
//
// Splits text into words and reveals them one by one.
//
// Usage:
//   <ScrollRevealText
//     text="Hello, I'm Sakeer Hussain"
//     className="text-4xl font-bold text-white"
//   />

export const ScrollRevealText = ({
  text,
  className = "",
  staggerDelay = 0.04,
  initialDelay = 0,
  threshold = 0.3,
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const words = text.split(" ");

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: { delayChildren: initialDelay, staggerChildren: staggerDelay },
        },
      }}
      className="inline-flex flex-wrap gap-x-[0.28em]"
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={className}
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

// ─── useScrollReveal — raw hook if you need direct control ───────────────────
//
// Usage:
//   const { ref, isInView } = useScrollReveal({ once: true, threshold: 0.2 });
//   <div ref={ref} style={{ opacity: isInView ? 1 : 0 }}>...</div>

export const useScrollReveal = ({ once = true, threshold = 0.15 } = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });
  return { ref, isInView };
};

export { variants as scrollVariants, defaultTransition as scrollTransition };