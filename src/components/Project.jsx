import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

import BookStore from "../assets/Bookstore.png";
import ResumeBuilder from "../assets/resumeBuilder.png";
import TaskManager from "../assets/Taskmanager.png";
import ThinkPad from "../assets/ThinkPad.png";

// Example project data
const projects = [
  {
    title: "Book Store",
    description:
      "A full-stack MERN Bookstore application that allows users to browse, search, and purchase books online with a secure checkout and admin panel for managing inventory.",
    tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    image: BookStore,
    demo: "#",
    github: "#",
  },
  {
    title: "Resume Builder Website",
    description:
      "A web application that allows users to create and customize professional resumes with ready-to-use templates and real-time preview functionality.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    image: ResumeBuilder,
    demo: "https://resume-builder-kappa-liart-15.vercel.app/",
    github: "https://github.com/sakeerHussain/Resume_builder",
  },
  {
    title: "Task Management App",
    description:
      "A responsive task management application built with React and Tailwind CSS featuring a drag-and-drop Kanban board, task filtering, and a modern user interface for organizing projects efficiently.",
    tech: ["React", "TailwindCSS"],
    image: TaskManager,
    demo: "#",
    github: "#",
  },
  ,
  {
    title: "ThinkPad – Note Taking App",
    description:
      "A lightweight and responsive note-taking web app built using HTML, CSS, and JavaScript that allows users to create, edit, and delete notes with data persistence using local storage.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: ThinkPad,
    demo: "#",
    github: "#",
  },
  // {
  //   title: "E-commerce Store",
  //   description:
  //     "A fully functional e-commerce site with cart, checkout, and product filtering.",
  //   tech: ["React", "Node.js", "Express", "MongoDB"],
  //   image:
  //     "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg",
  //   demo: "#",
  //   github: "#",
  // },
];

export default function ProjectsCarousel() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <SectionTitle title={"Projects"} />

        {/* Horizontal Scroll Carousel */}
        <div className="flex space-x-8 overflow-x-auto py-4 scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-gray-800">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative flex-shrink-0 w-80 md:w-96 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Gradient Glow Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500"></div>

              {/* Card Content */}
              <div className="relative bg-gray-900/80 backdrop-blur-lg border border-indigo-500/20 rounded-2xl p-6 flex flex-col h-full justify-between group-hover:border-indigo-500/40 transition-all duration-300">
                {/* Image */}
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Text & Tech */}
                <div className="flex-1 flex flex-col justify-between">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((techItem, i) => (
                      <span
                        key={i}
                        className="text-xs bg-indigo-500/20 text-indigo-400 px-2 py-1 rounded-md"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm px-3 py-2 bg-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/50 transition"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm px-3 py-2 bg-indigo-500/30 text-indigo-400 rounded-lg hover:bg-indigo-500/50 transition"
                    >
                      GitHub
                    </a>
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
