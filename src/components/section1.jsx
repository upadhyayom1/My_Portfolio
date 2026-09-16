import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight, FaGraduationCap } from "react-icons/fa6";
import { SiLeetcode, SiCodeforces, SiReact, SiCplusplus } from "react-icons/si";
import { HiDocumentText } from "react-icons/hi2";

const ROLES = [
  "Full Stack Developer",
  "Competitive Programmer (1700+)",
  "CSE Undergrad @ MNNIT Allahabad",
  "Open Source Contributor (GSSoC '26)",
];

const Section1 = () => {

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = ROLES[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        // Pause at full word
        setTimeout(() => setIsDeleting(true), 1600);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentRoleIndex]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Ambient background blur circles */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-blob-1" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10 animate-blob-2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold tracking-wide backdrop-blur-md mb-6 hover:bg-emerald-500/15 transition-all">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Internships & Opportunities</span>
            </div>

            {/* Subtitle intro */}
            <div className="flex items-center gap-2 text-indigo-400 font-mono text-sm tracking-wide mb-2">
              <span>👋 Hello World, I am</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.08]">
              Om Upadhyay
            </h1>

            {/* Animated Rotating Role */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text-accent">
                {displayText}
              </span>
              <span className="cursor-blink"></span>
            </div>

            {/* Bio paragraph */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mb-8 font-normal">
              Computer Science & Engineering undergraduate at{" "}
              <span className="text-white font-medium">MNNIT Allahabad</span> (CGPA: 8.82). 
              Passionate about building scalable full-stack applications with Next.js, React, Node.js, and PostgreSQL, 
              coupled with strong algorithmic foundations in C++ (LeetCode 1700, 450+ solved).
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="/Om_Upadhyay_Resume.pdf"
                download="Om_Upadhyay_Resume.pdf"
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500 text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-1 focus:outline-none"
              >
                <FaDownload className="text-white text-sm" />
                <span>Download CV</span>
              </a>

              <a
                href="/Om_Upadhyay_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#161824] hover:bg-[#1f2233] border border-white/10 hover:border-white/20 text-gray-200 font-semibold text-sm transition-all duration-300 hover:-translate-y-1 shadow-sm"
              >
                <HiDocumentText className="text-indigo-400 text-base" />
                <span>View Resume</span>
              </a>

              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-transparent hover:bg-white/5 border border-transparent hover:border-white/10 text-gray-300 hover:text-white font-medium text-sm transition-all duration-200"
              >
                <span>Explore Work</span>
                <FaArrowRight className="text-xs text-indigo-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Social & Coding Platform Profiles */}
            <div className="pt-6 border-t border-white/10 w-full flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                Profiles:
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="https://github.com/upadhyayom1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141724] border border-white/10 text-gray-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 text-xs font-medium transition-all"
                  title="GitHub Profile"
                >
                  <FaGithub className="text-sm text-gray-300" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/om-upadhyay-772787371/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141724] border border-white/10 text-gray-300 hover:text-[#0a66c2] hover:border-[#0a66c2]/50 hover:bg-[#0a66c2]/10 text-xs font-medium transition-all"
                  title="LinkedIn Profile"
                >
                  <FaLinkedin className="text-sm text-[#0a66c2]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://leetcode.com/upadhyayom1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141724] border border-white/10 text-gray-300 hover:text-[#ffa116] hover:border-[#ffa116]/50 hover:bg-[#ffa116]/10 text-xs font-medium transition-all"
                  title="LeetCode Profile (Rating 1700)"
                >
                  <SiLeetcode className="text-sm text-[#ffa116]" />
                  <span>LeetCode (1700)</span>
                </a>

                <a
                  href="https://codeforces.com/profile/upadhyayom1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#141724] border border-white/10 text-gray-300 hover:text-[#318ce7] hover:border-[#318ce7]/50 hover:bg-[#318ce7]/10 text-xs font-medium transition-all"
                  title="Codeforces Profile (Rating 1100+)"
                >
                  <SiCodeforces className="text-sm text-[#318ce7]" />
                  <span>Codeforces</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Hero Visual / Avatar */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative group">
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-700 animate-pulse"></div>
              
              {/* Image card wrapper */}
              <div className="relative rounded-2xl overflow-hidden bg-[#141624] border border-white/15 p-2 shadow-2xl">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQFc4dA_57rLcA/profile-displayphoto-crop_800_800/B56ZvSQ.L8HcAI-/0/1768759223976?e=1781740800&v=beta&t=d-1mh4OTjZrzEvf_QF7abr7nFWE7Q-pKOn66FHp1jRo"
                  alt="Om Upadhyay"
                  className="w-[300px] sm:w-[360px] h-[380px] sm:h-[450px] object-cover rounded-xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.02]"
                />

                {/* Floating pill: Education */}
                <div className="absolute bottom-5 left-5 right-5 p-3 rounded-xl bg-[#0d0f17]/90 backdrop-blur-md border border-white/15 flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                      <FaGraduationCap className="text-base" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white leading-tight">MNNIT Allahabad</p>
                      <p className="text-[11px] text-gray-400 font-mono">B.Tech CSE • CGPA 8.82</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-semibold">
                    Top Tier
                  </span>
                </div>
              </div>

              {/* Floating tech badge: React / Next.js */}
              <div className="absolute -top-4 -right-4 p-3 rounded-2xl bg-[#121422] border border-white/15 shadow-xl flex items-center gap-2 animate-bounce duration-1000 hidden sm:flex">
                <SiReact className="text-cyan-400 text-xl animate-spin" style={{ animationDuration: "12s" }} />
                <span className="text-xs font-mono font-bold text-white">Full Stack</span>
              </div>

              {/* Floating tech badge: C++ / DSA */}
              <div className="absolute top-1/3 -left-6 p-2.5 rounded-2xl bg-[#121422] border border-white/15 shadow-xl flex items-center gap-2 hidden sm:flex">
                <SiCplusplus className="text-blue-400 text-lg" />
                <span className="text-xs font-mono font-bold text-white">450+ Solved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
