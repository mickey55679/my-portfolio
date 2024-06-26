import React from "react";


const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Esraa Qandeel",
      title:
        "Senior Fontend Engineer | Angular | React | JavaScript | TypeScript",
      quote:
        "I had the pleasure of teaching Michaiah at BloomTech, where she not only excelled but thrived, particularly in advanced topics. Her enthusiasm for learning is matched only by her ability to meet deadlines and master new concepts with ease. Michaiah consistently went above and beyond, engaging in side projects to further hone her skills. A consummate professional, she embodies the mindset of a problem solver and a talented software engineer. Michaiah is a proactive team player who gets things done efficiently and effectively. Any team would be fortunate to have her on board. I wholeheartedly recommend Michaiah for any role that values dedication and expertise.",
    },
    {
      id: 2,
      name: "Ben Johnson",
      title:
        "Startup Founder | Software Engineer | Team Builder | Talent Developer",
      quote:
        "I cannot possibly recommend Michaiah more highly. Not only is she an incredibly skilled developer whose ceiling has no limit, but her genuine kindness, generosity, and positive attitude have a measurable impact on everyone she works with. She is a fabulous communicator and shows time and time again an impressive ability to quickly learn and understand complex or intimidating challenges she faces. She is a real asset to any team she's on, and I've grown to consider her a truly good friend.",
    },
    // {
    //   id: 3,
    //   name: "Ben Johnson",
    //   title:
    //     "Startup Founder | Software Engineer | Team Builder | Talent Developer",
    //   quote:
    //     "I cannot possibly recommend Michaiah more highly. Not only is she an incredibly skilled developer whose ceiling has no limit, but her genuine kindness, generosity, and positive attitude have a measurable impact on everyone she works with. She is a fabulous communicator and shows time and time again an impressive ability to quickly learn and understand complex or intimidating challenges she faces. She is a real asset to any team she's on, and I've grown to consider her a truly good friend.",
    // },
    // {
    //   id: 4,
    //   name: "Ben Johnson",
    //   title:
    //     "Startup Founder | Software Engineer | Team Builder | Talent Developer",
    //   quote:
    //     "I cannot possibly recommend Michaiah more highly. Not only is she an incredibly skilled developer whose ceiling has no limit, but her genuine kindness, generosity, and positive attitude have a measurable impact on everyone she works with. She is a fabulous communicator and shows time and time again an impressive ability to quickly learn and understand complex or intimidating challenges she faces. She is a real asset to any team she's on, and I've grown to consider her a truly good friend.",
    // },
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
