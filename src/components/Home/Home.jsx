import { useState, useEffect } from "react";
import SocialButtons from "../SocialButton/SocialButtons.jsx";
import ScrollDownArrow from "../ScrollDownArrow.jsx";
import { ScrollReveal, ScrollStagger, ScrollRevealText } from "../ScrollReveal.jsx";

const ROLES = [
  "MERN Stack Developer",
  "Full-Stack Engineer",
  "React Specialist",
  "Node.js Developer",
];

const useTypewriter = (words, typingSpeed = 80, deletingSpeed = 50, pause = 1800) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
};

const Home = () => {
  const typedRole = useTypewriter(ROLES);

  const handleScrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  const handleScrollToWork = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative pt-20 text-center"
    >
      <div className="px-6 py-20 w-full max-w-4xl mx-auto">

        {/* Badge */}
        <ScrollReveal animation="fadeDown" delay={0.1}>
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-gray-900/60 text-sm text-gray-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for new opportunities
            </span>
          </div>
        </ScrollReveal>

        {/* Name — word by word reveal */}
        <div className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4">
          <ScrollRevealText
            text="Sakeer Hussain"
            className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent"
            staggerDelay={0.07}
            initialDelay={0.25}
            threshold={0.1}
          />
        </div>

        {/* Typewriter role */}
        <ScrollReveal animation="fadeUp" delay={0.5}>
          <div className="h-10 flex items-center justify-center mt-2 mb-4">
            <span className="text-xl md:text-2xl text-gray-400">
              {typedRole}
              <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-1 animate-pulse align-middle" />
            </span>
          </div>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal animation="fadeUp" delay={0.65}>
          <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            I build fast, scalable, and user-friendly web applications — from
            robust APIs to polished interfaces that people love to use.
          </p>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal animation="fadeUp" delay={0.8}>
          <div className="flex gap-4 flex-wrap justify-center mt-10">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600/50 to-indigo-600/50 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
              <button
                onClick={handleScrollToWork}
                className="px-6 py-3 bg-gradient-to-r from-cyan-900/90 to-indigo-900/90 rounded-lg text-white text-base font-medium relative z-10 flex items-center gap-2 group-hover:from-cyan-800/90 group-hover:to-indigo-800/90 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  View My Work →
                </span>
              </button>
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600/50 to-purple-600/50 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
              <button
                onClick={handleScrollToContact}
                className="px-6 py-3 bg-gradient-to-r from-indigo-900/90 to-purple-900/90 rounded-lg text-white text-base font-medium relative z-10 flex items-center gap-2 group-hover:from-indigo-800/90 group-hover:to-purple-800/90 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  Let's Connect
                </span>
              </button>
            </div>
            <SocialButtons />
          </div>
        </ScrollReveal>

        {/* Stats */}
        {/* <ScrollStagger
          staggerDelay={0.12}
          initialDelay={0.95}
          animation="scaleUp"
          className="mt-14 grid grid-cols-3 gap-4 max-w-sm mx-auto"
          threshold={0.1}
        >
          {[
            { value: "5+", label: "Years Exp." },
            { value: "30+", label: "Projects" },
            { value: "12+", label: "Clients" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center py-3 px-2 rounded-xl border border-indigo-500/20 bg-gray-900/50 backdrop-blur-sm"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                {value}
              </span>
              <span className="text-xs text-gray-500 mt-1 tracking-wide uppercase">
                {label}
              </span>
            </div>
          ))}
        </ScrollStagger> */}
      </div>

      <ScrollDownArrow />
    </section>
  );
};

export default Home;