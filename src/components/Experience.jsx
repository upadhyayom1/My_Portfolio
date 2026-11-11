import SectionHeading from "./SectionHeading";
import { experienceData, educationData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          number="04 / EXPERIENCE"
          title="What I've worked on. Where I've learned."
          subtitle="Positions of responsibility, institutional engineering, and academic milestones."
        />

        <div className="space-y-16">
          {/* Subsection: Experience & Leadership */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="font-mono text-xs font-semibold text-[#0E0F11] tracking-wider uppercase">
                EXPERIENCE &amp; POSITIONS OF RESPONSIBILITY
              </span>
              <div className="h-px flex-1 bg-[#E5E7EB]" />
            </div>

            <div className="divide-y divide-[#E5E7EB] border-y border-[#E5E7EB]">
              {experienceData.map((exp, idx) => (
                <div
                  key={idx}
                  className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-[#FFFFFF]/60 transition-colors px-2 -mx-2 rounded-lg"
                >
                  {/* Period Column (3 cols) */}
                  <div className="md:col-span-3">
                    <span className="font-mono text-xs font-medium text-[#6B6D72] block">
                      {exp.period}
                    </span>
                    <span className="font-mono text-[11px] text-[#17804A] block mt-1">
                      {exp.type}
                    </span>
                  </div>

                  {/* Role & Org Column (4 cols) */}
                  <div className="md:col-span-4">
                    <h3 className="font-heading-md text-xl sm:text-2xl font-bold text-[#0E0F11]">
                      {exp.role}
                    </h3>
                    <p className="font-ui text-sm text-[#6B6D72] mt-1">
                      {exp.organization}
                    </p>
                  </div>

                  {/* Responsibilities Column (5 cols) */}
                  <div className="md:col-span-5 space-y-2">
                    <ul className="space-y-2 font-body text-xs sm:text-sm text-[#6B6D72]">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#0E0F11] font-mono text-xs">―</span>
                          <span className="leading-relaxed">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subsection: Education */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="font-mono text-xs font-semibold text-[#0E0F11] tracking-wider uppercase">
                ACADEMIC FOUNDATION
              </span>
              <div className="h-px flex-1 bg-[#E5E7EB]" />
            </div>

            <div className="divide-y divide-[#E5E7EB] border-y border-[#E5E7EB]">
              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start hover:bg-[#FFFFFF]/60 transition-colors px-2 -mx-2 rounded-lg"
                >
                  {/* Year / Period (3 cols) */}
                  <div className="md:col-span-3">
                    <span className="font-mono text-xs font-medium text-[#6B6D72] block">
                      {edu.period}
                    </span>
                    <span className="font-mono text-[11px] text-[#6B6D72] block mt-1">
                      {edu.location}
                    </span>
                  </div>

                  {/* Institution & Degree (5 cols) */}
                  <div className="md:col-span-5">
                    <h3 className="font-heading-md text-lg sm:text-xl font-bold text-[#0E0F11]">
                      {edu.institution}
                    </h3>
                    <p className="font-ui text-sm text-[#6B6D72] mt-1">
                      {edu.degree}
                    </p>
                    <p className="font-body text-xs text-[#6B6D72] mt-2">
                      {edu.details}
                    </p>
                  </div>

                  {/* Score / Performance (4 cols) */}
                  <div className="md:col-span-4 flex md:justify-end items-center">
                    <div className="px-4 py-2 rounded-lg bg-[#FFFFFF] border border-[#E5E7EB] text-left md:text-right">
                      <span className="block font-mono text-[10px] text-[#6B6D72] uppercase tracking-wider">
                        Performance
                      </span>
                      <span className="font-mono text-base font-bold text-[#0E0F11]">
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
