import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { skillCategories, projects } from "../data/portfolioData";

export default function Expertise() {
  const [activeSkill, setActiveSkill] = useState(null);

  // Determine which projects use the active skill
  const matchingProjects = activeSkill
    ? projects.filter((p) =>
        p.stack.some(
          (t) =>
            t.toLowerCase() === activeSkill.toLowerCase() ||
            (activeSkill === "C++" && t === "C++")
        )
      )
    : [];

  return (
    <section id="expertise" className="py-20 sm:py-28 border-t border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          number="03 / EXPERTISE"
          title="The tools I work with."
          subtitle="Organized by architectural domain. Tap any technology to see its real-world implementation across my projects."
        />

        {/* Interactive Explorer Header Pill */}
        {activeSkill && (
          <div className="mb-8 p-4 rounded-lg bg-[#FFFFFF] border border-[#17804A] shadow-sm flex flex-wrap items-center justify-between gap-3 animate-in fade-in duration-200">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#17804A]" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#6B6D72]">
                Active Filter:
              </span>
              <span className="font-mono text-sm font-bold text-[#0E0F11]">
                {activeSkill}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#6B6D72]">
              <span>Used in:</span>
              {matchingProjects.length > 0 ? (
                matchingProjects.map((p) => (
                  <span
                    key={p.id}
                    className="px-2 py-0.5 rounded bg-[#F0F0ED] text-[#0E0F11] font-medium"
                  >
                    {p.title}
                  </span>
                ))
              ) : (
                <span className="italic">Core foundations &amp; algorithms</span>
              )}
              <button
                onClick={() => setActiveSkill(null)}
                className="ml-2 text-xs text-[#0E0F11] underline hover:text-[#17804A]"
                type="button"
              >
                Clear
              </button>
            </div>
          </div>
        )}

        {/* Structured Editorial Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.number}
              className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl p-6 hover:border-[#D7D9DE] transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3 mb-4">
                  <span className="font-mono text-xs font-medium text-[#6B6D72]">
                    {cat.number}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#0E0F11] font-semibold">
                    {cat.category}
                  </span>
                </div>

                <p className="font-body text-xs text-[#6B6D72] mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Technical Tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => {
                    const isSelected = activeSkill === skill;
                    return (
                      <button
                        key={skill}
                        onClick={() =>
                          setActiveSkill(isSelected ? null : skill)
                        }
                        className={`px-3 py-1.5 rounded-[5px] font-mono text-xs font-medium transition-all ${
                          isSelected
                            ? "bg-[#0E0F11] text-[#FAFAF8] shadow-sm scale-105"
                            : "bg-[#F7F7F5] border border-[#E5E7EB] text-[#0E0F11] hover:border-[#0E0F11] hover:bg-[#F0F0ED]"
                        }`}
                        type="button"
                      >
                        {skill}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-4 mt-6 border-t border-[#F0F0ED] flex items-center justify-between text-[11px] font-mono text-[#6B6D72]">
                <span>{cat.skills.length} TECHNOLOGIES</span>
                <span className="text-[#17804A]">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
