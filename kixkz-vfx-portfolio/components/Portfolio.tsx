"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projects, Project, FILTERS } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import VideoModal from "./VideoModal";

const ALL = "All";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>(ALL);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const featured = useMemo(
    () => projects.filter((p) => p.featured).slice(0, 3),
    []
  );

  const filtered = useMemo(() => {
    if (activeFilter === ALL) return projects;
    return projects.filter((p) => p.filterTag === activeFilter);
  }, [activeFilter]);

  const chips = [ALL, ...FILTERS];

  return (
    <section id="work" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
            Selected Edits
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Work
          </h2>
        </div>

        {/* Featured row */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={setActiveProject}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="my-20 flex items-center gap-4">
          <div className="h-px flex-1 bg-line" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">
            All Projects
          </span>
          <div className="h-px flex-1 bg-line" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {chips.map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => setActiveFilter(chip)}
              className={`focus-ring relative rounded-full px-5 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                activeFilter === chip
                  ? "text-void"
                  : "glass text-ink-muted hover:text-ink"
              }`}
            >
              {activeFilter === chip && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, var(--cyan), var(--violet))",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{chip}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={setActiveProject}
            />
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-ink-muted">
            No projects in this category yet.
          </p>
        )}
      </div>

      <VideoModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
