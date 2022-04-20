// import "./App.css";
import React from "react";
import UrlPart from "./components/UrlPart";
import UrlInput from "./components/UrlInput";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fullUrl: "abc" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ fullUrl: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <UrlInput
          value={this.state.fullUrl}
          handleChange={this.handleChange}
        ></UrlInput>
        <br />
        <UrlPart label={"Protocol"}></UrlPart>
        <UrlPart label={"Subdomain"}></UrlPart>
        <UrlPart label={"Domain"}></UrlPart>
        <br />
        <p>TLD</p>
        <p>Resource / Directory</p>
        <p>Query String + Value</p>
        <p>Query String + Value</p>
        <p>Query String + Value</p>
      </div>
    );
  }
}

export default App;
