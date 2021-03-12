import "./Portfolio.css";

import app_notes from "../../assets/img/app-notes.png";
import app_qr from "../../assets/img/app-qr.png";
import app_weather from "../../assets/img/app-weather.png";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h2 className="my-3">Portfolio</h2>
      <div id="all-projects">
        <div className="project">
          <figure>
            <img
              className="project-img img-thumbnail"
              src={app_qr}
              alt="QR-app"
            />
          </figure>
          <div className="project-info-container">
            <div className="project-info">
              <h4 className="text-white">QR App</h4>
              <p>Read and generate QR codes.</p>
              <div className="button-container">
                <button>
                  <a
                    href="https://marco-su.github.io/app-qr/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i> Website
                  </a>
                </button>
                <button>
                  <a
                    href="https://github.com/Marco-su/app-qr"
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

        <div className="project">
          <figure>
            <img
              className="project-img img-thumbnail"
              src={app_weather}
              alt="Wheater-app"
            />
          </figure>
          <div className="project-info-container">
            <div className="project-info">
              <h4 className="text-white">Weather App</h4>
              <p>Climate information around the world.</p>
              <div className="button-container">
                <button>
                  <a
                    href="https://marco-su.github.io/app-weather/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i> Website
                  </a>
                </button>
                <button>
                  <a
                    href="https://github.com/Marco-su/app-weather"
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

        <div className="project">
          <figure>
            <img
              className="project-img img-thumbnail"
              src={app_notes}
              alt="Notes-app"
            />
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
