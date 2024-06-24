import React from "react";


const ProjectCard = () => {
  return (
    <div className="projects-grid-container">
      <div className="projects-card project-one">
        <div className="project-info-container">
          <h3 className="project-title">Project Name</h3>
          <span className="project-load-bar"></span>
          <p className="project-short-desc">
            Lorem ipsum dolor sitmet consectetur adipisicing elit
          </p>
          <button className="project-btn">
            <a href="#">See More</a>
          </button>
        </div>
      </div>
      
      {/* Repeat this block for each ProjectCard */}
    </div>
  );
};

export default ProjectCard;
