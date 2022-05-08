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
    searchParams: url.searchParams ? url.searchParams : [],
  };
};

const App = () => {
  const [Url, setUrl] = useState(""); // https://id.matillion.com/login?state=hKFo2SBtaVVBNTJ2bERUNDREc0NWLVE2T2J6U0ZNQVdPYjE1baFupWxvZ2luo3RpZNkgWFhtX25hUktmSER5N0ptVmVXbmZISEw2bDVDQ3BOVVKjY2lk2SB4dFU3MXhkc0w2TVhFZjVsenBPRHZkRkd2WngwMW9mTw&client=xtU71xdsL6MXEf5lzpODvdFGvZx01ofO&protocol=oauth2&audience=https%3A%2F%2Fapi.matillion.com&redirect_uri=https%3A%2F%2Fhub.matillion.com%3FreturnTo%3DeyJvcmlnaW4iOiJodHRwczovL2RhdGFsb2FkZXIubWF0aWxsaW9uLmNvbSIsInBhdGhuYW1lIjoiL3JlZ2lzdGVyIiwic2VhcmNoIjoiIn0%3D&pageBranding=mdl-default&scope=openid%20profile%20email&response_type=code&response_mode=query&nonce=emdIfmVZUjNWMTZ%2Ba0JZTmNJYklQX2FfVFRkMm9hUUhwWW90OUtCMFh2WQ%3D%3D&code_challenge=b_I1Nb_AxOUygfrE0bnArWvir0TELLeqFNBfRdn4j4E&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtcmVhY3QiLCJ2ZXJzaW9uIjoiMS41LjAifQ%3D%3D
  const [active, setActive] = useState(true);
  const [deconstructedUrl, dispatchDeconstructor] = useReducer(deconstructUrl, {
    hostname: null,
    pathname: null,
    hash: null,
    search: null,
    searchParams: [],
  });

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    if (event.target[0].value) {
      setActive(false);
      dispatchDeconstructor(Url);
    } else {
      setActive(true);
    }
  };

  const headerStyling = {
    minHeight: active ? "100vh" : "40vh",
    margin: active ? "0rem" : "4rem 0",
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
          active={active}
        ></UrlInput>
      </header>
      <UrlParts deconstructedUrl={deconstructedUrl} />
    </div>
  );
};

export default App;
