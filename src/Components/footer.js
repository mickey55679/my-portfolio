import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"; 
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import certificate from "../Components/images/Certificate.png";
import sheCodesCertificate from '../Components/images/sheCodes.png'


const Footer = () => {
  return (
    <footer className="footer-bar">
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
        <a href={certificate} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faCertificate} />
        </a>
        <a href={sheCodesCertificate} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faCertificate} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
