import React, { useEffect, useState } from "react";
import axios from "axios";
import Room from "./Room";
import { useHistory } from "react-router-dom";

function Game() {
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState([]);
  const [currentRoomId, setCurrentRoomId] = useState(null);
  const [player, setPlayer] = useState(localStorage.getItem("player"));

  const history = useHistory();

  const fetchRooms = async () => {
    const { data } = await axios.get(
      "https://mud-server-8.herokuapp.com/api/rooms/"
    );
    setRooms(data);
  };

  const fetchCurrentRoom = async () => {
    const currentRoom = localStorage.getItem("currentRoom");
    if (currentRoom) {
      console.log("running");
      const { data } = await axios.get(
        `https://mud-server-8.herokuapp.com/api/rooms/${currentRoom}/`
      );
      setCurrentRoom(data);
    } else {
      const { data } = await axios.get(
        `https://mud-server-8.herokuapp.com/api/rooms/0/`
      );
      console.log("hit");
      console.log(data);
      setCurrentRoom(data);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, [currentRoom]);

  useEffect(() => {
    fetchCurrentRoom();
  }, [currentRoomId]);

  const clearPlayer = () => {
    localStorage.removeItem("currentRoom");
    localStorage.removeItem("player");
    history.push("/create");
  };

  return (
    <div style={{ display: "grid" }}>
      <p style={{ cursor: "pointer" }} onClick={clearPlayer}>
        Clear Player
      </p>
      <div style={{ display: "grid" }}>
        <h2 style={{ justifySelf: "center", fontSize: "40px" }}>
          {`${player} has entered `} {currentRoom.title}
        </h2>
        <h3 style={{ justifySelf: "center", fontSize: "25px", color: "red" }}>
          {currentRoom.description}
        </h3>
      </div>
      <div style={{ display: "grid" }}>
        {console.log(rooms)}
        {rooms?.map((item, index) => {
          return <Room item={item} index={index} currentRoom={currentRoom} />;
        })}
      </div>

      <div
        style={{
          display: "grid",
          justifyContent: "center",
          justifySelf: "center",
          gridTemplateColumns: "repeat(4,1fr)"
        }}
      >
        <button
          onClick={() => {
            if (currentRoom.n_to !== null) {
              localStorage.setItem("currentRoom", currentRoom.n_to);
              setCurrentRoomId(currentRoom.n_to);
            }
          }}
          style={{
            marginLeft: "30px",
            border: "1px solid black",
            padding: "10px",
            borderRadius: "18%"
          }}
        >
          North
        </button>
        <button
          onClick={() => {
            if (currentRoom.s_to !== null) {
              localStorage.setItem("currentRoom", currentRoom.s_to);
              setCurrentRoomId(currentRoom.s_to);
            }
          }}
          style={{
            marginLeft: "30px",
            border: "1px solid black",
            padding: "10px",
            borderRadius: "18%"
          }}
        >
          South
        </button>
        <button
          onClick={() => {
            console.log("hit");
            console.log(currentRoom);
            if (currentRoom.e_to !== null) {
              localStorage.setItem("currentRoom", currentRoom.e_to);
              setCurrentRoomId(currentRoom.e_to);
            }
          }}
          style={{
            marginLeft: "30px",
            border: "1px solid black",
            padding: "10px",
            borderRadius: "18%"
          }}
        >
          East
        </button>
        <button
          onClick={() => {
            if (currentRoom.w_to !== null) {
              localStorage.setItem("currentRoom", currentRoom.w_to);
              setCurrentRoomId(currentRoom.w_to);
            }
          }}
          style={{
            marginLeft: "30px",
            border: "1px solid black",
            padding: "10px",
            borderRadius: "18%"
          }}
        >
          West
        </button>
      </div>
    </div>
  );
}

export default Game;
