import React, { useEffect } from "react";
import Ship from "../assets/Logos/Ship.png";
import "../style/landing.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Skills from "./Skills";
import Project from "./Project";

const Landing = ({ handleScrollToSkills, skillsRef }) => {

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <div className="landing__container" id="home_top">
        <div className="landing__mini__container">
          <h1 data-aos="zoom-in-down">
            LuDev
            <img
              src={Ship}
              alt="ship logo"
              data-aos="fade-up"
              data-aos-easing="ease-out-back"
              data-aos-delay="2000"
              data-aos-id="super-duper"
            />
            <br />
            And Design
          </h1>
          <h2 data-aos="zoom-in-up"> Welcome To My Portfolio </h2>
          <span data-aos="zoom-in-up">
            I'm a creative Full-Stack Developer partnering with talented people
            focused on creating and delivering a digital product for both
            business and consumer use. Feel free to check out my projects below
            and may the force be with you.
          </span>
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
