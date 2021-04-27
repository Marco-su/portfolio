import React from "react";
import AboutContainer from "../about/AboutContainer";
import Contact from "../contact/Contact";
import Greeting from "../greeting/Greeting";
import MyServices from "../myServices/myServices";
import Portfolio from "../portfolio/Portfolio";
import Technologies from "../technologies/Technologies";

const Main = () => {
  return (
    <>
      <React.StrictMode>
        <Greeting />
        <AboutContainer />
        <MyServices />
      </React.StrictMode>

      <Technologies />

      <React.StrictMode>
        <Portfolio />
        <Contact />
      </React.StrictMode>
    </>
  );
};

export default Main;
