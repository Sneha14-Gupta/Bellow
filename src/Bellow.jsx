import React from "react";
import Accordion from "./Accordion";

function Bellow({ data = [], filter = "" }) {
  // const accordions = data.map(({ title, description }) => {
  //   return (
  //     <Accordion
  //       key={crypto.randomUUID()}
  //       title={title}
  //       description={description}
  //     />
  //   );
  // });
  return (
    <div className="rounded-lg border-zinc-600 border-2 ">
      {data
        .filter((d) => d.title.toLowerCase().includes(filter))
        .map((d) => (
          <Accordion
            key={crypto.randomUUID()}
            title={d.title}
            description={d.description}
          />
        ))}

      {/* {data.map((d) => (
        <Accordion
          key={crypto.randomUUID()}
          title={d.title}
          description={d.description}
        />
      ))} */}
    </div>
  );
}

export default Bellow;
