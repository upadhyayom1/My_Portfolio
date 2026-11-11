import { Suspense, lazy } from "react";
import { personalInfo } from "../data/portfolioData";

const InteractiveBadge = lazy(() => import("./InteractiveBadge"));

function BadgeSkeleton() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[280px] h-[400px] rounded-2xl bg-[#FFFFFF] border border-[#E5E7EB] p-6 shadow-sm flex flex-col justify-between animate-pulse">
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
      className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 pb-0 select-none"
    >
      {/* Top Editorial Statements Row (Split Left & Right) */}
      <div className="relative z-20 max-w-[1280px] w-full mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-12 pointer-events-none">
        {/* Top-Left Statement */}
        <div className="max-w-[280px] sm:max-w-[340px] pointer-events-auto">
          <p className="font-body text-[#0E0F11] text-xs sm:text-[15px] leading-relaxed">
            I build software that solves real problems.{" "}
            <a
              href="#work"
              className="underline underline-offset-4 decoration-[#0E0F11] hover:text-[#17804A] transition-colors font-medium inline-block"
            >
              See the work
            </a>
          </p>
        </div>

        {/* Top-Right Statement (Desktop / Tablet) */}
        <div className="hidden sm:block max-w-[300px] sm:max-w-[380px] sm:text-right pointer-events-auto">
          <p className="font-body text-[#0E0F11] text-sm sm:text-[15px] leading-relaxed text-[#0E0F11]">
            Computer Science undergraduate at MNNIT Allahabad, building full-stack applications, real-time systems, and thoughtful digital experiences. Open for opportunities.
          </p>
        </div>
      </div>

      {/* Middle Center: 3D Interactive Lanyard Badge */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10 flex items-center justify-center">
        <Suspense fallback={<BadgeSkeleton />}>
          <InteractiveBadge className="pointer-events-auto" showControls={false} />
        </Suspense>
      </div>

      {/* Right Edge Interaction Hint (Matches Reference) */}
      <div className="absolute right-6 sm:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col items-end gap-1.5 font-mono text-[11px] text-[#6B6D72] uppercase tracking-[0.15em] pointer-events-none">
        <div className="flex items-center gap-2">
          <span>GRAB THE BADGE AND FLING IT.</span>
          <span className="w-5 h-px bg-[#0E0F11]/40" />
        </div>
        <span>TAP IT TO TURN IT OVER.</span>
      </div>

      {/* Mobile Subtle Hint */}
      <div className="relative z-20 md:hidden flex justify-center pb-2 pointer-events-auto">
        <span className="px-3.5 py-1 rounded-full bg-[#FFFFFF]/85 border border-[#E5E7EB] font-mono text-[10px] text-[#6B6D72] uppercase tracking-wider backdrop-blur-sm shadow-xs">
          Drag badge to swing · Tap to flip
        </span>
      </div>

      {/* Bottom Monumental Name Heading (Edge-to-Edge Fraunces Serif) */}
      <div className="relative w-full text-center overflow-hidden pointer-events-none select-none z-0 translate-y-[12%] sm:translate-y-[16%]">
        <h1 className="monumental-name whitespace-nowrap text-[#0E0F11]">
          {personalInfo.name}
        </h1>
      </div>
    </section>
  );
}
