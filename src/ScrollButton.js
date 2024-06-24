import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";


const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <div
      className={`scroll-to-top ${visible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <FaArrowCircleUp />
    </div>
  );
};

export default ScrollButton;
