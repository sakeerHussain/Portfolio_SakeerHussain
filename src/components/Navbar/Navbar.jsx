import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const desktopLinks = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];
  const mobileLinks = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Scroll effect for sticky navbar + active section
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;

      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + navbarHeight / 2;
      const sections = ["home", "about", "skills","experience", "projects", "contact"];

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 bg-gray-900/70 backdrop-blur-lg border-b border-cyan-500/30 z-50 transition-all duration-300 ${
        scrolled ? "shadow-xl py-3" : "py-5"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative mr-2">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-md blur-md opacity-50"></div>
              <div className="w-10 h-10 bg-gray-900 border border-indigo-400/30 flex items-center justify-center relative rounded-md shadow-lg shadow-indigo-800/20">
                <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  SH
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {desktopLinks.map((link) => {
              const sectionId = link.toLowerCase();
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link}
                  href={`#${sectionId}`}
                  className={`nav-link relative group px-4 py-2 transition-all duration-300`}
                >
                  <span
                    className={`bg-gradient-to-r from-gray-300 to-gray-300 bg-clip-text text-transparent transition-all duration-300 ${
                      isActive
                        ? "from-cyan-400 to-indigo-400"
                        : "group-hover:from-cyan-400 group-hover:to-indigo-400"
                    }`}
                  >
                    {link}
                  </span>
                  <span
                    className={`absolute left-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </a>
              );
            })}

            {/* Resume Button */}
            <div className="relative ml-4 group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600/50 to-purple-600/50 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
              <button className="contact-btn px-4 py-2 bg-gradient-to-r from-indigo-900/90 to-purple-900/90 rounded-lg text-white text-sm font-medium relative z-10 flex items-center justify-center gap-2 group-hover:from-indigo-800/90 group-hover:to-purple-800/90 transition-all duration-300">
                <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  Resume
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-button"
              onClick={toggleMobileMenu}
              className="relative w-10 h-10 focus:outline-none group"
              aria-label="Toggle menu"
            >
              <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <span className="block h-0.5 w-5 bg-cyan-400 mb-1 transform transition duration-300 ease-in-out" id="line1"></span>
                <span className="block h-0.5 w-5 bg-cyan-400 mb-1 transform transition duration-300 ease-in-out" id="line2"></span>
                <span className="block h-0.5 w-5 bg-cyan-400 transform transition duration-300 ease-in-out" id="line3"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-2 pb-4 space-y-1">
                {mobileLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="mobile-nav-link block text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 px-4 py-2 rounded-md transition-colors duration-200"
                  >
                    {link}
                  </a>
                ))}
                <div className="px-4 pt-2">
                  <button className="contact-btn w-full px-4 py-2 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-lg text-white text-sm font-medium flex items-center justify-center gap-2 hover:from-indigo-600 hover:to-purple-600 transition-all duration-300">
                    <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                      Connect
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
