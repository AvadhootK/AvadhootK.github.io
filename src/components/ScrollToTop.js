import { FaAngleUp } from "react-icons/fa";
import React, { useState, useEffect } from "react";

import "../index.css";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative">
      {" "}
      {showTopBtn && (
        <FaAngleUp
          className="fixed bottom-6 right-6 z-30 w-10 h-10 bg-[#111111] text-white rounded-full p-2 shadow-md transition duration-300 cursor-pointer"
          onClick={goToTop}
        />
      )}{" "}
    </div>
  );
};
export default ScrollToTop;
