import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Contact information displayed in the contact panel.
const CONTACT_INFO = {
  email: "sojiosulivan@gmail.com",
  phone: "(437) 385-3004",
  location: "Toronto, ON",
};

// Starting shape for the contact form's state.
const EMPTY_FORM = {
  firstName: "",
  lastName: "",
  contactNumber: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const navigate = useNavigate();

  // Update a single field in state as the user types.
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  }

  // The brief only requires capturing the input, not sending it anywhere
  // yet — so we log it (stand-in for a future API call) and redirect home.
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Contact form submitted:", formData);
    navigate("/");
  }

  return (
    <section className="section">
      <div className="gutter-heading">
        <span className="gutter-heading__num">05</span>
        <h2 className="gutter-heading__title">Contact Me</h2>
      </div>

      <div className="contact-layout">
        <div className="contact-panel">
          <p className="comment-line">Contact info</p>
          <p className="contact-panel__row">
            email: <span>{CONTACT_INFO.email}</span>
          </p>
          <p className="contact-panel__row">
            phone: <span>{CONTACT_INFO.phone}</span>
          </p>
          <p className="contact-panel__row">
            location: <span>{CONTACT_INFO.location}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="firstName">First name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="lastName">Last name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="contactNumber">Contact number</label>
            <input
              id="contactNumber"
              name="contactNumber"
              type="tel"
              value={formData.contactNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
