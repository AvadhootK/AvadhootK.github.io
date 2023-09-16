import { FaCircle, FaRegCalendarAlt, FaGraduationCap } from "react-icons/fa";
import { IoBagRemove } from "react-icons/io5";
// import circle from "../assets/circle-scatter-haikei(1).svg";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  const expi = [
    {
      title: "MS, Computer Science",
      org: "New York University, New York",
      time: "2023-2025",
      desc: "Responsibility:",
    },
    {
      title: "BE, Information Technology",
      org: "PVG's College Of Engineering & Technology, Pune",
      time: "2019-2023",
      desc: "Responsibility:",
    },
    {
      title: "Higher Secondary School, CS",
      org: "Fergusson College, Pune",
      time: "2018-2019",
      desc: "Responsibility:",
    },
    {
      title: "Software Engineer Intern",
      org: "FTB Communications",
      time: "Aug 2021-Aug 2022",
      desc: "",
    },
    {
      title: "Machine Learning Intern",
      org: "ArrayPointer",
      time: "Feb 2022-May 2022",
      desc: "",
    },
    {
      title: "DS & ML Intern",
      org: "Tathasthu",
      time: "Mar 2022-April 2022",
      desc: "",
    },
    {
      title: "Artificial Intelligence Intern",
      org: "InMovidu Technologies, BITS Pilani",
      time: "Jun 2020-Aug 2020",
      desc: "",
    },
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="experience"
      className=" pt-[90px] w-full bg-bg_light_primary text-black relative overflow-hidden"
    >
      {/* <img src={circle} alt="..." className="max-w-full h-auto absolute"></img> */}
      {/* <div className="custom-shape-divider-bottom-1666374861">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
            className="shape-fill"
          ></path>
        </svg>
      </div> */}
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-width-[1000px] w-full pb-8 text-center">
          <div
            className="text-4xl font-semibold"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Experience
            <hr className="bg-base-blue w-20 h-0.5 border-none mx-auto mt-1"></hr>
          </div>
        </div>
        <div className="max-width-[1000px] w-full grid lg:grid-cols-2 py-10 px-20 text-lg z-10">
          <div
            className="lg:mx-auto mx-0"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay={300}
          >
            <h2 className="text-3xl font-medium mb-10 flex items-center gap-3">
              <FaGraduationCap />
              Education
            </h2>
            <div className="border-l-[3px] border-base-blue">
              {expi.slice(0, 3).map((items, i) => {
                return (
                  <div key={i}>
                    <div className="flex ml-6 mb-10">
                      <div>
                        <FaCircle className="ml-[-33px] mt-[8px]" size={15} />
                      </div>
                      <div className="text-neutral-500">
                        <h2 className="text-2xl text-base-blue font-medium">
                          {items.title}
                        </h2>
                        <div>
                          <span className="text-black">{items.org}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaRegCalendarAlt />
                          {items.time}
                        </div>
                        {/* <div>Some random text here(Responsibility)</div> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="lg:mx-auto mx-0"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay={300}
          >
            <h2 className="text-3xl font-medium mb-10 mt-10 lg:mt-0 flex items-center gap-3">
              <IoBagRemove /> Work Experience
            </h2>
            <div className="border-l-[3px] border-base-blue">
              {expi.slice(3).map((items, i) => {
                return (
                  <div key={i}>
                    <div className="flex ml-6 mb-10">
                      <div>
                        <FaCircle className="ml-[-33px] mt-[8px]" size={15} />
                      </div>
                      <div className="text-neutral-500">
                        <h2 className="text-2xl text-base-blue font-medium">
                          {items.title}
                        </h2>
                        <div>
                          <span className="text-black">{items.org}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaRegCalendarAlt />
                          {items.time}
                        </div>
                        {/* <div>Some random text here(Responsibility)</div> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
