import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import { motion } from "framer-motion";

const socialIcons = [
  {
    icon: <LuGithub size={20} />,
    link: "https://github.com/sakeerHussain",
    label: "GitHub",
  },
  {
    icon: <CiLinkedin size={20} />,
    link: "https://linkedin.com/in/sakeer-hussain",
    label: "LinkedIn",
  },
  {
    icon: <MdAlternateEmail size={20} />,
    link: "mailto:your@email.com",
    label: "Email",
  },
];

const navLinks = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="relative bg-gray-900/80 backdrop-blur-lg border-t border-indigo-500/30 py-10 px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto">

        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">

          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-gray-900 border border-indigo-400/30 flex items-center justify-center rounded-md shadow-md shadow-indigo-800/20">
                <span className="font-bold text-sm bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  SH
                </span>
              </div>
              <span className="font-semibold text-white text-sm">
                Sakeer Hussain
              </span>
            </div>
            <p className="text-gray-500 text-xs italic">
              Fueled by caffeine, driven by passion.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs text-gray-400 hover:text-cyan-400 transition-colors duration-200 tracking-wide"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <motion.div
            className="flex gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {socialIcons.map((item) => (
              <motion.a
                key={item.label}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-800/80 border border-indigo-500/20 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent mb-6"></div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-gray-600 text-xs">
            © {currentYear} Sakeer Hussain. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built with{" "}
            <span className="text-cyan-500/70">React</span> &{" "}
            <span className="text-indigo-400/70">TailwindCSS</span>
          </p>
        </div>

      </div>
    </motion.footer>
  );
};

export default Footer;