import React, { useState, useEffect, useCallback } from "react";

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      url: "https://cdn.pixabay.com/photo/2014/06/04/16/44/calf-362170_1280.jpg",
      alt: "Cow image",
    },
    {
      url: "https://cdn.pixabay.com/photo/2014/06/18/13/56/tractor-371250_1280.jpg",
      alt: "Tractor",
    },
    {
      url: "https://cdn.pixabay.com/photo/2022/02/28/15/28/animals-7039472_1280.jpg",
      alt: "Brown cow",
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
    <div className="flex flex-col items-center justify-center min-h-screen pt-24">
      {" "}
      {/* Adjust pt-24 for top padding */}
      {/* Heading */}
      <div className="text-4xl xxs:text-3xl font-cormorant font-medium text-center">
        Hello
        <span className="inline-block animate-wave transform-origin-bottom-center">
          👋🏼
        </span>
        ,
      </div>
      {/* Subtext */}
      <p className="text-3xl mt-4 xxs:text-2xl text-center">
        I'm a full-stack software engineer based in the United States.
      </p>
      {/* Slideshow Container */}
      <div className="flex justify-center items-center w-full mt-8">
        <div
          className="w-[80%] max-w-[900px] h-[60vh] bg-center bg-cover rounded-lg overflow-hidden border-2 border-thirdGreen"
          style={{
            backgroundImage: `url(${slides[currentSlide].url})`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default Slideshow;
