import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function CreatePlayer() {
  const [input, setInput] = useState({
    name: ""
  });

  const history = useHistory();

  const handleChange = event => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    localStorage.setItem("player", input.name);
    setInput({ name: "" });
    history.push("/game");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={input.name}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreatePlayer;
