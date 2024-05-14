import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const slides = [
    {
      url: "https://cdn.pixabay.com/photo/2016/04/13/09/19/curious-1326327_1280.jpg",
      alt: "Slide 1",
    },
    {
      url: "https://cdn.pixabay.com/photo/2014/06/18/13/56/tractor-371250_1280.jpg",
      alt: "Slide 2",
    },
    {
      url: "https://cdn.pixabay.com/photo/2014/07/06/17/20/tractor-385681_1280.jpg",
      alt: "Slide 3",
    },
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
    <div
      className="slideshow-container"
      style={{
        backgroundImage: `url(${slides[currentSlide].url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "black",
      }}
    >
      <div className="box-slideshow" onClick={() => navigate("./about")}>
        <p> Welcome to my website!</p>
        <p>My name is Michaiah Bos,</p>
        <p>I am a full-stack software engineer based in the United States.</p>
        <p>Click here to get to know me!</p>

        <div className="arrow-container">
          <svg viewBox="0 0 50 100" className="arrow">
            <path fill="lightseagreen" d="M0 0 L25 50 L0 100 Z" />
          </svg>
          <svg viewBox="0 0 50 100" className="arrow">
            <path fill="#20B2AA" d="M0 0 L25 50 L0 100 Z" />
          </svg>
          <svg viewBox="0 0 50 100" className="arrow">
            <path fill="#1E9D97" d="M0 0 L25 50 L0 100 Z" />
          </svg>
        </div>
      </div>
      <h2 className="background-size-slideshow"> </h2>
    </div>
  );
}

export default Slideshow;
