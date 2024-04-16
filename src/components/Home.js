import React, { useEffect, useRef } from "react";
// import self from "../assets/0_self.jpg";
import self from "../assets/image.jpg";
// import self_blur from "../assets/self_blur.jpg";
import { BiRightArrow } from "react-icons/bi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";

const Home = () => {
  useEffect(() => {
    AOS.init();
    new Typed(el.current, {
      strings: [
        "Machine Learning\\Data Science enthusiast.",
        "Full Stack Developer.",
      ],
      startDelay: 300,
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });
  }, []);
  const el = useRef(null);
  return (
    <div
      id="home"
      className="bg-black w-full h-screen relative overflow-hidden pb-20 md:pb-0 md:pt-0 pt-20"
    >
      {/* <div className="custom-shape-divider-top-1666372671">
        <div className="custom-shape-divider-bottom-1666373256">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div> */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-coljustify-center h-full">
        <div className="max-width-[1000px] w-full grid md:grid-cols-2 justify-center items-center">
          <div
            data-aos="slide-left"
            data-aos-delay="1200"
            className="absolute h-full md:w-1/3 w-8/12 top-0 right-0 gradient-bg bottom-0"
          >
            <h1 className="rotate-90 absolute top-[35%] md:top-[47%] md:right-[-20%] right-[-40%] text-[#EAF2FA] text-3xl md:text-5xl font-extrabold">
              <span className="text-white">Avadhoot&nbsp; Kulkarni</span>
            </h1>
          </div>
          <div className="z-10 order-last md:order-first">
            <p
              className="text-white text-2xl font-medium"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Hello,
            </p>
            <h1
              className="text-4xl font-bold text-white my-3"
              data-aos="fade-down"
              data-aos-delay={300}
              data-aos-duration="1000"
            >
              I'm Avadhoot Kulkarni
            </h1>
            <h2
              className="text-green text-3xl"
              data-aos="fade-down"
              data-aos-delay={500}
              data-aos-duration="1000"
            >
              <span ref={el}></span>
            </h2>
            <div
              data-aos="fade-up"
              data-aos-delay={300}
              data-aos-duration="1000"
            >
              <a
                className="text-black bg-green group w-40 mt-14 px-6 py-3 my-2 flex items-center gap-2 border-2 justify-center 
                border-black
                hover:bg-white
                hover:border-black
                hover:text-black"
                href="#about"
                style={{ borderRadius: "0.375rem 0.375rem 1.5rem" }}
              >
                View Work
                <BiRightArrow size={17} />
              </a>
            </div>
          </div>
          <div
            className="pt-10 md:pt-0 z-20"
            data-aos="fade-up"
            data-aos-delay={300}
            data-aos-duration="1000"
          >
            <LazyLoadImage
              src={self}
              alt="..."
              // placeholderSrc={self_blur}
              // effect="blur"
              loading="lazy"
              className="rounded-full md:w-5/6 w-3/5 mx-auto"
            />
            {/* <img
              src={self}
              alt="..."
              className="rounded-full md:w-5/6 w-3/5 mx-auto"
            ></img> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
