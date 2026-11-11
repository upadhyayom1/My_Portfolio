import { useEffect } from "react";
import { X, ArrowUpRight, CheckCircle2, AlertCircle, Cpu } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#0E0F11]/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#FFFFFF] border border-[#D7D9DE] rounded-xl shadow-2xl overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-8 py-5 bg-[#FFFFFF]/95 backdrop-blur border-b border-[#E5E7EB]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#F0F0ED] text-[#0E0F11] border border-[#D7D9DE]">
              PROJECT {project.id}
            </span>
            <span className="font-mono text-xs tracking-wider text-[#6B6D72] uppercase hidden sm:inline">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-md text-[#6B6D72] hover:text-[#0E0F11] hover:bg-[#F0F0ED] transition-colors"
            aria-label="Close case study"
            type="button"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="px-6 sm:px-8 py-8 space-y-10">
          {/* Title and Overview */}
          <div>
            <h2 id="modal-title" className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0E0F11] mb-2 font-display">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-[#17804A] font-medium font-ui mb-4">
              {project.subtitle}
            </p>
            <p className="font-body text-[#6B6D72] text-base leading-relaxed max-w-3xl">
              {project.overview}
            </p>
          </div>

          {/* Quick Metrics Strip */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-lg bg-[#F7F7F5] border border-[#E5E7EB]">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="block font-mono text-[10px] sm:text-[11px] text-[#6B6D72] uppercase tracking-wider">
                    {m.label}
                  </span>
                  <span className="block font-ui text-xs sm:text-sm font-semibold text-[#0E0F11]">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Primary Visual Showcase */}
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden border border-[#E5E7EB] bg-[#F7F7F5] shadow-inner">
              <img
                src={project.previewImage}
                alt={`${project.title} Interface Preview`}
                className="w-full h-auto object-cover max-h-[460px]"
                loading="lazy"
              />
            </div>
            {project.detailImage && (
              <div className="rounded-lg overflow-hidden border border-[#E5E7EB] bg-[#F7F7F5]">
                <img
                  src={project.detailImage}
                  alt={`${project.title} Secondary Detail`}
                  className="w-full h-auto object-cover max-h-[380px]"
                  loading="lazy"
                />
              </div>
            )}
          </div>

          {/* Engineering Highlights */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-[#17804A]" />
              <h3 className="font-ui text-lg font-semibold text-[#0E0F11]">
                Engineering Highlights &amp; Systems Architecture
              </h3>
            </div>
            <ul className="space-y-3 font-body text-sm sm:text-base text-[#6B6D72]">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="font-mono text-xs text-[#0E0F11] font-bold mt-1">
                    0{i + 1}.
                  </span>
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Challenges & Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-xl bg-[#FAFAF8] border border-[#E5E7EB]">
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#0E0F11]">
                <AlertCircle className="w-4 h-4 text-[#6B6D72]" />
                <h4 className="font-ui text-sm font-semibold uppercase tracking-wider">
                  Technical Challenge
                </h4>
              </div>
              <p className="font-body text-xs sm:text-sm text-[#6B6D72] leading-relaxed">
                {project.challenges}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2 text-[#17804A]">
                <Cpu className="w-4 h-4" />
                <h4 className="font-ui text-sm font-semibold uppercase tracking-wider">
                  Engineering Solution
                </h4>
              </div>
              <p className="font-body text-xs sm:text-sm text-[#6B6D72] leading-relaxed">
                {project.solutions}
              </p>
            </div>
          </div>

          {/* Full Tech Stack Pills */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#6B6D72] mb-3">
              Technologies &amp; Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-[5px] bg-[#F0F0ED] border border-[#D7D9DE] text-[#0E0F11] font-mono text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links Bar */}
          <div className="pt-6 border-t border-[#E5E7EB] flex flex-wrap items-center justify-between gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-10 px-5 rounded-[6px] bg-[#0E0F11] text-[#FAFAF8] font-ui text-xs font-medium hover:bg-[#232529] transition-colors"
            >
              <FaGithub className="w-4 h-4" />
              <span>Inspect Source on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="h-10 px-4 rounded-[6px] border border-[#E5E7EB] font-ui text-xs font-medium text-[#6B6D72] hover:text-[#0E0F11] hover:bg-[#F0F0ED] transition-colors"
              type="button"
            >
              Close Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
