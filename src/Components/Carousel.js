import React, { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import asylumImg from "./images/HRF.png";
import myPortfolio from "./images/myportfolio.png";
import chuds from "./images/chuds.png";
// import ktArtistry from "./images/nailSalon.png";
import coachSite from "./images/coaching site.png";
import wnhaSite from "./images/WHNA.png";

const CARDS = [
  {
    title: "Chuds",
    description: "#HTML #CSS #React",
    githubUrl: "https://github.com/mickey55679/chuds",
    imageUrl: chuds,
    websiteUrl: null,
    details:
      "Chuds is a user-friendly web application designed for a restaurant offering online ordering, pickup, and delivery. It integrates dynamic features like Yelp reviews, event showcases, and user profile management for an enhanced customer experience. Built with React, Node.js, and SQLite, this project emphasizes responsive design, intuitive UI, and smooth user interactions. The focus is on creating an engaging, seamless experience for customers while maintaining a clean, easy-to-use interface. The front-end leverages Tailwind CSS to ensure a modern and polished design, adaptable across devices.",
  },
  {
    title: "Asylum Project",
    description: "#HTML #CSS #React #Jest",
    githubUrl: "https://github.com/mickey55679/asylum-rg-fe-starter",
    imageUrl: asylumImg,
    loomUrl: "https://loom.com/share/folder/36e7bf8bc4a149d79120b1f7b414b0eb",
    websiteUrl: null,
    details:
      "This project, completed as part of my coursework at BloomTech, focuses on integrating Auth0 for secure authentication. Using React and Tailwind CSS, the application now includes a seamless login/logout flow with an integrated Profile Page that displays user details upon successful login. The user interface is responsive, with components dynamically rendering based on authentication status. This project demonstrates proficiency in React, user-centered design, and secure authentication, providing a clean foundation for building web applications.",
  },
  // {
  //   title: "Nail Salon",
  //   description: "#HTML #CSS #React",
  //   githubUrl: "https://github.com/mickey55679/kt-artistry",
  //   imageUrl: ktArtistry,
  //   websiteUrl: null,
  //   details:
  //     "Chuds is a modern restaurant website designed for online orders. ",
  // },
  {
    title: "Portfolio",
    description: "#HTML #CSS #React #Jest #Tailwindcss",
    githubUrl: "https://github.com/mickey55679/my-portfolio",
    imageUrl: myPortfolio,
    websiteUrl: "https://www.michaiahbossoftwareengineer.com/",
    details:
      "My portfolio website is a fully responsive web application built using React and Tailwind CSS for a modern, scalable, and efficient front-end. The design emphasizes clean UI/UX principles, responsiveness across devices, and accessibility. For the contact functionality, I integrated Nodemailer with an Express.js backend to securely handle form submissions and send emails directly to my inbox. This setup showcases my ability to build full-stack applications, manage client-server communication, and implement real-world features like email notifications.",
  },
  {
    title: "Coaching site",
    description: "#HTML #CSS #JavaScript",
    githubUrl: "https://github.com/mickey55679/coachwebsite",
    imageUrl: coachSite,
    websiteUrl: null,
    details:
      "I designed and developed a custom coaching website from the ground up. I began by creating wireframes and high-fidelity mockups in Figma to establish the visual structure and user experience. This allowed for a clear design vision and streamlined development. Once the design was finalized, I implemented the site using HTML, CSS, and vanilla JavaScript, ensuring responsiveness across devices and interactive functionality such as smooth navigation, dynamic content sections, and form validation. The project showcases my ability to translate a design concept into a fully functional and visually polished website using core front-end technologies.",
  },
  {
    title: "WNHA",
    description: "Wix Site",
    imageUrl: wnhaSite,
    githubUrl: null,
    websiteUrl: "https://www.wnha.net/",
    details:
      "I’ve been actively working on improving the WNHA.net website, which is built on Wix. My focus has been on enhancing the site's overall design to make it more visually appealing and aligned with the organization's identity. I’ve also optimized the layout and navigation structure to create a more user-friendly experience, making it easier for visitors to find information quickly. Additionally, I implemented SEO best practices within the Wix platform—such as optimizing meta tags, headings, alt text, and page URLs—to improve search engine visibility and organic traffic. This project reflects my ability to work within a website builder while applying principles of design, usability, and search optimization.",
  },
];

const MAX_VISIBILITY = 4;

const Carousel = () => {
  const [active, setActive] = useState(2);
  const [flipped, setFlipped] = useState(Array(CARDS.length).fill(false));

  const handleClick = (index) => {
    setActive(index);
  };

  const handleFlip = (index) => {
    setFlipped((prev) => {
      const newFlipped = [...prev];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
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
              className={`relative w-full h-full p-8 rounded-lg text-justify transition-all duration-300 ease-out flex flex-col justify-center items-center`}
              style={{
                backgroundColor: `hsl(95, 100%, calc(100% - var(--abs-offset) * 50%))`,
                color: "#669999",
                overflow: "hidden",
                transformStyle: "preserve-3d",
              }}
            >
              <h2 className="card-title">{card.title}</h2>
              <p className="custom-paragraph">{card.description}</p>

              <div
                className={`absolute inset-0 bg-white transition-all duration-300 ${
                  flipped[index] ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backfaceVisibility: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transform: flipped[index]
                    ? "translateX(0)"
                    : "translateX(100%)",
                }}
              >
                <div className="text-center">
                  <h2 className="text-[25px] font-cormorant font-bold p-2">{card.title}</h2>
                  <p className="m-2 p-2">{card.details}</p>
                </div>
              </div>

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

              <button
                onClick={() => handleFlip(index)}
                className="absolute top-2 right-2 rounded-sm p-1 text-white bg-blue border-2 border-thirdGreen"
              >
                {flipped[index] ? "SEE LESS 👈" : "SEE MORE 👉"}
              </button>

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

              {card.githubUrl && (
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
              )}
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
