import React from "react";
import Button from "../Button";
import Table from "../Table";
import Pagination from "../../containers/Pagination";
import Info from "../../containers/Info";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Table />
      <Pagination />
      <Info />
    </div>
  );
}

export default App;
