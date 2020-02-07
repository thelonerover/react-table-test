import React, { useState } from "react";
import { connect } from "react-redux";
import { setSortedField, sortAscend, sortDescend } from "../../actions";

const mapStateToProps = state => {
  return {
    sortedField: state.sortedField
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSortedField: field => {dispatch(setSortedField(field))},
    sortAscend: field => {dispatch(sortAscend(field))},
    sortDescend: field => {dispatch(sortDescend(field))}
  }
};

function TableHeadItem({ field, children, sortAscend, sortDescend, setSortedField, sortedField }) {
  const [sortType, setSortType] = useState("unset");

  const handleClick = (field, sortType) => {
    changeType();
    setSortedField(field);
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
      className={sortedField === field ? "table__item table__head-item table__head-item_active" : "table__item table__head-item"}
      onClick={() => {handleClick(field, sortType)}}
    >
      {children}
      <span className={sortedField === field ? `table__sort table__sort_${sortType}` : "table__sort table__sort_unset"}>▼</span>
    </th>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TableHeadItem);
