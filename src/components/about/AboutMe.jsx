import "./AboutMe.css";
import myPic from "../../assets/img/me.jpg";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="me-button">
        Me <i className="fas fa-portrait"></i>
      </div>

      <div className="info-content">
        <h3>Who I am?</h3>

        <p className="me">I am Marco Subero, a full stack web developer.</p>
        <p>
          I enjoy the development of frontend and backend projects using
          different technologies, which allow the future growth of your
          applications.
        </p>
        <p>
          The quality of the final product will always be the most important
          thing.
        </p>
      </div>

      <img src={myPic} alt="Me" />
    </div>
  );
};

export default AboutMe;
