import React from "react";
import Boxes from "./components/Boxes";
import Card from "./components/Card";
import Avatar from "./components/Avatar";
import Counter from "./components/Counter";
import Text from "./components/Text";

const App = () => {
  const stylesArr = [
    { width: "200px", height: "100px", backgroundColor: "blue" },
    { width: "200px", height: "100px", backgroundColor: "purple" },
    { width: "200px", height: "100px", backgroundColor: "red" },
  ];
  return (
    <div>
      <h1>Task4</h1>
      <Counter />
      <hr></hr>
      <h1>Task3</h1>
      <Card>
        <Avatar
          src="https://is1-ssl.mzstatic.com/image/thumb/Iqw93OJgrXC2qojkikdLzA/1200x675mf.jpg"
          alt="Some Image"
        />
      </Card>
      <hr></hr>
      <h1>Task2</h1>
      <Boxes stylesArr={stylesArr} />
      <hr></hr>
      <Text />
    </div>
  );
};

export default App;
