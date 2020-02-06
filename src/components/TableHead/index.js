import React from "react";
import { connect } from "react-redux";
import { sortAscend, sortDescend } from "../../actions";
import TableHeadItem from "../../containers/TableHeadItem";

const mapStateToProps = state => {
}

const mapDispatchToProps = dispatch => {
}

export function TableHead({ sortAscend, sortDescend }) {
  const handleSortAscend = field => {
    sortAscend(field);
  }

  return (
    <thead className="table__head">
      <tr className="table__row">
        <TableHeadItem>ID <span className="table__filter">▼</span></TableHeadItem>
        <TableHeadItem>First Name <span className="table__filter table__filter_ascend">▼</span></TableHeadItem>
        <TableHeadItem>Last Name <span className="table__filter">▼</span></TableHeadItem>
        <TableHeadItem>E-mail <span className="table__filter">▼</span></TableHeadItem>
        <TableHeadItem>Phone <span className="table__filter">▼</span></TableHeadItem>
      </tr>
    </thead>
  );
}

export default connect()(TableHead);
