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
      <ProjectCard
        imageUrl="https://cdn.pixabay.com/photo/2023/07/13/06/59/canyon-8124036_1280.jpg"
        name="Canyon Project"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <ProjectCard
        imageUrl="https://example.com/project3-image.jpg"
        name="Project 3"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </div>
  );
};

export default ProjectList;
