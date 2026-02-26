import "../styles/contact.css";

import React, { useState } from "react";


function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setSuccess(true);

    setForm({
      name: "",
      email: "",
      message: ""
    });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="contact-container">

      <h2>Contact Mohabbtein Sharbat</h2>
      <p className="contact-subtitle">
        Have questions or want to order? Contact us!
      </p>

      <div className="contact-content">

        {/* Contact Info */}
        <div className="contact-info">
          <p><strong>📞 Phone:</strong> +91 9876543210</p>
          <p><strong>📧 Email:</strong> contact@mohabbteinsharbat.com</p>
          <p><strong>📍 Location:</strong> Mumbai, India</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>

          {success && <p className="success">Message sent!</p>}

        </form>

      </div>

    </div>
  );
}

export default Contact;