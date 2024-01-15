import React from "react";

const Card = ({ children }) => {
  const cardStyle = {
    border: "2px solid grey",
    padding: "30px",
    margin: "10px",
  };

  return <div style={cardStyle}>{children}</div>;
};

export default Card;
