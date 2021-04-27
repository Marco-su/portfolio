import "./AboutContainer.css";

const AboutContainer = () => {
  return (
    <div id="about">
      <div className="text-box">
        <div className="info-content">
          <h2>Who I am?</h2>

          <p className="me">I am Marco Subero, a full stack web developer.</p>
          <p>
            I enjoy developing frontend and backend projects using different
            technologies, which allow the future growth of your applications,
            and also taking care of the aesthetics of your website, which will
            make your visitors feel comfortable while they enjoy your content.
          </p>
          <p>
            The quality of the final product will always be the most important
            thing.
          </p>
        </div>
      </div>

      <div className="about-image-box"></div>
    </div>
  );
};

export default AboutContainer;
