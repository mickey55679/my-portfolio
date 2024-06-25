import React from "react";
import ProjectCard from "./ProjectCard.js";


const ProjectList = () => {
  return (
    <div className="projects-grid-container">
      <ProjectCard
        imageUrl="https://cdn.pixabay.com/photo/2024/03/11/12/43/leaf-8626541_1280.jpg"
        name="Asylum Project"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <ProjectCard
        imageUrl="https://cdn.pixabay.com/photo/2024/03/11/12/43/leaf-8626541_1280.jpg"
        name="Asylum Project"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <ProjectCard
        imageUrl="https://cdn.pixabay.com/photo/2024/03/11/12/43/leaf-8626541_1280.jpg"
        name="Asylum Project"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <ProjectCard
        imageUrl="https://cdn.pixabay.com/photo/2024/03/11/12/43/leaf-8626541_1280.jpg"
        name="Asylum Project"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </div>
  );
};

export default ProjectList;
