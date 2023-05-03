import React from "react";
import "../style/contact.css";
import { useForm } from "react-hook-form";


const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);


  return (
    <div className="contact__container" id="section5">
      <div className="contact__info">
        <h1> Contact </h1>
        <span>lperezdev843@gmail.com</span>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="contact__name"
            {...register("fullName", { required: true, maxLength: 20 })}
          style={{ fontFamily: "'Poiret One', cursive"}}
          />
          <input
            {...register("email", {
              required: true,
              pattern: "^[^s@]+@[^s@]+.[^s@]+$",
            })}
          />
          <input {...register("message", { required: true })} />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;


// import GitHub from "../assets/Logos/github2.png";
// import Mail from "../assets/Logos/email.png";
// import LinkedIn from "../assets/Logos/linkedin2.png";

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
