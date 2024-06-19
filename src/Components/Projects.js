import React from "react";



const Projects = () => {
  return (
    <div className="Projects">
      <div className="Projects-content">
        <h1>Welcome to my Projects page!</h1>
        <div className="card-container">
          <div className="card">
            <a
              href="https://github.com/mickey55679/chuds"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src='' alt="Chuds" />
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
              <div className="card-content">
                <h2>Asylum-rg-fe-starter</h2>
                <p>Role: Full Stack Developer (React|Node|Auth0|CSS) </p>
                <h3>Project Overview</h3>
                <p>
                  Developed and enhanced a React application by implementing a
                  landing page, integrating API data visualizations, and
                  establishing user authentication with Auth0.
                </p>
                <h3>key Contributions:</h3>
                <li>
                  Ticket One: Delivered a landing page that closely matches the
                  provided design screenshot. Made minor style adjustments to
                  improve the overall look and feel while maintaining the
                  original design integrity. Relevant Files:
                  RenderLandingPage.jsx for React code, RenderLandingPage.less
                  for styles. Integrated Frontend with API for Data
                  Visualization.
                </li>
                <a
                  href="https://www.loom.com/share/c1a0c460313d4f7590354dd0d6153ef5?sid=e9629209-a63d-4d15-b02c-e62f0b5e0fdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-link"
                >
                  Loom video
                </a>
                <li>
                  Ticket Two: Reworked the GraphWrapper.jsx file to replace the
                  static test_data.json with dynamic data fetched from an API.
                  Ensured that the graphs on the Graphs page display accurate
                  data post-integration. Relevant Files: Inspected and modified
                  code in src/components/pages/DataVisualizations, src/data, and
                  src/state. Established User Authentication with Auth0.
                </li>
                <a
                  href="https://www.loom.com/share/3d9ac0caff164c42935e0ad7856cdc90?sid=b3d9453e-da62-4590-96f5-e40d1b7aa50f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-link"
                >
                  Watch Video Two
                </a>
                <li>
                  Ticket Three: Followed the Auth0 guide to integrate
                  authentication, ensuring compatibility with the existing
                  project setup. Created a login/logout flow using Auth0's
                  services. Developed a profile page that dynamically displays
                  user information using the useAuth0() hook. Relevant Guides:
                  Utilized the Auth0 Complete Guide to React User Authentication
                  with a focus on the older version for compatibility.
                  Additional Contributions:
                </li>
                <a
                  href="https://www.loom.com/share/1940f1b1c6fc4e5aa3bdcf982750087d?sid=88278a8f-f7ae-4f64-b013-d93561c77db0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-link"
                >
                  Watch Video Three
                </a>
                <h3>Impact:</h3>
                <li>
                  Enhanced User Experience: The newly implemented landing page
                  significantly improved user engagement and first impressions
                  by closely aligning with the design specifications and
                  ensuring a polished look and feel.
                </li>
                <li>
                  Data Accuracy and Relevance: By integrating dynamic data
                  fetching for the graphs, users now interact with up-to-date
                  and accurate visual information, which enhances the
                  application's reliability and utility.
                </li>
                <li>
                  Secure and Seamless Authentication: The integration of Auth0
                  for authentication provided a robust and secure login system,
                  improving user trust and security. The addition of a dynamic
                  profile page personalized the user experience, fostering a
                  deeper connection with the application.
                </li>
                <li>
                  Increased Project Efficiency: Through careful inspection and
                  modification of existing code, the project saw improvements in
                  performance and maintainability, facilitating easier future
                  enhancements and updates.
                </li>
              </div>
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
