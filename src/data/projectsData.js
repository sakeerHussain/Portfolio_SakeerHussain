import BookStore from "../assets/Bookstore.png";
import ResumeBuilder from "../assets/resumeBuilder.png";
import aiJobtracker from "../assets/jobtracker.png";
import ThinkPad from "../assets/ThinkPad.png";

const projects = [
  {
    title: "Trovia – Multi-Vendor Marketplace",
    description:
      "A production-grade full-stack MERN multi-vendor e-commerce platform where customers can browse, search, and purchase products from multiple vendors with a single checkout. Features include real-time order tracking, Stripe Connect split payments, AI-powered product recommendations, and dedicated dashboards for customers, vendors, and admins.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux Toolkit",
      "TanStack Query",
      "Stripe",
      "Socket.io",
      "TailwindCSS",
    ],
    image: "Trovia", // replace with your actual image import
    demo: null, // add deployed link when ready
    github: null, // add repo link when ready
    featured: true,
  },
  {
    title: "Book Store",
    description:
      "A full-stack MERN Bookstore app — browse, search, and purchase books with a secure checkout and admin panel for managing inventory.",
    tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    image: BookStore,
    demo: null,
    github: null,
    featured: true,
  },
  {
    title: "Resume Builder",
    description:
      "Create and customise professional resumes with ready-to-use templates and a real-time preview that updates as you type.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    image: ResumeBuilder,
    demo: "https://resume-builder-kappa-liart-15.vercel.app/",
    github: "https://github.com/sakeerHussain/Resume_builder",
    featured: true,
  },
  {
    title: "AI Job Tracker",
    description:
      "A full-stack MERN job tracking platform featuring a Kanban-style workflow for managing applications, real-time status updates, and AI-powered cover letter generation using Gemini API to tailor applications efficiently.",
    tech: ["React", "Node.js", "MongoDB", "TailwindCSS", "Gemini APIs"],
    image: aiJobtracker,
    demo: null,
    github: null,
    featured: true,
  },
  {
    title: "ThinkPad – Notes App",
    description:
      "A lightweight note-taking app built with vanilla JS. Create, edit, and delete notes with full localStorage persistence.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: ThinkPad,
    demo: null,
    github: null,
    featured: true,
  },
  {
    title: "********",
    description:
      "********",
    tech: ["HTML", "CSS", "JavaScript"],
    image: ThinkPad,
    demo: null,
    github: null,
    featured: true,
  },
  {
    title: "ThinkPad – Notes App",
    description:
      "A lightweight note-taking app built with vanilla JS. Create, edit, and delete notes with full localStorage persistence.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: ThinkPad,
    demo: null,
    github: null,
    featured: true,
  },
];

export default projects;
