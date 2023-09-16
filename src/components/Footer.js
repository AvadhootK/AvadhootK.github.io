import { TiSocialTwitter, TiSocialDribbble } from "react-icons/ti";
import { FaPhoneAlt } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

const Footer = () => {
  const contact = [
    {
      desc: "abc@gmail.com",
      icon: <HiOutlineMail size={23} />,
    },
    {
      desc: "+1XXXXX",
      icon: <FaPhoneAlt size={23} />,
    },
    {
      desc: "AvadhootK.github.io",
      icon: <GiEarthAmerica size={23} />,
    },
  ];
  return (
    <div id="footer" className="w-full bg-black text-white">
      <div className="flex flex-col justify-center items-center w-full h-full md:px-20 px-0">
        <div className="max-width-[1000px] w-full grid md:grid-cols-3 py-10 px-20 text-md md:gap-20 gap-10">
          <div className="md:mx-auto mx-0">
            <h2 className="text-xl pb-4 font-semibold">Avadhoot Kulkarni</h2>
            <div>This is my Personal Website!</div>
            <div className="mt-6 flex">
              {/* eslint-disable-next-line*/}
              <motion.a
                className="px-2"
                href="https://www.linkedin.com/in/avadhoot-kulkarni/"
                target="_blank"
                whileHover={{ scale: 1.3 }}
              >
                <AiFillLinkedin size={27} />
              </motion.a>
              <motion.a
                className="px-2"
                href="https://github.com/AvadhootK"
                target="_blank"
                whileHover={{ scale: 1.3 }}
              >
                <AiOutlineGithub size={27} />
              </motion.a>
              <motion.a className="px-2" href="/" whileHover={{ scale: 1.3 }}>
                <TiSocialTwitter size={27} />
              </motion.a>
              <motion.a className="px-2" href="/" whileHover={{ scale: 1.3 }}>
                <TiSocialDribbble size={27} />
              </motion.a>
            </div>
          </div>
          <div className="md:mx-auto mx-0">
            <h2 className="text-xl pb-4 font-semibold">Links</h2>
            <ul className="list-none">
              <li className="px-0">
                <a className="hover:underline" href="#home">
                  Home
                </a>
              </li>
              <li className="px-0">
                <a className="hover:underline" href="#about">
                  About
                </a>
              </li>
              <li className="px-0">
                <a className="hover:underline" href="#experience">
                  Experience
                </a>
              </li>
              <li className="px-0">
                <a className="hover:underline" href="#skills">
                  Skills
                </a>
              </li>
              <li className="px-0">
                <a className="hover:underline" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="px-0">
                <a className="hover:underline" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl pb-4 font-semibold">Contact</h2>
            {contact.slice(0).map((items, i) => {
              return (
                <div className="flex items-center gap-5 py-2" key={i}>
                  <div>{items.icon}</div>
                  <div>{items.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-center text-sm pb-8">
        Created by{" "}
        <a className="text-md foot" href="/">
          Avadhoot Kulkarni
        </a>{" "}
        | ©2022 All rights reserved
      </div>
    </div>
  );
};

export default Footer;
