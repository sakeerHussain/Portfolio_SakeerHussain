import SectionTitle from "../SectionTitle";
import { ScrollReveal, ScrollStagger } from "../ScrollReveal.jsx";
import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "30+", label: "Projects Shipped" },
  { value: "12+", label: "Happy Clients" },
  { value: "3k+", label: "GitHub Commits" },
];

const techs = [
  "React",
  "Node.js",
  "MongoDB",
  "Express",
  "TypeScript",
  "Tailwind",
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center relative py-20"
    >
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fadeUp" threshold={0.2}>
          <SectionTitle title={"About Me"} />
        </ScrollReveal>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <ScrollReveal animation="fadeLeft" delay={0.1} threshold={0.2}>
            <div className="relative w-72 h-80 rounded-2xl overflow-hidden group mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-cyan-500 to-purple-500 rounded-2xl p-[3px]">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-900">
                  <img
                    src="/your-photo.jpeg"
                    alt="Sakeer Hussain — Full Stack Developer"
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src =
                        "https://ui-avatars.com/api/?name=Sakeer+Hussain&background=1e1b4b&color=818cf8&size=400&bold=true";
                    }}
                  />
                </div>
              </div>
              <ScrollReveal
                animation="scaleIn"
                delay={0.5}
                threshold={0.1}
                className="absolute -bottom-3 -right-3 z-10"
              >
                <div className="px-3 py-1.5 bg-gray-900 border border-cyan-500/40 rounded-full text-xs text-cyan-400 font-medium shadow-lg">
                  ⚡ Open to Work
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal animation="fadeRight" delay={0.2} threshold={0.2}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 p-8 md:p-10 rounded-xl shadow-lg group-hover:border-indigo-500/40 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                    Sakeer Hussain
                  </span>
                </h3>

                <p className="text-gray-300 leading-relaxed mb-4">
                  I am a full-stack developer specializing in the MERN stack,
                  holding a B.Tech in Electronics and Communication Engineering.
                  This foundation, paired with hands-on experience in robotics
                  and embedded systems, provides robust systems-level thinking
                  applied to software development.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I approach software with a structured mindset: mapping
                  architecture before implementation, drawing from my
                  engineering roots to deliver efficient, scalable solutions
                  like real-time dashboards and REST APIs.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                  Outside work, I engage in DIY electronics projects, explore
                  emerging technologies, and stay abreast of JavaScript
                  ecosystem advancements. I am committed to contributing
                  high-impact solutions within dynamic teams.
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full border border-indigo-500/30 bg-indigo-900/30 text-indigo-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="/Sakeer-Hussain.S--Resume-20251010.pdf"
                  download="Sakeer_Hussain_Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-700 to-purple-700 hover:from-indigo-600 hover:to-purple-600 rounded-lg text-sm font-medium text-white transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                    Download Resume ↓
                  </span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats row */}
        {/* <ScrollStagger
          staggerDelay={0.1}
          initialDelay={0.1}
          animation="scaleUp"
          className="max-w-4xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          threshold={0.2}
        >
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center py-5 px-4 rounded-xl border border-indigo-500/20 bg-gray-900/50 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
                {value}
              </span>
              <span className="text-xs text-gray-500 mt-1.5 tracking-wider uppercase text-center">
                {label}
              </span>
            </div>
          ))}
        </ScrollStagger> */}
      </div>
    </section>
  );
};

export default About;
