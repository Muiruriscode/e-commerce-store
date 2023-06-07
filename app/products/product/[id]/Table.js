import React from "react";
import Rows from "./Rows";

const Table = ({ info, title }) => {
  const data = Object.entries(info);
  return (
    <div className="bg-zinc-200 py-2 px-5">
      <table className="table-fixed w-full">
        <thead>
          <tr>
            <th className="text-left">{title}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => (
            <Rows value={value} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
