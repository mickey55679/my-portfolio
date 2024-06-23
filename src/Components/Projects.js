import React from "react";


const projects = [
  {
    id: 1,
    title: "Project Title 1",
    description: "Description for project 1.",
    image: "image1.jpg",
  },
  {
    id: 2,
    title: "Project Title 2",
    description: "Description for project 2.",
    image: "image2.jpg",
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
      {/* <h3>My Projects</h3> */}
      <div className="card-container">
        {projects.map((project) => (
          <div className="card" key={project.id}>
            <div className="card-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
