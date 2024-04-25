import React, { useState, useEffect } from "react";
import image from "../images/tiger-8436227_1280.webp";
import secondImg from "../images/ai-generated-8692405_1280.webp";

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { url: image, alt: "Slide 1" },
    { url: secondImg, alt: "Slide 2" },
  ];

  useEffect(() => {
    // Set up a timer for slide change
    const timer = setInterval(() => {
      // Increment the index to show the next slide
      plusSlides(1);
    }, 5000); // Change image every 5000 milliseconds (5 seconds)

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, [currentSlide]); // Re-run the effect if currentSlide changes

  const plusSlides = (n) => {
    let newSlideIndex = currentSlide + n;
    if (newSlideIndex >= slides.length) {
      newSlideIndex = 0;
    } else if (newSlideIndex < 0) {
      newSlideIndex = slides.length - 1;
    }
    setCurrentSlide(newSlideIndex);
  };

  return (
    <div className="slideshow-container">
      {/* Displaying only the active slide */}
      <div className="mySlides">
        <img src={slides[currentSlide].url} alt={slides[currentSlide].alt} />
      </div>
    </div>
  );
}

export default Slideshow;
