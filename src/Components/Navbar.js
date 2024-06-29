import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import myLogoLight from "./images/1.png";
import myLogoDark from "./images/2.png";

const Navbar = ({ isNight }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const handleDropdownToggle = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar bg-primary-color fixed top-0 left-0 w-full flex justify-between items-center px-4 md:px-8 transition-colors duration-300 z-50">
      <div className="logo">
        <Link to="/" onClick={() => smoothScroll("home")}>
          <img src={isNight ? myLogoDark : myLogoLight} alt="logo" />
        </Link>
      </div>
      <div className="menu-icon" onClick={handleDropdownToggle}>
        <FontAwesomeIcon icon={isDropdownVisible ? faTimes : faBars} />
      </div>
      <ul className={`nav-links ${isDropdownVisible ? "visible" : ""}`}>
        <li className="menu-icon" onClick={handleDropdownToggle}>
          <FontAwesomeIcon icon={faTimes} />
        </li>
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
          <Link to="/" onClick={() => smoothScroll("testimonials")}>
            Testimonials
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
