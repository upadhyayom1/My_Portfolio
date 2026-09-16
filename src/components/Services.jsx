import { useState } from "react";
import Services_card from "./Services_card";
import { FaGithub, FaFolderOpen, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

const Services = () => {
  const [showMore, setShowMore] = useState(false);

  const featuredProjects = [
    {
      title: "Nagar-Drishti",
      subtitle: "Intelligent Urban Traffic Analytics & Route Anomaly Platform",
      description:
        "Developed an intelligent urban traffic analytics platform for monitoring and analyzing vehicle movement, traffic congestion hotspots, and route anomalies.",
      bullets: [
        "Implemented vehicle trajectory analysis, route anomaly detection, and traffic hotspot identification.",
        "Engineered average speed analysis algorithms and multi-factor traffic forecasting models.",
        "Built resilient REST APIs with JWT-based authentication and integrated interactive visual dashboards for traffic insights.",
      ],
      tags: ["Next.js", "React", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Redis"],
      link: "https://github.com/upadhyayom1",
      projectName: "Nagar-Drishti",
      featured: true,
      badge: "Traffic Intelligence & Analytics",
    },
    {
      title: "JanSaarthi-AI",
      subtitle: "AI-Powered Government Schemes & Opportunity Matching Engine",
      description:
        "Developed an AI-powered platform for discovering and tracking relevant government schemes, scholarships, jobs, and internships tailored to user eligibility.",
      bullets: [
        "Implemented personalized opportunity matching, eligibility-based filtering, and deadline planning notifications.",
        "Engineered secure authentication, interactive applicant dashboards, and real-time scheme recommendation scoring.",
        "Built backend microservices and database schemas managing user profiles, eligibility matrices, and opportunity repositories.",
      ],
      tags: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
      link: "https://github.com/upadhyayom1/JanSaarthi-AI",
      projectName: "JanSaarthi-AI",
      featured: true,
      badge: "AI Opportunity Platform",
    },
  ];

  const otherProjects = [
    {
      title: "MNNIT Civic Issue Reporter",
      subtitle: "Community Problem Reporting & Tracking System",
      description:
        "Web platform enabling students and citizens to report campus and civic issues like damaged roads, streetlight failures, water leakage, and sanitation problems for faster resolution.",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      link: "https://github.com/upadhyayom1/MNNIT_CIVIC_ISSUE_REPORTER",
      projectName: "Civic Issue Reporter",
    },
    {
      title: "RepoXray",
      subtitle: "AI GitHub Repository Structure & Architecture Analyzer",
      description:
        "AI-assisted repository inspection tool that analyzes codebase structures, tech stacks, and dependency graphs to provide instant high-level architectural insights.",
      tags: ["React", "Vite", "Tailwind CSS", "REST API", "GitHub API"],
      link: "https://github.com/upadhyayom1/RepoXray",
      projectName: "RepoXray",
    },
    {
      title: "Campus-Sphere",
      subtitle: "Student Collaboration & Academic Resource Hub",
      description:
        "An all-in-one student collaboration platform for sharing academic materials, announcements, and campus community discussions.",
      tags: ["React", "Node.js", "Express.js", "MongoDB"],
      link: "https://github.com/upadhyayom1/Campus-Sphere",
      projectName: "Campus-Sphere",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-semibold mb-4">
            <HiSparkles className="text-sm" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Featured <span className="gradient-text-accent">Projects</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed">
            Real-world systems engineered with clean architectures, scalable database models, and modern user experiences.
          </p>
        </div>

        {/* Featured Projects Grid (from CV: Nagar-Drishti & JanSaarthi-AI) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, idx) => (
            <Services_card key={idx} {...project} />
          ))}
        </div>

        {/* Toggle Other Notable Projects */}
        <div className="flex flex-col items-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#141624] hover:bg-[#1c2033] border border-white/10 hover:border-indigo-500/30 text-sm font-semibold text-gray-300 hover:text-white transition-all shadow-md"
          >
            <FaFolderOpen className="text-indigo-400" />
            <span>{showMore ? "Hide Additional Projects" : "View More Notable Projects"}</span>
            {showMore ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
          </button>

          {showMore && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8 animate-fadeIn">
              {otherProjects.map((proj, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-[#111320] border border-white/10 p-6 flex flex-col justify-between hover:border-white/20 transition-all hover:-translate-y-1"
                >
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{proj.title}</h4>
                    <p className="text-xs font-mono text-indigo-400 mb-3">{proj.subtitle}</p>
                    <p className="text-xs text-gray-400 leading-relaxed mb-4">{proj.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {proj.tags.map((t, i) => (
                        <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300"
                  >
                    <FaGithub className="text-sm" />
                    <span>Explore Code →</span>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
