import React from "react";
import SectionTitle from "./SectionTitle";
import { ScrollReveal, ScrollStagger } from "./ScrollReveal.jsx";

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
      <div className="container mx-auto px-6">

        <ScrollReveal animation="fadeUp" threshold={0.2}>
          <SectionTitle title={"Skills"} />
        </ScrollReveal>

        <ScrollStagger
          staggerDelay={0.07}
          initialDelay={0.1}
          animation="scaleUp"
          className="flex flex-wrap justify-center gap-6 mt-10"
          threshold={0.1}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-default"
            >
              <div
                className="relative w-20 h-20 flex items-center justify-center mb-3 transition-transform duration-200 group-hover:-translate-y-1.5"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 p-4 rounded-full shadow-lg group-hover:border-cyan-500/50 group-hover:shadow-cyan-500/20 group-hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                  <i className={`${skill.icon} text-4xl`}></i>
                </div>
              </div>
              <p className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors duration-300 text-center font-medium">
                {skill.name}
              </p>
            </div>
          ))}
        </ScrollStagger>
      </div>
    </section>
  );
}