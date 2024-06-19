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
            As a seasoned professional with a unique blend of healthcare, real
            estate, and insurance experience, I recently expanded my skills to
            Full Stack Development through{" "}
            <a
              href="https://www.bloomtech.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "coral", textDecoration: "none" }}
            >
              BloomTech
            </a>
            . Proficient in JavaScript, HTML, CSS, and React, I've tackled
            numerous coding challenges and contributed to collaborative
            projects, honing my problem-solving abilities and teamwork skills.
            My diverse background enables a unique tech perspective, especially
            in industries like healthcare, real estate, and insurance, where I
            aim to drive digital transformation. When not programming, I help on
            our family farm, blending traditional values with tech innovation. I
            am keen to apply my development skills in real-world settings and
            connect with like-minded professionals. Feel free to reach out!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
