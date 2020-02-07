import React from "react";
import { connect } from "react-redux";
import TableHeadItem from "../../containers/TableHeadItem";

export function TableHead() {
  return (
    <thead className="table__head">
      <tr className="table__row">
        <TableHeadItem field="id">ID <span className="table__filter">▼</span></TableHeadItem>
        <TableHeadItem field="firstName">First Name <span className="table__filter table__filter_ascend">▼</span></TableHeadItem>
        <TableHeadItem field="lastName">Last Name <span className="table__filter">▼</span></TableHeadItem>
        <TableHeadItem field="email">E-mail <span className="table__filter">▼</span></TableHeadItem>
        <TableHeadItem field="phone">Phone <span className="table__filter">▼</span></TableHeadItem>
      </tr>
    </thead>
  );
}

export default connect()(TableHead);
