import { useState, useRef } from "react";

export default function Player() {
  let playerName = useRef();

  const [editedPlayerName, setEditedPlayerName] = useState("");
  // const [showPlayerName, setShowPlayerName] = useState(false);

  // function handlePlayerNameChange(event) {
  //   setShowPlayerName(false);
  //   setPlayerName(event.target.value);
  // }

  function handlePlayerName() {
    setEditedPlayerName(playerName.current.value);
    playerName.current.value = '';
  }
  return (
    <section id="player">
      <h2>Welcome {editedPlayerName ? playerName : "unknown entity"}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
        />
        <button onClick={handlePlayerName}>Set Name</button>
      </p>
    </section>
  );
}
