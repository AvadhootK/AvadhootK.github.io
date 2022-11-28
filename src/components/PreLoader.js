import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../assets/41394-preloader-infinity-design.json";

function PreLoader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        {" "}
        <Lottie options={defaultOptions} height={200} width={200} />
      </div>
    </div>
  );
}

export default PreLoader;
