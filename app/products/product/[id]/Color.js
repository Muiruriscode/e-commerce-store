import React from "react";

const Color = ({ color }) => {
  return (
    <>
      <button
        className={`h-5 w-5 rounded-full`}
        style={{ backgroundColor: color }}
      ></button>
    </>
  );
};

export default Color;
