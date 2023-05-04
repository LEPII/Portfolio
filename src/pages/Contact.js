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

        <form onSubmit={handleSubmit(onSubmit)} className="contact__form">
          <p> Full Name</p>
          <input
            className="contact__name"
            autoComplete="new-password"
            {...register("fullName", { required: true, maxLength: 20 })}
          />
          {errors.fullName?.type === "required" && (
            <p role="alert">Full Name Is Required</p>
          )}
          <p> Email </p>

          <input
            autoComplete="new-password"
            {...register("email", {
              required: true,
              pattern: "^[^s@]+@[^s@]+.[^s@]+$",
            })}
          />
          {errors.email?.type === "required" && (
            <p role="alert">Email Is Required</p>
          )}
          <p> Message </p>

          <input {...register("message", { required: true })} />
          {errors.message?.type === "required" && (
            <p role="alert">Message Is Required</p>
          )}
          <input type="submit" className="contact__submit"/>
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
