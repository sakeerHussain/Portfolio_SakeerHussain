import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

// Example project data
const projects = [
  {
    title: "Task Manager App",
    description:
      "A full-stack MERN task management app with drag-and-drop Kanban board and real-time updates.",
    tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    image:
      "https://cdn.pixabay.com/photo/2020/05/30/09/53/todo-lists-5238324_1280.jpg",
    demo: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A minimalistic and modern personal portfolio showcasing projects, skills, and contact form.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    image:
      "https://cdn.pixabay.com/photo/2017/08/06/01/23/computer-2593604_1280.jpg",
    demo: "#",
    github: "#",
  },
  {
    title: "E-commerce Store",
    description:
      "A fully functional e-commerce site with cart, checkout, and product filtering.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image:
      "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg",
    demo: "#",
    github: "#",
  },
   {
    title: "E-commerce Store",
    description:
      "A fully functional e-commerce site with cart, checkout, and product filtering.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image:
      "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg",
    demo: "#",
    github: "#",
  },
   {
    title: "E-commerce Store",
    description:
      "A fully functional e-commerce site with cart, checkout, and product filtering.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image:
      "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg",
    demo: "#",
    github: "#",
  },
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
