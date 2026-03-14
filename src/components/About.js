// import about from "../assets/aboutme2.svg";
// import { AiOutlineDownload } from "react-icons/ai";
// import circle from "../assets/circle-scatter-haikei (3).svg";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true, easing: 'ease-out' });
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
          <div data-aos="fade-up">
            <h2 className="text-3xl font-semibold text-black mb-6">About Me</h2>
            <p className="text-gray-dark text-base leading-relaxed mb-4">
              I’m Avadhoot Kulkarni, a recent Computer Science Master’s graduate from New York University. I enjoy building intelligent systems that people actually use. My work started in machine learning research, particularly around large language models, where I explored ways to make them more efficient and practical. Over time, I realized I was just as interested in what happens after the research—turning those ideas into real applications.
            </p>
            <p className="text-gray-dark text-base leading-relaxed mb-4">
              That led me to work across the stack, building end-to-end systems that combine ML models with reliable backend services and intuitive interfaces. I enjoy the process of taking something from an idea or experiment to a working product: designing the pipeline, integrating the models, building the APIs and UI, and iterating based on real usage.
            </p>
            <p className="text-gray-dark text-base leading-relaxed mb-6">
              I tend to do my best work in fast-moving environments where problems are messy and not fully defined. I like having ownership, building quickly, and continuously improving systems so they become more useful and dependable over time.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
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
