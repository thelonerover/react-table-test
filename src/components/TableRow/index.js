import React from "react";
import PropTypes from "prop-types";

function TableRow({ children, onClick }) {
  return (
    <tr className="table__row" onClick={onClick}>
      {children}
    </tr>
  );
}

TableRow.propTypes = {
  children: PropTypes.array,
  onClick: PropTypes.func
}

export default TableRow;
