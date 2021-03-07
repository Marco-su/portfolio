import "./Portfolio.css";
import project from "../../assets/img/project.png";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h2 className="my-3">Portfolio</h2>
      <div id="all-projects">
        <div className="project">
          <figure>
            <img className="project-img" src={project} alt="" />
          </figure>
          <div className="project-info-container">
            <div>
              <h4 className="text-white">QR App</h4>
              <p>Use this QR generator.</p>
            </div>
          </div>
        </div>

        <div className="project">
          <figure>
            <img className="project-img" src={project} alt="" />
          </figure>
          <div className="project-info-container">
            <div>
              <h4 className="text-white">API Gif</h4>
              <p>Find your favorite gif.</p>
            </div>
          </div>
        </div>

        <div className="project">
          <figure>
            <img className="project-img" src={project} alt="" />
          </figure>
          <div className="project-info-container">
            <div>
              <h4 className="text-white">Notes App</h4>
              <p>Add, modify and delete your notes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
