import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({ imageUrl, name, description, githubUrl }) => {
  return (
    <div
      className="projects-card bg-cover bg-center p-4 rounded-lg shadow-lg"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="project-info-container flex flex-col justify-between h-full bg-white bg-opacity-75 p-4 rounded-lg">
        <h3 className="project-title text-xl font-bold mb-2">{name}</h3>
        <span className="project-load-bar h-1 w-full bg-blue-500 mb-2"></span>
        <p className="project-short-desc text-gray-700 mb-4">{description}</p>
        <button className="project-btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <span>See on GitHub</span>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
