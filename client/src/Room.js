import React from "react";

function Room({ index, item, currentRoom }) {
  const columSet = y => {
    if (y === 6) {
      return 0;
    } else if (y === 5) {
      return 1;
    } else if (y === 4) {
      return 2;
    } else if (y === 3) {
      return 3;
    } else if (y === 2) {
      return 4;
    } else if (y === 1) {
      return 5;
    } else {
      return 6;
    }
  };
  return (
    <div
      style={{
        gridColumnStart: `${item.x + 1}`,
        gridRowStart: `${columSet(item.y) + 1}`,
        border: "1px solid black",
        margin: "10px",
        marginTop: "10px",
        padding: "10px"
      }}
    >
      {item.id === currentRoom.id ? "player" : ""}
    </div>
  );
}

export default Room;
