import React from "react";
import ProjectCard from "./ProjectCard.js";
import ktArtistry from "./images/ktartistrylg.png";
import chuds from "./images/chudslg.png"
import myLogo from "./images/logomb.png"
import asylumlogo from "./images/HRF.png"



const ProjectList = () => {
  return (
    <div className="projects-grid-container flex flex-wrap gap-10 justify-center ">
      <ProjectCard
        imageUrl={asylumlogo}
        name="Asylum Project"
        description="#HTML #CSS #React"
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
