import React from "react";
import { NavLink } from "react-router-dom";
import myLogo from "./images/logomb.png"


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img src={myLogo} alt="logo" />
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
            About
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
