import React from "react";
import "../../styles/Card.css";
function Card(props) {
  return (
    <div className="card-wrapper">
      <img src={props.src} alt="avatar" className="card-img" />
      <div className="card-content">
        <b>{props.title}</b>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default Card;
