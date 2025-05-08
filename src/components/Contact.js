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
      className="w-full bg-neutral-50 text-black pb-16"
    >
      <hr className="max-w-5xl mx-auto border-t border-gray-200" />
      {/* <div className="text-center mb-12 mt-12 ">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <p className="text-gray-dark mt-2 text-sm">
          Lorem ipsum dolor sit amet consectetur adipiscing elit tempor pharetra eget consequat se.
        </p>
      </div> */}
      <div className="max-w-4xl mx-auto px-6 mb-12 mt-12">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-semibold">Contact</h2>
            <p className="text-gray-dark text-sm mt-2"> A quick way to get in touch—let’s connect and collaborate.</p>
          </div>
        </div>
      </div>
      <div className="max-w-2xl w-full bg-white rounded-xl border border-gray-200 shadow-md p-10 mx-auto">
        <form className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input type="text" placeholder="What's your name?" className="w-full border-b border-gray-200 p-2 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input type="email" placeholder="What's your email?" className="w-full border-b border-gray-200 p-2 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Phone</label>
              <input type="text" placeholder="What's your phone?" className="w-full border-b border-gray-200 p-2 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Subject</label>
              <input type="text" placeholder="How can I help?" className="w-full border-b border-gray-200 p-2 focus:outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Leave me a message</label>
            <textarea rows="4" placeholder="Hi there! I would like to get in touch with you to inquire about a project." className="w-full border-b border-gray-200 p-2 focus:outline-none" />
          </div>
          <button type="submit" className="text-sm font-medium text-black hover:underline inline-flex items-center gap-1">
            Send message
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
