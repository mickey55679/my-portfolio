import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; // Correct import for LinkedIn icon

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <a
          href="https://github.com/mickey55679"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/michaiahbos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          
        </a>
      </div>
    </footer>
  );
};

export default Footer;
