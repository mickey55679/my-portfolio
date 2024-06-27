import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faGithub
} from "@fortawesome/free-brands-svg-icons";
const ProjectCard = ({ imageUrl, name, description, githubUrl }) => {
  return (
    <div
      className="projects-card w-full"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="project-info-container">
        <h3 className="project-title">{name}</h3>
        <span className="project-load-bar"></span>
        <p className="project-short-desc">{description}</p>
        <button className="project-btn">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            See on GitHub
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
