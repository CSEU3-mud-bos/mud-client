import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Route component={Start} path="/" />
      <Route component={CreatePlayer} path="/create" />
      <Route component={Game} path="/game" />
    </div>
  );
}

export default App;
