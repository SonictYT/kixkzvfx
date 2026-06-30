"use client";

import { motion } from "framer-motion";
import HireMeButton from "./HireMeButton";

const TAGS = ["Fortnite Specialist", "Esports-Ready Pacing", "Custom VFX"];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-16"
    >
      {/* timeline ruler ticks */}
      <div className="timeline-ticks pointer-events-none absolute inset-x-0 top-24 h-10 opacity-60" />

      {/* moving playhead line */}
      <motion.div
        className="pointer-events-none absolute top-24 h-10 w-px bg-cyan shadow-[0_0_12px_var(--color-cyan)]"
        animate={{ left: ["6%", "92%", "6%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />

      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-cyan"
        >
          00:00:00 — Freelance VFX Editor
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="font-display mt-6 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          Cuts that hit
          <br />
          <span className="text-gradient">as hard as the clip.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
          className="mt-6 max-w-xl text-lg text-ink-muted"
        >
          I&apos;m <span className="text-ink">Kixkz</span> — a freelance editor building
          Fortnite montages, esports edits, and player highlight reels for creators and
          organizations who want their gameplay to look as good as it plays.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <HireMeButton size="lg" />
          <a
            href="#work"
            className="focus-ring glass rounded-full px-7 py-4 font-display text-sm font-semibold tracking-wide text-ink transition-colors hover:border-violet/50"
          >
            View Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-14 flex flex-wrap gap-3"
        >
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="glass rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink-muted"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
