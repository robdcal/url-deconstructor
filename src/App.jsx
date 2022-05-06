import "./App.css";
import React, { useState, useReducer } from "react";
import UrlInput from "./components/UrlInput";
import UrlParts from "./components/UrlParts";

const deconstructUrl = (prevState, action) => {
  const url = new URL(action);
  return {
    hostname: url.hostname ? url.hostname : null,
    pathname: url.pathname ? url.pathname : null,
    hash: url.hash ? url.hash : null,
    search: url.search ? url.search : null,
    searchParams: url.searchParams ? url.searchParams : null,
  };
};

const App = () => {
  const [Url, setUrl] = useState(
    "https://docs.google.com/spreadsheets/d/1gUhbq_06AR6bW8wRofyi4N3jjJckpMyikUNGnitJrpE/edit#gid=381961244"
  );
  const [deconstructedUrl, dispatchDeconstructor] = useReducer(
    deconstructUrl,
    {}
  );

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatchDeconstructor(Url);
  };

  return (
    <div className="App">
      <UrlInput
        inputValue={Url}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      ></UrlInput>
      <br />
      <UrlParts deconstructedUrl={deconstructedUrl} />
    </div>
  );
};

export default App;
