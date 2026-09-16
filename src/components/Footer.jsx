import { FaArrowUp, FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#08090e] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Left */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-extrabold text-lg text-white tracking-tight">
              Om Upadhyay
            </span>
            <p className="text-xs text-gray-400 font-mono mt-1">
              B.Tech Computer Science & Engineering • MNNIT Allahabad
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-gray-400">
            <a href="#home" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#achievements" className="hover:text-white transition-colors">
              Achievements
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
            <a
              href="/Om_Upadhyay_Resume.pdf"
              download="Om_Upadhyay_Resume.pdf"
              className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
            >
              Resume (PDF)
            </a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <a
                href="https://github.com/upadhyayom1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white p-2 rounded-lg bg-white/5 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-sm" />
              </a>
              <a
                href="https://www.linkedin.com/in/om-upadhyay-772787371/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0a66c2] p-2 rounded-lg bg-white/5 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-sm" />
              </a>
              <a
                href="https://leetcode.com/upadhyayom1/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffa116] p-2 rounded-lg bg-white/5 transition-colors"
                aria-label="LeetCode"
              >
                <SiLeetcode className="text-sm" />
              </a>
              <a
                href="https://codeforces.com/profile/upadhyayom1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#318ce7] p-2 rounded-lg bg-white/5 transition-colors"
                aria-label="Codeforces"
              >
                <SiCodeforces className="text-sm" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-indigo-600 border border-white/10 hover:border-indigo-500 text-gray-300 hover:text-white transition-all shadow-sm group"
              aria-label="Back to top"
              title="Back to top"
            >
              <FaArrowUp className="text-xs group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs font-mono text-gray-400">
          © {new Date().getFullYear()} Om Upadhyay. Built with React, Vite & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
