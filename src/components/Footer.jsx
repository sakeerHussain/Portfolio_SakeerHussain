import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { motion } from "framer-motion";

const socialIcons = [
  { icon: <LuGithub />, link: "https://github.com/your-github" },
  { icon: <CiLinkedin />, link: "https://linkedin.com/in/your-linkedin" },
  { icon: <MdAlternateEmail />, link: "mailto:yourmail@example.com" },
];

const Footer = () => {
  return (
    <motion.footer
      className="relative bg-gray-900/80 backdrop-blur-lg border-t border-indigo-500/30 py-8 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Footer Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-900 border border-indigo-400/30 flex items-center justify-center rounded-md shadow-md shadow-indigo-800/20">
            <span className="font-bold text-sm bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              SH
            </span>
          </div>
        </div>

        {/* Quote with separate animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="text-gray-300 italic font-medium text-center md:text-left bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            Fueled by caffeine, driven by passion.
          </p>
        </motion.div>

        {/* Social Icons with staggered animation */}
        <motion.div
          className="flex space-x-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {socialIcons.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 text-xl"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                scale: 1.2,
                textShadow: "0 0 8px #00fff7, 0 0 16px #00fff7",
                transition: { duration: 0.3 },
              }}
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Small text at bottom
      <p className="text-center text-gray-500 text-xs mt-6">
        © 2025 sh.Dev. All rights reserved.
      </p> */}
    </motion.footer>
  );
};

export default Footer;
