import "./Portfolio.css";

import gifsSVG from "../../assets/icons/gifs.svg";
import notesSVG from "../../assets/icons/notes.svg";
import qrSVG from "../../assets/icons/qr.svg";
import temperatureSVG from "../../assets/icons/temperature.svg";

import Project from "./Project";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <h2 className="subtitle">Personal projects</h2>

      <div className="all-projects container">
        <Project
          imageSrc={gifsSVG}
          title="Gif finder"
          description="Search gifs with the largest database of its kind."
          websiteLink="https://marco-su.github.io/app-gifs/"
          repositoryLink="https://github.com/Marco-su/app-gifs"
        />

        <Project
          imageSrc={qrSVG}
          title="QR App"
          description="Read and generate QR codes."
          websiteLink="https://marco-su.github.io/app-qr/"
          repositoryLink="https://github.com/Marco-su/app-qr"
        />

        <Project
          imageSrc={temperatureSVG}
          title="Weather App"
          description="Climate information around the world."
          websiteLink="https://marco-su.github.io/app-weather/"
          repositoryLink="https://github.com/Marco-su/app-weather"
        />

        <Project
          imageSrc={notesSVG}
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
