import React from "react";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Michaiah Bos</h2>
        <p>Software Engineer</p>
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
