import about from "../assets/aboutme.svg";
import { AiOutlineDownload } from "react-icons/ai";
// import circle from "../assets/circle-scatter-haikei (3).svg";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="about"
      className="w-full pt-[70px] bg-bg_light_primary text-black relative overflow-hidden"
    >
      {/* <img src={circle} alt="..." className="max-w-full h-auto absolute"></img> */}
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-width-[1000px] w-full grid md:grid-cols-2 py-10 px-20 text-lg z-10">
          <div>
            <img className="w-6/12 mx-auto" src={about} alt="..."></img>
          </div>
          <div className="py-10 w-full md:w-3/4">
            <div className="max-width-[1000px] w-full pb-8">
              <div
                className="text-4xl font-semibold"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                About Me
                <hr className="bg-base-blue w-20 h-0.5 border-none ml-10 mt-1"></hr>
              </div>
            </div>
            <p
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay={300}
            >
              Hello, I'm Avadhoot Kulkarni, a graduate student majoring in Computer Science at New York University. My academic journey has ignited a deep passion for Machine Learning and Artificial Intelligence, alongside my proficiency as a Full-stack web developer with a strong desire to transform innovative ideas into reality.
              <br></br><br></br>
              With extensive hands-on exposure to machine learning and deep learning technologies, coupled with a knack for developing and deploying websites utilizing diverse open-source frameworks, I am deeply committed to developing impactful solutions that address the various challenges faced by organizations.
<br></br><br></br>
I am eager to contribute my technical skills, problem-solving and communication skills, leadership and teamwork. I aspire to apply classroom learning, gain practical experience, and foster valuable connections.
            </p>
            <div>
              <button
                className="text-white bg-base-blue group mt-14 px-3 py-3 my-2 flex items-center gap-2"
                style={{ borderRadius: "0.375rem 0.375rem 1.5rem" }}
                data-aos="fade-up"
                data-aos-delay={300}
                data-aos-duration="1000"
              >
                Download CV
                <AiOutlineDownload size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
