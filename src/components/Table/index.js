import React, { useEffect } from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { dataFetch, dataIsLoading } from "../../actions";
import { connect } from 'react-redux';
import "./table.scss";

const mapStateToProps = ({ data, dataLoaded, dataLoadingFailed}) => {
  return {
    data: data,
    dataLoaded: dataLoaded,
    dataLoadingFailed: dataLoadingFailed
  }
};

const mapDispatchToProps = dispatch => {
  return {
      getData: (url) => dispatch(dataFetch(url))
  };
};

function Table({ data, dataLoaded, dataLoadingFailed, getData }) {
  useEffect(() => {
    if (!dataLoadingFailed && !dataLoaded) {
      getData("http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}");
    }
  });

  if (dataLoaded) {
    return (
      <table className="table">
        <TableHead />
        <tbody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </TableRow>
        ))}
        </tbody>
      </table>
    );
  } else {
    return (
      <p>loading</p>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);

