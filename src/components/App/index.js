import React, { useState } from "react";
import Table from "../../containers/Table";
import Pagination from "../../containers/Pagination";
import Info from "../../containers/Info";
import Filter from "../../containers/Filter";
import InputForm from "../../containers/InputForm";
import "../../scss/main.scss";

const dataUrl = " http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"

const moreDataUrl = "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";

function App() {
  const [selectedDataUrl, setSelectedDataUrl] = useState("");
  const [urlSelected, setUrlSelected] = useState(false);
  

  return (
    <div className="app">
      <div className="container">
        {
          urlSelected ? 
          <div>
            <Filter />
            <InputForm />
            <Table dataUrl={selectedDataUrl} />
            <Pagination />
            <Info />
          </div>
          :
          <div>
            <button
              className="button button_outlined button_centered app__button"
              onClick={() => {
                setSelectedDataUrl(dataUrl);
                setUrlSelected(true);
              }}
            >Get some data</button>
            <button
              className="button button_outlined button_centered"
              onClick={() => {
                setSelectedDataUrl(moreDataUrl);
                setUrlSelected(true);
              }}
            >Get more data</button>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
