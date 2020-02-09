import React, { useEffect } from "react";
import { dataFetch } from "../../actions";
import { connect } from 'react-redux';
import TableHead from "../../components/TableHead";
import VisibleTableItems from "../VisibleTableItems";

const mapStateToProps = ({ dataCache, dataLoaded, dataLoadingFailed }) => {
  return {
    data: dataCache,
    dataLoaded: dataLoaded,
    dataLoadingFailed: dataLoadingFailed
  }
};

const mapDispatchToProps = dispatch => {
  return {
      getData: url => {dispatch(dataFetch(url))}
  };
};

export function Table({ dataUrl, dataLoaded, dataLoadingFailed, getData }) {
  useEffect(() => {
    getData(dataUrl);
  }, [getData, dataUrl]);

  if (dataLoaded) {
    return (
      <table className="table">
        <TableHead />
        <VisibleTableItems />
      </table>
    );
  } else if (dataLoadingFailed) {
    return (
      <p>Data loading failed!</p>
    );
  } else {
      return (
        <p>Data is loading...</p>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);