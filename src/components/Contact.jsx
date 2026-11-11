import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { personalInfo } from "../data/portfolioData";
import { Copy, Check, ArrowUpRight, Phone, MapPin, FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // clipboard access fallback
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-32 border-t border-[#E5E7EB] bg-[#FFFFFF]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeading
          number="06 / CONTACT"
          title="Have something interesting in mind?"
          subtitle="I'm always interested in thoughtful projects, engineering opportunities, and conversations about building useful software."
        />

        {/* Oversized Expressive Email Element */}
        <div className="my-12 py-10 px-8 sm:px-12 rounded-2xl bg-[#F7F7F5] border border-[#E5E7EB] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#6B6D72] block mb-2">
              Primary Communication
            </span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold text-[#0E0F11] hover:text-[#17804A] transition-colors break-all"
            >
              {personalInfo.email}
            </a>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 h-11 px-5 rounded-[6px] bg-[#FFFFFF] border border-[#D7D9DE] text-[#0E0F11] font-ui text-xs font-semibold hover:border-[#0E0F11] hover:bg-[#FAFAF8] transition-all shadow-sm"
              type="button"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#17804A]" />
                  <span>Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#6B6D72]" />
                  <span>Copy Address</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-center w-11 h-11 rounded-[6px] bg-[#0E0F11] text-[#FAFAF8] hover:bg-[#232529] transition-colors"
              aria-label="Send email"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Direct Channels & Social Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {/* Phone & Direct */}
          <div className="p-6 rounded-xl bg-[#FAFAF8] border border-[#E5E7EB] space-y-4">
            <span className="font-mono text-xs text-[#6B6D72] uppercase tracking-wider block">
              Direct Contact
            </span>
            <div className="space-y-3 font-ui text-sm">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#6B6D72]" />
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                  className="font-mono font-medium text-[#0E0F11] hover:text-[#17804A]"
                >
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#6B6D72]" />
                <span className="text-[#0E0F11]">
                  MNNIT Allahabad, Prayagraj, India
                </span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="p-6 rounded-xl bg-[#FAFAF8] border border-[#E5E7EB] space-y-4 md:col-span-2">
            <span className="font-mono text-xs text-[#6B6D72] uppercase tracking-wider block">
              Verified Profiles &amp; Repositories
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-[#FFFFFF] border border-[#E5E7EB] hover:border-[#0E0F11] transition-colors flex items-center justify-between font-ui text-xs font-medium text-[#0E0F11]"
              >
                <div className="flex items-center gap-2">
                  <FaGithub className="w-4 h-4" />
                  <span>GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#6B6D72]" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-[#FFFFFF] border border-[#E5E7EB] hover:border-[#0E0F11] transition-colors flex items-center justify-between font-ui text-xs font-medium text-[#0E0F11]"
              >
                <div className="flex items-center gap-2">
                  <FaLinkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#6B6D72]" />
              </a>

              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-[#FFFFFF] border border-[#E5E7EB] hover:border-[#0E0F11] transition-colors flex items-center justify-between font-ui text-xs font-medium text-[#0E0F11]"
              >
                <div className="flex items-center gap-2">
                  <SiLeetcode className="w-4 h-4" />
                  <span>LeetCode</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#6B6D72]" />
              </a>

              <a
                href={personalInfo.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-[#FFFFFF] border border-[#E5E7EB] hover:border-[#0E0F11] transition-colors flex items-center justify-between font-ui text-xs font-medium text-[#0E0F11]"
              >
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>Resume</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#6B6D72]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
