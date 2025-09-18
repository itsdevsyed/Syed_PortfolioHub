"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");
  const [textIndex, setTextIndex] = useState(0);

  const words = [
    "With a Bachelor's degree in Computer Science and a passion for innovation, I embarked on a journey to explore the realms of software engineering.",
    "During my professional career and freelancing endeavors, I've honed my skills in front-end and back-end development, specializing in technologies like React.js, Redux, Node.js, and MongoDB.",
    "I have a keen interest in Big Data, Web3, Distributed Systems, and I'm always eager to learn and apply new technologies to create innovative solutions.",
  ];

  // cycle text every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % words.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <div className="mb-3 font-sans text-lg relative h-[150px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={textIndex}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="px-2"
          >
            {words[textIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
