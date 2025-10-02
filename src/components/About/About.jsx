import React from "react";
import SectionTitle from "../SectionTitle";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center relative py-20"
    >
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <SectionTitle title={"About Me"} />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Photo */}
          <motion.div
            className="relative w-72 h-80 rounded-2xl overflow-hidden group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }} // triggers when 30% of the div is visible
          >
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-2xl p-[3px]">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-900">
                <img
                  src="https://cdn.pixabay.com/photo/2022/10/07/18/35/potrait-7505634_1280.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }} // triggers only once
          >
            {/* Glow Layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Text Box */}
            <div className="relative bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 p-8 md:p-12 rounded-xl shadow-lg group-hover:border-indigo-500/40 transition-all duration-300">
              <p className="text-gray-300 leading-relaxed mb-4">
                I am a passionate full-stack developer with experience in
                building modern, responsive, and user-friendly web applications.
                My expertise lies in the MERN stack, and I enjoy creating
                seamless digital experiences that combine aesthetics with
                functionality.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                With a background in Electronics and Communication Engineering,
                I transitioned into web development to pursue my passion for
                coding. Over time, I have worked on multiple projects, including
                task management apps, employee management systems, and
                interactive static websites.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Outside of coding, I enjoy exploring new technologies,
                problem-solving, and continuously improving my skill set to keep
                up with the fast-evolving tech industry.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
