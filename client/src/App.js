import React from "react";
import { Route } from "react-router-dom";
import Start from "./Start";
import CreatePlayer from "./CreatePlayer";
import Game from "./Game";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ width: "1000px" }}>
      <Route component={Start} exact path="/" />
      <Route component={CreatePlayer} path="/create" />
      <Route component={Game} path="/game" />
    </div>
  );
}

export default App;
