import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: Languages</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <h1>Hi Server 3003 I am another</h1>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
