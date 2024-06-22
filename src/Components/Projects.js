import React from "react";

const ProjectCard = ({
  href,
  imgSrc,
  altText,
  title,
  role,
  overview,
  contributions,
  impact,
  videoLinks,
}) => {
  return (
    <div className="card">
      {imgSrc && (
        <div className="card-image">
          <img src={imgSrc} alt={altText} />
        </div>
      )}
      <div className="card-content">
        <h2>{title}</h2>
        <p>
          <strong>Role:</strong> {role}
        </p>
        <h3>
          <strong>Project Overview</strong>
        </h3>
        <p>{overview}</p>
        <h3>
          <strong>Key Contributions:</strong>
        </h3>
        <ul className="contributions-list">
          {contributions.map((contribution, index) => (
            <li key={index}>
              {contribution.startsWith("Ticket") ? (
                <span style={{ fontWeight: "bold" }}>
                  {contribution.split(": ")[0]}:{" "}
                </span>
              ) : (
                ""
              )}
              {contribution.substr(contribution.indexOf(": ") + 2)}
            </li>
          ))}
        </ul>
        {videoLinks && (
          <div className="video-links">
            {videoLinks.map((link, index) => (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                {link.text}
              </a>
            ))}
          </div>
        )}
        <h3>
          <strong>Impact:</strong>
        </h3>
        <ul className="impact-list">
          {impact.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <div className="link-buttons">
          <a href={href} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="Projects">
      <div className="Projects-content">
        <h1>Welcome to my Projects page!</h1>
        <div className="card-container">
          <ProjectCard
            href="https://github.com/mickey55679/asylum-rg-fe-starter"
            imgSrc="https://cdn.pixabay.com/photo/2023/03/08/23/21/books-7838952_1280.jpg"
            altText="Asylum-rg-fe-starter"
            title="Asylum-rg-fe-starter"
            role="Full Stack Developer (React|Node|Auth0|CSS)"
            overview="Developed and enhanced a React application by implementing a landing page, integrating API data visualizations, and establishing user authentication with Auth0."
            contributions={[
              "Ticket One: Delivered a landing page that closely matches the provided design screenshot. Made minor style adjustments to improve the overall look and feel while maintaining the original design integrity. Relevant Files: RenderLandingPage.jsx for React code, RenderLandingPage.less for styles. Integrated Frontend with API for Data Visualization.",
              "Ticket Two: Reworked the GraphWrapper.jsx file to replace the static test_data.json with dynamic data fetched from an API. Ensured that the graphs on the Graphs page display accurate data post-integration. Relevant Files: Inspected and modified code in src/components/pages/DataVisualizations, src/data, and src/state.",
              "Ticket Three: Followed the Auth0 guide to integrate authentication, ensuring compatibility with the existing project setup. Created a login/logout flow using Auth0's services. Developed a profile page that dynamically displays user information using the useAuth0() hook. Relevant Guides: Utilized the Auth0 Complete Guide to React User Authentication with a focus on the older version for compatibility.",
            ]}
            impact={[
              "Enhanced User Experience: The newly implemented landing page significantly improved user engagement and first impressions by closely aligning with the design specifications and ensuring a polished look and feel.",
              "Data Accuracy and Relevance: By integrating dynamic data fetching for the graphs, users now interact with up-to-date and accurate visual information, which enhances the application's reliability and utility.",
              "Secure and Seamless Authentication: The integration of Auth0 for authentication provided a robust and secure login system, improving user trust and security. The addition of a dynamic profile page personalized the user experience, fostering a deeper connection with the application.",
              "Increased Project Efficiency: Through careful inspection and modification of existing code, the project saw improvements in performance and maintainability, facilitating easier future enhancements and updates.",
            ]}
            videoLinks={[
              {
                href: "https://www.loom.com/share/c1a0c460313d4f7590354dd0d6153ef5?sid=e9629209-a63d-4d15-b02c-e62f0b5e0fdf",
                text: "Loom Video One",
              },
              {
                href: "https://www.loom.com/share/3d9ac0caff164c42935e0ad7856cdc90?sid=b3d9453e-da62-4590-96f5-e40d1b7aa50f",
                text: "Loom Video Two",
              },
              {
                href: "https://www.loom.com/share/1940f1b1c6fc4e5aa3bdcf982750087d?sid=88278a8f-f7ae-4f64-b013-d93561c77db0",
                text: "Loom Video Three",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
