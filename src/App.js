import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import ScrollButton from "./ScrollButton.js";
import Testimonials from "./Components/Testimonials.js";
import { Homepage, About, ContactForm, Footer, Blog } from "./Components/index.js";
import "./App.css";
import "./index.css";
import Carousel from "./Components/Carousel.js";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header" data-testid="navbar">
          <Navbar />
        </header>
        <main>
          <div className="section" id="home" data-testid="homepage">
            <Homepage />
          </div>
          <div className="section" id="about" data-testid="about">
            <About />
          </div>
          <div className="section" id="projects">
            <h2 className="welcome-to-projects">
              Welcome to my projects section
            </h2>
            <div className="section" data-testid="carousel">
              <Carousel />
            </div>
          </div>
          <div className="section" id="testimonials" data-testid="testimonials">
            <h2 className="what-ppl-say">What people are saying</h2>
            <Testimonials />
          </div>
          <div className="section" id="contact" data-testid="contactForm">
            <ContactForm />
          </div>
          <div className="section" id="blog" data-testid="blog">
            <Blog />
          </div>
          <ScrollButton />
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
