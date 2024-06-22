import React from "react";
import imageOfMe from "./images/Me.jpg";


function About() {
  return (
    <div className="container">
      <div className="image-div">
        <img src={imageOfMe} alt="imageOfMe" />
      </div>
      <div className="content">
        <h2>Michaiah Bos</h2>
        <h3>Software Engineer</h3>
        <p>
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
        <p>
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
