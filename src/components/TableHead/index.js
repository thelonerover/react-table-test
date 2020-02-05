import React from "react";

function TableHead() {
  return (
    <thead className="table__head">
      <tr>
        <th className="table__head-item">ID</th>
        <th className="table__head-item">First Name</th>
        <th className="table__head-item">Last Name</th>
        <th className="table__head-item">E-mail</th>
        <th className="table__head-item">Phone</th>
      </tr>
    </thead>
  );
}

export default TableHead;
