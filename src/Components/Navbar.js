import React from "react";
import image from "../../src/images/Michaiah Bos.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={image} alt="Michaiah Bos Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
