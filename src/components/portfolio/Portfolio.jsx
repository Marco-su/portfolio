import "./Portfolio.css";

import project from "../../assets/img/project.png";
import app_notes from "../../assets/img/app-notes.png";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h2 className="my-3">Portfolio</h2>
      <div id="all-projects">
        <div className="project">
          <figure>
            <img className="project-img img-thumbnail" src={project} alt="" />
          </figure>
          <div className="project-info-container">
            <div className="project-info">
              <h4 className="text-white">QR App</h4>
              <p>Use this QR generator.</p>
              <div className="button-container">
                <button>
                  <a href="/" target="_blank" rel="noreferrer">
                    <i className="fas fa-external-link-alt"></i> Website
                  </a>
                </button>
                <button>
                  <a href="/" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i> Repository
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <figure>
            <img className="project-img img-thumbnail" src={project} alt="" />
          </figure>
          <div className="project-info-container">
            <div className="project-info">
              <h4 className="text-white">API Gif</h4>
              <p>Find your favorite gif.</p>
              <div className="button-container">
                <button>
                  <a href="/" target="_blank" rel="noreferrer">
                    <i className="fas fa-external-link-alt"></i> Website
                  </a>
                </button>
                <button>
                  <a href="/" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i> Repository
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <figure>
            <img className="project-img img-thumbnail" src={app_notes} alt="" />
          </figure>
          <div className="project-info-container">
            <div className="project-info">
              <h4 className="text-white">Notes App</h4>
              <p>Add, modify and delete your notes.</p>
              <div className="button-container">
                <button>
                  <a
                    href="https://marco-su.github.io/app-notes/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i> Website
                  </a>
                </button>
                <button>
                  <a
                    href="https://github.com/Marco-su/app-notes"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i> Repository
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
