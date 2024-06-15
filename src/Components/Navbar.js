import React from "react";
import { NavLink } from "react-router-dom";
import myLogoLight from "./images/logomb.png";
import myLogoDark from "./images/logo2.0.png"; // Import your dark mode logo

const Navbar = ({ isNight }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img src={isNight ? myLogoDark : myLogoLight} alt="logo" />
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="active">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
