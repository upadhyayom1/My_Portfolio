import Skills_Card from "./Skills_Card";
import {
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiRedis,
  SiPrisma,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiRender,
  SiVite,
} from "react-icons/si";
import { FaCode, FaServer, FaDatabase, FaBrain, FaWrench, FaUsers } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: FaCode,
      items: [
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss, color: "#1572B6" },
      ],
    },
    {
      category: "Libraries & Frameworks",
      icon: FaServer,
      items: [
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#EEEEEE" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ],
    },
    {
      category: "Databases & Backend",
      icon: FaDatabase,
      items: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Redis", icon: SiRedis, color: "#DC382D" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "Prisma ORM", icon: SiPrisma, color: "#2D3748" },
      ],
    },
    {
      category: "Core CS & Problem Solving",
      icon: FaBrain,
      items: [
        { name: "Data Structures & Algorithms", icon: FaCode, color: "#6366F1" },
        { name: "Object-Oriented Programming (OOP)", icon: FaCode, color: "#A855F7" },
        { name: "Competitive Programming", icon: FaCode, color: "#EC4899" },
        { name: "System Design Fundamentals", icon: FaServer, color: "#38BDF8" },
      ],
    },
    {
      category: "Developer Tools & Cloud",
      icon: FaWrench,
      items: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
        { name: "Render", icon: SiRender, color: "#46E3B7" },
        { name: "Vite", icon: SiVite, color: "#646CFF" },
      ],
    },
    {
      category: "Professional & Soft Skills",
      icon: FaUsers,
      items: [
        { name: "Team Collaboration", icon: FaUsers, color: "#10B981" },
        { name: "Leadership & Mentoring", icon: FaUsers, color: "#3B82F6" },
        { name: "Time Management", icon: FaUsers, color: "#F59E0B" },
        { name: "Clear Communication", icon: FaUsers, color: "#8B5CF6" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-semibold mb-4">
            <HiSparkles className="text-sm" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Skills & <span className="gradient-text-accent">Technologies</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            Languages, frameworks, databases, and core concepts I use to engineer resilient full-stack systems.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <Skills_Card
              key={idx}
              category={category.category}
              items={category.items}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
