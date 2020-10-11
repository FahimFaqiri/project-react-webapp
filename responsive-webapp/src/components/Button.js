import React from "react";
// import comnponents
import "./Button.css";

// create a variabel called STYLES and configure the different styles
const STYLES = ["btn--primary", "btn--outline"];

// create a variabel called SIZES and configure the different sizes
const SIZES = ["btn--medium", "btn--large", "btn--mobile", "btn--wide"];

// create a variabel called COLOR and set the different types of colors
const COLOR = ["primary", "blue", "red", "green"];

// create a variabel called Button and export an object
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
}) => {
  // create a variabel called checkButtonStyle and check if the parameter is given else choose the first in the array
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  // create a variabel called checkButtonSize and check if the parameter is given else choose the first in the array
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  // create a variabel called checkButtonColor and check if the parameter is given else choose the first in the array
  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

  // return the complete button with the different parameter options
  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onclick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
