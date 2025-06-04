import React, { useEffect } from "react";
// import self from "../assets/0_self.jpg";
import self from "../assets/image.jpg";
// import self_blur from "../assets/self_blur.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="home"
      className="bg-neutral-50 w-full relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center md:items-center md:justify-center text-left px-6 pt-32 pb-24 space-y-10 md:space-y-0 md:space-x-16">
        <div className="flex-shrink-0">
          <LazyLoadImage
            src={self}
            alt="Avadhoot Kulkarni"
            loading="lazy"
            className="rounded-full w-48 h-48 object-cover"
          />
        </div>
        <div className="text-left">
          <h1 className="text-4xl font-bold text-black mb-4 leading-tight">
            Hello, I am Avadhoot.<br /><span className="text-2xl">CS @ NYU</span>
          </h1>
          <p className="text-gray-dark text-base mb-6 max-w-xl">
            I design and build intelligent systems that transform data into action, blending research and engineering to solve real-world problems.
          </p>
          <a href="#contact" className="inline-flex items-center text-sm text-primary hover:underline font-medium">
            Contact me
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
      <hr className="max-w-5xl mx-auto border-t border-gray-200" />
    </div>
  );
};

export default Home;
