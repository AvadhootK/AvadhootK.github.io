// import { motion } from "framer-motion";
import work1 from "../assets/projects/project1.png";
import work2 from "../assets/projects/project2.png";
import work3 from "../assets/projects/project3.png";
import work5 from "../assets/projects/project5.png";
import work6 from "../assets/projects/project6.png";

import "tw-elements";
import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// const GitHubMark = ({ className = "w-4 h-4" }) => (
//   <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
//     <path
//       fillRule="evenodd"
//       d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
//       clipRule="evenodd"
//     />
//   </svg>
// );

const CHESS_TITLE = "Automated Chess Board Recognition and Interaction";
const CHESS_VIDEO_ID = "cFyKQfR4T-Q";

const projects = [
  {
    title: "LLM Efficient Tuning",
    desc: "Optimizing LLMs via PEFT, intrinsic dimension analysis, information geometry and truthfulness evaluation.",
    img: work1,
    link: "https://github.com/AvadhootK/LLM-Efficient-Tuning",
  },
  {
    title: "RAG Based Auto-Grading System",
    desc: "An AI-powered grading system that evaluates data science notebooks using retrieval-augmented generation and semantic vector search, applying rubric-based scoring with transformer embeddings and enabling instructor review through an interactive dashboard.",
    img: work2,
    link: "https://github.com/AvadhootK/RAG-auto-grading-system",
  },
  {
    title: CHESS_TITLE,
    desc: "A real-time computer vision system that maps arbitrary camera views of a structured environment into a normalized grid using homography and feature detection, and detects temporal state changes via frame differencing and morphological filtering to reconstruct actions with sub-second latency.",
    img: work2,
    link: "https://github.com/AvadhootK/chessAutomation",
  },
  {
    title: "Sequential Taste Movie Recommender",
    desc: "A full-stack, ML-driven movie recommendation system that models evolving user taste using transformer-based embeddings, powers personalized feeds and semantic search, and serves real-time recommendations through a multi-service architecture with vector similarity search and REST APIs.",
    img: work3,
    link: "https://github.com/AvadhootK/Sequential-Taste-Movie-Recommender",
  },
  {
    title: "Trending YouTube Video Engagement",
    desc: "A data analysis and visualization project that examines global YouTube trending video patterns using multi-country engagement data, uncovering how content categories, regions, and temporal dynamics influence views, likes, and user interaction.",
    img: work5,
    link: "https://github.com/AvadhootK/YouTube-Trending-Global-Analysis",
  },
  {
    title: "Machine Learning Projects",
    desc: "A collection of end-to-end machine learning projects spanning classification, regression, computer vision, and NLP, demonstrating applied modeling, data preprocessing, and evaluation across diverse real-world datasets using modern ML frameworks.",
    img: work6,
    link: "https://github.com/AvadhootK/Machine-Learning",
  },
];

const Portfolio = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 600, once: true, easing: "ease-out" });
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  }, []);

  return (
    <div id="portfolio" className="w-full bg-neutral-50 text-black py-20">
      <div className="max-w-5xl mx-auto px-6 mb-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
          <div>
            <h2 className="text-3xl font-semibold">Projects</h2>
            <p className="text-gray-dark text-sm mt-2">
              An overview of practical work reflecting my technical interests.
            </p>
          </div>
          <a
            href="https://github.com/AvadhootK"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-black hover:underline inline-flex items-center gap-1.5 shrink-0"
            aria-label="View all projects on GitHub (opens in new tab)"
          >
            {/* <GitHubMark /> */}
            <span>All projects on GitHub</span>
            <svg
              className="w-4 h-4 shrink-0 opacity-70"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-6 mt-16">
        {projects.map((proj, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 80}
            className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white hover:bg-gray-50 transition-transform transform hover:-translate-y-1 duration-300 max-w-lg w-full mx-auto"
          >
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">{proj.title}</h3>
              <p className="text-sm text-gray-dark">{proj.desc}</p>
            </div>
            {proj.title === CHESS_TITLE ? (
              <iframe
                ref={videoRef}
                src={
                  isVideoVisible
                    ? `https://www.youtube.com/embed/${CHESS_VIDEO_ID}?autoplay=1&mute=1`
                    : `https://www.youtube.com/embed/${CHESS_VIDEO_ID}`
                }
                title={proj.title}
                className="w-full h-64 border-0 mb-6 rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img src={proj.img} alt={proj.title} className="rounded-lg mb-6 h-64 w-full object-cover" />
            )}
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-black hover:underline inline-flex items-center gap-1.5"
              aria-label={`View ${proj.title} on GitHub (opens in new tab)`}
            >
              {/* <GitHubMark /> */}
              <span>View on GitHub</span>
              <svg
                className="w-4 h-4 shrink-0 opacity-70"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
