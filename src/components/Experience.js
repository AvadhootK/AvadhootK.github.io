// import { FaCircle, FaRegCalendarAlt, FaGraduationCap } from "react-icons/fa";
// import { IoBagRemove } from "react-icons/io5";
// import circle from "../assets/circle-scatter-haikei(1).svg";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  const expi = [
    {
      title: "Research Assistant",
      org: "New York University (Finance & Risk Eng)",
      time: "May 2024 - Sept 2024",
      desc: "Optimized LLMs using PEFT (LoRA variants), intrinsic dimension analysis, and inference techniques, achieving lower compute overhead across multiple architectures. Benchmarked LLMs to analyze truthfulness and hallucination.",
    },
    {
      title: "Software Engineer Intern",
      org: "FTB Communications",
      time: "Aug 2021 - Aug 2022",
      desc: "Engineered secure data migration workflows and automated testing to enhance data quality and system optimization.",
    },
    // {
    //   title: "Higher Secondary School, CS",
    //   org: "Fergusson College, Pune",
    //   time: "2018-2019",
    //   desc: "Responsibility:",
    // },
    // {
    //   title: "Software Engineer Intern",
    //   org: "FTB Communications",
    //   time: "Aug 2021-Aug 2022",
    //   desc: "",
    // },
    {
      title: "Machine Learning Intern",
      org: "ArrayPointer",
      time: "Feb 2022 - May 2022",
      desc: "Built a dynamic pricing model using machine learning, with rigorous evaluation of regression algorithms to optimize inventory pricing accuracy.",
    },
    // {
    //   title: "DS & ML Intern",
    //   org: "Tathasthu",
    //   time: "Mar 2022-April 2022",
    //   desc: "",
    // },
    // {
    //   title: "Artificial Intelligence Intern",
    //   org: "InMovidu Technologies, BITS Pilani",
    //   time: "Jun 2020-Aug 2020",
    //   desc: "",
    // },
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="experience"
      className="bg-neutral-50 w-full"
    >
      <hr className="max-w-5xl mx-auto border-t border-gray-200" />
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
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* <div className="max-w-4xl w-full text-center pb-8">
        <h2 className="text-3xl font-semibold text-black mb-6">My Past Experience</h2>
        <p className="text-gray-dark text-sm">
          A quick snapshot of my academic and professional journey.
        </p>
        </div> */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-semibold">Past Experience</h2>
            <p className="text-gray-dark text-sm mt-2">A quick snapshot of my professional journey.</p>
          </div>
        </div>
      </div>
        <div className="space-y-6">
          {expi.map((items, i) => (
            <div key={i} className="bg-white border border-gray-100 shadow-sm rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-black mb-4">{items.title}</h3>
              <hr className="border-t border-gray-200 my-4" />
              <div className="md:flex md:justify-between md:gap-12 text-sm text-gray-dark">
                <div className="space-y-4 md:w-1/2">
                  <div>
                    <p className="font-semibold text-black mb-1">Organization</p>
                    <p>{items.org}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-black mb-1">Period</p>
                    <p>{items.time}</p>
                  </div>
                </div>
                <div className="mt-6 md:mt-0 md:w-1/2">
                  <p className="font-semibold text-black mb-1">Description</p>
                  <p>
                    {items.desc || "Quis orci amet porttitor blandit amet nullam sit elit purus blandit non ut non quam curabitur lorem ipsum dolor sit amet consectetur adipiscing elit neque tempor malesuada adipiscing congue diam."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="max-w-5xl mx-auto border-t border-gray-200" />
    </div>
  );
};

export default Experience;
