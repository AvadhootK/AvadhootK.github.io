import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import preloaderAnimation from "../assets/preloader.json";

function PreLoader() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    showLoader && (
      <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
        <Lottie animationData={preloaderAnimation} loop={true} className="w-32 h-32" />
      </div>
    )
  );
}

export default PreLoader;
