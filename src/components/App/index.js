import React from "react";
import Table from "../../containers/Table";
import Pagination from "../../containers/Pagination";
import Info from "../../containers/Info";
import Filter from "../../containers/Filter";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Filter />
      <Table />
      <Pagination />
      <Info />
    </div>
  );
}

export default App;
