import React from "react";
import "../styles/Illustration.css";
import Button from "./small-components/Button";

function Illustration() {
  return (
    <div className="illustration-wrapper">
      <div className="illustration-pic">
        <img src="/images/illustration-intro.svg" alt="illustration intro" />
      </div>
      <div className="illustration-text">
        <h1>Bring everyone together to build better products.</h1>
        <p>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <Button />
      </div>
    </div>
  );
}

export default Illustration;
