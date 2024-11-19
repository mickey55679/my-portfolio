import React, { useState } from "react";



const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formMessage, setFormMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const backendUrl = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading before fetch

    fetch(`${backendUrl}/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
       body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setFormMessage(data.message);
        console.log(data);
        setFormData({ name: "", email: "", message: "" }); // Reset form
      })
      .catch((error) => {
        console.error("Error:", error);
        setFormMessage("Something went wrong. Please try again later.");
      })
      .finally(() => setIsLoading(false)); // Reset loading state whether fetch succeeded or failed
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form pt-[150px] max-w-[400px] m-auto mt-[200px] font-cormorant text-2xl xxs:m-w-[300px] xs:m-w-[300px]"
    >
      <div className="form-group mb-[20px] ">
        <label className="label block mb-2">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input w-[100%] p-3 border-[1px] border-[#ccc] [border-style:ridge] rounded-md text-[16px] text-blue "
          required
        />
      </div>
      <div className="form-group">
        <label className="label">Your Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input w-[100%] p-3 border-[1px] border-[#ccc] [border-style:ridge] rounded-md text-[16px] text-blue"
          required
        />
      </div>
      <div className="form-group">
        <label className="label">Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="input textarea w-[100%] border-[1px] border-[#ccc] [border-style:ridge] rounded-md text-[16px] text-blue"
          required
        />
      </div>
      <button type="submit" className="button-37" disabled={isLoading}>
        {isLoading ? "Sending..." : "Submit"}
      </button>
      <div className="form-message">{formMessage && <p>{formMessage}</p>}</div>
    </form>
  );
};

export default ContactForm;
