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
    <div className="top-page">
      <div> Hello 👋🏼, </div>
      <p>I'm a full-stack software engineer based in the United States.</p>
      <div className="slideshow-wrapper">
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
            <p>Click here to get to know me!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
