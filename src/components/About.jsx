import {
  FaGraduationCap,
  FaSchool,
  FaHandHoldingHeart,
  FaChalkboardUser,
  FaLaptopCode,
} from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

const About = () => {
  const stats = [
    { value: "8.82", label: "B.Tech CGPA", sub: "MNNIT Allahabad" },
    { value: "450+", label: "DSA Solved", sub: "LeetCode & Platforms" },
    { value: "1700", label: "LeetCode Rating", sub: "Knight Track" },
    { value: "Top 10", label: "HACK 18", sub: "Only 1st Year Team" },
  ];

  const education = [
    {
      institution: "Motilal Nehru National Institute of Technology Allahabad",
      location: "Prayagraj, Uttar Pradesh",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      score: "CGPA: 8.82 / 10.0 (till 2nd Semester)",
      period: "2025 – 2029",
      icon: FaGraduationCap,
      badge: "B.Tech CSE",
    },
    {
      institution: "Jawahar Navodaya Vidyalaya, Rajgir, Bihar",
      location: "Rajgir, Bihar",
      degree: "Class XII (Senior Secondary), CBSE Board",
      score: "Score: 93.0%",
      period: "Completed 2025",
      icon: FaSchool,
      badge: "Class XII",
    },
    {
      institution: "Jawahar Navodaya Vidyalaya, Rohtas, Bihar",
      location: "Rohtas, Bihar",
      degree: "Class X (Secondary), CBSE Board",
      score: "Score: 96.4%",
      period: "Completed 2023",
      icon: FaSchool,
      badge: "Class X",
    },
  ];

  const leadership = [
    {
      role: "Coordinator & Teacher",
      org: "Anokhi Pahel (MNNIT Allahabad)",
      duration: "Nov 2025 – Aug 2026",
      desc: "Contributing actively to a student-led social education initiative dedicated to delivering quality tutoring, mentoring, and academic resources to underprivileged students in local communities.",
      icon: FaChalkboardUser,
    },
    {
      role: "Volunteer",
      org: "Antyodaya",
      duration: "Nov 2025",
      desc: "Supported student-driven social welfare drives, resource collection, and community upliftment initiatives organized on campus.",
      icon: FaHandHoldingHeart,
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-semibold mb-4">
            <HiSparkles className="text-sm" />
            <span>BACKGROUND & ACADEMICS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            About <span className="gradient-text-accent">Me</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed">
            I am a Computer Science undergraduate at MNNIT Allahabad driven by curiosity for scalable system design, algorithmic problem-solving, and community impact.
          </p>
        </div>

        {/* Highlight Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#121422]/90 border border-white/10 hover:border-indigo-500/30 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 shadow-md"
            >
              <p className="text-3xl sm:text-4xl font-extrabold gradient-text-accent mb-1">
                {stat.value}
              </p>
              <p className="text-sm font-bold text-white mb-0.5">{stat.label}</p>
              <p className="text-xs font-mono text-gray-400">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Two-Column: Education & Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Education Timeline */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-400 text-lg">
                <FaGraduationCap />
              </div>
              <h3 className="text-2xl font-bold text-white">Education History</h3>
            </div>

            <div className="space-y-4">
              {education.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#121422]/80 border border-white/10 p-6 backdrop-blur-xl hover:border-indigo-500/30 transition-all duration-200"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                        <Icon className="text-xs" />
                        <span>{item.badge}</span>
                      </span>
                      <span className="text-xs font-mono text-gray-400">{item.period}</span>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-1">{item.institution}</h4>
                    <p className="text-xs sm:text-sm text-gray-300 mb-2">{item.degree}</p>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs">
                      <span className="text-emerald-400 font-semibold font-mono">{item.score}</span>
                      <span className="text-gray-400 font-mono">{item.location}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Leadership & Social Impact */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 text-lg">
                <FaHandHoldingHeart />
              </div>
              <h3 className="text-2xl font-bold text-white">Leadership & Service</h3>
            </div>

            <div className="space-y-4">
              {leadership.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#121422]/80 border border-white/10 p-6 backdrop-blur-xl hover:border-emerald-500/30 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-white/5 text-emerald-400">
                        <Icon />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">{item.role}</h4>
                        <p className="text-xs font-mono text-emerald-400">{item.org}</p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3">
                      {item.desc}
                    </p>

                    <span className="text-[11px] font-mono text-gray-400">
                      Duration: {item.duration}
                    </span>
                  </div>
                );
              })}

              {/* Developer Mindset Card */}
              <div className="rounded-2xl bg-gradient-to-br from-indigo-950/40 via-[#121422] to-purple-950/40 border border-indigo-500/20 p-6">
                <div className="flex items-center gap-2 text-indigo-300 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                  <FaLaptopCode className="text-sm" />
                  <span>My Engineering Philosophy</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  "Prioritize understanding core algorithmic fundamentals first, then build robust, production-ready systems that deliver tangible value to people."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;