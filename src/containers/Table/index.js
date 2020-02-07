import React, { useEffect } from "react";
import { dataFetch, setDataCache, setVisibleData } from "../../actions";
import { connect } from 'react-redux';
import TableHead from "../../components/TableHead";
import VisibleTableItems from "../VisibleTableItems";
import "./table.scss";

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

const dataUrl = "https://5e3ae184f2cb300014390d21.mockapi.io/users";

const biggerDataUrl = "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";

export function Table({ data, dataLoaded, dataLoadingFailed, getData }) {
  useEffect(() => {
    getData(dataUrl);
  }, []);

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