import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Homepage,
  Navbar,
  About,
  Projects,
  ContactForm,
  Footer,
} from "./Components/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [isNight, setIsNight] = useState(false);

  const handleToggle = () => {
    setIsNight(!isNight);
  };

  useEffect(() => {
    if (isNight) {
      document.body.classList.add("night");
      document.documentElement.classList.add("night"); // Add to <html> as well
    } else {
      document.body.classList.remove("night");
      document.documentElement.classList.remove("night"); // Remove from <html> as well
    }
  }, [isNight]);

  return (
    <Router>
      <div className={`App ${isNight ? "night" : "day"}`}>
        <header className="App-header">
          <Navbar isNight={isNight} />
          <div className="toggle-container">
            <input
              type="checkbox"
              id="dn-toggle"
              className="dn-toggle"
              checked={isNight}
              onChange={handleToggle}
            />
            <label htmlFor="dn-toggle" className="dn-toggle-label">
              <FontAwesomeIcon
                icon={faSun}
                color={isNight ? "#666" : "yellow"}
              />
              <FontAwesomeIcon
                icon={faMoon}
                color={isNight ? "white" : "#666"}
              />
            </label>
          </div>
        </header>
        <main>
          <div id="home">
            <Homepage />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="contact">
            <ContactForm />
          </div>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
