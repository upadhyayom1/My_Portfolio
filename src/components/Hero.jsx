import { Suspense, lazy } from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const InteractiveBadge = lazy(() => import("./InteractiveBadge"));

function BadgeSkeleton() {
  return (
    <div className="w-full h-[520px] sm:h-[580px] lg:h-[640px] flex items-center justify-center">
      <div className="w-[280px] h-[390px] rounded-2xl bg-[#FFFFFF] border border-[#E5E7EB] p-6 shadow-sm flex flex-col justify-between animate-pulse">
        <div className="space-y-4">
          <div className="h-4 bg-[#F0F0ED] rounded w-1/2" />
          <div className="h-8 bg-[#F0F0ED] rounded w-3/4" />
          <div className="h-4 bg-[#F0F0ED] rounded w-1/3" />
        </div>
        <div className="space-y-2">
          <div className="h-10 bg-[#F0F0ED] rounded" />
          <div className="h-3 bg-[#F0F0ED] rounded w-2/3 mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[640px] lg:min-h-[720px] lg:max-h-[880px] flex items-center pt-24 pb-12 sm:pb-16 overflow-hidden"
    >
      <div className="max-w-[1280px] w-full mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Introduction (approx 58%) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Small Mono Introduction Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#F0F0ED] border border-[#E5E7EB] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#17804A]" />
              <span className="font-mono text-xs font-medium tracking-[0.14em] text-[#0E0F11] uppercase">
                {personalInfo.hero.eyebrow}
              </span>
            </div>

            {/* Large Editorial Headline */}
            <h1 className="font-display text-[#0E0F11] tracking-tight mb-6">
              {personalInfo.hero.headline}
            </h1>

            {/* Supporting Description */}
            <p className="font-body text-[#6B6D72] text-base sm:text-lg lg:text-[18px] max-w-xl leading-relaxed mb-8">
              {personalInfo.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-[6px] bg-[#0E0F11] text-[#FAFAF8] font-ui text-sm font-medium hover:bg-[#232529] transition-all duration-200"
              >
                <span>{personalInfo.hero.primaryCta}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-[6px] bg-white border border-[#E5E7EB] text-[#0E0F11] font-ui text-sm font-medium hover:border-[#0E0F11] hover:bg-[#FAFAF8] transition-all duration-200"
              >
                <span>{personalInfo.hero.secondaryCta}</span>
                <ArrowUpRight className="w-4 h-4 text-[#6B6D72]" />
              </a>
            </div>

            {/* Quick Metadata Row */}
            <div className="pt-6 border-t border-[#E5E7EB] w-full grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div>
                <span className="block font-mono text-[11px] text-[#6B6D72] uppercase tracking-wider mb-0.5">
                  Academic Focus
                </span>
                <span className="font-ui text-xs sm:text-sm font-medium text-[#0E0F11]">
                  B.Tech CSE · MNNIT
                </span>
              </div>
              <div>
                <span className="block font-mono text-[11px] text-[#6B6D72] uppercase tracking-wider mb-0.5">
                  Standing
                </span>
                <span className="font-ui text-xs sm:text-sm font-medium text-[#0E0F11]">
                  8.82 CGPA · Class 2029
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block font-mono text-[11px] text-[#6B6D72] uppercase tracking-wider mb-0.5">
                  Location
                </span>
                <span className="font-ui text-xs sm:text-sm font-medium text-[#0E0F11]">
                  Prayagraj, India
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Lanyard & Badge (approx 42%) */}
          <div className="lg:col-span-5 flex items-center justify-center relative w-full">
            <Suspense fallback={<BadgeSkeleton />}>
              <InteractiveBadge />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
