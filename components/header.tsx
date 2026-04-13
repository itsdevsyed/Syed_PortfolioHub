"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="relative z-[999]">
      {/* THE VERTICAL DOCK
          - Desktop: Fixed left, centered vertically.
          - Mobile: Bottom-center pill (UX-friendly for reach).
      */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 sm:left-8 sm:top-1/2 sm:bottom-auto sm:translate-x-0 sm:-translate-y-1/2">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex flex-row items-center gap-2 rounded-2xl border border-white/10 bg-gray-900/40 p-2 backdrop-blur-2xl sm:flex-col sm:rounded-full"
        >
          {links.map((link) => (
            <div key={link.hash} className="group relative">
              <Link
                className={clsx(
                  "relative flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-500 sm:h-12 sm:w-12",
                  activeSection === link.name
                    ? "bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    : "text-gray-500 hover:text-gray-200"
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {/* Visual Icon Substitute (The first letter)
                    In a real build, you'd swap {link.name[0]} for Lucide icons.
                */}
                <span className="text-xs font-bold uppercase tracking-tighter">
                  {link.name[0]}
                </span>

                {/* SLIDING TOOLTIP: Shows on hover */}
                <span className="absolute left-full ml-4 hidden rounded-md bg-white px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-black opacity-0 transition-all group-hover:opacity-100 sm:block">
                  {link.name}
                </span>

                {/* THE STRAY LIGHT: Active indicator */}
                {link.name === activeSection && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -left-1 hidden h-6 w-[2px] rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6] sm:block"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </div>
          ))}
        </motion.div>
      </nav>
    </header>
  );
}
