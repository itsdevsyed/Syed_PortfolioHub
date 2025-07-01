import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import CaseStudies from "@/components/caseStudies";
import DataBase from "@/components/caseStudies/dataBase";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About/>
      <Projects />
      <Skills />
      <Experience />
      <CaseStudies />
      <Contact />
    </main>
  );
}
