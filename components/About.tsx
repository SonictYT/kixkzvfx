"use client";

import { motion } from "framer-motion";

const SKILLS = [
  "Montage Editing",
  "Custom VFX",
  "Color Grading",
  "Motion Graphics",
  "Sound Design",
  "Fortnite Replay Mod",
];

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">
              About
            </span>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Built for clips that need
              <br />
              to perform.
            </h2>
            <p className="mt-6 text-ink-muted leading-relaxed">
              I edit Fortnite montages, esports content, and player highlight reels
              for organizations, creators, and competitive players who want their
              gameplay packaged with the same intensity it was played with. Every
              edit is built around pacing, impact, and a visual style that holds
              up on YouTube, TikTok, and Twitch alike.
            </p>
            <p className="mt-4 text-ink-muted leading-relaxed">
              From sync-heavy montages to clean competitive reels, the goal is
              always the same: cuts that hit as hard as the clip.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-8"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                Toolkit
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-line px-4 py-2 text-sm text-ink-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
