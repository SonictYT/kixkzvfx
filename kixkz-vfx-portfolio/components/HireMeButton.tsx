"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SOCIALS } from "@/data/socials";
import { CheckIcon } from "./icons";

interface HireMeButtonProps {
  size?: "lg" | "md";
  className?: string;
}

export default function HireMeButton({ size = "md", className = "" }: HireMeButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(SOCIALS.discordUsername);
    } catch {
      // clipboard not available — still proceed to open Discord
    }
    setCopied(true);
    window.open("https://discord.com/", "_blank", "noopener,noreferrer");
    setTimeout(() => setCopied(false), 2800);
  }

  const sizeClasses =
    size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm";

  return (
    <div className="relative inline-block">
      <motion.button
        type="button"
        onClick={handleClick}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className={`focus-ring group relative inline-flex items-center gap-2 rounded-full font-display font-semibold tracking-wide text-void overflow-hidden ${sizeClasses} ${className}`}
        style={{
          background: "linear-gradient(135deg, #fff 0%, #e9e4ff 100%)",
        }}
      >
        <span
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(135deg, var(--cyan) 0%, var(--violet) 60%, var(--magenta) 100%)",
          }}
        />
        <span
          className="pointer-events-none absolute -inset-px rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60"
          style={{
            background: "linear-gradient(135deg, var(--violet), var(--magenta))",
          }}
        />
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
          Hire Me
        </span>
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
          →
        </span>
      </motion.button>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            className="glass absolute left-1/2 top-full z-20 mt-3 w-64 -translate-x-1/2 rounded-xl px-4 py-3 text-center shadow-xl"
          >
            <div className="flex items-center justify-center gap-2 text-cyan">
              <CheckIcon className="h-4 w-4" />
              <span className="font-mono text-xs">Discord username copied</span>
            </div>
            <p className="mt-1 font-mono text-xs text-ink-muted">
              Add <span className="text-ink">{SOCIALS.discordUsername}</span> on Discord to chat
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
