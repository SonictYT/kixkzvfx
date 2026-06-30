"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Project, thumbnailUrl } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const [imgSrc, setImgSrc] = useState(thumbnailUrl(project.youtubeId));

  return (
    <motion.button
      type="button"
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: "easeOut" }}
      onClick={() => onOpen(project)}
      className="focus-ring group relative block w-full overflow-hidden rounded-2xl border border-line bg-elevated text-left"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-void-soft">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgSrc}
          onError={() =>
            setImgSrc(`https://i.ytimg.com/vi/${project.youtubeId}/mqdefault.jpg`)
          }
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-80" />

        {/* play button */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span
            className="flex h-14 w-14 items-center justify-center rounded-full shadow-xl"
            style={{
              background: "linear-gradient(135deg, var(--cyan), var(--violet))",
            }}
          >
            <svg viewBox="0 0 24 24" fill="white" className="ml-1 h-5 w-5">
              <path d="M8 5v14l11-7Z" />
            </svg>
          </span>
        </div>

        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-display text-base font-bold text-ink transition-colors group-hover:text-violet">
          {project.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-ink-muted">{project.description}</p>
      </div>
    </motion.button>
  );
}
