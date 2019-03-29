import React from "react";
import ReactDOM from "react-dom";

import Turtle from "./Turtle";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Turtle />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
