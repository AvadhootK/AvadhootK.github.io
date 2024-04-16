import { motion } from "framer-motion";
import work1 from "../assets/work/workimg1.jpg";
import work2 from "../assets/work/workimg2.jpg";
import work3 from "../assets/work/workimg3.jpg";
import work4 from "../assets/work/workimg4.jpg";
import work5 from "../assets/work/workimg5.jpg";
import work6 from "../assets/work/workimg6.jpg";
import sketch1 from "../assets/sketches/0_sketch1.jpg";
import sketch2 from "../assets/sketches/1_sketch2.jpg";
import sketch3 from "../assets/sketches/2_sketch3.jpg";
import sketch4 from "../assets/sketches/3_sketch4.jpg";
import sketch5 from "../assets/sketches/4_sketch5.jpg";
import sketch6 from "../assets/sketches/5_sketch6.jpg";
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
  return (
    <div
      id="portfolio"
      className=" w-full pb-20 pt-[80px] text-white bg-black overflow-hidden"
    >
      <div className="mx-auto py-4 px-4 md:px-20 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <div data-aos="fade-down" data-aos-duration="1000">
            {" "}
            <p className="text-4xl font-medium text-green text-center">Projects</p>
            <hr className="bg-green w-20 h-0.5 border-none mt-1 mx-auto"></hr>
          </div>

          <div
            className="grid sm:grid-col-2 md:grid-cols-2 lg:grid-cols-3 gap-16 p-14"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay={300}
          >
            <motion.div
              style={{ backgroundImage: `url(${work2})`, loading: "lazy" }}
              className=" group container rounded-md flex justify-center items-center mx-auto content-div"
              whileHover={{ scale: 1.1 }}
            >
              {/**Hover effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-lg font-semibold text-white tracking-wider">
                  Advanced Regression House Prices
                </span>
                <div className="pt-2 text-center">
                  {/* <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                      Demo
                    </button>
                  </a> */}
                  <a
                    href="https://github.com/AvadhootK/Advanced-Regression-House-Prices"
                    target="_blank"
                    rel="noreferrer"
                  >
                <button
                className="text-black bg-green group px-3 py-3 my-2 flex items-center gap-2 border-black"
                style={{ borderRadius: "0.375rem 0.375rem 1.5rem" }}
              >
                 View Project
              </button>

                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              style={{ backgroundImage: `url(${work1})`, loading: "lazy" }}
              className=" group container rounded-md flex justify-center items-center mx-auto content-div"
              whileHover={{ scale: 1.1 }}
            >
              {/**Hover effects */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-lg font-semibold text-white tracking-wider">
                  NLP Chatbot
                </span>
                <div className="pt-2 text-center">
                  {/* <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                      Demo
                    </button>
                  </a> */}
                  <a
                    href="https://github.com/AvadhootK/Chatbot-Pytorch"
                    target="_blank"
                    rel="noreferrer"
                  >
                <button
                className="text-black bg-green group px-3 py-3 my-2 flex items-center gap-2 border-black"
                style={{ borderRadius: "0.375rem 0.375rem 1.5rem" }}
              >
                 View Project
              </button>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              style={{ backgroundImage: `url(${work3})`, loading: "lazy" }}
              className=" group container rounded-md flex justify-center items-center mx-auto content-div"
              whileHover={{ scale: 1.1 }}
            >
              {/**Hover effects */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-lg font-semibold text-white tracking-wider">
                  Machine Learning
                </span>
                <div className="pt-2 text-center">
                  {/* <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                      Demo
                    </button>
                  </a> */}
                  <a
                    href="https://github.com/AvadhootK/Machine-Learning"
                    target="_blank"
                    rel="noreferrer"
                  >
                <button
                className="text-black bg-green group px-3 py-3 my-2 flex items-center gap-2 border-black"
                style={{ borderRadius: "0.375rem 0.375rem 1.5rem" }}
              >
                 View Project
              </button>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              style={{ backgroundImage: `url(${work6})`, loading: "lazy" }}
              className=" group container rounded-md flex justify-center items-center mx-auto content-div"
              whileHover={{ scale: 1.1 }}
            >
              {/* Hover effects */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-lg font-semibold text-white tracking-wider">
                  Machine Learning
                </span>
                <div className="pt-2 text-center">
                  {/* <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                      Demo
                    </button>
                  </a> */}
                  <a
                    href="https://github.com/AvadhootK/Machine-Learning"
                    target="_blank"
                    rel="noreferrer"
                  >
                <button
                className="text-black bg-green group px-3 py-3 my-2 flex items-center gap-2 border-black"
                style={{ borderRadius: "0.375rem 0.375rem 1.5rem" }}
              >
                 View Project
              </button>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              style={{ backgroundImage: `url(${work5})`, loading: "lazy" }}
              className=" group container rounded-md flex justify-center items-center mx-auto content-div"
              whileHover={{ scale: 1.1 }}
            >
              {/* *Hover effects */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-lg font-semibold text-white tracking-wider">
                  Mintcoin
                </span>
                <div className="pt-2 text-center">
                  {/* <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                      Demo
                    </button>
                  </a> */}
                  <a
                    href="https://github.com/AvadhootK/MintCoin"
                    target="_blank"
                    rel="noreferrer"
                  >
                <button
                className="text-black bg-green group px-3 py-3 my-2 flex items-center gap-2 border-black"
                style={{ borderRadius: "0.375rem 0.375rem 1.5rem" }}
              >
                 View Project
              </button>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              style={{ backgroundImage: `url(${work4})`, loading: "lazy" }}
              className=" group container rounded-md flex justify-center items-center mx-auto content-div"
              whileHover={{ scale: 1.1 }}
            >
              {/* *Hover effects */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-lg font-semibold text-white tracking-wider">
                  User Management System
                </span>
                <div className="pt-2 text-center">
                  {/* <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                      Demo
                    </button>
                  </a> */}
                  <a
                    href="https://github.com/AvadhootK/User-management-system"
                    target="_blank"
                    rel="noreferrer"
                  >
                <button
                className="text-black bg-green group px-3 py-3 my-2 flex items-center gap-2 border-black"
                style={{ borderRadius: "0.375rem 0.375rem 1.5rem" }}
              >
                 View Project
              </button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* <div>
          <div
            className="text-3xl font-semibold text-center mb-10"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Hobbies
            <hr className="bg-base-blue w-20 h-0.5 border-none mt-1 mx-auto"></hr>
          </div>
          <p
            className="text-2xl font-medium text-center"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay={300}
          >
            Check out some of my sketches!
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;

