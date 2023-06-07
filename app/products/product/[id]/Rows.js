import React from "react";

const Rows = ({ value }) => {
  return (
    <tr className="bg-zinc-200 odd:bg-white border-spacing-3">
      <td>{value[0]}</td>
      <td>{value[1]}</td>
    </tr>
  );
};

export default Rows;
