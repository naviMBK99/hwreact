import React, { useState } from "react";

const Text = () => {
  const [text, setText] = useState("");
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <h1>Task1</h1>
      <p>{text}</p>
      <input type="text" value={text} onChange={handleTextChange} />
    </div>
  );
};

export default Text;
