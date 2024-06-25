import React from "react";
import ProjectCard from "./ProjectCard.js";
import asylumProject from "./images/screenshot.png";

const ProjectList = () => {
  return (
    <div className="project-list">
      <ProjectCard
        imageUrl={asylumProject}
        name="Asylum Project"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </div>
  );
};

export default ProjectList;
