import "./Greeting.css";
import bgImg from "../../assets/img/greet.jpg";
import { mouseCoords } from "./services/mouseCoords";

import { useEffect, useState } from "react";

let posX = 0;
let posY = 0;

const Greeting = () => {
  const [mouseCoordinates, setMouseCoordinates] = useState({
    coordX: 0,
    coordY: 0,
  });

  //--Info for movement
  useEffect(() => {
    const onMouseMove = (e) => {
      posX = e.pageX;
      posY = e.pageY;
      setMouseCoordinates(mouseCoords(posX, posY));
    };

    window.addEventListener("mousemove", onMouseMove);

    return window.removeEventListener("mouseMove", onMouseMove);
  }, []);

  //--Render
  return (
    <div id="home">
      <div className="home-background">
        <img
          src={bgImg}
          alt="background"
          style={{
            // prettier-ignore
            transform: `translate(${mouseCoordinates.coordX * 0.004}px, ${-mouseCoordinates.coordY * 0.004}px)`,
          }}
        />
      </div>

      <div className="home-content">
        <span
          id="circulo-punteado"
          style={{
            transform: `rotate(${-mouseCoordinates.coordX * 0.01}deg)`,
          }}
        ></span>

        <span
          id="circulo-borde-grueso"
          style={{
            // prettier-ignore
            transform: `rotate(calc(-45deg + ${mouseCoordinates.coordX * 0.25}deg))`,
          }}
        ></span>

        <span
          id="circulo-grande"
          style={{
            // prettier-ignore
            transform: `rotate(calc(-45deg + ${-mouseCoordinates.coordX * 0.25}deg))`,
          }}
        ></span>

        <span className="name-letters">M</span>
        <span className="name-letters">A</span>
        <span className="name-letters">R</span>
        <span className="name-letters">C</span>
        <span className="name-letters">O</span>
        <span className="last-name-letters">S</span>
        <span className="last-name-letters">U</span>
        <span className="last-name-letters">B</span>
        <span className="last-name-letters">E</span>
        <span className="last-name-letters">R</span>
        <span className="last-name-letters">O</span>
        <span
          className="lines"
          style={{
            // prettier-ignore
            transform: `scaleX(${Math.abs(mouseCoordinates.coordX * 0.002)})`,
          }}
        ></span>
        <span
          className="lines"
          style={{
            // prettier-ignore
            transform: `scaleX(${Math.abs(mouseCoordinates.coordX * 0.002)})`,
          }}
        ></span>

        <span
          className="text"
          style={{
            // prettier-ignore
            transform: `translate(calc(-50% + ${mouseCoordinates.coordX * 0.04}px), ${-mouseCoordinates.coordY * 0.04}px)`,
          }}
        >
          do you want an amazing website?
        </span>

        <span
          className="text"
          style={{
            // prettier-ignore
            transform: `translate(${mouseCoordinates.coordX * 0.05}px, ${-mouseCoordinates.coordY * 0.07}px)`,
          }}
        >
          If you have an idea for your site, we can make it come true.
        </span>

        <span
          className="text"
          style={{
            // prettier-ignore
            transform: `translate(${mouseCoordinates.coordX * 0.12}px, ${-mouseCoordinates.coordY * 0.12}px) rotate(-90deg)`,
          }}
        >
          full stack
        </span>

        <div className="developer-text">
          <h1>web developer</h1>
        </div>
      </div>
    </div>
  );
};

//--Export
export default Greeting;
