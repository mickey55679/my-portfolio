import React from "react";
import chuds from "./images/Screenshot 2024-05-09 at 6.02.34 PM.png";


const Projects = () => {
  return (
    <div className="Projects">
      <div className="Projects-content">
        <h1>Welcome to my Projects page!</h1>
        <div className="card-container">
          <div className="card">
            <a
              href="http://www.project1website.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={chuds} alt="Project 1" />
            </a>
            <div className="card-content">
              <h2>Chuds</h2>
              <p>Description of Project 1</p>
            </div>
          </div>
          <div className="card">
            <a
              href="http://www.project2website.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src='' alt="Project 2" />
            </a>
            <div className="card-content">
              <h2>Project 2</h2>
              <p>Description of Project 2</p>
            </div>
          </div>
          <div className="card">
            <a
              href="http://www.project3website.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src='' alt="Project 3" />
            </a>
            <div className="card-content">
              <h2>Project 3</h2>
              <p>Description of Project 3</p>
            </div>
          </div>
          <div className="card">
            <a
              href="http://www.project4website.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src='' alt="Project 4" />
            </a>
            <div className="card-content">
              <h2>Project 4</h2>
              <p>Description of Project 4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
