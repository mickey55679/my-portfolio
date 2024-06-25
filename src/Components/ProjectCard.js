import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faGithub
} from "@fortawesome/free-brands-svg-icons";
const ProjectCard = ({ imageUrl, name, description }) => {
  return (
    <div
      className="projects-card"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="project-info-container">
        <h3 className="project-title">{name}</h3>
        <span className="project-load-bar"></span>
        <p className="project-short-desc">{description}</p>
        <button className="project-btn">
          <a
            href="https://github.com/mickey55679"
            target="_blank"
            rel="noopener noreferrer"
          >
            See on github
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
