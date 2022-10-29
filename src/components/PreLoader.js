// import React from "react";
// import ReactLoading from "react-loading";

// function PreLoader() {
//   return (
//     <div className="flex h-screen">
//       <div className="m-auto">
//         {" "}
//         <ReactLoading
//           type={"spinningBubbles"}
//           color={"#3399ff"}
//           height={200}
//           width={200}
//         />
//       </div>
//     </div>
//   );
// }

// export default PreLoader;

import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../assets/85729-world-map.json";

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
