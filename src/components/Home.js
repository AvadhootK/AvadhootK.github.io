import self from "../assets/self.jpg";
// import self_blur from "../assets/self_blur.jpg";
import { BiRightArrow } from "react-icons/bi";
import Typical from "react-typical";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Home = () => {
  return (
    <div id="home" className="bg-white w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="max-width-[1000px] w-full grid md:grid-cols-2 justify-center items-center">
          <div>
            <p className="text-black text-2xl font-medium">Hello,</p>
            <h1 className="text-4xl font-bold text-black my-3">
              I'm Avadhoot Kulkarni
            </h1>
            <h2 className="text-base-blue text-3xl">
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "Full Stack Developer.",
                  1000,
                  "Machine Learning enthusiast.",
                  1000,
                  "Blockchain & Web3 enthusiast.",
                  1000,
                ]}
              ></Typical>
            </h2>
            <div>
              <a
                className="text-white bg-base-blue group w-40 mt-14 px-6 py-3 my-2 flex items-center gap-2 border-2 justify-center 
                border-white
                hover:bg-white
                hover:border-base-blue
                hover:text-black"
                href="#about"
              >
                View Work
                <BiRightArrow size={17} />
              </a>
            </div>
          </div>
          <div className="pt-10 md:pt-0">
            <LazyLoadImage
              src={self}
              alt="..."
              // placeholderSrc={self_blur}
              effect="blur"
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
