// import code from "../assets/codethinking.svg";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="contact"
      className="w-full bg-white text-black pt-[90px] relative overflow-hidden"
    >
      <div className="custom-shape-divider-bottom-1666375306">
        <svg
          data-name="Layer 1"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-width-[1000px] w-full pb-8 text-center">
          <div
            className="text-4xl font-semibold z-10"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Contact Me
            <hr className="bg-base-blue w-20 h-0.5 border-none mx-auto mt-1"></hr>
          </div>
        </div>
        <div
          className="lg:w-2/5 w-3/4 mx-auto pb-20 z-10"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay={300}
        >
          {/* <img src={code} alt="..."></img> */}
          <div className="rounded-md bg-base-blue text-white p-10 shadow-2xl">
            <form>
              <label className="block mb-6">
                <span className="text-xl">Name</span>
                <input
                  type="text"
                  name="name"
                  className="
                  text-black
            block
            w-full
            p-2
            mt-2.5
            border-b-[1px]
            border-base-gray
            focus:outline-none
            shadow-sm
          "
                  placeholder="Your name"
                />
              </label>
              <label className="block mb-6">
                <span className="text-xl">Email address</span>
                <input
                  name="email"
                  type="email"
                  className="
                  text-black
            block
            w-full
            p-2
            border-b-[1px]
            mt-2.5
            border-base-gray
            focus:outline-none
            shadow-sm
          "
                  placeholder="Your email"
                  required
                />
              </label>
              <label className="block mb-6">
                <span className="text-xl">Message</span>
                <textarea
                  name="message"
                  className="
                  text-black
            block
            w-full
            p-2
            mt-2.5
            border-[1px]
            border-base-gray
            focus:outline-none
            shadow-sm
          "
                  rows="3"
                  placeholder="Write a message..."
                ></textarea>
              </label>
              <div className="py-3 text-center">
                <div
                  type="submit"
                  style={{
                    cursor: "pointer",
                    borderRadius: "0.375rem 0.375rem 1.5rem",
                  }}
                  className="
                  text-lg
            py-2.5
            mx-auto
            text-white
            bg-black
            hover:bg-black
            transition-colors
            duration-150
            focus:shadow-outline
            w-28
          "
                >
                  Send
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
