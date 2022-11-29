import "./App.css";
import { Dropdown } from "./components/Dropdown";

const words = [
  "monitor",
  "program",
  "application",
  "keyboard",
  "javascript",
  "typescript",
  "gaming",
  "network",
];

import React from "react";

const App = () => {
  return (
    <div className="App">
      <h2>Header</h2>
      <Dropdown words={words} />
    </div>
  );
};

export default App;
