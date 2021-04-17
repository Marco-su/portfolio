import "./AboutContainer.css";
import AboutMe from "./AboutMe";
import DevTools from "./DevTools";

const AboutContainer = () => {
  return (
    <div id="about" className="container">
      <div className="row">
        <div className="info col-lg-6">
          <AboutMe />
        </div>
        <div className=" col-lg-6">
          <DevTools />
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
