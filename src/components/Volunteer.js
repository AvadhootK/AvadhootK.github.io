// import { FaCircle, FaRegCalendarAlt, FaGraduationCap } from "react-icons/fa";
// import { IoBagRemove } from "react-icons/io5";
// import circle from "../assets/circle-scatter-haikei(1).svg";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import work1 from "../assets/newimgs/project1.jpeg";
import work2 from "../assets/newimgs/project2.jpg";
import work3 from "../assets/newimgs/project3.jpg";
// import work4 from "../assets/newimgs/project4.jpg";
import work5 from "../assets/newimgs/project5.jpg";
// import work6 from "../assets/newimgs/project6.jpg";

const Volunteer = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true, easing: 'ease-out' });
  }, []);

  const expi = [
    // {
    //   title: "Teaching Assistant",
    //   org: "Active Portfolio Management with ML & Time Series Forecasting",
    //   time: " Jan 2024 - Present",
    //   desc: "Responsibility:",
    //   img: vol1,
    // },
    {
      title: "Member",
      org: "NYU GISA (Graduate Indian Student Association)",
      time: "Jan 2024 - May 2024",
      img: work1,
    },
    {
      title: "Developer and Mentor",
      org: "Virtual Labs IIT Bombay",
      time: "July 2020 - Apr 2023",
      img: work5,
    },
    {
      title: "Frontend Expert",
      org: "Google Developers Students Club (GDSC)",
      time: "Aug 2021 - Aug 2022",
      img: work3,
    },
    {
      title: "Technical Team Head",
      org: "Information Technology Students’ Association (ITSA)",
      time: "July 2021 - Apr 2023",
      img: work2,
    },
  ];

  const mid = Math.ceil(expi.length / 2);
  const leftColumn = expi.slice(0, mid);
  const rightColumn = expi.slice(mid);

  const renderCard = (item, globalIndex) => (
    <div
      key={globalIndex}
      data-aos="fade-up"
      data-aos-delay={globalIndex * 80}
      className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm w-full max-w-lg mx-auto"
    >
      <div className="mb-4 min-h-[3.5rem]">
      <h3 className="text-xl font-semibold leading-snug">{item.org}</h3>
      </div>
      <hr className="border-t border-gray-200 my-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div>
          <p className="font-semibold text-gray-700">Title</p>
          <p className="text-gray-800">{item.title}</p>
        </div>
        <div>
          <p className="font-semibold text-gray-700">Period</p>
          <p className="text-gray-800">{item.time}</p>
        </div>
      </div>
      <img
        src={item.img}
        alt={item.org}
        loading="lazy"
        className="rounded-lg mt-4 w-full h-64 object-cover"
      />
    </div>
  );

  return (
    <div id="volunteer" className="w-full bg-neutral-50 text-black pb-6">
      <hr className="max-w-5xl mx-auto border-t border-gray-200" />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-12">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-semibold">Volunteering</h2>
              <p className="text-gray-dark text-sm mt-2">Work I’ve contributed outside my main roles.</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col gap-10">
            {leftColumn.map((item, i) => renderCard(item, i))}
          </div>
          <div className="flex flex-col gap-10">
            {rightColumn.map((item, i) => renderCard(item, mid + i))}
          </div>
        </div>
        {/* <hr className="max-w-5xl mx-auto border-t border-gray-200 mt-12" /> */}
      </div>
    </div>
  );
};

export default Volunteer;
