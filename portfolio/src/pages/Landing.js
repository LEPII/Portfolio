import React from "react";
import Ship from "../assets/Logos/Ship.png";
import "../style/landing.css";
import { Button } from "../components/Button";

const Landing = () => {
  return (
    <div>
      <div className="landing__container">
        <h1 >
          Luis <img src={Ship} alt="ship logo" /> Perez
        </h1>
        <h2> Welcome to my Portfolio </h2>
        <h3>
          Fully devoted Full-Stack Developer who wants to express
          my creativity in the field of engineering and share my vision that
          would impact people around the world!
        </h3>
        <Button type="button">DISCOVER </Button>
      </div>
    </div>
  );
};

export default Landing;
