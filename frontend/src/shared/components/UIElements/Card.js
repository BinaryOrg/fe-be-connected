import React from "react";

import "./Card.css";

const Card = (props) => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {/* props.children used to make the Card JSX component usable as wrapper */}
      {props.children}
    </div>
  );
};

export default Card;
