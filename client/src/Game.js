import React, { useEffect, useState } from "react";
import axios from "axios";

function Game() {
  const [rooms, setRooms] = useState([]);

  const fetchRooms = async () => {
    const { data } = await axios.get(
      "https://mud-server-8.herokuapp.com/api/rooms"
    );
    setRooms(data);
  };
  useEffect(() => {
    fetchRooms();
  }, []);

  return <div>{console.log(rooms)}</div>;
}

export default Game;
