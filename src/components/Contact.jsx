import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaLinkedin,
  FaGithub,
  FaCopy,
  FaCheck,
  FaDownload,
  FaPaperPlane,
} from "react-icons/fa6";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { HiSparkles } from "react-icons/hi2";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("upadhyayom234@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-semibold mb-4">
            <HiSparkles className="text-sm" />
            <span>CONNECT WITH ME</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Let's <span className="gradient-text-accent">Collaborate</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
            Interested in hiring, collaborating on an impactful project, or discussing full-stack development? Feel free to reach out.
          </p>
        </div>

        {/* Contact Container */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#121422]/90 border border-white/10 p-8 sm:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          {/* Subtle ambient light */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
            {/* Left Contact Info */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
                <p className="text-sm text-gray-300 leading-relaxed mb-8">
                  I'm currently based in Prayagraj at MNNIT Allahabad, actively exploring internships, software engineering roles, and open-source opportunities.
                </p>

                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center flex-shrink-0">
                      <FaEnvelope />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-mono text-gray-400">Email Address</p>
                      <a
                        href="mailto:upadhyayom234@gmail.com"
                        className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors truncate block"
                      >
                        upadhyayom234@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center flex-shrink-0">
                      <FaPhone />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-gray-400">Phone</p>
                      <a
                        href="tel:+919934814326"
                        className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                      >
                        +91 9934814326
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-pink-500/15 text-pink-400 flex items-center justify-center flex-shrink-0">
                      <FaLocationDot />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-gray-400">Location</p>
                      <p className="text-sm font-semibold text-white">
                        MNNIT Allahabad, Prayagraj, UP, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profiles row */}
              <div className="pt-8 mt-8 border-t border-white/10 flex items-center gap-3">
                <a
                  href="https://github.com/upadhyayom1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/om-upadhyay-772787371/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-[#0a66c2] hover:bg-[#0a66c2]/15 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://leetcode.com/upadhyayom1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-[#ffa116] hover:bg-[#ffa116]/15 flex items-center justify-center transition-colors"
                  aria-label="LeetCode"
                >
                  <SiLeetcode />
                </a>
                <a
                  href="https://codeforces.com/profile/upadhyayom1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-[#318ce7] hover:bg-[#318ce7]/15 flex items-center justify-center transition-colors"
                  aria-label="Codeforces"
                >
                  <SiCodeforces />
                </a>
              </div>
            </div>

            {/* Right Interactive Quick Actions */}
            <div className="flex flex-col justify-between bg-[#0e101a] border border-white/10 rounded-2xl p-6 sm:p-8">
              <div>
                <h4 className="text-lg font-bold text-white mb-2">Quick Action Bar</h4>
                <p className="text-xs text-gray-400 mb-6">
                  Fastest way to get in touch or save my credentials.
                </p>

                <div className="space-y-3.5">
                  {/* Copy Email Button with Toast */}
                  <button
                    onClick={handleCopyEmail}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-indigo-500/40 text-sm font-semibold text-white transition-all"
                  >
                    <span className="flex items-center gap-2.5">
                      {copied ? (
                        <FaCheck className="text-emerald-400 text-base" />
                      ) : (
                        <FaCopy className="text-indigo-400 text-base" />
                      )}
                      <span>{copied ? "Email Copied to Clipboard!" : "Copy Email Address"}</span>
                    </span>
                    <span className="text-[11px] font-mono text-gray-400">
                      {copied ? "Done" : "Click"}
                    </span>
                  </button>

                  {/* Direct Send Mail */}
                  <a
                    href="mailto:upadhyayom234@gmail.com?subject=Hello%20Om%20-%20Opportunity%20Discussion"
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm font-semibold text-white transition-all shadow-md shadow-indigo-600/30"
                  >
                    <span className="flex items-center gap-2.5">
                      <FaPaperPlane className="text-white text-sm" />
                      <span>Send Direct Email</span>
                    </span>
                    <span className="text-[11px] font-mono text-indigo-200">Open App →</span>
                  </a>

                  {/* Direct Download CV */}
                  <a
                    href="/Om_Upadhyay_Resume.pdf"
                    download="Om_Upadhyay_Resume.pdf"
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-semibold text-gray-200 hover:text-white transition-all"
                  >
                    <span className="flex items-center gap-2.5">
                      <FaDownload className="text-emerald-400 text-sm" />
                      <span>Download Full Resume (PDF)</span>
                    </span>
                    <span className="text-[11px] font-mono text-gray-400">PDF</span>
                  </a>
                </div>
              </div>

              {/* Status footer inside card */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-gray-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Response time: Usually within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
