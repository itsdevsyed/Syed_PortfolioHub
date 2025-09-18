"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        fixed top-5 right-5
        w-[3rem] h-[3rem]
        flex items-center justify-center
        rounded-full shadow-lg transition-all duration-300 ease-in-out
        hover:scale-110 active:scale-95
        border border-gray-300 dark:border-gray-700
        ${theme === "light"
          ? "bg-gradient-to-br from-yellow-200 to-yellow-400 text-yellow-800 shadow-yellow-300/50"
          : "bg-gradient-to-br from-gray-800 to-gray-900 text-yellow-300 shadow-yellow-800/50"}
      `}
    >
      <span
        className="transition-transform duration-500 ease-in-out"
        style={{ transform: theme === "light" ? "rotate(0deg)" : "rotate(180deg)" }}
      >
        {theme === "light" ? <BsSun size={20} /> : <BsMoon size={20} />}
      </span>
    </button>
  );
}
