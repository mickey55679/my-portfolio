import React from "react";


const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Esraa Qandeel",
      title: "Senior Fontend Engineer | Angular | React | JavaScript | TypeScript",
      quote:
        "I had the pleasure of teaching Michaiah at BloomTech, where she not only excelled but thrived, particularly in advanced topics. Her enthusiasm for learning is matched only by her ability to meet deadlines and master new concepts with ease. Michaiah consistently went above and beyond, engaging in side projects to further hone her skills. A consummate professional, she embodies the mindset of a problem solver and a talented software engineer. Michaiah is a proactive team player who gets things done efficiently and effectively. Any team would be fortunate to have her on board. I wholeheartedly recommend Michaiah for any role that values dedication and expertise.",
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "Designer, Another Company",
      quote:
        "Pellentesque quis erat non turpis blandit posuere a eget lorem. Donec tincidunt ipsum id sem sodales, sit amet luctus velit tincidunt.",
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="testimonials">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="testimonial">
          <p className="quote">"{testimonial.quote}"</p>
          <p className="name">{testimonial.name}</p>
          <p className="title">{testimonial.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
