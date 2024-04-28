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
        <p>this is a paragraph</p>
      </div>
    </div>
  );
}

export default About;
