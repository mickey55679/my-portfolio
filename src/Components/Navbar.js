import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import myLogo from "./images/1-removebg-preview.png"; 

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > lastScrollTop && scrollTop > 0) {
        setIsScrolling(true);
        setIsVisible(false);
      } else {
        setIsScrolling(false);
        setIsVisible(true);
      }
      setLastScrollTop(scrollTop);
    };

    const debouncedHandleScroll = debounce(handleScroll, 200);

    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [lastScrollTop]);

  const debounce = (func, delay) => {
    let timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, arguments);
      }, delay);
    };
  };

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDropdownToggle = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <nav
      className={`navbar fixed top-0 left-0 w-full flex justify-between items-center px-4 md:px-8 transition-all duration-300 z-50 ${
        isScrolling ? "bg-primary-color" : ""
      } ${isVisible ? "visible" : "invisible"}`}
    >
      <div className="logo">
        <Link to="/" onClick={() => smoothScroll("home")}>
          <img src={myLogo} alt="logo" />
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
