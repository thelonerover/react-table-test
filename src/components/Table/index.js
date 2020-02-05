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
      getData("https://5e3ae184f2cb300014390d21.mockapi.io/users");
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

