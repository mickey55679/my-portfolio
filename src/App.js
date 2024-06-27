import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Components/Navbar.js";
import ScrollButton from "./ScrollButton.js";
import Testimonials from "./Components/Testimonials.js";
import {
  Homepage,
  About,
  ContactForm,
  Footer,
} from "./Components/index.js";
import "./App.css";
import ProjectList from "./Components/ProjectList.js"; 

function App() {
  const [isNight, setIsNight] = useState(false);

  const handleToggle = () => {
    setIsNight(!isNight);
  };

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
          <div className="section" id="home">
            <Homepage />
          </div>
          <div className="section" id="about">
            <About />
          </div>
          <div className="section" id="projects">
            <h2 className="welcome-to-projects">
              Welcome to my projects section
            </h2>
            <div className="section">
              <ProjectList />
            </div>
          </div>
          <div className="section" id="testimonials">
            <h2 className="what-ppl-say">What people are saying</h2>
            <Testimonials />
          </div>
          <div className="section" id="contact">
            <ContactForm />
          </div>
          <ScrollButton />
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
