import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import asylumImg from "./images/screenshot.png";
import myPortfolio from "./images/Screenshot 2024-07-01 at 7.08.28 PM.png";
import chuds from "./images/chudslg.png";
import ktArtistry from "./images/ktartistrylg.png";

const CARDS = [
  {
    title: "Asylum Project",
    description: "#HTML #CSS #React",
    githubUrl: "https://github.com/mickey55679/asylum-rg-fe-starter",
    imageUrl: asylumImg,
    loomUrl: "https://loom.com/share/folder/36e7bf8bc4a149d79120b1f7b414b0eb", // Loom video link
  },
  {
    title: "Chuds",
    description: "#HTML #CSS #React",
    githubUrl: "https://github.com/mickey55679/chuds",
    imageUrl: chuds,
  },
  {
    title: "Kt-artistry",
    description: "#HTML #CSS #React",
    githubUrl: "https://github.com/mickey55679/kt-artistry",
    imageUrl: ktArtistry,
  },
  {
    title: "my-portfolio",
    description: "#HTML #CSS #React #Jest #Tailwindcss",
    githubUrl: "https://github.com/mickey55679/my-portfolio",
    imageUrl: myPortfolio,
  },
];

const MAX_VISIBILITY = 3;

const Carousel = () => {
  const [active, setActive] = useState(2);

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <div className="w-full h-[70vh] flex items-center justify-center overflow-hidden font-montserrat md:h-[80vh] sm:h-[60vh] xs:h-[50vh]">
      <div className="relative w-[23rem] h-[23rem] perspective-[500px] transform-style-[preserve-3d] md:w-[30rem] md:h-[30rem] sm:w-[23rem] sm:h-[23rem] xs:w-[18rem] xs:h-[18rem] xxs:w-[13rem] xxs:h-[13rem]">
        {active > 0 && (
          <button
            className="text-white text-5xl absolute flex items-center justify-center top-1/2 z-10 cursor-pointer bg-transparent border-none transform -translate-x-full -translate-y-1/2 left-0 sm:text-4xl xs:text-3xl"
            onClick={() => handleClick(active - 1)}
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "50%",
              padding: "0.5rem",
            }}
          >
            <TiChevronLeftOutline />
          </button>
        )}
        {CARDS.map((card, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-all duration-300 ease-out ${
              index === active ? "z-10" : "z-[9]" // Adjust z-index for active and non-active cards
            }`}
            style={{
              "--offset": (active - index) / 3,
              "--direction": Math.sign(active - index),
              "--abs-offset": Math.abs(active - index) / 3,
              "pointer-events": active === index ? "auto" : "none",
              opacity: Math.abs(active - index) >= MAX_VISIBILITY ? "0" : "1",
              display:
                Math.abs(active - index) > MAX_VISIBILITY ? "none" : "block",
              transform: `rotateY(calc(var(--offset) * 50deg)) scaleY(calc(1 + var(--abs-offset) * -0.4)) translateZ(calc(var(--abs-offset) * -30rem)) translateX(calc(var(--direction) * -5rem))`,
              filter: `blur(calc(var(--abs-offset) * 1rem))`,
            }}
          >
            <div
              className="relative w-full h-full p-8 rounded-lg text-justify transition-all duration-300 ease-out flex flex-col justify-center items-center"
              style={{
                backgroundColor: `hsl(95, 100%, calc(100% - var(--abs-offset) * 50%))`,
                color: "#669999", // Tertiary color in hex
              }}
            >
              <h2 className="text-center text-2xl font-bold sm:text-1.5xl xs:text-1.2xl">
                {card.title}
              </h2>
              <img
                className="w-full max-w-[70%] h-[60%] object-cover sm:max-w-[60%] sm:h-[50%] xs:max-w-[50%] xs:h-[40%]"
                src={card.imageUrl}
                alt={card.title}
              />
              <p className="my-4 text-lg sm:text-sm xs:text-xs">
                {card.description}
              </p>
              {card.loomUrl && (
                <a
                  href={card.loomUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-#22313f text-lg sm:text-sm xs:text-xs hover:text-#ff69b4 hover:underline"
                >
                  View Loom video(s)
                </a>
              )}
              <a
                href={card.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-#22313f text-lg sm:text-sm xs:text-xs hover:text-#ff69b4 hover:underline"
              >
                <FontAwesomeIcon icon={faGithub} />
                View on Github
              </a>
            </div>
          </div>
        ))}
        {active < CARDS.length - 1 && (
          <button
            className="text-white text-5xl absolute flex items-center justify-center top-1/2 z-10 cursor-pointer bg-transparent border-none transform translate-x-full -translate-y-1/2 right-0 sm:text-4xl xs:text-3xl"
            onClick={() => handleClick(active + 1)}
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "50%",
              padding: "0.5rem",
            }}
          >
            <TiChevronRightOutline />
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
