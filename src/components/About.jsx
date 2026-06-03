import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold">About Me</h1>

      <p className="text-lg text-center text-gray-400 max-w-4xl mt-4">
        I'm Om Upadhyay, a first-year undergraduate student passionate about
        web development and problem solving. I enjoy building responsive web
        applications, learning modern technologies, and improving my skills
        through real-world projects and coding challenges.
      </p>

      <h2 className="text-2xl font-bold mt-10">My Approach</h2>

      

      <div className="cards grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]  gap-5 ml-20 mr-20 mt-10">
        <div
          className="card bg-[#161616] p-5 rounded-lg border border-[#2d2d2d]
          shadow-md transition-all duration-300 hover:-translate-y-2
          hover:border-white/20 hover:shadow-[0_12px_40px_rgba(255,255,255,0.08)]"
        >
          <h3 className="text-xl font-bold mb-2">Understand & Learn</h3>
          <p className="text-gray-400">
            I focus on understanding concepts deeply before implementation,
            building a strong foundation in programming and web development.
          </p>
        </div>

        <div
          className="card bg-[#161616] p-5 rounded-lg border border-[#2d2d2d]
          shadow-md transition-all duration-300 hover:-translate-y-2
          hover:border-white/20 hover:shadow-[0_12px_40px_rgba(255,255,255,0.08)]"
        >
          <h3 className="text-xl font-bold mb-2">Build Projects</h3>
          <p className="text-gray-400">
            I enjoy turning ideas into real applications such as Civic Issue
            Reporter and RepoXray while continuously learning new technologies.
          </p>
        </div>

        <div
          className="card bg-[#161616] p-5 rounded-lg border border-[#2d2d2d]
          shadow-md transition-all duration-300 hover:-translate-y-2
          hover:border-white/20 hover:shadow-[0_12px_40px_rgba(255,255,255,0.08)]"
        >
          <h3 className="text-xl font-bold mb-2">Solve Problems</h3>
          <p className="text-gray-400">
            I regularly practice Data Structures and Algorithms to improve
            logical thinking and prepare for technical interviews.
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-around gap-16 mt-10">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">01+</h2>
          <p className="text-gray-400">Years Learning</p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">02+</h2>
          <p className="text-gray-400">Projects Built</p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">200+</h2>
          <p className="text-gray-400">DSA Problems</p>
        </div>
      </div>
    </div>
  );
};

export default About;