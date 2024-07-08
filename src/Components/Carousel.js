import React, { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import asylumImg from "./images/asylum.png";
import myPortfolio from "./images/myportfolio.png";
import chuds from "./images/chudslg.png";
import ktArtistry from "./images/ktartistrylg.png";

const CARDS = [
  {
    title: "Asylum Project",
    description: "#HTML #CSS #React",
    githubUrl: "https://github.com/mickey55679/asylum-rg-fe-starter",
    imageUrl: asylumImg,
    loomUrl: "https://loom.com/share/folder/36e7bf8bc4a149d79120b1f7b414b0eb",
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

const MAX_VISIBILITY = 4;

const Carousel = () => {
  const [active, setActive] = useState(2);

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <div className="w-full h-[70vh] flex items-center justify-center overflow-hidden font-montserrat xs-375:h-[50vh] xs-414:h-[60vh] xs-360:h-[40vh] xs-344:h-[30vh]">
      <div className="relative w-[30rem] h-[30rem] xs-375:w-[18rem] xs-375:h-[18rem] xs-414:w-[23rem] xs-414:h-[23rem] xs-360:w-[16rem] xs-360:h-[16rem] xs-344:w-[15rem] xs-344:h-[15rem]">
        {active > 0 && (
          <button
            className="text-white text-5xl absolute flex items-center justify-center top-1/2 z-10 cursor-pointer bg-transparent border-none transform -translate-x-full -translate-y-1/2 left-0 xs-375:text-3xl"
            onClick={() => handleClick(active - 1)}
            style={{
              backgroundColor: "#22313f",
              border: "1px solid #c1ff72",
              borderRadius: "50%",
              padding: "0.5rem",
              transition: "background-color 0.3s",
            }}
          >
            <TiChevronLeftOutline />
          </button>
        )}
        {CARDS.map((card, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-all duration-300 ease-out ${
              index === active ? "z-10" : "z-[9]"
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
                color: "#669999",
              }}
            >
              <h2 className="text-center text-2xl font-bold xs-375:text-xl">
                {card.title}
              </h2>
              <img
                className="w-full max-w-[50%] h-[60%] object-cover xs-375:max-w-[40%] xs-375:h-[30%]"
                src={card.imageUrl}
                alt={card.title}
              />
              <p className="my-4 text-lg xs-375:text-xs">{card.description}</p>
              {card.loomUrl && (
                <a
                  href={card.loomUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-[#22313f] text-lg xs-375:text-xs"
                  style={{
                    marginTop: "4px",
                    fontSize: "14px",
                    color: "#22313f",
                    textDecoration: "none",
                    transition: "color 0.3s, text-decoration 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#FFC0CB";
                    e.currentTarget.style.textDecoration = "underline";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#22313f";
                    e.currentTarget.style.textDecoration = "none";
                  }}
                >
                  View Loom video(s)
                </a>
              )}
              <a
                href={card.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-[#22313f] text-lg xs-375:text-xs"
                style={{
                  marginTop: "4px",
                  fontSize: "14px",
                  color: "#22313f",
                  textDecoration: "none",
                  transition: "color 0.3s, text-decoration 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#FFC0CB";
                  e.currentTarget.style.textDecoration = "underline";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#22313f";
                  e.currentTarget.style.textDecoration = "none";
                }}
              >
                <FontAwesomeIcon icon={faGithub} />
                View on Github
              </a>
            </div>
          </div>
        ))}
        {active < CARDS.length - 1 && (
          <button
            className="text-white text-5xl absolute flex items-center justify-center top-1/2 z-10 cursor-pointer bg-transparent border-none transform translate-x-full -translate-y-1/2 right-0 xs-375:text-3xl"
            onClick={() => handleClick(active + 1)}
            style={{
              backgroundColor: "#22313f",
              border: "2px solid #c1ff72",
              borderRadius: "50%",
              padding: "0.5rem",
              transition: "background-color 0.3s",
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
