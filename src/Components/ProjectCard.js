import React from "react";

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
          <a href="https://github.com/mickey55679">See More</a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
