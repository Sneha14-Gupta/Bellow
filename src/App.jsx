import React from "react";
import Bellow from "./Bellow";
import items from "../assets/items.json";

function App() {
  // const debates = [
  //   {
  //     title: "react vs angular",
  //     description: "react is better than angular",
  //   },
  //   {
  //     title: "analytics",
  //     description: "analytics is used to understand user behavior",
  //   },
  //   {
  //     title: "Data Structures",
  //     description: "data structures are used to store data",
  //   },
  // ];
  return (
    <div className="flex items-center justify-center h-screen">
      <Bellow data={items} filter="" isOpen={false} underline={false} showWordCount={true} handleClick={() => {alert("clicked")}} />
    </div>
  );
}

export default App;
