import React, { useState, useEffect, useCallback } from "react";
import image from "../images/harvest-8118900_1280.jpg";
import secondImg from "../images/wheat-8087042_1280.webp";
import thirdImg from "../images/cow-6992475_1280.jpg"

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { url: image, alt: "Slide 1" },
    { url: secondImg, alt: "Slide 2" },
    {url: thirdImg, alt: 'Slide 3'},
  ];

  const plusSlides = useCallback(
    (n) => {
      let newSlideIndex = currentSlide + n;
      if (newSlideIndex >= slides.length) {
        newSlideIndex = 0;
      } else if (newSlideIndex < 0) {
        newSlideIndex = slides.length - 1;
      }
      setCurrentSlide(newSlideIndex);
    },
    [currentSlide, slides.length]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      plusSlides(1);
    }, 7000);
    return () => clearInterval(timer);
  }, [plusSlides]); 

  return (
    <div className="slideshow-container">
      <div className="mySlides">
        <img src={slides[currentSlide].url} alt={slides[currentSlide].alt} />
      </div>
    </div>
  );
}

export default Slideshow;
