import SectionHeading from "./SectionHeading";
import { personalInfo } from "../data/portfolioData";
import { MapPin, GraduationCap, Award, Terminal, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 border-t border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          number="02 / ABOUT"
          title="A little about the person behind the code."
          subtitle="Engineering philosophy, academic context, and architectural approach."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Asymmetric Architectural Profile Card (approx 42%) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
              {/* Subtle architectural grid pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F0F0ED] rounded-bl-full pointer-events-none opacity-40" />

              <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4 mb-6">
                <div>
                  <span className="font-mono text-xs text-[#6B6D72] uppercase tracking-wider block">
                    Identity
                  </span>
                  <span className="font-ui text-base font-bold text-[#0E0F11]">
                    {personalInfo.name}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#F0F0ED] border border-[#D7D9DE] flex items-center justify-center font-mono text-xs font-bold text-[#0E0F11]">
                  OU
                </div>
              </div>

              {/* Factual Academic Milestones */}
              <div className="space-y-4 font-ui text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-[6px] bg-[#F7F7F5] border border-[#E5E7EB] flex items-center justify-center shrink-0 text-[#0E0F11]">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-medium text-[#0E0F11]">
                      B.Tech in Computer Science
                    </span>
                    <span className="text-xs text-[#6B6D72] font-mono">
                      MNNIT Allahabad · 2025–2029
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-[6px] bg-[#F7F7F5] border border-[#E5E7EB] flex items-center justify-center shrink-0 text-[#17804A]">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-medium text-[#0E0F11]">
                      Cumulative GPA: 8.82 / 10.0
                    </span>
                    <span className="text-xs text-[#6B6D72] font-mono">
                      Verified Academic Record
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-[6px] bg-[#F7F7F5] border border-[#E5E7EB] flex items-center justify-center shrink-0 text-[#0E0F11]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-medium text-[#0E0F11]">
                      Prayagraj, Uttar Pradesh
                    </span>
                    <span className="text-xs text-[#6B6D72] font-mono">
                      Motilal Nehru National Institute of Technology
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-[6px] bg-[#F7F7F5] border border-[#E5E7EB] flex items-center justify-center shrink-0 text-[#0E0F11]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-medium text-[#0E0F11]">
                      Open Source &amp; Systems
                    </span>
                    <span className="text-xs text-[#6B6D72] font-mono">
                      GSSoC 2026 Contributor · E-Cell Web Dev
                    </span>
                  </div>
                </div>
              </div>

              {/* Monogram Terminal Preview */}
              <div className="mt-6 pt-6 border-t border-[#E5E7EB] bg-[#FAFAF8] -mx-6 -mb-6 p-6 rounded-b-xl">
                <div className="flex items-center gap-2 mb-2 text-[#6B6D72] font-mono text-xs">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>status_check.sh</span>
                </div>
                <div className="font-mono text-xs text-[#0E0F11] space-y-1">
                  <p className="text-[#17804A]">✔ Systems operational</p>
                  <p className="text-[#6B6D72]">Focus: In-memory FIFO, Trajectory AI</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Principles (approx 58%) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose max-w-none text-[#0E0F11]">
              <p className="font-heading-md text-[#0E0F11] text-2xl sm:text-3xl leading-snug font-medium mb-6">
                "I enjoy building software that combines thoughtful interfaces with reliable backend systems."
              </p>

              <div className="space-y-5 font-body text-[#6B6D72] text-base sm:text-[17px] leading-relaxed">
                <p>
                  I'm Om Upadhyay, a Computer Science and Engineering undergraduate at Motilal Nehru National Institute of Technology Allahabad.
                </p>
                <p>
                  My work spans full-stack web development, real-time applications, developer tooling, and AI-integrated platforms. Whether developing in-memory FIFO order-matching books for secondary ticketing with PassFlow, orchestrating computer vision ANPR pipelines for urban traffic intelligence with Nagar-Drishti, or designing secure preload IPC bridges in Electron desktop engines with AuraDesk, I focus on the underlying architecture as much as the visible interface.
                </p>
                <p>
                  Beyond projects, I spend time strengthening my understanding of data structures, algorithms, and the engineering decisions that make software scalable and maintainable. I believe software engineering is most rewarding when clean theory translates into robust, dependable products.
                </p>
              </div>
            </div>

            {/* Principles Cards */}
            <div className="pt-6 border-t border-[#E5E7EB] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-lg bg-[#FFFFFF] border border-[#E5E7EB]">
                <span className="font-mono text-xs font-semibold text-[#17804A] block mb-1">
                  01 / DETERMINISTIC ARCHITECTURE
                </span>
                <p className="font-body text-xs sm:text-sm text-[#6B6D72]">
                  Reliable transactional boundaries, race condition avoidance, and reproducible data state across real-time systems.
                </p>
              </div>
              <div className="p-5 rounded-lg bg-[#FFFFFF] border border-[#E5E7EB]">
                <span className="font-mono text-xs font-semibold text-[#0E0F11] block mb-1">
                  02 / SWISS EDITORIAL CRAFT
                </span>
                <p className="font-body text-xs sm:text-sm text-[#6B6D72]">
                  Quiet typography, generous hierarchy, and restrained interactive details instead of distracting visual clutter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
