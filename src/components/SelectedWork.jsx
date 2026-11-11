import { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "../data/portfolioData";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const section = sectionRef.current;
    const header = headerRef.current;
    if (!section || !header) return;

    const ctx = gsap.context(() => {
      // 1. Header text brightness & opacity slow illumination reveal (Scrub-linked)
      gsap.fromTo(
        header.querySelectorAll(".reveal-text"),
        {
          opacity: 0.15,
          filter: "brightness(0.35) blur(5px)",
          y: 24,
        },
        {
          opacity: 1,
          filter: "brightness(1) blur(0px)",
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: header,
            start: "top 88%",
            end: "top 55%",
            scrub: 0.8,
          },
        }
      );

      // 2. Wire and Hanging Cards Entrance Illumination
      const cards = section.querySelectorAll(".project-hanging-card");
      if (cards.length) {
        gsap.fromTo(
          cards,
          {
            opacity: 0.15,
            filter: "brightness(0.4) blur(4px)",
          },
          {
            opacity: 1,
            filter: "brightness(1) blur(0px)",
            duration: 1.1,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section.querySelector(".wire-container"),
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="scroll-mt-16 sm:scroll-mt-20 py-20 sm:py-28 border-t border-[#E5E7EB] overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Section Header (Slow Brightness Reveal) */}
        <div ref={headerRef} className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12">
          <div>
            <div className="reveal-text inline-flex items-center gap-2 mb-2 font-mono text-xs font-medium tracking-[0.15em] text-[#6B6D72] uppercase">
              <span>01 / SELECTED WORK</span>
            </div>
            <h2 className="reveal-text font-serif-display text-4xl sm:text-5xl lg:text-6xl text-[#0E0F11] font-normal tracking-tight">
              selected work.
            </h2>
          </div>

          <div className="mt-4 sm:mt-0 flex items-center justify-between sm:justify-end gap-4">
            <p className="reveal-text font-body text-xs sm:text-sm text-[#6B6D72] max-w-xs">
              Systems architecture, real-time engines, and thoughtful digital products.
            </p>

            {/* Gallery Navigation Controls for smaller viewports */}
            <div className="flex items-center gap-1.5 lg:hidden">
              <button
                type="button"
                onClick={() => scroll("left")}
                className="w-8 h-8 rounded-full border border-[#E5E7EB] bg-[#FFFFFF] hover:bg-[#F0F0ED] flex items-center justify-center text-[#0E0F11] transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                className="w-8 h-8 rounded-full border border-[#E5E7EB] bg-[#FFFFFF] hover:bg-[#F0F0ED] flex items-center justify-center text-[#0E0F11] transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Catenary Clothesline Wire & Hanging Gallery */}
        <div className="wire-container relative pt-6">
          {/* Continuous SVG Hanging Wire */}
          <div className="absolute top-6 left-0 right-0 h-4 pointer-events-none z-0">
            <svg
              className="w-full h-8 overflow-visible"
              viewBox="0 0 1200 24"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 12 Q 300 18, 600 20 T 1200 12"
                fill="none"
                stroke="#A1A1AA"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Hanging Cards Row */}
          <div
            ref={scrollContainerRef}
            className="flex lg:grid lg:grid-cols-4 gap-6 sm:gap-8 overflow-x-auto lg:overflow-x-visible pb-8 pt-2 scrollbar-none snap-x snap-mandatory"
          >
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="shrink-0 w-[280px] sm:w-[290px] lg:w-auto snap-center flex justify-center"
              >
                <ProjectCard
                  project={project}
                  index={idx}
                  onOpenModal={(p) => setSelectedProject(p)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom gallery footnote / hint with clinging tip */}
        <div className="mt-4 pt-4 border-t border-[#F0F0ED] flex items-center justify-between text-xs font-mono text-[#6B6D72]">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#17804A]" />
            <span>HOVER TO SWING · CLINGS TO THE WIRE</span>
          </span>
          <span className="hidden sm:inline">CLICK ANY CARD TO EXPLORE ARCHITECTURE CASE STUDY ↗</span>
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
