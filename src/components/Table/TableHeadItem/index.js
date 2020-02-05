import React from "react";

function TableHeadItem({children}) {
  return (
    <th className="table__item table__head-item">
      {children}
    </th>
  );
}

export default TableHeadItem;
