import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import emailjs from "@emailjs/browser";
import { LuGithub, LuLinkedin, LuMail, LuMapPin } from "react-icons/lu";
import { ScrollReveal, ScrollStagger } from "../components/ScrollReveal.jsx";

const contactDetails = [
  {
    icon: <LuMail size={18} />,
    label: "Email",
    value: "me@email.com",
    href: "sakeerhussain.s123@gmail.com",
  },
  {
    icon: <LuGithub size={18} />,
    label: "GitHub",
    value: "github.com/sakeerHussain",
    href: "https://github.com/sakeerHussain",
  },
  {
    icon: <LuLinkedin size={18} />,
    label: "LinkedIn",
    value: "linkedin.com/in/sakeer-hussain",
    href: "https://linkedin.com/in/sakeer-hussain",
  },
  {
    icon: <LuMapPin size={18} />,
    label: "Location",
    value: "Kerala, India",
    href: null,
  },
];

const STATUS = { idle: "idle", sending: "sending", success: "success", error: "error" };

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(STATUS.idle);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus(STATUS.sending);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus(STATUS.success);
          form.current.reset();
          setTimeout(() => setStatus(STATUS.idle), 5000);
        },
        () => {
          setStatus(STATUS.error);
          setTimeout(() => setStatus(STATUS.idle), 5000);
        }
      );
  };

  return (
    <section id="contact" className="py-20 flex flex-col items-center">
      <div className="container mx-auto px-6 w-full">

        <ScrollReveal animation="fadeUp" threshold={0.2}>
          <SectionTitle title="Contact Me" />
        </ScrollReveal>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">

          {/* Left — contact info */}
          <ScrollReveal animation="fadeLeft" delay={0.1} threshold={0.2}>
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Let's{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                    work together
                  </span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  I'm currently open to new opportunities — whether it's a
                  full-time role, freelance project, or just a chat about tech.
                  My inbox is always open.
                </p>
              </div>

              <ScrollStagger
                staggerDelay={0.08}
                initialDelay={0.2}
                animation="fadeLeft"
                className="flex flex-col gap-4 mt-2"
                threshold={0.1}
              >
                {contactDetails.map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800/80 border border-indigo-500/20 text-cyan-400 group-hover:border-cyan-500/40 transition-all duration-300 flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-300">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </ScrollStagger>
            </div>
          </ScrollReveal>

          {/* Right — form */}
          <ScrollReveal animation="fadeRight" delay={0.2} threshold={0.2}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-gray-900/70 backdrop-blur-lg border border-indigo-500/20 rounded-2xl p-8 group-hover:border-indigo-500/40 transition-all duration-300">
                <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">

                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-500 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Your name"
                      required
                      className="p-3 rounded-lg bg-gray-800/80 text-white border border-gray-700 focus:border-cyan-400 focus:outline-none transition-colors duration-200 text-sm placeholder:text-gray-600"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-500 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="your@email.com"
                      required
                      className="p-3 rounded-lg bg-gray-800/80 text-white border border-gray-700 focus:border-cyan-400 focus:outline-none transition-colors duration-200 text-sm placeholder:text-gray-600"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-500 uppercase tracking-wider">Message</label>
                    <textarea
                      name="message"
                      placeholder="Tell me about your project or opportunity..."
                      rows="5"
                      required
                      className="p-3 rounded-lg bg-gray-800/80 text-white border border-gray-700 focus:border-cyan-400 focus:outline-none transition-colors duration-200 resize-none text-sm placeholder:text-gray-600"
                    ></textarea>
                  </div>

                  {status === STATUS.success && (
                    <p className="text-sm text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-lg px-4 py-2">
                      Message sent! I'll get back to you soon.
                    </p>
                  )}
                  {status === STATUS.error && (
                    <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-2">
                      Something went wrong. Please try again or email me directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === STATUS.sending}
                    className="mt-1 p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === STATUS.sending ? "Sending..." : "Send Message →"}
                  </button>
                </form>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;