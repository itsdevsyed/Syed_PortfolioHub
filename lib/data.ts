import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaGraduationCap, FaLaptop, FaLaptopCode, FaLaptopHouse, FaReact, FaSalesforce } from "react-icons/fa";
import bouncing from 'public/bouncing.png'
import disney from 'public/Disney.png'
import youtube from 'public/youtube.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Hyderabad, India",
    description:
    "As a Software Engineer at Techweaaver Systems Company, As a Software Engineer, I leveraged React.js, MongoDB, and Node.js to create efficient and dynamic web applications, enhancing user experiences.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2023 - Present",
  },
  {
    title: "Freelancer - Java Developer",
    location: "Upwork",
    description:
      "Freelancer Java Developer specializing in Core Java and J2EE, delivering robust solutions tailored to client needs.",
    icon: React.createElement(FaLaptopCode),
    date: "Oct 2021 – Jan 2023",
  },
  {
    title: "Freelancer - Front-End Developer",
    location: "Fiverrr",
    description:
    "Worked as a freelance Front-End Developer, specializing in HTML, CSS, JavaScript, React.js, and other related technologies, delivering high-quality websites at competitive prices.",
    icon: React.createElement(FaLaptopCode),
    date: "Dec 2019 – Aug 2021",
  },
  {
    title: "Bachelor of Science in Computer Science",
    location: "Nanded, India ",
    description:
      "Developed 10+ Projects in frontend. My stack includes React, Next.js, TypeScript, Tailwind, Sanity and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaGraduationCap),
    date: "2019 - 2022",
  },
 
] as const;

export const projectsData = [
  
  {
    title: "Youtube Clone",
    description:
      "I made Awwwards winning website Cuberto. It's a single page website with a lot of animations and interactions.",
    tags: [     "react" ,"react-dom","axios", "react-player","react-router-dom","dotenv"],
    imageUrl: youtube,
    imagePath: "https://youtube-clone-theta-ruby.vercel.app/",
  },
  {
    title: "Disney+ Clone",
    description:
      "I made Awwwards winning website Cuberto. It's a single page website with a lot of animations and interactions.",
    tags: [ "next", "react" , "react-dom", "tailwindcss"],
    imageUrl: disney,
    imagePath: "https://disney-plus-clone-nextjs-phi.vercel.app/",
  },
  {
    title: "Bouncing Text",
    description:
      "I made Awwwards winning website Cuberto. It's a single page website with a lot of animations and interactions.",
    tags: ["HTML", "CSS", "Javascript", "Matter.js" , "P5.js"],
    imageUrl: bouncing,
    imagePath: "https://bouncing-text.vercel.app/",
  },
 
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Nextjs",
  "Nodejs",
  "Git",
  "TailwindCSS",
  "MongoDB",
  "MySql",
  "Redux",
  "Framer Motion",
  "Java",
  "p5",
  "matter.js",
  "Three js",
  "Prismic",
  "Github",
  "Postman",
  "AWS",
  "C",
  "C++",
  "Restfull API"

] as const;