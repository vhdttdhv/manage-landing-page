import React from "react";
import "../../styles/Button.css";
function Button(props) {
  return (
    <a href="/" className="button-link">
      <div
        className={
          props.invert ? "button-wrapper button-invert" : "button-wrapper"
        }
      >
        Get Started
      </div>
    </a>
  );
}

export default Button;
