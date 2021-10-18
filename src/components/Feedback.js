import React from "react";
import "../styles/Feedback.css";
import Card from "./small-components/Card";
import { useState } from "react";
import Button from "./small-components/Button";

function Feedback() {
  const [sliderHolder, setSliderHolder] = useState(0);
  const srcArray = ["anisha", "ali", "richard", "shanai"];
  const titleArray = [
    "Anisha Li",
    "Ali Bravo",
    "Richard Watts",
    "Shanai Gough",
  ];
  const quoteArray = [
    `"Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."`,
    `"We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."`,
    `"Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone i talk to!"`,
    `"Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."`,
  ];
  function sliderChange(i) {
    const element = document.getElementById("feedback-slider");
    if (!element.childNodes[i].classList.contains("feedback-chosen"))
      element.childNodes[i].className += "feedback-chosen";
    element.childNodes[sliderHolder].classList.remove("feedback-chosen");
    setSliderHolder(i);
  }
  return (
    <div className="feedback-wrapper">
      <h1>What they've said</h1>
      <div className="feedback-content">
        <div className="feedback-card feedback-holder">
          <Card
            src={`/images/avatar-${srcArray[sliderHolder]}.png`}
            title={titleArray[sliderHolder]}
            content={quoteArray[sliderHolder]}
          />
        </div>
        <div id="feedback-slider">
          <div
            className="feedback-chosen"
            onMouseEnter={() => sliderChange(0)}
          />
          <div onMouseEnter={() => sliderChange(1)} />
          <div onMouseEnter={() => sliderChange(2)} />
          <div onMouseEnter={() => sliderChange(3)} />
        </div>
        <div className="feedback-card"></div>
        <div className="feedback-card"></div>
        <div className="feedback-card"></div>
        <div className="feedback-card"></div>
        <Button />
      </div>
    </div>
  );
}

export default Feedback;
