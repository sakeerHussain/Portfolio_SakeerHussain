import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const navLinks = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Contact",
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  // Scrolled state for navbar shadow/padding
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "skills",
      "experience",
      "projects",
      "contact",
    ];

    const navbar = document.getElementById("navbar");
    const navbarHeight = navbar ? navbar.offsetHeight : 64;

    // rootMargin shrinks the observable viewport:
    // - top: push it down by navbarHeight so sections only trigger after
    //   they've cleared the fixed navbar
    // - bottom: -55% means only the top 45% of the viewport is the
    //   "active zone", so the highlight switches early and feels accurate
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${navbarHeight}px 0px -55% 0px`,
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) closeMobileMenu();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="relative mr-2">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-md blur-md opacity-50"></div>
              <div className="w-10 h-10 bg-gray-900 border border-indigo-400/30 flex items-center justify-center relative rounded-md shadow-lg shadow-indigo-800/20">
                <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  SH
                </span>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, i) => {
              const sectionId = link.toLowerCase();
              const isActive = activeSection === sectionId;

              return (
                <motion.a
                  key={link}
                  href={`#${sectionId}`}
                  className="nav-link relative group px-4 py-2 transition-all duration-300"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
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
                </motion.a>
              );
            })}

            {/* Resume Button */}
            <motion.div
              className="relative ml-4 group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600/50 to-purple-600/50 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
              <a
                href="/Sakeer-Hussain.S--Resume-20251010.pdf"
                download="Sakeer_Hussain_Resume.pdf"
                className="px-4 py-2 bg-gradient-to-r from-indigo-900/90 to-purple-900/90 rounded-lg text-white text-sm font-medium relative z-10 flex items-center justify-center gap-2 group-hover:from-indigo-800/90 group-hover:to-purple-800/90 transition-all duration-300"
              >
                <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  Resume ↓
                </span>
              </a>
            </motion.div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="flex md:hidden relative w-10 h-10 focus:outline-none items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-cyan-400 transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-5 bg-cyan-400 transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-5 bg-cyan-400 transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-2 pb-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={closeMobileMenu}
                    className={`mobile-nav-link block px-4 py-2 rounded-md transition-colors duration-200 ${
                      activeSection === link.toLowerCase()
                        ? "text-cyan-400 bg-gray-800/70"
                        : "text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50"
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link}
                  </motion.a>
                ))}
                <div className="px-4 pt-2">
                  <a
                    href="/Sakeer-Hussain.S--Resume-20251010.pdf"
                    download="Sakeer_Hussain_Resume.pdf"
                    onClick={closeMobileMenu}
                    className="w-full px-4 py-2 bg-gradient-to-r from-indigo-700 to-purple-700 rounded-lg text-white text-sm font-medium flex items-center justify-center gap-2 hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
                  >
                    <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                      Download Resume ↓
                    </span>
                  </a>
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