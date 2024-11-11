import React from "react";
import Accordion from "./Accordion";

function Bellow() {
  const data = [
    {
      title: "react vs angular",
      description: "react is better than angular",
    },
    {
      title: "title2",
      description: "description2",
    },
    {
      title: "title3",
      description: "description3",
    },
  ];
  const accordions = [];
  for (let i = 0; i < data.length; i++) {
    accordions.push(
      <Accordion
        key={crypto.randomUUID()}
        title={data[i].title}
        description={data[i].description}
        isOpen={i === 0}
      />
    );
  }
  console.log(accordions);
  return (
    <div className="rounded-lg border-zinc-600 border-2 ">{accordions}</div>
  );
}

export default Bellow;
