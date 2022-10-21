import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import html from "../assets/html.png";
import c from "../assets/c.png";
import cpp from "../assets/cpp.png";
import css from "../assets/css.png";
import figma from "../assets/figma.png";
import node from "../assets/node.png";
import js from "../assets/js.png";
import mongodb from "../assets/mongodb.png";
import postgre from "../assets/postgre.png";
import react from "../assets/react.png";
import mysql from "../assets/mysql.png";
import ai from "../assets/ai.png";
import blockchain from "../assets/blockchain.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import ts from "../assets/ts.png";
import express from "../assets/express.png";
import django from "../assets/django.png";
import dl from "../assets/dl.png";

const Skills = () => {
  const frontend = (
    <div className="pb-4 boxshadow my-8">
      <h3 className="text-2xl text-base-blue py-4 font-medium lg:text-left text-center ml-0 md:ml-12">
        Web Development
      </h3>
      <hr></hr>
      <div>
        <div className="w-full grid lg:grid-cols-4 grid-cols-3 text-base-gray py-3">
          <motion.button whileHover={{ scale: 1.1 }} className="m-4 mx-auto">
            <img src={html} alt="..." className="mx-auto"></img>
            HTML5
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className="m-4 mx-auto">
            <img src={css} alt="..." className="mx-auto"></img>
            CSS3
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className=" m-4 mx-auto">
            <img src={js} alt="..." className="mx-auto"></img>
            Javascript
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className=" m-4 mx-auto">
            <img src={react} alt="..." className="mx-auto"></img>
            ReactJs
          </motion.button>

          <motion.button whileHover={{ scale: 1.1 }} className=" m-4 mx-auto">
            <img src={figma} alt="..." className="mx-auto"></img>
            Figma
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className=" m-4 mx-auto">
            <img src={node} alt="..." className="mx-auto"></img>
            NodeJs
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className=" m-4 mx-auto">
            <img src={express} alt="..." className="mx-auto"></img>
            ExpressJs
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className=" m-4 mx-auto">
            <img src={ts} alt="..." className="mx-auto"></img>
            Typescript
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className=" m-4 mx-auto">
            <img src={django} alt="..." className="mx-auto"></img>
            Django
          </motion.button>
        </div>
      </div>
    </div>
  );
  const database = (
    <div className="pb-4 boxshadow my-8">
      <h3 className="text-2xl text-base-blue font-medium py-4 lg:text-left text-center ml-0 md:ml-12">
        Database Management System
      </h3>
      <hr></hr>
      <div>
        <div className="w-full grid lg:grid-cols-4 grid-cols-3 text-base-gray py-3">
          <motion.button whileHover={{ scale: 1.1 }} className="m-4 mx-auto">
            <img src={mysql} alt="..." className="mx-auto"></img>
            MySQL
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className="m-4 mx-auto">
            <img src={mongodb} alt="..." className="mx-auto"></img>
            MongoDB
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className=" m-4 mx-auto">
            <img src={postgre} alt="..." className="mx-auto"></img>
            PostgreSql
          </motion.button>
        </div>
      </div>
    </div>
  );
  const programming = (
    <div className="pb-4 boxshadow my-8">
      <h3 className="text-2xl text-base-blue font-medium py-4 lg:text-left text-center ml-0 md:ml-12">
        Programming
      </h3>
      <hr></hr>
      <div>
        <div className="w-full grid lg:grid-cols-4 grid-cols-3 text-base-gray py-3">
          <motion.button whileHover={{ scale: 1.1 }} className=" m-4 mx-auto">
            <img src={cpp} alt="..." className="mx-auto"></img>
            C++
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className=" m-4 mx-auto">
            <img src={c} alt="..."></img>C
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className=" m-4 mx-auto">
            <img src={python} alt="..." className="mx-auto"></img>
            Python
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} className=" m-4 mx-auto">
            <img src={java} alt="..." className="mx-auto"></img>
            Java
          </motion.button>
        </div>
      </div>
    </div>
  );
  const other = (
    <div className="pb-4 boxshadow my-8">
      <h3 className="text-2xl text-base-blue font-medium py-4 lg:text-left text-center ml-0 md:ml-12">
        Other
      </h3>
      <hr></hr>
      <div>
        <div className="w-full grid lg:grid-cols-4 grid-cols-3 text-base-gray py-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-2 m-2 mx-auto"
          >
            <img src={blockchain} alt="..." className="mx-auto"></img>
            Blockchain
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-2 m-2 mx-auto"
          >
            <img src={ai} alt="..." className="mx-auto"></img>
            Machine Learning
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-2 m-2 mx-auto"
          >
            <img
              src={dl}
              style={{ width: "45px" }}
              alt="..."
              className="mx-auto"
            ></img>
            Deep Learning
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-2 m-2 mx-auto"
          >
            <img src={ai} alt="..." className="mx-auto"></img>
            Artificial Intelligence
          </motion.button>
        </div>
      </div>
    </div>
  );
  const total = [frontend, database, programming, other];
  return (
    <div id="skills" className="w-full pb-20 pt-[120px] bg-white text-black">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-width-[1000px] w-full pb-8 text-center">
          <div className="text-4xl font-semibold mb-3">
            Skills
            <hr className="bg-base-blue w-20 h-0.5 border-none mx-auto mt-1"></hr>
          </div>
        </div>
        {/* <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-0 lg:pl-[130px] lg:px-0 px-10">
          <div className="col-span-2">
            {" "}
            {total.map((skill) => {
              return <div>{skill}</div>;
            })}
          </div>
          <div>
            <div className="w-full grid lg:grid-cols-1 gap-20 lg:gap-0 py-16">
              <div className="w-full mx-auto lg:pb-16 pb-0">
                <div className="w-40 mx-auto">
                  <CircularProgressbar
                    value={80}
                    text="80%"
                    strokeWidth={5}
                    styles={buildStyles({
                      textSize: "17px",
                      // textColor: "#6d6a7c",
                      textColor: "#000",
                      pathColor: "#3399ff",
                      // trailColor: "#c1b6fc",
                      trailColor: "#b3d6ff",
                    })}
                  />
                </div>
                <h2 className="text-center pt-4 text-xl font-medium">
                  Web Development
                </h2>
              </div>
              <div className="w-full mx-auto">
                <div className="w-40 mx-auto">
                  <CircularProgressbar
                    value={80}
                    text="80%"
                    strokeWidth={5}
                    styles={buildStyles({
                      textSize: "17px",
                      // textColor: "#6d6a7c",
                      textColor: "#000",
                      pathColor: "#3399ff",
                      // trailColor: "#c1b6fc",
                      trailColor: "#b3d6ff",
                    })}
                  />
                </div>
                <h3 className="text-center pt-4 text-xl font-medium">
                  Machine Learning
                </h3>
              </div>
            </div>
            <div className="w-full grid lg:grid-cols-1 gap-20 lg:gap-0">
              <div className="w-full mx-auto lg:pb-16 pb-0">
                <div className="w-40 mx-auto">
                  <CircularProgressbar
                    value={80}
                    text="80%"
                    strokeWidth={5}
                    styles={buildStyles({
                      textSize: "17px",
                      // textColor: "#6d6a7c",
                      textColor: "#000",
                      pathColor: "#3399ff",
                      // trailColor: "#c1b6fc",
                      trailColor: "#b3d6ff",
                    })}
                  />
                </div>
                <h3 className="text-center pt-4 text-xl font-medium">
                  Programming
                </h3>
              </div>
              <div className="w-full mx-auto">
                <div className="w-40 mx-auto">
                  <CircularProgressbar
                    value={75}
                    text="75%"
                    strokeWidth={5}
                    styles={buildStyles({
                      textSize: "17px",
                      // textColor: "#6d6a7c",
                      textColor: "#000",
                      pathColor: "#3399ff",
                      // trailColor: "#c1b6fc",
                      trailColor: "#b3d6ff",
                    })}
                  />
                </div>
                <h3 className="text-center pt-4 text-xl font-medium">DBMS</h3>
              </div>
            </div>
          </div>
        </div> */}
        <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-10">
          <div className="md:ml-20 mx-10 md:mx-0">
            {" "}
            {total.slice(0, 2).map((skill, i) => {
              return <div key={i}>{skill}</div>;
            })}
          </div>
          <div className="md:mr-10 mx-10 md:mx-0">
            {" "}
            {total.slice(2).map((skill, i) => {
              return <div key={i}>{skill}</div>;
            })}
          </div>
        </div>
        <div className="w-full grid md:grid-cols-4 my-10 px-20">
          <div className="w-full mx-auto md:mb-0 mb-10">
            <div className="w-40 mx-auto">
              <CircularProgressbar
                value={80}
                text="80%"
                strokeWidth={5}
                styles={buildStyles({
                  textSize: "17px",
                  // textColor: "#6d6a7c",
                  textColor: "#000",
                  pathColor: "#3399ff",
                  // trailColor: "#c1b6fc",
                  trailColor: "#b3d6ff",
                })}
              />
            </div>
            <h2 className="text-center pt-4 text-xl font-medium">
              Web Development
            </h2>
          </div>
          <div className="w-full mx-auto md:mb-0 mb-10">
            <div className="w-40 mx-auto">
              <CircularProgressbar
                value={80}
                text="80%"
                strokeWidth={5}
                styles={buildStyles({
                  textSize: "17px",
                  // textColor: "#6d6a7c",
                  textColor: "#000",
                  pathColor: "#3399ff",
                  // trailColor: "#c1b6fc",
                  trailColor: "#b3d6ff",
                })}
              />
            </div>
            <h3 className="text-center pt-4 text-xl font-medium">
              Machine Learning
            </h3>
          </div>

          <div className="w-full mx-auto md:mb-0 mb-10">
            <div className="w-40 mx-auto">
              <CircularProgressbar
                value={80}
                text="80%"
                strokeWidth={5}
                styles={buildStyles({
                  textSize: "17px",
                  // textColor: "#6d6a7c",
                  textColor: "#000",
                  pathColor: "#3399ff",
                  // trailColor: "#c1b6fc",
                  trailColor: "#b3d6ff",
                })}
              />
            </div>
            <h3 className="text-center pt-4 text-xl font-medium">
              Programming
            </h3>
          </div>
          <div className="w-full mx-auto">
            <div className="w-40 mx-auto">
              <CircularProgressbar
                value={75}
                text="75%"
                strokeWidth={5}
                styles={buildStyles({
                  textSize: "17px",
                  // textColor: "#6d6a7c",
                  textColor: "#000",
                  pathColor: "#3399ff",
                  // trailColor: "#c1b6fc",
                  trailColor: "#b3d6ff",
                })}
              />
            </div>
            <h3 className="text-center pt-4 text-xl font-medium">DBMS</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
