import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-to-top">
      <button className="scroll-button" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faAngleUp} />
      </button>
    </div>
  );
};

export default ScrollToTop;
