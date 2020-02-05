import React from 'react';

function TableRow({children}) {
  return (
    <tr className="table__row">
      {children}
    </tr>
  );
}

export default TableRow;
