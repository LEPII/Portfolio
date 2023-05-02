import React from "react";
import "../style/contact.css";
import { useForm } from "react-hook-form";

// import GitHub from "../assets/Logos/github2.png";
// import Mail from "../assets/Logos/email.png";
// import LinkedIn from "../assets/Logos/linkedin2.png";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  // const contact__icons = [
  //   {
  //     src: LinkedIn,
  //     name: "LinkedIn",
  //     link: "https://www.linkedin.com/in/luis-perez-b72069137/",
  //   },
  //   {
  //     src: GitHub,
  //     name: "GitHub",
  //     link: "https://github.com/LEPII",
  //   },
  //   { src: Mail, name: "Email", link: "mailto:lperezdev843@gmail.com" }
  // ] ;

  return (
    <div className="contact__container" id="section5">
      <div className="contact__info">
        <h1> Contact </h1>
        <span>
          Lets get in touch or shoot me an email directly to
          lperezdev843@gmail.com
        </span>
        {/* <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              ref={register({ required: true })}
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              ref={register({ required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              ref={register({ required: true })}
            />
            {errors.phone && <span>This field is required</span>}
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              ref={register({ required: true })}
            ></textarea>
            {errors.message && <span>This field is required</span>}
          </div>
          <button type="submit">Submit</button>
        </form> */}
      </div>
    </div>
  );
};

export default Contact;