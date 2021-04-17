import "./Portfolio.css";

import app_notes from "../../assets/img/app-notes.png";
import app_qr from "../../assets/img/app-qr.png";
import app_weather from "../../assets/img/app-weather.png";
import app_gifs from "../../assets/img/app-gifs.jpg";

import Project from "./Project";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h2 className="subtitle">Projects</h2>

      <div className="all-projects container">
        <Project
          imageSrc={app_gifs}
          title="Gif finder"
          description="Search gifs with the largest database of its kind."
          websiteLink="https://marco-su.github.io/app-gifs/"
          repositoryLink="https://github.com/Marco-su/app-gifs"
        />

        <Project
          imageSrc={app_qr}
          title="QR App"
          description="Read and generate QR codes."
          websiteLink="https://marco-su.github.io/app-qr/"
          repositoryLink="https://github.com/Marco-su/app-qr"
        />

        <Project
          imageSrc={app_weather}
          title="Weather App"
          description="Climate information around the world."
          websiteLink="https://marco-su.github.io/app-weather/"
          repositoryLink="https://github.com/Marco-su/app-weather"
        />

        <Project
          imageSrc={app_notes}
          title="Notes App"
          description="Add, modify and delete your notes."
          websiteLink="https://marco-su.github.io/app-notes/"
          repositoryLink="https://github.com/Marco-su/app-notes"
        />
      </div>
    </div>
  );
};

export default Portfolio;
