// import { motion } from "framer-motion";
import work1 from "../assets/projects/project1.png";
import work2 from "../assets/projects/project2.png";
// import work3 from "../assets/newimgs/project3.jpg";
import work4 from "../assets/projects/project4.jpeg";
import work5 from "../assets/projects/project5.png";
import work6 from "../assets/projects/project6.png";

// import sketch1 from "../assets/sketches/0_sketch1.jpg";
// import sketch2 from "../assets/sketches/1_sketch2.jpg";
// import sketch3 from "../assets/sketches/2_sketch3.jpg";
// import sketch4 from "../assets/sketches/3_sketch4.jpg";
// import sketch5 from "../assets/sketches/4_sketch5.jpg";
// import sketch6 from "../assets/sketches/5_sketch6.jpg";
// import sketch1_blur from "../assets/sketches/sketch1_blur.jpg";
// import sketch2_blur from "../assets/sketches/sketch2_blur.jpg";
// import sketch3_blur from "../assets/sketches/sketch3_blur.jpg";
// import sketch4_blur from "../assets/sketches/sketch4_blur.jpg";
// import sketch5_blur from "../assets/sketches/sketch5_blur.jpg";
// import sketch6_blur from "../assets/sketches/sketch6_blur.jpg";
import "tw-elements";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true);
        }
      },
      { threshold: 0.5 } // Video plays when 50% of it is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: "LLM Efficient Tuning",
      desc: "Optimizing LLMs via PEFT, intrinsic dimension analysis, info. geometry and truthfulness evaluation.",
      img: work1,
      link: "https://github.com/AvadhootK/LLM-Efficient-Tuning"
    },
    {
      title: "RAG Based Auto-Grading System",
      desc: "An LLM-powered auto-grading system for Jupyter notebooks using Retrieval-Augmented Generation (RAG), Chain-of-Thought prompting, and semantic rubric alignment.",
      img: work2,
      link: "https://github.com/AvadhootK/RAG-auto-grading-system"
    },
    {
      title: "Automated Chess Board Recognition and Interaction",
      desc: "A system that identifies and classifies chess pieces from a top-down view of the chessboard.",
      img: work2,
      link: "https://github.com/AvadhootK/chessAutomation"
    },
    {
      title: "Causal Inference of Hours Worked on Stress Levels",
      desc: "Investigating causal relationship between hours worked per week and stress levels",
      img: work4,
      link: "https://github.com/AvadhootK/Causal-Inference-Work-Stress"
    },
    {
      title: "Trending YouTube Video Engagement",
      desc: "Exploring and visualizating global trends in YouTube video engagement",
      img: work5,
      link: "https://github.com/AvadhootK/YouTube-Trending-Global-Analysis"
    },
    {
      title: "Machine Learning Projects",
      desc: "Collection of ML projects covering regression, classification, clustering, and real-world applications.",
      img: work6,
      link: "https://github.com/AvadhootK/Machine-Learning"
    },
    // {
    //   title: "Sketch Classifier",
    //   desc: "CNN-based image classifier for pencil sketch recognition.",
    //   img: work6,
    //   link: "https://github.com/AvadhootK"
    // }
  ];

  return (
    <div
      id="portfolio"
      className="w-full bg-neutral-50 text-black py-20"
    >
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-semibold">Projects</h2>
            <p className="text-gray-dark text-sm mt-2">An overview of practical work reflecting my technical interests.</p>
          </div>
          <a href="https://github.com/AvadhootK" target="_blank" className="text-sm font-medium text-black hover:underline inline-flex items-center gap-1">
            All projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
      {/* <hr className="max-w-6xl mx-auto mt-20 border-t border-gray-200" /> */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 px-6 mt-16">
        {projects.map((proj, i) => (
          <div key={i} className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white hover:bg-gray-50 transition-transform transform hover:-translate-y-1 duration-300 max-w-md w-full mx-auto">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">{proj.title}</h3>
              <p className="text-sm text-gray-dark">{proj.desc}</p>
            </div>
            {/* <img src={proj.img} alt={proj.title} className="rounded-lg mb-4 w-full object-cover" /> */}
            {proj.title === "Automated Chess Board Recognition and Interaction" ? (
              <iframe 
                ref={videoRef}
                src={isVideoVisible ? "https://www.youtube.com/embed/cFyKQfR4T-Q?autoplay=1&mute=1" : "https://www.youtube.com/embed/cFyKQfR4T-Q"}
                title={proj.title}
                className="w-full h-64 border-0 mb-6 rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img src={proj.img} alt={proj.title} className="rounded-lg mb-6 h-64 w-full object-cover" />
            )}
            <a href={proj.link} target="_blank" rel="noreferrer" className="text-sm font-medium text-black hover:underline inline-flex items-center gap-1">
              See project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        ))}
      </div>
      {/* <hr className="max-w-6xl mx-auto border-t border-gray-200" /> */}
    </div>
  );
};

export default Portfolio;