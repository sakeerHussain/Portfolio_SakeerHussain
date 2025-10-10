import React, { useRef } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle"; 
import emailjs, { send } from "@emailjs/browser";
import { FaArrowLeft } from "react-icons/fa";
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      "service_27vdzjd",
      "template_v1zy1cf",
      form.current,
      "WstMrgeVNv7sZM8In"
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("failed to send message, please try again.")
      }
    );
  };
  return (
    <motion.section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Section Title */}
      <SectionTitle title="Contact Me" />

      <div className="bg-gray-900/70 backdrop-blur-md p-10 rounded-2xl shadow-xl w-full max-w-4xl flex flex-col md:flex-row gap-10 items-stretch">
        {/* Image inside the form card with glow */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="https://cdn.pixabay.com/photo/2017/08/06/14/12/bokeh-lights-2592859_1280.jpg"
            alt="Cyberpunk Contact"
            className="rounded-xl h-full object-cover"
          />
        </motion.div>

        {/* Contact form */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center h-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 h-full">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-cyan-400 outline-none"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-cyan-400 outline-none"
            />
            <textarea
            name="message"
              placeholder="Your Message"
              rows="5"
              className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-cyan-400 outline-none flex-1"
            ></textarea>
            <button
              type="submit"
              className="p-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
