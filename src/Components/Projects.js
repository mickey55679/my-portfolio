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
                width: "300px",
                height: "300px",
                perspective: "1000px",
                position: "relative",
                textAlign: "center",
                transition: "transform 0.6s",
                transformStyle: "preserve-3d",
                boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                transform:
                  flippedCard === project.id
                    ? "rotateY(180deg)"
                    : "rotateY(0deg)",
              }}
            >
              <div
                className="card-front"
                style={{
                  position: "absolute",
                  width: "90%",
                  height: "90%",
                  backgroundColor: "black",
                  padding: "20px",
                  color: "black",
                  borderRadius: "5px",
                  backfaceVisibility: "hidden",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: "80%", height: "80%" }}
                />
              </div>
              <div
                className="card-back"
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "5px",
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                }}
              >
                <h1>{project.title}</h1>
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
