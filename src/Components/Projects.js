import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import asylumImage from "./images/screenshot.png";
import chudsImage from "./images/Screenshot 2024-05-09 at 6.02.34 PM.png";

const projects = [
  {
    id: 1,
    title: "Chuds",
    description: "Description for project 1.",
    image: chudsImage,
    githubLink: "https://github.com/mickey55679/chuds",
  },
  {
    id: 2,
    title: "Asylum-rg-fe-starter",
    description: "Description for project 2.",
    image: asylumImage,
    githubLink: "https://github.com/yourusername/asylum-rg-fe-starter",
  },
  {
    id: 3,
    title: "Asylum-rg-fe-starter",
    description: "Description for project 2.",
    image: asylumImage,
    githubLink: "https://github.com/yourusername/asylum-rg-fe-starter",
  },
  // Add other projects similarly...
];

const Projects = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleCardFlip = (id) => {
    setFlippedCard(id === flippedCard ? null : id);
  };

  return (
    <div className="Projects-content">
      <h3>My Work</h3>
      <div className="card-container">
        {projects.map((project) => (
          <div
            className="card"
            key={project.id}
            onMouseEnter={() => handleCardFlip(project.id)}
            onMouseLeave={() => handleCardFlip(project.id)}
          >
            <div
              className="card-inner"
              style={{
                transform:
                  flippedCard === project.id
                    ? "rotateY(180deg)"
                    : "rotateY(0deg)",
              }}
            >
              <div
                className="card-front"
              >
                <img
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div
                className="card-back"
              >
                <h1 style={{padding: "20px"}}>{project.title}</h1>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
