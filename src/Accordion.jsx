import React from "react";

function Accordion({
  title = "title",
  description = "description",
  isOpen = false,
  underline = true,
  showWordCount = false,
  handleClick=()=>{},
}) {
  return (
    <details
      className="w-80 m-1 p-2 bg-stone-200 "
      open={isOpen}
      onClick={handleClick}
    >
      <summary
        className={`cursor-pointer font-bold hover:underline ${
          underline && "hover:underline"
        }`}
      >
        {title}{" "}
        <span className="font-normal text-stone-600">
          &mdash; {showWordCount && `${description.split(" ").length} words`}
        </span>
      </summary>
      <p className="text-stone-600">{description}</p>
    </details>
  );
}

export default Accordion;
