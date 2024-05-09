import React from "react";
import chuds from './images/Screenshot 2024-05-09 at 6.02.34 PM.png'

const Projects = () => {
  return (
    <div className="Projects">
      <div className="Projects-content">
        <h1>Welcome to my Projects page!</h1>
        <div className="card-container">
          <div className="card">
            <img src={chuds} alt="Project 1" />
            <div className="card-content">
              <h2>Chuds</h2>
              <p>Description of Project 1</p>
            </div>
          </div>
          <div className="card">
            <img src='' alt="Project 2" />
            <div className="card-content">
              <h2>Project 2</h2>
              <p>Description of Project 2</p>
            </div>
          </div>
          <div className="card">
            <img src='' alt="Project 3" />
            <div className="card-content">
              <h2>Project 3</h2>
              <p>Description of Project 3</p>
            </div>
          </div>
          <div className="card">
            <img src='' alt="Project 4" />
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
