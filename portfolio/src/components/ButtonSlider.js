import React from 'react'
import "../style/slider.css"
import leftArrow from "../assets/Logos/arrowLeft_icon.png";
import rightArrow from "../assets/Logos/arrowRight_icon.png";

const ButtonSlider = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img
        src={direction === "next" ? leftArrow : rightArrow}
      />
    </button>
  );
}

export default ButtonSlider
