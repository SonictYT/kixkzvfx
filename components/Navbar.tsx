"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BRAND } from "@/data/socials";
import HireMeButton from "./HireMeButton";

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="focus-ring font-display text-lg font-bold tracking-[0.18em] text-ink"
        >
          {BRAND.shortName}
          <span className="text-violet">.</span>
        </a>

        <nav
          className={`glass hidden items-center gap-1 rounded-full px-2 py-1.5 md:flex transition-all duration-300 ${
            scrolled ? "shadow-lg shadow-black/30" : ""
          }`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <HireMeButton size="md" />
      </div>
    </motion.header>
  );
}
