import { motion } from "framer-motion";
import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.jpg";
import work3 from "../assets/work3.jpg";
import work4 from "../assets/work4.jpg";
import work5 from "../assets/work5.jpg";
import work6 from "../assets/work6.jpg";
import sketch1 from "../assets/sketch1.jpg";
import sketch2 from "../assets/sketch2.jpg";
import sketch3 from "../assets/sketch3.jpg";
import sketch4 from "../assets/sketch4.jpg";
import sketch5 from "../assets/sketch5.jpg";
import sketch6 from "../assets/sketch6.jpg";
import "tw-elements";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className=" w-full pb-20 pt-[120px] text-base-black bg-white"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-semibold text-center">Portfolio</p>
          <hr className="bg-base-violet w-20 h-0.5 border-none mt-1 mx-auto"></hr>
          <div className="grid sm:grid-col-2 md:grid-cols-3 gap-10 p-14">
            <motion.div
              style={{ backgroundImage: `url(${work2})` }}
              className="shadow-md shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              whileHover={{ scale: 1.1 }}
            >
              {/**Hover effects */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-lg font-semibold text-black tracking-wider">
                  Project Title
                </span>
                <div className="pt-2 text-center">
                  {/* <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                      Demo
                    </button>
                  </a> */}
                  <a href="/#">
                    <button className="text-center px-2 py-1 font-medium text-black text-sm">
                      View Project
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              style={{ backgroundImage: `url(${work1})` }}
              className="shadow-md shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              whileHover={{ scale: 1.1 }}
            >
              {/**Hover effects */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-lg font-semibold text-black tracking-wider">
                  Project Title
                </span>
                <div className="pt-2 text-center">
                  {/* <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                      Demo
                    </button>
                  </a> */}
                  <a href="/#">
                    <button className="text-center px-2 py-1 font-medium text-black text-sm">
                      View Project
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              style={{ backgroundImage: `url(${work3})` }}
              className="shadow-md shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              whileHover={{ scale: 1.1 }}
            >
              {/**Hover effects */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-lg font-semibold text-black tracking-wider">
                  Project Title
                </span>
                <div className="pt-2 text-center">
                  {/* <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                      Demo
                    </button>
                  </a> */}
                  <a href="/#">
                    <button className="text-center px-2 py-1 font-medium text-black text-sm">
                      View Project
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              style={{ backgroundImage: `url(${work6})` }}
              className="shadow-md shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              whileHover={{ scale: 1.1 }}
            >
              {/* Hover effects */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-lg font-semibold text-black tracking-wider">
                  Project Title
                </span>
                <div className="pt-2 text-center">
                  {/* <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                      Demo
                    </button>
                  </a> */}
                  <a href="/#">
                    <button className="text-center px-2 py-1 font-medium text-black text-sm">
                      View Project
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              style={{ backgroundImage: `url(${work5})` }}
              className="shadow-md shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              whileHover={{ scale: 1.1 }}
            >
              {/* *Hover effects */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-lg font-semibold text-black tracking-wider">
                  Project Title
                </span>
                <div className="pt-2 text-center">
                  {/* <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                      Demo
                    </button>
                  </a> */}
                  <a href="/#">
                    <button className="text-center px-2 py-1 font-medium text-black text-sm">
                      View Project
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              style={{ backgroundImage: `url(${work4})` }}
              className="shadow-md shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              whileHover={{ scale: 1.1 }}
            >
              {/* *Hover effects */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-lg font-semibold text-black tracking-wider">
                  Project Title
                </span>
                <div className="pt-2 text-center">
                  {/* <a href="/">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg">
                      Demo
                    </button>
                  </a> */}
                  <a href="/#">
                    <button className="text-center px-2 py-1 font-medium text-black text-sm">
                      View Project
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div>
          <p className="text-3xl font-semibold text-center mb-10">
            Featured Posts
          </p>
          <p className="text-xl font-normal text-center">
            Check out some of my drawings!
          </p>
        </div>
      </div>
      {/* <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-dark relative w-80 mx-auto mt-6 border-4 p-4 border-black"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active float-left w-full">
            <img src={sketch1} className="block w-full h-[550px]" alt="..." />
          </div>
          <div className="carousel-item float-left w-full">
            <img src={sketch2} className="block w-full h-[550px]" alt="..." />
          </div>
          <div className="carousel-item float-left w-full">
            <img src={sketch3} className="block w-full h-[550px]" alt="..." />
          </div>
          <div className="carousel-item float-left w-full">
            <img src={sketch4} className="block w-full h-[550px]" alt="..." />
          </div>
          <div className="carousel-item float-left w-full">
            <img src={sketch5} className="block w-full h-[550px]" alt="..." />
          </div>
          <div className="carousel-item float-left w-full">
            <img src={sketch6} className="block w-full h-[550px]" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline md:left-[-60px] left-0"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline md:right-[-60px] right-0"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
      <div className="flex flex-col justify-center items-center w-full h-full pt-10 xl:px-52 md:px-10 lg:px-0 px-0">
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          <div>
            <img
              src={sketch1}
              className="block w-80 h-[450px] mx-auto border-4 border-black p-2"
              alt="..."
            ></img>
          </div>
          <div>
            <img
              src={sketch2}
              className="block w-80 mx-auto h-[450px] border-4 border-black p-2"
              alt="..."
            ></img>
          </div>
          <div>
            <img
              src={sketch3}
              className="block w-80 mx-auto h-[450px] border-4 border-black p-2"
              alt="..."
            ></img>
          </div>
          <div>
            <img
              src={sketch4}
              className="block w-80 mx-auto h-[450px] border-4 border-black p-2"
              alt="..."
            ></img>
          </div>
          <div>
            <img
              src={sketch5}
              className="block w-80 mx-auto h-[450px] border-4 border-black p-2"
              alt="..."
            ></img>
          </div>
          <div>
            <img
              src={sketch6}
              className="block w-80 mx-auto h-[450px] border-4 border-black p-2"
              alt="..."
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
