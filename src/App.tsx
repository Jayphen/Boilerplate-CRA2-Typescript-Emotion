import React, { Component } from "react";
import styled from "react-emotion";
import "./App.css";
import Wow from "./Hello";
// @ts-ignore I dunno why TS doesn't like the logo
import logo from "./logo.svg";

const Test = styled.div`
  color: pink;
  border-bottom: 3px solid rgba(255, 255, 255, 0.2);
  margin-top: 1rem;
`;

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
          <Test>also react-emotion</Test>
        </header>
      </div>
    );
  }
}

export default App;
