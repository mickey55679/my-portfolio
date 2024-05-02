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
        <h3> ~ Software Engineer ~</h3>
        <div className="About-paragraph">
          <p>
            I am a seasoned professional with a unique blend of healthcare, real
            estate, and insurance experience, recently broadening my skill set
            to include Full Stack Development through my studies at BloomTech.
          </p>
          <p>
            Throughout my program at BloomTech, I've gained proficiency in
            JavaScript, HTML, CSS, and React, and have applied these skills in
            numerous coding challenges and collaborative projects. These
            experiences have honed my problem-solving skills, understanding of
            web development, and ability to work as part of a diverse team.
          </p>
          <p>
            My diverse background provides me with a unique perspective in tech,
            allowing me to understand and cater to various industry needs. I am
            particularly interested in opportunities where I can leverage my
            Full Stack Development skills in the healthcare, real estate, or
            insurance sectors to drive digital transformation.
          </p>
          <p>
            In my spare time, I continue to expand my tech knowledge. I am
            currently seeking opportunities to apply my development skills in a
            real-world setting, and welcome the chance to connect with
            like-minded professionals. Feel free to reach out!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
