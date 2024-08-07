import React from "react";
import imageOfMe from "./images/me.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faCss3,
  faHtml5,
  faJs,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  const underlineStyle = {
    position: "relative",
  };

  const underlineBorderStyle = {
    content: "",
    position: "absolute",
    bottom: "-2px",
    left: "0",
    width: "100%",
    height: "2px",
    backgroundColor: "var(--primary-color)",
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="transparent-box p-4 md:p-8">
        <div className="flex flex-col items-center mb-3">
          <img
            src={imageOfMe}
            alt="imageOfMe"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-0"
          />
        </div>

        <h2 className="my-name">Michaiah Bos</h2>
        <div className="text-center my-4">
          <div className="flex space-x-4 justify-center">
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faReact}
                className="custom-icon text-3xl md:text-4xl"
              />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faCss3}
                className="custom-icon text-3xl md:text-4xl"
              />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faHtml5}
                className="custom-icon text-3xl md:text-4xl"
              />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faJs}
                className="custom-icon text-3xl md:text-4xl"
              />
            </a>
          </div>
          <h3
            className="career-title text-lg md:text-xl"
            style={underlineStyle}
          >
            Software Engineer
            <span style={underlineBorderStyle}></span>
          </h3>
        </div>
        <p className="text-base md:text-lg mb-4">
          As an accomplished professional with extensive experience spanning
          healthcare, real estate, and insurance industries, I recently
          broadened my expertise into Full Stack Development through{" "}
          <a
            href="https://www.bloomtech.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--pink-color)", textDecoration: "underline" }}
            className="text-coral"
          >
            BloomTech
          </a>
          . Proficient in JavaScript, HTML, CSS, and React, I have successfully
          navigated various coding challenges and actively contributed to
          collaborative projects. Refining both my problem-solving capabilities
          and teamwork skills, my diverse professional background uniquely
          positions me to offer a multifaceted perspective in technology.
        </p>
        <p className="text-base md:text-lg">
          Beyond coding, I am actively involved in our family farm, where I
          integrate traditional values with modern technological innovation. I
          am eager to leverage my development skills in practical applications
          and establish connections with like-minded professionals. Feel free to
          reach out so we can brainstorm and build something awesome together!
        </p>
      </div>
    </div>
  );
}

export default About;
