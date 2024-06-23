import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import asylumImage from "./images/screenshot.png";
import chuds from './images/Screenshot 2024-05-09 at 6.02.34 PM.png'

const projects = [
  {
    id: 1,
    title: "Chuds",
    description: "Description for project 1.",
    image: chuds,
    githubLink: "https://github.com/mickey55679/chuds",
  },
  {
    id: 2,
    title: "Asylum-rg-fe-starter",
    description: "Description for project 2.",
    image: asylumImage, // Adjust this path if needed
    githubLink: "https://github.com/yourusername/asylum-rg-fe-starter",
  },
  {
    id: 3,
    title: "Asylum-rg-fe-starter",
    description: "Description for project 2.",
    image: "image2.jpg", // Adjust this path if needed
    githubLink: "https://github.com/yourusername/asylum-rg-fe-starter",
  },
  {
    id: 4,
    title: "Asylum-rg-fe-starter",
    description: "Description for project 2.",
    image: "image2.jpg", // Adjust this path if needed
    githubLink: "https://github.com/yourusername/asylum-rg-fe-starter",
  },
 

  // Include other projects similarly...
];

const Projects = () => {
  return (
    <div className="Projects-content">
      <div className="card-container">
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <div className="card-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} /> View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
