import React, { useEffect } from "react";
import { dataFetch } from "../../actions";
import { connect } from 'react-redux';
import TableHead from "./TableHead";
import VisibleTableItems from "../../containers/VisibleTableItems";
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

export function Table({ data, dataLoaded, dataLoadingFailed, getData }) {
  useEffect(() => {
    if (!dataLoadingFailed && !dataLoaded) {
      getData("https://5e3ae184f2cb300014390d21.mockapi.io/users");
    }
  });

  if (dataLoaded) {
    return (
      <table className="table">
        <TableHead />
        <VisibleTableItems />
      </table>
    );
  } else {
    return (
      <p>loading</p>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);