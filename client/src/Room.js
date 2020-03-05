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
        gridRowStart: `${columSet(item.y) + 1}`
      }}
    >
      <div
        style={{
          display: "grid",

          alignContent: "center"
        }}
      >
        <p style={{ gridColumn: "1", gridRow: "2", width: "30px" }}>
          {item.w_to !== null && "---"}
        </p>

        <p
          style={{
            gridColumn: "2",
            gridRow: "2",
            height: "20px",
            width: "38px",
            border: "1px solid black",
            alignSelf: "center",
            marginTop: "10px",
            padding: "10px",
            justifySelf: "center"
          }}
        >
          {item.id === currentRoom.id ? "player" : ""}
        </p>
      </div>
    </div>
  );
}

export default Room;
