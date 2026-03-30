import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const experiences = [
  {
    company: "Luminar Technolab",
    role: "MERN Stack Intern",
    duration: "May 2025 – Dec 2025",
    type: "Internship",
    description:
      "Built and shipped responsive full-stack web applications using the MERN stack. Worked on real client projects, implemented RESTful APIs, and collaborated in an agile team environment.",
    skills: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    company: "Tiswara Robotics",
    role: "Robotics Instructor",
    duration: "Jan 2023 – May 2025",
    type: "Full-time",
    description:
      "Designed and delivered hands-on robotics and coding curricula for students. Created structured learning projects that improved student engagement and technical understanding.",
    skills: ["Arduino", "Teaching", "Curriculum Design"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <SectionTitle title="Experience" />

      <div className="container mx-auto px-6">
        <div className="relative max-w-4xl mx-auto">

          {/* Vertical line — hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 w-px bg-gradient-to-b from-cyan-400/60 via-indigo-500/60 to-purple-500/60"></div>

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row items-center gap-6 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot — centered on the line */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 shadow-lg shadow-cyan-500/40 z-10 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white/80"></div>
                  </div>

                  {/* Spacer so card doesn't overlap dot */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Card */}
                  <motion.div
                    className="w-full md:w-1/2 group relative"
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  >
                    {/* Glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    <div className="relative bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 rounded-xl p-6 shadow-lg group-hover:border-indigo-500/40 group-hover:shadow-indigo-500/20 transition-all duration-300">
                      {/* Type badge */}
                      <span className="inline-block text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-3 font-medium">
                        {exp.type}
                      </span>

                      <h3 className="text-lg font-semibold text-white mb-0.5">
                        {exp.role}
                      </h3>
                      <p className="text-cyan-400 text-sm font-medium mb-1">
                        {exp.company}
                      </p>
                      <p className="text-gray-500 text-xs mb-3 font-mono">
                        {exp.duration}
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Skill pills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((s, i) => (
                          <span
                            key={i}
                            className="text-xs bg-indigo-500/20 text-indigo-300 px-2.5 py-1 rounded-md border border-indigo-500/20"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;