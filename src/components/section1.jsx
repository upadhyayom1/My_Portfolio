import React from "react";
import "./styles/section1.css";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import {
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiGeeksforgeeks,
} from "react-icons/si";

const section1 = () => {
  return (
    <section>
      <div className="hero-section flex mt-10 flex-row">
        <div className="left-content">
          <h4>I am Om Upadhyay</h4>
          <div className="main-heading">
            <h1>Front-End</h1>
            <h1>Developer &</h1>
            <h1>Designer</h1>
          </div>

          <p className="text-base">
            Currently, I am focusing on React, JavaScript, Data Structures &
            Algorithms, and creating real-world projects that help me grow as a
            developer. I enjoy turning ideas into interactive digital
            experiences and am always eager to learn new technologies and best
            practices.
          </p>
          <button className="px-6 py-3 rounded-xl bg-[#1F1F1F] border border-white/10 text-white font-medium backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_8px_25px_rgba(255,255,255,0.08)]">
            Download CV
          </button>

          <div className="social-icons ">
            <a
              href="https://github.com/upadhyayom1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/om-upadhyay-772787371/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://leetcode.com/upadhyayom1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLeetcode />
            </a>

            <a
              href="https://codeforces.com/profile/upadhyayom1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiCodeforces />
            </a>
          </div>
        </div>

        <div className="right-content">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQFc4dA_57rLcA/profile-displayphoto-crop_800_800/B56ZvSQ.L8HcAI-/0/1768759223976?e=1781740800&v=beta&t=d-1mh4OTjZrzEvf_QF7abr7nFWE7Q-pKOn66FHp1jRo"
            className="rounded-"
            alt="Profile"
          />
        </div>
      </div>
    </section>
  );
};

export default section1;
