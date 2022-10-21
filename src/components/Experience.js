import { FaCircle, FaRegCalendarAlt, FaGraduationCap } from "react-icons/fa";
import { IoBagRemove } from "react-icons/io5";
import circle from "../assets/circle-scatter-haikei(1).svg";

const Experience = () => {
  const expi = [
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
  return (
    <div
      id="experience"
      className=" pt-[120px] w-full bg-white text-black relative"
    >
      <img src={circle} alt="..." className="max-w-full h-auto absolute"></img>
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
      {/* <div class="custom-shape-divider-bottom-1666375929">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div> */}
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-width-[1000px] w-full pb-8 text-center">
          <div className="text-4xl font-semibold">
            Experience
            <hr className="bg-base-blue w-20 h-0.5 border-none mx-auto mt-1"></hr>
          </div>
        </div>
        <div className="max-width-[1000px] w-full grid lg:grid-cols-2 py-10 px-20 text-lg z-10">
          <div className="lg:mx-auto mx-0">
            <h2 className="text-3xl font-medium mb-10 flex items-center gap-3">
              <FaGraduationCap />
              Education
            </h2>
            <div className="border-l-[3px] border-base-blue">
              {expi.slice(0, 2).map((items, i) => {
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
          <div className="lg:mx-auto mx-0">
            <h2 className="text-3xl font-medium mb-10 mt-10 lg:mt-0 flex items-center gap-3">
              <IoBagRemove /> Work Experience
            </h2>
            <div className="border-l-[3px] border-base-blue">
              {expi.slice(2).map((items, i) => {
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
