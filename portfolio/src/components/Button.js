import React from "react";
import "../style/button.css";

const STYLES = ["btn--landing", "btn--skills", "btn--contact"];

const SIZES = ["btn--small", "btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button className={`btn ${checkStyle} ${checkSize}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
