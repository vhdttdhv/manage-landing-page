import React from "react";
import "../styles/Difference.css";
import Point from "./small-components/Point";

function Difference() {
  return (
    <div className="difference-wrapper">
      <div className="difference-text">
        <h2>What's different about Manage?</h2>
        <p>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="difference-point">
        <Point
          index="01"
          title="Track company-wide progress"
          text="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
        />
        <Point
          index="02"
          title="Advanced built-in reports"
          text="Set internal delivery estimates and track progress toward company goals. Our customizable dashboard helps you build out the reports you need to keep stakeholders informed."
        />
        <Point
          index="03"
          title="Everything you need in one place"
          text="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
        />
      </div>
    </div>
  );
}

export default Difference;
