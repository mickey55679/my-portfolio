import React from "react";
import imageOfMe from "./images/Me.png";

function About() {
  return (
    <div>
      <div className="About-content">
        <h1>Michaiah Bos</h1>
        <div className="image-div">
          <img src={imageOfMe} alt="imageOfMe" />
        </div>
        <h3>Software Engineer</h3>
        <p>this is a paragraph</p>
      </div>
    </div>
  );
}

export default About;
