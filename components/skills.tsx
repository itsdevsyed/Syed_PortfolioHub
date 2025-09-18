"use client";

import React, { useEffect, useState, useRef } from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

interface SkillBox {
  skill: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function Skills() {
  const { theme } = useTheme();
  const { ref: sectionRef } = useSectionInView("Skills"); // renamed to avoid conflict
  const containerRef = useRef<HTMLDivElement>(null);
  const [boxes, setBoxes] = useState<SkillBox[]>([]);

  useEffect(() => {
    const sectionHeight = containerRef.current?.offsetHeight || window.innerHeight * 0.7;
    const sectionWidth = containerRef.current?.offsetWidth || window.innerWidth;

    // Initialize boxes with random positions and velocities
    const initialBoxes = skillsData.map((skill) => ({
      skill,
      x: Math.random() * sectionWidth,
      y: Math.random() * sectionHeight,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
    }));
    setBoxes(initialBoxes);

    // Animate floating boxes
    let animationFrame: number;
    const animate = () => {
      setBoxes((prev) =>
        prev.map((box) => {
          let newX = box.x + box.vx;
          let newY = box.y + box.vy;

          // Bounce off edges
          if (newX < 0 || newX > sectionWidth - 150) box.vx *= -1;
          if (newY < 0 || newY > sectionHeight - 40) box.vy *= -1;

          return { ...box, x: newX, y: newY };
        })
      );
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const getBoxClasses = () => {
    if (theme === "light") {
      return "bg-black/60 text-white border border-black/40";
    } else {
      return "bg-white/20 text-black border border-white/30";
    }
  };

  return (
    <section
      id="skills"
      ref={containerRef} // container measurements
      className="mb-28 w-full scroll-mt-28 text-center relative h-[70vh] sm:h-[80vh] overflow-hidden"
    >
      {/* Pass containerRef to useSectionInView manually */}
      <div ref={sectionRef} />

      <SectionHeading>My Skills</SectionHeading>

      {boxes.map((box, index) => (
        <div
          key={index}
          id={`skill-box-${index}`}
          className={`absolute px-6 py-4 rounded-xl cursor-pointer whitespace-nowrap transition-transform duration-300 hover:scale-150 hover:bg-white hover:text-black ${getBoxClasses()}`}
          style={{ left: box.x, top: box.y }}
        >
          {box.skill}
        </div>
      ))}
    </section>
  );
}
