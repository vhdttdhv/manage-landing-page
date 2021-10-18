import React from "react";
import "../../styles/Point.css";
function Point(props) {
  return (
    <div className="point-wrapper">
      <div className="point-header">
        <div className="point-index">
          <b>{props.index}</b>
        </div>
        <div className="point-title">
          <b>{props.title}</b>
        </div>
      </div>
      <p className="point-text">{props.text}</p>
    </div>
  );
}

export default Point;
