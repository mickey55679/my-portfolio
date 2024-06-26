import React from "react";
import ProjectCard from "./ProjectCard.js";
import ktArtistry from "./images/Ktartistry.png";
import chuds from "./images/chudslogo.jpg"
import myLogo from "./images/logomb.png"
import asylumlogo from "./images/Asylumimage.png"



const ProjectList = () => {
  return (
    <div className="projects-grid-container flex flex-wrap">
      <ProjectCard
        imageUrl={asylumlogo}
        name="Asylum Project"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        githubUrl="https://github.com/mickey55679/asylum-rg-fe-starter"
      />
      <ProjectCard
        imageUrl={chuds}
        name="Chuds"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        githubUrl="https://github.com/mickey55679/chuds"
      />
      <ProjectCard
        imageUrl={ktArtistry}
        name="Kt-artistry"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        githubUrl="https://github.com/mickey55679/kt-artistry"
      />
      <ProjectCard
        imageUrl={myLogo}
        name="my-portfolio"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        githubUrl="https://github.com/mickey55679/my-portfolio"
      />
    </div>
  );
};

export default ProjectList;
