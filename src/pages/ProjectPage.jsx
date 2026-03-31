import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ProjectCard } from "../components/Project.jsx";
import Background from "../components/Background.jsx";
import projects from "../data/projectsData.js";
import SectionTitle from "../components/SectionTitle.jsx";

const PROJECTS_PER_PAGE = 6;

// Collect all unique tech tags across all projects
const allTags = ["All", ...new Set(projects.flatMap((p) => p.tech))];

export default function ProjectsPage() {
  const navigate = useNavigate();
  const [activeTag, setActiveTag] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    setCurrentPage(1);
    return activeTag === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(activeTag));
  }, [activeTag]);

  const totalPages = Math.ceil(filtered.length / PROJECTS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  const handleTagChange = (tag) => {
    setActiveTag(tag);
    setCurrentPage(1);
  };

  return (
    <div className="relative min-h-screen">
      <Background />

      <div className="container mx-auto px-6 py-28">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 mb-8 group"
          >
            <motion.span
              animate={{ x: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            >
              ←
            </motion.span>
            Back to portfolio
          </button>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3">
            All Projects
          </h1>
          {/* <SectionTitle title="All Projects"/> */}
          <p className="text-gray-400 text-base max-w-xl">
            Everything I've built — from quick experiments to full production apps.
          </p>
        </motion.div>

        {/* Tag filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagChange(tag)}
              className={`text-xs px-4 py-1.5 rounded-full border transition-all duration-200 font-medium ${
                activeTag === tag
                  ? "bg-cyan-500/20 border-cyan-400/60 text-cyan-400"
                  : "bg-gray-900/60 border-gray-700/60 text-gray-400 hover:border-indigo-500/40 hover:text-gray-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Results count */}
        <motion.p
          key={activeTag}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs text-gray-600 mb-6"
        >
          {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          {activeTag !== "All" ? ` tagged with "${activeTag}"` : " total"}
        </motion.p>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTag}-${currentPage}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {paginated.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07, duration: 0.45 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-gray-600"
          >
            <p className="text-lg mb-2">No projects found for "{activeTag}"</p>
            <button
              onClick={() => handleTagChange("All")}
              className="text-sm text-cyan-400 hover:underline"
            >
              Clear filter
            </button>
          </motion.div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2"
          >
            {/* Prev */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg text-sm border border-gray-700/60 text-gray-400 hover:border-indigo-500/50 hover:text-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ← Prev
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentPage === page
                    ? "bg-indigo-600/60 border border-indigo-500/60 text-white"
                    : "border border-gray-700/60 text-gray-400 hover:border-indigo-500/40 hover:text-white"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg text-sm border border-gray-700/60 text-gray-400 hover:border-indigo-500/50 hover:text-white transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </motion.div>
        )}

      </div>
    </div>
  );
}
