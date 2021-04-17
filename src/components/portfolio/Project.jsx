import "./Project.css";

const Project = ({
  imageSrc,
  title,
  description,
  websiteLink,
  repositoryLink,
}) => {
  return (
    <div className="project">
      <figure>
        <img className="project-img" src={imageSrc} alt={title} />
      </figure>

      <div className="project-info-container">
        <div className="project-info">
          <h4 className="text-white">{title}</h4>
          <p>{description}</p>
          <div className="button-container">
            <button>
              <a href={websiteLink} target="_blank" rel="noreferrer">
                <i className="fas fa-external-link-alt"></i> Website
              </a>
            </button>
            <button>
              <a href={repositoryLink} target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i> Repository
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
