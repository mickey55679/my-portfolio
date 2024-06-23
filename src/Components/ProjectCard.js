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
            <li key={index}>{contribution}</li>
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

export default ProjectCard;
