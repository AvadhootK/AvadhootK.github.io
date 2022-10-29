import { useEffect } from "react";
import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import PreLoader from "./components/PreLoader";
import Skills from "./components/Skills";

const App = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const onPageLoad = () => {
      setTimeout(() => {
        setloading(false);
      }, 2000);
    };
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <div>
      {loading ? (
        <PreLoader />
      ) : (
        <div>
          {" "}
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Experience />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
