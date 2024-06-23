import React from "react";
import { Link } from "react-router-dom";
import myLogoLight from "./images/logomb.png";
import myLogoDark from "./images/logo2.0.png";

const Navbar = ({ isNight }) => {
  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={() => smoothScroll("home")}>
          <img src={isNight ? myLogoDark : myLogoLight} alt="logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" onClick={() => smoothScroll("home")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => smoothScroll("about")}>
            About
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => smoothScroll("projects")}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => smoothScroll("contact")}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
