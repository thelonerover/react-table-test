import React from "react";
import TableHead from "../TableHead";
import TableRow from "../TableRow";
import { testData } from "../../testData";

function Table() {
  return (
    <table className="table">
      <TableHead />
      <tbody>
        {testData.map((item, index) => (
          <TableRow key={index}>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </TableRow>
        ))}
      </tbody>
    </table>
  );
}

export default Table;