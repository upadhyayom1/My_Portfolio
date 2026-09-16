import { FaTrophy, FaMedal, FaAward, FaCode, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { SiLeetcode, SiCodeforces, SiCodechef } from "react-icons/si";
import { HiSparkles, HiStar } from "react-icons/hi2";

const Achievements = () => {
  const contestProfiles = [
    {
      platform: "LeetCode",
      icon: SiLeetcode,
      color: "#FFA116",
      rating: "1700",
      ratingLabel: "Contest Rating",
      stat: "450+ Problems Solved",
      highlight: "Biweekly Contest 186: Rank 2573 / 39,050 participants",
      link: "https://leetcode.com/upadhyayom1/",
      badge: "Knight Track",
    },
    {
      platform: "Codeforces",
      icon: SiCodeforces,
      color: "#318CE7",
      rating: "1100+",
      ratingLabel: "Max Rating",
      stat: "Active Contestant",
      highlight: "Regular participant in Div 2 & Div 3 rounds",
      link: "https://codeforces.com/profile/upadhyayom1",
      badge: "Specialist Track",
    },
    {
      platform: "CodeChef",
      icon: SiCodechef,
      color: "#5B4638",
      rating: "2★",
      ratingLabel: "Star Rating",
      stat: "Division 3 / 2 Contests",
      highlight: "Consistent problem solving in rated Starters & Cook-Offs",
      link: "https://www.codechef.com",
      badge: "2-Star Rated",
    },
  ];

  const awards = [
    {
      title: "2nd Rank — Error_404 (CyberQuest)",
      event: "Avishkar 2025, MNNIT Allahabad",
      description:
        "Secured 2nd rank in the flagship software development & problem solving competition as a team.",
      icon: FaMedal,
      color: "text-slate-300",
      bgBadge: "bg-slate-400/10 text-slate-300 border-slate-400/25",
      type: "Team Achievement",
    },
    {
      title: "Best First Year Team — Game of Codes",
      event: "Mechathon, Avishkar 2025",
      description:
        "Recognized as the best performing first-year engineering team in algorithmic coding and development.",
      icon: FaTrophy,
      color: "text-amber-400",
      bgBadge: "bg-amber-400/10 text-amber-300 border-amber-400/25",
      type: "First Year Honor",
    },
    {
      title: "3rd Individual Rank — CodeSparks",
      event: "PowerSurge, Avishkar 2025",
      description:
        "Secured 3rd place individually among hundreds of competitors in algorithmic speed programming.",
      icon: FaMedal,
      color: "text-amber-600",
      bgBadge: "bg-amber-600/10 text-amber-300 border-amber-600/25",
      type: "Individual Rank",
    },
    {
      title: "Cleared SIH Internals 2026",
      event: "Smart India Hackathon Internal Round",
      description:
        "Selected and qualified through rigorous institute-level internal screening for Smart India Hackathon.",
      icon: HiStar,
      color: "text-indigo-400",
      bgBadge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/25",
      type: "National Track",
    },
    {
      title: "Top 10 Finish — HACK 18, MNNIT",
      event: "Annual 36-Hour Hackathon",
      description:
        "Selected as the only first-year team across the institute and achieved a proud Top 10 finish.",
      icon: FaAward,
      color: "text-emerald-400",
      bgBadge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25",
      type: "Only 1st-Year Team",
    },
    {
      title: "Open Source Contributor — GSSoC 2026",
      event: "GirlScript Summer of Code",
      description:
        "Actively contributing to open-source software, resolving GitHub issues, and collaborating across repositories.",
      icon: FaCode,
      color: "text-pink-400",
      bgBadge: "bg-pink-500/10 text-pink-300 border-pink-500/25",
      type: "Open Source",
    },
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono font-semibold mb-4">
            <HiSparkles className="text-sm" />
            <span>HONORS & RECOGNITION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Achievements & <span className="gradient-text-amber">Competitive Profile</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            Proven consistency in algorithmic problem solving, hackathons, and technical competitions.
          </p>
        </div>

        {/* Competitive Programming Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contestProfiles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <a
                key={idx}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl bg-[#131625] border border-white/10 hover:border-amber-500/40 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(245,158,11,0.12)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl bg-white/5 border border-white/10"
                        style={{ color: p.color }}
                      >
                        <Icon />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-base group-hover:text-amber-300 transition-colors">
                          {p.platform}
                        </h4>
                        <span className="text-[11px] font-mono text-gray-400">
                          {p.badge}
                        </span>
                      </div>
                    </div>
                    <FaArrowUpRightFromSquare className="text-xs text-gray-400 group-hover:text-white transition-colors" />
                  </div>

                  <div className="my-4 p-3 rounded-xl bg-black/30 border border-white/5 flex items-baseline justify-between">
                    <div>
                      <p className="text-2xl font-black text-white">{p.rating}</p>
                      <p className="text-[11px] font-mono text-gray-400">{p.ratingLabel}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-mono font-semibold text-amber-300">{p.stat}</p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed font-normal">
                    {p.highlight}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Hackathon & Event Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, idx) => {
            const Icon = award.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#121422]/80 border border-white/10 hover:border-white/20 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold border ${award.bgBadge}`}>
                      {award.type}
                    </span>
                    <div className={`text-xl ${award.color}`}>
                      <Icon />
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-white mb-1.5 leading-snug">
                    {award.title}
                  </h4>
                  <p className="text-xs font-mono text-indigo-400 mb-3 font-medium">
                    {award.event}
                  </p>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
