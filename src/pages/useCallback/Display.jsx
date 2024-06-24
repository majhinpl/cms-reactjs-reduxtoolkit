import React from "react";

const Display = ({ text, displayValue }) => {
  console.log("Content from display");
  return (
    <div>
      <p>
        From display component, {text}, {displayValue}
      </p>
    </div>
  );
};

export default React.memo(Display);
