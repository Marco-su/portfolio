import React from "react";
import AboutContainer from "../about/AboutContainer";
import Contact from "../contact/Contact";
import Greeting from "../greeting/Greeting";
import Portfolio from "../portfolio/Portfolio";

const Main = () => {
  return (
    <>
      <React.StrictMode>
        <Greeting />
      </React.StrictMode>

      <AboutContainer />

      <React.StrictMode>
        <Portfolio />
        <Contact />
      </React.StrictMode>
    </>
  );
};

export default Main;
