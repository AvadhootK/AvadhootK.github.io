import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { TiSocialDribbble, TiSocialTwitter } from "react-icons/ti";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="navbarscrl fixed w-full h-[60px] flex justify-between items-center md:px-20 px-10 bg-white text-black text-[18px] opacity-90 z-30">
      <div className="text-base-blue text-2xl font-semibold brand">
        <a href="/" className="logo">
          Avadhoot
        </a>
      </div>

      {/* menu */}
      <ul className="navbar-nav hidden lg:flex activenav">
        <li>
          <a className="hover:text-base-blue alinks" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-base-blue alinks" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="hover:text-base-blue alinks" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="hover:text-base-blue alinks" href="#experience">
            Experience
          </a>
        </li>
        <li>
          <a className="hover:text-base-blue alinks" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a className="hover:text-base-blue alinks" href="#contact">
            Contact
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <button onClick={handleClick} className="lg:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </button>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 right-0 w-2/5 h-screen bg-base-blue text-white flex flex-col pt-20 items-end pr-5"
        }
      >
        <motion.li className="py-2 text-lg" whileHover={{ translateX: -13 }}>
          <a href="#home">Home</a>
        </motion.li>
        <motion.li className="py-2 text-lg" whileHover={{ translateX: -13 }}>
          <a href="#about">About</a>
        </motion.li>
        <motion.li className="py-2 text-lg " whileHover={{ translateX: -13 }}>
          <a href="#skills">Skills</a>
        </motion.li>
        <motion.li className="py-2 text-lg " whileHover={{ translateX: -13 }}>
          <a href="#experience">Experience</a>
        </motion.li>
        <motion.li className="py-2 text-lg " whileHover={{ translateX: -13 }}>
          <a href="#portfolio">Portfolio</a>
        </motion.li>
        <motion.li className="py-2 text-lg " whileHover={{ translateX: -13 }}>
          <a href="#contact">Contact</a>
        </motion.li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2]">
            {/* eslint-disable-next-line*/}
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.linkedin.com/in/avadhoot-kulkarni/"
              target="_blank"
            >
              LinkedIn <AiFillLinkedin size={25} />
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#171515]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://github.com/AvadhootK"
              target="_blank"
              rel="noreferrer"
            >
              Github <AiOutlineGithub size={25} />
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#00acee]">
            <a
              className="flex justify-between items-center w-full text-white"
              href="/"
            >
              Twitter <TiSocialTwitter size={25} />
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-teal-900">
            <a
              className="flex justify-between items-center w-full text-white"
              href="/"
            >
              Website <TiSocialDribbble size={25} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
