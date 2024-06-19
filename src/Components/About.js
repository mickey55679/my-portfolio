import React from "react";
import imageOfMe from "./images/Me.jpg";

function About() {
  return (
    <div>
      <div className="About-content">
        <h2>Michaiah Bos</h2>
        <div className="image-div">
          <img src={imageOfMe} alt="imageOfMe" />
        </div>
        <h3>Software Engineer</h3>
        <div className="About-paragraph">
          <p>
            As an accomplished professional with extensive experience spanning
            healthcare, real estate, and insurance industries, I recently
            broadened my expertise into Full Stack Development through {" "}
            <a
              href="https://www.bloomtech.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "coral", textDecoration: "none" }}
            >
              BloomTech.
            </a>{" "}
            Proficient in JavaScript, HTML, CSS, and React, I have successfully
            navigated various coding challenges and actively contributed to
            collaborative projects, Refining both my problem-solving
            capabilities and teamwork skills. My diverse professional background
            uniquely positions me to offer a multifaceted perspective in
            technology. Beyond coding, I am actively involved in our family
            farm, where I integrate traditional values with modern technological
            innovation. I am eager to leverage my development skills in
            practical applications and establish connections with like-minded
            professionals. Feel free to reach out so we can brainstorm build something awesome together!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
