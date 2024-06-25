import React from "react";
import ProjectCard from "./ProjectCard.js";
import asylumProject from "./images/screenshot.png";

const ProjectList = () => {
  return (
    <div className="projects-grid-container">
      <ProjectCard
        imageUrl={asylumProject}
        name="Asylum Project"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <ProjectCard
        imageUrl={asylumProject}
        name="Asylum Project"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <ProjectCard
        imageUrl={asylumProject}
        name="Asylum Project"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <ProjectCard
        imageUrl={asylumProject}
        name="Asylum Project"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </div>
  );
};

export default ProjectList;
