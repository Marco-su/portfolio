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
      <img className="project-img" src={imageSrc} alt={title} />

      <h4>{title}</h4>

      <span className="description">{description}</span>

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
  );
};

export default Project;
