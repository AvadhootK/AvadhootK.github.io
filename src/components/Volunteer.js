import { FaCircle, FaRegCalendarAlt, FaGraduationCap } from "react-icons/fa";
import { IoBagRemove } from "react-icons/io5";
// import circle from "../assets/circle-scatter-haikei(1).svg";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Volunteer = () => {
  const expi = [
    {
      title: "Developer and Mentor",
      org: " Virtual Labs IIT Bombay, PVG’s COET",
      time: " July 2020 - Apr 2023",
      desc: "Responsibility:",
    },
    {
      title: "Frontend Expert",
      org: "Google Developers Students Club(GDSC), PVG’s COET",
      time: " Aug 2021 - Aug 2022",
      desc: "Responsibility:",
    },
    {
        title: "Technical Team Head",
        org: "Information Technology Students’ Association (ITSA)",
        time: "July 2021 - Apr 2023",
        desc: "Responsibility:",
      },
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
<div className="flex flex-col justify-center items-center w-full h-full pt-20">
        <div className="max-width-[1000px] w-full pb-8 text-center">
          <div
            className="text-4xl font-semibold"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Volunteer Experience
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
            <div className="border-l-[3px] border-base-blue">
              {expi.slice(0, ).map((items, i) => {
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
  );
};

export default Volunteer;

