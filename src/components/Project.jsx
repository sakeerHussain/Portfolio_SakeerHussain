import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import { ScrollReveal, useScrollReveal } from "./ScrollReveal.jsx";
import projects from "../data/projectsData.js";

const featuredProjects = projects.filter((p) => p.featured);

// ── Reusable project card ─────────────────────────────────────────────────────
export const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ y: -8, transition: { duration: 0.25 } }}
    className="relative rounded-2xl overflow-hidden group cursor-pointer h-full"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 rounded-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500 blur-sm" />
    
    <div className="relative bg-gray-900/85 backdrop-blur-lg border border-indigo-500/20 rounded-2xl p-5 flex flex-col h-full group-hover:border-indigo-500/50 transition-all duration-300">

      <div className="w-full h-44 mb-4 rounded-xl overflow-hidden bg-gray-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-white mb-2">
          {project.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs bg-indigo-500/20 text-indigo-300 px-2.5 py-1 rounded-md border border-indigo-500/20"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-sm text-center px-3 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-500/30 hover:bg-cyan-500/40 transition-all duration-200 font-medium"
            >
              Live Demo ↗
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-sm text-center px-3 py-2 bg-indigo-500/20 text-indigo-300 rounded-lg border border-indigo-500/30 hover:bg-indigo-500/40 transition-all duration-200 font-medium"
            >
              GitHub ↗
            </a>
          )}

          {!project.demo && !project.github && (
            <span className="text-xs text-gray-600 italic">
              Links coming soon
            </span>
          )}
        </div>
      </div>
    </div>
  </motion.div>
);

// ── Main section ──────────────────────────────────────────────────────────────
export default function ProjectsSection() {
  const navigate = useNavigate();
  const [hintVisible, setHintVisible] = useState(false);

  const { ref: sectionRef, isInView } = useScrollReveal({
    once: true,
    threshold: 0.2,
  });

  // Show hint after delay ONLY if more than 4 projects exist
  React.useEffect(() => {
    if (!isInView || featuredProjects.length <= 4) return;

    const timer = setTimeout(() => setHintVisible(true), 1800);
    return () => clearTimeout(timer);
  }, [isInView]);

  return (
    <section id="projects" className="py-20" ref={sectionRef}>
      <div className="container mx-auto px-6">

        <ScrollReveal animation="fadeUp" threshold={0.2}>
          <SectionTitle title={"Projects"} />
        </ScrollReveal>

        {/* Cards */}
        <div className="flex space-x-6 overflow-x-auto py-6 px-1 scrollbar-thin scrollbar-thumb-indigo-500/60 scrollbar-track-gray-800/40 snap-x snap-mandatory md:grid md:grid-cols-2 md:space-x-0 md:gap-6 lg:grid-cols-4">
          {featuredProjects.slice(0, 4).map((project, index) => (
            <ScrollReveal
              key={project.id}
              animation="fadeUp"
              delay={index * 0.12}
              threshold={0.1}
              className="flex-shrink-0 w-80 snap-start md:w-auto md:flex-shrink"
            >
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        {/* Hint button */}
        <AnimatePresence>
          {hintVisible && (
            <motion.div
              key="hint"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex justify-center mt-6"
            >
              <motion.button
                onClick={() => navigate("/projects")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-3 px-6 py-3 rounded-full border border-cyan-500/40 bg-gray-900/80 backdrop-blur-sm text-sm font-medium text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
              >
                {/* Pulse dot */}
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                </span>

                Want to see more projects?

                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.4,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}