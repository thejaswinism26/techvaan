import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Contact.css";

export default function Contact({ successMessage }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  useEffect(() => {
    if (submitted) {
      alert(successMessage);
    }
  }, [submitted, successMessage]);

  return (
    <section className="contact">
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>

        <p className="contact-subtitle">
          Have a project in mind? Let’s talk.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Send Message
          </button>
        </form>

        <div className="contact-info">
          <h3>Reach Us Directly</h3>

          <p><strong>Phone:</strong> +91 98765 43210</p>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:contact@techvaan.com">
              contact@techvaan.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

Contact.propTypes = {
  successMessage: PropTypes.string.isRequired
};