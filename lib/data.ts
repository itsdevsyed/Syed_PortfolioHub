import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaGraduationCap, FaLaptop, FaLaptopCode, FaLaptopHouse, FaReact, FaSalesforce } from "react-icons/fa";
import bouncing from 'public/Bouncing.png'
import disney from 'public/Disney.png'
import youtube from 'public/Youtube.png'

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
    name: "CaseStudies",
    hash: "#case-studies",
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
    "Designed and developed a responsive and portable college website independently,as a Acadmic Project, incorporating components still in use in current products ",
    icon: React.createElement(FaGraduationCap),
    date: "2019 - 2022",
  },

] as const;

export const projectsData = [

  {
    title: "Youtube Clone",
    description:
    "Build a YouTube clone with a modern interface and enhanced user experience using the Rapid API for seamless video streaming and interaction.",
    tags: [     "react" ,"react-dom","axios", "react-player","react-router-dom","dotenv"],
    imageUrl: youtube,
    imagePath: "https://youtube-clone-theta-ruby.vercel.app/",
  },
  {
    title: "Disney+ Clone",
    description:
    "Create a Disney-inspired streaming platform with a fresh design and enhanced functionalities for a magical entertainment experience.",
    tags: [ "next", "react" , "react-dom", "tailwindcss"],
    imageUrl: disney,
    imagePath: "https://disney-plus-clone-nextjs-phi.vercel.app/",
  },
  {
    title: "Bouncing Text",
    description:
      " Create a dynamic text animation using Matter.js and p5.js, combining physics-based movement with creative typography for engaging visual effects.",
    tags: ["HTML", "CSS", "Javascript", "Matter.js" , "P5.js"],
    imageUrl: bouncing,
    imagePath: "https://bouncing-text.vercel.app/",
  },

] as const;

export const skillsData = [

"Go",
"Kubernetes",
"Docker",
"Jenkins",
"Java",
"C++",
"JavaScript",
"TypeScript",
"React",
"Next.js",
"Node.js",
"Express.js",
"Git",
"Redux",
"Tailwind CSS",
"Material UI",
"MongoDB",
"MySQL",
"AWS",
"Postman",
"Restful API",
"GitHub",
"Framer Motion",
"Three.js",
"matter.js",
"Rest API",
"Redux Toolkit",
"Jira",
"Bitbucket",
"Jira",
"GitLab",


] as const;
