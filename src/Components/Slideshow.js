import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentWord, setCurrentWord] = useState("Software Engineer"); 
  const navigate = useNavigate();
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


  const words = ["am a Software Engineer", " a dreamer", "am an artist"]; 

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

    useEffect(() => {
      const wordTimer = setInterval(() => {
        setCurrentWord((prevWord) => {
          const nextWordIndex = (words.indexOf(prevWord) + 1) % words.length;
          return words[nextWordIndex];
        });
      }, 3000);
      return () => clearInterval(wordTimer);
    }, []);
 

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
      <div className="box" onClick={() => navigate("./about")}>
        <p>My name is Michaiah, I  {currentWord} </p>
        <p>Click here to get to know me 😄</p>

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
      <h2 className="background-size"> </h2>
    </div>
  );
}

export default Slideshow;
