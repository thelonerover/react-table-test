import React from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { testData } from "../../testData";
import "./table.scss";

function Table() {
  return (
    <table className="table">
      <TableHead />
      <tbody>
        {testData.map((item, index) => (
          <TableRow key={index}>
            <td className="table__item">{item.id}</td>
            <td className="table__item">{item.firstName}</td>
            <td className="table__item">{item.lastName}</td>
            <td className="table__item">{item.email}</td>
            <td className="table__item">{item.phone}</td>
          </TableRow>
        ))}
      </tbody>
    </table>
  );
}

export default Table;