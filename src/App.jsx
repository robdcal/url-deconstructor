import "./App.css";
import React, { useState, useReducer } from "react";
import UrlInput from "./components/UrlInput";
import UrlParts from "./components/UrlParts";

// reducer for storing URL data breakdown
const deconstructUrl = (prevState, action) => {
  const url = action;
  return {
    hostname: url.hostname ? url.hostname : null,
    pathname: url.pathname ? url.pathname : null,
    hash: url.hash ? url.hash : null,
    search: url.search ? url.search : null,
    searchParams: url.searchParams ? url.searchParams : [],
  };
};

const App = () => {
  const [Url, setUrl] = useState("");
  const [active, setActive] = useState(false);
  const [error, setError] = useState("");
  const [deconstructedUrl, dispatchDeconstructor] = useReducer(deconstructUrl, {
    hostname: null,
    pathname: null,
    hash: null,
    search: null,
    searchParams: [],
  });

  const handleChange = (event) => {
    setUrl(event.target.value);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const url = new URL(Url);
      dispatchDeconstructor(url);
      setActive(true);
    } catch (error) {
      setError("Please enter a valid URL.");
      setActive(false);
    }
  };

  const headerStyling = {
    minHeight: active ? "40vh" : "100vh",
    margin: active ? "4rem 0" : "0",
  };

  return (
    <div className="App">
      <header className="hero" style={headerStyling}>
        <h1>URL Deconstructor</h1>
        <p>A simple tool for breaking down complex URLs.</p>
        <UrlInput
          inputValue={Url}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          error={error}
        ></UrlInput>
      </header>
      <UrlParts deconstructedUrl={deconstructedUrl} />
    </div>
  );
};

export default App;
