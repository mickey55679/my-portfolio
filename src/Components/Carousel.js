import styled from "styled-components";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import asylumImg from "./images/screenshot.png";
import myPortfolio from './images/Screenshot 2024-07-01 at 7.08.28 PM.png'

const colors = {
  purple: "green",
  pink: "black",
  gray: "#FF9138",
  black: "black",
};

const Body = styled.div`
  width: 100vw;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: "Montserrat", sans-serif;
`;

const CarouselContainer = styled.div`
  @apply mx-auto;
  position: relative;
  width: 23rem; /* Adjust to your card size */
  height: 23rem; /* Adjust to your card size */
  perspective: 500px;
  transform-style: preserve-3d;
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
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background-color: hsl(95, 100%, calc(100% - var(--abs-offset) * 50%));
  border-radius: 8px;
  color: ${colors.gray};
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
    color: #669999;
  }
  img {
    width: 100%;
    max-width: 50%;
    height: 60%;
  }

  a {
    margin-top: 1rem;
    color: ${colors.black};
    font-size: 1rem;
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
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/08/02/00/47/buildings-2569218_1280.jpg",
  },
  {
    title: "Kt-artistry",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    githubUrl: "https://github.com/mickey55679/kt-artistry",
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/08/02/00/47/buildings-2569218_1280.jpg",
  },
  {
    title: "my-portfolio",
    description: "#HTML #CSS #React #Jest #Tailwindcss",
    githubUrl: "https://github.com/mickey55679/my-portfolio",
    imageUrl:
     myPortfolio,
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
