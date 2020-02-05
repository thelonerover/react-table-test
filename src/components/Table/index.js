import React from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
// import { testData } from "../../testData";
import { dataFetch } from "../../actions";
import { connect } from 'react-redux';
import "./table.scss";

const mapStateToProps = ({ data, dataLoadingFailed, dataLoadingSuccess }) => {
  return {
    data: data,
    loadingFailed: dataLoadingFailed,
    loadingSuccess: dataLoadingSuccess
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dataFetch: (url) => dispatch(dataFetch(url))
  };
}

function Table() {
  return (
    <table className="table">
      <TableHead />
      <tbody>
        
      </tbody>
    </table>
  );
}

export default Table;

connect(mapStateToProps, mapDispatchToProps)(Table);

// {testData.map((item, index) => (
//   <TableRow key={index}>
//     <td className="table__item">{item.id}</td>
//     <td className="table__item">{item.firstName}</td>
//     <td className="table__item">{item.lastName}</td>
//     <td className="table__item">{item.email}</td>
//     <td className="table__item">{item.phone}</td>
//   </TableRow>
// ))}