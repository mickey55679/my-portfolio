import React from "react";
import { Link } from "react-scroll";
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
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
