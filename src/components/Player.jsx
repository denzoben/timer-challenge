import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const [showPlayerName, setShowPlayerName] = useState(false);

  function handlePlayerNameChange(event) {
    setShowPlayerName(false);
    setPlayerName(event.target.value);
  }

  function handlePlayerName() {
    setShowPlayerName(true);
  }
  return (
    <section id="player">
      <h2>Welcome {showPlayerName ? playerName : "unknown entity"}</h2>
      <p>
        <input
          type="text"
          onChange={handlePlayerNameChange}
          value={playerName}
        />
        <button onClick={handlePlayerName}>Set Name</button>
      </p>
    </section>
  );
}
