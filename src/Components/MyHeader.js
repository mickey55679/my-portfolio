import React from "react";
import me from "./images/Me-removebg-preview (1).png";

function MyHeader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center text-center bg-opacity-90 p-8 ">
        <img
          src={me}
          alt="imageOfMe"
          className="w-40 h-40 md:w-60 md:h-60 mb-4 transition-transform duration-500 ease-in-out transform hover:scale-110"
        />
        <h1 className="text-4xl font-bold mt-4">Michaiah Bos</h1>
        <p className="text-xl mt-2">Software Engineer</p>
        <p className="text-lg mt-2 max-w-md">
          As an accomplished professional with extensive experience spanning
          healthcare, real estate, and insurance industries, I recently
          broadened my expertise into Full Stack Development through
          <a
            href="https://www.bloomtech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-coral hover:text-darkcoral transition-colors duration-500 ease-in-out"
          >
            BloomTech
          </a>
          . Proficient in JavaScript, HTML, CSS, and React, I have successfully
          navigated various coding challenges and actively contributed to
          collaborative projects.
        </p>
      </div>
    </div>
  );
}

export default MyHeader;
