import React from "react";
import "../style/landing.css";
import Ship from "../assets/Logos/Ship.png";
import Skills from "./Skills";
import Project from "./Project";

const Landing = ({ handleScrollToSkills, skillsRef }) => {

  return (
    <div>
      <div className="landing__container" id="home_top">
        <div className="landing__mini__container">
          <h1 data-aos="fade-down-right" data-aos-easing="ease-out-back">
            LuDev
          </h1>
          <img
            src={Ship}
            alt="ship logo"
            data-aos="fade-up"
            data-aos-easing="ease-out-back"
            data-aos-delay="1000"
            data-aos-id="super-duper"
          />
          <br />
          <h1 data-aos="zoom-in-left" data-aos-easing="ease-out-back">
            And Design
          </h1>
          <span></span>
          <h2 data-aos="zoom-in-up" data-aos-easing="ease-out-back">
            Welcome To My Portfolio
          </h2>
          <p data-aos="zoom-in-up" data-aos-easing="ease-out-back">
            I'm a creative Full-Stack Developer partnering with talented people
            focused on creating and delivering a digital product for both
            business and consumer use. Feel free to check out my projects below!
          </p>
          <button className="landing__button" onClick={handleScrollToSkills}>
            Explore
          </button>
        </div>
      </div>
      <Skills skillsRef={skillsRef}> </Skills>
      <Project> </Project>
    </div>
  );
};

export default Landing;
