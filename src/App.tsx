import React, { Component } from "react";
import styled from "react-emotion";
import "./App.css";
import Wow from "./Hello";
// @ts-ignore I dunno why TS doesn't like the logo
import logo from "./logo.svg";

const Emo = styled.div`
  background: pink;
  color: pink;
  background: rgba(0, 0, 0, 0.5);
  margin-top: 1rem;
  padding: 1rem;
  border: 3px solid #d26ac2;
  border-radius: 3px;
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
          <Wow msg="Includes Typescript" />
          <Emo>also react-emotion</Emo>
        </header>
      </div>
    );
  }
}

export default App;
