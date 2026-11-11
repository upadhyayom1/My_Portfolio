import { useState } from "react";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "../data/portfolioData";

export default function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="py-20 sm:py-28 border-t border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          number="01 / SELECTED WORK"
          title="Things I've built, from idea to implementation."
          subtitle="A selection of projects spanning real-time systems, full-stack platforms, AI integrations, and desktop applications."
        />

        {/* Project Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
