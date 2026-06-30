"use client";

import { motion } from "framer-motion";
import { BRAND } from "@/data/socials";
import HireMeButton from "./HireMeButton";
import DiscordCopyChip from "./DiscordCopyChip";
import SocialRow from "./SocialRow";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16"
        >
          <div
            className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
            style={{
              background:
                "linear-gradient(90deg, var(--cyan), var(--violet), var(--magenta))",
            }}
          />
          <span className="relative font-mono text-xs uppercase tracking-[0.3em] text-cyan">
            Let&apos;s Work Together
          </span>
          <h2 className="font-display relative mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Ready for your next
            <br />
            <span className="text-gradient">montage to hit different?</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-md text-ink-muted">
            Send your clips, your deadline, and your vision. I&apos;ll handle the rest.
          </p>

          <div className="relative mt-9 flex flex-col items-center gap-5">
            <HireMeButton size="lg" />
            <DiscordCopyChip />
          </div>
        </motion.div>
      </div>

      <footer className="mx-auto mt-20 max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 border-t border-line pt-8 sm:flex-row">
          <div className="flex items-center gap-2 font-display text-sm font-bold tracking-wide text-ink-muted">
            {BRAND.shortName}
            <span className="text-violet">.</span>
          </div>
          <SocialRow />
          <p className="font-mono text-xs text-ink-faint">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
