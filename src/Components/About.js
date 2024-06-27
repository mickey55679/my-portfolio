import React from "react";
import imageOfMe from "./images/Me.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faCss3,
  faHtml5,
  faJs,
} from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="flex flex-col items-center mb-8">
        <img
          src={imageOfMe}
          alt="imageOfMe"
          className="rounded-full w-40 h-40 mb-4"
        />
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Skills</h3>
          <div className="flex space-x-4 justify-center">
            <FontAwesomeIcon
              icon={faReact}
              style={{ color: "teal" }}
              className="text-4xl"
            />
            <FontAwesomeIcon
              icon={faCss3}
              style={{ color: "teal" }}
              className="text-4xl"
            />
            <FontAwesomeIcon
              icon={faHtml5}
              style={{ color: "teal" }}
              className="text-4xl"
            />
            <FontAwesomeIcon
              icon={faJs}
              style={{ color: "teal" }}
              className="text-4xl"
            />
          </div>
        </div>
      </div>
      <div className="text-center max-w-2xl">
        <h2 className="text-3xl font-bold mb-4">Michaiah Bos</h2>
        <h3 className="text-xl font-medium mb-4">Software Engineer</h3>
        <p className="text-lg mb-4">
          As an accomplished professional with extensive experience spanning
          healthcare, real estate, and insurance industries, I recently
          broadened my expertise into Full Stack Development through{" "}
          <a
            href="https://www.bloomtech.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "coral", textDecoration: "none" }}
          >
            BloomTech
          </a>
          . Proficient in JavaScript, HTML, CSS, and React, I have successfully
          navigated various coding challenges and actively contributed to
          collaborative projects. Refining both my problem-solving capabilities
          and teamwork skills, my diverse professional background uniquely
          positions me to offer a multifaceted perspective in technology.
        </p>
        <p className="text-lg">
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
