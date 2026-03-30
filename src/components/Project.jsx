import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

import BookStore from "../assets/Bookstore.png";
import ResumeBuilder from "../assets/resumeBuilder.png";
import TaskManager from "../assets/Taskmanager.png";
import ThinkPad from "../assets/ThinkPad.png";

const projects = [
  {
    title: "Book Store",
    description:
      "A full-stack MERN Bookstore application that allows users to browse, search, and purchase books online with a secure checkout and admin panel for managing inventory.",
    tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    image: BookStore,
    demo: null,
    github: null,
  },
  {
    title: "Resume Builder",
    description:
      "A web application that allows users to create and customise professional resumes with ready-to-use templates and real-time preview functionality.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    image: ResumeBuilder,
    demo: "https://resume-builder-kappa-liart-15.vercel.app/",
    github: "https://github.com/sakeerHussain/Resume_builder",
  },
  {
    title: "Task Management App",
    description:
      "A responsive Kanban board app featuring drag-and-drop tasks, filtering, and a clean modern interface for organising projects efficiently.",
    tech: ["React", "TailwindCSS"],
    image: TaskManager,
    demo: null,
    github: null,
  },
  {
    title: "ThinkPad – Notes App",
    description:
      "A lightweight note-taking web app built with vanilla JS. Create, edit, and delete notes with full localStorage persistence.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: ThinkPad,
    demo: null,
    github: null,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle title={"Projects"} />

        {/* Horizontal scroll carousel */}
        <div className="flex space-x-6 overflow-x-auto py-6 px-1 scrollbar-thin scrollbar-thumb-indigo-500/60 scrollbar-track-gray-800/40 snap-x snap-mandatory">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="relative flex-shrink-0 w-80 md:w-96 rounded-2xl overflow-hidden group cursor-pointer snap-start"
            >
              {/* Glow border */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 rounded-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500 blur-sm"></div>

              {/* Card */}
              <div className="relative bg-gray-900/85 backdrop-blur-lg border border-indigo-500/20 rounded-2xl p-5 flex flex-col h-full group-hover:border-indigo-500/50 transition-all duration-300">

                {/* Image */}
                <div className="w-full h-44 mb-4 rounded-xl overflow-hidden bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((techItem, i) => (
                      <span
                        key={i}
                        className="text-xs bg-indigo-500/20 text-indigo-300 px-2.5 py-1 rounded-md border border-indigo-500/20"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons — only shown if link exists */}
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
          ))}
        </div>
      </div>
    </section>
  );
}