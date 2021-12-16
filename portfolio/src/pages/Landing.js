import React, {useEffect} from "react";
import Ship from "../assets/Logos/Ship.png";
import "../style/landing.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Landing = ({handleClick}) => {
 
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div>
      <div className="landing__container" id="section1">
        <div className="landing__mini__container">
          <h1 data-aos="zoom-in-down">
            Luis
            <img
              src={Ship}
              alt="ship logo"
              data-aos="fade-up"
              data-aos-easing="ease-out-back"
              data-aos-delay="2000"
              data-aos-id="super-duper"
            />
            Perez
          </h1>
          <h2 data-aos="zoom-in-up"> Welcome to my Portfolio </h2>
          <h3 data-aos="zoom-in-up">
            I'm a fully devoted Full-Stack Developer who wants to express my
            creativity in the field of engineering and share my vision that
            would impact people around the world!
          </h3>
          <button
            onClick={handleClick}
            className="landing__button"
            data-aos="zoom-in-up"
            data-aos-once="true"
            data-aos-offset="-300"
          >
            DISCOVER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
