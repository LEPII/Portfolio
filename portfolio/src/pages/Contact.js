import React from "react";
import "../style/contact.css";
import GitHub from "../assets/Logos/github2.png";
import Resume from "../assets/Logos/resume.png";
import Mail from "../assets/Logos/email.png";
import LinkedIn from "../assets/Logos/linkedin2.png";
import ResumeFile from "../assets/Personal/Luis's Resume 2021.pdf";

const Contact = () => {
  const contact__icons = [
    {
      src: LinkedIn,
      link: "https://www.linkedin.com/in/luis-perez-b72069137/",
    },
    {
      src: GitHub,
      link: "https://github.com/LEPII",
    },
    { src: Mail, link: "mailto:lperezdev843@gmail.com" },

    { src: Resume, link: ResumeFile },
  ];

  return (
    <div className="contact__container" id="section5">
      <div className="contact__info">
        <h1> Contact Me </h1>
        <h3> Phone Number: 352-226-1938 </h3>
        <h3> Address: Miami-Fort Lauderdale, FL</h3>
      </div>
      <div className="contact__icons">
        {contact__icons.map((icon, index) => (
          <a key={index} href={icon.link} target="_blank" rel="noreferrer">
            <img src={icon.src} alt="Contact Icons" />
          </a>
        ))}
      </div>
    </div>
  );
};
;

export default Contact;
