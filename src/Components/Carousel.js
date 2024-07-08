import React, { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import asylumImg from "./images/asylum.png";
import myPortfolio from "./images/myportfolio.png"; // Adjust path to your image
import chuds from "./images/chudslg.png";
import ktArtistry from "./images/ktartistrylg.png"; // Adjust path to your image

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

const MAX_VISIBILITY = 4;

const Carousel = () => {
  const [active, setActive] = useState(2);

  const handleClick = (index) => {
    setActive(index);
  };

// sm (Small): 640px and up
// md (Medium): 768px and up
// lg (Large): 1024px and up
// xl (Extra Large): 1280px and up
// 2xl (2X Extra Large): 1536px and up

  return (
    <div className="w-full h-[70vh] flex items-center justify-center overflow-hidden font-montserrat md:h-[80vh] sm:h-[60vh] xs:h-[50vh]">
      {/* 
    w-full: Sets the width to 100%.
    h-[70vh]: Sets the height to 70% of the viewport height.
    flex: Applies Flexbox layout.
    items-center: Centers items vertically.
    justify-center: Centers items horizontally.
    overflow-hidden: Hides any overflow content.
    font-montserrat: Applies the Montserrat font family.
    md:h-[80vh] sm:h-[60vh] xs:h-[50vh]: Responsive heights for different screen sizes (medium, small, extra-small).
      */}
      <div className="relative w-[30rem] h-[30rem] md:w-[30rem] md:h-[30rem] sm:w-[23rem] sm:h-[23rem] xs:w-[18rem] xs:h-[18rem]">
        {/* relative: Positions the element relative to its normal position.
        w-[30rem] h-[30rem]: Sets width and height to 30rem. md:w-[30rem]
        md:h-[30rem] sm:w-[23rem] sm:h-[23rem] xs:w-[18rem] xs:h-[18rem]:
        Responsive widths and heights for different screen sizes. */}
        {active > 0 && (
          <button
            className="text-white text-5xl absolute flex items-center justify-center top-1/2 z-10 cursor-pointer bg-transparent border-none transform -translate-x-full -translate-y-1/2 left-0 sm:text-4xl xs:text-3xl lg:left-auto lg:right lg:text-3xl"
            onClick={() => handleClick(active - 1)}
            // text-white: Sets the text color to white.
            // text-5xl: Sets the font size to 5xl.
            // absolute: Positions the button absolutely.
            // flex: Applies Flexbox layout.
            // items-center: Centers items vertically.
            // justify-center: Centers items horizontally.
            // top-1/2: Positions the button at 50% from the top.
            // z-10: Sets the z-index to 10.
            // cursor-pointer: Changes the cursor to a pointer.
            // bg-transparent: Sets the background color to transparent.
            // border-none: Removes the border.
            // transform -translate-x-full -translate-y-1/2: Transforms the element by translating it to the left and up by 50%.
            // left-0: Aligns the button to the left.
            // sm:text-4xl xs:text-3xl lg:left-auto lg:right lg:text-3xl: Responsive font sizes and positioning for different screen sizes
            style={{
              backgroundColor: "#22313f", // blue color
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
            // absolute: Positions the card absolutely.
            // w-full h-full: Sets width and height to 100%.
            // transition-all: Applies a transition to all properties.
            // duration-300: Sets the transition duration to 300ms.
            // ease-out: Applies an ease-out timing function.
            // ${index === active ? "z-10" : "z-[9]"}: Conditionally sets the z-index based on the active card.
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
              {/* relative: Positions the element relative to its normal position.
              w-full h-full: Sets width and height to 100%. p-8: Applies padding
              of 2rem (8 units). rounded-lg: Applies large border-radius.
              text-justify: Justifies the text. transition-all duration-300
              ease-out: Applies a transition with 300ms duration and ease-out
              timing. flex flex-col justify-center items-center: Applies Flexbox
              layout, arranges items in a column, and centers them both
              vertically and horizontally. */}
              <h2 className="text-center text-2xl font-bold md:text-1.5xl sm:text-1.2xl xs:text-xl">
                {/* text-center: Centers the text. text-2xl: Sets the font size to
                2xl. font-bold: Makes the text bold. md:text-1.5xl sm:text-1.2xl
                xs:text-xl: Responsive font sizes for different screen sizes */}
                {card.title}
              </h2>
              <img
                className="w-full max-w-[50%] h-[60%] object-cover md:max-w-[40%] md:h-[50%] sm:max-w-[50%] sm:h-[40%] xs:max-w-[40%] xs:h-[30%]"
                src={card.imageUrl}
                alt={card.title}
              />
              {/* w-full: Sets the width to 100%. max-w-[50%]: Sets the maximum
              width to 50%. h-[60%]: Sets the height to 60%. object-cover:
              Scales the image to cover the element’s entire content box.
              md:max-w-[40%] md:h-[50%] sm:max-w-[50%] sm:h-[40%] xs:max-w-[40%]
              xs:h-[30%]: Responsive max-widths and heights for different screen
              sizes. */}
              <p className="my-4 text-lg md:text-sm sm:text-xs xs:text-xs">
                {/* my-4: Applies margin of 1rem (4 units) on the top and bottom.
                text-lg: Sets the font size to large. md:text-sm sm:text-xs
                xs:text-xs: Responsive font sizes for different screen sizes. */}
                {card.description}
              </p>
              {card.loomUrl && (
                <a
                  href={card.loomUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-[#22313f] text-lg md:text-sm sm:text-xs xs:text-xs"
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
                  {/* mt-4: Applies margin-top of 1rem (4 units). text-[#22313f]:
                  Sets the text color to a custom color (#22313f). text-lg: Sets
                  the font size to large. md:text-sm sm:text-xs xs:text-xs:
                  Responsive font sizes for different screen sizes. style:
                  Inline styles for margin, font size, color, text-decoration,
                  and transitions. onMouseEnter and onMouseLeave: Inline event
                  handlers to change the color and text decoration on hover. */}
                  View Loom video(s)
                </a>
              )}
              <a
                href={card.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-[#22313f] text-lg md:text-sm sm:text-xs xs:text-xs"
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
            className="text-white text-5xl absolute flex items-center justify-center top-1/2 z-10 cursor-pointer bg-transparent border-none transform translate-x-full -translate-y-1/2 right-0 sm:text-4xl xs:text-3xl"
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
