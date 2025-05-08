// import { motion } from "framer-motion";
import work1 from "../assets/newimgs/project1.jpeg";
import work2 from "../assets/newimgs/project2.jpg";
import work3 from "../assets/newimgs/project3.jpg";
import work4 from "../assets/newimgs/project4.jpg";
import work5 from "../assets/newimgs/project5.jpg";
import work6 from "../assets/newimgs/project6.jpg";

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
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const projects = [
    {
      title: "LLM Efficient Tuning",
      desc: "Optimizing LLMs via PEFT, intrinsic dimension analysis, info. geometry and truthfulness evaluation.",
      img: work1,
      link: "https://github.com/AvadhootK/LLM-Efficient-Tuning"
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
      img: work3,
      link: "https://github.com/AvadhootK/Causal-Inference-Work-Stress"
    },
    {
      title: "Trending YouTube Video Engagement",
      desc: "Exploring and visualizating global trends in YouTube video engagement",
      img: work4,
      link: "https://github.com/AvadhootK/YouTube-Trending-Global-Analysis"
    },
    {
      title: "Advanced Regression House Prices",
      desc: "Predicting house prices to estimate property's selling price based on various features.",
      img: work5,
      link: "https://github.com/AvadhootK/Advanced-Regression-House-Prices"
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
            <div className="mb-4">
              <h3 className="text-lg font-semibold">{proj.title}</h3>
              <p className="text-sm text-gray-dark mt-1">{proj.desc}</p>
            </div>
            <img src={proj.img} alt={proj.title} className="rounded-lg mb-4 w-full object-cover" />
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
