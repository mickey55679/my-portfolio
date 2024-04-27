import React, { useState, useEffect, useCallback } from "react";
function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      url: "https://cdn.pixabay.com/photo/2017/08/07/08/23/sea-2601374_1280.jpg",
      alt: "Slide 1",
    },
    {
      url: "https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_1280.jpg",
      alt: "Slide 2",
    },
    {
      url: "https://cdn.pixabay.com/photo/2020/02/16/07/55/beach-4852830_1280.jpg",
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
      <div className="box">
        <p>My name is Michaiah, it is nice to meet you! </p>
      </div>
      <h2 className="background-size"> </h2>
    </div>
  );
}

export default Slideshow;
