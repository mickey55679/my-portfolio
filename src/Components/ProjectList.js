import React from "react";
import ProjectCard from "./ProjectCard.js";
import ktArtistry from "./images/ktartistrylg.png";
import chuds from "./images/chudslg.png"
import myLogo from "./images/1.png"
import asylumlogo from "./images/HRFAsylum.png"



const ProjectList = () => {
  return (
    <div className="projects-grid-container flex flex-wrap gap-10 justify-center ">
      <ProjectCard
        imageUrl="https://cdn.pixabay.com/photo/2017/08/02/00/47/buildings-2569218_1280.jpg"
        name="Asylum Project"
        description="#HTML #CSS #React"
        githubUrl="https://github.com/mickey55679/asylum-rg-fe-starter"
      />
      <ProjectCard
        imageUrl="https://cdn.pixabay.com/photo/2017/08/02/00/47/buildings-2569218_1280.jpg"
        name="Chuds"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        githubUrl="https://github.com/mickey55679/chuds"
      />
      <ProjectCard
        imageUrl="https://cdn.pixabay.com/photo/2017/08/02/00/47/buildings-2569218_1280.jpg"
        name="Kt-artistry"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        githubUrl="https://github.com/mickey55679/kt-artistry"
      />
      <ProjectCard
        imageUrl="https://cdn.pixabay.com/photo/2017/08/02/00/47/buildings-2569218_1280.jpg"
        name="my-portfolio"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        githubUrl="https://github.com/mickey55679/my-portfolio"
      />
    </div>
  );
};

export default ProjectList;
