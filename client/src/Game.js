import React, { useEffect, useState } from "react";
import axios from "axios";
import Room from "./Room";

function Game() {
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState([]);
  const [currentRoomId, setCurrentRoomId] = useState(null);

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

  return (
    <div style={{ display: "grid" }}>
      {console.log(rooms)}
      {rooms?.map((item, index) => {
        return <Room item={item} index={index} currentRoom={currentRoom} />;
      })}

      <div>
        <p
          onClick={() => {
            if (currentRoom.n_to !== null) {
              localStorage.setItem("currentRoom", currentRoom.n_to);
              setCurrentRoomId(currentRoom.n_to);
            }
          }}
        >
          North
        </p>
        <p
          onClick={() => {
            if (currentRoom.s_to !== null) {
              localStorage.setItem("currentRoom", currentRoom.s_to);
              setCurrentRoomId(currentRoom.s_to);
            }
          }}
        >
          South
        </p>
        <p
          onClick={() => {
            console.log("hit");
            console.log(currentRoom);
            if (currentRoom.e_to !== null) {
              localStorage.setItem("currentRoom", currentRoom.e_to);
              setCurrentRoomId(currentRoom.e_to);
            }
          }}
        >
          East
        </p>
        <p
          onClick={() => {
            if (currentRoom.w_to !== null) {
              localStorage.setItem("currentRoom", currentRoom.w_to);
              setCurrentRoomId(currentRoom.w_to);
            }
          }}
        >
          West
        </p>
      </div>
    </div>
  );
}

export default Game;
