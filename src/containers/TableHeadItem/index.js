import React from "react";
import { connect } from "react-redux";
import { sortAscend, sortDescend } from "../../actions";

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => {
  return {
    sortAscend: field => {dispatch(sortAscend(field))},
    sortDescend: field => {dispatch(sortDescend(field))}
  }
};

function TableHeadItem({ children, sortAscend, sortDescend }) {
  const handleSortAscend = () => {
    sortAscend("id");
  }

  const handleSortDescend = () => {
    sortDescend("id");
  }

  return (
    <th 
      className="table__item table__head-item"
      onClick={handleSortDescend}
    >
      {children}
    </th>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TableHeadItem);
