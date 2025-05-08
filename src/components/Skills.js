// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import { motion } from "framer-motion";
// import html from "../assets/icons/html.png";
// import c from "../assets/icons/c.png";
// import cpp from "../assets/icons/cpp.png";
// import css from "../assets/icons/css.png";
// import figma from "../assets/icons/figma.png";
// import node from "../assets/icons/node.png";
// import js from "../assets/icons/js.png";
// import mongodb from "../assets/icons/mongodb.png";
// import postgre from "../assets/icons/postgre.png";
// import react from "../assets/icons/react.png";
// import mysql from "../assets/icons/mysql.png";
// import ai from "../assets/icons/ai.png";
// import blockchain from "../assets/icons/blockchain.png";
// import java from "../assets/icons/java.png";
// import python from "../assets/icons/python.png";
// import ts from "../assets/icons/ts.png";
// import express from "../assets/icons/express.png";
// import django from "../assets/icons/django.png";
// import dl from "../assets/icons/dl.png";
// import bootstrap from "../assets/icons/bootstrap.png";
// import tailwindcss from "../assets/icons/tailwindcss.png";
// import nextjs from "../assets/icons/nextjs.png";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const skillItems = [
    {
      title: "Programming Languages",
      desc: "Python, C++, Java, C, JavaScript, Typescript, HTML, CSS, SQL",
    },
    {
      title: "Frameworks & Databases",
      desc: "React, Node.js, Express.js, Next.js, Django, FastAPI, MySQL, PostgreSQL, MongoDB",
    },
    {
      title: "Tools & Platforms",
      desc: "Git, GitHub, Docker, Kubernetes, CI/CD, AWS, Azure, Apache Spark, Kafka, Hive, HBase, Dask, Power BI, Tableau",
    },
    {
      title: "Machine Learning & AI",
      desc: "Design and Analysis of Algorithms, Operating Systems, Machine Learning, Deep Learning, Computer Vision, Artificial Intelligence, Natural Language Processing, GenAI, Data Science, Data Analysis, Big Data, Data Mining, Data Visualization, Statistics",
    },
  ];

  return (
    <div
      id="skills"
      className="w-full bg-neutral-50 text-black py-16"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="w-full mb-10">
          <h2 className="text-3xl font-semibold">My skills</h2>
        </div>
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-8">
          {skillItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl text-black p-6 w-full max-w-xl shadow-sm border border-gray-100 mx-auto"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <hr className="border-t border-gray-200" />
              <div className="text-sm flex flex-wrap gap-2 mt-4">
                {item.desc.split(",").map((point, i) => (
                  <span
                    key={i}
                    className="bg-neutral-50 text-black px-3 py-1 rounded-full border border-gray-200 text-sm"
                  >
                    {point.trim()}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* <hr className="max-w-5xl mx-auto border-t border-gray-200" /> */}
      </div>
    </div>
  );
};

export default Skills;
