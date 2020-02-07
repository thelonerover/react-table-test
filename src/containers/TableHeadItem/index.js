import React from "react";
import { connect } from "react-redux";
import { sortAscend, sortDescend } from "../../actions";

const mapDispatchToProps = dispatch => {
  return {
    sortAscend: field => {dispatch(sortAscend(field))},
    sortDescend: field => {dispatch(sortDescend(field))}
  }
};

function TableHeadItem({ field, children, sortAscend, sortDescend }) {
  let ascend = true;

  const handleClick = field => {
    ascend ? sortAscend(field) : sortDescend(field);
    ascend = !ascend;
  }

  return (
    <th 
      className="table__item table__head-item"
      onClick={() => {handleClick(field)}}
    >
      {children}
    </th>
  );
}

export default connect(null, mapDispatchToProps)(TableHeadItem);
