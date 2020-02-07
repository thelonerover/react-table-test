import React, { useState } from "react";
import TableHeadItem from "../../containers/TableHeadItem";

export default function TableHead() {

  return (
    <thead className="table__head">
      <tr className="table__row">
        <TableHeadItem field="id">ID</TableHeadItem>
        <TableHeadItem field="firstName">First Name</TableHeadItem>
        <TableHeadItem field="lastName">Last Name</TableHeadItem>
        <TableHeadItem field="email">E-mail</TableHeadItem>
        <TableHeadItem field="phone">Phone</TableHeadItem>
      </tr>
    </thead>
  );
}