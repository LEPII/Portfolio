import React, { useRef, useState } from "react";
import "../style/contact.css";
import emailjs from "@emailjs/browser";
import GitHub from "../assets/Logos/github.png";
import LinkedIn from "../assets/Logos/linkedin.png";
import NavBar from "../components/NavBar";



const Contact = ({ envVars }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(envVars.emailKey, envVars.tempKey, form.current, envVars.pubKey)
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setShowSuccessMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const contact__icons = [
    {
      src: LinkedIn,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/luis-perez-b72069137/",
    },
    {
      src: GitHub,
      name: "GitHub",
      link: "https://github.com/LEPII",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="contact__container" id="top">
        <div className="contact__info">
          <h1> Contact </h1>
          <p data-aos="fade-right">
            Whether you're a fellow Miami Heat/Dolphins fan, a hiring manager,
            recruiter, business owner, or blockchain enthusiast/developer, I'm
            eager to connect with you!
          </p>
          <p data-aos="fade-up">
            As a web developer, I'm always looking for exciting new projects to
            collaborate on. So, if you have a web development project in mind,
            or just want to chat about our shared interests, feel free to reach
            out to me via email, connect with me on LinkedIn or Github or send
            me a message below.
          </p>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <h4 className="contact_location">
              Based in the Miami-Fort Lauderdale, FL Area <br /> Available
              Remotely{" "}
            </h4>
            <a
              href="mailto:lperezdev843@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              lperezdev843@gmail.com
            </a>
            <div className="contact__icons">
              {contact__icons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={icon.src} alt="Contact Icons" />
                </a>
              ))}
            </div>
            <label> FULL NAME </label>
            <input
              className="contact__name"
              autoComplete="John Doe"
              name="to_name"
              type="text"
              required
            />
            <label> EMAIL </label>
            <input
              autoComplete="johndoe@gmail.com"
              type="email"
              name="from_email"
              required
            />
            <label> MESSAGE </label>
            <textarea name="message" required autoComplete="off" />
            {showSuccessMessage && (
              <p>
                Thank you for your message! I'll be sure to get back to you as
                soon as possible, typically within 24-48 business hours.
              </p>
            )}
            <input type="submit" value="Send" className="contact__submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
