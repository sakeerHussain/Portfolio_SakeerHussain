import React from "react";
import { motion } from "framer-motion";

const ScrollDownArrow = () => {
  const handleClick = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      onClick={handleClick}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{
          y: [0, 8, 0], // subtle bounce
          scale: [1, 1.2, 1], // pulsing
          filter: [
            "drop-shadow(0 0 8px rgba(34,211,238,0.6))",
            "drop-shadow(0 0 16px rgba(34,211,238,1))",
            "drop-shadow(0 0 8px rgba(34,211,238,0.6))",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </motion.svg>
    </motion.div>
  );
};

export default ScrollDownArrow;
