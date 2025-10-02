import React from "react";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
  { name: "TailwindCSS", icon: "devicon-tailwindcss-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
];

export default function SkillsSection() {
  return (
    <section className="py-16" id="skills">
      <div className="container">
        {/* Section Title */}
        <SectionTitle title={"Skills"} />

        {/* Skill Cards */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Icon container with About-style border + glow */}
              <div className="relative group w-20 h-20 flex items-center justify-center mb-3">
                {/* Glow Layer */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-sm group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all duration-500"></div>

                {/* Bordered Circle */}
                <div className="relative bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 p-4 rounded-full shadow-lg group-hover:border-indigo-500/40 transition-all duration-300 flex items-center justify-center">
                  <i className={`${skill.icon} text-4xl`}></i>
                </div>
              </div>

              {/* Label */}
              <p className="mt-2 text-sm text-[var(--text-secondary)] group-hover:text-[var(--primary)] transition-colors duration-300 text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
