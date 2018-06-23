import React, { Component } from "react";
import "./App.css";
import Wow from "./Hello";
// @ts-ignore I dunno why TS doesn't like the logo
import logo from "./logo.svg";

class App extends Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Wow msg="Typescript yay" />
        </header>
      </div>
    );
  }
}

export default App;
