import SectionHeading from "./SectionHeading";
import { achievements } from "../data/portfolioData";
import { ArrowUpRight } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 sm:py-28 border-t border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          number="05 / ACHIEVEMENTS"
          title="A few milestones along the way."
          subtitle="Verified contest rankings, institute awards, and open-source contributions."
        />

        {/* Editorial Achievement Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] border border-[#E5E7EB] hover:border-[#D7D9DE] rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:shadow-sm"
            >
              <div>
                {/* Tag & Icon header */}
                <div className="flex items-center justify-between text-xs font-mono text-[#6B6D72] mb-6">
                  <span className="uppercase tracking-wider px-2 py-0.5 rounded bg-[#F7F7F5] border border-[#E5E7EB]">
                    {item.tag}
                  </span>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group font-mono text-xs text-[#6B6D72] hover:text-[#0E0F11] inline-flex items-center gap-1 transition-colors"
                      aria-label={`View ${item.label} link`}
                    >
                      <span className="editorial-link">Verify</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </div>

                {/* Big Typographic Metric */}
                <div className="mb-4">
                  <span className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#0E0F11] block">
                    {item.metric}
                  </span>
                  <h3 className="font-ui text-base font-semibold text-[#0E0F11] mt-1">
                    {item.label}
                  </h3>
                </div>

                {/* Detail Description */}
                <p className="font-body text-xs sm:text-sm text-[#6B6D72] leading-relaxed mb-4">
                  {item.detail}
                </p>
              </div>

              {/* Factual Highlight Strip */}
              <div className="pt-4 border-t border-[#F0F0ED]">
                <span className="font-mono text-xs text-[#17804A] font-medium block">
                  {item.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
