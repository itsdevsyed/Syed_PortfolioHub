import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import CaseStudies from "@/components/caseStudies";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Intro Section */}
      <Intro />

      {/* Divider */}
      <SectionDivider />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Experience Section */}
      <Experience />

      {/* Case Studies Section */}
      <CaseStudies />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
