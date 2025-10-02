import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

// Sample experience data
const experiences = [
  {
    company: "Stack-Mode Innovations",
    role: "MERN Stack Intern",
    duration: "June 2024 - Nov 2024",
    description:
      "Built responsive web apps and learned MERN stack development.",
  },
  {
    company: "Tiswara Robotics",
    role: "Robotics Instructor",
    duration: "Jan 2023 - May 2024",
    description:
      "Taught robotics and coding to students, designed hands-on learning projects.",
  },
  {
    company: "Freelance",
    role: "Web Developer",
    duration: "Dec 2024 - Present",
    description:
      "Developed personal and client projects using React, Node.js, and Tailwind CSS.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <SectionTitle title="Experience" />

      <div className="container mx-auto px-6 relative">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 via-indigo-500 to-purple-500 opacity-50"></div>

        <div className="flex flex-col space-y-16 relative z-10">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0; // Alternate left/right cards
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col md:flex-row items-center md:justify-between ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot on timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full shadow-lg animate-pulse"></div>

                {/* Card */}
                <div className="bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 rounded-xl p-6 md:w-1/2 shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-cyan-400 text-sm mb-2">{exp.company}</p>
                  <p className="text-gray-300 text-sm mb-4">{exp.duration}</p>
                  <p className="text-gray-300 text-sm">{exp.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
