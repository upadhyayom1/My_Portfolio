import React from "react";

const Services_card = (props) => {
  return (
    <div
      className="card
    flex flex-col
    justify-between
    w-87.5
    h-100
    p-6
    rounded-2xl
    bg-[#161616]
    border border-[#2d2d2d]
    shadow-md
    transition-all duration-300
    hover:-translate-y-2
    hover:border-white/20
    hover:shadow-[0_12px_40px_rgba(255,255,255,0.08)]
"
    >
      <div>
        <h1 className="text-2xl font-bold mb-4">{props.title}</h1>

        <p className="text-gray-400 leading-7">{props.description}</p>
      </div>

      <div>
        <hr className="border-[#2d2d2d] mb-4" />

        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <button
            className="
                text-white
                font-medium
                transition-all
                duration-300
                hover:translate-x-2
                "
          >
            {props.projectName} →
          </button>
        </a>
      </div>
    </div>
  );
};

export default Services_card;
