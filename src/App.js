import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import {
  Homepage,
  About,
  Projects,
  ContactForm,
  Footer,
  Navbar,
} from "./Components/index.js";
import ScrollToTopOnRouteChange from "./Components/ScrollToTopOnRouteChange.js";
import ScrollToTop from "./Components/ScrollToTop.js";
import "./App.css";

function App() {
  const [isNight, setIsNight] = useState(false);

  const handleToggle = () => {
    setIsNight(!isNight);
  };

  return (
    <Router>
      <ScrollToTopOnRouteChange />
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
          <div className="section" id="home">
            <Homepage />
          </div>
          <div className="section" id="about">
            <About />
          </div>
          <div className="section" id="projects">
            <Projects />
          </div>
          <div className="section" id="contact">
            <ContactForm />
          </div>
          <Footer />
        </main>
        <ScrollToTop />
     
      </div>
    </Router>
  );
}

export default App;
