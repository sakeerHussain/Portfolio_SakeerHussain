import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const quotes = [
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Dream big. Start small. Act now.", author: "Robin Sharma" },
  { text: "Great things are done by a series of small things brought together.", author: "Vincent Van Gogh" }
];

const Loader = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    // Pick a random quote once when loader mounts
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  if (!quote) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <motion.div
        className="text-center px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-cyan-400 font-mono text-lg mb-2">“{quote.text}”</p>
        <p className="text-gray-400 font-mono text-sm">— {quote.author}</p>
      </motion.div>
    </div>
  );
};

export default Loader;
