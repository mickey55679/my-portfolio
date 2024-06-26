import React from "react";
import ProjectCard from "./ProjectCard.js";


const ProjectList = () => {
  return (
    <div className="projects-grid-container flex flex-wrap">
      <ProjectCard
        imageUrl="https://cdn.pixabay.com/photo/2024/03/11/12/43/leaf-8626541_1280.jpg"
        name="Asylum Project"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        githubUrl="https://github.com/mickey55679/asylum-rg-fe-starter"
      />
      <ProjectCard
        imageUrl="https://cdn.pixabay.com/photo/2024/03/11/12/43/leaf-8626541_1280.jpg"
        name="Chuds"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        githubUrl="https://github.com/mickey55679/chuds"
      />
      <ProjectCard
        imageUrl="https://cdn.pixabay.com/photo/2024/03/11/12/43/leaf-8626541_1280.jpg"
        name="Kt-artistry"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        githubUrl="https://github.com/mickey55679/kt-artistry"
      />
      <ProjectCard
        imageUrl="https://cdn.pixabay.com/photo/2024/03/11/12/43/leaf-8626541_1280.jpg"
        name="my-portfolio"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        githubUrl="https://github.com/mickey55679/my-portfolio"
      />
    </div>
  );
};

export default ProjectList;
