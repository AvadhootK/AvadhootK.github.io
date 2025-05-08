// import { FaCircle, FaRegCalendarAlt, FaGraduationCap } from "react-icons/fa";
// import { IoBagRemove } from "react-icons/io5";
// import circle from "../assets/circle-scatter-haikei(1).svg";
import React from "react";

const Volunteer = () => {
  const expi = [
    {
      title: "Teaching Assistant",
      org: "Active Portfolio Management with ML & Time Series Forecasting",
      time: " Jan 2024 - Present",
      desc: "Responsibility:",
    },
    {
      title: "Developer and Mentor",
      org: " Virtual Labs IIT Bombay",
      time: " July 2020 - Apr 2023",
      desc: "Responsibility:",
    },
    {
      title: "Frontend Expert",
      org: "Google Developers Students Club (GDSC)",
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
  return (
    <div id="volunteer" className="w-full bg-neutral-50 text-black pb-6">
      <hr className="max-w-5xl mx-auto border-t border-gray-200" />
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* <div className="max-w-4xl w-full text-center pb-8">
          <h2 className="text-4xl font-semibold mb-6">Volunteer Experience</h2>
          <p className="text-gray-600 text-sm">A quick snapshot of my academic and professional journey.</p>
        </div> */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-semibold">Volunteer Experience</h2>
            <p className="text-gray-dark text-sm mt-2">Work I’ve contributed outside my main roles.</p>
          </div>
        </div>
      </div>
        <div className="max-w-2xl mx-auto w-full flex flex-col gap-12">
          {expi.map((item, i) => (
            <div key={i} className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm">
              <div className="mb-4">
                <h3 className="text-xl font-semibold">{item.org}</h3>
              </div>
              <hr className="border-t border-gray-200 my-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-700">Title</p>
                  <p className="text-gray-800">{item.title}</p>
                  {/* <p className="mt-2 font-semibold text-gray-700">Period</p>
                  <p className="text-gray-800">{item.time}</p> */}
                </div>
                <div>
                  {/* <p className="font-semibold text-gray-700">Description</p>
                  <p className="text-gray-800">{item.desc}</p> */}
                  <p className="font-semibold text-gray-700">Period</p>
                  <p className="text-gray-800">{item.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <hr className="max-w-5xl mx-auto border-t border-gray-200 mt-12" /> */}
      </div>
    </div>
  );
};

export default Volunteer;
