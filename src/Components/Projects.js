import React from "react";
import asylum from './images/screenshot.png'


const projects = [
  {
    id: 1,
    title: "Chuds",
    description: "Description for project 1.",
    image: "image1.jpg",
  },
  {
    id: 2,
    title: "Asylum-rg-fe-starter",
    description: "Description for project 2.",
    image: asylum,
  },
  {
    id: 3,
    title: "Project Title 3",
    description: "Description for project 3.",
    image: "image3.jpg",
  },
  {
    id: 4,
    title: "Project Title 4",
    description: "Description for project 4.",
    image: "image4.jpg",
  },
];

const Projects = () => {
  return (
    <div className="Projects-content">
      <div className="card-container">
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <div className="card-image">
              <h3>{project.title}</h3>
              <img src={project.image} alt={project.title} />
            </div>
            <div className="card-content">
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
