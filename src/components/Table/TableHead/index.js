import React from "react";
import TableHeadItem from "../TableHeadItem";

function TableHead() {
  return (
    <thead className="table__head">
      <tr className="table__row">
        <TableHeadItem>ID</TableHeadItem>
        <TableHeadItem>First Name</TableHeadItem>
        <TableHeadItem>Last Name</TableHeadItem>
        <TableHeadItem>E-mail</TableHeadItem>
        <TableHeadItem>Phone</TableHeadItem>
      </tr>
    </thead>
  );
}

export default TableHead;
