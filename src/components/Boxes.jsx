import React from "react";
const Boxes = ({ stylesArr }) => {
  const renderBoxes = () => {
    return stylesArr.map((style, index) => (
      <div index={index} style={style}></div>
    ));
  };
  return <div>{renderBoxes()}</div>;
};
export default Boxes;
