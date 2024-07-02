import React, { useState, useEffect, useCallback } from "react";




function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      url: "https://cdn.pixabay.com/photo/2016/11/29/13/21/cow-1869792_1280.jpg",
      alt: "Slide 1",
    },
    {
      url: "https://cdn.pixabay.com/photo/2014/06/18/13/56/tractor-371250_1280.jpg",
      alt: "Slide 2",
    },
    {
      url: "https://cdn.pixabay.com/photo/2022/02/28/15/28/animals-7039472_1280.jpg",
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
     
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
