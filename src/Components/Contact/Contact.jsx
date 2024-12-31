import React, { useState } from "react";
import styles from "./contact.module.css"; // Import corresponding CSS module
import emailjs from "emailjs-com";

// Accessing environment variables
const serviceID = import.meta.env.VITE_SERVICE_ID;
const templateID = import.meta.env.VITE_TEMPLATE_ID;
const userID = import.meta.env.VITE_USER_ID;

console.log("Service ID:", serviceID);
console.log("Template ID:", templateID);
console.log("User ID:", userID);

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [notification, setNotification] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Initialize emailjs with user ID before sending
    if (userID) {
      emailjs.init(userID);
    } else {
      console.error("User ID is missing!");
      setNotification("error");
      setLoading(false);
      return;
    }

    console.log("Service ID (in handleSubmit):", serviceID);
    console.log("Template ID (in handleSubmit):", templateID);

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setNotification("success");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setNotification("error");
      })
      .finally(() => {
        setLoading(false);
      });

    // Clear form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Remove notification after 5 seconds
    setTimeout(() => {
      setNotification("");
    }, 5000);
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.contactForm}>
        <h2>Contact Me</h2>
        {notification && (
          <div
            className={
              notification === "success" ? styles.success : styles.error
            }
          >
            {notification === "success"
              ? "Message has been sent."
              : "Failed to send message. Please try again."}
          </div>
        )}
        {loading && <div className={styles.loading}>Sending...</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className={styles.inputField}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className={styles.inputField}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Write Something"
            className={styles.textarea}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
