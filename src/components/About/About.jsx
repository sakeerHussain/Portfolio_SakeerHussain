import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionTitle from "../SectionTitle";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "30+", label: "Projects Shipped" },
  { value: "12+", label: "Happy Clients" },
  { value: "3k+", label: "GitHub Commits" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center relative py-20"
    >
      <div className="container mx-auto px-6">
        <SectionTitle title={"About Me"} />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left — Photo */}
          <motion.div
            className="relative w-72 h-80 rounded-2xl overflow-hidden group mx-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Animated gradient border */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-500 rounded-2xl p-[3px]"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-900">
                <img
                  src="/your-photo.jpg"
                  alt="Sakeer Hussain — Full Stack Developer"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src =
                      "https://ui-avatars.com/api/?name=Sakeer+Hussain&background=1e1b4b&color=818cf8&size=400&bold=true";
                  }}
                />
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-3 -right-3 px-3 py-1.5 bg-gray-900 border border-cyan-500/40 rounded-full text-xs text-cyan-400 font-medium shadow-lg z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              viewport={{ once: true }}
            >
              ⚡ Open to Work
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative group"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Card */}
            <div className="relative bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 p-8 md:p-10 rounded-xl shadow-lg group-hover:border-indigo-500/40 transition-all duration-300">

              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold text-white mb-4"
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  Sakeer Hussain
                </span>
              </motion.h3>

              <motion.p variants={itemVariants} className="text-gray-300 leading-relaxed mb-4">
                I'm a full-stack developer specialising in the MERN stack, with
                a knack for turning complex problems into clean, performant
                solutions. I've shipped everything from real-time dashboards to
                scalable REST APIs used by thousands of users.
              </motion.p>

              <motion.p variants={itemVariants} className="text-gray-300 leading-relaxed mb-4">
                My background in Electronics & Communication Engineering gave me
                a strong systems-thinking foundation — I approach software the
                same way: understand the architecture before touching the code.
              </motion.p>

              <motion.p variants={itemVariants} className="text-gray-400 leading-relaxed mb-6 text-sm">
                Outside of work, I contribute to open source, stay active on
                GitHub, and keep a sharp eye on what's shipping in the JS
                ecosystem.
              </motion.p>

              {/* Tech highlights */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-6">
                {["React", "Node.js", "MongoDB", "Express", "TypeScript", "Tailwind"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full border border-indigo-500/30 bg-indigo-900/30 text-indigo-300 font-medium"
                    >
                      {tech}
                    </span>
                  )
                )}
              </motion.div>

              {/* CTA */}
              <motion.div variants={itemVariants}>
                <a
                  href="/Sakeer-Hussain.S--Resume-20251010.pdf"
                  download="Sakeer_Hussain_Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-700 to-purple-700 hover:from-indigo-600 hover:to-purple-600 rounded-lg text-sm font-medium text-white transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                    Download Resume ↓
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        {/* <motion.div
          ref={statsRef}
          className="max-w-4xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
        >
          {stats.map(({ value, label }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="flex flex-col items-center py-5 px-4 rounded-xl border border-indigo-500/20 bg-gray-900/50 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
                {value}
              </span>
              <span className="text-xs text-gray-500 mt-1.5 tracking-wider uppercase text-center">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default About;