import { motion } from "framer-motion";

const SectionTitle = ({ title }) => {
  return (
    <div className="text-center mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-block mb-3"
      >
        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          {title}
        </div>
      </motion.div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "5rem" }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto rounded"
      ></motion.div>
    </div>
  );
};

export default SectionTitle;
