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
              <p>Role: Full Stack Developer (React|Node|Jest|Canva) </p>
              <h3>Project Overview</h3>
              <p>
                Developed a comprehensive online ordering platform for Chuds,
                aiming to significantly enhance the company's digital presence
                and operational efficiency.
              </p>
              <h3>key Contributions:</h3>
              <li>
                Frontend Development: Utilized React to create an intuitive and
                responsive user interface.
              </li>
              <li>
                Backend Development: Leveraged Node.js to build robust backend
                services, ensuring seamless integration with the frontend
              </li>
              <li>
                Testing: Implemented rigorous testing protocols using Jest to
                ensure the reliability and performance of the platform.
              </li>
              <li>
                Design: Employed Canva for design elements to enhance the user
                experience.
              </li>
              <h3>Impact:</h3>
              <li>
                Streamlined the order process, improving customer satisfaction
                and operational efficiency.
              </li>
              <li>
                Enhanced the company's digital presence, driving increased
                online engagement and sales.
              </li>
            </div>
          </div>
          <div className="card">
            <a
              href="https://github.com/mickey55679/asylum-rg-fe-starter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="" alt="asyum-rg-fe-starter" />
            </a>
            <div className="card-content">
              <h2>asyum-rg-fe-starter</h2>
              <p>watch</p>
              <a
                href="https://www.loom.com/share/c1a0c460313d4f7590354dd0d6153ef5?sid=e9629209-a63d-4d15-b02c-e62f0b5e0fdf"
                target="_blank"
                rel="noopener noreferrer"
                className="video-link"
              >
                Watch Video One
              </a>
              <a
                href="https://www.loom.com/share/3d9ac0caff164c42935e0ad7856cdc90?sid=b3d9453e-da62-4590-96f5-e40d1b7aa50f"
                target="_blank"
                rel="noopener noreferrer"
                className="video-link"
              >
                Watch Video Two
              </a>
              <a
                href="https://www.loom.com/share/1940f1b1c6fc4e5aa3bdcf982750087d?sid=88278a8f-f7ae-4f64-b013-d93561c77db0"
                target="_blank"
                rel="noopener noreferrer"
                className="video-link"
              >
                Watch Video Three
              </a>
            </div>
          </div>
          <div className="card">
            <a
              href="http://www.project3website.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="" alt="Project 3" />
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
              <img src="" alt="Project 4" />
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
