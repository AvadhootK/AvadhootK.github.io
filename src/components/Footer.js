import { TiSocialTwitter, TiSocialDribbble } from "react-icons/ti";
// import { FaPhoneAlt } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
// import { motion } from "framer-motion";

const Footer = () => {
  const contact = [
    {
      desc: "avadhootkulkarni06@gmail.com",
      icon: <HiOutlineMail size={23} />,
    },
    {
      desc: "avadhoot.kulkarni@nyu.edu",
      icon: <HiOutlineMail size={23} />,
    },
    // {
    //   desc: "+1XXXXX",
    //   icon: <FaPhoneAlt size={23} />,
    // },
    {
      desc: "AvadhootK.github.io",
      icon: <GiEarthAmerica size={23} />,
    },
  ];
  return (
    <div id="footer" className="w-full bg-neutral-50 text-black">
      <hr className="max-w-5xl mx-auto border-t border-gray-200" />
      <div className="max-w-6xl mx-auto py-14 px-6 text-center">
        {/* <h2 className="text-2xl font-semibold mb-10">Follow me on social media</h2> */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
          <a
            href="https://www.linkedin.com/in/avadhoot-kulkarni/"
            target="_blank"
            rel="noreferrer"
            className="w-full py-5 px-4 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-center gap-3">
              <AiFillLinkedin size={24} />
              <span className="text-base font-medium">LinkedIn</span>
            </div>
          </a>
          <a
            href="https://github.com/AvadhootK"
            target="_blank"
            rel="noreferrer"
            className="w-full py-5 px-4 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-center gap-3">
              <AiOutlineGithub size={24} />
              <span className="text-base font-medium">GitHub</span>
            </div>
          </a>
          <a
            href="https://avadhootk.github.io"
            target="_blank"
            rel="noreferrer"
            className="w-full py-5 px-4 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-center gap-3">
              <GiEarthAmerica size={24} />
              <span className="text-base font-medium">Website</span>
            </div>
          </a>
          <a
            href="/"
            className="w-full py-5 px-4 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-center gap-3">
              <TiSocialTwitter size={24} />
              <span className="text-base font-medium">Twitter</span>
            </div>
          </a>
        </div>
        <p className="text-sm text-gray-400 mt-8 text-center">
          Designed & built by <a href="https://avadhootk.github.io" className="underline hover:text-black">Avadhoot Kulkarni</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
