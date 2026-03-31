import BookStore from "../assets/Bookstore.png";
import ResumeBuilder from "../assets/resumeBuilder.png";
import TaskManager from "../assets/Taskmanager.png";
import ThinkPad from "../assets/ThinkPad.png";

const projects = [
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
    title: "Task Management App",
    description:
      "A responsive Kanban board with drag-and-drop tasks, filtering, and a clean modern interface for organising projects efficiently.",
    tech: ["React", "TailwindCSS"],
    image: TaskManager,
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
    featured: true
  },
    {
    title: "ThinkPad – Notes App",
    description:
      "A lightweight note-taking app built with vanilla JS. Create, edit, and delete notes with full localStorage persistence.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: ThinkPad,
    demo: null,
    github: null,
    featured: true
  },
    {
    title: "ThinkPad – Notes App",
    description:
      "A lightweight note-taking app built with vanilla JS. Create, edit, and delete notes with full localStorage persistence.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: ThinkPad,
    demo: null,
    github: null,
    featured: true
  },
];

export default projects;