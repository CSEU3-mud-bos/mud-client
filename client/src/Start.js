import React from "react";
import { Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Start() {
  const handleClick = () => {
    localStorage.getItem("player")
      ? history.push("/game")
      : history.push("/create");
  };
  const history = useHistory();
  return <button onClick={handleClick}>Start</button>;
}

export default Start;
