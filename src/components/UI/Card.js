import React from "react";

const Card = (props) => {
  return (
    <div className={`conatiner mx-auto bg-white rounded-lg shadow-xl ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
