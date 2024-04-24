import React from "react";

const Homepage = () => {
  console.log("Rendering Homepage");
  return (
    <div>
      <div className="homepage-content">
        <h1>Welcome to My Website!!!!{console.log("can you see me?")}</h1>
        <p>This is the homepage content.</p>
      </div>
    </div>
  );
};

export default Homepage;
