import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formMessage, setFormMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading before fetch

    fetch("http://localhost:5001/send", {
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
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error:", error);
        setFormMessage("Something went wrong. Please try again later.");
      })
      .finally(() => setIsLoading(false)); // Reset loading state whether fetch succeeded or failed
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label className="label">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input"
          required
        />
      </div>
      <div className="form-group">
        <label className="label">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input"
          required
        />
      </div>
      <div className="form-group">
        <label className="label">Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="input textarea"
          required
        />
      </div>
      <button type="submit" className="button-87" disabled={isLoading}>
        {isLoading ? "Sending..." : "Submit"}
      </button>
      {formMessage && <p>{formMessage}</p>}
    </form>
  );
};

export default ContactForm;
