import React from "react";
import Button from "../Button";
import Table from "../Table";
import Pagination from "../../containers/Pagination";
import Info from "../Info";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Table />
      <Pagination />
    </div>
  );
}

export default App;
