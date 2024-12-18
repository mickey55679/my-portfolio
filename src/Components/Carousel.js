import React, { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import asylumImg from "./images/HRF.png";
import myPortfolio from "./images/myportfolio.png";
import chuds from "./images/chuds.png";
import ktArtistry from "./images/nailSalon.png";
import coachSite from "./images/coaching site.png";

const CARDS = [
  {
    title: "Chuds",
    description: "#HTML #CSS #React",
    githubUrl: "https://github.com/mickey55679/chuds",
    imageUrl: chuds,
    websiteUrl: null,
  },
  {
    title: "Asylum Project",
    description: "#HTML #CSS #React #Jest",
    githubUrl: "https://github.com/mickey55679/asylum-rg-fe-starter",
    imageUrl: asylumImg,
    loomUrl: "https://loom.com/share/folder/36e7bf8bc4a149d79120b1f7b414b0eb",
    websiteUrl: null,
  },
  {
    title: "Nail Salon",
    description: "#HTML #CSS #React",
    githubUrl: "https://github.com/mickey55679/kt-artistry",
    imageUrl: ktArtistry,
    websiteUrl: null,
  },
  {
    title: "Portfolio",
    description: "#HTML #CSS #React #Jest #Tailwindcss",
    githubUrl: "https://github.com/mickey55679/my-portfolio",
    imageUrl: myPortfolio,
    websiteUrl: "https://www.michaiahbossoftwareengineer.com/",
  },
  {
    title: "Coaching site",
    description: "#HTML #CSS #JavaScript",
    githubUrl: "https://github.com/mickey55679/coachwebsite",
    imageUrl: coachSite,
    websiteUrl: null,
  },
];

const MAX_VISIBILITY = 4;

const Carousel = () => {
  const [active, setActive] = useState(2);

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <div className="carousel-container">
      <div className="cards-container">
        {active > 0 && (
          <button
            className="arrow-button"
            onClick={() => handleClick(active - 1)}
            style={{
              backgroundColor: "var(--blue-color)",
              border: "2px solid var(--third-gr-color)",
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
              filter: `blur(calc(var(--abs-offset) * 2rem))`,
            }}
          >
            <div
              className="relative w-full h-full p-8 rounded-lg text-justify transition-all duration-300 ease-out flex flex-col justify-center items-center"
              style={{
                backgroundColor: `hsl(95, 100%, calc(100% - var(--abs-offset) * 50%))`,
                color: "#669999",
              }}
            >
              <h2 className="card-title">{card.title}</h2>
              {card.websiteUrl ? (
                <a
                  href={card.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-img-wrapper"
                >
                  <img
                    className="card-img"
                    src={card.imageUrl}
                    alt={card.title}
                  />
                </a>
              ) : (
                <img
                  className="card-img card-img-wrapper"
                  src={card.imageUrl}
                  alt={card.title}
                />
              )}
              <p className="custom-paragraph">{card.description}</p>
              {card.loomUrl && (
                <a
                  href={card.loomUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-[var(--blue-color)] text-lg md:text-sm sm:text-xs xs:text-xs xs-344:text-xs"
                  style={{
                    marginTop: "4px",
                    fontSize: "14px",
                    color: "var(--blue-color)",
                    textDecoration: "none",
                    transition: "color 0.3s, text-decoration 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--pink-color)";
                    e.currentTarget.style.textDecoration = "underline";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--blue-color)";
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
                className="mt-4 text-[var(--blue-color)] text-lg md:text-sm sm:text-xs xs:text-xs xs-344:text-xs"
                style={{
                  marginTop: "4px",
                  fontSize: "14px",
                  color: "var(--blue-color)",
                  textDecoration: "none",
                  transition: "color 0.3s, text-decoration 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--pink-color)";
                  e.currentTarget.style.textDecoration = "underline";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--blue-color)";
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
            className="arrow-button-two"
            onClick={() => handleClick(active + 1)}
            style={{
              backgroundColor: "var(--blue-color)",
              border: "2px solid var(--third-gr-color)",
              borderRadius: "50%",
              padding: "0.5rem",
              transition: "background-color 0.3s",
              right: "1rem",
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
