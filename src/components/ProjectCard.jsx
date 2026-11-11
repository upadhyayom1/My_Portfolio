import { ArrowUpRight, BookOpen } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default function ProjectCard({ project, onOpenModal }) {
  return (
    <article className="group relative bg-[#FFFFFF] border border-[#E5E7EB] hover:border-[#D7D9DE] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
      <div>
        {/* Visual Preview Container */}
        <div
          onClick={() => onOpenModal(project)}
          className="relative aspect-[16/10] overflow-hidden bg-[#F0F0ED] border-b border-[#E5E7EB] cursor-pointer"
        >
          <img
            src={project.previewImage}
            alt={`${project.title} Preview`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
          {/* Subtle overlay hint */}
          <div className="absolute inset-0 bg-[#0E0F11]/0 group-hover:bg-[#0E0F11]/10 transition-colors flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0E0F11] text-[#FAFAF8] font-ui text-xs font-medium shadow-md">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Read Case Study</span>
            </span>
          </div>

          {/* Project Number Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="font-mono text-xs font-medium px-2.5 py-1 rounded bg-[#FFFFFF]/90 backdrop-blur-sm border border-[#E5E7EB] text-[#0E0F11]">
              {project.id}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6 sm:p-8">
          {/* Category & Period */}
          <div className="flex items-center justify-between text-xs font-mono text-[#6B6D72] mb-3">
            <span className="tracking-wider uppercase">{project.category}</span>
            <span>{project.period}</span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onOpenModal(project)}
            className="text-2xl sm:text-3xl font-heading-md text-[#0E0F11] group-hover:text-[#17804A] transition-colors cursor-pointer mb-2"
          >
            {project.title}
          </h3>

          {/* Subtitle */}
          <p className="font-ui text-xs sm:text-sm font-medium text-[#17804A] mb-3">
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="font-body text-[#6B6D72] text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.stack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-[4px] bg-[#F7F7F5] border border-[#E5E7EB] text-[#0E0F11] font-mono text-[11px]"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 5 && (
              <span className="px-2 py-1 rounded-[4px] bg-[#F7F7F5] text-[#6B6D72] font-mono text-[11px]">
                +{project.stack.length - 5}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-6 sm:px-8 py-4 bg-[#FAFAF8] border-t border-[#E5E7EB] flex items-center justify-between">
        <button
          onClick={() => onOpenModal(project)}
          className="inline-flex items-center gap-1.5 text-xs font-ui font-semibold text-[#0E0F11] hover:text-[#17804A] transition-colors"
          type="button"
        >
          <span>Case Study</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#6B6D72] hover:text-[#0E0F11] transition-colors"
          aria-label={`View ${project.title} repository on GitHub`}
        >
          <FaGithub className="w-3.5 h-3.5" />
          <span>GitHub</span>
        </a>
      </div>
    </article>
  );
}
