// import about from "../assets/aboutme2.svg";
// import { AiOutlineDownload } from "react-icons/ai";
// import circle from "../assets/circle-scatter-haikei (3).svg";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const expi = [
    {
      title: "M.S. Computer Science",
      org: "New York University",
      time: "2023 — 2025",
    },
    {
      title: "B.E Information Technology",
      org: "Savitribai Phule Pune University",
      time: "2019 — 2023",
    },
  ];

  return (
    <div
      id="about"
      className="w-full bg-neutral-50 text-black"
    >
      {/* <img src={circle} alt="..." className="max-w-full h-auto absolute"></img> */}
      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-4xl mx-auto grid md:grid-cols-[2fr_1fr] gap-20 px-6 py-16">
          <div>
            <h2 className="text-3xl font-semibold text-black mb-6">About Me</h2>
            <p className="text-gray-dark text-base leading-relaxed mb-4">
              I’m Avadhoot Kulkarni, a Computer Science grad student at NYU with a passion for building ML-powered systems. I enjoy combining research and real-world engineering.
            </p>
            <p className="text-gray-dark text-base leading-relaxed mb-6">
              I work across the AI stack, from building scalable LLM workflows to delivering clean, production-ready code. I care about performance, clarity, and real impact.
            </p>
            <a href="#about" className="inline-flex items-center text-sm text-primary hover:underline font-medium">
              More about me
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black mb-4">Education</h3>
            {expi.map((item, idx) => (
              <div className="mb-4" key={idx}>
                <p className="font-semibold text-black">{item.title}</p>
                <p className="text-gray-dark text-sm">{item.org}</p>
                <p className="text-gray-dark text-sm">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="max-w-5xl mx-auto border-t border-gray-200" />
    </div>
  );
};

export default About;
