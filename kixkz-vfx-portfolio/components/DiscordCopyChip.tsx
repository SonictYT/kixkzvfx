"use client";

import { useState } from "react";
import { DiscordIcon, CopyIcon, CheckIcon } from "./icons";
import { SOCIALS } from "@/data/socials";

export default function DiscordCopyChip({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(SOCIALS.discordUsername);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // ignore — clipboard unavailable
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`focus-ring group glass inline-flex items-center gap-3 rounded-full px-4 py-2.5 transition-colors hover:border-violet/40 ${className}`}
      aria-label="Copy Discord username"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#5865F2]/15 text-[#8ea1ff]">
        <DiscordIcon className="h-4 w-4" />
      </span>
      <span className="font-mono text-sm text-ink">{SOCIALS.discordUsername}</span>
      <span className="ml-1 text-ink-faint transition-colors group-hover:text-cyan">
        {copied ? <CheckIcon className="h-4 w-4 text-cyan" /> : <CopyIcon className="h-4 w-4" />}
      </span>
    </button>
  );
}
