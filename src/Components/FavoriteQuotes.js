import React, { useState, useEffect } from "react";

const FavoriteQuotes = () => {
  const quotes = [
    {
      id: 1,
      name: "Erica Jong",
      quote: "If you don't risk anything, you risk even more.",
    },
    {
      id: 2,
      name: "Albert Einstein",
      quote: "You never fail until you stop trying",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 7000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="quotes">
      {quotes.map((quote, index) => (
        <div
          key={quote.id}
          className={`quote ${index === currentIndex ? "visible" : "hidden"}`}
          style={{ opacity: index === currentIndex ? 1 : 0 }}
        >
          <p className="quote-text">"{quote.quote}"</p>
          <p className="quote-name">{quote.name}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoriteQuotes;
