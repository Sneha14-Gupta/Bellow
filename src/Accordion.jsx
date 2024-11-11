import React from "react";

function Accordion({
  title = "title",
  description = "description",
  isOpen = false,
}) {
  return (
    <details className="w-80 m-1 p-2 bg-stone-200 " open={isOpen}>
      <summary className="cursor-pointer font-bold">{title}</summary>
      <p className="text-stone-600">{description}</p>
    </details>
  );
}

export default Accordion;
