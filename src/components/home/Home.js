import React, { useContext } from "react";
import { OnBench, OnCourt, Player } from "./assets/StyledElements";
import { TeamDispatch } from "../../App";

const Home = ({ team: { teamName, players } }) => {
  const dispatch = useContext(TeamDispatch);

  const handleDelete = i => {
    dispatch({ type: "REMOVE_PLAYER", payload: i });
  };

  const handleRotate = () => {
    dispatch({ type: "ROTATE_PLAYERS", payload: "" });
  };

  const handlePosition = val => {
    switch (val) {
      case "s":
        return "Setter";
      case "mh":
        return "Middle Hitter";
      case "oh":
        return "Outside Hitter";
    }
  };

  return (
    <div>
      <h1>{teamName ? teamName : "Enter Team Name"}</h1>

      <h1>On Court</h1>
      <OnCourt>
        {players.slice(0, 6).map((player, i) => (
          <Player key={i} swappable={player.swappable} id={player.id}>
            <button onClick={() => handleDelete(player.id)}>X</button>
            {player.name}, {player.gender}
            <p>{handlePosition(player.position)}</p>
          </Player>
        ))}
      </OnCourt>
      <OnBench>
        <h2>On Bench</h2>
        {players.slice(5, players.length - 1).map((player, i) => (
          <Player key={i} swappable={player.swappable}>
            <p>{player.name}</p>
            <p>{player.gender}</p>
          </Player>
        ))}
      </OnBench>

      <div>
        <button onClick={handleRotate}>Rotate Players</button>
      </div>
    </div>
  );
};

export default Home;
