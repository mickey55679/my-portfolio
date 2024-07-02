import styled from "styled-components";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import asylumImg from "./images/screenshot.png";
import myPortfolio from "./images/Screenshot 2024-07-01 at 7.08.28 PM.png";
import chuds from './images/chudslg.png'
import ktArtistry from './images/ktartistrylg.png'

const colors = {
  orange: "var(--orange-color)",
  darkBlue: "#22313f",
};

const Body = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 768px) {
    height: 60vh;
  }

  @media (max-width: 480px) {
    height: 50vh;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 23rem;
  height: 23rem;
  perspective: 500px;
  transform-style: preserve-3d;

  @media (max-width: 768px) {
    width: 18rem;
    height: 18rem;
  }

  @media (max-width: 480px) {
    width: 15rem;
    height: 15rem;
  }
`;

const CardContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateY(calc(var(--offset) * 50deg))
    scaleY(calc(1 + var(--abs-offset) * -0.4))
    translateZ(calc(var(--abs-offset) * -30rem))
    translateX(calc(var(--direction) * -5rem));
  filter: blur(calc(var(--abs-offset) * 1rem));
  transition: all 0.3s ease-out;

  @media (max-width: 768px) {
    transform: rotateY(calc(var(--offset) * 40deg))
      scaleY(calc(1 + var(--abs-offset) * -0.3))
      translateZ(calc(var(--abs-offset) * -20rem))
      translateX(calc(var(--direction) * -4rem));
  }

  @media (max-width: 480px) {
    transform: rotateY(calc(var(--offset) * 30deg))
      scaleY(calc(1 + var(--abs-offset) * -0.2))
      translateZ(calc(var(--abs-offset) * -10rem))
      translateX(calc(var(--direction) * -3rem));
  }
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background-color: hsl(95, 100%, calc(100% - var(--abs-offset) * 50%));
  border-radius: 8px;
  color: ${colors.orange};
  text-align: justify;
  transition: all 0.3s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    text-shadow: -6px 2px 16px rgba(102, 153, 153, 0.4);
    color: var(--tertiary-color);

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }

  img {
    width: 100%;
    max-width: 70%;
    height: 60%;

    @media (max-width: 768px) {
      max-width: 60%;
      height: 50%;
    }

    @media (max-width: 480px) {
      max-width: 50%;
      height: 40%;
    }
  }

  p {
    margin: 1rem 0;
    font-size: 1rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }

  a {
    margin-top: 1rem;
    color: ${colors.darkBlue};
    font-size: 1rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;

const NavButton = styled.button`
  color: white;
  font-size: 5rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  z-index: 2;
  cursor: pointer;
  user-select: none;
  background: unset;
  border: unset;

  &.left {
    transform: translateX(-100%) translateY(-50%);
  }

  &.right {
    right: 0;
    transform: translateX(100%) translateY(-50%);
  }

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

const CARDS = [
  {
    title: "Asylum Project",
    description: "#HTML #CSS #React",
    githubUrl: "https://github.com/mickey55679/asylum-rg-fe-starter",
    imageUrl: asylumImg,
  },
  {
    title: "Chuds",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    githubUrl: "https://github.com/mickey55679/chuds",
    imageUrl: chuds,
  },
  {
    title: "Kt-artistry",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
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

  return (
    <Body>
      <CarouselContainer>
        {active > 0 && (
          <NavButton
            className="nav left"
            onClick={() => setActive((i) => i - 1)}
          >
            <TiChevronLeftOutline />
          </NavButton>
        )}
        {CARDS.map((card, i) => (
          <CardContainer
            key={i}
            style={{
              "--active": i === active ? 1 : 0,
              "--offset": (active - i) / 3,
              "--direction": Math.sign(active - i),
              "--abs-offset": Math.abs(active - i) / 3,
              "pointer-events": active === i ? "auto" : "none",
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
              display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
            }}
          >
            <Card>
              <h2>{card.title}</h2>
              <img src={card.imageUrl} alt={card.title} />
              <p>{card.description}</p>
              <a
                href={card.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
                View on Github
              </a>
            </Card>
          </CardContainer>
        ))}
        {active < CARDS.length - 1 && (
          <NavButton
            className="nav right"
            onClick={() => setActive((i) => i + 1)}
          >
            <TiChevronRightOutline />
          </NavButton>
        )}
      </CarouselContainer>
    </Body>
  );
};

export default Carousel;
