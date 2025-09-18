"use client";

import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from "@/context/theme-context";

const ParticlesBackground: React.FC = () => {
  const { theme } = useTheme();

  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: "transparent" },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" }, // 👈 particles move away from cursor
            onClick: { enable: true, mode: "push" }, // 👈 click adds more particles
          },
          modes: {
            repulse: { distance: 100 }, // how far particles move away from cursor
            push: { quantity: 4 }, // how many particles to add on click
          },
        },
        particles: {
          number: { value: 60 },
          move: { enable: true, speed: 1.5 },
          opacity: { value: 0.4 },
          size: { value: { min: 1, max: 3 } },
          links: {
            enable: true,
            distance: 150,
            color: theme === "light" ? "#4b5563" : "#9ca3af", // gray-600 / gray-400
          },
          color: { value: theme === "light" ? "#111827" : "#f9fafb" }, // text-gray-900 / gray-50
        },
      }}
    />
  );
};

export default ParticlesBackground;
