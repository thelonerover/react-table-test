import React from 'react';

function TableRow({ children, onClick }) {
  return (
    <tr className="table__row" onClick={onClick}>
      {children}
    </tr>
  );
}

export default TableRow;
