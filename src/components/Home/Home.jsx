import { motion } from "framer-motion";
import SocialButtons from "../SocialButton/SocialButtons.jsx";
import ScrollDownArrow from "../ScrollDownArrow.jsx";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative pt-20 text-center"
    >
      <div className="px-6 py-20">
        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          Sakeer Hussain
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mt-4 mx-auto"
        >
          MERN Stack Developer | Building robust full-stack solutions
        </motion.p>

        {/* CTA + Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex gap-4 flex-wrap justify-center mt-8"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600/50 to-purple-600/50 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
            <button className="px-6 py-3 bg-gradient-to-r from-indigo-900/90 to-purple-900/90 rounded-lg text-white text-base font-medium relative z-10 flex items-center justify-center gap-2 group-hover:from-indigo-800/90 group-hover:to-purple-800/90 transition-all duration-300 transform group-hover:scale-105 group-active:scale-95">
              <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </button>
          </div>
          <SocialButtons />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <ScrollDownArrow />
    </section>
  );
};

export default Home;
