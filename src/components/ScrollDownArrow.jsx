import React from "react";
import { motion } from "framer-motion";

const ScrollDownArrow = () => {
  const handleClick = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
      onClick={handleClick}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer group"
      aria-label="Scroll to next section"
      role="button"
    >
      {/* Outer ring pulse */}
      <motion.div
        className="absolute inset-0 rounded-full border border-cyan-400/30"
        animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
      />

      {/* Icon container */}
      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="relative flex items-center justify-center w-10 h-10 rounded-full border border-cyan-500/30 bg-gray-900/60 backdrop-blur-sm group-hover:border-cyan-400/60 group-hover:bg-gray-900/80 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default ScrollDownArrow;