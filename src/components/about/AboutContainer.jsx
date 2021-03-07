import "./AboutContainer.css";
import AboutMe from "./AboutMe";
import DevTools from "./DevTools";

const AboutContainer = () => {
  return (
    <div id="about">
      <h2 className="my-3">About</h2>
      <div className="row">
        <div className="col-md-6">
          <AboutMe />
        </div>
        <div className="col-md-6">
          <DevTools />
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
