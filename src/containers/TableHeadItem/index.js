import React, { useState } from "react";
import { connect } from "react-redux";
import { sortAscend, sortDescend } from "../../actions";

const mapDispatchToProps = dispatch => {
  return {
    sortAscend: field => {dispatch(sortAscend(field))},
    sortDescend: field => {dispatch(sortDescend(field))}
  }
};

function TableHeadItem({ field, children, sortAscend, sortDescend }) {
  const [sortType, setSortType] = useState("unset");

  const handleClick = (field, sortType) => {
    sortType === "ascend" ? sortAscend(field) : sortDescend(field);
  }

  const changeType = () => {
    switch(sortType) {
      case "ascend":
        setSortType("descend");
        break;
      case "descend":
        setSortType("ascend");
        break;
      default: 
        setSortType("ascend");
        break;
    }
  }

  return (
    <th 
      className="table__item table__head-item"
      onClick={() => {
        changeType();
        handleClick(field, sortType);
      }}
    >
      {children}
      <span className={`table__sort table__sort_${sortType}`}>▼</span>
    </th>
  );
}

export default connect(null, mapDispatchToProps)(TableHeadItem);
